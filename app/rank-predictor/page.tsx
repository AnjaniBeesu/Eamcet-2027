const ranges = [
  ["150 – 160 marks", "Ranks 1 to 200"],
  ["130 – 149 marks", "Ranks 201 to 1,000"],
  ["110 – 129 marks", "Ranks 1,001 to 6,000"],
  ["90 – 109 marks", "Ranks 6,001 to 10,000"],
  ["70 – 89 marks", "Ranks 10,001 to 25,000"],
  ["40 – 69 marks", "Ranks 25,001 to 80,000+"],
  ["Below 40 marks", "Above 80,000"],
];

export default function RankPredictorPage() {
  return (
    <main className="min-h-screen bg-[#070707]">
      <header className="border-b border-white/8 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f4c542]">Rank Predictor</p>
          <h1 className="mt-3 text-4xl font-black sm:text-6xl">Expected Marks vs. Rank Range</h1>
          <p className="mt-4 max-w-3xl text-zinc-500">
            A quick 2026 engineering-stream estimate to understand the rank range associated with your TG EAPCET marks. These ranges are indicative, not a guaranteed rank prediction.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/8 bg-[#0a0a0a]">
          <div className="grid grid-cols-2 bg-white/[.03] px-5 py-4 text-[10px] font-black uppercase tracking-wider text-zinc-500 sm:px-7">
            <span>Expected marks</span>
            <span>Expected rank range</span>
          </div>
          {ranges.map(([marks, rank]) => (
            <div key={marks} className="grid grid-cols-2 border-t border-white/6 px-5 py-5 text-sm sm:px-7 sm:text-base">
              <span className="font-black text-[#f4c542]">{marks}</span>
              <span className="font-bold text-zinc-200">{rank}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-white/8 bg-[#0a0a0a] p-6 text-sm leading-6 text-zinc-500 sm:p-7">
          <p className="font-bold text-zinc-300">Important</p>
          <p className="mt-2">TG EAPCET ranks can vary with paper difficulty, normalization and the candidate pool. Treat these ranges as an estimate only, not an official rank guarantee.</p>
          <p className="mt-3">For the qualifying threshold, 40/160 corresponds to the commonly used 25% threshold for General/OBC candidates; SC/ST candidates do not have a minimum qualifying mark. Admission eligibility can involve additional rules, so check the official notification before relying on the threshold.</p>
        </div>
      </section>
    </main>
  );
}
