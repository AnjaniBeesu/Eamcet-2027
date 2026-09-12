import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EAMCET 2027 — Telangana College Finder",
  description: "Explore Telangana engineering college cutoffs using historical TG EAPCET data."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise antialiased">
        <Navbar />
        {children}
        <footer className="border-t border-white/8 bg-[#070707]">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <img src="https://eamcet-website.vercel.app/favicon.svg" alt="TS EAMCET Logo" className="h-9 w-9" />
                  <div>
                    <p className="font-black tracking-tight">TS EAMCET 2025</p>
                    <p className="text-xs text-zinc-600">College &amp; Results Finder</p>
                  </div>
                </div>
                <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
                  © 2027 TS EAMCET Results Finder. Built with modern web technologies and optimized for performance.
                </p>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">📞 Contact Us</p>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  For information, mistakes, copyright issues, or feedback, please contact us on Reddit.
                </p>
                <a href="https://www.reddit.com/u/Ok-Delivery-7437" target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold text-white transition hover:text-[#f4c542]">
                  u/Ok-Delivery-7437
                </a>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-[#f4c542]">📋 Data Ownership &amp; Copyright</p>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  We are <strong className="text-zinc-300">NOT</strong> the owners of this data. All data rights, ownership, and copyright belong exclusively to the relevant Telangana government and educational authorities.
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold">
                  <a href="https://tgeapcet.nic.in/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-[#f4c542]">TSCHE</a>
                  <a href="https://tgeapcet.nic.in/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-[#f4c542]">TS EAMCET Official Website</a>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-[#f4c542]/15 bg-[#f4c542]/[.04] p-5 text-sm leading-6 text-zinc-400">
              <p className="font-black text-[#f4c542]">⚠️ Independent platform disclaimer</p>
              <p className="mt-1">
                This website is an independent platform that aggregates and presents publicly available data for educational purposes only. For official, complete, and legally binding information, always refer to the <a href="https://tgeapcet.nic.in/" target="_blank" rel="noreferrer" className="font-bold text-white underline decoration-[#f4c542] underline-offset-4">official TS EAMCET website</a>.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
