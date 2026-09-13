import { sizeAccreditation } from "@/data/sizeAccreditation";

export default function SizeAccreditationPage() {
  return (
    <main className="min-h-screen px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">Campus & Accreditation</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Size &amp; Accreditation</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            Compare campus size, NAAC accreditation and NBA status across engineering colleges.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#101010] text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="w-28 px-5 py-4 font-black">Code</th>
                  <th className="px-5 py-4 font-black">College Name</th>
                  <th className="w-32 px-5 py-4 font-black">Size</th>
                  <th className="w-32 px-5 py-4 font-black">NAAC</th>
                  <th className="w-32 px-5 py-4 font-black">NBA</th>
                </tr>
              </thead>
              <tbody>
                {sizeAccreditation.map((college) => (
                  <tr key={college.code} className="border-t border-white/8 transition-colors hover:bg-white/[.03]">
                    <td className="px-5 py-4 font-black text-[#f4c542]">{college.code}</td>
                    <td className="px-5 py-4 font-medium text-zinc-200">{college.name}</td>
                    <td className="px-5 py-4 font-bold tabular-nums">{college.size}</td>
                    <td className="px-5 py-4 font-bold">{college.naac}</td>
                    <td className="px-5 py-4 font-bold">{college.nba}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 rounded-2xl border border-white/8 bg-white/[.03] p-4 text-xs leading-5 text-zinc-500">
          Accreditation and campus-size details are presented from the supplied college dataset. Check the latest official accreditation records before making a final college decision.
        </p>
      </div>
    </main>
  );
}
