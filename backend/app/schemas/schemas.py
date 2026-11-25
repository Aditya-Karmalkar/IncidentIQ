from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict, Any
from datetime import datetime

class TicketBase(BaseModel):
    title: str
    description: str
    category: Optional[str] = None
    severity: Optional[str] = "medium"

class TicketCreate(TicketBase):
    pass

class TicketResponse(TicketBase):
    id: str
    fingerprint: Optional[str] = None
    status: str
    symptoms: Optional[List[str]] = None
    created_at: datetime
    resolved_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

class ResolutionResponse(BaseModel):
    id: str
    ticket_id: str
    root_cause: str
    recommended_solution: str
    confidence_score: float
    verification_status: str
    verification_evidence: Optional[Dict[str, Any]] = None
    reused_from_memory_id: Optional[str] = None
    approved_by: Optional[str] = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

class AgentRunResponse(BaseModel):
    id: str
    ticket_id: str
    agent_name: str
    execution_status: str
    input_tokens: int
    output_tokens: int
    execution_time_ms: float
    evidence: Optional[Dict[str, Any]] = None
    started_at: datetime
    completed_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

class KnowledgeFeedbackResponse(BaseModel):
    id: str
    ticket_id: str
    resolution_id: Optional[str] = None
    proposed_learning: str
    approval_status: str
    reviewer: Optional[str] = None
    meko_memory_id: Optional[str] = None
    created_at: datetime
    reviewed_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

class ApprovalAction(BaseModel):
    reviewer: str = "SRE Reviewer"
    notes: Optional[str] = None

class InvestigationResult(BaseModel):
    ticket: TicketResponse
    classification: Dict[str, Any]
    fingerprint: str
    similar_incidents: List[Dict[str, Any]]
    resolution: ResolutionResponse
    verification: Dict[str, Any]
    proposed_learning: Optional[str] = None
    agent_runs: List[AgentRunResponse]
    tokens_used: int
    duration_ms: float

class AnalyticsResponse(BaseModel):
    total_tickets: int
    open_tickets: int
    resolved_tickets: int
    pending_approval: int
    knowledge_reuse_rate: float # e.g. 64.2%
    avg_resolution_time_ms: float
    total_tokens_consumed: int
    baseline_tokens_saved_pct: float
    categories_breakdown: Dict[str, int]
    recent_agent_runs: List[AgentRunResponse]
