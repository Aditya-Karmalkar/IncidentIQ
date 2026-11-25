import time
import uuid
import datetime
from typing import Dict, Any, List
from sqlalchemy.orm import Session
try:
    from backend.app.models.models import Ticket, AgentRun
    from backend.app.services.meko_service import meko_service
    from backend.app.services.ticket_service import extract_symptoms, generate_fingerprint
except ImportError:
    from app.models.models import Ticket, AgentRun
    from app.services.meko_service import meko_service
    from app.services.ticket_service import extract_symptoms, generate_fingerprint

class TriageAgent:
    """
    Triage Agent:
    - Parses ticket text.
    - Classifies category and severity.
    - Extracts technical symptoms.
    - Generates normalized incident fingerprint.
    - Queries Meko context for similar historical incidents ('search before solve').
    """

    def __init__(self):
        self.name = "triage"

    def run(self, db: Session, ticket: Ticket) -> Dict[str, Any]:
        start_time = time.perf_counter()

        symptoms = extract_symptoms(f"{ticket.title} {ticket.description}")
        fingerprint = generate_fingerprint(ticket.title, ticket.description, ticket.category)

        # Update ticket if needed
        ticket.symptoms = symptoms
        ticket.fingerprint = fingerprint

        # Search Meko shared operational context
        context_query = f"{ticket.title} {' '.join(symptoms)}"
        meko_hits = meko_service.search_context(
            query=context_query,
            category=ticket.category,
            fingerprint=fingerprint,
            top_k=5
        )

        duration_ms = round((time.perf_counter() - start_time) * 1000, 2)

        # Token telemetry simulation based on ticket payload and retrieved context
        input_tokens = len(ticket.title.split()) * 4 + len(ticket.description.split()) * 4 + 180
        output_tokens = len(symptoms) * 12 + len(meko_hits) * 45 + 120

        evidence = {
            "symptoms_extracted": symptoms,
            "normalized_fingerprint": fingerprint,
            "meko_datapack_id": meko_service.datapack_id,
            "meko_hits_count": len(meko_hits),
            "top_similarity": meko_hits[0]["relevance_score"] if meko_hits else 0.0,
            "triage_reasoning": f"Incident categorized under {ticket.category} with severity {ticket.severity}. Extracted {len(symptoms)} technical signatures."
        }

        agent_run = AgentRun(
            id=f"run-tri-{uuid.uuid4().hex[:8]}",
            ticket_id=ticket.id,
            agent_name=self.name,
            execution_status="completed",
            input_tokens=input_tokens,
            output_tokens=output_tokens,
            execution_time_ms=duration_ms,
            evidence=evidence,
            completed_at=datetime.datetime.now(datetime.timezone.utc)
        )
        db.add(agent_run)
        db.commit()

        return {
            "category": ticket.category,
            "severity": ticket.severity,
            "symptoms": symptoms,
            "fingerprint": fingerprint,
            "meko_hits": meko_hits,
            "evidence": evidence,
            "agent_run_id": agent_run.id,
            "input_tokens": input_tokens,
            "output_tokens": output_tokens,
            "duration_ms": duration_ms
        }

triage_agent = TriageAgent()
