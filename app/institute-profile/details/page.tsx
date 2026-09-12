import Link from "next/link";

const emptyGuide = { name: "", branch: "", year: "", phone: "", email: "" };
const feeRows = ["CSE", "CSE (AI/ML)", "ECE", "EEE", "Other branches"];

export default async function InstituteDetailsPage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code = "" } = await searchParams;
  const collegeCode = decodeURIComponent(code).toUpperCase();

  return (
    <main className="min-h-screen bg-[#070707] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/institute-profile" className="text-sm font-bold text-[#f4c542] hover:underline">← Back to Institute Profile</Link>
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[.25em] text-[#f4c542]">Institute Profile</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">College Details</h1>
          <p className="mt-2 text-sm text-zinc-500">College code: {collegeCode}</p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
            <h2 className="text-lg font-black">Official Website</h2>
            <div className="mt-4 min-h-6" aria-label="Official website to be added" />
          </section>
          <section className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
            <h2 className="text-lg font-black">Student Guide</h2>
            <p className="mt-1 text-xs text-zinc-500">A current student parents can contact for admission-related questions.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-zinc-500">Name</span><div className="mt-1 min-h-5 font-bold">{emptyGuide.name}</div></div>
              <div><span className="text-zinc-500">Branch / Year</span><div className="mt-1 min-h-5 font-bold">{emptyGuide.branch} {emptyGuide.year}</div></div>
              <div><span className="text-zinc-500">Phone</span><div className="mt-1 min-h-5 font-bold">{emptyGuide.phone}</div></div>
              <div><span className="text-zinc-500">Email</span><div className="mt-1 min-h-5 font-bold">{emptyGuide.email}</div></div>
            </div>
          </section>
        </div>

        <section className="mt-5 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
          <h2 className="text-lg font-black">Branch-wise Fees</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm"><thead className="bg-white/[.03] text-[10px] font-black uppercase tracking-[.16em] text-zinc-500"><tr><th className="px-4 py-3">Branch</th><th className="px-4 py-3">Annual / Tuition Fee</th></tr></thead><tbody>{feeRows.map((branch) => <tr key={branch} className="border-t border-white/6"><td className="px-4 py-3 font-semibold">{branch}</td><td className="px-4 py-3 text-zinc-400"></td></tr>)}</tbody></table>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
          <h2 className="text-lg font-black">Placements</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm"><thead className="bg-white/[.03] text-[10px] font-black uppercase tracking-[.16em] text-zinc-500"><tr><th className="px-4 py-3">Year</th><th className="px-4 py-3">Highest Package</th><th className="px-4 py-3">Average Package</th></tr></thead><tbody><tr className="border-t border-white/6"><td className="px-4 py-3 font-semibold">2026</td><td className="px-4 py-3 text-zinc-400"></td><td className="px-4 py-3 text-zinc-400"></td></tr></tbody></table>
          </div>
        </section>
      </div>
    </main>
  );
}
