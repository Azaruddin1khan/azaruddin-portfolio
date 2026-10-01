"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Award, Smartphone, Users } from "lucide-react";

export function Achievements() {
  const { achievements } = PORTFOLIO_DATA;

  const icons = [Award, Smartphone, Users];

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 bg-[var(--bg)] text-[var(--fg)] border-t border-[var(--border)]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-8 md:p-10 rounded-2xl bg-[var(--fg)]/[0.02] border border-[var(--border)] flex flex-col justify-between group hover:border-[var(--border-strong)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">
                    Milestone 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[var(--fg)]/[0.05] flex items-center justify-center text-[var(--fg)]">
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--fg)] font-serif-display leading-none">
                    {item.value}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-[var(--fg)] uppercase tracking-wider mt-4">
                    {item.label}
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--muted)] mt-1.5 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
