"use client";

import { useMemo, useState } from "react";
import { colleges } from "@/data/colleges";

const branches = ["ALL", "CSE", "ECE", "EEE", "INF", "CSM", "CSD", "CSC"];
const cutoffColumns = [
  "OC Boys", "OC Girls", "EWS Boys", "EWS Girls",
  "BC-A Boys", "BC-A Girls", "BC-B Boys", "BC-B Girls",
  "BC-C Boys", "BC-C Girls", "BC-D Boys", "BC-D Girls",
  "BC-E Boys", "BC-E Girls", "SC-I Boys", "SC-I Girls",
  "SC-II Boys", "SC-II Girls", "SC-III Boys", "SC-III Girls",
  "ST Boys", "ST Girls",
];

export default function CutoffsPage() {
  const [branch, setBranch] = useState("ALL");
  const [q, setQ] = useState("");
  const rows = useMemo(() => colleges.flatMap((college) => college.courses.map((course) => ({ college, course }))).filter(({ college, course }) =>
    (branch === "ALL" || course.code === branch) && `${college.name} ${college.code}`.toLowerCase().includes(q.toLowerCase())
  ), [branch, q]);

  return (
    <main className="min-h-screen bg-[#070707]">
      <header className="border-b border-white/8 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f4c542]">Cutoffs / Phase 1</p>
          <h1 className="mt-3 text-4xl font-black sm:text-6xl">2026 closing ranks.</h1>
          <p className="mt-4 max-w-3xl text-zinc-500">2026 Phase 1 cutoff table. Rank values will be populated from the verified Phase 1 dataset. Scroll horizontally to compare all caste and gender categories.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {branches.map((item) => <button key={item} onClick={() => setBranch(item)} className={`rounded-full px-4 py-2 text-xs font-black ${branch === item ? "bg-[#f4c542] text-black" : "border border-white/10 text-zinc-500 hover:text-white"}`}>{item}</button>)}
          </div>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search college or code" className="mt-4 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-[#f4c542]" />
        </div>
      </header>

      <section className="mx-auto max-w-[100vw] px-5 py-8 lg:px-8">
        <div className="overflow-x-auto rounded-3xl border border-white/8 bg-[#0a0a0a]">
          <table className="min-w-[2700px] w-full border-collapse text-left">
            <thead><tr className="bg-white/[.03] text-[10px] font-black uppercase tracking-wider text-zinc-500">
              <th className="sticky left-0 z-20 min-w-[100px] border-r border-white/8 bg-[#0d0d0d] px-4 py-4">College Code</th>
              <th className="sticky left-[100px] z-20 min-w-[300px] border-r border-white/8 bg-[#0d0d0d] px-4 py-4">College Name</th>
              <th className="sticky left-[400px] z-20 min-w-[110px] border-r border-white/8 bg-[#0d0d0d] px-4 py-4">Branch</th>
              {cutoffColumns.map((column) => <th key={column} className="min-w-[105px] whitespace-nowrap px-4 py-4">{column}</th>)}
            </tr></thead>
            <tbody>{rows.map(({ college, course }) => <tr key={`${college.code}-${course.code}`} className="border-t border-white/6 text-sm hover:bg-white/[.02]">
              <td className="sticky left-0 z-10 border-r border-white/8 bg-[#0a0a0a] px-4 py-4 font-black text-[#f4c542]">{college.code}</td>
              <td className="sticky left-[100px] z-10 border-r border-white/8 bg-[#0a0a0a] px-4 py-4 font-bold whitespace-nowrap">{college.name}</td>
              <td className="sticky left-[400px] z-10 border-r border-white/8 bg-[#0a0a0a] px-4 py-4 font-black text-[#f4c542]">{course.code}</td>
              {cutoffColumns.map((column) => <td key={column} className="px-4 py-4 text-zinc-500">—</td>)}
            </tr>)}</tbody>
          </table>
          {rows.length === 0 && <p className="p-10 text-center text-zinc-500">No matching rows.</p>}
        </div>
      </section>
    </main>
  );
}
