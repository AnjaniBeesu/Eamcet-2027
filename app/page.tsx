import Link from "next/link";
import { ArrowDown, ArrowRight, CheckCircle2, Database, ShieldCheck, Sparkles } from "lucide-react";
import { RankForm } from "@/components/RankForm";

export default function Home() {
  return (
    <main>
      <section className="grid-bg relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#f4c542]/[.07] blur-[110px]" />
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f4c542]/20 bg-[#f4c542]/5 px-3 py-1.5 text-xs font-bold text-white"><Sparkles size={13}/> Built for Telangana engineering aspirants</div>
            <h1 className="text-5xl font-black leading-[.98] tracking-[-.045em] sm:text-7xl lg:text-[92px]">Your rank.<br/><span className="text-[#f4c542]">Your chances.</span><br/>Your college.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Stop guessing where your TG EAPCET rank can take you. Compare it against previous counselling cutoffs and build a smarter college shortlist.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#predictor" className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3.5 font-black text-black transition hover:bg-[#f8d968]">Check my chances <ArrowRight size={17}/></a><Link href="/colleges" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-bold text-white transition hover:border-white/20">Browse colleges</Link></div>
          </div>
          <div className="mt-16 grid max-w-3xl gap-3 sm:grid-cols-3"><Stat n="2026" t="final-phase data"/><Stat n="11" t="categories"/><Stat n="22" t="gender/category cutoffs"/></div>
        </div>
        <a href="#predictor" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-zinc-600 md:flex">Scroll to predict <ArrowDown size={14}/></a>
      </section>
      <RankForm />
      <section id="how-it-works" className="border-t border-white/8 bg-[#0a0a0a] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#f4c542]">How it works</p><h2 className="text-3xl font-black tracking-tight sm:text-5xl">A shortlist, not a fantasy.</h2><p className="mt-4 text-zinc-500">RankRoute uses previous-year closing ranks as a reference point. It helps you reason about options without pretending admission is guaranteed.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3"><Step n="01" icon={<Database/>} title="Enter your rank" text="Add your TG EAPCET rank, category, gender and branch preference."/><Step n="02" icon={<ShieldCheck/>} title="Compare cutoffs" text="We compare your profile with the corresponding 2026 closing rank."/><Step n="03" icon={<CheckCircle2/>} title="Build your list" text="High chance, possible and reach options help you plan counselling choices."/></div></div></section>
      <section className="border-t border-white/8 py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:flex-row sm:items-end lg:px-8"><div><p className="text-sm font-bold text-[#f4c542]">DATA NOTE</p><h2 className="mt-2 text-2xl font-black">Official 2026 counselling data.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">The cutoff source is the Telangana EAPCET counselling authority’s 2026 Last Rank Statement. Results are historical guidance, not admission guarantees.</p></div><Link href="/colleges" className="inline-flex items-center gap-2 font-bold text-white">See all colleges <ArrowRight size={16}/></Link></div></section>
    </main>
  );
}
function Stat({n,t}:{n:string;t:string}){return <div className="rounded-2xl border border-white/8 bg-white/[.025] p-5"><p className="text-2xl font-black text-white">{n}</p><p className="mt-1 text-xs uppercase tracking-widest text-zinc-600">{t}</p></div>}
function Step({n,icon,title,text}:{n:string;icon:React.ReactNode;title:string;text:string}){return <div className="rounded-3xl border border-white/8 bg-[#101010] p-7"><div className="flex items-center justify-between"><span className="text-xs font-black tracking-widest text-zinc-700">{n}</span><span className="text-[#f4c542]">{icon}</span></div><h3 className="mt-12 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p></div>}
