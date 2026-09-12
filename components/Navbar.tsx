import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar(){
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/90 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"><Link href="/" className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f4c542] font-black text-black">E</span><span className="text-lg font-black">EAMCET<span className="text-[#f4c542]">27</span></span></Link><div className="flex items-center gap-5"><nav className="hidden gap-7 text-sm text-zinc-400 md:flex"><Link href="/results" className="hover:text-white">Results</Link><Link href="/cutoffs" className="hover:text-white">Cutoffs</Link><Link href="/institute-profile" className="hover:text-white">Institute Profile</Link><Link href="/rank-predictor" className="hover:text-white">Rank Predictor</Link></nav><ThemeToggle /></div></div></header>
}
