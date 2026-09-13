import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarMenu } from "@/components/SidebarMenu";

export function Navbar(){
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f4c542] font-black text-black">E</span>
          <span className="text-lg font-black">EAMCET<span className="text-[#f4c542]">27</span></span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-zinc-400 xl:flex">
          <Link href="/results" className="hover:text-white">Results</Link>
          <Link href="/cutoffs" className="hover:text-white">Cutoffs</Link>
          <Link href="/institute-profile" className="hover:text-white">Institute Profile</Link>
          <Link href="/rank-predictor" className="hover:text-white">Rank Predictor</Link>
          <Link href="/college-ranking" className="hover:text-white">College Ranking</Link>
          <Link href="/placement-ranking" className="hover:text-white">Placements</Link>
          <Link href="/hostel-availability" className="hover:text-white">Hostel</Link>
          <Link href="/size-accreditation" className="hover:text-white">Campus &amp; Accreditation</Link>
        </nav>

        <div className="ml-3 flex shrink-0 items-center gap-2 sm:ml-4 sm:gap-3">
          <div className="xl:hidden">
            <SidebarMenu />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
