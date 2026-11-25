'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 'Step 01',
    title: '01 Telemetry Ingest',
    desc: 'Inbound tickets, stack traces, and alerts are parsed into immutable semantic embeddings within 15 milliseconds.',
  },
  {
    step: 'Step 02',
    title: '02 Sub-20ms Retrieval',
    desc: "Hybrid vector and lexical indexes query Meko's persistent cache before invoking expensive multi-turn model reasoning.",
  },
  {
    step: 'Step 03',
    title: '03 Sandbox Regression',
    desc: 'Candidate remediations execute in isolated ephemeral containers to verify zero regressions or unintended side-effects.',
  },
  {
    step: 'Step 04',
    title: '04 Human Promotion',
    desc: 'Only remediations explicitly authorized by SREs with cryptographic signatures are promoted to organizational reflexes.',
  },
];

const TIMELINE_EVENTS = [
  { title: 'Triage Agent: Fingerprint Matched', time: '0.12s' },
  { title: 'Meko Vector Store: Sub-20ms Hit', time: '0.24s' },
  { title: 'Resolution Agent: Fix Synthesis', time: '0.68s' },
  { title: 'Deterministic Sandbox: 12/12 Passed', time: '1.14s' },
  { title: 'Human Signoff: lead-devops APPROVED', time: '2.05s' },
  { title: 'Persistent Memory: Merkle Leaf Sealed', time: '2.40s' },
];

// Seeded bar heights rounded to integer pixels to ensure exact server/client HTML match
const BAR_HEIGHTS: number[] = Array.from({ length: 78 }).map((_, i) => {
  let h = 4 + Math.sin(i * 0.38) * 8 + Math.cos(i * 0.8) * 6;
  if ((i >= 20 && i <= 30) || (i >= 52 && i <= 62)) {
    h += 12 + Math.sin(i * 0.9) * 8;
  }
  return Math.round(Math.max(5, Math.min(26, h)));
});

