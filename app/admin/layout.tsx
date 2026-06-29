import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin — Maison Vereen",
  description: "Maison Vereen administration portal",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full h-full bg-[#080808] text-[#E8E2D9] antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
