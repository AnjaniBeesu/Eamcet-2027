import Link from "next/link";

type CollegeProfile = {
  name: string;
  code: string;
  website: string;
  guide: { name: string; branch: string; year: string; phone: string; email: string };
  fees: Record<string, string>;
  highest: string;
  average: string;
};

const emptyGuide = { name: "", branch: "", year: "", phone: "", email: "" };
const feeRows = ["CSE", "CSE (AI/ML)", "ECE", "EEE", "Other branches"];

const profiles: Record<string, CollegeProfile> = {
  AARM: {
    name: "AAR Mahaveer Engineering College",
    code: "AARM",
    website: "https://aarm.ac.in/",
    guide: emptyGuide,
    fees: {
      "CSE": "₹60,000 – ₹62,000 / year",
      "CSE (AI/ML)": "₹60,000 / year",
      "ECE": "₹60,000 / year",
      "EEE": "₹60,000 – ₹61,500 / year",
      "Other branches": "₹60,000 – ₹62,000 / year",
    },
    highest: "₹16.0 LPA",
    average: "₹3.2 LPA",
  },
  ACEG: {
    name: "ACE Engineering College (Autonomous)",
    code: "ACEG",
    website: "https://www.aceec.ac.in/",
    guide: emptyGuide,
    fees: {
      "CSE": "₹1,10,000 – ₹1,18,500 / year",
      "CSE (AI/ML)": "₹1,15,500 / year",
      "ECE": "₹1,10,000 / year",
      "EEE": "₹1,10,000 / year",
      "Other branches": "₹1,10,000 / year",
    },
    highest: "₹17.8 LPA – ₹46.38 LPA",
    average: "₹4.25 LPA – ₹4.3 LPA",
  },
  AITH: {
    name: "Annamacharya Institute of Technology & Sciences, Hyderabad (Autonomous)",
    code: "AITH",
    website: "https://aits-hyd.edu.in/",
    guide: {
      name: "Admission Helpline",
      branch: "",
      year: "",
      phone: "9848924706 / 9848924705",
      email: "principalaith@gmail.com / aits.hyd@gmail.com",
    },
    fees: {
      "CSE": "₹75,000 / year",
      "CSE (AI/ML)": "₹75,000 / year",
      "ECE": "₹75,000 / year",
      "EEE": "₹75,000 / year",
      "Other branches": "₹75,000 / year",
    },
    highest: "Up to ₹30.00 LPA",
    average: "₹4.00 LPA – ₹4.20 LPA",
  },
  AIZA: {
    name: "Aizza College of Engineering & Technology",
    code: "AIZA",
    website: "http://www.aizza.ac.in/",
    guide: {
      name: "Administrative Office / Admission Cell",
      branch: "",
      year: "",
      phone: "8096951490 / 08736-232343",
      email: "aizzacet@yahoo.com",
    },
    fees: {
      "CSE": "₹45,000 / year",
      "CSE (AI/ML)": "Not actively offered",
      "ECE": "₹45,000 / year",
      "EEE": "₹45,000 / year",
      "Other branches": "₹45,000 / year",
    },
    highest: "₹4.5 LPA – ₹6.0 LPA (Estimated)",
    average: "₹2.4 LPA – ₹3.5 LPA",
  },
  AKIT: {
    name: "AbdulKalam Institute of Technological Sciences",
    code: "AKIT",
    website: "https://akits.ac.in/",
    guide: {
      name: "Management / Principal Office",
      branch: "",
      year: "",
      phone: "9866698961 / 9133397892 / 8639164084 / 9704545494",
      email: "akits.org@gmail.com / info@akits.ac.in",
    },
    fees: {
      "CSE": "₹65,000 / year",
      "CSE (AI/ML)": "₹65,000 / year",
      "ECE": "₹65,000 / year",
      "EEE": "₹65,000 / year",
      "Other branches": "₹65,000 / year",
    },
    highest: "₹17.6 LPA",
    average: "₹4 LPA – ₹8 LPA",
  },
};

export default async function InstituteDetailsPage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code = "" } = await searchParams;
  const collegeCode = decodeURIComponent(code).toUpperCase();
  const profile = profiles[collegeCode];

  return (
    <main className="min-h-screen bg-[#070707] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/institute-profile" className="text-sm font-bold text-[#f4c542] hover:underline">← Back to Institute Profile</Link>
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[.25em] text-[#f4c542]">Institute Profile</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">{profile?.name ?? "College Details"}</h1>
          <p className="mt-2 text-sm text-zinc-500">College code: {collegeCode}</p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
            <h2 className="text-lg font-black">Official Website</h2>
            {profile?.website ? <a href={profile.website} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-[#f4c542] underline underline-offset-4">Visit official website ↗</a> : <div className="mt-4 min-h-6" aria-label="Official website to be added" />}
          </section>
          <section className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
            <h2 className="text-lg font-black">Student Guide</h2>
            <p className="mt-1 text-xs text-zinc-500">A current student parents can contact for admission-related questions.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-zinc-500">Name</span><div className="mt-1 min-h-5 font-bold">{profile?.guide?.name ?? ""}</div></div>
              <div><span className="text-zinc-500">Branch / Year</span><div className="mt-1 min-h-5 font-bold">{profile?.guide ? `${profile.guide.branch} ${profile.guide.year}` : ""}</div></div>
              <div><span className="text-zinc-500">Phone</span><div className="mt-1 min-h-5 font-bold">{profile?.guide?.phone ?? ""}</div></div>
              <div><span className="text-zinc-500">Email</span><div className="mt-1 min-h-5 font-bold">{profile?.guide?.email ?? ""}</div></div>
            </div>
          </section>
        </div>

        <section className="mt-5 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
          <h2 className="text-lg font-black">Branch-wise Fees</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm"><thead className="bg-white/[.03] text-[10px] font-black uppercase tracking-[.16em] text-zinc-500"><tr><th className="px-4 py-3">Branch</th><th className="px-4 py-3">Annual / Tuition Fee</th></tr></thead><tbody>{feeRows.map((branch) => <tr key={branch} className="border-t border-white/6"><td className="px-4 py-3 font-semibold">{branch}</td><td className="px-4 py-3 text-zinc-400">{profile?.fees?.[branch] ?? ""}</td></tr>)}</tbody></table>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
          <h2 className="text-lg font-black">Placements</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm"><thead className="bg-white/[.03] text-[10px] font-black uppercase tracking-[.16em] text-zinc-500"><tr><th className="px-4 py-3">Year</th><th className="px-4 py-3">Highest Package</th><th className="px-4 py-3">Average Package</th></tr></thead><tbody><tr className="border-t border-white/6"><td className="px-4 py-3 font-semibold">2026</td><td className="px-4 py-3 text-zinc-400">{profile?.highest ?? ""}</td><td className="px-4 py-3 text-zinc-400">{profile?.average ?? ""}</td></tr></tbody></table>
          </div>
        </section>
      </div>
    </main>
  );
}
