"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Layers, Zap, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center border-t border-[var(--border)]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10"
      >
        {/* Giant Section Heading */}
        <div className="flex flex-col mb-12 md:mb-20">
          <div className="relative w-fit">
            <h2 className="text-5xl sm:text-6xl md:text-[120px] lg:text-[150px] xl:text-[180px] font-normal leading-[0.85] tracking-tight uppercase m-0 text-[var(--fg)] select-none">
              {about.heading}
            </h2>
          </div>
          <p className="mt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--muted)]">
            [ {about.subheading} ]
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 items-start">
          {/* Left Column: Visual Portrait / Studio Workspace Preview */}
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--fg)]/[0.04] border border-[var(--border)] group">
              <Image
                src="/images/workspace.jpg"
                alt="Azaruddin Khan Mobile Development Workspace"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-white/20 backdrop-blur-md rounded">
                  Craft & Focus
                </span>
                <p className="mt-2 text-sm md:text-base font-medium">
                  Engineering fluid, responsive mobile architectures with Flutter.
                </p>
              </div>
            </div>

            {/* Quick Feature Badges below image */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[var(--fg)]/[0.03] border border-[var(--border)]">
                <Smartphone size={16} className="text-[var(--fg)] shrink-0" />
                <span className="text-xs font-semibold text-[var(--fg)]">Android & Cross-Platform</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[var(--fg)]/[0.03] border border-[var(--border)]">
                <Layers size={16} className="text-[var(--fg)] shrink-0" />
                <span className="text-xs font-semibold text-[var(--fg)]">Clean Architecture</span>
              </div>
            </div>

            {/* Academic Education Card */}
            {about.education && (
              <div className="mt-4 p-4 rounded-xl bg-[var(--fg)]/[0.025] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-300 group">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[var(--fg)]/[0.05] border border-[var(--border)] text-[var(--fg)] shrink-0 mt-0.5 group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)] transition-colors duration-300">
                    <GraduationCap size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
                        Education & Qualification
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Graduate
                      </span>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-[var(--fg)] mt-1 tracking-tight">
                      {about.education.degree}
                    </h4>
                    <p className="text-xs text-[var(--muted)] mt-1 flex flex-wrap items-center gap-1.5 font-medium">
                      <span>{about.education.institution}</span>
                      <span className="inline-block w-1 h-1 rounded-full bg-[var(--muted)]" />
                      <span>{about.education.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Bio Narrative & Core Philosophy */}
          <div className="w-full lg:w-7/12 flex flex-col justify-start">
            <div className="space-y-6 text-base md:text-xl text-[var(--fg)]/90 leading-relaxed font-normal">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="relative">
                  {p}
                </p>
              ))}
            </div>

            {/* Keyword Pills */}
            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)] block mb-4">
                Core Competencies & Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {about.highlightKeywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[var(--fg)]/[0.05] border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors cursor-default"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Contribution Callout Banner */}
            <div className="mt-8 p-6 rounded-xl bg-[var(--fg)]/[0.03] border border-[var(--border-strong)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Zap size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm md:text-base font-bold text-[var(--fg)]">
                    1M+ Play Store Download Milestone
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--muted)] mt-0.5">
                    Contributed to the core Flutter codebase and real-time consultation features of Balaji Astro Guide.
                  </p>
                </div>
              </div>
              <a
                href="#projects"
                className="text-[11px] font-bold uppercase tracking-wider text-[var(--fg)] border-b border-[var(--fg)] pb-0.5 hover:text-[var(--muted)] whitespace-nowrap"
              >
                Inspect Project →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
