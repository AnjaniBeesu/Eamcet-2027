import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

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
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/college-predictor" className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3.5 font-black text-black transition hover:bg-[#f8d968]">Check my chances <ArrowRight size={17}/></Link>
              <Link href="/institute-profile" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-bold text-white transition hover:border-white/20">Browse colleges</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:flex-row sm:items-end lg:px-8">
          <div>
            <p className="text-sm font-bold text-[#f4c542]">DATA NOTE</p>
            <h2 className="mt-2 text-2xl font-black">Official 2026 counselling data.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">The cutoff source is the Telangana EAPCET counselling authority’s 2026 Last Rank Statement. Results are historical guidance, not admission guarantees.</p>
          </div>
          <Link href="/institute-profile" className="inline-flex items-center gap-2 font-bold text-white">Browse institute profiles <ArrowRight size={16}/></Link>
        </div>
      </section>
    </main>
  );
}