export function AuditBento() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [isPlayingVoice, setIsPlayingVoice] = useState<boolean>(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(true);
  const [voiceTimerText, setVoiceTimerText] = useState<string>('0:14');
  const [songTimeText, setSongTimeText] = useState<string>('00:34');
  const [songProgressPct, setSongProgressPct] = useState<number>(18);
  const [stepSlideClass, setStepSlideClass] = useState<string>('is-visible');

  const stepHoldUntilRef = useRef<number>(0);
  const timelineTrackRef = useRef<HTMLDivElement | null>(null);
  const waveBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // User manual click on step button
  const handleStepClick = (idx: number) => {
    if (idx === activeStepIdx) return;
    setStepSlideClass('is-exiting');
    setTimeout(() => {
      setActiveStepIdx(idx);
      setStepSlideClass('is-entering');
      setTimeout(() => setStepSlideClass('is-visible'), 50);
    }, 180);
    // Hold auto-advance for 6 seconds on user interaction
    const now = performance.now() / 1000;
    stepHoldUntilRef.current = now + 6.0;
  };

  // 1. Auto-advance Workflow Steps every 1.9s (unless held)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = performance.now() / 1000;
      if (now > stepHoldUntilRef.current) {
        setStepSlideClass('is-exiting');
        setTimeout(() => {
          setActiveStepIdx((prev) => (prev + 1) % WORKFLOW_STEPS.length);
          setStepSlideClass('is-entering');
          setTimeout(() => setStepSlideClass('is-visible'), 50);
        }, 180);
      }
    }, 1900);

    return () => clearInterval(timer);
  }, []);

  // 2. Master RAF Loop for Continuous Animations (Timeline Drift, Waveforms, Progress)
  useEffect(() => {
    startTimeRef.current = performance.now() / 1000;

    const totalBars = 78;
    const voiceDuration = 32.0;
    const musicTotalSeconds = 192; // 3:12
    const musicStartSeconds = 34; // 00:34

    function tick() {
      const now = performance.now() / 1000;
      const elapsed = now - startTimeRef.current;

      // 1. Timeline Drift (9px/s seamless loop)
      if (timelineTrackRef.current) {
        const loopHeight = 270; // 6 items * ~45px
        const driftY = (elapsed * 9) % loopHeight;
        timelineTrackRef.current.style.transform = `translateY(-${driftY}px)`;
      }

      // 2. Waveform Bar Pulse & Voice Timer
      if (isPlayingVoice) {
        const vElapsed = elapsed % voiceDuration;
        const currentBar = Math.floor((vElapsed / voiceDuration) * totalBars);

        waveBarsRef.current.forEach((bar, i) => {
          if (!bar) return;
          if (i <= currentBar) {
            bar.classList.add('is-played');
          } else {
            bar.classList.remove('is-played');
          }

          if (Math.abs(i - currentBar) <= 2) {
            const bounce = 1 + Math.sin(now * 12 + i) * 0.45;
            bar.style.transform = `scaleY(${bounce})`;
          } else {
            bar.style.transform = 'scaleY(1)';
          }
        });

        const vMins = Math.floor(vElapsed / 60);
        const vSecs = Math.floor(vElapsed % 60);
        setVoiceTimerText(`${vMins}:${vSecs < 10 ? '0' : ''}${vSecs}`);
      }

      // 3. Song Progress & Timer
      if (isPlayingMusic) {
        const sElapsed = (elapsed + musicStartSeconds) % musicTotalSeconds;
        const pct = (sElapsed / musicTotalSeconds) * 100;
        setSongProgressPct(pct);

        const sMins = Math.floor(sElapsed / 60);
        const sSecs = Math.floor(sElapsed % 60);
        setSongTimeText(`${sMins < 10 ? '0' : ''}${sMins}:${sSecs < 10 ? '0' : ''}${sSecs}`);
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    }

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isPlayingVoice, isPlayingMusic]);


  return (
    <div className="audit-bento-container" aria-label="IncidentIQ Audit & Provenance Ledger">
      {/* 1. EDITORIAL HEADER / INTRO AREA */}
      <div className="audit-bento-intro">
        {/* Avatar / Merkle Shield Seal */}
        <div className="audit-bento-avatar" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
            <rect width="48" height="48" rx="12" fill="var(--color-bento-orange)" />
            <path
              d="M24 10L14 15V24C14 31 18.5 37 24 39C29.5 37 34 31 34 24V15L24 10Z"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 24L23 27L28 21"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Headline & Bio */}
        <div className="audit-bento-headline-wrap">
          <h3 className="audit-bento-headline">
            Cryptographic execution ledger: every agent reasoning step, tool invocation, and memory hit is immutably sealed.
            <span className="audit-bento-muted"> SOC-2 Type II &amp; FedRAMP compliant.</span>
          </h3>
          <p className="audit-bento-bio">
            IncidentIQ captures directed acyclic execution graphs with sub-millisecond precision, guaranteeing zero hallucinated root causes and full deterministic replayability.
          </p>

          {/* Interactive Status Pills Row */}
          <div className="audit-bento-pills-row">
            {/* Live Trace Packet Stream Pill */}
            <div className="audit-voice-pill" aria-label="Live Telemetry Stream">
              <button
                type="button"
                className="audit-voice-btn"
                onClick={() => setIsPlayingVoice((v) => !v)}
                aria-label={isPlayingVoice ? 'Pause live trace stream' : 'Resume live trace stream'}
              >
                {isPlayingVoice ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3 2h2v8H3V2zm4 0h2v8H7V2z" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3 2l7 4-7 4V2z" />
                  </svg>
                )}
              </button>

              <div className="audit-voice-waves" aria-hidden="true">
                {BAR_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      waveBarsRef.current[i] = el;
                    }}
                    className="audit-wave-bar"
                    style={{ height: `${h}px` }}
                    suppressHydrationWarning
                  />
                ))}
              </div>

              <span className="audit-voice-timer">{voiceTimerText}</span>
            </div>

            {/* Available / Active Pill */}
            <div className="audit-available-pill">
              <div className="audit-halo-wrap" aria-hidden="true">
                <div className="audit-halo-ring" />
                <div className="audit-dot-green" />
              </div>
              <span className="audit-pill-label">Audit Ledger Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BENTO LIVE CARDS GRID */}
      {/* ROW 1: Execution Timeline · Telemetry Monitor · Policy Guardrail */}
      <div className="audit-bento-grid audit-bento-row-1">
        {/* Card 1: Experience -> Execution Timeline */}
        <article className="audit-card audit-card-experience">
          <div className="audit-chip-badge" role="status">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="3" width="12" height="10" rx="2" />
              <path d="M5 3V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
            </svg>
            <span>DAG Execution Trace</span>
          </div>

          <div className="audit-timeline-container">
            <div className="audit-timeline-line-bar" aria-hidden="true" />
            <div ref={timelineTrackRef} className="audit-timeline-track">
              {/* Doubled for seamless loop */}
              {[...TIMELINE_EVENTS, ...TIMELINE_EVENTS].map((ev, i) => (
                <div key={i} className="audit-timeline-item">
                  <span className="audit-timeline-dot" aria-hidden="true" />
                  <span className="audit-timeline-title">{ev.title}</span>
                  <span className="audit-timeline-time">{ev.time}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Card 2: What I'm Listening -> Token & Latency Telemetry */}
        <article className="audit-card audit-card-music">
          <div className="audit-chip-badge" role="status">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm10-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M6 13V2l10-1v9" />
            </svg>
            <span>Token &amp; Latency Telemetry</span>
          </div>

          <div className="audit-music-body">
            {/* Visual Telemetry Radar Gauge */}
            <div className="audit-radar-box" aria-hidden="true">
              <div className="audit-radar-circle">
                <span className="audit-radar-stat">-74%</span>
                <span className="audit-radar-unit">Token Burn</span>
              </div>
              <div className="audit-radar-sweep" />
            </div>

            <div className="audit-music-meta">
              <h4 className="audit-track-title">SUB-20ms RETRIEVAL</h4>
              <p className="audit-track-artist">Meko Hybrid Vector &amp; Lexical Cache</p>

              <div className="audit-progress-track" aria-hidden="true">
                <div className="audit-progress-fill" style={{ width: `${songProgressPct}%` }} />
              </div>

              <div className="audit-time-row">
                <span>{songTimeText}</span>
                <span>3:12</span>
              </div>

              <div className="audit-music-controls">
                <button
                  type="button"
                  className="audit-ctrl-btn"
                  onClick={() => setSongProgressPct((p) => Math.max(0, p - 10))}
                  aria-label="Previous step"
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3 2h2v12H3V2zm9 0L6 8l6 6V2z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="audit-ctrl-btn audit-ctrl-play"
                  onClick={() => setIsPlayingMusic((m) => !m)}
                  aria-label={isPlayingMusic ? 'Pause telemetry playback' : 'Play telemetry playback'}
                >
                  {isPlayingMusic ? (
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 2h2v8H3V2zm4 0h2v8H7V2z" />
                    </svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 2l7 4-7 4V2z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  className="audit-ctrl-btn"
                  onClick={() => setSongProgressPct((p) => Math.min(100, p + 10))}
                  aria-label="Next step"
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13 2h-2v12h2V2zM4 2l6 6-6 6V2z" />
                  </svg>
                </button>
                <button type="button" className="audit-ctrl-btn" aria-label="Volume">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polygon points="1 5 4 5 8 2 8 14 4 11 1 11" fill="currentColor" />
                    <path d="M11 5c1 1.5 1 4.5 0 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Card 3: What I'm Reading -> Policy Guardrail */}
        <article className="audit-card audit-card-reading">
          <div className="audit-chip-badge" role="status">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 3a2 2 0 0 1 2-2h10v12H4a2 2 0 0 0-2 2V3z" />
            </svg>
            <span>Policy Guardrails</span>
          </div>

          <div className="audit-reading-content">
            <h4 className="audit-book-title">Destructive Action Gate</h4>
            <p className="audit-book-author">Zero-Trust Boundary Policy</p>

            {/* Tilted Cryptographic Certificate Spec with Multiply Blend Mode */}
            <div className="audit-policy-doc" aria-hidden="true">
              <div className="audit-policy-doc-badge">SHA-256</div>
              <div className="audit-policy-doc-line audit-policy-bold">PROD_GUARD</div>
              <div className="audit-policy-doc-line">db-restart: BLOCK</div>
              <div className="audit-policy-doc-line">scale-down: HOLD</div>
              <div className="audit-policy-doc-line audit-policy-ok">Signoff: MANDATORY</div>
            </div>
          </div>
        </article>
      </div>

      {/* ROW 2: Global Mesh · Human Oversight · 4-Stage Governance Protocol */}
      <div className="audit-bento-grid audit-bento-row-2">
        {/* Card 4: Map -> Global Memory Fabric */}
        <article className="audit-card audit-card-map">
          <div className="audit-map-inner">
            <div className="audit-map-bg-pattern" aria-hidden="true">
              {/* Abstract Global Edge Topology Nodes */}
              <div className="audit-geo-node audit-node-us" />
              <div className="audit-geo-node audit-node-eu" />
              <div className="audit-geo-node audit-node-ap" />
              <div className="audit-geo-node audit-node-sa" />
              <svg className="audit-geo-lines" viewBox="0 0 300 180" fill="none">
                <path d="M60 80 Q 140 40 220 70" stroke="var(--color-bento-secondary)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                <path d="M60 80 Q 90 130 110 140" stroke="var(--color-bento-secondary)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                <path d="M140 40 Q 180 100 220 70" stroke="var(--color-bento-secondary)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
              </svg>
            </div>
            <div className="audit-map-center-label">Global Mesh</div>
            <div className="audit-map-bottom-chip">
              <span>Multi-Region Synced · &lt; 5ms replication</span>
            </div>
          </div>
        </article>

        {/* Card 5: Photo -> Human Verification Center */}
        <article className="audit-card audit-card-photo">
          <div className="audit-photo-inner">
            <div className="audit-terminal-backdrop" aria-hidden="true">
              <div className="audit-term-header">
                <span className="audit-term-dot" />
                <span className="audit-term-dot" />
                <span className="audit-term-dot" />
                <span className="audit-term-title">sandbox_verdict.sh</span>
              </div>
              <div className="audit-term-body">
                <div>$ verify --target=remediation_2841</div>
                <div style={{ color: 'var(--color-bento-green)' }}>[PASS] 14/14 automated regressions passed</div>
                <div style={{ color: 'var(--color-bento-orange)' }}>[AUTH] human signoff: lead-devops [OK]</div>
                <div>→ promoted to Meko persistent graph</div>
              </div>
            </div>
            <div className="audit-photo-caption-pill">
              <span className="audit-ball-icon" />
              <span>Verified by Site Reliability Engineering</span>
            </div>
          </div>
        </article>

        {/* Card 6: How I Work -> Governance Protocol */}
        <article className="audit-card audit-card-workflow">
          <div className="audit-workflow-header">
            <div className="audit-chip-badge" role="status">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="8" cy="8" r="6" />
                <path d="M8 4v4l3 2" />
              </svg>
              <span>Governance Protocol</span>
            </div>

            {/* 40px Segmented Control with CSS Var driven sliding pill */}
            <div
              className="audit-segmented-control"
              role="tablist"
              style={{ '--active-step': activeStepIdx } as React.CSSProperties}
            >
              <div className="audit-step-pill-indicator" aria-hidden="true" />
              {WORKFLOW_STEPS.map((s, idx) => (
                <button
                  key={s.step}
                  type="button"
                  className={`audit-step-btn ${activeStepIdx === idx ? 'is-active' : ''}`}
                  onClick={() => handleStepClick(idx)}
                  role="tab"
                  aria-selected={activeStepIdx === idx}
                >
                  {s.step}
                </button>
              ))}
            </div>
          </div>

          <div className="audit-step-text-display">
            <div className={`audit-step-slide ${stepSlideClass}`}>
              <h4 className="audit-step-heading">{WORKFLOW_STEPS[activeStepIdx].title}</h4>
              <p className="audit-step-desc">{WORKFLOW_STEPS[activeStepIdx].desc}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AuditBento;
