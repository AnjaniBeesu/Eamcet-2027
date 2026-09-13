import { collegeRanking } from "@/data/collegeRanking";

export default function CollegeRankingPage() {
  return (
    <main className="min-h-screen px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">College Crowd Ranking</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Where does the crowd rank?</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            A simple benchmark of engineering colleges based on Phase 1 CSE closing ranks for OC boys.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#101010] text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="w-20 px-5 py-4 font-black">#</th>
                  <th className="w-28 px-5 py-4 font-black">Code</th>
                  <th className="px-5 py-4 font-black">College Name &amp; Campus Location</th>
                  <th className="w-44 px-5 py-4 text-right font-black">Phase 1 CSE OC-Boys Cutoff</th>
                </tr>
              </thead>
              <tbody>
                {collegeRanking.map((college) => (
                  <tr key={college.code} className="border-t border-white/8 transition-colors hover:bg-white/[.03]">
                    <td className="px-5 py-4 font-black text-[#f4c542]">{college.rank}</td>
                    <td className="px-5 py-4 font-black">{college.code}</td>
                    <td className="px-5 py-4 font-medium text-zinc-200">{college.name}</td>
                    <td className="px-5 py-4 text-right font-black tabular-nums">{college.cutoff.toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#f4c542]/15 bg-[#f4c542]/[.04] p-5 text-sm leading-6 text-zinc-300">
          <p className="font-black text-white">Note</p>
          <p className="mt-1">
            These are CSE OC-Boys Phase 1 closing ranks. The ranking is intended as a crowd-quality benchmark based on these closing ranks, not as an official college ranking. OC-Boys is used as the benchmark because it generally represents the highest-cutoff open-category benchmark; category-wise results can differ significantly.
          </p>
        </div>
      </div>
    </main>
  );
}
