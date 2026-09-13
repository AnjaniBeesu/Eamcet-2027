const hostels = [
  { code: "AARM", name: "AAR Mahaveer Engineering College, Bandlaguda", girls: true, boys: true },
  { code: "ACEG", name: "ACE Engineering College (Autonomous), Ghatkesar", girls: true, boys: true },
  { code: "AITH", name: "Annamacharya Institute of Technology and Sciences, Hayathnagar", girls: true, boys: false },
  { code: "AIZA", name: "Aizza College of Engineering and Technology, Mancherial", girls: false, boys: false },
  { code: "AKIT", name: "AbdulKalam Institute of Technological Sciences, Kothagudem", girls: true, boys: false },
  { code: "ANRK", name: "Anurag Engineering College, Kodad", girls: true, boys: true },
  { code: "ANUG", name: "Anurag University, Ghatkesar", girls: true, boys: true },
  { code: "ARJN", name: "Arjun College of Technology and Science, Batasingaram", girls: true, boys: false },
  { code: "ASRA", name: "Avanthis Scientific Tech and Research Academy, Hayathnagar", girls: true, boys: false },
  { code: "AURC", name: "Aurora Scientific and Tech Research Academy, Hyderabad", girls: false, boys: false },
  { code: "AURG", name: "Auroras Scientific and Technological Institute, Ghatkesar", girls: false, boys: false },
  { code: "AURH", name: "Ramappa Engineering College, Shayampet", girls: true, boys: false },
  { code: "AURK", name: "Aurora's Technological and Management Academy, Parvathapur", girls: false, boys: false },
  { code: "AURN", name: "Auroras Technological Institute, Chikkadpally", girls: false, boys: false },
  { code: "AVIH", name: "Avanthi Institute of Engineering and Technology, Hayathnagar", girls: true, boys: false },
  { code: "AVNI", name: "AVN Institute of Engineering and Technology, Ibrahimpatnam", girls: true, boys: false },
  { code: "AZAD", name: "Azad College of Engineering and Technology, Moinabad", girls: true, boys: false },
  { code: "BIET", name: "Bharat Institute of Engineering and Technology, Ibrahimpatnam", girls: true, boys: true },
  { code: "BITN", name: "Balaji Institute of Technology and Science, Narsampet", girls: true, boys: true },
  { code: "BOMA", name: "Bomma Institute of Technology and Science, Khammam", girls: true, boys: true },
  { code: "BOSE", name: "Anu Bose Institute of Technology for Women, Paloncha", girls: true, boys: false },
  { code: "BREW", name: "Bhojreddy Engineering College for Women, Saidabad", girls: true, boys: false },
  { code: "BRIG", name: "Brilliant Grammar School Educational Society Group, Hayathnagar", girls: true, boys: false },
  { code: "BRIL", name: "Brilliant Institute of Engineering and Technology, Hayathnagar", girls: true, boys: false },
  { code: "BSKR", name: "Bhaskar Engineering College, Yenkapally", girls: true, boys: false },
  { code: "BVRI", name: "B V Raju Institute of Technology, Narsapur", girls: true, boys: true },
  { code: "BVRW", name: "BVRIT College of Engineering for Women, Bachupally", girls: true, boys: false },
  { code: "CASR", name: "College of Agricultural Engineering, Sangareddy", girls: true, boys: true },
  { code: "CBIT", name: "Chaitanya Bharathi Institute of Technology, Gandipet", girls: true, boys: true },
  { code: "CDTK", name: "College of Dairy Technology, Kamareddy", girls: true, boys: true },
  { code: "CFSR", name: "College of Food Science and Technology, Rudrur", girls: true, boys: true },
  { code: "CHET", name: "Sri Chaitanya Technical Campus, Ibrahimpatnam", girls: true, boys: false },
  { code: "CHTN", name: "Sree Chaitanya College of Engineering, Karimnagar", girls: true, boys: true },
  { code: "CHTS", name: "Sree Chaitanya Institute of Technology Sciences, Karimnagar", girls: true, boys: false },
  { code: "CJIT", name: "Christu Jyothi Institute of Technology and Science, Jangaon", girls: true, boys: true },
  { code: "CMRG", name: "CMR Technical Campus, Kandlakoya", girls: true, boys: false },
  { code: "CMRK", name: "C M R College of Engineering and Technology, Kandlakoya", girls: true, boys: false },
  { code: "CMRM", name: "CMR Institute of Technology, Kandlakoya", girls: true, boys: false },
  { code: "CMRN", name: "CMR Engineering College, Kandlakoya", girls: true, boys: false },
  { code: "CVRH", name: "CVR College of Engineering, Ibrahimpatnam", girls: true, boys: true },
  { code: "DARE", name: "Daripally Anantha Ramulu College of Engineering and Technology, Khammam", girls: true, boys: false },
  { code: "DCET", name: "Deccan College of Engineering and Technology, Hyderabad", girls: false, boys: false },
  { code: "DRKI", name: "D R K Institute of Science and Technology, Bowrampet", girls: true, boys: false },
  { code: "ELEN", name: "Ellenki College of Engineering and Technology, Patancheru", girls: true, boys: false },
  { code: "ESUT", name: "Earth Sciences University of Telangana, Kothagudem", girls: true, boys: true },
  { code: "ESUTSF", name: "Earth Sciences University of Telangana Self-Finance, Kothagudem", girls: true, boys: true },
  { code: "GATE", name: "Gate Institute of Technology and Sciences, Kodad", girls: true, boys: true },
  { code: "GCTC", name: "Geetanjali College of Engineering and Technology, Keesara", girls: true, boys: false },
  { code: "GKEM", name: "G K Institute of Engineering and Technology, Mahabubnagar", girls: true, boys: false },
  { code: "GLOB", name: "Global Institute of Engineering and Technology, Chilkur", girls: true, boys: true },
  { code: "GLWC", name: "Gokaraju Lailavathi Engineering College, Bachupally", girls: true, boys: false },
  { code: "GNIT", name: "Gurunanak Institute of Technology, Ibrahimpatnam", girls: true, boys: false },
  { code: "GNTW", name: "G Narayanamma Institute of Technology and Science, Shaikpet", girls: true, boys: false },
  { code: "GRRR", name: "Gokaraju Rangaraju Institute of Engineering and Technology, Bachupally", girls: true, boys: true },
  { code: "GURU", name: "Guru Nanak Institutions Technical Campus, Ibrahimpatnam", girls: true, boys: true },
  { code: "HIND", name: "Hindu Institute of Science and Technology, Kukatpally", girls: false, boys: false },
  { code: "HITM", name: "Hyderabad Institute of Technology and Management, Medchal", girls: true, boys: false },
  { code: "HOLY", name: "Holy Mary Institute of Technology and Science, Keesara", girls: true, boys: true },
  { code: "IARE", name: "Institute of Aeronautical Engineering, Dundigal", girls: true, boys: false },
  { code: "IITT", name: "Indur Institute of Engineering and Technology, Siddipet", girls: true, boys: true },
  { code: "INDI", name: "Sri Indu Institute of Engineering and Technology, Ibrahimpatnam", girls: true, boys: false },
  { code: "INDU", name: "Sri Indu College of Engineering and Technology, Ibrahimpatnam", girls: true, boys: false },
  { code: "ISLC", name: "ISL Engineering College, Bandlaguda", girls: false, boys: false },
  { code: "JAYA", name: "Jayamukhi Institute of Technology and Sciences, Narsampet", girls: true, boys: true },
  { code: "JBIT", name: "J B Institute of Engineering and Technology, Yenkapally", girls: true, boys: true },
  { code: "JMTS", name: "Jyothishmathi Institute of Technology and Science, Karimnagar", girls: true, boys: true },
  { code: "JNKR", name: "JNTUH University College of Engineering, Jagitial", girls: true, boys: true },
  { code: "JNMB", name: "JNTUH University College of Engineering, Mahabubabad", girls: true, boys: true },
  { code: "JNPASF", name: "JNAFAU School of Planning and Architecture, Self-Finance", girls: false, boys: false },
  { code: "JNPL", name: "JNTUH University College of Engineering, Palair", girls: true, boys: true },
  { code: "JNTH", name: "JNTUH College of Engineering Science and Technology, Hyderabad", girls: true, boys: true },
  { code: "JNTHMT", name: "JNTUH CEST 5-Year Integrated M.Tech Self-Finance", girls: true, boys: true },
  { code: "JNTM", name: "JNTUH University College of Engineering, Manthani", girls: true, boys: true },
  { code: "JNTR", name: "JNTUH University College of Engineering, Rajanna Sircilla", girls: true, boys: true },
  { code: "JNTS", name: "JNTUH University College of Engineering, Sultanpur", girls: true, boys: true },
  { code: "JNTSSF", name: "JNTUH University College of Engineering, Sultanpur Self-Finance", girls: true, boys: true },
  { code: "JNWN", name: "JNTUH University College of Engineering, Wanaparthy", girls: true, boys: true },
  { code: "JOGI", name: "Joginpally B R Engineering College, Yenkapally", girls: true, boys: false },
  { code: "JPNE", name: "Jaya Prakash Narayan College of Engineering, Mahabubnagar", girls: true, boys: true },
  { code: "JPNH", name: "Jayaprakash Narayan Engineering College, Bandlaguda", girls: true, boys: false },
  { code: "KCEA", name: "Kshatriya College of Engineering, Armoor", girls: true, boys: false },
  { code: "KDDW", name: "Kodada Institute of Technology and Science for Women, Kodad", girls: true, boys: false },
  { code: "KGRH", name: "KG Reddy College of Engineering and Technology, Moinabad", girls: true, boys: false },
  { code: "KITS", name: "Kakatiya Institute of Technology and Science, Warangal", girls: true, boys: true },
  { code: "KITW", name: "Kakatiya Institute of Technology and Science for Women, Nizamabad", girls: true, boys: false },
  { code: "KLRT", name: "KLR College of Engineering and Technology, Paloncha", girls: true, boys: true },
  { code: "KMCE", name: "Keshav Memorial College of Engineering, Ibrahimpatnam", girls: false, boys: false },
  { code: "KMEC", name: "Keshav Memorial Engineering College, Ghatkesar", girls: false, boys: false },
  { code: "KMIT", name: "Keshav Memorial Institute of Technology, Narayanaguda", girls: false, boys: false },
  { code: "KNRR", name: "Kasireddy Narayan Reddy College of Engineering and Research, Hayathnagar", girls: true, boys: false },
  { code: "KPRC", name: "KPRIT College of Engineering, Ghatkesar", girls: true, boys: false },
  { code: "KPRT", name: "Kommuri Pratap Reddy Institute of Technology, Ghatkesar", girls: true, boys: false },
  { code: "KSGI", name: "Government Engineering College, Kosgi", girls: true, boys: true },
  { code: "KTKM", name: "Kamala Institute of Technology and Science, Huzurabad", girls: true, boys: true },
  { code: "KUEWSF", name: "University College of Engineering and Technology for Women, KU", girls: true, boys: false },
  { code: "KUWL", name: "KU College of Engineering and Technology, Warangal", girls: true, boys: true },
  { code: "LRDS", name: "Lords Institute of Engineering and Technology, Himayatsagar", girls: true, boys: false },
  { code: "MDRK", name: "Madhira Institute of Technology and Science, Kodad", girls: true, boys: false },
  { code: "METH", name: "Methodist College of Engineering and Technology, Abids", girls: false, boys: false },
  { code: "MGHA", name: "Megha Institute of Engineering and Technology for Women, Ghatkesar", girls: true, boys: false },
  { code: "MGIT", name: "Mahatma Gandhi Institute of Technology, Gandipet", girls: true, boys: true },
  { code: "MGUNSF", name: "MGU College of Engineering and Technology, Nalgonda", girls: true, boys: true },
  { code: "MHVR", name: "Mahaveer Institute of Science and Technology, Bandlaguda", girls: true, boys: false },
  { code: "MINA", name: "Mina Institute of Engineering and Technology for Women, Miryalaguda", girls: true, boys: false },
  { code: "MJCT", name: "M J College of Engineering and Technology, Banjara Hills", girls: false, boys: false },
  { code: "MLID", name: "M L R Institute of Technology, Dundigal", girls: true, boys: false },
  { code: "MLRD", name: "Malla Reddy College of Engineering Technology, Maisammaguda", girls: true, boys: true },
  { code: "MLRS", name: "Marri Laxman Reddy Institute of Technology and Management, Dundigal", girls: true, boys: false },
  { code: "MMTZ", name: "Mumtaz College of Engineering Technology, Hyderabad", girls: false, boys: false },
  { code: "MOTK", name: "Mother Teresa Institute of Science and Technology, Sathupally", girls: true, boys: true },
  { code: "MRCE", name: "Malla Reddy College of Engineering, Maisammaguda", girls: true, boys: false },
  { code: "MRCW", name: "Malla Reddy Engineering College for Women, Maisammaguda", girls: true, boys: false },
  { code: "MREM", name: "Malla Reddy Engineering College and Management Sciences, Medchal", girls: true, boys: false },
  { code: "MRTN", name: "St Martins Engineering College, Dhulapally", girls: true, boys: true },
  { code: "MTEC", name: "Mother Theresa College of Engineering and Technology, Peddapally", girls: true, boys: false },
  { code: "MVSR", name: "M V S R Engineering College, Nadergul", girls: true, boys: false },
  { code: "NAWB", name: "Nawab Shah Alam Khan College of Engineering and Technology, Malakpet", girls: false, boys: false },
  { code: "NGIT", name: "Neil Gogte Institute of Technology, Ghatkesar", girls: false, boys: false },
  { code: "NNRG", name: "Nalla Narasimha Reddy Educational Society Group of Institutions, Ghatkesar", girls: true, boys: false },
  { code: "NRCM", name: "Narsimha Reddy Engineering College, Maisammaguda", girls: true, boys: false },
  { code: "NREC", name: "Nallamalla Reddy Engineering College, Ghatkesar", girls: true, boys: false },
  { code: "OUCE", name: "O U College of Engineering, Hyderabad", girls: true, boys: true },
  { code: "OUCT", name: "O U College of Technology, Hyderabad", girls: true, boys: true },
  { code: "PALV", name: "Pallavi Engineering College, Kuntloor", girls: true, boys: false },
  { code: "PETW", name: "Princeton Institute of Engineering Technology for Women, Ghatkesar", girls: true, boys: false },
  { code: "PRIW", name: "Priyadarshini Institute of Science and Technology for Women, Khammam", girls: true, boys: false },
  { code: "PUCE", name: "University College of Engineering, Palamuru University", girls: true, boys: true },
  { code: "RITW", name: "Rishi MS Institute of Engineering and Technology for Women, Kukatpally", girls: true, boys: false },
  { code: "SAGR", name: "Sagar Group of Institutions, Chevella", girls: true, boys: true },
  { code: "SAIS", name: "Sai Spurthi Institute of Technology, Sathupally", girls: true, boys: true },
  { code: "SANA", name: "Sana Engineering College, Kodad", girls: true, boys: true },
  { code: "SBIT", name: "Swarna Bharathi Institute of Science and Technology, Khammam", girls: true, boys: true },
  { code: "SCET", name: "Shadan College of Engineering and Technology, Peerancheru", girls: true, boys: false },
  { code: "SCIT", name: "Sri Chaitanya Institute of Technology and Research, Khammam", girls: true, boys: false },
  { code: "SDES", name: "Sree Dattha Institute of Engineering and Science, Ibrahimpatnam", girls: true, boys: true },
  { code: "SDEW", name: "Sridevi Womens Engineering College, Gandipet", girls: true, boys: false },
  { code: "SDGI", name: "Sree Dattha Group of Institutions, Ibrahimpatnam", girls: true, boys: false },
  { code: "SIEI", name: "Siddhartha Institute of Engineering and Technology, Ibrahimpatnam", girls: true, boys: false },
  { code: "SISG", name: "Siddhartha Institute of Technology and Sciences, Ghatkesar", girls: true, boys: false },
  { code: "SMED", name: "St Marys Group of Institutions, Deshmukhi", girls: true, boys: true },
  { code: "SMSK", name: "Samskruthi College of Engineering and Technology, Ghatkesar", girls: true, boys: false },
  { code: "SNIS", name: "Srinidhi Institute of Science and Technology, Ghatkesar", girls: true, boys: true },
  { code: "SNTI", name: "Scient Institute of Technology, Ibrahimpatnam", girls: true, boys: false },
  { code: "SPEC", name: "St Peters Engineering College, Medchal", girls: true, boys: false },
  { code: "SPHN", name: "Sphoorthy Engineering College, Nadergul", girls: true, boys: false },
  { code: "SRHP", name: "SR University, Hasanparthy", girls: true, boys: true },
  { code: "SRIW", name: "Sumathi Reddy Institute of Technology for Women, Hasanparthy", girls: true, boys: false },
  { code: "SRYS", name: "Sreyas Institute of Engineering and Technology, Nagole", girls: true, boys: false },
  { code: "STLW", name: "Stanley College of Engineering and Technology for Women, Abids", girls: true, boys: false },
  { code: "SUCE", name: "University College of Engineering, Husnabad, Satavahana University", girls: true, boys: true },
  { code: "SVES", name: "Sri Venkateswara Engineering College, Suryapet", girls: true, boys: false },
  { code: "SVIT", name: "Swami Vivekananda Institute of Technology, Secunderabad", girls: false, boys: false },
  { code: "SVSE", name: "SVS Institute of Technology, Hanamkonda", girls: true, boys: true },
  { code: "SWET", name: "Shadan Womens College of Engineering and Technology, Khairatabad", girls: true, boys: false },
  { code: "TCEK", name: "Trinity College of Engineering and Technology, Peddapally", girls: true, boys: false },
  { code: "TCTK", name: "Trinity College of Engineering and Technology, Karimnagar", girls: true, boys: false },
  { code: "TKEM", name: "Teegala Krishna Reddy Engineering College, Meerpet", girls: true, boys: false },
  { code: "TKRC", name: "T K R College of Engineering and Technology, Meerpet", girls: true, boys: false },
  { code: "TPCE", name: "Talla Padmavathi College of Engineering, Kazipet", girls: true, boys: true },
  { code: "TRRM", name: "TRR College of Technology, Meerpet", girls: true, boys: false },
  { code: "TUCE", name: "University College of Engineering, Telangana University, Nizamabad", girls: true, boys: true },
  { code: "VAGE", name: "Vaagdevi College of Engineering, Warangal", girls: true, boys: true },
  { code: "VASV", name: "Vasavi College of Engineering, Hyderabad", girls: true, boys: false },
  { code: "VBIT", name: "Vignan Bharati Institute of Technology, Ghatkesar", girls: true, boys: true },
  { code: "VCET", name: "Visweswaraya College of Engineering and Technology, Ibrahimpatnam", girls: true, boys: false },
  { code: "VGNT", name: "Vignan Institute of Technology and Science, Deshmukhi", girls: true, boys: true },
  { code: "VGSE", name: "Vaageshwari College of Engineering, Karimnagar", girls: true, boys: true },
  { code: "VGWL", name: "Vagdevi Engineering College, Warangal", girls: true, boys: false },
  { code: "VISA", name: "Vathsalya Institute of Science and Technology, Bhongir", girls: true, boys: false },
  { code: "VITS", name: "Sri Vishweswaraya Institute of Technology and Science, Mahabubnagar", girls: true, boys: true },
  { code: "VJEC", name: "VNR Vignana Jyothi Institute of Engineering and Technology, Bachupally", girls: true, boys: true },
  { code: "VJIT", name: "Vidya Jyothi Institute of Technology, Moinabad", girls: true, boys: false },
  { code: "VMEG", name: "Vardhaman College of Engineering, Shamshabad", girls: true, boys: true },
  { code: "VMTW", name: "Vignans Institute of Management and Technology for Women, Ghatkesar", girls: true, boys: false },
  { code: "VREC", name: "Vijaya Rural Engineering College, Nizamabad", girls: true, boys: true },
  { code: "VRKW", name: "Dr VRK Womens College of Engineering and Technology, Moinabad", girls: true, boys: false },
  { code: "WESL", name: "CSI Wesley Institute of Technology and Sciences, Secunderabad", girls: false, boys: false },
  { code: "WITS", name: "Warangal Institute of Technology Science, Warangal", girls: true, boys: false },
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
            In-campus hostel availability across the colleges in our institute profile directory.
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
          Hostel availability is based on the hostel ledger you provided. It can change by academic year and room capacity, so students and parents should confirm current hostel allotment, eligibility, fees, and vacancies with the college before admission.
        </p>
      </div>
    </main>
  );
}
