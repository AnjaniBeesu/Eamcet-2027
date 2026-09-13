const hostels = [
  { code: "AARM", name: "AAR Mahaveer Engineering College, Bandlaguda", girls: true, boys: true },
  { code: "ACEG", name: "ACE Engineering College (Autonomous), Ghatkesar", girls: true, boys: true },
  { code: "AITH", name: "Annamacharya Institute of Technology and Sciences, Hayathnagar", girls: true, boys: false },
  { code: "AIZA", name: "Aizza College of Engineering and Technology, Mancherial", girls: false, boys: false },
  { code: "AKIT", name: "AbdulKalam Institute of Technological Sciences, Kothagudem", girls: true, boys: true },
];

function StatusDot({ available }: { available: boolean }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border ${
        available
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
          : "border-red-400/30 bg-red-400/10 text-red-400"
      }`}
      title={available ? "In-campus hostel available" : "No in-campus hostel listed"}
      aria-label={available ? "Available" : "Not available"}
    >
      <span className={`h-3 w-3 rounded-full ${available ? "bg-emerald-400" : "bg-red-400"}`} />
    </span>
  );
}

export default function HostelAvailabilityPage() {
  return (
    <main className="min-h-screen px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">Student life</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Hostel Availability</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            A quick in-campus hostel check for the first five colleges in our institute profile directory.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#101010] shadow-2xl">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-[#0a0a0a]">
                <th className="px-5 py-4 text-xs font-black uppercase tracking-[.14em] text-zinc-400">College Code</th>
                <th className="px-5 py-4 text-xs font-black uppercase tracking-[.14em] text-zinc-400">College Name</th>
                <th className="px-5 py-4 text-center text-xs font-black uppercase tracking-[.14em] text-zinc-400">Girls Hostel</th>
                <th className="px-5 py-4 text-center text-xs font-black uppercase tracking-[.14em] text-zinc-400">Boys Hostel</th>
              </tr>
            </thead>
            <tbody>
              {hostels.map((college) => (
                <tr key={college.code} className="border-b border-white/8 last:border-0 hover:bg-white/[.03]">
                  <td className="px-5 py-5 font-black text-[#f4c542]">{college.code}</td>
                  <td className="px-5 py-5 font-bold text-white">{college.name}</td>
                  <td className="px-5 py-5 text-center"><StatusDot available={college.girls} /></td>
                  <td className="px-5 py-5 text-center"><StatusDot available={college.boys} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-5 text-xs font-semibold text-zinc-500">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-400" /> In-campus hostel available</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /> No in-campus hostel listed</span>
        </div>

        <p className="mt-5 rounded-2xl border border-white/8 bg-white/[.03] p-4 text-xs leading-5 text-zinc-500">
          Hostel availability can change by academic year and room capacity. Students and parents should confirm current hostel allotment, eligibility, fees, and vacancies with the college before admission.
        </p>
      </div>
    </main>
  );
}
