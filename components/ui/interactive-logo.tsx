'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { BrandLogo } from './brand-logo';

interface InteractiveBrandProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

const LETTERS = 'IncidentIQ'.split('');

/**
 * Interactive brand lockup using the variable 'Allo' font (Josh Puckett).
 * Modulates variable axes ('wght' 100-900, 'ROND' 0-100, 'opsz' 9-32)
 * in real-time as the cursor moves across the wordmark.
 */
export function InteractiveBrand({
  className = '',
  size = 22,
  interactive = true,
}: InteractiveBrandProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [logoActive, setLogoActive] = useState(false);

  // Letter font-variation states
  // Default: wght 560, ROND 35 (sharp-modern), opsz 22
  const resetLetterSettings = useCallback(() => {
    letterRefs.current.forEach((span) => {
      if (span) {
        span.style.fontVariationSettings = "'wght' 560, 'ROND' 35, 'opsz' 22";
        span.style.transform = 'translateY(0px)';
      }
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      letterRefs.current.forEach((span) => {
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dist = Math.hypot(mouseX - centerX, mouseY - centerY);
        const maxDist = 90; // Proximity field

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist; // 0 to 1
          // Smooth curve factor
          const easeFactor = Math.sin((factor * Math.PI) / 2);

          const wght = Math.round(560 + easeFactor * 320); // 560 -> 880
          const rond = Math.round(35 + easeFactor * 65);   // 35 -> 100 (super round)
          const lift = -(easeFactor * 3.5);                // subtle physical elevation

          span.style.fontVariationSettings = `'wght' ${wght}, 'ROND' ${rond}, 'opsz' 28`;
          span.style.transform = `translateY(${lift.toFixed(1)}px)`;
        } else {
          span.style.fontVariationSettings = "'wght' 560, 'ROND' 35, 'opsz' 22";
          span.style.transform = 'translateY(0px)';
        }
      });
    },
    [interactive]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    setLogoActive(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setLogoActive(false);
    resetLetterSettings();
  };

  useEffect(() => {
    resetLetterSettings();
  }, [resetLetterSettings]);

  return (
    <div
      ref={containerRef}
      className={`interactive-brand-lockup inline-flex items-center gap-2.5 cursor-pointer select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="IncidentIQ Brand Home"
    >
      {/* Brand Mark with kinetic telemetry micro-rotation */}
      <div
        className="brand-mark-wrapper transition-transform duration-300 ease-out"
        style={{
          transform: logoActive ? 'scale(1.08) rotate(6deg)' : 'scale(1) rotate(0deg)',
          filter: logoActive ? 'drop-shadow(0 0 8px rgba(47, 224, 208, 0.45))' : 'none',
        }}
      >
        <BrandLogo size={size} className="brand-mark" />
      </div>

      {/* Dynamic Wordmark rendered with Allo variable font */}
      <span
        className="brand-wordmark inline-flex tracking-[-0.02em] text-[19px] leading-none text-[var(--ink)]"
        style={{
          fontFamily: "'Allo', var(--font-body), sans-serif",
          fontFeatureSettings: "'cv02', 'cv03', 'cv04', 'ss02'",
        }}
        aria-hidden="true"
      >
        {LETTERS.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              letterRefs.current[i] = el;
            }}
            className="inline-block transition-transform duration-150 ease-out"
            style={{
              fontVariationSettings: "'wght' 560, 'ROND' 35, 'opsz' 22",
              willChange: 'font-variation-settings, transform',
            }}
          >
            {char}
          </span>
        ))}
      </span>

      {/* Visually hidden text for screen readers */}
      <span className="sr-only">IncidentIQ</span>
    </div>
  );
}

export default InteractiveBrand;
