import uuid
import datetime
from typing import Dict, Any
from sqlalchemy.orm import Session
try:
    from backend.app.models.models import Ticket, Resolution, KnowledgeFeedback, AgentRun
    from backend.app.agents.triage import triage_agent
    from backend.app.agents.resolution import resolution_agent
    from backend.app.agents.verification import verification_agent
except ImportError:
    from app.models.models import Ticket, Resolution, KnowledgeFeedback, AgentRun
    from app.agents.triage import triage_agent
    from app.agents.resolution import resolution_agent
    from app.agents.verification import verification_agent

class InvestigationWorkflow:
    """
    Multi-Agent DAG Workflow Orchestrator:
    Node 1: Triage (Classification + Symptoms + Meko Search before solve)
    Node 2: Resolution (Memory Reuse or Synthesis + Confidence Scoring)
    Node 3: Verification (Heuristic Checks + Safety + Learning Proposal)
    """

    @staticmethod
    def run(db: Session, ticket_id: str) -> Dict[str, Any]:
        ticket = db.query(Ticket).filter(Ticket.id == ticket_id).first()
        if not ticket:
            raise ValueError(f"Ticket {ticket_id} not found")

        ticket.status = "investigating"
        db.commit()

        # Step 1: Triage
        triage_out = triage_agent.run(db, ticket)

        # Step 2: Resolution
        res_out = resolution_agent.run(db, ticket, triage_out)

        # Step 3: Verification
        ver_out = verification_agent.run(db, ticket, triage_out, res_out)

        # Persist Resolution
        resolution_id = f"res-{uuid.uuid4().hex[:8]}"
        resolution = Resolution(
            id=resolution_id,
            ticket_id=ticket.id,
            root_cause=res_out["root_cause"],
            recommended_solution=res_out["recommended_solution"],
            confidence_score=res_out["confidence_score"],
            verification_status=ver_out["verification_status"],
            verification_evidence={
                "triage_evidence": triage_out["evidence"],
                "resolution_evidence": res_out["evidence"],
                "verification_evidence": ver_out["evidence"]
            },
            reused_from_memory_id=res_out.get("reused_from_memory_id")
        )
        db.add(resolution)

        # Persist proposed learning candidate into KnowledgeFeedback
        feedback_id = f"fb-{uuid.uuid4().hex[:8]}"
        feedback = KnowledgeFeedback(
            id=feedback_id,
            ticket_id=ticket.id,
            resolution_id=resolution.id,
            proposed_learning=ver_out["proposed_learning"],
            approval_status="pending"
        )
        db.add(feedback)

        # Update Ticket status
        ticket.status = "pending_approval"
        db.commit()
        db.refresh(resolution)
        db.refresh(ticket)

        # Calculate totals
        runs = db.query(AgentRun).filter(AgentRun.ticket_id == ticket.id).all()
        total_tokens = sum((r.input_tokens + r.output_tokens) for r in runs)
        total_duration = sum(r.execution_time_ms for r in runs)

        return {
            "ticket": ticket,
            "classification": {
                "category": triage_out["category"],
                "severity": triage_out["severity"],
                "symptoms": triage_out["symptoms"]
            },
            "fingerprint": triage_out["fingerprint"],
            "similar_incidents": triage_out["meko_hits"],
            "resolution": resolution,
            "verification": ver_out,
            "proposed_learning": ver_out["proposed_learning"],
            "feedback_id": feedback_id,
            "agent_runs": runs,
            "tokens_used": total_tokens,
            "duration_ms": total_duration
        }

investigation_workflow = InvestigationWorkflow()
