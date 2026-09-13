"use client";

import Link from "next/link";
import { Menu, X, Trophy, ListChecks, Building2, GraduationCap, BarChart3, BedDouble } from "lucide-react";
import { useState } from "react";

export function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:scale-105 hover:bg-white/10"
      >
        <Menu size={19} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-[min(360px,88vw)] flex-col border-l border-white/10 bg-[#070707] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">Explore</p>
                <h2 className="mt-1 text-2xl font-black">EAMCET 2027</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                <X size={19} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              <Link href="/college-ranking" onClick={() => setOpen(false)} className="group rounded-2xl border border-[#f4c542]/20 bg-[#f4c542]/[.07] p-4 transition hover:bg-[#f4c542]/[.12]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4c542] text-black"><Trophy size={19} /></span>
                  <div>
                    <p className="font-black">College Crowd Ranking</p>
                    <p className="mt-0.5 text-xs text-zinc-500">CSE Phase 1 OC-Boys benchmark</p>
                  </div>
                </div>
              </Link>

              <Link href="/hostel-availability" onClick={() => setOpen(false)} className="menu-item"><BedDouble size={18} />Hostel Availability</Link>
              <Link href="/results" onClick={() => setOpen(false)} className="menu-item"><BarChart3 size={18} />Results</Link>
              <Link href="/cutoffs" onClick={() => setOpen(false)} className="menu-item"><ListChecks size={18} />Cutoffs</Link>
              <Link href="/institute-profile" onClick={() => setOpen(false)} className="menu-item"><Building2 size={18} />Institute Profile</Link>
              <Link href="/rank-predictor" onClick={() => setOpen(false)} className="menu-item"><GraduationCap size={18} />Rank Predictor</Link>
            </nav>

            <div className="mt-auto rounded-2xl border border-white/8 bg-white/[.03] p-4 text-xs leading-5 text-zinc-500">
              <p className="font-bold text-zinc-300">Quick note</p>
              <p className="mt-1">The crowd ranking is a benchmark, not an official government ranking.</p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
