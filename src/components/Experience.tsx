"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center border-t border-[var(--border)]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10"
      >
        {/* Giant Section Heading */}
        <div className="flex flex-col mb-12 md:mb-20">
          <div className="relative w-fit">
            <h2 className="text-5xl sm:text-6xl md:text-[120px] lg:text-[150px] xl:text-[180px] font-normal leading-[0.85] tracking-tight uppercase m-0 text-[var(--fg)] select-none">
              Experience
            </h2>
          </div>
        </div>

        {/* Editorial Subtitle Strip inspired by adinaa.me */}
        <div className="flex flex-col lg:flex-row justify-between border-t border-[var(--border)] pt-12 md:pt-16 mb-8 md:mb-12">
          <div className="w-full lg:w-5/12 pr-0 lg:pr-16">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--fg)] leading-[1.1]">
              Experience That
              <br />
              <span className="font-serif-display italic">Builds Trust</span>
            </h3>
          </div>
          <div className="w-full lg:w-7/12 mt-4 lg:mt-0 flex items-end">
            <p className="text-sm md:text-base text-[var(--muted)] max-w-xl">
              A 3-year track record of engineering production-grade Flutter applications, handling release pipelines, optimizing runtime performance, and collaborating on high-impact products.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 pt-8 border-t border-[var(--border)]">
          {/* Left Column: Organization Summary Card */}
          <div className="w-full lg:w-4/12 flex flex-col">
            <div className="p-8 rounded-2xl bg-[var(--fg)]/[0.03] border border-[var(--border)] sticky top-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--fg)] text-[var(--bg)] flex items-center justify-center font-bold text-sm">
                  AS
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--fg)]">
                    Appic Softwares LLP
                  </h4>
                  <span className="text-xs text-[var(--muted)] flex items-center gap-1 mt-0.5">
                    <MapPin size={12} /> Jaipur, India
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[var(--border)] text-xs text-[var(--fg)]/80">
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--muted)]">Role</span>
                  <span className="font-semibold text-[var(--fg)]">Flutter Developer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--muted)]">Tenure</span>
                  <span className="font-semibold text-[var(--fg)]">2023 — 2026 (3 Years)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border)]">
                  <span className="text-[var(--muted)]">Apps Published</span>
                  <span className="font-semibold text-[var(--fg)]">4 on Google Play</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[var(--muted)]">Top Milestone</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">1M+ Downloads</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--muted)] block mb-3">
                  Applied Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {experience[0].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-[11px] font-medium bg-[var(--fg)]/[0.05] text-[var(--fg)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Role Details & Responsibilities */}
          <div className="w-full lg:w-8/12 flex flex-col justify-start">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="flex flex-col py-6 md:py-8 group hover:pl-4 transition-all duration-300 cursor-default"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[var(--border)] gap-2">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-[var(--muted)]">
                      {exp.company}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-semibold text-[var(--fg)] mt-1">
                      {exp.role}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)] bg-[var(--fg)]/[0.04] px-3 py-1.5 rounded-full w-fit">
                    <Calendar size={13} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="mt-6 text-sm md:text-base text-[var(--fg)]/90 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Key Professional Responsibilities */}
                <div className="mt-8">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-4">
                    Key Responsibilities & Deliverables:
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-3 p-3.5 rounded-lg bg-[var(--fg)]/[0.02] border border-[var(--border)] group-hover:border-[var(--border-strong)] transition-colors"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        <span className="text-xs md:text-sm text-[var(--fg)]/85 leading-snug">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
