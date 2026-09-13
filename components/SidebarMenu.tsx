"use client";

import Link from "next/link";
import { Menu, X, Trophy, ListChecks, Building2, BarChart3, BedDouble, BriefcaseBusiness, Landmark, SearchCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const menu = open ? (
    <div className="mobile-menu-overlay">
      <div aria-hidden="true" className="mobile-menu-backdrop" onClick={() => setOpen(false)} />
      <aside className="mobile-menu-drawer">
        <div className="flex items-center justify-between">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">Explore</p><h2 className="mt-1 text-2xl font-black">EAMCET 2027</h2></div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"><X size={19} /></button>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          <Link href="/college-ranking" onClick={() => setOpen(false)} className="menu-item"><Trophy size={18} />College Crowd Ranking</Link>
          <Link href="/institute-profile" onClick={() => setOpen(false)} className="menu-item"><Building2 size={18} />Institute Profile</Link>
          <Link href="/college-predictor" onClick={() => setOpen(false)} className="menu-item"><SearchCheck size={18} />College Predictor</Link>
          <Link href="/results" onClick={() => setOpen(false)} className="menu-item"><BarChart3 size={18} />Results</Link>
          <Link href="/cutoffs" onClick={() => setOpen(false)} className="menu-item"><ListChecks size={18} />Cutoffs</Link>
          <Link href="/placement-ranking" onClick={() => setOpen(false)} className="menu-item"><BriefcaseBusiness size={18} />Placement Ranking</Link>
          <Link href="/hostel-availability" onClick={() => setOpen(false)} className="menu-item"><BedDouble size={18} />Hostel Availability</Link>
          <Link href="/size-accreditation" onClick={() => setOpen(false)} className="menu-item"><Landmark size={18} />Size &amp; Accreditation</Link>
        </nav>
      </aside>
    </div>
  ) : null;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:scale-105 hover:bg-white/10"><Menu size={19} /></button>
      {mounted && menu ? createPortal(menu, document.body) : null}
    </>
  );
}
