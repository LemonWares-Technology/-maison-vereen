"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DEFAULT_NAV_ITEMS,
  type NavItem,
} from "./Header";

interface FooterProps {
  navItems?: NavItem[];
}

export default function Footer({ navItems = DEFAULT_NAV_ITEMS }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050405] border-t border-gold/20 py-12 md:py-14">
      <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <Link href="/" className="shrink-0 leading-none">
            <Image
              src="/logo-mark.webp"
              alt="Maison Vereen"
              width={110}
              height={90}
              className="block h-14 sm:h-16 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7">
            {navItems.map(({ label, href }) => (
              <Link
                key={`${label}-${href}`}
                href={href}
                className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold/90 hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://instagram.com/maisonvereen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://x.com/maisonvereen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="w-9 h-9 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.849L2.25 2.25h6.908l4.259 5.66 4.827-5.66zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#EDE8DE]/55">
            Extrait de Parfum
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-[9px] uppercase tracking-[0.22em] text-[#EDE8DE]/55">
            <span>© {year} Maison Vereen. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-gold transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
