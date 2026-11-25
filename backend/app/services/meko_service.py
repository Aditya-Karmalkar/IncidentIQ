import os
import json
import uuid
import datetime
import re
from typing import List, Dict, Any, Optional
import httpx

MEKO_API_URL = os.getenv("MEKO_API_URL", "https://api.meko.ai/v1")
MEKO_API_KEY = os.getenv("MEKO_API_KEY", "")
MEKO_DATAPACK_ID = os.getenv("MEKO_DATAPACK_ID", "incidentiq-core-datapack")

PERSISTENT_MEMORY_FILE = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    "..", "data", "knowledge", "meko_memories.json"
)

class MekoService:
    def __init__(self):
        self.api_key = MEKO_API_KEY
        self.datapack_id = MEKO_DATAPACK_ID
        self.memory_file = os.path.abspath(PERSISTENT_MEMORY_FILE)
        self._ensure_storage()

    def _ensure_storage(self):
        os.makedirs(os.path.dirname(self.memory_file), exist_ok=True)
        if not os.path.exists(self.memory_file):
            with open(self.memory_file, "w", encoding="utf-8") as f:
                json.dump([], f, indent=2)

    def _load_local_memories(self) -> List[Dict[str, Any]]:
        try:
            with open(self.memory_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []

    def _save_local_memories(self, memories: List[Dict[str, Any]]):
        with open(self.memory_file, "w", encoding="utf-8") as f:
            json.dump(memories, f, indent=2)

    def search_context(self, query: str, category: Optional[str] = None, fingerprint: Optional[str] = None, top_k: int = 5) -> List[Dict[str, Any]]:
        """
        Executes 'search before solve' against Meko context.
        Attempts Meko API first if key configured; falls back to persistent local Meko index.
        """
        if self.api_key:
            try:
                with httpx.Client(timeout=4.0) as client:
                    resp = client.post(
                        f"{MEKO_API_URL}/datapacks/{self.datapack_id}/context_search",
                        headers={"Authorization": f"Bearer {self.api_key}"},
                        json={"query": query, "category": category, "fingerprint": fingerprint, "limit": top_k}
                    )
                    if resp.status_code == 200:
                        return resp.json().get("results", [])
            except Exception:
                pass # Gracefully fall back to local store

        # High-fidelity local lexical + fingerprint matcher
        memories = self._load_local_memories()
        scored_results = []
        tokens = set(re.findall(r"\w+", (query or "").lower()))

        for mem in memories:
            score = 0.0
            mem_fp = mem.get("fingerprint") or ""
            fp_parts = fingerprint.split(":") if fingerprint else []
            mem_parts = mem_fp.split(":") if mem_fp else []

            # Fingerprint matching logic
            if fingerprint and mem_fp == fingerprint:
                score += 0.85
            elif len(fp_parts) >= 2 and len(mem_parts) >= 2 and fp_parts[0] == mem_parts[0] and fp_parts[1] == mem_parts[1]:
                # Matches same category and primary technical symptom
                score += 0.65
            elif len(fp_parts) >= 1 and len(mem_parts) >= 1 and fp_parts[0] == mem_parts[0]:
                score += 0.25

            # If symptom matches anywhere in memory fingerprint or title
            if len(fp_parts) >= 2 and fp_parts[1] in mem_fp:
                score += 0.20

            # Category match
            if category and mem.get("category", "").lower() == category.lower():
                score += 0.15

            # Textual overlap
            mem_text = f"{mem.get('title', '')} {mem.get('root_cause', '')} {mem.get('recommended_solution', '')}".lower()
            mem_tokens = set(re.findall(r"\w+", mem_text))
            if tokens and mem_tokens:
                intersection = tokens.intersection(mem_tokens)
                jaccard = len(intersection) / len(tokens.union(mem_tokens))
                score += jaccard * 0.45

            # Normalize to max 0.99
            final_score = min(round(score, 3), 0.99)
            if final_score >= 0.20:
                scored_results.append({
                    **mem,
                    "relevance_score": final_score
                })

        scored_results.sort(key=lambda x: x["relevance_score"], reverse=True)
        return scored_results[:top_k]

    def add_memory(
        self,
        title: str,
        root_cause: str,
        recommended_solution: str,
        category: str,
        fingerprint: str,
        source_ticket_id: str,
        approved_by: str = "Lead SRE"
    ) -> Dict[str, Any]:
        """
        Promotes verified solution into Meko persistent memory.
        """
        memory_id = f"meko-mem-{uuid.uuid4().hex[:8]}"
        created_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

        record = {
            "id": memory_id,
            "datapack_id": self.datapack_id,
            "title": title,
            "root_cause": root_cause,
            "recommended_solution": recommended_solution,
            "category": category,
            "fingerprint": fingerprint,
            "source_ticket_id": source_ticket_id,
            "approved_by": approved_by,
            "verified_fix": True,
            "created_at": created_at,
            "provenance": {
                "system": "IncidentIQ",
                "dag_node": "verification_agent",
                "human_gate_passed": True,
                "timestamp": created_at
            }
        }

        # Sync with remote Meko API if configured
        if self.api_key:
            try:
                with httpx.Client(timeout=4.0) as client:
                    client.post(
                        f"{MEKO_API_URL}/datapacks/{self.datapack_id}/memories",
                        headers={"Authorization": f"Bearer {self.api_key}"},
                        json=record
                    )
            except Exception:
                pass

        # Persist locally
        memories = self._load_local_memories()
        # Avoid exact duplicate fingerprints from same ticket
        memories = [m for m in memories if not (m.get("fingerprint") == fingerprint and m.get("source_ticket_id") == source_ticket_id)]
        memories.insert(0, record)
        self._save_local_memories(memories)

        return record

    def list_memories(self) -> List[Dict[str, Any]]:
        return self._load_local_memories()

meko_service = MekoService()
