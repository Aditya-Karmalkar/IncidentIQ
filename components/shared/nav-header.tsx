'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavHeader() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Overview', href: '/dashboard' },
    { label: 'Incident Queue', href: '/tickets' },
    { label: 'Agent Workspace', href: '/investigation' },
    { label: 'SRE Approvals', href: '/approvals' },
    { label: 'Telemetry & Benchmarks', href: '/analytics' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-cool)]/10 border border-[var(--color-cool)]/30 flex items-center justify-center text-[var(--color-cool)] group-hover:border-[var(--color-cool)] transition-colors">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <div>
              <span className="font-semibold text-[var(--color-ink)] text-sm tracking-tight flex items-center gap-1.5">
                INCIDENT<span className="text-[var(--color-cool)]">IQ</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[var(--color-rule)] text-[var(--color-muted)] font-mono">v1.0</span>
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--color-paper-2)] text-[var(--color-ink)] border border-[var(--color-rule-2)] shadow-sm'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side status & action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-[var(--color-ok)]/20 bg-[var(--color-ok-soft)] text-[11px] font-mono text-[var(--color-ok)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ok)] motion-safe:animate-pulse" />
            <span>Meko Datapack: Connected</span>
          </div>

          <Link
            href="/"
            className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)] px-2.5 py-1 rounded border border-[var(--color-rule)] hover:border-[var(--color-rule-2)] transition-colors"
          >
            Landing
          </Link>
        </div>
      </div>
    </header>
  );
}
