"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const firstName = PORTFOLIO_DATA.owner.headlineFirst; // AZARUDDIN
  const lastName = PORTFOLIO_DATA.owner.headlineLast; // KHAN

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "120%", opacity: 0, rotateZ: 6, scale: 0.8 },
    show: {
      y: "0%",
      opacity: 1,
      rotateZ: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full bg-[var(--bg)] pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden text-[var(--fg)] flex flex-col items-center"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Ambient background aura inspired by adinaa.me */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] bg-[var(--fg)]/[0.04] rounded-full blur-[110px] pointer-events-none z-0"
      />

      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10 relative z-10 flex flex-col items-center">
        {/* Massive Editorial Hero Headline */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="w-full flex flex-col items-center perspective-[1000px] select-none"
        >
          {/* First Name: AZARUDDIN */}
          <motion.h1
            variants={letterContainerVariants}
            initial="hidden"
            animate="show"
            className="text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] xl:text-[130px] 2xl:text-[150px] font-bold text-[var(--fg)] tracking-[-0.04em] leading-[0.85] text-center w-full m-0 uppercase whitespace-nowrap flex justify-center"
          >
            {firstName.split("").map((letter, index) => (
              <span
                key={`first-${index}`}
                className="overflow-hidden inline-block relative px-[1px] md:px-[4px]"
              >
                <motion.span
                  variants={letterVariants}
                  className="inline-block origin-bottom"
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Last Name: KHAN */}
          <motion.div
            variants={letterContainerVariants}
            initial="hidden"
            animate="show"
            className="text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] xl:text-[130px] 2xl:text-[150px] font-bold text-[var(--fg)] tracking-[-0.04em] leading-[0.85] text-center w-full m-0 uppercase whitespace-nowrap flex justify-center mt-1 md:mt-2"
          >
            {lastName.split("").map((letter, index) => (
              <span
                key={`last-${index}`}
                className="overflow-hidden inline-block relative px-[1px] md:px-[4px]"
              >
                <motion.span
                  variants={letterVariants}
                  className="inline-block origin-bottom"
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* 3-Column Editorial Sub-bar directly below Name */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.7 },
            },
          }}
          className="w-full flex flex-row justify-between items-start border-t border-[var(--border-strong)] pt-4 mt-8 md:mt-14 text-[9px] sm:text-[11px] md:text-xs font-medium tracking-wide uppercase"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="flex flex-col text-left w-1/3 pr-1"
          >
            <span className="text-[var(--fg)] font-semibold">Flutter Developer &</span>
            <span className="text-[var(--muted)]">Mobile App Engineer</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="flex flex-col text-center w-1/3 px-1"
          >
            <span className="text-[var(--fg)] font-semibold">Based in</span>
            <span className="text-[var(--muted)]">Jaipur, India</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="flex flex-col text-right w-1/3 pl-1"
          >
            <span className="text-[var(--fg)] font-semibold">3+ Years</span>
            <span className="text-[var(--muted)]">Production Experience</span>
          </motion.div>
        </motion.div>

        {/* Editorial Introduction statement */}
        <motion.div
          initial={{ y: 35, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-24 max-w-4xl text-center px-2 sm:px-4"
        >
          <p className="text-[20px] sm:text-2xl md:text-4xl lg:text-[42px] font-semibold md:font-medium leading-[1.2] tracking-[-0.02em] text-[var(--fg)]">
            [I build{" "}
            <span className="font-serif-display italic font-normal text-[var(--fg)]">
              beautiful
            </span>
            , scalable, and{" "}
            <span className="underline decoration-[var(--border-strong)] underline-offset-8">
              production-ready
            </span>{" "}
            mobile applications.]
          </p>
          <p className="mt-6 text-xs sm:text-sm md:text-base text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            {PORTFOLIO_DATA.hero.secondaryDescription}
          </p>
        </motion.div>

        {/* Action Controls & Availability Pill */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[var(--border-strong)] rounded-full hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-300 cursor-pointer group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[var(--fg)] group-hover:text-[var(--bg)] transition-colors">
              {PORTFOLIO_DATA.owner.statusBadge}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-[var(--fg)] hover:text-[var(--muted)] hover:border-[var(--muted)] pb-0.5 transition-all group"
            >
              <span>View My Work</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={PORTFOLIO_DATA.owner.resumeUrl}
              download="Azaruddin_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-[var(--fg)] hover:text-[var(--muted)] hover:border-[var(--muted)] pb-0.5 transition-all group"
            >
              <Download size={13} className="transition-transform group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Key Statistics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="mt-14 md:mt-20 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-[var(--border)]"
        >
          {PORTFOLIO_DATA.hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start p-4 rounded-lg bg-[var(--fg)]/[0.02] border border-[var(--border)] text-center sm:text-left"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--fg)] font-serif-display">
                {stat.value}
              </span>
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center text-[var(--muted)] hover:text-[var(--fg)] transition-colors group"
          >
            <span className="text-[9px] uppercase tracking-widest font-bold">Scroll Down</span>
            <ArrowDown size={14} className="mt-1 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
