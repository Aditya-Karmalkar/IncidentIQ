import uuid
import re
import hashlib
from typing import List, Dict, Any, Optional
from sqlalchemy.orm import Session
try:
    from backend.app.models.models import Ticket, Resolution, AgentRun, KnowledgeFeedback
    from backend.app.schemas.schemas import TicketCreate
except ImportError:
    from app.models.models import Ticket, Resolution, AgentRun, KnowledgeFeedback
    from app.schemas.schemas import TicketCreate

def extract_symptoms(text: str) -> List[str]:
    """
    Extracts key technical symptoms, error signatures, and codes from text.
    High-specificity technical failure patterns are prioritized before generic HTTP codes.
    """
    symptoms = []
    text_lower = text.lower()

    # High-specificity technical patterns
    patterns = {
        "pool_exhaustion": r"(pool\s+exhausted|connection\s+timeout|hikari|max_connections|connection\s+leak)",
        "memory_oom": r"(oom|out\s+of\s+memory|heap\s+space|gc\s+overhead|sigkill)",
        "rate_limited": r"(rate\s+limit|too\s+many\s+requests|429|token\s+bucket|throttle)",
        "idempotency_conflict": r"(idempotency|duplicate\s+transaction|replay|double\s+charge)",
        "tls_cert_drift": r"(tls|certificate\s+expired|ssl|handshake_failure|x509)",
        "auth_token_drift": r"(jwt|expired\s+token|invalid\s+signature|jwks|oauth\s+state)",
        "cors_origin_mismatch": r"(cors|access-control-allow-origin|preflight|blocked\s+by\s+cors)",
        "kafka_partition_lag": r"(consumer\s+lag|rebalance|partition|offset\s+commit|kafka)",
        "stripe_gateway_timeout": r"(stripe|payment\s+gateway|504\s+gateway|capture_timeout)"
    }

    for name, pattern in patterns.items():
        if re.search(pattern, text_lower):
            symptoms.append(name)

    # Status codes (secondary)
    codes = re.findall(r"\b(4\d{2}|5\d{2})\b", text)
    for code in set(codes):
        symptoms.append(f"HTTP_{code}")

    if not symptoms:
        words = re.findall(r"[a-zA-Z]{4,}", text_lower)
        top_words = [w for w in words if w not in {"error", "issue", "problem", "ticket", "failed", "when", "system", "please"}][:3]
        symptoms.extend(top_words)

    return list(dict.fromkeys(symptoms))


def generate_fingerprint(title: str, description: str, category: Optional[str] = None) -> str:
    """
    Normalizes technical attributes into a deterministic incident fingerprint:
    format: <category>:<primary_symptom>:<pattern_hash>
    """
    combined = f"{title} {description}"
    symptoms = extract_symptoms(combined)
    cat = (category or "general").lower().replace(" ", "_").replace("-", "_")

    primary_sym = symptoms[0] if symptoms else "generic_fault"
    # Deterministic short hash of canonical keywords
    sig_content = f"{cat}:{':'.join(sorted(symptoms))}"
    sig_hash = hashlib.md5(sig_content.encode("utf-8")).hexdigest()[:8]

    return f"{cat}:{primary_sym}:{sig_hash}"


class TicketService:
    @staticmethod
    def create_ticket(db: Session, ticket_in: TicketCreate) -> Ticket:
        ticket_id = f"inc-{uuid.uuid4().hex[:6]}"
        symptoms = extract_symptoms(f"{ticket_in.title} {ticket_in.description}")
        fingerprint = generate_fingerprint(ticket_in.title, ticket_in.description, ticket_in.category)

        db_ticket = Ticket(
            id=ticket_id,
            title=ticket_in.title,
            description=ticket_in.description,
            category=ticket_in.category or "Infrastructure",
            severity=ticket_in.severity or "medium",
            fingerprint=fingerprint,
            status="open",
            symptoms=symptoms
        )
        db.add(db_ticket)
        db.commit()
        db.refresh(db_ticket)
        return db_ticket

    @staticmethod
    def get_ticket(db: Session, ticket_id: str) -> Optional[Ticket]:
        return db.query(Ticket).filter(Ticket.id == ticket_id).first()

    @staticmethod
    def list_tickets(
        db: Session,
        status: Optional[str] = None,
        category: Optional[str] = None,
        severity: Optional[str] = None,
        limit: int = 100
    ) -> List[Ticket]:
        q = db.query(Ticket)
        if status:
            q = q.filter(Ticket.status == status)
        if category:
            q = q.filter(Ticket.category == category)
        if severity:
            q = q.filter(Ticket.severity == severity)
        return q.order_by(Ticket.created_at.desc()).limit(limit).all()

ticket_service = TicketService()
