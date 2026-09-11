import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EAMCET 2027 — Telangana College Finder",
  description: "Explore Telangana engineering college cutoffs using historical TG EAPCET data."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="noise antialiased"><Navbar />{children}</body></html>;
}
