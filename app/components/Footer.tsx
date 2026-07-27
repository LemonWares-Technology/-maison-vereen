"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE EXPERIENCE", href: "/philosophy" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050405] border-t border-white/5 py-12 md:py-16">
      <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">

          {/* Left: Brand Monogram & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-8 h-8 border border-gold/50 bg-[#0A0908] flex items-center justify-center group-hover:border-gold transition-colors">
              <span className="font-serif text-gold text-sm font-semibold italic">M</span>
            </div>
            <div>
              <span className="font-serif text-sm tracking-[0.25em] text-[#EDE8DE] uppercase block font-light">
                MAISON VEREEN
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#7A7068] block">
                EXTRAIT DE PARFUM
              </span>
            </div>
          </Link>

          {/* Center: Footer Navigation */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7A7068] hover:text-[#EDE8DE] transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-right">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5A5248]">
              © {year} MAISON VEREEN. ALL RIGHTS RESERVED.
            </span>
          </div>

        </div>

        {/* Bottom Legal Links Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#4A4238]">
            AFRICA&apos;S FIRST SERIOUS LUXURY FRAGRANCE HOUSE
          </span>

          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#5A5248]">
            <a href="#" className="hover:text-gold transition-colors">
              PRIVACY
            </a>
            <span className="text-[#3A3228]">|</span>
            <a href="#" className="hover:text-gold transition-colors">
              TERMS
            </a>
            <span className="text-[#3A3228]">|</span>
            <a href="#" className="hover:text-gold transition-colors">
              COOKIES
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}