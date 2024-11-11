"use client";

import { useState, useEffect } from "react";

export type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme from localStorage or default to 'system'
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  });

  useEffect(() => {
    // Apply theme initially and whenever it changes
    applyTheme(theme);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        const newTheme = (e.newValue as Theme) || "system";
        setTheme(newTheme);
      }
    };

    // Listen for changes to theme in other tabs
    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [theme]);

  useEffect(() => {
    // Sync with localStorage on mount to handle theme persistence
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const isDark =
      newTheme === "dark" ||
      (newTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
  };

  const updateTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, updateTheme };
}
