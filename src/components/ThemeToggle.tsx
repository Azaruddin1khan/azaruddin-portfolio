"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

function emptySubscribe() {
  return () => {};
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 
        bg-slate-100 hover:bg-slate-200 text-slate-700 
        dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-amber-300 
        border border-slate-300 dark:border-slate-700/60 
        focus-visible:outline-2 focus-visible:outline-sky-500 cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-800 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
