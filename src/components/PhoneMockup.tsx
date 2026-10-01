"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Wifi, Battery, Sparkles } from "lucide-react";

interface PhoneMockupProps {
  screenshotUrl?: string | null;
  appName?: string;
}

export function PhoneMockup({ screenshotUrl, appName }: PhoneMockupProps) {
  const [imageError, setImageError] = useState(false);
  const hasValidImage = screenshotUrl && !imageError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto flex items-center justify-center"
      aria-label="Mobile app preview frame"
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-blue-600/10 to-transparent rounded-[50px] blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Outer Phone Shell */}
      <div className="relative w-[280px] sm:w-[310px] h-[570px] sm:h-[620px] bg-slate-900 rounded-[44px] p-3 shadow-2xl ring-1 ring-white/10 dark:ring-white/15">
        {/* Left Side Volume Rockers */}
        <div
          className="absolute -left-[3px] top-28 w-[3px] h-8 bg-slate-700 rounded-l-sm"
          aria-hidden="true"
        />
        <div
          className="absolute -left-[3px] top-40 w-[3px] h-12 bg-slate-700 rounded-l-sm"
          aria-hidden="true"
        />
        <div
          className="absolute -left-[3px] top-56 w-[3px] h-12 bg-slate-700 rounded-l-sm"
          aria-hidden="true"
        />

        {/* Right Side Power Button */}
        <div
          className="absolute -right-[3px] top-36 w-[3px] h-14 bg-slate-700 rounded-r-sm"
          aria-hidden="true"
        />

        {/* Inner Screen Bezel */}
        <div className="relative w-full h-full bg-slate-950 rounded-[34px] overflow-hidden flex flex-col border border-slate-800">
          {/* Status Bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3 text-[11px] font-medium text-slate-300 select-none">
            <span>9:41</span>
            {/* Dynamic Island / Notch */}
            <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 space-x-1 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-sky-950/80 border border-sky-500/30" />
            </div>
            <div className="flex items-center space-x-1.5 text-slate-300">
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content: Real Screenshot OR Neutral Empty Frame with Simple Gradient */}
          <div className="relative flex-1 w-full h-full overflow-hidden mt-1">
            {hasValidImage ? (
              <Image
                src={screenshotUrl}
                alt={appName ? `${appName} app screenshot` : "Mobile app screenshot"}
                fill
                sizes="(max-width: 640px) 280px, 310px"
                className="object-cover object-top"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              /* Neutral empty frame with a clean, simple gradient */
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 shadow-sm">
                  <Smartphone className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-slate-200">
                  Mobile App Frame
                </h3>
                <p className="text-xs text-slate-400 mt-2 max-w-[200px] leading-relaxed">
                  Ready for production screenshots in{" "}
                  <code className="text-sky-300 font-mono text-[10px] bg-slate-800/80 px-1 py-0.5 rounded">
                    /public/screenshots/
                  </code>
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-[11px] text-sky-400/80 font-mono">
                  <Sparkles className="w-3 h-3" />
                  <span>Flutter Native Engine</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="relative z-20 py-2 flex justify-center items-center select-none">
            <div className="w-28 h-1 bg-slate-500/40 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
