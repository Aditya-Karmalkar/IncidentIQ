'use client';

import React, { useEffect, useRef, useState } from 'react';

export type ScenarioKey = 'pg' | 'k8s' | 'kafka';

export interface IncidentScenario {
  id: string;
  name: string;
  service: string;
  severity: string;
  alert: string;
  trace: string;
  mekoMatch: string;
  similarity: string;
  tokenReduction: string;
  tokensSaved: string;
  patch: string;
  testStatus: string;
  approver: string;
  timelineValue: string;
  timeSaved: string;
  efficiencyRate: string;
}

export const SCENARIOS: Record<ScenarioKey, IncidentScenario> = {
  pg: {
    id: 'INC-4092',
    name: 'PostgreSQL Pool Depleted',
    service: 'billing-sync-worker',
    severity: 'P1 Critical',
    alert: 'FATAL: remaining connection slots reserved for non-replication superuser',
    trace: `[pool.go:142] PoolExhaustedError: 250/250 in use
[cron.go:88] SyncInvoicesBatch() failed after 3 retries
[db.go:56] Leaked connections detected without defer release()`,
    mekoMatch: 'Incident #2841 (Billing Worker DB Leak)',
    similarity: '98.4%',
    tokenReduction: '74%',
    tokensSaved: '8,420 tokens',
    patch: `// Applied Fix from Meko Knowledge Pool #2841
- db, _ := sql.Open("postgres", connStr)
+ ctx, cancel := context.WithTimeout(ctx, 3*time.Second)
+ defer cancel()
+ conn, err := pool.Acquire(ctx)
+ defer conn.Release()`,
    testStatus: '14 / 14 Unit & Integration Tests Passed',
    approver: 'devops-lead@incidentiq.io',
    timelineValue: '250/250 Pool',
    timeSaved: '8,420 Tok',
    efficiencyRate: '↑ 74% efficiency',
  },
  k8s: {
    id: 'INC-5120',
    name: 'Auth Pod OOMKilled Spike',
    service: 'auth-gateway-cluster',
    severity: 'P1 Critical',
    alert: 'Back-off restarting failed container auth-service (Exit Code: 137)',
    trace: `[jvm.log:411] OutOfMemoryError: Java heap space
[jwt.kt:79] RevocationCache size reached 1,280,000 entries
[gc.log:102] Full GC duration: 14.8s before termination`,
    mekoMatch: 'Incident #1904 (JWT Revocation Heap Exhaustion)',
    similarity: '96.8%',
    tokenReduction: '81%',
    tokensSaved: '11,200 tokens',
    patch: `// Applied Fix from Meko Knowledge Pool #1904
- val cache = ConcurrentHashMap<String, Long>()
+ val cache = Caffeine.newBuilder()
+     .maximumSize(50_000)
+     .expireAfterWrite(15, TimeUnit.MINUTES)
+     .build<String, Long>()`,
    testStatus: '8 / 8 Regression Sandboxes Passed',
    approver: 'platform-sec@incidentiq.io',
    timelineValue: 'OOM 137',
    timeSaved: '11.2k Tok',
    efficiencyRate: '↑ 81% efficiency',
  },
  kafka: {
    id: 'INC-6301',
    name: 'Kafka Consumer Lag Storm',
    service: 'event-stream-consumer',
    severity: 'P2 High',
    alert: 'Consumer group analytics-sink rebalance heartbeat timeout',
    trace: `[kafka.py:312] CommitFailedException: Offset commit failed
[consumer.py:89] Heartbeat thread starved by long processing loop
[lag.prom:44] Lag exceeded 140,000 records on partition 04`,
    mekoMatch: 'Incident #3118 (Analytics Consumer Timeout Tuning)',
    similarity: '94.2%',
    tokenReduction: '68%',
    tokensSaved: '6,850 tokens',
    patch: `// Applied Fix from Meko Knowledge Pool #3118
- max.poll.interval.ms = 30000
- max.poll.records = 500
+ max.poll.interval.ms = 300000
+ max.poll.records = 50`,
    testStatus: '11 / 11 Event Replay Tests Passed',
    approver: 'data-infra@incidentiq.io',
    timelineValue: '14.2k Lag',
    timeSaved: '6,850 Tok',
    efficiencyRate: '↑ 68% efficiency',
  },
};

