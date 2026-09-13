"use client";

import { useMemo, useState } from "react";
import type { CutoffCourseRow } from "@/app/cutoffs/page";

const cutoffColumns = [
  "OC Boys", "OC Girls", "EWS Boys", "EWS Girls",
  "BC-A Boys", "BC-A Girls", "BC-B Boys", "BC-B Girls",
  "BC-C Boys", "BC-C Girls", "BC-D Boys", "BC-D Girls",
  "BC-E Boys", "BC-E Girls", "SC-I Boys", "SC-I Girls",
  "SC-II Boys", "SC-II Girls", "SC-III Boys", "SC-III Girls",
  "ST Boys", "ST Girls",
];

const ROWS_PER_PAGE = 25;

export default function CutoffTable({ initialRows }: { initialRows: CutoffCourseRow[] }) {
  const [branch, setBranch] = useState("ALL");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const branches = useMemo(() => [
    "ALL",
    ...Array.from(new Set(initialRows.map((row) => row.branch))).sort(),
  ], [initialRows]);

  const rows = useMemo(() => initialRows.filter((row) =>
    (branch === "ALL" || row.branch === branch) &&
    `${row.name} ${row.code} ${row.branch} ${row.branchName}`.toLowerCase().includes(q.toLowerCase())
  ), [initialRows, branch, q]);

  const totalPages = Math.max(1, Math.ceil(rows.length / ROWS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginatedRows = rows.slice((safePage - 1) * ROWS_PER_PAGE, safePage * ROWS_PER_PAGE);
  const collegeCount = new Set(initialRows.map((row) => row.code)).size;

  const changeBranch = (item: string) => {
    setBranch(item);
    setPage(1);
  };

  const changeSearch = (value: string) => {
    setQ(value);
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-[#070707]">
      <header className="border-b border-white/8 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f4c542]">Cutoffs / Phase 1</p>
          <h1 className="mt-3 text-4xl font-black sm:text-6xl">2026 closing ranks.</h1>
          <div className="mt-5 text-xs font-bold uppercase tracking-wider text-zinc-600">{collegeCount} colleges · {initialRows.length} college-course rows</div>
          <div className="mt-8 flex max-w-full gap-2 overflow-x-auto pb-2">
            {branches.map((item) => (
              <button key={item} onClick={() => changeBranch(item)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-black ${branch === item ? "bg-[#f4c542] text-black" : "border border-white/10 text-zinc-500 hover:text-white"}`}>
                {item}
              </button>
            ))}
          </div>
          <input value={q} onChange={(e) => changeSearch(e.target.value)} placeholder="Search college, code or branch" className="mt-4 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-[#f4c542]" />
        </div>
      </header>

      <section className="mx-auto max-w-[100vw] px-5 py-8 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-zinc-500">
          <span>Showing {rows.length === 0 ? 0 : (safePage - 1) * ROWS_PER_PAGE + 1}–{Math.min(safePage * ROWS_PER_PAGE, rows.length)} of {rows.length} rows</span>
          <span>25 rows per page</span>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-white/8 bg-[#0a0a0a]">
          <table className="min-w-[2700px] w-full border-collapse text-left">
            <thead><tr className="bg-white/[.03] text-[10px] font-black uppercase tracking-wider text-zinc-500">
              <th className="sticky left-0 z-20 min-w-[100px] border-r border-white/8 bg-[#0d0d0d] px-4 py-4">College Code</th>
              <th className="sticky left-[100px] z-20 min-w-[300px] border-r border-white/8 bg-[#0d0d0d] px-4 py-4">College Name</th>
              <th className="sticky left-[400px] z-20 min-w-[110px] border-r border-white/8 bg-[#0d0d0d] px-4 py-4">Branch</th>
              {cutoffColumns.map((column) => <th key={column} className="min-w-[105px] whitespace-nowrap px-4 py-4">{column}</th>)}
            </tr></thead>
            <tbody>{paginatedRows.map((row) => <tr key={`${row.code}-${row.branch}`} className="border-t border-white/6 text-sm hover:bg-white/[.02]">
              <td className="sticky left-0 z-10 border-r border-white/8 bg-[#0a0a0a] px-4 py-4 font-black text-[#f4c542]">{row.code}</td>
              <td className="sticky left-[100px] z-10 border-r border-white/8 bg-[#0a0a0a] px-4 py-4 font-bold whitespace-nowrap">{row.name}</td>
              <td className="sticky left-[400px] z-10 border-r border-white/8 bg-[#0a0a0a] px-4 py-4 font-black text-[#f4c542]">{row.branch}</td>
              {cutoffColumns.map((column) => <td key={column} className="px-4 py-4 text-zinc-500">—</td>)}
            </tr>)}</tbody>
          </table>
          {rows.length === 0 && <p className="p-10 text-center text-zinc-500">Course directory could not be loaded. Refresh once the source is available.</p>}
        </div>

        {rows.length > 0 && (
          <div className="mt-5 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={safePage === 1}
              className="rounded-xl border border-white/10 px-4 py-2 text-xs font-black text-zinc-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Previous
            </button>
            <span className="rounded-xl bg-white/5 px-4 py-2 text-xs font-black text-zinc-300">Page {safePage} of {totalPages}</span>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              disabled={safePage === totalPages}
              className="rounded-xl border border-white/10 px-4 py-2 text-xs font-black text-zinc-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
