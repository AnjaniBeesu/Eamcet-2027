import { placementRanking } from "@/data/placementRanking";

export default function PlacementRankingPage() {
  return (
    <main className="min-h-screen px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">Placements</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Placement Ranking</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            Top 50 colleges ranked by the highest placement package, with the average package shown for context.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-[#101010] text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="w-20 px-5 py-4 font-black">#</th>
                  <th className="w-28 px-5 py-4 font-black">Code</th>
                  <th className="px-5 py-4 font-black">College Name &amp; Campus Location</th>
                  <th className="w-44 px-5 py-4 text-right font-black">Highest Package</th>
                  <th className="w-44 px-5 py-4 text-right font-black">Average Package</th>
                </tr>
              </thead>
              <tbody>
                {placementRanking.map((college) => (
                  <tr key={`${college.rank}-${college.code}`} className="border-t border-white/8 transition-colors hover:bg-white/[.03]">
                    <td className="px-5 py-4 font-black text-[#f4c542]">{college.rank}</td>
                    <td className="px-5 py-4 font-black">{college.code}</td>
                    <td className="px-5 py-4 font-medium text-zinc-200">{college.name}</td>
                    <td className="px-5 py-4 text-right font-black tabular-nums">{college.highest}</td>
                    <td className="px-5 py-4 text-right font-bold tabular-nums text-zinc-300">{college.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 rounded-2xl border border-white/8 bg-white/[.03] p-4 text-xs leading-5 text-zinc-500">
          Placement figures are provided as a 2025/2026 placement benchmark. Highest-package figures are not a guarantee of future placements; students should verify the latest placement report with each college.
        </p>
      </div>
    </main>
  );
}
