"use client";

import { useEffect } from "react";

export default function InstituteProfileEnhancer() {
  useEffect(() => {
    const addGirlsRowStyles = () => {
      if (document.querySelector("[data-institute-girls-row-styles]")) return;

      const style = document.createElement("style");
      style.dataset.instituteGirlsRowStyles = "true";
      style.textContent = `
        html:not(.light-theme) main table tbody tr[data-girls-college="true"] {
          background-color: rgba(255, 182, 193, 0.10) !important;
        }
        html:not(.light-theme) main table tbody tr[data-girls-college="true"]:hover {
          background-color: rgba(255, 182, 193, 0.16) !important;
        }
        html.light-theme main table tbody tr[data-girls-college="true"] {
          background-color: #fff0f5 !important;
        }
        html.light-theme main table tbody tr[data-girls-college="true"]:hover {
          background-color: #ffe6ee !important;
        }
      `;
      document.head.appendChild(style);
    };

    const setup = () => {
      addGirlsRowStyles();

      const table = document.querySelector("main table");
      if (!table) return false;

      const rows = table.querySelectorAll("tbody tr");
      rows.forEach((row) => {
        const el = row as HTMLElement;
        const isGirlsCollege = row.textContent?.includes("GIRLS") ?? false;
        if (isGirlsCollege) {
          el.dataset.girlsCollege = "true";
        }

        if (el.dataset.profileEnhanced === "true") return;
        const codeLink = row.querySelector<HTMLAnchorElement>("a[href*='iCode=']");
        const code = codeLink?.href.match(/iCode=([^&]+)/)?.[1];
        if (!code) return;

        el.dataset.profileEnhanced = "true";
        el.classList.add("cursor-pointer");
        el.title = "Click to view institute profile";
        el.addEventListener("click", (event) => {
          if ((event.target as HTMLElement).closest("a")) return;
          window.location.href = `/institute-profile/details?code=${encodeURIComponent(code)}`;
        });
      });

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

    if (setup()) return;
    const observer = new MutationObserver(() => setup());
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
