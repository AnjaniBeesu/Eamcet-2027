import type { Category, College, Cutoff } from "@/lib/types";

const empty = (): Cutoff => ({ OC:{boys:null,girls:null}, BC_A:{boys:null,girls:null}, BC_B:{boys:null,girls:null}, BC_C:{boys:null,girls:null}, BC_D:{boys:null,girls:null}, BC_E:{boys:null,girls:null}, SC_I:{boys:null,girls:null}, SC_II:{boys:null,girls:null}, SC_III:{boys:null,girls:null}, ST:{boys:null,girls:null}, EWS:{boys:null,girls:null} });
function cutoff(ocb:number, ocg:number, baB:number|null=null, baG:number|null=null, bbB:number|null=null, bbG:number|null=null, scB:number|null=null, scG:number|null=null, stB:number|null=null, stG:number|null=null): Cutoff { const x=empty(); x.OC={boys:ocb,girls:ocg}; x.BC_A={boys:baB,girls:baG}; x.BC_B={boys:bbB,girls:bbG}; x.SC_I={boys:scB,girls:scG}; x.ST={boys:stB,girls:stG}; return x; }
export const categories: Category[] = ["OC","BC_A","BC_B","BC_C","BC_D","BC_E","SC_I","SC_II","SC_III","ST","EWS"];

