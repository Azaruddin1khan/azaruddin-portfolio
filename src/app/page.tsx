import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--fg)] selection:text-[var(--bg)] transition-colors duration-300 overflow-x-hidden">
        {/* Fixed Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1 flex flex-col">
          {/* 1. Hero */}
          <Hero />

          {/* 2. About */}
          <About />

          {/* 3. Experience */}
          <Experience />

          {/* 4. Projects */}
          <Projects />

          {/* 5. Skills */}
          <Skills />

          {/* 6. Achievements */}
          <Achievements />

          {/* 7. Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
