"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { contact, owner } = PORTFOLIO_DATA;

  const copyEmail = () => {
    navigator.clipboard.writeText(owner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="pt-20 pb-16 md:pt-32 md:pb-24 bg-[var(--bg)] text-[var(--fg)] relative overflow-hidden border-t border-[var(--border)]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10 relative z-10"
      >
        {/* Giant Editorial Heading inspired by adinaa.me */}
        <div className="flex flex-col mb-12 md:mb-20">
          <div className="relative w-fit">
            <h2 className="text-4xl sm:text-6xl md:text-[10vw] lg:text-[140px] xl:text-[170px] font-normal leading-[0.85] tracking-[-0.05em] uppercase m-0 text-[var(--fg)] select-none">
              Contact
            </h2>
          </div>
          <p className="mt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--muted)]">
            [ {contact.subheading} ]
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 pt-8 border-t border-[var(--border)]">
          {/* Left Column: Direct Call-to-Action Statement */}
          <div className="w-full lg:w-6/12 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--fg)] leading-tight">
                {contact.heading.split(" ").slice(0, 3).join(" ")}
                <br />
                <span className="font-serif-display italic font-normal">
                  {contact.heading.split(" ").slice(3).join(" ")}
                </span>
              </h3>
              <p className="mt-6 text-sm md:text-base text-[var(--muted)] max-w-lg leading-relaxed font-normal">
                {contact.description}
              </p>
            </div>

            {/* Direct Primary Action Button */}
            <div className="mt-8 lg:mt-12 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${owner.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--fg)] text-[var(--bg)] rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg group"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 border border-[var(--border-strong)] rounded-full text-xs font-bold uppercase tracking-wider text-[var(--fg)] hover:bg-[var(--fg)]/[0.05] transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={15} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      Email Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Connection Details */}
          <div className="w-full lg:w-5/12 flex flex-col justify-start">
            <div className="p-8 rounded-2xl bg-[var(--fg)]/[0.02] border border-[var(--border)]">
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--muted)] mb-6">
                Get in Touch Directly:
              </p>

              <div className="space-y-6">
                {/* Email Entry */}
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                    Email:
                  </span>
                  <a
                    href={`mailto:${owner.email}`}
                    className="text-sm md:text-base lg:text-lg font-bold text-[var(--fg)] hover:text-emerald-600 transition-colors border-b border-[var(--border-strong)] hover:border-emerald-600 pb-1 mt-1 inline-block break-all"
                  >
                    {owner.email}
                  </a>
                </div>

                {/* Phone Entry */}
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                    Phone / WhatsApp:
                  </span>
                  <a
                    href={`tel:${owner.phone.replace(/\s+/g, "")}`}
                    className="text-sm md:text-base font-bold text-[var(--fg)] hover:text-emerald-600 transition-colors border-b border-[var(--border-strong)] hover:border-emerald-600 pb-1 mt-1 inline-block"
                  >
                    {owner.phone}
                  </a>
                </div>

                {/* Location */}
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                    Location:
                  </span>
                  <span className="text-sm font-semibold text-[var(--fg)] mt-1">
                    {owner.location} (Available Remotely & Worldwide)
                  </span>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--muted)] block mb-3">
                  Professional Channels:
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={owner.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--fg)] hover:text-emerald-600 transition-colors py-1 group"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4" />
                      LinkedIn Profile
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  <a
                    href={owner.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--fg)] hover:text-emerald-600 transition-colors py-1 group"
                  >
                    <span>Download CV / Resume (PDF)</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
