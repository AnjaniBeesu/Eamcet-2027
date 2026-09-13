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
    fees: { "CSE": "₹60,000 – ₹62,000 / year", "CSE (AI/ML)": "₹60,000 / year", "ECE": "₹60,000 / year", "EEE": "₹60,000 – ₹61,500 / year", "Other branches": "₹60,000 – ₹62,000 / year" },
    highest: "₹16.0 LPA", average: "₹3.2 LPA",
  },
  ACEG: {
    name: "ACE Engineering College (Autonomous)", code: "ACEG", website: "https://www.aceec.ac.in/", guide: emptyGuide,
    fees: { "CSE": "₹1,10,000 – ₹1,18,500 / year", "CSE (AI/ML)": "₹1,15,500 / year", "ECE": "₹1,10,000 / year", "EEE": "₹1,10,000 / year", "Other branches": "₹1,10,000 / year" },
    highest: "₹17.8 LPA – ₹46.38 LPA", average: "₹4.25 LPA – ₹4.3 LPA",
  },
  AITH: {
    name: "Annamacharya Institute of Technology & Sciences, Hyderabad (Autonomous)", code: "AITH", website: "https://aits-hyd.edu.in/",
    guide: { name: "Admission Helpline", branch: "", year: "", phone: "9848924706 / 9848924705", email: "principalaith@gmail.com / aits.hyd@gmail.com" },
    fees: { "CSE": "₹75,000 / year", "CSE (AI/ML)": "₹75,000 / year", "ECE": "₹75,000 / year", "EEE": "₹75,000 / year", "Other branches": "₹75,000 / year" },
    highest: "Up to ₹30.00 LPA", average: "₹4.00 LPA – ₹4.20 LPA",
  },
  AIZA: {
    name: "Aizza College of Engineering & Technology", code: "AIZA", website: "http://www.aizza.ac.in/",
    guide: { name: "Administrative Office / Admission Cell", branch: "", year: "", phone: "8096951490 / 08736-232343", email: "aizzacet@yahoo.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "Not actively offered", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹4.5 LPA – ₹6.0 LPA (Estimated)", average: "₹2.4 LPA – ₹3.5 LPA",
  },
  AKIT: {
    name: "AbdulKalam Institute of Technological Sciences", code: "AKIT", website: "https://akits.ac.in/",
    guide: { name: "Management / Principal Office", branch: "", year: "", phone: "9866698961 / 9133397892 / 8639164084 / 9704545494", email: "akits.org@gmail.com / info@akits.ac.in" },
    fees: { "CSE": "₹65,000 / year", "CSE (AI/ML)": "₹65,000 / year", "ECE": "₹65,000 / year", "EEE": "₹65,000 / year", "Other branches": "₹65,000 / year" },
    highest: "₹17.6 LPA", average: "₹4 LPA – ₹8 LPA",
  },
  ANRK: {
    name: "Anurag Engineering College (Autonomous), Kodad", code: "ANRK", website: "https://anurag.ac.in/", guide: { name: "Office", branch: "", year: "", phone: "+91-9989976767", email: "office@anurag.ac.in" },
    fees: { "CSE": "₹68,000 – ₹90,000 / year", "CSE (AI/ML)": "₹68,000 – ₹90,000 / year", "ECE": "₹68,000 – ₹90,000 / year", "EEE": "₹68,000 – ₹90,000 / year", "Other branches": "₹68,000 – ₹90,000 / year" }, highest: "₹14.0 LPA", average: "₹3.45 LPA",
  },
  ANUG: {
    name: "Anurag University, Ghatkesar", code: "ANUG", website: "https://www.anurag.edu.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-8181057057", email: "admissions@anurag.edu.in" },
    fees: { "CSE": "₹3,25,000 / year", "CSE (AI/ML)": "₹3,25,000 / year", "ECE": "₹1,35,000 – ₹2,50,000 / year", "EEE": "₹1,35,000 – ₹2,50,000 / year", "Other branches": "₹1,35,000 – ₹2,50,000 / year" }, highest: "₹53.0 LPA", average: "₹6.50 LPA",
  },
  ARJN: {
    name: "Arjun College of Technology and Science, Batasingaram", code: "ARJN", website: "https://arjunengg.com/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9246150854", email: "principalacts@gmail.com" },
    fees: { "CSE": "₹45,000 – ₹55,000 / year", "CSE (AI/ML)": "₹45,000 – ₹55,000 / year", "ECE": "₹45,000 – ₹55,000 / year", "EEE": "₹45,000 – ₹55,000 / year", "Other branches": "₹45,000 – ₹55,000 / year" }, highest: "₹8.5 LPA", average: "₹3.20 LPA",
  },
  ASRA: {
    name: "Avanthis Scientific Tech and Research Academy, Hayathnagar", code: "ASRA", website: "https://asrahyd.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9704681222", email: "asraprincipal@gmail.com" },
    fees: { "CSE": "₹69,200 / year", "CSE (AI/ML)": "₹69,200 / year", "ECE": "₹69,200 / year", "EEE": "₹69,200 / year", "Other branches": "₹69,200 / year" }, highest: "₹12.0 LPA", average: "₹3.60 LPA",
  },
  AURC: {
    name: "Aurora Scientific and Tech Research Academy, Hyderabad", code: "AURC", website: "https://www.aurora.ac.in/", guide: { name: "Information Office", branch: "", year: "", phone: "+91-9100000138", email: "info@aurora.ac.in" },
    fees: { "CSE": "₹50,800 – ₹72,000 / year", "CSE (AI/ML)": "₹50,800 – ₹72,000 / year", "ECE": "₹50,800 – ₹72,000 / year", "EEE": "₹50,800 – ₹72,000 / year", "Other branches": "₹50,800 – ₹72,000 / year" }, highest: "₹11.5 LPA", average: "₹3.50 LPA",
  },
  AURG: {
    name: "Auroras Scientific and Technological Institute, Ghatkesar", code: "AURG", website: "https://asti.edu.in/", guide: { name: "Information Office", branch: "", year: "", phone: "+91-9100000143", email: "info@asti.edu.in" },
    fees: { "CSE": "₹62,000 – ₹75,000 / year", "CSE (AI/ML)": "₹62,000 – ₹75,000 / year", "ECE": "₹62,000 – ₹75,000 / year", "EEE": "₹62,000 – ₹75,000 / year", "Other branches": "₹62,000 – ₹75,000 / year" }, highest: "₹12.0 LPA", average: "₹3.80 LPA",
  },
  AURH: {
    name: "Ramappa Engineering College, Shayampet", code: "AURH", website: "https://ramappaengg.org/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9849568912", email: "principalrec@gmail.com" },
    fees: { "CSE": "₹43,000 – ₹50,000 / year", "CSE (AI/ML)": "₹43,000 – ₹50,000 / year", "ECE": "₹43,000 – ₹50,000 / year", "EEE": "₹43,000 – ₹50,000 / year", "Other branches": "₹43,000 – ₹50,000 / year" }, highest: "₹6.0 LPA", average: "₹2.80 LPA",
  },
  AURK: {
    name: "Aurora's Technological and Management Academy, Parvathapur", code: "AURK", website: "https://www.ata.edu.in/", guide: { name: "Information Office", branch: "", year: "", phone: "+91-9100001551", email: "info@ata.edu.in" },
    fees: { "CSE": "₹50,800 / year", "CSE (AI/ML)": "₹50,800 / year", "ECE": "₹50,800 / year", "EEE": "₹50,800 / year", "Other branches": "₹50,800 / year" }, highest: "₹10.0 LPA", average: "₹3.40 LPA",
  },
  AURN: {
    name: "Auroras Technological Institute, Chikkadpally", code: "AURN", website: "https://aurora.ac.in/", guide: { name: "Information Office", branch: "", year: "", phone: "+91-9100000152", email: "ati@aurora.ac.in" },
    fees: { "CSE": "₹52,000 / year", "CSE (AI/ML)": "₹52,000 / year", "ECE": "₹52,000 / year", "EEE": "₹52,000 / year", "Other branches": "₹52,000 / year" }, highest: "₹9.0 LPA", average: "₹3.20 LPA",
  },
  AVIH: {
    name: "Avanthi Institute of Engineering and Technology, Hayathnagar", code: "AVIH", website: "http://aietg.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-9866664614", email: "avanthihayatnagar@gmail.com" },
    fees: { "CSE": "₹60,000 – ₹78,000 / year", "CSE (AI/ML)": "₹60,000 – ₹78,000 / year", "ECE": "₹60,000 – ₹78,000 / year", "EEE": "₹60,000 – ₹78,000 / year", "Other branches": "₹60,000 – ₹78,000 / year" }, highest: "₹14.5 LPA", average: "₹3.85 LPA",
  },
  AVNI: {
    name: "AVN Institute of Engineering & Technology, Ibrahimpatnam", code: "AVNI", website: "https://avniet.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9248011441", email: "principal@avniet.ac.in" },
    fees: { "CSE": "₹95,000 / year", "CSE (AI/ML)": "₹95,000 / year", "ECE": "₹95,000 / year", "EEE": "₹95,000 / year", "Other branches": "₹95,000 / year" }, highest: "₹16.0 LPA", average: "₹4.20 LPA",
  },
  AZAD: {
    name: "Azad College of Engineering and Technology, Moinabad", code: "AZAD", website: "https://azad.ac.in/", guide: { name: "Information Office", branch: "", year: "", phone: "+91-9848529241", email: "info@azad.ac.in" },
    fees: { "CSE": "₹40,000 – ₹47,000 / year", "CSE (AI/ML)": "₹40,000 – ₹47,000 / year", "ECE": "₹40,000 – ₹47,000 / year", "EEE": "₹40,000 – ₹47,000 / year", "Other branches": "₹40,000 – ₹47,000 / year" }, highest: "₹7.0 LPA", average: "₹2.80 LPA",
  },
  BIET: {
    name: "Bharat Institute of Engineering and Technology, Ibrahimpatnam", code: "BIET", website: "https://biet.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-9515250000", email: "admissions@biet.ac.in" },
    fees: { "CSE": "₹1,16,000 / year", "CSE (AI/ML)": "₹1,16,000 / year", "ECE": "₹1,16,000 / year", "EEE": "₹1,16,000 / year", "Other branches": "₹1,16,000 / year" }, highest: "₹24.0 LPA", average: "₹4.50 LPA",
  },
  BITN: {
    name: "Balaji Institute of Technology and Science, Narsampet", code: "BITN", website: "https://bitswgl.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-98660 50044", email: "principal@bitswgl.ac.in" },
    fees: { "CSE": "₹75,000 – ₹85,000 / year", "CSE (AI/ML)": "₹75,000 – ₹85,000 / year", "ECE": "₹75,000 – ₹85,000 / year", "EEE": "₹75,000 – ₹85,000 / year", "Other branches": "₹75,000 – ₹85,000 / year" }, highest: "₹18.2 LPA", average: "₹4.10 LPA",
  },
  BOMA: {
    name: "Bomma Institute of Technology and Science, Khammam", code: "BOMA", website: "https://bomma.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9396671175", email: "principal@bomma.ac.in" },
    fees: { "CSE": "₹45,000 – ₹52,000 / year", "CSE (AI/ML)": "₹45,000 – ₹52,000 / year", "ECE": "₹45,000 – ₹52,000 / year", "EEE": "₹45,000 – ₹52,000 / year", "Other branches": "₹45,000 – ₹52,000 / year" }, highest: "₹8.0 LPA", average: "₹3.00 LPA",
  },
  BOSE: {
    name: "Anu Bose Institute of Technology for Women, Paloncha", code: "BOSE", website: "https://abit.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9494289842", email: "principalabit@gmail.com" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹9.5 LPA", average: "₹3.40 LPA",
  },
  BREW: {
    name: "Bhojreddy Engineering College for Women, Saidabad", code: "BREW", website: "https://brecw.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-40-24531725", email: "principal@brecw.ac.in" },
    fees: { "CSE": "₹78,000 – ₹88,000 / year", "CSE (AI/ML)": "₹78,000 – ₹88,000 / year", "ECE": "₹78,000 – ₹88,000 / year", "EEE": "₹78,000 – ₹88,000 / year", "Other branches": "₹78,000 – ₹88,000 / year" }, highest: "₹22.0 LPA", average: "₹4.80 LPA",
  },
  BRIG: {
    name: "Brilliant Grammar School Educational Society Group, Hayathnagar", code: "BRIG", website: "https://bghs.ac.in/", guide: { name: "Admissions / Office", branch: "", year: "", phone: "+91-9652226061", email: "brilliant.group6@gmail.com" },
    fees: { "CSE": "₹55,000 / year", "CSE (AI/ML)": "₹55,000 / year", "ECE": "₹55,000 / year", "EEE": "₹55,000 / year", "Other branches": "₹55,000 / year" }, highest: "₹11.0 LPA", average: "₹3.25 LPA",
  },
  BRIL: {
    name: "Brilliant Institute of Engineering and Technology, Hayathnagar", code: "BRIL", website: "https://briet.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9133308468", email: "principal@briet.ac.in" },
    fees: { "CSE": "₹65,000 / year", "CSE (AI/ML)": "₹65,000 / year", "ECE": "₹65,000 / year", "EEE": "₹65,000 / year", "Other branches": "₹65,000 / year" }, highest: "₹12.0 LPA", average: "₹3.50 LPA",
  },
  BSKR: {
    name: "Bhaskar Engineering College, Yenkapally", code: "BSKR", website: "https://www.bec.edu.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9247000908", email: "principal.bhaskar@gmail.com" },
    fees: { "CSE": "₹51,500 / year", "CSE (AI/ML)": "₹51,500 / year", "ECE": "₹51,500 / year", "EEE": "₹51,500 / year", "Other branches": "₹51,500 / year" }, highest: "₹10.5 LPA", average: "₹3.20 LPA",
  },
  BVRI: {
    name: "B V Raju Institute of Technology, Narsapur", code: "BVRI", website: "https://bvrit.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-8458-222000", email: "admissions@bvrit.ac.in" },
    fees: { "CSE": "₹1,35,000 – ₹1,45,000 / year", "CSE (AI/ML)": "₹1,35,000 – ₹1,45,000 / year", "ECE": "₹1,35,000 – ₹1,45,000 / year", "EEE": "₹1,35,000 – ₹1,45,000 / year", "Other branches": "₹1,35,000 – ₹1,45,000 / year" }, highest: "₹44.0 LPA", average: "₹5.80 LPA",
  },
  BVRW: {
    name: "BVRIT College of Engineering for Women, Bachupally", code: "BVRW", website: "https://bvrithyderabad.edu.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-40-42417773", email: "principal@bvrithyderabad.edu.in" },
    fees: { "CSE": "₹1,43,500 / year", "CSE (AI/ML)": "₹1,43,500 / year", "ECE": "₹1,43,500 / year", "EEE": "₹1,43,500 / year", "Other branches": "₹1,43,500 / year" }, highest: "₹38.0 LPA", average: "₹5.20 LPA",
  },
  CASR: {
    name: "College of Agricultural Engineering, Sangareddy", code: "CASR", website: "https://pjtsau.edu.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-8455-276532", email: "caesrd@gmail.com" },
    fees: { "CSE": "", "CSE (AI/ML)": "", "ECE": "", "EEE": "", "Other branches": "Agricultural Engineering: ₹42,000 / year" }, highest: "₹7.5 LPA", average: "₹4.00 LPA",
  },
  CBIT: {
    name: "Chaitanya Bharathi Institute of Technology, Gandipet", code: "CBIT", website: "https://cbit.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-8466997201", email: "principal@cbit.ac.in" },
    fees: { "CSE": "₹1,75,000 – ₹1,83,000 / year", "CSE (AI/ML)": "₹1,75,000 – ₹1,83,000 / year", "ECE": "₹1,75,000 – ₹1,83,000 / year", "EEE": "₹1,75,000 – ₹1,83,000 / year", "Other branches": "₹1,75,000 – ₹1,83,000 / year" }, highest: "₹54.0 LPA", average: "₹6.30 LPA",
  },
  CDTK: {
    name: "College of Dairy Technology, Kamareddy", code: "CDTK", website: "https://pvnrvetuniversity.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-8468-222214", email: "cdtk@gmail.com" },
    fees: { "CSE": "", "CSE (AI/ML)": "", "ECE": "", "EEE": "", "Other branches": "Dairy Technology: ₹38,000 / year" }, highest: "₹6.5 LPA", average: "₹3.80 LPA",
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
            {profile?.website ? <a href={profile.website} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-[#f4c542] underline underline-offset-4">Visit official website ↗</a> : <div className="mt-4 min-h-6" />}
          </section>
          <section className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
            <h2 className="text-lg font-black">Student Guide / Office Contacts</h2>
            <p className="mt-1 text-xs text-zinc-500">A current student can be added later; office contact details are shown when provided.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-zinc-500">Name / Office</span><div className="mt-1 min-h-5 font-bold">{profile?.guide?.name ?? ""}</div></div>
              <div><span className="text-zinc-500">Branch / Year</span><div className="mt-1 min-h-5 font-bold">{profile?.guide ? `${profile.guide.branch} ${profile.guide.year}` : ""}</div></div>
              <div><span className="text-zinc-500">Phone</span><div className="mt-1 min-h-5 font-bold">{profile?.guide?.phone ?? ""}</div></div>
              <div><span className="text-zinc-500">Email</span><div className="mt-1 min-h-5 font-bold">{profile?.guide?.email ?? ""}</div></div>
            </div>
          </section>
        </div>
        <section className="mt-5 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
          <h2 className="text-lg font-black">Branch-wise Fees</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10"><table className="w-full text-left text-sm"><thead className="bg-white/[.03] text-[10px] font-black uppercase tracking-[.16em] text-zinc-500"><tr><th className="px-4 py-3">Branch</th><th className="px-4 py-3">Annual / Tuition Fee</th></tr></thead><tbody>{feeRows.map((branch) => <tr key={branch} className="border-t border-white/6"><td className="px-4 py-3 font-semibold">{branch}</td><td className="px-4 py-3 text-zinc-400">{profile?.fees?.[branch] ?? ""}</td></tr>)}</tbody></table></div>
        </section>
        <section className="mt-5 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">
          <h2 className="text-lg font-black">Placements</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10"><table className="w-full text-left text-sm"><thead className="bg-white/[.03] text-[10px] font-black uppercase tracking-[.16em] text-zinc-500"><tr><th className="px-4 py-3">Year</th><th className="px-4 py-3">Highest Package</th><th className="px-4 py-3">Average Package</th></tr></thead><tbody><tr className="border-t border-white/6"><td className="px-4 py-3 font-semibold">2026</td><td className="px-4 py-3 text-zinc-400">{profile?.highest ?? ""}</td><td className="px-4 py-3 text-zinc-400">{profile?.average ?? ""}</td></tr></tbody></table></div>
        </section>
      </div>
    </main>
  );
}
