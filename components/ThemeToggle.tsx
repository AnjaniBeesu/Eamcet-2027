"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("eamcet-theme");
    const isLight = saved === "light";
    document.documentElement.classList.toggle("light-theme", isLight);
    setLight(isLight);
  }, []);

  function toggleTheme() {
    const next = !light;
    document.documentElement.classList.toggle("light-theme", next);
    localStorage.setItem("eamcet-theme", next ? "light" : "dark");
    setLight(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${light ? "dark" : "light"} mode`}
      title={`Switch to ${light ? "dark" : "light"} mode`}
      className="theme-toggle grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-base transition hover:scale-105"
    >
      {light ? "☾" : "☀"}
    </button>
  );
}