/**
 * Falcon Triptych Investigation Console
 * Renders the 3-card Falcon AI operations overview for each selected incident scenario:
 * - Card 1: Instant Visibility (Timeline chart, 24 bars, value chip, START | ACTIVE | PEAK | COMPLETE)
 * - Card 2: Autonomous Workflows (Assistant header, prompt with synthesized diff, Automate button with canvas sparkle, cursor)
 * - Card 3: Faster Decisions (Tokens saved metric, decision-flow converging ribbons canvas, tags, human sign-off)
 */
export function FalconConsole() {
  const [activeTab, setActiveTab] = useState<ScenarioKey>('pg');
  const [approvedMap, setApprovedMap] = useState<Record<string, boolean>>({});

  const sparkleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const flowCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const cur = SCENARIOS[activeTab];
  const isApproved = !!approvedMap[activeTab];

  const handleApprove = () => {
    setApprovedMap((prev) => ({ ...prev, [activeTab]: true }));
  };

  // 1. Draw Sparkle Icon on Automate CTA button
  useEffect(() => {
    const canvas = sparkleCanvasRef.current;
    if (!canvas) return;

    const sparkles = [
      { x: 0.01, y: 0.01, size: 0.50 },
      { x: 0.28, y: 0.26, size: 0.72 },
    ];
    const sparklePoints = [
      [0.50, 0.06], [0.59, 0.41], [0.94, 0.50], [0.59, 0.59],
      [0.50, 0.94], [0.41, 0.59], [0.06, 0.50], [0.41, 0.41],
    ];

    function draw() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const w = rect.width;
      const h = rect.height;

      sparkles.forEach((s) => {
        const sz = Math.min(w, h) * s.size;
        const ox = s.x * w;
        const oy = s.y * h;
        const pts = sparklePoints.map(([px, py]) => [ox + px * sz, oy + py * sz]);

        ctx.beginPath();
        const roundness = 0.34;
        const n = pts.length;
        for (let i = 0; i < n; i++) {
          const curr = pts[i];
          const next = pts[(i + 1) % n];
          const prev = pts[(i - 1 + n) % n];

          const v1x = curr[0] - prev[0];
          const v1y = curr[1] - prev[1];
          const d1 = Math.hypot(v1x, v1y) || 1;
          const v2x = next[0] - curr[0];
          const v2y = next[1] - curr[1];
          const d2 = Math.hypot(v2x, v2y) || 1;

          const r = Math.min(d1 * 0.5, d2 * 0.5, sz * roundness);
          const pBefore = [curr[0] - (v1x / d1) * r, curr[1] - (v1y / d1) * r];
          const pAfter = [curr[0] + (v2x / d2) * r, curr[1] + (v2y / d2) * r];

          if (i === 0) {
            ctx.moveTo(pBefore[0], pBefore[1]);
          } else {
            ctx.lineTo(pBefore[0], pBefore[1]);
          }
          ctx.quadraticCurveTo(curr[0], curr[1], pAfter[0], pAfter[1]);
        }
        ctx.closePath();

        ctx.shadowColor = 'rgba(255, 255, 255, 0.78)';
        ctx.shadowBlur = sz * 0.06;
        ctx.fillStyle = 'rgba(255, 220, 202, 0.55)';
        ctx.fill();

        ctx.strokeStyle = '#fff';
        ctx.lineWidth = Math.max(1.1, sz * 0.15);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        ctx.shadowColor = 'transparent';
      });
    }

    const ro = new ResizeObserver(() => draw());
    ro.observe(canvas);
    draw();

    return () => ro.disconnect();
  }, []);

  // 2. Draw Converging Decision Flow Chart (Canvas 2)
  useEffect(() => {
    const canvas = flowCanvasRef.current;
    if (!canvas) return;

    const bands = [
      { source: [0.08, 0.26], target: [0.29, 0.32], color: 'rgba(255, 189, 144, 0.60)' },
      { source: [0.23, 0.42], target: [0.30, 0.335], color: 'rgba(255, 149, 80, 0.70)' },
      { source: [0.50, 0.75], target: [0.32, 0.355], color: 'rgba(255, 136, 64, 0.82)' },
      { source: [0.69, 0.98], target: [0.33, 0.365], color: 'rgba(255, 181, 128, 0.54)' },
      { source: [0.39, 0.51], target: [0.31, 0.345], color: 'rgba(255, 105, 0, 0.96)' },
    ];
    const threads = [
      { source: 0.05, target: 0.30, alpha: 0.68 },
      { source: 0.20, target: 0.315, alpha: 0.60 },
      { source: 0.62, target: 0.342, alpha: 0.84 },
      { source: 0.82, target: 0.352, alpha: 0.74 },
      { source: 0.97, target: 0.36, alpha: 0.64 },
    ];
    const sourceHold = 0.38;
    const targetApproach = 0.74;
    const threadWidth = 0.00135;

    function draw() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const w = rect.width;
      const h = rect.height;

      bands.forEach((b) => {
        ctx.beginPath();
        ctx.moveTo(0, h * b.source[0]);
        ctx.bezierCurveTo(
          w * sourceHold,
          h * b.source[0],
          w * targetApproach,
          h * b.target[0],
          w,
          h * b.target[0]
        );
        ctx.lineTo(w, h * b.target[1]);
        ctx.bezierCurveTo(
          w * targetApproach,
          h * b.target[1],
          w * sourceHold,
          h * b.source[1],
          0,
          h * b.source[1]
        );
        ctx.closePath();
        ctx.fillStyle = b.color;
        ctx.fill();
      });

      threads.forEach((t) => {
        ctx.beginPath();
        ctx.moveTo(0, h * t.source);
        ctx.bezierCurveTo(
          w * sourceHold,
          h * t.source,
          w * targetApproach,
          h * t.target,
          w,
          h * t.target
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${t.alpha})`;
        ctx.lineWidth = Math.max(0.72, w * threadWidth);
        ctx.stroke();
      });
    }

    const ro = new ResizeObserver(() => draw());
    ro.observe(canvas);
    draw();

    return () => ro.disconnect();
  }, [activeTab]);

  return (
    <div className="falcon-console-wrap">
      {/* Topbar: Incident Selector Tabs & Human Sign-Off Status */}
      <div className="falcon-topbar">
        <div className="falcon-tabs" role="tablist" aria-label="Incident selector">
          <button
            className={`falcon-tab-btn ${activeTab === 'pg' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('pg')}
            type="button"
            role="tab"
            aria-selected={activeTab === 'pg'}
          >
            Postgres pool leak
          </button>
          <button
            className={`falcon-tab-btn ${activeTab === 'k8s' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('k8s')}
            type="button"
            role="tab"
            aria-selected={activeTab === 'k8s'}
          >
            K8s auth OOMKilled
          </button>
          <button
            className={`falcon-tab-btn ${activeTab === 'kafka' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('kafka')}
            type="button"
            role="tab"
            aria-selected={activeTab === 'kafka'}
          >
            Kafka rebalance storm
          </button>
        </div>

        <div className={`falcon-status-pill ${isApproved ? 'is-approved' : ''}`} role="status">
          <span className="falcon-status-dot" aria-hidden="true" />
          <span>{isApproved ? 'Resolved and committed to Meko' : 'Awaiting human sign-off'}</span>
        </div>
      </div>

      {/* Triptych Scene Container */}
      <div className="falcon-scene-container">
        <div className="falcon-cards-grid">
          {/* CARD 1 — Instant Visibility & Live Telemetry */}
          <article className="falcon-card" aria-label="Incident telemetry and spike timeline">
            <div className="falcon-card-panel">
              <div className="falcon-timeline">
                <span>06 AM</span>
                <i />
                <span>12 PM</span>
                <i />
                <span>06 PM</span>
              </div>

              <div className="falcon-bars" aria-hidden="true">
                <i className="falcon-bar" style={{ height: '22%' }} />
                <i className="falcon-bar" style={{ height: '35%' }} />
                <i className="falcon-bar" style={{ height: '48%' }} />
                <i className="falcon-bar" style={{ height: '56%' }} />
                <i className="falcon-bar" style={{ height: '52%' }} />
                <i className="falcon-bar" style={{ height: '47%' }} />
                <i className="falcon-bar" style={{ height: '40%' }} />
                <i className="falcon-bar" style={{ height: '32%' }} />
                <i className="falcon-bar" style={{ height: '54%' }} />
                <i className="falcon-bar" style={{ height: '58%' }} />
                <i className="falcon-bar" style={{ height: '64%' }} />
                <i className="falcon-bar" style={{ height: '59%' }} />
                <i className="falcon-bar is-active" style={{ height: '100%' }} />
                <i className="falcon-bar" style={{ height: '91%' }} />
                <i className="falcon-bar" style={{ height: '75%' }} />
                <i className="falcon-bar" style={{ height: '66%' }} />
                <i className="falcon-bar" style={{ height: '61%' }} />
                <i className="falcon-bar" style={{ height: '65%' }} />
                <i className="falcon-bar" style={{ height: '58%' }} />
                <i className="falcon-bar" style={{ height: '70%' }} />
                <i className="falcon-bar" style={{ height: '74%' }} />
                <i className="falcon-bar" style={{ height: '86%' }} />
                <i className="falcon-bar" style={{ height: '82%' }} />
                <i className="falcon-bar" style={{ height: '76%' }} />
              </div>

              <div className="falcon-value-chip">{cur.timelineValue}</div>

              <div className="falcon-axis">
                <span>INGEST</span>
                <span>CLUSTER</span>
                <span>PEAK</span>
                <span>RESOLVED</span>
              </div>
            </div>

            <div className="falcon-card-copy">
              <h2>Instant Visibility</h2>
              <p>Real-time telemetry across {cur.service}.</p>
              <span className="falcon-corner-icon">
                <i className="falcon-spark-glyph" />
              </span>
            </div>
          </article>

          {/* CARD 2 — Autonomous Workflows (Center Hero) */}
          <article className="falcon-card" aria-label="Autonomous agent resolution">
            <div className="falcon-card-panel">
              <div className="falcon-assistant-head">
                <span className="falcon-badge">
                  <i className="falcon-star-glyph" />
                </span>
                <span>Meko AI Agent</span>
              </div>

              <p className="falcon-question">How can I remediate {cur.name}?</p>

              <div className="falcon-prompt">
                <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'inherit', whiteSpace: 'pre-wrap' }}>
                  {cur.patch}
                </pre>
              </div>

              <div className="falcon-automate-btn" role="button" tabIndex={0}>
                <span className="falcon-automate-label">Synthesize Fix</span>
                <canvas
                  ref={sparkleCanvasRef}
                  className="falcon-magic-canvas"
                  data-sparkle-icon
                  aria-hidden="true"
                />
              </div>

              <i className="falcon-cursor" aria-hidden="true" />
            </div>

            <div className="falcon-card-copy">
              <h2>Autonomous Workflows</h2>
              <p>Automate fixes with Meko memory.</p>
              <span className="falcon-corner-icon">
                <i className="falcon-flow-glyph" />
              </span>
            </div>
          </article>

          {/* CARD 3 — Faster Decisions & Verified Gate */}
          <article className="falcon-card is-feature" aria-label="Verified decision gate and human sign-off">
            <div className="falcon-card-panel">
              <div className="falcon-metric">
                <div className="falcon-metric-label">Token conservation</div>
                <div className="falcon-metric-row">
                  <strong>{cur.timeSaved}</strong>
                  <span>{cur.efficiencyRate}</span>
                </div>
              </div>

              <canvas
                ref={flowCanvasRef}
                className="falcon-decision-flow-canvas"
                data-flow-chart
                aria-label="Multi-agent verification consensus converging into optimized resolution"
              />

              <button
                className={`falcon-tag falcon-tag-action ${isApproved ? 'is-committed' : ''}`}
                onClick={handleApprove}
                disabled={isApproved}
                type="button"
                aria-label="Approve fix and commit to Meko memory"
              >
                {isApproved ? 'Action: Committed ✓' : 'Action: Sign-off & Approve'}
              </button>

              <div className="falcon-tag falcon-tag-confidence">
                Decision Confidence: {cur.similarity}
              </div>

              <div className="falcon-tag falcon-tag-path">
                Tests: {cur.testStatus.split(' ')[0]} / {cur.testStatus.split(' ')[2]} Passed
              </div>
            </div>

            <div className="falcon-card-copy">
              <h2>Faster Decisions</h2>
              <p>Turn verified fixes into permanent reflexes.</p>
              <span className="falcon-corner-icon">
                <i className="falcon-speed-glyph" />
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default FalconConsole;
