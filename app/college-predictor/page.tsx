import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RankForm } from "@/components/RankForm";

export default function CollegePredictorPage() {
  return (
    <main className="min-h-screen px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 transition hover:text-white">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">College Predictor</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Check your chances.</h1>
          <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
            Enter your TG EAPCET rank, category, gender and branch to build a practical college shortlist using 2026 final-phase closing ranks.
          </p>
        </div>
        <div className="mt-10">
          <RankForm />
        </div>
        <section className="mt-10 rounded-3xl border border-white/8 bg-[#0a0a0a] p-7 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">How it works</p>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">A shortlist, not a fantasy.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
            RankRoute uses previous-year closing ranks as a reference point. It helps you reason about options without pretending admission is guaranteed.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-[#101010] p-5"><p className="text-xs font-black tracking-widest text-zinc-600">01</p><h3 className="mt-6 font-black">Enter your rank</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Add your TG EAPCET rank, category, gender and branch preference.</p></div>
            <div className="rounded-2xl border border-white/8 bg-[#101010] p-5"><p className="text-xs font-black tracking-widest text-zinc-600">02</p><h3 className="mt-6 font-black">Compare cutoffs</h3><p className="mt-2 text-sm leading-6 text-zinc-500">We compare your profile with the corresponding 2026 closing rank.</p></div>
            <div className="rounded-2xl border border-white/8 bg-[#101010] p-5"><p className="text-xs font-black tracking-widest text-zinc-600">03</p><h3 className="mt-6 font-black">Build your list</h3><p className="mt-2 text-sm leading-6 text-zinc-500">High chance, possible and reach options help you plan counselling choices.</p></div>
          </div>
        </section>
      </div>
    </main>
  );
}
