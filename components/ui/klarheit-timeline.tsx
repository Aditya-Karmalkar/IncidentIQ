'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TimelineStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  bottomTag: string;
}

const STEPS: TimelineStep[] = [
  {
    id: 'ingest',
    stepNumber: '2026',
    title: 'Where It All Started',
    subtitle: 'Step 1: Ingest · Telemetry and traces',
    description:
      'Incoming tickets, alerts, logs, and stack traces are normalized and converted into semantic incident embeddings in real time.',
    bottomTag: 'START SMALL. THINK BIG.',
  },
  {
    id: 'search',
    stepNumber: '2027',
    title: 'Search Before Solve',
    subtitle: 'Step 2: Sub-20ms retrieval',
    description:
      "Agents query Meko's hybrid vector and lexical index before performing expensive reasoning, retrieving relevant past fixes instantly.",
    bottomTag: 'RETRIEVE FIRST. REASON SECOND.',
  },
  {
    id: 'verify',
    stepNumber: '2028',
    title: 'Human Verification',
    subtitle: 'Step 3: Zero contamination',
    description:
      'Only resolutions that pass automated sandbox regression tests and receive human engineer approval are added to persistent memory.',
    bottomTag: 'PROVE THEN PERSIST.',
  },
  {
    id: 'recall',
    stepNumber: '2029',
    title: 'Collective Recall',
    subtitle: 'Step 4: Cross-agent memory',
    description:
      'When a related issue appears weeks later in a different service or region, all agents immediately cite and apply the verified solution.',
    bottomTag: 'NEVER SOLVE TWICE.',
  },
];

/**
 * Klarheit Timeline Component
 * Pixel-faithful replication of Flowbase Klarheit Timeline 02:
 * - Top divider rule with section eyebrow "THE PROCESS"
 * - Left sticky column with editorial title, description, and pill CTA ("Start a Project" ->)
 * - Spine line with circular orange nodes (o) aligned with each card
 * - Right column of deep black cards with Playfair Display editorial typography,
 *   orange year/step badge, description, bottom-right uppercase motto,
 *   and smooth scroll reveal entrance animations.
 */
const KlarheitStickyHeader = React.memo(function KlarheitStickyHeader() {
  return (
    <div className="klarheit-left">
      <div className="klarheit-sticky-content">
        <h2 className="klarheit-headline">
          How Meko turns past outages into permanent organizational reflexes
        </h2>
        <p className="klarheit-subtext">
          Every solved incident automatically upgrades every engineer and AI agent on your team. No more siloed knowledge or forgotten post-mortems.
        </p>
        <a
          href="#platform"
          className="klarheit-cta-btn"
          aria-label="Start a project with Meko"
        >
          <span>Start a Project</span>
          <span className="klarheit-cta-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
              <path
                d="M3.5 8h9M8.5 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
});

export function KlarheitTimeline() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({ 0: true });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.add('js-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setRevealed((prev) => (prev[index] ? prev : { ...prev, [index]: true }));
              setActiveIdx(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '50px 0px -5% 0px',
        threshold: 0.05,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="klarheit-container">
      {/* Top divider with Eyebrow */}
      <div className="klarheit-eyebrow-wrap">
        <span className="klarheit-eyebrow-text">THE PROCESS</span>
        <div className="klarheit-eyebrow-divider" aria-hidden="true" />
      </div>

      <div className="klarheit-layout">
        {/* LEFT COLUMN: Sticky Section Header & Pill CTA */}
        <KlarheitStickyHeader />

        {/* RIGHT STREAM: Vertical Spine Line + Aligned Dark Cards */}
        <div className="klarheit-stream">
          {/* Continuous vertical line spanning the cards */}
          <div className="klarheit-stream-line" aria-hidden="true" />

          {STEPS.map((step, idx) => {
            const isActive = activeIdx === idx;
            const isRevealed = Boolean(revealed[idx]);
            return (
              <div key={step.id} className="klarheit-row">
                {/* Timeline Spine Node Cell */}
                <div className="klarheit-node-cell" aria-hidden="true">
                  <div
                    className={`klarheit-node-donut ${isActive ? 'is-active' : ''} ${isRevealed ? 'is-revealed' : ''}`}
                  />
                </div>

                {/* Dark Card with Scroll Reveal */}
                <div
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  data-index={idx}
                  className={`klarheit-card ${isRevealed ? 'is-revealed' : ''} ${isActive ? 'is-current' : ''}`}
                >
                  {/* Card Top Row: Title + Step/Year Badge */}
                  <div className="klarheit-card-top">
                    <h3 className="klarheit-card-title">{step.title}</h3>
                    <span className="klarheit-card-tag">{step.stepNumber}</span>
                  </div>

                  {/* Card Bottom Row: Description Block + Bottom Right Tagline */}
                  <div className="klarheit-card-footer">
                    <div className="klarheit-card-text-block">
                      {step.subtitle && (
                        <div className="klarheit-card-subtitle">{step.subtitle}</div>
                      )}
                      <p className="klarheit-card-desc">{step.description}</p>
                    </div>
                    <div className="klarheit-card-motto-wrap">
                      <span className="klarheit-card-motto">{step.bottomTag}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default KlarheitTimeline;
