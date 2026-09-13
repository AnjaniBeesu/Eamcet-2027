"use client";

import { useEffect } from "react";

export default function InstituteProfileEnhancer() {
  useEffect(() => {
    const applyGirlsRowColors = () => {
      const isLight = document.documentElement.classList.contains("light-theme");
      document.querySelectorAll<HTMLElement>('main table tbody tr[data-girls-college="true"]').forEach((row) => {
        const background = isLight ? "#fff0f5" : "rgba(255, 182, 193, 0.18)";
        row.style.setProperty("background-color", background, "important");
        row.querySelectorAll<HTMLElement>("td").forEach((cell) => {
          cell.style.setProperty("background-color", background, "important");
        });
      });
    };

    const setup = () => {
      const table = document.querySelector("main table");
      if (!table) return false;
      table.setAttribute("data-institute-directory", "true");

      const rows = table.querySelectorAll("tbody tr");
      rows.forEach((row) => {
        const el = row as HTMLElement;
        const isGirlsCollege = Array.from(row.querySelectorAll("td")).some(
          (cell) => cell.textContent?.trim().toUpperCase() === "GIRLS"
        );
        if (isGirlsCollege) {
          el.dataset.girlsCollege = "true";
          const isLight = document.documentElement.classList.contains("light-theme");
          const background = isLight ? "#fff0f5" : "rgba(255, 182, 193, 0.18)";
          el.style.setProperty("background-color", background, "important");
          el.querySelectorAll<HTMLElement>("td").forEach((cell) => {
            cell.style.setProperty("background-color", background, "important");
          });
        }

        if (el.dataset.profileEnhanced === "true") return;
        const codeLink = row.querySelector<HTMLAnchorElement>("a[href*='iCode=']");
        const code = codeLink?.href.match(/iCode=([^&]+)/)?.[1];
        if (!code) return;

        el.dataset.profileEnhanced = "true";
        el.classList.add("cursor-pointer");
        el.title = "Click to view institute profile";

        if (isGirlsCollege) {
          el.addEventListener("mouseenter", () => {
            const isLight = document.documentElement.classList.contains("light-theme");
            const background = isLight ? "#ffe6ee" : "rgba(255, 182, 193, 0.25)";
            el.style.setProperty("background-color", background, "important");
            el.querySelectorAll<HTMLElement>("td").forEach((cell) => {
              cell.style.setProperty("background-color", background, "important");
            });
          });
          el.addEventListener("mouseleave", applyGirlsRowColors);
        }

        el.addEventListener("click", (event) => {
          if ((event.target as HTMLElement).closest("a")) return;
          window.location.href = `/institute-profile/details?code=${encodeURIComponent(code)}`;
        });
      });

      applyGirlsRowColors();

      const description = Array.from(document.querySelectorAll("main p")).find((p) =>
        p.textContent?.includes("Browse the institute profile directory")
      );
      if (description && !document.querySelector("[data-profile-hint]")) {
        const hint = document.createElement("p");
        hint.dataset.profileHint = "true";
        hint.className = "mt-2 text-xs font-semibold text-zinc-500";
        hint.textContent = "Click on any college to get to know more about the college.";
        description.insertAdjacentElement("afterend", hint);
      }

      return true;
    };

    const themeObserver = new MutationObserver(applyGirlsRowColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (setup()) return () => themeObserver.disconnect();
    const tableObserver = new MutationObserver(() => setup());
    tableObserver.observe(document.body, { childList: true, subtree: true });
    return () => {
      tableObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return null;
}
