'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { WordmarkFooter } from '@/components/ui/wordmark-footer';
import { BrandLogo } from '@/components/ui/brand-logo';
import { InteractiveBrand } from '@/components/ui/interactive-logo';
import { KlarheitTimeline } from '@/components/ui/klarheit-timeline';
import { FalconConsole } from '@/components/ui/falcon-console';
import { AuditBento } from '@/components/ui/audit-bento';

interface CharData {
  el: HTMLSpanElement;
  isHl: boolean;
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const stmtRef = useRef<HTMLParagraphElement | null>(null);
  const statementRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<HTMLElement | null>(null);
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const shipRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // --- 1. HELPERS & MATH ---
    function clamp(val: number, min: number = 0, max: number = 1): number {
      return Math.max(min, Math.min(max, val));
    }

    function smoothstep(min: number, max: number, value: number): number {
      const x = clamp((value - min) / (max - min));
      return x * x * (3 - 2 * x);
    }

    interface RGB {
      r: number;
      g: number;
      b: number;
    }

    function hexToRgb(hex: string): RGB {
      const clean = hex.replace('#', '');
      const num = parseInt(clean, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    }

    function mixRgb(c1: RGB, c2: RGB, factor: number): RGB {
      const f = clamp(factor, 0, 1);
      return {
        r: Math.round(c1.r + (c2.r - c1.r) * f),
        g: Math.round(c1.g + (c2.g - c1.g) * f),
        b: Math.round(c1.b + (c2.b - c1.b) * f),
      };
    }

    const cCore: RGB = hexToRgb('#8fd5f1');
    const cRim: RGB = hexToRgb('#d2daff');
    const cWhite: RGB = hexToRgb('#ffffff');

    // --- 2. TEXT SPLITTING HELPER ---
    function splitText(el: HTMLElement): CharData[] {
      const chars: CharData[] = [];
      const nodes = Array.from(el.childNodes);
      el.innerHTML = '';

      function processNode(node: Node, insideHl: boolean) {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || '';
          const words = text.split(/(\s+)/);

          words.forEach((chunk) => {
            if (/^\s+$/.test(chunk)) {
              el.appendChild(document.createTextNode(chunk));
            } else if (chunk.length > 0) {
              const wordSpan = document.createElement('span');
              wordSpan.className = 'word-span';

              for (let i = 0; i < chunk.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.className = 'char-span';
                charSpan.textContent = chunk[i];
                wordSpan.appendChild(charSpan);
                chars.push({ el: charSpan, isHl: insideHl });
              }
              el.appendChild(wordSpan);
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const elem = node as HTMLElement;
          if (elem.tagName.toLowerCase() === 'br') {
            el.appendChild(document.createElement('br'));
          } else {
            const isHl = insideHl || elem.classList.contains('hl');
            elem.childNodes.forEach((child) => processNode(child, isHl));
          }
        }
      }

      nodes.forEach((node) => processNode(node, false));
      return chars;
    }

    // --- 3. PAINT FUNCTION (LETTER REVEAL) ---
    function paint(
      chars: CharData[],
      p: number,
      spread: number,
      finalHex: string,
      accentHex: string,
      ghostHex: string,
      minOpacity: number = 0
    ) {
      const n = chars.length;
      const ghostRgb = hexToRgb(ghostHex);
      const accentRgb = hexToRgb(accentHex);
      const finalRgb = hexToRgb(finalHex);
      const hlAccentRgb = hexToRgb('#5b7cf0');

      for (let i = 0; i < n; i++) {
        const char = chars[i];
        const t = clamp((p * (1 + spread) - i / n) / spread, 0, 1);

        let opacity = minOpacity;
        let color: RGB = ghostRgb;
        let blur = minOpacity > 0 ? 1.5 : 8;

        if (t <= 0) {
          opacity = minOpacity;
          color = minOpacity > 0 ? hexToRgb('#7b90b2') : ghostRgb;
          blur = minOpacity > 0 ? 0 : 8;
        } else if (t <= 0.35) {
          const prog = t / 0.35;
          opacity = minOpacity + (1 - minOpacity) * prog;
          color = mixRgb(minOpacity > 0 ? hexToRgb('#7b90b2') : ghostRgb, accentRgb, prog);
          blur = minOpacity > 0 ? 0 : 8 - 6.5 * prog;
        } else if (t <= 0.70) {
          const prog = (t - 0.35) / 0.35;
          opacity = 1;
          color = mixRgb(accentRgb, accentRgb, prog);
          blur = 0;
        } else {
          const prog = (t - 0.70) / 0.30;
          opacity = 1;
          const targetFinal = char.isHl ? hlAccentRgb : finalRgb;
          color = mixRgb(accentRgb, targetFinal, prog);
          blur = 0;
        }

        char.el.style.opacity = `${opacity}`;
        char.el.style.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
        char.el.style.filter = blur > 0.05 ? `blur(${blur}px)` : 'none';
      }
    }

    // Split texts
    let h1Chars: CharData[] = [];
    let stmtChars: CharData[] = [];
    let h2Chars: CharData[] = [];

    if (h1Ref.current) h1Chars = splitText(h1Ref.current);
    if (stmtRef.current) stmtChars = splitText(stmtRef.current);
    if (h2Ref.current) h2Chars = splitText(h2Ref.current);

    // Initial paint at p = 0
    paint(h1Chars, 0, 0.35, '#0b1d3a', '#3f7cff', '#ffffff');
    paint(stmtChars, 0, 0.22, '#0b1d3a', '#3f7cff', '#ffffff', 0.28);
    paint(h2Chars, 0, 0.35, '#ffffff', '#8fe6f4', '#5c6f92');

    // --- PLATFORM SECTIONS TEXT REVEAL ON SCROLL ---
    // Extends the letter-by-letter reveal effect to all sections starting from
    // "Three autonomous agents. One persistent operational memory." downwards
    interface PlatformRevealTarget {
      el: HTMLElement;
      chars: CharData[];
      spread: number;
      finalHex: string;
      accentHex: string;
      ghostHex: string;
      minOpacity: number;
    }

    const platformRevealTargets: PlatformRevealTarget[] = [];

    // Headline targets: Section A (Three autonomous agents), Section B (Interactive incident workspace),
    // Section C (How Meko turns past outages), Section D (Complete provenance), Section E (Measured impact),
    // Section F (Stop solving the same bug twice)
    const headlineNodes = document.querySelectorAll<HTMLElement>(
      '.platform-section .section-headline, .klarheit-headline, .cta-box h2'
    );
    headlineNodes.forEach((el) => {
      const chars = splitText(el);
      if (chars.length > 0) {
        platformRevealTargets.push({
          el,
          chars,
          spread: 0.28,
          finalHex: '#0b1d3a',
          accentHex: '#3f7cff',
          ghostHex: '#7b90b2',
          minOpacity: 0.25,
        });
        paint(chars, 0, 0.28, '#0b1d3a', '#3f7cff', '#7b90b2', 0.25);
      }
    });

    // Subtext targets
    const subtextNodes = document.querySelectorAll<HTMLElement>(
      '.platform-section .section-subtext, .klarheit-subtext, .cta-box p'
    );
    subtextNodes.forEach((el) => {
      const chars = splitText(el);
      if (chars.length > 0) {
        platformRevealTargets.push({
          el,
          chars,
          spread: 0.22,
          finalHex: '#5c6f92',
          accentHex: '#5b7cf0',
          ghostHex: '#7b90b2',
          minOpacity: 0.32,
        });
        paint(chars, 0, 0.22, '#5c6f92', '#5b7cf0', '#7b90b2', 0.32);
      }
    });

    // Add body.ready and html.js on first frame
    requestAnimationFrame(() => {
      document.body.classList.add('ready');
      document.documentElement.classList.add('js');
    });

    // --- 4. BOWL GLOW SCROLL TABLE & CANVAS ---
    const scrollKeys = [
      { q: 0, tip: 0.30, half: 0.34, soft: 0.22 },
      { q: 0.03, tip: 0.45, half: 0.38, soft: 0.26 },
      { q: 0.08, tip: 0.65, half: 0.38, soft: 0.22 },
      { q: 0.18, tip: 0.80, half: 0.38, soft: 0.22 },
      { q: 0.40, tip: 0.95, half: 0.38, soft: 0.19 },
      { q: 0.66, tip: 1.05, half: 0.46, soft: 0.16 },
      { q: 0.87, tip: 1.05, half: 0.66, soft: 0.13 },
      { q: 1.15, tip: 1.10, half: 0.90, soft: 0.10 },
      { q: 1.43, tip: 1.30, half: 1.60, soft: 0.10 },
      { q: 1.80, tip: 2.40, half: 3.00, soft: 0.10 },
    ];

    function getScrollTargets(q: number) {
      if (q <= scrollKeys[0].q) {
        return { ...scrollKeys[0] };
      }
      const lastKey = scrollKeys[scrollKeys.length - 1];
      if (q >= lastKey.q) {
        return { ...lastKey };
      }

      let idx = 0;
      while (idx < scrollKeys.length - 1 && scrollKeys[idx + 1].q < q) {
        idx++;
      }
      const k1 = scrollKeys[idx];
      const k2 = scrollKeys[idx + 1];
      const factor = (q - k1.q) / (k2.q - k1.q);

      return {
        tip: k1.tip + (k2.tip - k1.tip) * factor,
        half: k1.half + (k2.half - k1.half) * factor,
        soft: k1.soft + (k2.soft - k1.soft) * factor,
      };
    }

    let curTip = -0.30;
    let curHalf = 0.30;
    let curSoft = 0.10;

    let tgtTip = 0.30;
    let tgtHalf = 0.34;
    let tgtSoft = 0.22;

    const startTime = performance.now();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const CW = 96;
    const CH = 60;
    const imgData = ctx?.createImageData(CW, CH);

    function distToSegment(
      px: number,
      py: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): number {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len2 = dx * dx + dy * dy;
      if (len2 === 0) return Math.hypot(px - x1, py - y1);
      const t = clamp(((px - x1) * dx + (py - y1) * dy) / len2, 0, 1);
      return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
    }

    // --- 5. ON SCROLL LOGIC ---
    let q = 0;
    let pStmt = 0;

    function handleScroll() {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      q = scrollY / innerHeight;

      const targets = getScrollTargets(q);
      tgtTip = targets.tip;
      tgtHalf = targets.half;
      tgtSoft = targets.soft;

      // Statement rise & reveal based on section viewport position
      if (statementRef.current) {
        const rect = statementRef.current.getBoundingClientRect();
        const pinScroll = Math.max(0, -rect.top);

        // Smooth rise: settles into vertical center over first 35% of a screen
        const s = clamp(pinScroll / (innerHeight * 0.35), 0, 1);
        const translateY = 0.12 * Math.pow(1 - s, 2) * innerHeight;
        if (stmtRef.current) {
          stmtRef.current.style.transform = `translateY(${translateY}px)`;
        }

        // Smooth progressive letter reveal: unfolds line by line and finishes completely by 0.65 screen heights
        pStmt = clamp(pinScroll / (innerHeight * 0.65), 0, 1);
        paint(stmtChars, pStmt, 0.22, '#0b1d3a', '#3f7cff', '#ffffff', 0.28);
      }

      // Nav CTA activation when pStmt > 0.4
      if (navRef.current) {
        if (pStmt > 0.4) {
          navRef.current.classList.add('on');
        } else {
          navRef.current.classList.remove('on');
        }
      }

      // Dark Split
      if (splitRef.current) {
        const splitTop = splitRef.current.getBoundingClientRect().top;
        const p2 = clamp((0.8 - splitTop / innerHeight) / 0.65, 0, 1);
        paint(h2Chars, p2, 0.35, '#ffffff', '#8fe6f4', '#5c6f92');

        if (rowRef.current) {
          if (p2 > 0.92) {
            rowRef.current.classList.add('visible');
          } else {
            rowRef.current.classList.remove('visible');
          }
        }

        if (shipRef.current) {
          const scale = 1.08 - 0.08 * clamp(1 - splitTop / innerHeight, 0, 1);
          shipRef.current.style.transform = `scale(${scale})`;
        }
      }

      // Platform sections text reveal on scroll (from "Three autonomous agents..." onwards)
      for (let i = 0; i < platformRevealTargets.length; i++) {
        const item = platformRevealTargets[i];
        const rect = item.el.getBoundingClientRect();
        const startY = innerHeight * 0.88;
        const endY = innerHeight * 0.35;
        const p = clamp((startY - rect.top) / (startY - endY), 0, 1);
        paint(
          item.chars,
          p,
          item.spread,
          item.finalHex,
          item.accentHex,
          item.ghostHex,
          item.minOpacity
        );
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    // --- 6. MAIN RAF ANIMATION LOOP ---
    let animId: number;

    function animate(time: number) {
      const tSec = (time - startTime) / 1000;

      // Hero headline letter reveal over 1.25s
      const h1Progress = clamp(tSec / 1.25, 0, 1);
      paint(h1Chars, h1Progress, 0.35, '#0b1d3a', '#3f7cff', '#ffffff');

      // Bowl Glow Intro (0 -> 0.25s delay, 1.05s ease)
      if (tSec < 1.30) {
        if (tSec < 0.25) {
          curTip = -0.30;
          curHalf = 0.30;
          curSoft = 0.10;
        } else {
          const introProg = smoothstep(0.25, 1.30, tSec);
          curTip = -0.30 + (tgtTip - (-0.30)) * introProg;
          curHalf = 0.30 + (tgtHalf - 0.30) * introProg;
          curSoft = 0.10 + (tgtSoft - 0.10) * introProg;
        }
      } else {
        // Eased chase: cur += (tgt - cur) * 0.12
        curTip += (tgtTip - curTip) * 0.12;
        curHalf += (tgtHalf - curHalf) * 0.12;
        curSoft += (tgtSoft - curSoft) * 0.12;
      }

      // Idle breathing drift
      const driftTip = curTip + Math.sin(time * 0.00033 + 1.3) * 0.02;
      const driftHalf = curHalf + Math.sin(time * 0.0005) * 0.015;
      const softVal = Math.max(0.01, curSoft);

      // Render 96x60 canvas
      if (ctx && imgData) {
        const aspect = window.innerWidth / window.innerHeight;
        const RND = 0.25;
        const N = 48;
        const poly: { x: number; y: number }[] = [];

        for (let i = 0; i <= N; i++) {
          const yy = -0.3 + (driftTip - (-0.3)) * (i / N);
          const ratio = Math.max(0, 1 - yy / driftTip);
          const cx = driftHalf * aspect * Math.pow(ratio, 0.72);
          poly.push({ x: cx, y: yy });
        }

        const data = imgData.data;
        let pIdx = 0;

        for (let y = 0; y < CH; y++) {
          const py = y / CH;
          for (let x = 0; x < CW; x++) {
            const px = Math.abs(x / CW - 0.5) * aspect;

            let minDist = 1e9;
            for (let i = 0; i < N; i++) {
              const d = distToSegment(
                px,
                py,
                poly[i].x,
                poly[i].y,
                poly[i + 1].x,
                poly[i + 1].y
              );
              if (d < minDist) minDist = d;
            }

            const isInside =
              py < driftTip &&
              px < driftHalf * aspect * Math.pow(Math.max(0, 1 - py / driftTip), 0.72);

            const sd = (isInside ? -minDist : minDist) - RND;
            const norm = (sd + softVal) / (2 * softVal);
            const sVal = clamp(norm, 0, 1);
            const g = 1 - (sVal * sVal * (3 - 2 * sVal));

            let col: RGB;
            if (g < 0.38) {
              const f = smoothstep(0, 0.38, g);
              col = mixRgb(cWhite, cRim, f);
            } else {
              const f = smoothstep(0.38, 1.0, g);
              col = mixRgb(cRim, cCore, f);
            }

            data[pIdx] = col.r;
            data[pIdx + 1] = col.g;
            data[pIdx + 2] = col.b;
            data[pIdx + 3] = 255;
            pIdx += 4;
          }
        }
        ctx.putImageData(imgData, 0, 0);
      }

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Background Atmo Canvas */}
      <div className="atmo">
        <canvas id="bg" ref={canvasRef} width={96} height={60} aria-hidden="true" />
      </div>

      {/* Fixed Pill Navbar */}
      <header className="nav" id="nav" ref={navRef}>
        <InteractiveBrand size={22} className="nav-brand" />

        <nav className="nav-links">
          <a className="nav-link" href="#platform">Platform</a>
          <a className="nav-link" href="#agents">Agents</a>
          <a className="nav-link" href="#context">Meko Engine</a>
          <a className="nav-link" href="#audit">Auditability</a>
          <Link className="nav-link" href="/dashboard">Dashboard</Link>
          <Link className="nav-link" href="/dashboard?tab=queue">Queue</Link>
          <Link className="nav-link" href="/dashboard?tab=benchmarks">Benchmarks</Link>
        </nav>

        <div className="nav-right">
          <Link href="/dashboard?tab=queue" className="nav-login">Queue</Link>
          <div className="navcta">
            <Link
              href="/dashboard"
              className="btn"
              aria-label="Launch Console"
            >
              <span className="lbl">Launch Console</span>
              <span className="btn-arrow-circle">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M4.5 2.5 8 6l-3.5 3.5"
                    stroke="#0b1d3a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <section className="hero" id="hero">
          <h1 id="h1" ref={h1Ref}>
            Meet <span className="hl">IncidentIQ</span>, collaborative AI<br />
            for technical support teams
          </h1>

          <p className="trust fade-up" style={{ '--d': '1.15s' } as React.CSSProperties}>
            Technical support & DevOps teams resolve faster with IncidentIQ
          </p>

          <div className="hero-cta fade-up" style={{ '--d': '1.3s' } as React.CSSProperties}>
            <Link
              href="/dashboard"
              className="btn lg"
              aria-label="Launch Console"
            >
              <span>Launch Console</span>
              <span className="btn-arrow-circle">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M4.5 2.5 8 6l-3.5 3.5"
                    stroke="#0b1d3a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/dashboard?tab=queue"
              className="btn lg secondary"
              aria-label="View 32 Incidents"
            >
              <span>View 32 Incidents</span>
            </Link>
          </div>

          {/* 4x2 Partner / Tech Stack Logo Grid */}
          <div className="logos">
            {/* 1. KUBERNETES */}
            <div className="logo-cell fade-up" style={{ '--d': '1.25s' } as React.CSSProperties}>
              <svg viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="10" r="7" />
                <path d="M12 3v14M5 7l14 6M5 13l14-6" />
              </svg>
              <span>Kubernetes</span>
            </div>

            {/* 2. PostgreSQL */}
            <div className="logo-cell fade-up" style={{ '--d': '1.32s' } as React.CSSProperties}>
              <span className="logo-nordhavn">PostgreSQL</span>
            </div>

            {/* 3. Datadog */}
            <div className="logo-cell fade-up" style={{ '--d': '1.39s' } as React.CSSProperties}>
              <svg viewBox="0 0 18 20" fill="currentColor" aria-hidden="true">
                <rect x="1" y="10" width="3.5" height="10" rx="1" />
                <rect x="7" y="5" width="3.5" height="15" rx="1" />
                <rect x="13" y="8" width="3.5" height="12" rx="1" />
              </svg>
              <span>Datadog</span>
            </div>

            {/* 4. Meko */}
            <div className="logo-cell fade-up" style={{ '--d': '1.46s' } as React.CSSProperties}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
                <polygon points="10,2 18,7 18,15 10,19 2,15 2,7" />
              </svg>
              <span className="logo-kelpway-text">Meko</span>
            </div>

            {/* 5. PagerDuty */}
            <div className="logo-cell row-2 fade-up" style={{ '--d': '1.42s' } as React.CSSProperties}>
              <span className="logo-tideline">PagerDuty</span>
            </div>

            {/* 6. Docker */}
            <div className="logo-cell row-2 fade-up" style={{ '--d': '1.49s' } as React.CSSProperties}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="11" width="3" height="3" />
                <rect x="7" y="11" width="3" height="3" />
                <rect x="11" y="11" width="3" height="3" />
                <rect x="7" y="7" width="3" height="3" />
                <path d="M2 15c4 2 12 2 16-2" />
              </svg>
              <span>Docker</span>
            </div>

            {/* 7. FastAPI */}
            <div className="logo-cell row-2 fade-up" style={{ '--d': '1.56s' } as React.CSSProperties}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="10" cy="10" r="7" />
                <path d="M11 6l-3 4h4l-3 4" fill="currentColor" stroke="none" />
              </svg>
              <span className="logo-seaflux-text">FastAPI</span>
            </div>

            {/* 8. Grafana */}
            <div className="logo-cell row-2 fade-up" style={{ '--d': '1.63s' } as React.CSSProperties}>
              <svg viewBox="0 0 22 20" fill="currentColor" aria-hidden="true">
                <polygon points="11,3 21,17 1,17" />
                <polygon points="17,8 21,17 13,17" opacity="0.6" />
              </svg>
              <span className="logo-porterra-text">Grafana</span>
            </div>
          </div>
        </section>

        {/* 2. Statement Section (Pinned) */}
        <section className="statement" id="statement" ref={statementRef}>
          <div className="pin">
            <p id="stmt" ref={stmtRef}>
              IncidentIQ is an AI teammate<br />{' '}
              that triages tickets, retrieves verified fixes, analyzes logs,<br />{' '}
              coordinates agents, verifies solutions and does anything<br />{' '}
              in between to keep support engineering moving
            </p>
          </div>
        </section>

        {/* 3. Dark Split Section */}
        <section className="split" id="split" ref={splitRef}>
          <div className="l">
            <div className="guide-line" />
            <h2 id="h2" ref={h2Ref}>
              AI teammates that collaborate<br />
              and remember every fix
            </h2>

            <div id="row" ref={rowRef}>
              <h3>Support & DevOps Teams</h3>
              <p>
                <strong>Resolve faster. Cut token waste. Never solve the same bug twice.</strong>{' '}
                IncidentIQ&apos;s Triage, Resolution, and Verification agents query Meko before
                investigating — reusing verified human-approved fixes with complete decision auditability.
              </p>
            </div>
          </div>

          <div className="r">
            <img
              id="ship"
              ref={shipRef}
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85"
              alt="High-performance cloud server infrastructure and telemetry in a dark datacenter"
            />
          </div>
        </section>

        {/* 4. Hallmark Console: Platform & Workspace Extension */}
        <div className="platform-wrapper">
          {/* Section A: Multi-Agent Architecture */}
          <section className="platform-section" id="agents">
            <h2 className="section-headline">
              Three autonomous agents. One persistent operational memory.
            </h2>
            <p className="section-subtext">
              Instead of single-prompt bots that hallucinate or repeat mistakes, IncidentIQ delegates across specialized agents connected by Meko&apos;s shared context pool.
            </p>

            {/* Product Landing Feature Mosaic */}
            <div className="mosaic-embed-wrap">
              <iframe
                src="/mosaic.html"
                title="Three autonomous agents. One persistent operational memory."
                className="mosaic-iframe"
                loading="lazy"
              />
            </div>
          </section>

          {/* Section B: Interactive Incident Resolution Console */}
          <section className="platform-section border-top" id="platform">
            <h2 className="section-headline">
              Interactive incident workspace
            </h2>
            <p className="section-subtext">
              Select an active incident below to inspect raw telemetry, view Meko&apos;s semantic match, review the synthesized patch, and execute human-in-the-loop signoff.
            </p>

            {/* Falcon Triptych Investigation Console */}
            <FalconConsole />
          </section>

          {/* Section C: Meko Context Engine */}
          <section className="platform-section border-top" id="context">
            {/* Klarheit Timeline 02 (Flowbase-inspired Progressive Milestone Track) */}
            <KlarheitTimeline />
          </section>

          {/* Section D: Enterprise Auditability (Challenge 07) */}
          <section className="platform-section border-top" id="audit">
            <h2 className="section-headline">
              Complete provenance, immutable execution traces, zero black boxes
            </h2>
            <p className="section-subtext">
              Every agent step, tool call, retrieved document, and human approval is cryptographically logged for full compliance and post-mortem transparency.
            </p>

            {/* Maya Lind Bento Grid — IncidentIQ Cryptographic Audit Ledger */}
            <AuditBento />
          </section>

          {/* Section E: Benchmarks & Token Efficiency (Challenge 02 & 08) */}
          <section className="platform-section border-top" id="benchmark">
            <h2 className="section-headline">
              Measured impact across real production workloads
            </h2>
            <p className="section-subtext">
              By combining persistent Meko shared context with deterministic agent verification, IncidentIQ outperforms traditional isolated AI assistants across every key engineering metric.
            </p>

            <div className="benchmarks-grid">
              <div className="benchmark-card">
                <div className="benchmark-stat">-74%</div>
                <div className="benchmark-label">Token consumption</div>
                <p className="benchmark-desc">
                  “Search before solve” eliminates redundant multi-turn LLM reasoning iterations.
                </p>
              </div>

              <div className="benchmark-card">
                <div className="benchmark-stat">-65%</div>
                <div className="benchmark-label">Mean time to resolution</div>
                <p className="benchmark-desc">
                  Recurring P1 and P2 incidents resolved in under 90 seconds instead of hours.
                </p>
              </div>

              <div className="benchmark-card">
                <div className="benchmark-stat">78%</div>
                <div className="benchmark-label">Knowledge reuse rate</div>
                <p className="benchmark-desc">
                  Nearly 4 out of 5 production incidents match verified organizational knowledge.
                </p>
              </div>

              <div className="benchmark-card">
                <div className="benchmark-stat">100%</div>
                <div className="benchmark-label">Decision auditability</div>
                <p className="benchmark-desc">
                  Zero unaccounted agent actions; complete transparency for enterprise compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Section F: Call to Action */}
          <section className="platform-section" id="cta">
            <div className="cta-box">
              <h2>
                Stop solving the same bug twice.<br />
                Give your engineering team collective memory.
              </h2>
              <p>
                Equip your support and DevOps engineers with AI teammates that learn from every resolved incident and collaborate with verified organizational knowledge.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn lg"
                  type="button"
                  aria-label="Launch Investigation Workspace"
                  onClick={() => {
                    const el = document.getElementById('platform');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="lbl">Launch Investigation Workspace</span>
                  <span className="btn-arrow-circle">
                    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M4.5 2.5 8 6l-3.5 3.5" stroke="#0b1d3a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <button
                  className="btn-secondary"
                  type="button"
                  aria-label="Explore Agent Architecture"
                  onClick={() => {
                    const el = document.getElementById('agents');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Agent Architecture
                </button>
              </div>
            </div>
          </section>

          {/* Wordmark Footer */}
          <WordmarkFooter
            name="IncidentIQ"
            legalName="IncidentIQ, Inc."
            year={2026}
            description="AI teammates for technical support & DevOps engineering. Powered by the Meko persistent context engine."
            status="Meko context index operational"
            email="security@incidentiq.ai"
            columns={[
              {
                title: "Platform",
                links: [
                  { label: "Operations Dashboard", href: "/dashboard" },
                  { label: "Incident Queue", href: "/tickets" },
                  { label: "Investigation Workspace", href: "/investigation" },
                  { label: "SRE Approval Gate", href: "/approvals" },
                ],
              },
              {
                title: "Core Engines",
                links: [
                  { label: "Triage & Resolution Agents", href: "#agents" },
                  { label: "Falcon Operations Console", href: "#platform" },
                  { label: "Meko Memory Timeline", href: "#context" },
                  { label: "Audit Execution Ledger", href: "#audit" },
                ],
              },
              {
                title: "Evaluation",
                links: [
                  { label: "Mode A vs Mode B Benchmarks", href: "/analytics" },
                  { label: "Token Efficiency Telemetry", href: "/analytics" },
                  { label: "Provenance Ledger", href: "/investigation" },
                  { label: "Documentation", href: "#audit" },
                ],
              },
            ]}
            credit={{
              label: "Meko ContextCon 2026",
              href: "https://github.com",
            }}
          />
        </div>
      </main>
    </>
  );
}
