"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10 relative">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center w-full text-[11px] lg:text-xs font-medium text-[var(--fg)]">
          <a
            href="#hero"
            className="hover:opacity-50 transition-opacity whitespace-nowrap uppercase tracking-wider font-semibold"
          >
            {PORTFOLIO_DATA.owner.name}
          </a>

          <nav
            aria-label="Main Navigation"
            className="flex justify-between items-center w-full max-w-[70%] lg:max-w-[80%]"
          >
            <div className="flex items-center gap-6 lg:gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`transition-all whitespace-nowrap tracking-wide py-1 relative ${
                      isActive
                        ? "text-[var(--fg)] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--fg)]"
                        : "text-[var(--muted)] hover:text-[var(--fg)] hover:opacity-70"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.owner.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-block px-3 py-1 border border-[var(--border-strong)] rounded-full text-[10px] uppercase tracking-widest font-semibold hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
              >
                Resume
              </a>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="hover:opacity-50 transition-opacity p-1.5 rounded-full hover:bg-[var(--fg)]/5 text-[var(--fg)]"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center w-full text-xs font-medium text-[var(--fg)]">
          <a
            href="#hero"
            className="hover:opacity-50 transition-opacity uppercase tracking-wider font-semibold"
          >
            {PORTFOLIO_DATA.owner.name}
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hover:opacity-50 transition-opacity p-1 text-[var(--fg)]"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:opacity-50 transition-opacity uppercase tracking-widest text-[10px] font-bold px-2 py-1 border border-[var(--border-strong)] rounded text-[var(--fg)]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full right-4 mt-3 w-56 bg-[var(--bg)] border border-[var(--border-strong)] shadow-2xl flex flex-col md:hidden transition-all duration-200 origin-top-right rounded-sm overflow-hidden z-50 ${
            mobileMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3.5 text-[11px] uppercase tracking-widest font-semibold text-[var(--fg)] hover:bg-[var(--fg)]/5 border-b border-[var(--border)] last:border-b-0 transition-colors flex items-center justify-between"
            >
              <span>{item.name}</span>
              {activeSection === item.href.substring(1) && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              )}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.owner.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-3 text-[11px] uppercase tracking-widest font-bold bg-[var(--fg)] text-[var(--bg)] text-center transition-opacity hover:opacity-90"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
