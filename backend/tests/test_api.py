import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))

from backend.app.database import SessionLocal, Base, engine
from backend.app.api.endpoints import (
    seed_database, list_tickets, create_ticket, get_ticket_details,
    investigate_ticket, get_ticket_timeline, list_pending_knowledge_feedbacks,
    approve_knowledge, reject_knowledge, get_analytics, run_benchmark
)
from backend.app.schemas.schemas import TicketCreate, ApprovalAction

@pytest.fixture(scope="module")
def db():
    Base.metadata.create_all(bind=engine)
    session = SessionLocal()
    yield session
    session.close()

def test_seed_and_list_tickets(db):
    res = seed_database(db=db)
    assert res["status"] == "success"
    tickets = list_tickets(db=db)
    assert len(tickets) >= 30

def test_create_ticket_and_fingerprint(db):
    ticket_in = TicketCreate(
        title="SendGrid Webhook ECDSA Signature Failure",
        description="ECDSA signature verification failed for X-Twilio-Email-Event-Webhook-Signature on webhook ingest listener",
        category="Third-party Integration Errors",
        severity="high"
    )
    ticket = create_ticket(ticket_in, db=db)
    assert ticket.id.startswith("inc-")
    assert ticket.status == "open"
    assert "integration" in ticket.fingerprint or "third_party" in ticket.fingerprint

def test_investigation_approval_and_meko_reuse(db):
    # Step 1: Create initial ticket
    ticket_in = TicketCreate(
        title="HikariPool checkout connection timeout",
        description="Connection is not available, request timed out after 30005ms active=50 idle=0 waiting=120",
        category="Database Connection Failures",
        severity="critical"
    )
    t1 = create_ticket(ticket_in, db=db)

    # Step 2: Run multi-agent investigation DAG
    inv_res = investigate_ticket(t1.id, db=db)
    assert inv_res["ticket"].status == "pending_approval"
    assert inv_res["resolution"].verification_status == "verified"
    fb_id = inv_res["feedback_id"]

    # Step 3: Check pending approvals queue
    pending = list_pending_knowledge_feedbacks(db=db)
    assert any(item["feedback"].id == fb_id for item in pending)

    # Step 4: Human SRE Gate - Approve solution and promote to Meko memory
    appr = approve_knowledge(fb_id, ApprovalAction(reviewer="Senior SRE Alex"), db=db)
    assert appr["status"] == "approved"
    assert "meko_memory_id" in appr
    reused_memory_id = appr["meko_memory_id"]

    # Step 5: Mode B Recurring Incident - Create another ticket with different wording
    recurring_ticket_in = TicketCreate(
        title="Checkout database pool exhausted during midnight flash sale",
        description="Customers seeing 500 error on place order. Hikari connection timeout active=50",
        category="Database Connection Failures",
        severity="critical"
    )
    t2 = create_ticket(recurring_ticket_in, db=db)
    inv_res2 = investigate_ticket(t2.id, db=db)

    # Verify Meko 'search before solve' reuse
    assert inv_res2["resolution"].reused_from_memory_id is not None
    assert inv_res2["resolution"].reused_from_memory_id == reused_memory_id
    assert "Verified Remediation Protocol" in inv_res2["resolution"].recommended_solution

def test_timeline_and_analytics(db):
    tickets = list_tickets(db=db)
    ticket_id = tickets[0].id
    timeline = get_ticket_timeline(ticket_id, db=db)
    assert "timeline" in timeline

    analytics = get_analytics(db=db)
    assert analytics["total_tickets"] > 0
    assert "knowledge_reuse_rate" in analytics
    assert "categories_breakdown" in analytics

def test_benchmark_suite(db):
    bench = run_benchmark(sample_size=6, db=db)
    assert "comparative_gains" in bench
    assert bench["comparative_gains"]["token_reduction_pct"] > 30.0