// Verified examples from TGEAPCET 2025 Final Phase Last Rank Statement.
// The production dataset should be expanded from the complete official statement before claiming full coverage.
export const colleges: College[] = [
 {code:"ACEG",name:"A C E Engineering College",place:"Ghatkesar",district:"MDL",type:"PVT",affiliatedTo:"JNTUH",featured:true,courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(23801,23801,55224,56944,null,null,72680,86482,88483,109873)},
  {code:"CSD",name:"Computer Science and Engineering (Data Science)",cutoff:cutoff(28542,28542,57913,57913,null,null,85096,91408,98897,125380)},
  {code:"INF",name:"Information Technology",cutoff:cutoff(9612,26317,64728,64728,null,null,99925,99925,113107,144859)}]},
 {code:"CBIT",name:"Chaitanya Bharathi Institute of Technology",place:"Gandipet",district:"HYD",type:"PVT",affiliatedTo:"Osmania University",featured:true,courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(2053,2471,4164,5517,2053,2495,14488,14488,13835,16351)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(4205,5696,10457,13458,6198,7273,26741,26741,19160,26024)},
  {code:"EEE",name:"Electrical and Electronics Engineering",cutoff:cutoff(9478,11576,33155,33155,15905,21890,64383,64383,29568,31077)}]},
 {code:"VJEC",name:"VNR VJIET",place:"Bachupally",district:"MDL",type:"PVT",affiliatedTo:"JNTUH",featured:true,courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(1652,1933,2901,3726,2043,2043,21970,21970,13232,16529)},
  {code:"CSM",name:"Computer Science and Engineering (AI/ML)",cutoff:cutoff(2269,2269,4292,5747,2540,2764,16892,16892,14422,16711)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(4619,4619,10913,13344,6200,6945,4619,50975,25792,25792)}]},
 {code:"GRRR",name:"Gokaraju Rangaraju Institute of Engineering and Technology",place:"Bachupally",district:"MDL",type:"PVT",affiliatedTo:"JNTUH",featured:true,courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(4184,4546,10617,13568,5637,6475,26116,77425,21808,29640)},
  {code:"CSM",name:"Computer Science and Engineering (AI/ML)",cutoff:cutoff(4664,4860,11928,12857,6176,7252,26968,68758,21394,30042)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(6378,8022,14017,16340,9006,9231,6378,8022,28952,44858)}]},
 {code:"CVR",name:"CVR College of Engineering",place:"Ibrahimpatnam",district:"RR",type:"PVT",affiliatedTo:"JNTUH",featured:true,courses:[
  {code:"CSM",name:"Computer Science and Engineering (AI/ML)",cutoff:cutoff(6781,7444,19952,20554,9084,10755,37804,60836,34513,34513)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(8680,8680,24271,25414,13341,17083,55889,55889,40935,58559)}]},
 {code:"VASV",name:"Vasavi College of Engineering",place:"Ibrahimbagh",district:"HYD",type:"PVT",affiliatedTo:"Osmania University",featured:true,courses:[
  {code:"EEE",name:"Electrical and Electronics Engineering",cutoff:cutoff(12157,16617,40381,52672,16452,21231,12157,16617,34356,46094)},
  {code:"INF",name:"Information Technology",cutoff:cutoff(4287,5243,13777,13777,5609,6766,44072,78220,25648,36129)}]},
 {code:"BVRI",name:"BV Raju Institute of Technology",place:"Narsapur",district:"MDL",type:"PVT",affiliatedTo:"JNTUH",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(7680,8643,20999,23263,10258,11688,66885,124172,43384,55287)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(12707,12707,28120,28813,17265,17339,103898,140425,55564,61939)}]},
 {code:"MVSR",name:"Maturi Venkata Subba Rao Engineering College",place:"Nadergul",district:"RR",type:"PVT",affiliatedTo:"Osmania University",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(9118,10539,23355,27718,15320,15877,35036,35036,42782,42782)},
  {code:"CSI",name:"Computer Science and Information Technology",cutoff:cutoff(11508,12478,32825,32825,17137,18819,11508,12478,45652,51134)},
  {code:"CSM",name:"Computer Science and Engineering (AI/ML)",cutoff:cutoff(9940,9940,23465,28674,11818,14349,9940,66242,36627,47505)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(15640,17674,43457,43457,25904,27104,142304,142304,71288,72793)}]},
 {code:"KMIT",name:"Keshav Memorial Institute of Technology",place:"Narayanguda",district:"HYD",type:"PVT",affiliatedTo:"JNTUH",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(4692,5521,13636,13999,7036,8136,30226,50878,28734,39466)},
  {code:"CSM",name:"Computer Science and Engineering (AI/ML)",cutoff:cutoff(16449,16449,33146,36674,24804,24804,16449,16449,103697,142167)}]},
 {code:"GNIT",name:"Guru Nanak Institutions Technical Campus",place:"Ibrahimpatnam",district:"RR",type:"PVT",affiliatedTo:"JNTUH",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(16561,16561,41429,47701,28763,29725,89203,89203,57076,70214)},
  {code:"CSC",name:"Computer Science and Engineering (Cyber Security)",cutoff:cutoff(20875,23766,53702,53964,33202,33202,111749,111749,66115,95668)},
  {code:"INF",name:"Information Technology",cutoff:cutoff(22389,22389,57808,59800,40425,40425,22389,133951,71081,128487)}]},
 {code:"MRTN",name:"St Martins Engineering College",place:"Dhulapally",district:"MDL",type:"PVT",affiliatedTo:"JNTUH",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(29363,29363,69101,84705,102035,102035,108756,133611,34158,34158)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(48088,51180,95220,109323,135869,139435,140587,149466,56900,59794)}]},
 {code:"ANUG",name:"Anurag University",place:"Ghatkesar",district:"MDL",type:"PVT",affiliatedTo:"Anurag University",featured:true,courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(11593,12045,25594,25689,33660,37388,36869,40697,12643,12647)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(18658,19424,45062,45062,74089,76172,62340,76426,21282,21587)},
  {code:"INF",name:"Information Technology",cutoff:cutoff(16615,16615,37562,40923,59530,70063,58664,64074,16972,16972)}]},
 {code:"SRHP",name:"SR University",place:"Hasanparthy",district:"HNK",type:"PVT",affiliatedTo:"SR University",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(18129,20946,48083,48083,54321,54321,56839,56839,23412,30711)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(29700,32955,71897,72249,82576,96896,85571,107063,45674,45674)}]},
 {code:"SPEC",name:"St Peters Engineering College",place:"Medchal",district:"MDL",type:"PVT",affiliatedTo:"JNTUH",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(43052,43052,86908,102395,129235,129235,86137,89341,51220,51220)},
  {code:"CSC",name:"CSE (Cyber Security)",cutoff:cutoff(46949,46949,87938,98025,76911,136812,46949,46949,54627,54627)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(56094,56094,110360,110360,140053,147074,56094,113074,61918,61918)}]},
 {code:"SNTI",name:"Scient Institute of Technology",place:"Ibrahimpatnam",district:"RR",type:"PVT",affiliatedTo:"JNTUH",courses:[
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(62816,62816,138704,138704,135395,135395,150327,150327,113277,113277)}]},
 {code:"JNTSSF",name:"JNTUH University College of Engineering Sultanpur — Self Finance",place:"Sultanpur",district:"SRD",type:"UNIV",affiliatedTo:"JNTUH",featured:true,courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(22833,22833,61853,61853,65878,65878,37480,55509,40773,46548)}]},
 {code:"JNWN",name:"JNTUH University College of Engineering Wanaparthy",place:"Narsingayapally Village",district:"WNP",type:"UNIV",affiliatedTo:"JNTUH",courses:[
  {code:"CSE",name:"Computer Science and Engineering",cutoff:cutoff(51734,78779,82830,82830,51734,134318,132203,132203,134733,134733)},
  {code:"ECE",name:"Electronics and Communication Engineering",cutoff:cutoff(101759,101759,132458,132458,150725,150725,144863,144863,101759,101759)}]}
];
