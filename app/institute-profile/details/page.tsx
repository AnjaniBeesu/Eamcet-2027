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
  CFSR: {
    name: "College of Food Science & Technology, Rudrur", code: "CFSR", website: "https://pjtsau.edu.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-8467-284453", email: "cfstrdr@gmail.com" },
    fees: { "CSE": "", "CSE (AI/ML)": "", "ECE": "", "EEE": "", "Other branches": "B.Tech Food Technology: ₹43,100 / year" }, highest: "₹7.0 LPA", average: "₹3.50 LPA",
  },
  CHET: {
    name: "Sri Chaitanya Technical Campus, Ibrahimpatnam", code: "CHET", website: "https://srict.ac.in/", guide: { name: "Office", branch: "", year: "", phone: "+91-9246340277", email: "srict.principal@gmail.com" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹8.0 LPA", average: "₹3.00 LPA",
  },
  CHTN: {
    name: "Sree Chaitanya College of Engineering, Karimnagar", code: "CHTN", website: "https://scce.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9000993510", email: "principal@scce.ac.in" },
    fees: { "CSE": "₹70,000 / year", "CSE (AI/ML)": "₹70,000 / year", "ECE": "₹70,000 / year", "EEE": "₹70,000 / year", "Other branches": "₹70,000 / year" }, highest: "₹14.0 LPA", average: "₹3.80 LPA",
  },
  CHTS: {
    name: "Sree Chaitanya Inst of Technology Sciences, Karimnagar", code: "CHTS", website: "https://scits.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9849073167", email: "principal@scits.ac.in" },
    fees: { "CSE": "₹56,000 / year", "CSE (AI/ML)": "₹56,000 / year", "ECE": "₹56,000 / year", "EEE": "₹56,000 / year", "Other branches": "₹56,000 / year" }, highest: "₹10.5 LPA", average: "₹3.40 LPA",
  },
  CJIT: {
    name: "Christu Jyothi Institute of Technology & Sci, Jangaon", code: "CJIT", website: "https://cjit.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-8716-225433", email: "principal@cjit.ac.in" },
    fees: { "CSE": "₹63,000 / year", "CSE (AI/ML)": "₹63,000 / year", "ECE": "₹63,000 / year", "EEE": "₹63,000 / year", "Other branches": "₹63,000 / year" }, highest: "₹11.0 LPA", average: "₹3.60 LPA",
  },
  CMRG: {
    name: "CMR Technical Campus, Kandlakoya", code: "CMRG", website: "https://cmrtc.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-9247033415", email: "admissions@cmrtc.ac.in" },
    fees: { "CSE": "₹1,15,000 / year", "CSE (AI/ML)": "₹1,15,000 / year", "ECE": "₹1,15,000 / year", "EEE": "₹1,15,000 / year", "Other branches": "₹1,15,000 / year" }, highest: "₹44.0 LPA", average: "₹5.10 LPA",
  },
  CMRK: {
    name: "C M R College of Engg and Technology, Kandlakoya", code: "CMRK", website: "https://cmrcet.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9248727210", email: "principal@cmrcet.ac.in" },
    fees: { "CSE": "₹1,25,000 / year", "CSE (AI/ML)": "₹1,25,000 / year", "ECE": "₹1,25,000 / year", "EEE": "₹1,25,000 / year", "Other branches": "₹1,25,000 / year" }, highest: "₹58.0 LPA", average: "₹5.60 LPA",
  },
  CMRM: {
    name: "CMR Institute of Technology, Kandlakoya", code: "CMRM", website: "https://cmritonline.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-8008557612", email: "principal@cmritonline.ac.in" },
    fees: { "CSE": "₹1,05,000 / year", "CSE (AI/ML)": "₹1,05,000 / year", "ECE": "₹1,05,000 / year", "EEE": "₹1,05,000 / year", "Other branches": "₹1,05,000 / year" }, highest: "₹36.0 LPA", average: "₹4.80 LPA",
  },
  CMRN: {
    name: "CMR Engg College, Kandlakoya", code: "CMRN", website: "https://cmrec.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9247600888", email: "principal@cmrec.ac.in" },
    fees: { "CSE": "₹1,10,000 / year", "CSE (AI/ML)": "₹1,10,000 / year", "ECE": "₹1,10,000 / year", "EEE": "₹1,10,000 / year", "Other branches": "₹1,10,000 / year" }, highest: "₹40.0 LPA", average: "₹5.00 LPA",
  },
  CVRH: {
    name: "CVR College of Engineering, Ibrahimpatnam", code: "CVRH", website: "https://cvr.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-8414-665555", email: "principal@cvr.ac.in" },
    fees: { "CSE": "₹1,50,000 / year", "CSE (AI/ML)": "₹1,50,000 / year", "ECE": "₹1,50,000 / year", "EEE": "₹1,50,000 / year", "Other branches": "₹1,50,000 / year" }, highest: "₹52.5 LPA", average: "₹6.20 LPA",
  },
  DARE: {
    name: "Daripally Anantha Ramulu Coll of Engg, Khammam", code: "DARE", website: "https://darc.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9848184631", email: "principal.dare@gmail.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" }, highest: "₹7.5 LPA", average: "₹2.90 LPA",
  },
  DCET: {
    name: "Deccan College of Engineering and Technology, Hyderabad", code: "DCET", website: "https://deccancollege.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-40-24802634", email: "dcet@deccancollege.cc" },
    fees: { "CSE": "₹90,000 / year", "CSE (AI/ML)": "₹90,000 / year", "ECE": "₹90,000 / year", "EEE": "₹90,000 / year", "Other branches": "₹90,000 / year" }, highest: "₹18.0 LPA", average: "₹3.90 LPA",
  },
  DRKI: {
    name: "D R K Institute of Sci and Technology, Bowrampet", code: "DRKI", website: "https://drkist.org/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9985223000", email: "principal@drkist.org" },
    fees: { "CSE": "₹65,000 / year", "CSE (AI/ML)": "₹65,000 / year", "ECE": "₹65,000 / year", "EEE": "₹65,000 / year", "Other branches": "₹65,000 / year" }, highest: "₹11.0 LPA", average: "₹3.40 LPA",
  },
  ELEN: {
    name: "Ellenki College of Engg and Technology, Patancheru", code: "ELEN", website: "https://ellenkiengg.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9000185934", email: "principal@ellenkiengg.ac.in" },
    fees: { "CSE": "₹67,000 / year", "CSE (AI/ML)": "₹67,000 / year", "ECE": "₹67,000 / year", "EEE": "₹67,000 / year", "Other branches": "₹67,000 / year" }, highest: "₹12.0 LPA", average: "₹3.50 LPA",
  },
  ESUT: {
    name: "Earth Sciences Univ of TG (Regular), Kothagudem", code: "ESUT", website: "https://kucek.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-8744-242784", email: "principal_kucek@yahoo.com" },
    fees: { "CSE": "", "CSE (AI/ML)": "", "ECE": "", "EEE": "", "Other branches": "Regular Reg quota streams: ₹35,000 / year" }, highest: "₹14.0 LPA", average: "₹4.50 LPA",
  },
  ESUTSF: {
    name: "Earth Sciences Univ of TG (Self-Finance), Kothagudem", code: "ESUTSF", website: "https://kucek.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-8744-242784", email: "principal_kucek@yahoo.com" },
    fees: { "CSE": "", "CSE (AI/ML)": "", "ECE": "", "EEE": "", "Other branches": "Self-Finance streams: ₹70,000 / year" }, highest: "₹14.0 LPA", average: "₹4.50 LPA",
  },
  GATE: {
    name: "Gate Institute of Technology and Sciences, Kodad", code: "GATE", website: "https://gits.ac.in/", guide: { name: "Office", branch: "", year: "", phone: "+91-9948066599", email: "gateits@gmail.com" },
    fees: { "CSE": "₹47,000 / year", "CSE (AI/ML)": "₹47,000 / year", "ECE": "₹47,000 / year", "EEE": "₹47,000 / year", "Other branches": "₹47,000 / year" }, highest: "₹8.5 LPA", average: "₹3.10 LPA",
  },
  GCTC: {
    name: "Geetanjali College of Engg and Technology, Keesara", code: "GCTC", website: "https://www.geethanjaliinstitutions.com/", guide: { name: "Office", branch: "", year: "", phone: "+91-9866308271", email: "info@gcet.edu.in" },
    fees: { "CSE": "₹1,10,000 / year", "CSE (AI/ML)": "₹1,10,000 / year", "ECE": "₹1,10,000 / year", "EEE": "₹1,10,000 / year", "Other branches": "₹1,10,000 / year" }, highest: "₹31.3 LPA", average: "₹4.80 LPA",
  },
  GKEM: {
    name: "G K Institute of Engg and Tech, Mahabubnagar", code: "GKEM", website: "https://gkiet.ac.in/", guide: { name: "Office", branch: "", year: "", phone: "+91-9848831445", email: "gkiet.mbnr@gmail.com" },
    fees: { "CSE": "₹43,000 / year", "CSE (AI/ML)": "₹43,000 / year", "ECE": "₹43,000 / year", "EEE": "₹43,000 / year", "Other branches": "₹43,000 / year" }, highest: "₹7.0 LPA", average: "₹2.80 LPA",
  },
  GLOB: {
    name: "Global Inst of Engineering and Tech, Chilkur", code: "GLOB", website: "https://globalhyd.edu.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9490132224", email: "principal.giet@gmail.com" },
    fees: { "CSE": "₹62,000 / year", "CSE (AI/ML)": "₹62,000 / year", "ECE": "₹62,000 / year", "EEE": "₹62,000 / year", "Other branches": "₹62,000 / year" }, highest: "₹12.5 LPA", average: "₹3.50 LPA",
  },
  GLWC: {
    name: "Gokaraju Lailavathi Engineering College, Bachupally", code: "GLWC", website: "https://glec.ac.in/", guide: { name: "Office", branch: "", year: "", phone: "+91-7207941322", email: "info@glec.ac.in" },
    fees: { "CSE": "₹95,000 / year", "CSE (AI/ML)": "₹95,000 / year", "ECE": "₹95,000 / year", "EEE": "₹95,000 / year", "Other branches": "₹95,000 / year" }, highest: "₹24.0 LPA", average: "₹4.60 LPA",
  },
  GNIT: {
    name: "Gurunanak Inst of Technology, Ibrahimpatnam", code: "GNIT", website: "https://gnithyd.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-8414-222399", email: "admissions@gniindia.org" },
    fees: { "CSE": "₹1,10,000 / year", "CSE (AI/ML)": "₹1,10,000 / year", "ECE": "₹1,10,000 / year", "EEE": "₹1,10,000 / year", "Other branches": "₹1,10,000 / year" }, highest: "₹38.0 LPA", average: "₹4.75 LPA",
  },
  GNTW: {
    name: "G Narayanamma Institute of Tech & Sci (Women), Shaikpet", code: "GNTW", website: "https://www.gnits.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-40-23565648", email: "principal@gnits.ac.in" },
    fees: { "CSE": "₹1,30,000 / year", "CSE (AI/ML)": "₹1,30,000 / year", "ECE": "₹1,30,000 / year", "EEE": "₹1,30,000 / year", "Other branches": "₹1,30,000 / year" }, highest: "₹45.5 LPA", average: "₹6.10 LPA",
  },
  GRRR: {
    name: "Gokaraju Rangaraju Inst of Engg and Tech, Bachupally", code: "GRRR", website: "https://www.griet.ac.in/", guide: { name: "Information Office", branch: "", year: "", phone: "+91-7207344440", email: "info@griet.ac.in" },
    fees: { "CSE": "₹1,30,000 / year", "CSE (AI/ML)": "₹1,30,000 / year", "ECE": "₹1,30,000 / year", "EEE": "₹1,30,000 / year", "Other branches": "₹1,30,000 / year" }, highest: "₹46.0 LPA", average: "₹5.90 LPA",
  },
  GURU: {
    name: "Guru Nanak Institutions Technical Campus, Ibrahimpatnam", code: "GURU", website: "https://www.gniindia.org/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-8414-223326", email: "admissions@gniindia.org" },
    fees: { "CSE": "₹1,15,000 / year", "CSE (AI/ML)": "₹1,15,000 / year", "ECE": "₹1,15,000 / year", "EEE": "₹1,15,000 / year", "Other branches": "₹1,15,000 / year" }, highest: "₹40.0 LPA", average: "₹4.90 LPA",
  },
  HIND: {
    name: "Hindu Institute of Science and Technology, Kukatpally", code: "HIND", website: "https://hinduengg.com/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9440624021", email: "histprincipal@gmail.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" }, highest: "₹6.5 LPA", average: "₹2.80 LPA",
  },
  HITM: {
    name: "Hyderabad Inst of Technology and Mgmt, Medchal", code: "HITM", website: "https://hitam.org/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-9246190742", email: "admissions@hitam.org" },
    fees: { "CSE": "₹92,000 / year", "CSE (AI/ML)": "₹92,000 / year", "ECE": "₹92,000 / year", "EEE": "₹92,000 / year", "Other branches": "₹92,000 / year" }, highest: "₹24.0 LPA", average: "₹4.30 LPA",
  },
  HOLY: {
    name: "Holy Mary Institute of Tech Science, Keesara", code: "HOLY", website: "https://hmgi.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9848889961", email: "principal@hmgi.ac.in" },
    fees: { "CSE": "₹78,000 / year", "CSE (AI/ML)": "₹78,000 / year", "ECE": "₹78,000 / year", "EEE": "₹78,000 / year", "Other branches": "₹78,000 / year" }, highest: "₹18.0 LPA", average: "₹3.85 LPA",
  },
  IARE: {
    name: "Institute of Aeronautical Engineering, Dundigal", code: "IARE", website: "https://www.iare.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-8886016087", email: "admissions@iare.ac.in" },
    fees: { "CSE": "₹1,10,000 / year", "CSE (AI/ML)": "₹1,10,000 / year", "ECE": "₹1,10,000 / year", "EEE": "₹1,10,000 / year", "Other branches": "₹1,10,000 / year" }, highest: "₹38.0 LPA", average: "₹5.25 LPA",
  },
  IITT: {
    name: "Indur Institute of Engineering and Technology, Siddipet", code: "IITT", website: "https://induriet.edu.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9440613941", email: "principal@induriet.edu.in" },
    fees: { "CSE": "₹62,000 / year", "CSE (AI/ML)": "₹62,000 / year", "ECE": "₹62,000 / year", "EEE": "₹62,000 / year", "Other branches": "₹62,000 / year" }, highest: "₹12.0 LPA", average: "₹3.40 LPA",
  },
  INDI: {
    name: "Sri Indu Institute of Engineering & Tech, Ibrahimpatnam", code: "INDI", website: "https://siiet.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9347363999", email: "principal@siiet.ac.in" },
    fees: { "CSE": "₹80,000 / year", "CSE (AI/ML)": "₹80,000 / year", "ECE": "₹80,000 / year", "EEE": "₹80,000 / year", "Other branches": "₹80,000 / year" }, highest: "₹15.0 LPA", average: "₹3.75 LPA",
  },
  INDU: {
    name: "Sri Indu College of Engg and Technology, Ibrahimpatnam", code: "INDU", website: "https://sriindu.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-9347353999", email: "admissions@sriindu.ac.in" },
    fees: { "CSE": "₹1,00,000 / year", "CSE (AI/ML)": "₹1,00,000 / year", "ECE": "₹1,00,000 / year", "EEE": "₹1,00,000 / year", "Other branches": "₹1,00,000 / year" }, highest: "₹22.5 LPA", average: "₹4.40 LPA",
  },
  ISLC: {
    name: "ISL Engineering College (Autonomous), Bandlaguda", code: "ISLC", website: "https://islengg.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-40-29880081", email: "principal@islengg.ac.in" },
    fees: { "CSE": "₹74,000 / year", "CSE (AI/ML)": "₹74,000 / year", "ECE": "₹74,000 / year", "EEE": "₹74,000 / year", "Other branches": "₹74,000 / year" }, highest: "₹16.0 LPA", average: "₹3.80 LPA",
  },
  JAYA: {
    name: "Jayamukhi Institute of Technology and Scis, Narsampet", code: "JAYA", website: "https://jayamukhi.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9849411138", email: "principal@jayamukhi.in" },
    fees: { "CSE": "₹68,000 / year", "CSE (AI/ML)": "₹68,000 / year", "ECE": "₹68,000 / year", "EEE": "₹68,000 / year", "Other branches": "₹68,000 / year" }, highest: "₹14.0 LPA", average: "₹3.60 LPA",
  },
  JBIT: {
    name: "J B Institute of Engg and Technology, Yenkapally", code: "JBIT", website: "https://www.jbiet.edu.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-9866014433", email: "admissions@jbiet.edu.in" },
    fees: { "CSE": "₹1,05,000 / year", "CSE (AI/ML)": "₹1,05,000 / year", "ECE": "₹1,05,000 / year", "EEE": "₹1,05,000 / year", "Other branches": "₹1,05,000 / year" }, highest: "₹21.0 LPA", average: "₹4.50 LPA",
  },
  JMTS: {
    name: "Jyothishmathi Institute of Technology and Sci, Karimnagar", code: "JMTS", website: "https://jits.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9490195515", email: "principal@jits.ac.in" },
    fees: { "CSE": "₹73,000 / year", "CSE (AI/ML)": "₹73,000 / year", "ECE": "₹73,000 / year", "EEE": "₹73,000 / year", "Other branches": "₹73,000 / year" }, highest: "₹15.2 LPA", average: "₹3.70 LPA",
  },
  JNKR: {
    name: "JNTUH Univ College of Engineering, Jagitial", code: "JNKR", website: "https://jntuhcej.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-8724-229000", email: "cej@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹24.0 LPA", average: "₹4.80 LPA",
  },
  JNMB: {
    name: "JNTUH Univ College of Engineering, Mahabubabad", code: "JNMB", website: "https://jntuhcem.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-40-23158661", email: "ucem@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹18.0 LPA", average: "₹4.20 LPA",
  },
  JNPASF: {
    name: "JNAFAU School of Planning & Arch (SF), Masab Tank", code: "JNPASF", website: "https://www.jnafau.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-40-23317006", email: "spa@jnafau.ac.in" },
    fees: { "CSE": "", "CSE (AI/ML)": "", "ECE": "", "EEE": "", "Other branches": "Architecture / Planning SF streams: ₹90,000 / year" }, highest: "₹10.0 LPA", average: "₹4.00 LPA",
  },
  JNPL: {
    name: "JNTUH Univ College of Engineering, Palair", code: "JNPL", website: "https://jntuhcep.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-40-23158661", email: "ucep@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹15.0 LPA", average: "₹4.00 LPA",
  },
  JNTH: {
    name: "JNTUH College of Engg Sci & Tech (Regular), Hyderabad", code: "JNTH", website: "https://jntuhcesth.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-40-23158661", email: "support.cest@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹51.5 LPA", average: "₹7.20 LPA",
  },
  JNTHMT: {
    name: "JNTUH CEST 5-Yr Integrated M.Tech (SF), Kukatpally", code: "JNTHMT", website: "https://jntuh.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-40-23158661", email: "admissions@jntuh.ac.in" },
    fees: { "CSE": "₹1,00,000 / year", "CSE (AI/ML)": "₹1,00,000 / year", "ECE": "₹1,00,000 / year", "EEE": "₹1,00,000 / year", "Other branches": "₹1,00,000 / year" }, highest: "₹44.0 LPA", average: "₹6.80 LPA",
  },
  JNTM: {
    name: "JNTUH Univ College of Engineering, Manthani", code: "JNTM", website: "https://jntuhcemn.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-8728-222222", email: "ucem@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹16.0 LPA", average: "₹4.10 LPA",
  },
  JNTR: {
    name: "JNTUH Univ College of Engineering, Rajanna Sircilla", code: "JNTR", website: "https://jntuhcers.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-40-23158661", email: "ucers@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹18.0 LPA", average: "₹4.20 LPA",
  },
  JNTS: {
    name: "JNTUH Univ College of Engineering (Regular), Sultanpur", code: "JNTS", website: "https://jntuhces.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-8450-230333", email: "ces@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹22.0 LPA", average: "₹4.50 LPA",
  },
  JNTSSF: {
    name: "JNTUH Univ College of Engineering (SF), Sultanpur", code: "JNTSSF", website: "https://jntuhces.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-8450-230333", email: "ces@jntuh.ac.in" },
    fees: { "CSE": "₹90,000 / year", "CSE (AI/ML)": "₹90,000 / year", "ECE": "₹90,000 / year", "EEE": "₹90,000 / year", "Other branches": "₹90,000 / year" }, highest: "₹22.0 LPA", average: "₹4.50 LPA",
  },
  JNWN: {
    name: "JNTUH Univ College of Engineering, Wanaparthy", code: "JNWN", website: "https://jntuhcew.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-40-23158661", email: "ucew@jntuh.ac.in" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" }, highest: "₹16.5 LPA", average: "₹4.15 LPA",
  },
  JOGI: {
    name: "Joginpally B R Engineering College, Yenkapally", code: "JOGI", website: "https://jbrec.edu.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9346003440", email: "principal@jbrec.edu.in" },
    fees: { "CSE": "₹80,000 / year", "CSE (AI/ML)": "₹80,000 / year", "ECE": "₹80,000 / year", "EEE": "₹80,000 / year", "Other branches": "₹80,000 / year" }, highest: "₹14.0 LPA", average: "₹3.80 LPA",
  },
  JPNE: {
    name: "Jaya Prakash Narayan College of Engineering, Mahabubnagar", code: "JPNE", website: "https://jpne.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9440813959", email: "principal@jpne.ac.in" },
    fees: { "CSE": "₹64,000 / year", "CSE (AI/ML)": "₹64,000 / year", "ECE": "₹64,000 / year", "EEE": "₹64,000 / year", "Other branches": "₹64,000 / year" }, highest: "₹12.0 LPA", average: "₹3.50 LPA",
  },
  JPNH: {
    name: "Jayaprakash Narayan Engineering College, Bandlaguda", code: "JPNH", website: "https://jpnh.edu.in/", guide: { name: "Office", branch: "", year: "", phone: "+91-9440473959", email: "jpnhhyd@gmail.com" },
    fees: { "CSE": "₹48,000 / year", "CSE (AI/ML)": "₹48,000 / year", "ECE": "₹48,000 / year", "EEE": "₹48,000 / year", "Other branches": "₹48,000 / year" }, highest: "₹9.0 LPA", average: "₹3.10 LPA",
  },
  KCEA: {
    name: "Kshatriya College of Engineering, Armoor", code: "KCEA", website: "https://kcea.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9493183577", email: "principal@kcea.ac.in" },
    fees: { "CSE": "₹55,000 / year", "CSE (AI/ML)": "₹55,000 / year", "ECE": "₹55,000 / year", "EEE": "₹55,000 / year", "Other branches": "₹55,000 / year" }, highest: "₹10.0 LPA", average: "₹3.30 LPA",
  },
  KDDW: {
    name: "Kodada Inst of Technology and Science for Women, Kodad", code: "KDDW", website: "https://kitsw.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9849310619", email: "principal.kitsw@gmail.com" },
    fees: { "CSE": "₹46,500 / year", "CSE (AI/ML)": "₹46,500 / year", "ECE": "₹46,500 / year", "EEE": "₹46,500 / year", "Other branches": "₹46,500 / year" }, highest: "₹8.0 LPA", average: "₹3.20 LPA",
  },
  KGRH: {
    name: "KG Reddy College of Engg and Technology, Moinabad", code: "KGRH", website: "https://kgr.ac.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-9000633008", email: "admissions@kgr.ac.in" },
    fees: { "CSE": "₹1,00,000 / year", "CSE (AI/ML)": "₹1,00,000 / year", "ECE": "₹1,00,000 / year", "EEE": "₹1,00,000 / year", "Other branches": "₹1,00,000 / year" }, highest: "₹22.0 LPA", average: "₹4.50 LPA",
  },
  KITS: {
    name: "Kakatiya Institute of Technology and Sci, Warangal", code: "KITS", website: "https://www.kitsw.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-7382564888", email: "principal@kitsw.ac.in" },
    fees: { "CSE": "₹1,25,000 / year", "CSE (AI/ML)": "₹1,25,000 / year", "ECE": "₹1,25,000 / year", "EEE": "₹1,25,000 / year", "Other branches": "₹1,25,000 / year" }, highest: "₹38.0 LPA", average: "₹5.40 LPA",
  },
  KITW: {
    name: "Kakatiya Inst of Technology Sci for Women, Nizamabad", code: "KITW", website: "https://kitswnzb.ac.in/", guide: { name: "College Office", branch: "", year: "", phone: "+91-9440026723", email: "kitswnzb@gmail.com" },
    fees: { "CSE": "₹48,000 / year", "CSE (AI/ML)": "₹48,000 / year", "ECE": "₹48,000 / year", "EEE": "₹48,000 / year", "Other branches": "₹48,000 / year" }, highest: "₹8.5 LPA", average: "₹3.15 LPA",
  },
  KLRT: {
    name: "KLR College of Engg and Technology, Paloncha", code: "KLRT", website: "https://klr.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9849187311", email: "principal.klrcet@gmail.com" },
    fees: { "CSE": "₹52,000 / year", "CSE (AI/ML)": "₹52,000 / year", "ECE": "₹52,000 / year", "EEE": "₹52,000 / year", "Other branches": "₹52,000 / year" }, highest: "₹9.5 LPA", average: "₹3.20 LPA",
  },
  KMCE: {
    name: "Keshav Memorial College of Engineering, Ibrahimpatnam", code: "KMCE", website: "https://kmce.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9396344555", email: "principal@kmce.in" },
    fees: { "CSE": "₹75,000 / year", "CSE (AI/ML)": "₹75,000 / year", "ECE": "₹75,000 / year", "EEE": "₹75,000 / year", "Other branches": "₹75,000 / year" }, highest: "₹18.0 LPA", average: "₹4.00 LPA",
  },
  KMEC: {
    name: "Keshav Memorial Engineering College, Gatkesar", code: "KMEC", website: "https://kmec.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9399912441", email: "principal@kmec.in" },
    fees: { "CSE": "₹85,000 / year", "CSE (AI/ML)": "₹85,000 / year", "ECE": "₹85,000 / year", "EEE": "₹85,000 / year", "Other branches": "₹85,000 / year" }, highest: "₹24.0 LPA", average: "₹4.20 LPA",
  },
  KMIT: {
    name: "Keshav Memorial Inst of Technology, Narayanaguda", code: "KMIT", website: "https://kmit.in/", guide: { name: "Admissions", branch: "", year: "", phone: "+91-40-23261407", email: "admissions@kmit.in" },
    fees: { "CSE": "₹1,15,000 / year", "CSE (AI/ML)": "₹1,15,000 / year", "ECE": "₹1,15,000 / year", "EEE": "₹1,15,000 / year", "Other branches": "₹1,15,000 / year" }, highest: "₹44.0 LPA", average: "₹6.10 LPA",
  },
  KNRR: {
    name: "Kasireddy Narayan Reddy Coll Engg Res, Hayathnagar", code: "KNRR", website: "https://knrrc.ac.in/", guide: { name: "Principal", branch: "", year: "", phone: "+91-9393808468", email: "principal@knrrc.ac.in" },
    fees: { "CSE": "₹63,000 / year", "CSE (AI/ML)": "₹63,000 / year", "ECE": "₹63,000 / year", "EEE": "₹63,000 / year", "Other branches": "₹63,000 / year" }, highest: "₹12.0 LPA", average: "₹3.40 LPA",
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
