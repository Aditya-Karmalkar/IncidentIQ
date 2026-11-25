import React from 'react';

export interface BrandLogoProps {
  size?: number;
  className?: string;
}

/**
 * IncidentIQ Brand Mark designed following design.how / make-logo guidelines:
 * - Geometric 24-grid precision alignment
 * - High-contrast telemetry aperture with central diagnostic core
 * - Crisp legibility at 16px, 22px, and 48px
 */
export function BrandLogo({ size = 22, className = '' }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Foundation ground tile */}
      <rect width="24" height="24" rx="5.5" fill="#0b1d3a" />
      {/* Telemetry coordinate ticks */}
      <path
        d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"
        stroke="#5b7cf0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Hexagonal telemetry aperture */}
      <path
        d="M6 8.5L12 5l6 3.5v7L12 19l-6-3.5v-7z"
        stroke="#2fe0d0"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      {/* Central intelligence core */}
      <circle cx="12" cy="12" r="2.25" fill="#ffffff" />
    </svg>
  );
}

export default BrandLogo;
