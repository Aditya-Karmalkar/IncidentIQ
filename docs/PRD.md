# INCIDENTIQ — Product Requirements Document

**Version:** 1.0  
**Date:** November 2026  
**ContextCon 2026 Track:** Challenge 02 — Agentic Support  
**Secondary Tracks:** Challenge 07 — Best Auditability · Challenge 08 — Token Efficiency  

---

## 1. Executive Summary

**INCIDENTIQ** is an AI-powered technical support intelligence platform that enables multi-agent teams to investigate, resolve, and permanently remember technical production incidents using **Meko** as a centralized, persistent operational memory engine.

Traditional support LLMs treat every support ticket as a blank slate, re-investigating identical database pool leaks, payment timeouts, and certificate drifts from scratch. This leads to redundant token waste, slow remediation, and fragile recommendations.

**Core Thesis:** *Every incident teaches the system how to solve the next one.*

---

## 2. Problem Statement

Modern enterprise DevOps and support teams face severe operational friction:
1. **Repeated Investigations:** 60-70% of inbound technical incidents stem from recurring architectural bottlenecks (e.g. connection pool exhaustion, webhook retries, expired TLS certificates).
2. **Token Inefficiency:** Open-ended LLM investigations consume thousands of tokens per incident formulating exploratory reasoning trees without shared memory.
3. **Black Box Automations:** Unsupervised agentic remediations create severe production risks when actions are not backed by human verification gates.

---

## 3. Product Vision & Principles

- **Search Before Solve:** Before an agent synthesizes an open-ended troubleshooting plan, it queries the shared Meko datapack using normalized incident fingerprints to retrieve prior human-verified resolutions.
- **Human Oversight Gate:** Agents propose solutions; only authorized SRE review promotes an incident's resolution into durable shared operational memory.
- **Zero Black Boxes:** Every agent execution stage records input/output token counts, execution latency, and deterministic evidence ledgers.
- **Collective Reflex:** Knowledge learned on ticket $N$ is immediately accessible to a different agent handling recurring ticket $N+1$.

---

## 4. Multi-Agent DAG Specification

| Node | Agent Name | Core Responsibilities |
|---|---|---|
| **01** | **Triage Agent** | Extracts technical symptoms, classifies severity/category, generates deterministic incident fingerprint, queries Meko datapack (`search before solve`). |
| **02** | **Resolution Agent** | Evaluates Meko context. If relevance $\ge 0.60$ and verified, reuses memory directly (Mode B). Otherwise, synthesizes runbook troubleshooting steps (Mode A). |
| **03** | **Verification Agent** | Validates against safety heuristics (no hardcoded secrets, bounded timeouts, idempotency awareness). Enforces zero unverified production claims. Prepares learning candidate. |
| **Gate** | **Human SRE Approval** | Senior SRE reviews candidate diff and one-click promotes resolution into Meko persistent memory under `incidentiq-core-datapack`. |

---

## 5. Functional Requirements Matrix

- **FR-01 (Ticket Management):** Ingest and display technical support tickets with category, severity, and status.
- **FR-02 (Fingerprint Normalization):** Deterministically hash error codes, stack trace components, and failure patterns (`category:primary_symptom:hash`).
- **FR-03 (Meko Shared Context):** Interface with Meko datapack (`incidentiq-core-datapack`) for context retrieval and memory addition.
- **FR-04 (Multi-Agent DAG):** Sequentially orchestrate Triage $\to$ Resolution $\to$ Verification DAG pipeline.
- **FR-05 (Search Before Solve):** Reuse historical resolutions when similarity threshold is satisfied.
- **FR-06 (Human SRE Approval Gate):** Mandatory human sign-off before promoting learnings into persistent shared memory.
- **FR-07 (Auditability Ledger):** Immutable chronological execution trail with token metrics and evidence payload.
- **FR-08 (Benchmark Telemetry):** Empirical comparison suite comparing Mode A (Zero Shared Memory) vs Mode B (Meko Context).
