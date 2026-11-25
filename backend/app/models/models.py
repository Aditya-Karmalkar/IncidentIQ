import datetime
from sqlalchemy import Column, String, Text, DateTime, Integer, Float, ForeignKey, JSON
from sqlalchemy.orm import relationship

def utc_now():
    return datetime.datetime.now(datetime.timezone.utc)

try:
    from backend.app.database import Base
except ImportError:
    from app.database import Base

class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(String(36), primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    category = Column(String(64), nullable=True, index=True)
    severity = Column(String(16), default="medium", index=True) # critical, high, medium, low
    fingerprint = Column(String(128), nullable=True, index=True) # Normalized incident fingerprint
    status = Column(String(32), default="open", index=True) # open, investigating, pending_approval, resolved, closed
    symptoms = Column(JSON, nullable=True) # List of extracted technical symptoms
    created_at = Column(DateTime, default=utc_now)
    resolved_at = Column(DateTime, nullable=True)

    resolutions = relationship("Resolution", back_populates="ticket", cascade="all, delete-orphan")
    agent_runs = relationship("AgentRun", back_populates="ticket", cascade="all, delete-orphan")
    feedbacks = relationship("KnowledgeFeedback", back_populates="ticket", cascade="all, delete-orphan")


class Resolution(Base):
    __tablename__ = "resolutions"

    id = Column(String(36), primary_key=True, index=True)
    ticket_id = Column(String(36), ForeignKey("tickets.id"), nullable=False)
    root_cause = Column(Text, nullable=False)
    recommended_solution = Column(Text, nullable=False)
    confidence_score = Column(Float, default=0.0) # 0.0 to 1.0
    verification_status = Column(String(32), default="pending") # pending, verified, rejected
    verification_evidence = Column(JSON, nullable=True) # Test logs, regression results
    reused_from_memory_id = Column(String(64), nullable=True) # Link to Meko memory if reused
    approved_by = Column(String(128), nullable=True)
    created_at = Column(DateTime, default=utc_now)

    ticket = relationship("Ticket", back_populates="resolutions")


class AgentRun(Base):
    __tablename__ = "agent_runs"

    id = Column(String(36), primary_key=True, index=True)
    ticket_id = Column(String(36), ForeignKey("tickets.id"), nullable=False)
    agent_name = Column(String(64), nullable=False, index=True) # triage, resolution, verification
    execution_status = Column(String(32), default="running") # running, completed, failed
    input_tokens = Column(Integer, default=0)
    output_tokens = Column(Integer, default=0)
    execution_time_ms = Column(Float, default=0.0)
    evidence = Column(JSON, nullable=True) # Context hits, tool calls, reasoning steps
    started_at = Column(DateTime, default=utc_now)
    completed_at = Column(DateTime, nullable=True)

    ticket = relationship("Ticket", back_populates="agent_runs")


class KnowledgeFeedback(Base):
    __tablename__ = "knowledge_feedback"

    id = Column(String(36), primary_key=True, index=True)
    ticket_id = Column(String(36), ForeignKey("tickets.id"), nullable=False)
    resolution_id = Column(String(36), nullable=True)
    proposed_learning = Column(Text, nullable=False)
    approval_status = Column(String(32), default="pending", index=True) # pending, approved, rejected, review_requested
    reviewer = Column(String(128), nullable=True)
    meko_memory_id = Column(String(64), nullable=True) # Set when committed to Meko persistent memory
    created_at = Column(DateTime, default=utc_now)
    reviewed_at = Column(DateTime, nullable=True)

    ticket = relationship("Ticket", back_populates="feedbacks")


class Experiment(Base):
    __tablename__ = "experiments"

    id = Column(String(36), primary_key=True, index=True)
    ticket_id = Column(String(36), nullable=False)
    execution_mode = Column(String(32), nullable=False, index=True) # baseline (Mode A) vs meko (Mode B)
    total_tokens = Column(Integer, default=0)
    execution_time_ms = Column(Float, default=0.0)
    model_calls = Column(Integer, default=1)
    quality_score = Column(Float, default=0.0) # 0 to 100
    knowledge_reused = Column(Integer, default=0) # 1 if reused past fix, 0 otherwise
    created_at = Column(DateTime, default=utc_now)
