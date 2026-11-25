# INCIDENTIQ

> **Every incident teaches the system how to solve the next one.**

IncidentIQ is an AI-powered technical support intelligence platform where multiple autonomous AI agents collaborate using persistent, shared operational knowledge powered by **Meko**.

Built for **ContextCon 2026**:
- **Primary Challenge:** Challenge 02 — Agentic Support
- **Secondary Tracks:** Challenge 07 — Best Auditability · Challenge 08 — Token Efficiency

---

## ⚡ Key Highlights & Benchmark Results

| Metric | Mode A (Baseline without Meko) | Mode B (IncidentIQ with Meko) | Comparative Delta |
|---|---|---|---|
| **Average Token Consumption** | 1,780 tokens | 740 tokens | **-58.4% Tokens Saved** |
| **Mean Resolution Latency** | 1,840 ms | 660 ms | **-64.1% Faster Remediation** |
| **Remediation Quality Score** | 89.2 / 100 | 96.4 / 100 | **+7.2 Quality Points** |
| **Model Invocations per Issue** | 3.0 calls | 1.4 calls | **-53.3% Fewer LLM Calls** |
| **Knowledge Reuse Rate** | 0.0% | 60.0% (100% on repeat) | **Permanent Reflex Created** |

---

## 🏗️ System Architecture & Workflow

```
[ Inbound Incident Alert ]
           │
           ▼
[ Node 1: Triage Agent ]
  ├── Extracts error signatures & symptoms
  ├── Generates normalized fingerprint (category:symptom:hash)
  └── Queries Meko datapack ("search before solve")
           │
           ▼
[ Node 2: Resolution Agent ]
  ├── Mode B: Reuses verified historical fix if similarity >= 0.60
  ├── Mode A: Synthesizes operational runbook troubleshooting if fresh
  └── Calculates confidence score & evidence references
           │
           ▼
[ Node 3: Verification Agent ]
  ├── Evaluates safety heuristics (secrets, timeouts, idempotency)
  ├── Enforces zero blind remediation claims
  └── Formulates candidate learning for human promotion
           │
           ▼
[ Human SRE Approval Gate ]
  ├── Reviews diff & verification checks
  └── Approves fix: Promotes to Meko persistent memory
           │
           ▼
[ Shared Operational Context: Meko Datapack ]
  └── Available immediately to all subsequent agents across sessions!
```

---

## 📂 Repository Structure

```
IncidentIQ/
├── app/                        # Next.js App Router (MVP Screens)
│   ├── dashboard/              # Screen 1: Executive KPI Overview & Benchmarks
│   ├── tickets/                # Screen 2: Incident Management Queue
│   ├── investigation/          # Screen 3: Multi-Agent DAG Workspace
│   ├── approvals/              # Screen 4: Human SRE Approval Center
│   ├── analytics/              # Screen 5: Best Auditability & Token Telemetry
│   ├── layout.tsx              # Root Layout
│   └── page.tsx                # High-fidelity Editorial Landing Page
├── backend/                    # FastAPI Multi-Agent Core
│   ├── app/
│   │   ├── agents/             # triage.py, resolution.py, verification.py
│   │   ├── api/                # endpoints.py (CRUD, DAG, Approval, Benchmark)
│   │   ├── models/             # SQLAlchemy tables
│   │   ├── schemas/            # Pydantic v2 data models
│   │   ├── services/           # meko_service.py, ticket_service.py, benchmark_service.py
│   │   ├── workflows/          # investigation_workflow.py (DAG orchestrator)
│   │   ├── database.py         # DB connection & session factory
│   │   └── main.py             # FastAPI entrypoint
│   └── tests/                  # Pytest test suite (100% passing)
├── components/                 # Reusable UI & Console Components
│   ├── shared/nav-header.tsx   # Top Navigation & Meko Connection Status
│   └── ui/                     # Falcon Console, Klarheit Timeline, Audit Bento
├── data/                       # Datasets & Persistent Knowledge
│   ├── tickets/                # 32 categorized synthetic technical support tickets
│   ├── knowledge/              # Operational runbooks & Meko persistent memories
│   └── benchmark/              # Benchmark results (Mode A vs Mode B)
├── docs/                       # Comprehensive Documentation
│   ├── PRD.md                  # Product Requirements Document
│   ├── ARCHITECTURE.md         # Architecture, Sequences & Schema Specs
│   └── BENCHMARK.md            # Benchmark Methodology & Experimental Results
├── docker-compose.yml          # Containerized deployment
└── README.md                   # This document
```

---

## 🚀 Quickstart Guide

### Option 1: Run Locally

#### 1. Backend (FastAPI)
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate | Unix: source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
Backend will be live at `http://localhost:8000` with Swagger docs at `http://localhost:8000/docs`.

#### 2. Frontend (Next.js)
```bash
# In the project root:
pnpm install
pnpm run dev
```
Open `http://localhost:3000` to view the landing page or jump directly to `/dashboard`.

#### 3. Run Backend Test Suite
```bash
python -m pytest backend/tests/test_api.py -v
```

---

### Option 2: Run with Docker Compose
```bash
docker-compose up --build
```
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`

---

## 🏆 ContextCon 2026 Challenge Alignment

### Challenge 02 — Agentic Support
Demonstrates three collaborating autonomous agents sharing a single operational memory. Mode B retrieves verified historical fixes, drastically reducing resolution cycles.

### Challenge 07 — Best Auditability
Zero black boxes. Every node in the multi-agent DAG produces an immutable `AgentRun` cryptographic packet recording exact input/output tokens, execution latency, and decision evidence.

### Challenge 08 — Token Efficiency
By executing `search before solve` against Meko, IncidentIQ eliminates redundant exploratory chain-of-thought tokens on recurring incidents, achieving a **58.4% token reduction** across paired incident benchmarks.
