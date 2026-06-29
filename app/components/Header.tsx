"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// ─────────────────────────────────────────────
//  NAV LINKS
// ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: "The House",           href: "/the-house"       },
  { label: "Edition I",           href: "/edition-i"       },
  { label: "Signature Collection", href: "/fragrance-library" },
  { label: "The HouseBook",       href: "/housebook"       },
];

// ─────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────
export default function Header() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener — adds background after 30 px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  // Header background logic:
  // - Scrolled anywhere        → dark bg
  // - On home, not scrolled   → transparent
  // - On inner page, not scrolled → dark bg
  const headerBg =
    scrolled || !isHome
      ? "bg-black/95 backdrop-blur-md border-b border-white/6"
      : "bg-transparent";

  return (
    <>
      {/* ════════════════════════════════════════
          HEADER BAR
      ════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${headerBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 h-[100px] flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="shrink-0 group" aria-label="Maison Vereen — Home">
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={240}
              height={80}
              className="h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-10"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs tracking-[0.28em] uppercase font-medium transition-colors duration-300 ${
                    active
                      ? "text-gold"
                      : "text-[#9A9189] hover:text-[#E8E2D9]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT: CTA + MOBILE TOGGLE ── */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Desktop CTA */}
            <Link
              href="/access"
              className="hidden md:block border border-gold/50 hover:border-gold hover:bg-gold/10 px-6 py-2.5 text-xs tracking-[0.28em] uppercase font-medium text-[#E8E2D9] transition-all duration-500"
            >
              Apply for Access
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden text-[#9A9189] hover:text-[#E8E2D9] transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* ════════════════════════════════════════
          MOBILE FULL-SCREEN DRAWER
      ════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-8 text-[#9A9189] hover:text-[#E8E2D9] transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="absolute top-6 left-8">
          <Image
            src="/logo.png"
            alt="Maison Vereen"
            width={160}
            height={54}
            className="h-10 w-auto object-contain opacity-90"
          />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl font-light tracking-widest text-[#E8E2D9] hover:text-gold transition-colors duration-300"
            >
              {label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/access"
            onClick={() => setIsOpen(false)}
            className="mt-4 border border-gold/50 px-8 py-3 text-xs tracking-[0.28em] uppercase font-medium text-[#E8E2D9] hover:bg-gold/10 transition-all duration-300"
          >
            Apply for Access
          </Link>
        </nav>
      </div>
    </>
  );
}