"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = "ak_portfolio_theme";

function getSnapshot(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(THEME_KEY);
  return stored === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function updateDOMTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = (newTheme: Theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, newTheme);
      updateDOMTheme(newTheme);
      listeners.forEach((listener) => listener());
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {/* Script to guarantee immediate correct theme styling before hydration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var saved = localStorage.getItem('${THEME_KEY}');
                var root = document.documentElement;
                if (saved === 'light') {
                  root.classList.remove('dark');
                  root.setAttribute('data-theme', 'light');
                } else {
                  root.classList.add('dark');
                  root.setAttribute('data-theme', 'dark');
                }
              } catch (e) {}
            })();
          `,
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
