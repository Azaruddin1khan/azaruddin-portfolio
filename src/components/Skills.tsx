"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Cpu,
  Layers,
  Boxes,
  Database,
  Globe2,
  Radio,
  CreditCard,
  ShieldCheck,
  CheckCheck,
  GitBranch,
  Terminal,
  Laptop2,
  FolderGit2,
} from "lucide-react";

const SKILL_ITEMS = [
  // Mobile Development
  { name: "Flutter", category: "Mobile Framework", icon: Smartphone, bg: "bg-[#02569B]", color: "text-white" },
  { name: "Dart", category: "Programming Language", icon: Code2, bg: "bg-[#0175C2]", color: "text-white" },
  { name: "Android", category: "Native Platform", icon: Cpu, bg: "bg-[#3DDC84]", color: "text-zinc-950" },
  { name: "Cross-Platform", category: "Multi-Platform App Dev", icon: Layers, bg: "bg-[#4285F4]", color: "text-white" },

  // Architecture & State
  { name: "Clean Architecture", category: "Pattern & Principles", icon: Layers, bg: "bg-[#1E293B]", color: "text-sky-400" },
  { name: "Bloc & Cubit", category: "State Management", icon: Boxes, bg: "bg-[#6366F1]", color: "text-white" },
  { name: "MVVM / MVC", category: "Architectural Patterns", icon: Boxes, bg: "bg-[#334155]", color: "text-white" },

  // Backend & Integration
  { name: "Firebase Suite", category: "Auth, DB & Cloud Storage", icon: Database, bg: "bg-[#FFCA28]", color: "text-zinc-950" },
  { name: "REST APIs & JSON", category: "HTTP Networking", icon: Globe2, bg: "bg-[#10B981]", color: "text-white" },
  { name: "WebSockets", category: "Real-time Streams & Chat", icon: Radio, bg: "bg-[#8B5CF6]", color: "text-white" },
  { name: "Payment & Wallets", category: "Transactions & In-App", icon: CreditCard, bg: "bg-[#EC4899]", color: "text-white" },

  // Testing
  { name: "Unit Testing", category: "Logic Verification", icon: ShieldCheck, bg: "bg-[#059669]", color: "text-white" },
  { name: "Widget Testing", category: "UI Component Tests", icon: CheckCheck, bg: "bg-[#0D9488]", color: "text-white" },
  { name: "Integration Testing", category: "End-to-End Reliability", icon: CheckCheck, bg: "bg-[#0891B2]", color: "text-white" },

  // Tools
  { name: "Git & GitHub", category: "Version Control", icon: GitBranch, bg: "bg-[#F05032]", color: "text-white" },
  { name: "Android Studio", category: "Native SDK & Profiler", icon: Terminal, bg: "bg-[#3DDC84]", color: "text-zinc-950" },
  { name: "Xcode", category: "iOS Profiling & Releases", icon: Laptop2, bg: "bg-[#147EFB]", color: "text-white" },
  { name: "VS Code", category: "Primary Editor", icon: FolderGit2, bg: "bg-[#007ACC]", color: "text-white" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "ALL" },
    { id: "mobile", label: "Mobile" },
    { id: "architecture", label: "Architecture" },
    { id: "backend", label: "Backend & APIs" },
    { id: "testing", label: "Testing" },
    { id: "tools", label: "Tools" },
  ];

  const filteredSkills = SKILL_ITEMS.filter((skill) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "mobile")
      return ["Flutter", "Dart", "Android", "Cross-Platform"].includes(skill.name);
    if (activeCategory === "architecture")
      return ["Clean Architecture", "Bloc & Cubit", "MVVM / MVC"].includes(skill.name);
    if (activeCategory === "backend")
      return ["Firebase Suite", "REST APIs & JSON", "WebSockets", "Payment & Wallets"].includes(skill.name);
    if (activeCategory === "testing")
      return ["Unit Testing", "Widget Testing", "Integration Testing"].includes(skill.name);
    if (activeCategory === "tools")
      return ["Git & GitHub", "Android Studio", "Xcode", "VS Code"].includes(skill.name);
    return true;
  });

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-[var(--bg)] relative overflow-hidden border-t border-[var(--border)]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10 relative z-10"
      >
        {/* Giant Section Heading */}
        <div className="flex flex-col mb-10 md:mb-16">
          <div className="relative w-fit">
            <h2 className="text-5xl sm:text-6xl md:text-[140px] xl:text-[180px] font-normal leading-[0.8] tracking-[-0.05em] uppercase m-0 text-[var(--fg)] select-none">
              Tech Stack
            </h2>
          </div>
          <p className="mt-3 text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--muted)]">
            [ Core Technologies & Engineering Tooling ]
          </p>
        </div>

        {/* Filter Tabs matching adinaa.me */}
        <div className="flex gap-4 md:gap-6 text-[9px] md:text-[11px] uppercase tracking-widest font-semibold mb-10 border-b border-[var(--border)] pb-4 overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`hover:text-[var(--fg)] transition-colors py-1 cursor-pointer ${
                activeCategory === cat.id
                  ? "text-[var(--fg)] border-b-2 border-[var(--fg)] font-bold"
                  : "text-[var(--muted)]"
              }`}
            >
              {cat.id === "all" ? "ALL" : `[${cat.label}]`}
            </button>
          ))}
        </div>

        {/* Modern Skill Cards Grid inspired by adinaa.me */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3 md:gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="flex items-center gap-3.5 p-3 md:p-3.5 bg-[var(--fg)]/[0.03] hover:bg-[var(--fg)]/[0.08] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all rounded-lg cursor-default group"
              >
                <div
                  className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-md shrink-0 ${skill.bg} ${skill.color} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[12px] md:text-[13px] font-bold text-[var(--fg)] leading-tight mb-0.5 truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-medium text-[var(--muted)] leading-tight truncate">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
