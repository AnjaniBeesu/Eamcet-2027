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
    KPRC: {
    name: "KPRIT College of Engineering",
    code: "KPRC",
    website: "https://kprit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8978692777", email: "info@kprit.ac.in" },
    fees: { "CSE": "₹90,000 / year", "CSE (AI/ML)": "₹90,000 / year", "ECE": "₹90,000 / year", "EEE": "₹90,000 / year", "Other branches": "₹90,000 / year" },
    highest: "₹18.0 LPA", average: "₹4.00 LPA",
  },

  KPRT: {
    name: "Kommuri Pratap Reddy Institute of Technology",
    code: "KPRT",
    website: "https://kpritech.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9542083666", email: "admissions@kpritech.ac.in" },
    fees: { "CSE": "₹85,000 / year", "CSE (AI/ML)": "₹85,000 / year", "ECE": "₹85,000 / year", "EEE": "₹85,000 / year", "Other branches": "₹85,000 / year" },
    highest: "₹16.5 LPA", average: "₹3.90 LPA",
  },

  KSGI: {
    name: "Government Engineering College, Kosgi",
    code: "KSGI",
    website: "https://dte.telangana.gov.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-23221511", email: "geckosgi@gmail.com" },
    fees: { "CSE": "₹15,000–₹18,000 / year", "CSE (AI/ML)": "₹15,000–₹18,000 / year", "ECE": "₹15,000–₹18,000 / year", "EEE": "₹15,000–₹18,000 / year", "Other branches": "₹15,000–₹18,000 / year" },
    highest: "₹6.0 LPA", average: "₹3.00 LPA",
  },

  KTKM: {
    name: "Kamala Institute of Technology & Science",
    code: "KTKM",
    website: "https://kitshzb.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8727-252744", email: "kitshzb@gmail.com" },
    fees: { "CSE": "₹95,000 / year", "CSE (AI/ML)": "₹95,000 / year", "ECE": "₹95,000 / year", "EEE": "₹95,000 / year", "Other branches": "₹95,000 / year" },
    highest: "₹15.0 LPA", average: "₹4.20 LPA",
  },

  KUEWSF: {
    name: "University College of Engineering & Technology for Women, KU",
    code: "KUEWSF",
    website: "https://kakatiya.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-870-2439366", email: "ucetwku@gmail.com" },
    fees: { "CSE": "₹70,000 / year", "CSE (AI/ML)": "₹70,000 / year", "ECE": "₹70,000 / year", "EEE": "₹70,000 / year", "Other branches": "₹70,000 / year" },
    highest: "₹12.0 LPA", average: "₹3.80 LPA",
  },

  KUWL: {
    name: "KU College of Engineering and Technology",
    code: "KUWL",
    website: "https://kucek.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-870-2454548", email: "principal_kuce@yahoo.com" },
    fees: { "CSE": "₹35,000–₹50,000 / year", "CSE (AI/ML)": "₹35,000–₹50,000 / year", "ECE": "₹35,000–₹50,000 / year", "EEE": "₹35,000–₹50,000 / year", "Other branches": "₹35,000–₹50,000 / year" },
    highest: "₹16.0 LPA", average: "₹4.50 LPA",
  },

  LRDS: {
    name: "Lords Institute of Engineering and Technology",
    code: "LRDS",
    website: "https://lords.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9440954581", email: "admissions@lords.ac.in" },
    fees: { "CSE": "₹95,000 / year", "CSE (AI/ML)": "₹95,000 / year", "ECE": "₹95,000 / year", "EEE": "₹95,000 / year", "Other branches": "₹95,000 / year" },
    highest: "₹24.0 LPA", average: "₹4.30 LPA",
  },

  MDRK: {
    name: "Madhira Institute of Technology and Science",
    code: "MDRK",
    website: "https://mitskodad.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848562325", email: "mits_kodad@yahoo.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹7.0 LPA", average: "₹2.80 LPA",
  },

  METH: {
    name: "Methodist College of Engineering & Technology",
    code: "METH",
    website: "https://methodist.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-24755999", email: "principal@methodist.edu.in" },
    fees: { "CSE": "₹90,000 / year", "CSE (AI/ML)": "₹90,000 / year", "ECE": "₹90,000 / year", "EEE": "₹90,000 / year", "Other branches": "₹90,000 / year" },
    highest: "₹18.0 LPA", average: "₹4.10 LPA",
  },

  MGHA: {
    name: "Megha Institute of Engineering & Technology for Women",
    code: "MGHA",
    website: "https://meghaengg.co.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848604313", email: "mietw.principal@gmail.com" },
    fees: { "CSE": "₹48,000 / year", "CSE (AI/ML)": "₹48,000 / year", "ECE": "₹48,000 / year", "EEE": "₹48,000 / year", "Other branches": "₹48,000 / year" },
    highest: "₹8.5 LPA", average: "₹3.10 LPA",
  },

  MGIT: {
    name: "Mahatma Gandhi Institute of Technology",
    code: "MGIT",
    website: "https://mgit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8466997001", email: "admissions@mgit.ac.in" },
    fees: { "CSE": "₹1,60,000 / year", "CSE (AI/ML)": "₹1,60,000 / year", "ECE": "₹1,60,000 / year", "EEE": "₹1,60,000 / year", "Other branches": "₹1,60,000 / year" },
    highest: "₹45.0 LPA", average: "₹5.80 LPA",
  },

  MGUNSF: {
    name: "MGU College of Engineering & Technology",
    code: "MGUNSF",
    website: "https://mguniversity.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8682-221999", email: "mgucetnlga@gmail.com" },
    fees: { "CSE": "₹65,000 / year", "CSE (AI/ML)": "₹65,000 / year", "ECE": "₹65,000 / year", "EEE": "₹65,000 / year", "Other branches": "₹65,000 / year" },
    highest: "₹10.0 LPA", average: "₹3.60 LPA",
  },

  MHVR: {
    name: "Mahaveer Institute of Science & Technology",
    code: "MHVR",
    website: "https://mist.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8413-202244", email: "principal.mahaveer@gmail.com" },
    fees: { "CSE": "₹75,000 / year", "CSE (AI/ML)": "₹75,000 / year", "ECE": "₹75,000 / year", "EEE": "₹75,000 / year", "Other branches": "₹75,000 / year" },
    highest: "₹14.0 LPA", average: "₹3.50 LPA",
  },

  MINA: {
    name: "Mina Institute of Engineering & Technology for Women",
    code: "MINA",
    website: "https://minawomenengg.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849552199", email: "mina.miryalaguda@gmail.com" },
    fees: { "CSE": "₹42,000 / year", "CSE (AI/ML)": "₹42,000 / year", "ECE": "₹42,000 / year", "EEE": "₹42,000 / year", "Other branches": "₹42,000 / year" },
    highest: "₹6.5 LPA", average: "₹2.75 LPA",
  },

  MJCT: {
    name: "M J College of Engineering & Technology",
    code: "MJCT",
    website: "https://mjcollege.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-23350356", email: "principal@mjcollege.ac.in" },
    fees: { "CSE": "₹1,20,000 / year", "CSE (AI/ML)": "₹1,20,000 / year", "ECE": "₹1,20,000 / year", "EEE": "₹1,20,000 / year", "Other branches": "₹1,20,000 / year" },
    highest: "₹36.0 LPA", average: "₹5.20 LPA",
  },

  MLID: {
    name: "M L R Institute of Technology",
    code: "MLID",
    website: "https://mlrit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9652222122", email: "admissions@mlrinstitutions.ac.in" },
    fees: { "CSE": "₹1,15,000 / year", "CSE (AI/ML)": "₹1,15,000 / year", "ECE": "₹1,15,000 / year", "EEE": "₹1,15,000 / year", "Other branches": "₹1,15,000 / year" },
    highest: "₹42.0 LPA", average: "₹5.25 LPA",
  },

  MLRD: {
    name: "Malla Reddy College of Engineering and Technology",
    code: "MLRD",
    website: "https://cmrcet.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9246394322", email: "mrcet2004@gmail.com" },
    fees: { "CSE": "₹1,05,000 / year", "CSE (AI/ML)": "₹1,05,000 / year", "ECE": "₹1,05,000 / year", "EEE": "₹1,05,000 / year", "Other branches": "₹1,05,000 / year" },
    highest: "₹38.0 LPA", average: "₹4.95 LPA",
  },

  MLRS: {
    name: "Marri Laxman Reddy Institute of Technology & Management",
    code: "MLRS",
    website: "https://mlritm.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9160400039", email: "infomlritm@gmail.com" },
    fees: { "CSE": "₹1,00,000 / year", "CSE (AI/ML)": "₹1,00,000 / year", "ECE": "₹1,00,000 / year", "EEE": "₹1,00,000 / year", "Other branches": "₹1,00,000 / year" },
    highest: "₹35.0 LPA", average: "₹4.75 LPA",
  },

  MMTZ: {
    name: "Mumtaz College of Engineering Technology",
    code: "MMTZ",
    website: "https://mumtazcolleges.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-24520023", email: "mcet_hyd@yahoo.com" },
    fees: { "CSE": "₹46,000 / year", "CSE (AI/ML)": "₹46,000 / year", "ECE": "₹46,000 / year", "EEE": "₹46,000 / year", "Other branches": "₹46,000 / year" },
    highest: "₹8.0 LPA", average: "₹3.00 LPA",
  },

  MOTK: {
    name: "Mother Teresa Institute of Science & Technology",
    code: "MOTK",
    website: "https://mistedu.org/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849504624", email: "info@mistedu.org" },
    fees: { "CSE": "₹60,000 / year", "CSE (AI/ML)": "₹60,000 / year", "ECE": "₹60,000 / year", "EEE": "₹60,000 / year", "Other branches": "₹60,000 / year" },
    highest: "₹11.5 LPA", average: "₹3.40 LPA",
  },

  MRCE: {
    name: "Malla Reddy College of Engineering",
    code: "MRCE",
    website: "https://mrce.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9348161125", email: "principal@mrce.in" },
    fees: { "CSE": "₹85,000 / year", "CSE (AI/ML)": "₹85,000 / year", "ECE": "₹85,000 / year", "EEE": "₹85,000 / year", "Other branches": "₹85,000 / year" },
    highest: "₹24.0 LPA", average: "₹4.10 LPA",
  },

  MRCW: {
    name: "Malla Reddy Engineering College for Women",
    code: "MRCW",
    website: "https://mallareddyecw.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9346118803", email: "adminmrecw@gmail.com" },
    fees: { "CSE": "₹90,000 / year", "CSE (AI/ML)": "₹90,000 / year", "ECE": "₹90,000 / year", "EEE": "₹90,000 / year", "Other branches": "₹90,000 / year" },
    highest: "₹32.0 LPA", average: "₹4.80 LPA",
  },

  MREM: {
    name: "Malla Reddy Engineering College & Management Sciences",
    code: "MREM",
    website: "https://mrem.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9346162620", email: "principal@mrem.ac.in" },
    fees: { "CSE": "₹80,000 / year", "CSE (AI/ML)": "₹80,000 / year", "ECE": "₹80,000 / year", "EEE": "₹80,000 / year", "Other branches": "₹80,000 / year" },
    highest: "₹21.0 LPA", average: "₹4.00 LPA",
  },

  MRTN: {
    name: "St Martins Engineering College",
    code: "MRTN",
    website: "https://smec.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8008333876", email: "admissions@smec.ac.in" },
    fees: { "CSE": "₹1,00,000 / year", "CSE (AI/ML)": "₹1,00,000 / year", "ECE": "₹1,00,000 / year", "EEE": "₹1,00,000 / year", "Other branches": "₹1,00,000 / year" },
    highest: "₹38.0 LPA", average: "₹4.90 LPA",
  },

  MTEC: {
    name: "Mother Theresa College of Engineering & Technology",
    code: "MTEC",
    website: "https://mtcet.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849354095", email: "mtcet.pdpl@gmail.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹7.5 LPA", average: "₹3.00 LPA",
  },

  MVSR: {
    name: "M V S R Engineering College",
    code: "MVSR",
    website: "https://mvsrec.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9441113035", email: "principal@mvsrec.edu.in" },
    fees: { "CSE": "₹1,30,000 / year", "CSE (AI/ML)": "₹1,30,000 / year", "ECE": "₹1,30,000 / year", "EEE": "₹1,30,000 / year", "Other branches": "₹1,30,000 / year" },
    highest: "₹42.0 LPA", average: "₹5.60 LPA",
  },
    NAWB: {
    name: "Nawab Shah Alam Khan College of Engineering & Technology",
    code: "NAWB",
    website: "https://nsakcet.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-24561136", email: "principal@nsakcet.ac.in" },
    fees: { "CSE": "₹72,000 / year", "CSE (AI/ML)": "₹72,000 / year", "ECE": "₹72,000 / year", "EEE": "₹72,000 / year", "Other branches": "₹72,000 / year" },
    highest: "₹14.5 LPA", average: "₹3.65 LPA",
  },

  NGIT: {
    name: "Neil Gogte Institute of Technology",
    code: "NGIT",
    website: "https://ngit.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9396956100", email: "principal@ngit.edu.in" },
    fees: { "CSE": "₹95,000 / year", "CSE (AI/ML)": "₹95,000 / year", "ECE": "₹95,000 / year", "EEE": "₹95,000 / year", "Other branches": "₹95,000 / year" },
    highest: "₹28.0 LPA", average: "₹4.50 LPA",
  },

  NNRG: {
    name: "Nalla Narasimha Reddy Educational Society Group",
    code: "NNRG",
    website: "https://nnrg.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9885294441", email: "admin@nnrg.edu.in" },
    fees: { "CSE": "₹88,000 / year", "CSE (AI/ML)": "₹88,000 / year", "ECE": "₹88,000 / year", "EEE": "₹88,000 / year", "Other branches": "₹88,000 / year" },
    highest: "₹18.0 LPA", average: "₹3.95 LPA",
  },

  NRCM: {
    name: "Narsimha Reddy Engineering College",
    code: "NRCM",
    website: "https://nrcmec.org/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9963574441", email: "principal@nrcmec.org" },
    fees: { "CSE": "₹80,000 / year", "CSE (AI/ML)": "₹80,000 / year", "ECE": "₹80,000 / year", "EEE": "₹80,000 / year", "Other branches": "₹80,000 / year" },
    highest: "₹16.0 LPA", average: "₹3.85 LPA",
  },

  NREC: {
    name: "Nallamalla Reddy Engineering College",
    code: "NREC",
    website: "https://nmrec.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9000213123", email: "info@nmrec.edu.in" },
    fees: { "CSE": "₹85,000 / year", "CSE (AI/ML)": "₹85,000 / year", "ECE": "₹85,000 / year", "EEE": "₹85,000 / year", "Other branches": "₹85,000 / year" },
    highest: "₹17.5 LPA", average: "₹3.90 LPA",
  },

  OUCE: {
    name: "O U College of Engineering (Regular)",
    code: "OUCE",
    website: "https://uceou.edu/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-27098254", email: "principal.uce@osmania.ac.in" },
    fees: { "CSE": "₹35,000–₹50,000 / year", "CSE (AI/ML)": "₹35,000–₹50,000 / year", "ECE": "₹35,000–₹50,000 / year", "EEE": "₹35,000–₹50,000 / year", "Other branches": "₹35,000–₹50,000 / year" },
    highest: "₹50.0 LPA", average: "₹7.50 LPA",
  },

  OUCT: {
    name: "O U College of Technology",
    code: "OUCT",
    website: "https://ouct.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-27098472", email: "principal@ouct.ac.in" },
    fees: { "CSE": "₹35,000–₹45,000 / year", "CSE (AI/ML)": "₹35,000–₹45,000 / year", "ECE": "₹35,000–₹45,000 / year", "EEE": "₹35,000–₹45,000 / year", "Other branches": "₹35,000–₹45,000 / year" },
    highest: "₹22.0 LPA", average: "₹5.40 LPA",
  },

  PALV: {
    name: "Pallavi Engineering College",
    code: "PALV",
    website: "https://pallavienggcollege.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9246111166", email: "principal@pec.ac.in" },
    fees: { "CSE": "₹60,000 / year", "CSE (AI/ML)": "₹60,000 / year", "ECE": "₹60,000 / year", "EEE": "₹60,000 / year", "Other branches": "₹60,000 / year" },
    highest: "₹12.0 LPA", average: "₹3.40 LPA",
  },

  PETW: {
    name: "Princeton Institute of Engineering Technology for Women",
    code: "PETW",
    website: "https://petw.co.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9246200259", email: "princeton.women@gmail.com" },
    fees: { "CSE": "₹47,000 / year", "CSE (AI/ML)": "₹47,000 / year", "ECE": "₹47,000 / year", "EEE": "₹47,000 / year", "Other branches": "₹47,000 / year" },
    highest: "₹9.0 LPA", average: "₹3.15 LPA",
  },

  PRIW: {
    name: "Priyadarshini Institute of Science & Technology for Women",
    code: "PRIW",
    website: "https://priyadarshiniengg.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849202511", email: "priw_khammam@gmail.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹8.0 LPA", average: "₹3.10 LPA",
  },

  PUCE: {
    name: "University College of Engineering, Palamuru University",
    code: "PUCE",
    website: "https://palamuruuniversity.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8542-277114", email: "puce.pu@gmail.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹11.0 LPA", average: "₹3.80 LPA",
  },

  RITW: {
    name: "Rishi MS Institute of Engineering and Technology for Women",
    code: "RITW",
    website: "https://rishims.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-23851575", email: "principal@rishims.com" },
    fees: { "CSE": "₹65,000 / year", "CSE (AI/ML)": "₹65,000 / year", "ECE": "₹65,000 / year", "EEE": "₹65,000 / year", "Other branches": "₹65,000 / year" },
    highest: "₹14.0 LPA", average: "₹3.70 LPA",
  },

  SAGR: {
    name: "Sagar Group of Institutions",
    code: "SAGR",
    website: "https://sagar.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849646543", email: "sgi.chevella@gmail.com" },
    fees: { "CSE": "₹40,000 / year", "CSE (AI/ML)": "₹40,000 / year", "ECE": "₹40,000 / year", "EEE": "₹40,000 / year", "Other branches": "₹40,000 / year" },
    highest: "₹6.5 LPA", average: "₹2.80 LPA",
  },

  SAIS: {
    name: "Sai Spurthi Institute of Technology",
    code: "SAIS",
    website: "https://saispurthi.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849495112", email: "ssit.principal@gmail.com" },
    fees: { "CSE": "₹55,000 / year", "CSE (AI/ML)": "₹55,000 / year", "ECE": "₹55,000 / year", "EEE": "₹55,000 / year", "Other branches": "₹55,000 / year" },
    highest: "₹10.5 LPA", average: "₹3.40 LPA",
  },

  SANA: {
    name: "Sana Engineering College",
    code: "SANA",
    website: "https://sana.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849924513", email: "sanaprincipal@gmail.com" },
    fees: { "CSE": "₹43,000 / year", "CSE (AI/ML)": "₹43,000 / year", "ECE": "₹43,000 / year", "EEE": "₹43,000 / year", "Other branches": "₹43,000 / year" },
    highest: "₹7.5 LPA", average: "₹2.90 LPA",
  },

  SBIT: {
    name: "Swarna Bharathi Institute of Science & Technology",
    code: "SBIT",
    website: "https://sbit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849516055", email: "sbitkhammam@gmail.com" },
    fees: { "CSE": "₹70,000 / year", "CSE (AI/ML)": "₹70,000 / year", "ECE": "₹70,000 / year", "EEE": "₹70,000 / year", "Other branches": "₹70,000 / year" },
    highest: "₹15.0 LPA", average: "₹3.75 LPA",
  },

  SCET: {
    name: "Shadan College of Engineering and Technology",
    code: "SCET",
    website: "https://shadan.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848135811", email: "scet_shadan@yahoo.co.in" },
    fees: { "CSE": "₹78,000 / year", "CSE (AI/ML)": "₹78,000 / year", "ECE": "₹78,000 / year", "EEE": "₹78,000 / year", "Other branches": "₹78,000 / year" },
    highest: "₹16.0 LPA", average: "₹3.60 LPA",
  },

  SCIT: {
    name: "Sri Chaitanya Institute of Technology & Research",
    code: "SCIT",
    website: "https://scitr.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9866124511", email: "scitrkhammam@gmail.com" },
    fees: { "CSE": "₹42,000 / year", "CSE (AI/ML)": "₹42,000 / year", "ECE": "₹42,000 / year", "EEE": "₹42,000 / year", "Other branches": "₹42,000 / year" },
    highest: "₹8.0 LPA", average: "₹3.00 LPA",
  },

  SDES: {
    name: "Sree Dattha Institute of Engineering & Science",
    code: "SDES",
    website: "https://sreedattha.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8414-202206", email: "admissions@sreedattha.ac.in" },
    fees: { "CSE": "₹85,000 / year", "CSE (AI/ML)": "₹85,000 / year", "ECE": "₹85,000 / year", "EEE": "₹85,000 / year", "Other branches": "₹85,000 / year" },
    highest: "₹18.0 LPA", average: "₹3.90 LPA",
  },

  SDEW: {
    name: "Sridevi Womens Engineering College",
    code: "SDEW",
    website: "https://srideviengg.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-23145455", email: "principal@srideviengg.com" },
    fees: { "CSE": "₹95,000 / year", "CSE (AI/ML)": "₹95,000 / year", "ECE": "₹95,000 / year", "EEE": "₹95,000 / year", "Other branches": "₹95,000 / year" },
    highest: "₹24.0 LPA", average: "₹4.25 LPA",
  },

  SDGI: {
    name: "Sree Dattha Group of Institutions",
    code: "SDGI",
    website: "https://sreedattha.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8414-202206", email: "admissions@sreedattha.ac.in" },
    fees: { "CSE": "₹75,000 / year", "CSE (AI/ML)": "₹75,000 / year", "ECE": "₹75,000 / year", "EEE": "₹75,000 / year", "Other branches": "₹75,000 / year" },
    highest: "₹15.5 LPA", average: "₹3.80 LPA",
  },

  SIEI: {
    name: "Siddhartha Institute of Engineering & Technology",
    code: "SIEI",
    website: "https://siddharthahyd.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9441911441", email: "principal@siddharthahyd.ac.in" },
    fees: { "CSE": "₹75,000 / year", "CSE (AI/ML)": "₹75,000 / year", "ECE": "₹75,000 / year", "EEE": "₹75,000 / year", "Other branches": "₹75,000 / year" },
    highest: "₹14.0 LPA", average: "₹3.75 LPA",
  },

  SISG: {
    name: "Siddhartha Institute of Technology & Sciences",
    code: "SISG",
    website: "https://siddharthasg.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9441911551", email: "info@siddharthasg.ac.in" },
    fees: { "CSE": "₹68,000 / year", "CSE (AI/ML)": "₹68,000 / year", "ECE": "₹68,000 / year", "EEE": "₹68,000 / year", "Other branches": "₹68,000 / year" },
    highest: "₹12.5 LPA", average: "₹3.50 LPA",
  },

  SMED: {
    name: "St Marys Group of Institutions",
    code: "SMED",
    website: "https://stmarysgroup.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9666660144", email: "admissions@stmarysgroup.com" },
    fees: { "CSE": "₹55,000 / year", "CSE (AI/ML)": "₹55,000 / year", "ECE": "₹55,000 / year", "EEE": "₹55,000 / year", "Other branches": "₹55,000 / year" },
    highest: "₹11.0 LPA", average: "₹3.40 LPA",
  },

  SMSK: {
    name: "Samskruthi College of Engineering & Technology",
    code: "SMSK",
    website: "https://samskruthi.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9396872493", email: "principal.engineering@samskruthi.ac.in" },
    fees: { "CSE": "₹68,000 / year", "CSE (AI/ML)": "₹68,000 / year", "ECE": "₹68,000 / year", "EEE": "₹68,000 / year", "Other branches": "₹68,000 / year" },
    highest: "₹14.0 LPA", average: "₹3.60 LPA",
  },

  SNIS: {
    name: "Srinidhi Institute of Science & Technology",
    code: "SNIS",
    website: "https://sreenidhi.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9642666662", email: "admissions@sreenidhi.edu.in" },
    fees: { "CSE": "₹1,37,000 / year", "CSE (AI/ML)": "₹1,37,000 / year", "ECE": "₹1,37,000 / year", "EEE": "₹1,37,000 / year", "Other branches": "₹1,37,000 / year" },
    highest: "₹52.0 LPA", average: "₹6.10 LPA",
  },

  SNTI: {
    name: "Scient Institute of Technology",
    code: "SNTI",
    website: "https://scient.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9866114441", email: "principal@scient.ac.in" },
    fees: { "CSE": "₹68,000 / year", "CSE (AI/ML)": "₹68,000 / year", "ECE": "₹68,000 / year", "EEE": "₹68,000 / year", "Other branches": "₹68,000 / year" },
    highest: "₹12.0 LPA", average: "₹3.55 LPA",
  },

  SPEC: {
    name: "St Peters Engineering College",
    code: "SPEC",
    website: "https://stpetershyd.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9030044743", email: "admissions@stpetershyd.com" },
    fees: { "CSE": "₹85,000 / year", "CSE (AI/ML)": "₹85,000 / year", "ECE": "₹85,000 / year", "EEE": "₹85,000 / year", "Other branches": "₹85,000 / year" },
    highest: "₹16.0 LPA", average: "₹3.85 LPA",
  },

  SPHN: {
    name: "Sphoorthy Engineering College",
    code: "SPHN",
    website: "https://sphoorthyengg.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9963111841", email: "info@sphoorthyengg.ac.in" },
    fees: { "CSE": "₹95,000 / year", "CSE (AI/ML)": "₹95,000 / year", "ECE": "₹95,000 / year", "EEE": "₹95,000 / year", "Other branches": "₹95,000 / year" },
    highest: "₹30.0 LPA", average: "₹4.40 LPA",
  },

  SRHP: {
    name: "SR University (SR Engineering College)",
    code: "SRHP",
    website: "https://sru.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849623441", email: "admissions@sru.edu.in" },
    fees: { "CSE": "₹1,40,000–₹1,65,000 / year", "CSE (AI/ML)": "₹1,40,000–₹1,65,000 / year", "ECE": "₹90,000–₹1,10,000 / year", "EEE": "₹90,000–₹1,10,000 / year", "Other branches": "₹90,000–₹1,10,000 / year" },
    highest: "₹34.4 LPA", average: "₹5.20 LPA",
  },

  SRIW: {
    name: "Sumathi Reddy Institute of Technology for Women",
    code: "SRIW",
    website: "https://sritw.org/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849623442", email: "principal@sritw.org" },
    fees: { "CSE": "₹75,000 / year", "CSE (AI/ML)": "₹75,000 / year", "ECE": "₹75,000 / year", "EEE": "₹75,000 / year", "Other branches": "₹75,000 / year" },
    highest: "₹16.0 LPA", average: "₹4.00 LPA",
  },

  SRYS: {
    name: "Sreyas Institute of Engineering and Technology",
    code: "SRYS",
    website: "https://sreyas.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9959655755", email: "info@sreyas.ac.in" },
    fees: { "CSE": "₹1,00,000 / year", "CSE (AI/ML)": "₹1,00,000 / year", "ECE": "₹1,00,000 / year", "EEE": "₹1,00,000 / year", "Other branches": "₹1,00,000 / year" },
    highest: "₹24.0 LPA", average: "₹4.50 LPA",
  },

  STLW: {
    name: "Stanley College of Engineering and Technology for Women",
    code: "STLW",
    website: "https://stanley.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-23234892", email: "admissions@stanley.edu.in" },
    fees: { "CSE": "₹1,05,000 / year", "CSE (AI/ML)": "₹1,05,000 / year", "ECE": "₹1,05,000 / year", "EEE": "₹1,05,000 / year", "Other branches": "₹1,05,000 / year" },
    highest: "₹31.5 LPA", average: "₹4.80 LPA",
  },

  SUCE: {
    name: "University College of Engineering, Satavahana University",
    code: "SUCE",
    website: "https://satavahana.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8721-255552", email: "satavahanauce@gmail.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹10.0 LPA", average: "₹3.50 LPA",
  },

  SVES: {
    name: "Sri Venkateswara Engineering College",
    code: "SVES",
    website: "https://sves.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848386341", email: "sves_srp@yahoo.co.in" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹7.5 LPA", average: "₹3.00 LPA",
  },

  SVIT: {
    name: "Swami Vivekananda Institute of Technology",
    code: "SVIT",
    website: "https://svit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-27712256", email: "principal@svit.ac.in" },
    fees: { "CSE": "₹75,000 / year", "CSE (AI/ML)": "₹75,000 / year", "ECE": "₹75,000 / year", "EEE": "₹75,000 / year", "Other branches": "₹75,000 / year" },
    highest: "₹14.0 LPA", average: "₹3.75 LPA",
  },

  SVSE: {
    name: "SVS Institute of Technology",
    code: "SVSE",
    website: "https://svsit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849156322", email: "principal@svsit.ac.in" },
    fees: { "CSE": "₹65,000 / year", "CSE (AI/ML)": "₹65,000 / year", "ECE": "₹65,000 / year", "EEE": "₹65,000 / year", "Other branches": "₹65,000 / year" },
    highest: "₹11.0 LPA", average: "₹3.40 LPA",
  },

  SWET: {
    name: "Shadan Womens College of Engineering & Technology",
    code: "SWET",
    website: "https://swcet.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848135812", email: "swcet_shadan@yahoo.co.in" },
    fees: { "CSE": "₹72,000 / year", "CSE (AI/ML)": "₹72,000 / year", "ECE": "₹72,000 / year", "EEE": "₹72,000 / year", "Other branches": "₹72,000 / year" },
    highest: "₹12.5 LPA", average: "₹3.60 LPA",
  },

  TCEK: {
    name: "Trinity College of Engineering & Technology, Peddapally",
    code: "TCEK",
    website: "https://trinitywgl.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849354091", email: "trinity.pdpl@gmail.com" },
    fees: { "CSE": "₹43,000 / year", "CSE (AI/ML)": "₹43,000 / year", "ECE": "₹43,000 / year", "EEE": "₹43,000 / year", "Other branches": "₹43,000 / year" },
    highest: "₹7.0 LPA", average: "₹2.90 LPA",
  },

  TCTK: {
    name: "Trinity College of Engineering & Technology, Karimnagar",
    code: "TCTK",
    website: "https://trinityengg.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849202512", email: "trinitykmr@gmail.com" },
    fees: { "CSE": "₹55,000 / year", "CSE (AI/ML)": "₹55,000 / year", "ECE": "₹55,000 / year", "EEE": "₹55,000 / year", "Other branches": "₹55,000 / year" },
    highest: "₹9.5 LPA", average: "₹3.20 LPA",
  },

  TKEM: {
    name: "Teegala Krishna Reddy Engineering College",
    code: "TKEM",
    website: "https://tkrec.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8498060010", email: "info@tkrec.ac.in" },
    fees: { "CSE": "₹85,000 / year", "CSE (AI/ML)": "₹85,000 / year", "ECE": "₹85,000 / year", "EEE": "₹85,000 / year", "Other branches": "₹85,000 / year" },
    highest: "₹21.0 LPA", average: "₹4.10 LPA",
  },

  TKRC: {
    name: "T K R College of Engineering and Technology",
    code: "TKRC",
    website: "https://tkrcet.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8498060001", email: "info@tkrcet.ac.in" },
    fees: { "CSE": "₹90,000 / year", "CSE (AI/ML)": "₹90,000 / year", "ECE": "₹90,000 / year", "EEE": "₹90,000 / year", "Other branches": "₹90,000 / year" },
    highest: "₹24.0 LPA", average: "₹4.30 LPA",
  },

  TPCE: {
    name: "Talla Padmavathi College of Engineering",
    code: "TPCE",
    website: "https://tallapadmavathi.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849495115", email: "tpce.wgl@gmail.com" },
    fees: { "CSE": "₹68,000 / year", "CSE (AI/ML)": "₹68,000 / year", "ECE": "₹68,000 / year", "EEE": "₹68,000 / year", "Other branches": "₹68,000 / year" },
    highest: "₹12.0 LPA", average: "₹3.50 LPA",
  },

  TRRM: {
    name: "TRR College of Technology",
    code: "TRRM",
    website: "https://trrgroup.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848562341", email: "trrct@yahoo.com" },
    fees: { "CSE": "₹40,000 / year", "CSE (AI/ML)": "₹40,000 / year", "ECE": "₹40,000 / year", "EEE": "₹40,000 / year", "Other branches": "₹40,000 / year" },
    highest: "₹6.5 LPA", average: "₹2.80 LPA",
  },

  TUCE: {
    name: "University College of Engineering, Telangana University",
    code: "TUCE",
    website: "https://telanganauniversity.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-8461-222220", email: "tuce.nzb@gmail.com" },
    fees: { "CSE": "₹45,000 / year", "CSE (AI/ML)": "₹45,000 / year", "ECE": "₹45,000 / year", "EEE": "₹45,000 / year", "Other branches": "₹45,000 / year" },
    highest: "₹11.5 LPA", average: "₹3.80 LPA",
  },

  VAGE: {
    name: "Vaagdevi College of Engineering",
    code: "VAGE",
    website: "https://vaagdevi.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849746969", email: "admissions@vaagdevi.edu.in" },
    fees: { "CSE": "₹1,05,000 / year", "CSE (AI/ML)": "₹1,05,000 / year", "ECE": "₹1,05,000 / year", "EEE": "₹1,05,000 / year", "Other branches": "₹1,05,000 / year" },
    highest: "₹28.0 LPA", average: "₹4.85 LPA",
  },

  VASV: {
    name: "Vasavi College of Engineering",
    code: "VASV",
    website: "https://vce.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-23146003", email: "admissions@vce.ac.in" },
    fees: { "CSE": "₹1,40,000–₹1,60,000 / year", "CSE (AI/ML)": "₹1,40,000–₹1,60,000 / year", "ECE": "₹1,40,000–₹1,60,000 / year", "EEE": "₹1,40,000–₹1,60,000 / year", "Other branches": "₹1,40,000–₹1,60,000 / year" },
    highest: "₹51.0 LPA", average: "₹7.10 LPA",
  },

  VBIT: {
    name: "Vignan Bharati Institute of Technology",
    code: "VBIT",
    website: "https://vbit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9652903842", email: "info@vbit.ac.in" },
    fees: { "CSE": "₹1,00,000 / year", "CSE (AI/ML)": "₹1,00,000 / year", "ECE": "₹1,00,000 / year", "EEE": "₹1,00,000 / year", "Other branches": "₹1,00,000 / year" },
    highest: "₹29.0 LPA", average: "₹4.60 LPA",
  },

  VCET: {
    name: "Visweswaraya College of Engineering & Technology",
    code: "VCET",
    website: "https://vcethyd.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9246112233", email: "vcet.principal@gmail.com" },
    fees: { "CSE": "₹55,000 / year", "CSE (AI/ML)": "₹55,000 / year", "ECE": "₹55,000 / year", "EEE": "₹55,000 / year", "Other branches": "₹55,000 / year" },
    highest: "₹9.0 LPA", average: "₹3.15 LPA",
  },

  VGNT: {
    name: "Vignan Institute of Technology and Science",
    code: "VGNT",
    website: "https://vignanits.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9866399664", email: "vignanits.admissions@gmail.com" },
    fees: { "CSE": "₹1,05,000 / year", "CSE (AI/ML)": "₹1,05,000 / year", "ECE": "₹1,05,000 / year", "EEE": "₹1,05,000 / year", "Other branches": "₹1,05,000 / year" },
    highest: "₹36.5 LPA", average: "₹4.90 LPA",
  },

  VGSE: {
    name: "Vaageshwari College of Engineering",
    code: "VGSE",
    website: "https://vhca.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9502588612", email: "principal.vaageshwari@gmail.com" },
    fees: { "CSE": "₹73,000 / year", "CSE (AI/ML)": "₹73,000 / year", "ECE": "₹73,000 / year", "EEE": "₹73,000 / year", "Other branches": "₹73,000 / year" },
    highest: "₹14.0 LPA", average: "₹3.65 LPA",
  },

  VGWL: {
    name: "Vagdevi Engineering College",
    code: "VGWL",
    website: "https://vaagdevi.edu.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849746969", email: "admissions@vaagdevi.edu.in" },
    fees: { "CSE": "₹70,000 / year", "CSE (AI/ML)": "₹70,000 / year", "ECE": "₹70,000 / year", "EEE": "₹70,000 / year", "Other branches": "₹70,000 / year" },
    highest: "₹15.0 LPA", average: "₹3.90 LPA",
  },

  VISA: {
    name: "Vathsalya Institute of Science & Technology",
    code: "VISA",
    website: "https://vathsalya.com/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848523451", email: "vist.bhongir@gmail.com" },
    fees: { "CSE": "₹43,000 / year", "CSE (AI/ML)": "₹43,000 / year", "ECE": "₹43,000 / year", "EEE": "₹43,000 / year", "Other branches": "₹43,000 / year" },
    highest: "₹7.0 LPA", average: "₹2.85 LPA",
  },

  VITS: {
    name: "Sri Vishweswaraya Institute of Technology & Science",
    code: "VITS",
    website: "https://svits.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848831441", email: "svits.mbnr@gmail.com" },
    fees: { "CSE": "₹52,000 / year", "CSE (AI/ML)": "₹52,000 / year", "ECE": "₹52,000 / year", "EEE": "₹52,000 / year", "Other branches": "₹52,000 / year" },
    highest: "₹9.0 LPA", average: "₹3.10 LPA",
  },

  VJEC: {
    name: "VNR Vignana Jyothi Institute of Engineering & Technology",
    code: "VJEC",
    website: "https://vnrvjiet.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-23042758", email: "admissions@vnrvjiet.in" },
    fees: { "CSE": "₹1,35,000–₹1,51,000 / year", "CSE (AI/ML)": "₹1,35,000–₹1,51,000 / year", "ECE": "₹1,35,000–₹1,51,000 / year", "EEE": "₹1,35,000–₹1,51,000 / year", "Other branches": "₹1,35,000–₹1,51,000 / year" },
    highest: "₹52.0 LPA", average: "₹6.40 LPA",
  },

  VJIT: {
    name: "Vidya Jyothi Institute of Technology",
    code: "VJIT",
    website: "https://vjit.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849014441", email: "admissions@vjit.ac.in" },
    fees: { "CSE": "₹1,15,000 / year", "CSE (AI/ML)": "₹1,15,000 / year", "ECE": "₹1,15,000 / year", "EEE": "₹1,15,000 / year", "Other branches": "₹1,15,000 / year" },
    highest: "₹33.0 LPA", average: "₹4.80 LPA",
  },

  VMEG: {
    name: "Vardhaman College of Engineering",
    code: "VMEG",
    website: "https://vardhaman.org/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9989961244", email: "admissions@vardhaman.org" },
    fees: { "CSE": "₹1,25,000–₹1,40,000 / year", "CSE (AI/ML)": "₹1,25,000–₹1,40,000 / year", "ECE": "₹1,25,000–₹1,40,000 / year", "EEE": "₹1,25,000–₹1,40,000 / year", "Other branches": "₹1,25,000–₹1,40,000 / year" },
    highest: "₹45.0 LPA", average: "₹5.90 LPA",
  },

  VMTW: {
    name: "Vignan's Institute of Management & Technology for Women",
    code: "VMTW",
    website: "https://vmtw.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9652903843", email: "info@vmtw.in" },
    fees: { "CSE": "₹80,000 / year", "CSE (AI/ML)": "₹80,000 / year", "ECE": "₹80,000 / year", "EEE": "₹80,000 / year", "Other branches": "₹80,000 / year" },
    highest: "₹18.0 LPA", average: "₹4.00 LPA",
  },

  VREC: {
    name: "Vijaya Rural Engineering College",
    code: "VREC",
    website: "https://vrecnzb.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9440026711", email: "vreczb@gmail.com" },
    fees: { "CSE": "₹50,000 / year", "CSE (AI/ML)": "₹50,000 / year", "ECE": "₹50,000 / year", "EEE": "₹50,000 / year", "Other branches": "₹50,000 / year" },
    highest: "₹8.5 LPA", average: "₹3.10 LPA",
  },

  VRKW: {
    name: "Dr VRK Womens College of Engineering & Technology",
    code: "VRKW",
    website: "https://drvrkwomens.church/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9848314441", email: "drvrkengg@gmail.com" },
    fees: { "CSE": "₹48,000 / year", "CSE (AI/ML)": "₹48,000 / year", "ECE": "₹48,000 / year", "EEE": "₹48,000 / year", "Other branches": "₹48,000 / year" },
    highest: "₹7.5 LPA", average: "₹2.90 LPA",
  },

  WESL: {
    name: "CSI Wesley Institute of Technology and Sciences",
    code: "WESL",
    website: "https://wesleyengg.ac.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-40-27812341", email: "csiwesleyengg@gmail.com" },
    fees: { "CSE": "₹55,000 / year", "CSE (AI/ML)": "₹55,000 / year", "ECE": "₹55,000 / year", "EEE": "₹55,000 / year", "Other branches": "₹55,000 / year" },
    highest: "₹9.0 LPA", average: "₹3.30 LPA",
  },

  WITS: {
    name: "Warangal Institute of Technology Science",
    code: "WITS",
    website: "https://witswgl.in/",
    guide: { name: "Admission Office", branch: "", year: "", phone: "+91-9849245115", email: "witswgl@gmail.com" },
    fees: { "CSE": "₹46,000 / year", "CSE (AI/ML)": "₹46,000 / year", "ECE": "₹46,000 / year", "EEE": "₹46,000 / year", "Other branches": "₹46,000 / year" },
    highest: "₹8.0 LPA", average: "₹3.00 LPA",
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
