"use client";
import { useMemo, useState } from "react";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { colleges } from "@/data/colleges";

export default function CollegesPage() {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("ALL");
  const [sort, setSort] = useState("cutoff");
  const rows = useMemo(() => {
    const filtered = colleges.filter(c => `${c.name} ${c.code} ${c.place}`.toLowerCase().includes(query.toLowerCase()) && (branch === "ALL" || c.courses.some(x => x.code === branch)));
    return [...filtered].sort((a,b) => {
      const ac = Math.min(...a.courses.filter(x=>branch === "ALL" || x.code === branch).map(x => x.cutoff.OC.boys ?? 999999));
      const bc = Math.min(...b.courses.filter(x=>branch === "ALL" || x.code === branch).map(x => x.cutoff.OC.boys ?? 999999));
      return sort === "cutoff" ? ac-bc : a.name.localeCompare(b.name);
    });
  }, [query, branch, sort]);

  return <main className="min-h-screen bg-[#070707]"><section className="border-b border-white/8 bg-[#0a0a0a]"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#f4c542]">Directory / 2025</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Telangana colleges.</h1><p className="mt-4 max-w-2xl text-zinc-500">Browse the RankRoute dataset, ordered by the best available OC boys closing rank unless you choose alphabetical sorting.</p><div className="mt-9 grid gap-3 md:grid-cols-[1fr_190px_190px]"><div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search college, code or city" className="w-full rounded-2xl border border-white/10 bg-black py-4 pl-11 pr-4 text-sm outline-none focus:border-[#f4c542]/60"/></div><Select value={branch} onChange={setBranch} options={[["ALL","All branches"],["CSE","CSE"],["ECE","ECE"],["EEE","EEE"],["INF","IT"],["CSM","CSE AI/ML"],["CSD","Data Science"],["CSC","Cyber Security"]]}/><Select value={sort} onChange={setSort} options={[["cutoff","Best cutoff"],["name","A → Z"]]}/></div></div></section><section className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="mb-5 flex items-center justify-between text-sm text-zinc-600"><span>{rows.length} colleges</span><span className="inline-flex items-center gap-2"><SlidersHorizontal size={15}/> filters active</span></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{rows.map(c => <article key={c.code} className="group rounded-3xl border border-white/8 bg-[#101010] p-6 transition hover:-translate-y-0.5 hover:border-[#f4c542]/25"><div className="flex items-start justify-between gap-4"><span className="rounded-lg border border-white/8 px-2.5 py-1 text-[10px] font-black tracking-wider text-zinc-500">{c.code}</span><span className="text-xs text-zinc-600">{c.type}</span></div><h2 className="mt-7 text-lg font-black leading-6 group-hover:text-[#f4c542]">{c.name}</h2><p className="mt-2 flex items-center gap-1 text-xs text-zinc-600"><MapPin size={13}/> {c.place} · {c.district}</p><div className="mt-6 grid grid-cols-2 gap-2">{c.courses.slice(0,4).map(course=><div key={course.code} className="rounded-xl bg-black p-3"><p className="text-[10px] font-black text-[#f4c542]">{course.code}</p><p className="mt-1 text-xs text-zinc-500">OC closing</p><p className="mt-0.5 font-bold">{course.cutoff.OC.boys?.toLocaleString() ?? "—"}</p></div>)}</div></article>)}</div></section></main>
}
function Select({value,onChange,options}:{value:string;onChange:(v:string)=>void;options:readonly (readonly [string,string])[]}){return <select value={value} onChange={e=>onChange(e.target.value)} className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm font-semibold outline-none focus:border-[#f4c542]/60">{options.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select>}