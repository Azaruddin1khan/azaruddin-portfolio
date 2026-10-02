"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, DownloadCloud, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const FILTER_TABS = [
  { id: "all", label: "ALL" },
  { id: "astrology", label: "Astrology" },
  { id: "consultation", label: "Consultation" },
  { id: "edtech", label: "EdTech & Video" },
  { id: "procurement", label: "Procurement" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { projects } = PORTFOLIO_DATA;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterTag === activeFilter);

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const secondaryProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center border-t border-[var(--border)]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1800px] w-full px-4 md:px-6 lg:px-10"
      >
        {/* Giant Section Heading inspired by adinaa.me */}
        <div className="flex flex-col mb-10 md:mb-16">
          <div className="relative w-fit">
            <h2 className="text-5xl sm:text-6xl md:text-[140px] xl:text-[180px] font-normal leading-[0.8] tracking-[-0.05em] uppercase m-0 text-[var(--fg)] select-none">
              Projects
            </h2>
          </div>
          <p className="mt-3 text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--muted)]">
            [ Production Flutter Applications Contributed To ]
          </p>
        </div>

        {/* Filter Tabs matching adinaa.me bracket syntax */}
        <div className="flex gap-4 md:gap-6 text-[9px] md:text-[11px] uppercase tracking-widest font-semibold mb-10 border-b border-[var(--border)] pb-4 overflow-x-auto whitespace-nowrap">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`hover:text-[var(--fg)] transition-colors py-1 cursor-pointer ${
                activeFilter === tab.id
                  ? "text-[var(--fg)] border-b-2 border-[var(--fg)] font-bold"
                  : "text-[var(--muted)]"
              }`}
            >
              {tab.id === "all" ? "ALL" : `[${tab.label}]`}
            </button>
          ))}
        </div>

        <div className="w-full max-w-[1500px] mx-auto">
          {/* Featured Hero Project Showcase */}
          {featuredProject && (
            <div className="w-full mb-16 md:mb-24 group">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden mb-6 bg-[var(--fg)]/[0.04] border border-[var(--border)]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1500px"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-all duration-700 group-hover:scale-105 group-hover:blur-sm"
                />

                {/* Dark overlay on hover with animated detail reveal */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-colors duration-500 rounded-2xl md:rounded-3xl flex items-center justify-center p-6 md:p-12">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-2xl text-center transform translate-y-4 group-hover:translate-y-0 text-white">
                    <span className="text-[11px] uppercase font-bold tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md rounded-full inline-block mb-3">
                      Flagship Production Feature
                    </span>
                    <p className="text-base md:text-xl font-medium leading-relaxed drop-shadow-md">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {featuredProject.features.map((f, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] bg-white/10 rounded-sm font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 flex items-center gap-2 z-10 pointer-events-none">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[10px] md:text-xs uppercase font-bold rounded-full">
                    Project {featuredProject.number}
                  </span>
                  <span className="px-3 py-1 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] md:text-xs uppercase font-bold rounded-full flex items-center gap-1.5">
                    <DownloadCloud size={13} /> {featuredProject.downloads}
                  </span>
                </div>
              </div>

              {/* Featured Project Metadata Strip */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pt-2">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-tight text-[var(--fg)]">
                      {featuredProject.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-[var(--fg)]/[0.05] text-[var(--fg)] text-[10px] md:text-xs uppercase font-bold rounded">
                      {featuredProject.category}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-[var(--muted)] mt-1.5">
                    Client / Publisher: {featuredProject.client}
                  </p>
                  <p className="text-sm md:text-base text-[var(--fg)]/85 mt-2.5 leading-relaxed font-normal">
                    {featuredProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 self-start">
                  <a
                    href={featuredProject.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--fg)] text-[var(--bg)] rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300 group/btn"
                  >
                    <span>View on Google Play</span>
                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Projects Editorial Grid matching adinaa.me */}
          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-16 pt-8 md:pt-12 border-t border-[var(--border)]">
              {secondaryProjects.map((project) => (
                <div key={project.id} className="w-full flex flex-col group">
                  {/* Image Card */}
                  <div className="w-full aspect-[16/9] overflow-hidden relative mb-4 rounded-2xl bg-[var(--fg)]/[0.04] border border-[var(--border)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-105 group-hover:blur-md"
                    />

                    {/* Dark Hover Reveal */}
                    <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/65 transition-colors duration-500 flex items-center justify-center p-6 text-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-white transform translate-y-3 group-hover:translate-y-0 pointer-events-none">
                        <p className="text-sm md:text-base font-medium line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                          {project.features.slice(0, 3).map((f, fi) => (
                            <span
                              key={fi}
                              className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/20 rounded"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Top Corner Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none z-10">
                      <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white text-[9px] md:text-[10px] uppercase font-bold rounded-full">
                        {project.number}
                      </span>
                      <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-[9px] md:text-[10px] uppercase font-bold rounded-full">
                        {project.downloads}
                      </span>
                    </div>
                  </div>

                  {/* Project Info Strip */}
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xl md:text-2xl font-normal uppercase tracking-tight text-[var(--fg)] leading-snug">
                          {project.title}
                        </h4>
                        <p className="text-xs font-semibold text-[var(--muted)] mt-1">
                          {project.client}
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-[var(--fg)]/[0.05] text-[var(--fg)] text-[10px] uppercase font-bold rounded whitespace-nowrap shrink-0">
                        {project.category.split("/")[1]?.trim() || "Flutter"}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-[var(--muted)] mt-2 line-clamp-2 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Action link */}
                    <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] font-medium">
                        {project.technologies.slice(0, 3).join(" • ")}
                      </div>
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--fg)] hover:text-emerald-600 transition-colors"
                      >
                        <span>View on Play Store</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
