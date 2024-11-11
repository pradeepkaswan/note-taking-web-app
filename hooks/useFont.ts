"use client";

import { useState, useEffect } from "react";

export type Font = "sans" | "serif" | "mono";

export function useFont() {
  const [font, setFont] = useState<Font>("sans");

  useEffect(() => {
    // Get initial font from localStorage or default to sans
    const savedFont = localStorage.getItem("font") as Font;
    if (savedFont) {
      setFont(savedFont);
      applyFont(savedFont);
    }

    // Listen for changes in other tabs
    window.addEventListener("storage", (e) => {
      if (e.key === "font") {
        const newFont = e.newValue as Font;
        setFont(newFont);
        applyFont(newFont);
      }
    });
  }, []);

  const applyFont = (newFont: Font) => {
    const root = document.documentElement;
    root.classList.remove("font-sans", "font-serif", "font-mono");
    root.classList.add(`font-${newFont}`);
  };

  const updateFont = (newFont: Font) => {
    localStorage.setItem("font", newFont);
    setFont(newFont);
    applyFont(newFont);
  };

  return { font, updateFont };
}
