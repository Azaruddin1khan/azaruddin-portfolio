"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 md:py-16 bg-[var(--bg)] text-[var(--fg)] border-t border-[var(--border)]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[var(--muted)]">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p className="font-medium text-[var(--fg)]">
            {PORTFOLIO_DATA.contact.footerCopyright}
          </p>
          <p className="text-[11px] text-[var(--muted)] mt-1">
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>

        {/* Center: Navigation shortcuts */}
        <div className="flex flex-wrap justify-center gap-5 text-[11px] uppercase tracking-wider font-semibold">
          <a href="#hero" className="hover:text-[var(--fg)] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--fg)] transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-[var(--fg)] transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-[var(--fg)] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[var(--fg)] transition-colors">
            Tech Stack
          </a>
          <a href="#contact" className="hover:text-[var(--fg)] transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.owner.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] font-semibold transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 p-2 rounded-full border border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--fg)]/[0.05] text-[var(--fg)] transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
