# INCIDENTIQ — System Architecture Specification

## 1. High-Level Architecture Overview

IncidentIQ is built as a modular multi-agent platform comprising a high-performance **FastAPI** backend, a **Next.js 14** App Router frontend, a persistent **SQLAlchemy** transactional store, and a centralized **Meko Context Engine** datapack.

```mermaid
flowchart TD
    subgraph Frontend["Next.js App Router (Port 3000)"]
        Dashboard["/dashboard\nKPIs & Token Gains"]
        Queue["/tickets\nIncident Queue"]
        Workspace["/investigation\nMulti-Agent DAG"]
        Approvals["/approvals\nHuman SRE Gate"]
        Analytics["/analytics\nBenchmark Suite"]
    end

    subgraph Backend["FastAPI Multi-Agent Core (Port 8000)"]
        API["FastAPI REST Endpoints\n/api/*"]
        DAG["Investigation DAG Workflow"]
        TriageAgent["Node 1: Triage Agent"]
        ResAgent["Node 2: Resolution Agent"]
        VerAgent["Node 3: Verification Agent"]
        BenchService["Benchmark Service\n(Mode A vs Mode B)"]
    end

    subgraph Memory["Context & Persistence Layer"]
        Meko["Meko Datapack Engine\n(incidentiq-core-datapack)\ncontext_search · memory_add"]
        DB[(PostgreSQL / SQLite\nTickets · Resolutions · AgentRuns\nKnowledgeFeedback · Experiments)]
    end

    Frontend -->|HTTP / JSON Proxy| API
    API --> DAG
    DAG --> TriageAgent
    TriageAgent -->|Search Before Solve| Meko
    TriageAgent --> ResAgent
    ResAgent -->|Evaluate Reused Fix| Meko
    ResAgent --> VerAgent
    VerAgent -->|Propose Candidate| DB
    API -->|Approve & Commit| Meko
    API --> DB
    BenchService --> DB
```

---

## 2. Multi-Agent Orchestration DAG

The investigation process follows a deterministic sequential DAG where intermediate results and decision evidence are logged into immutable `AgentRun` records:

```mermaid
sequenceDiagram
    autonumber
    actor User as Support / SRE
    participant API as FastAPI Backend
    participant Triage as Triage Agent
    participant Meko as Meko Central Datapack
    participant Res as Resolution Agent
    participant Ver as Verification Agent
    participant Gate as Human SRE Approval
    participant DB as System Database

    User->>API: POST /api/tickets/{id}/investigate
    API->>Triage: Execute Triage Node
    Triage->>Triage: Extract Technical Symptoms & Generate Fingerprint
    Triage->>Meko: context_search(query, fingerprint, category)
    Meko-->>Triage: Return Top Verified Memories
    Triage-->>API: Emit Classification, Fingerprint & Meko Hits

    API->>Res: Execute Resolution Node
    alt Meko Memory Hit (Relevance >= 0.60 & Verified)
        Res->>Res: MODE B: Adapt Verified Historical Protocol
    else No Memory Hit
        Res->>Res: MODE A: Synthesize Runbook Troubleshooting Steps
    end
    Res-->>API: Emit Root Cause, Solution & Confidence Score

    API->>Ver: Execute Verification Node
    Ver->>Ver: Evaluate Safety Checks & Concurrency Bounds
    Ver->>Ver: Enforce Zero Blind Remediation Claim Policy
    Ver->>DB: Store Resolution & Create KnowledgeFeedback (Status: Pending)
    Ver-->>API: Emit Verification Results & Learning Candidate

    API-->>User: Render Full DAG Workspace & Evidence Stream

    User->>Gate: SRE Reviews Candidate in Approval Center
    Gate->>API: POST /api/knowledge/{id}/approve
    API->>Meko: memory_add(verified_protocol, fingerprint, ticket_id)
    API->>DB: Update Ticket Status: Resolved, Feedback: Approved
    Meko-->>API: Confirm Durable Memory ID (meko-mem-*)
    API-->>User: Persistent Reflex Created for Next Agent
```

---

## 3. Normalized Incident Fingerprinting

To enable cross-ticket knowledge discovery across disparate wording, the `TicketService` deterministically extracts technical error signatures:

$$\text{Fingerprint} = \text{Category} : \text{PrimarySymptom} : \text{MD5}(\text{Category} : \text{SortedSymptoms})[0:8]$$

### Symptoms Hierarchy
1. **Domain-Specific Technical Patterns:** `pool_exhaustion`, `stripe_gateway_timeout`, `rate_limited`, `auth_token_drift`, `memory_oom`, `cors_origin_mismatch`, `kafka_partition_lag`.
2. **HTTP Telemetry Codes:** `HTTP_504`, `HTTP_500`, `HTTP_429`, `HTTP_401`, `HTTP_403`.
3. **Lexical Stems:** Filtered technical nouns.

When recurring incidents share the `Category` and `PrimarySymptom` (e.g. `database_connection_failures:pool_exhaustion`), Meko's relevance score receives a domain boost, triggering Mode B reuse even if the ticket descriptions differ entirely in prose.

---

## 4. Database Schema Specification

- **`tickets`:** Primary support incident records (`id`, `title`, `description`, `category`, `severity`, `fingerprint`, `status`, `symptoms`, `created_at`, `resolved_at`).
- **`resolutions`:** Agent resolution outcomes (`id`, `ticket_id`, `root_cause`, `recommended_solution`, `confidence_score`, `verification_status`, `verification_evidence`, `reused_from_memory_id`, `approved_by`).
- **`agent_runs`:** Challenge 07 Audit trail per node (`id`, `ticket_id`, `agent_name`, `execution_status`, `input_tokens`, `output_tokens`, `execution_time_ms`, `evidence`, `started_at`, `completed_at`).
- **`knowledge_feedback`:** Human SRE oversight candidates (`id`, `ticket_id`, `resolution_id`, `proposed_learning`, `approval_status`, `reviewer`, `meko_memory_id`, `reviewed_at`).
- **`experiments`:** Challenge 08 Benchmark comparisons (`id`, `ticket_id`, `execution_mode`, `total_tokens`, `execution_time_ms`, `model_calls`, `quality_score`, `knowledge_reused`).
