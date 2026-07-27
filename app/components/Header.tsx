"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenApply?: () => void;
}

const NAV_ITEMS = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE EXPERIENCE", href: "/philosophy" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
];

export default function Header({ onOpenApply }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleApplyClick = (e: React.MouseEvent) => {
    if (onOpenApply) {
      e.preventDefault();
      onOpenApply();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
          ? "bg-[#060506]/95 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-white/5 py-6 md:py-7"
          }`}
      >
        <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">

          {/* Logo Brand: Monogram M + MAISON VEREEN */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-gold/60 flex items-center justify-center bg-[#0F0E0D] group-hover:border-gold transition-colors">
              <span className="font-serif text-gold text-xs font-semibold leading-none">M</span>
            </div>
            <span className="font-serif text-sm md:text-base tracking-[0.25em] text-[#EDE8DE] uppercase group-hover:text-gold transition-colors font-light">
              Maison Vereen
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-[10px] tracking-[0.28em] uppercase transition-colors duration-300 font-medium ${active ? "text-gold" : "text-[#8A8178] hover:text-[#EDE8DE]"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/access"
              onClick={handleApplyClick}
              className="border border-[#7A7068]/40 hover:border-gold hover:text-gold text-[#EDE8DE] px-4 py-2 sm:px-5 sm:py-2.5 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-300 bg-[#060506]/50"
            >
              Apply to the Registry
            </Link>

            {/* Hamburger / Menu toggle button */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-[#8A8178] hover:text-[#EDE8DE] p-1.5 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="flex flex-col gap-1 items-end w-5 group">
                  <span className="w-5 h-[1.5px] bg-[#EDE8DE] group-hover:bg-gold transition-colors" />
                  <span className="w-3.5 h-[1.5px] bg-[#EDE8DE] group-hover:bg-gold transition-colors" />
                  <span className="w-5 h-[1.5px] bg-[#EDE8DE] group-hover:bg-gold transition-colors" />
                </div>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Full-screen overlay menu — works on ALL screen sizes */}
      <div
        className={`fixed inset-0 z-40 bg-[#060506] flex flex-col transition-all duration-500 ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Close button top-right */}
        <div className="max-w-350 w-full mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between py-6 md:py-7">
          {/* Logo repeated inside overlay */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-gold/60 flex items-center justify-center bg-[#0F0E0D]">
              <span className="font-serif text-gold text-xs font-semibold leading-none">M</span>
            </div>
            <span className="font-serif text-sm md:text-base tracking-[0.25em] text-[#EDE8DE] uppercase font-light">
              Maison Vereen
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="text-[#8A8178] hover:text-[#EDE8DE] p-1.5 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 space-y-8">
          <nav className="flex flex-col items-center gap-6 text-center">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-[#EDE8DE] hover:text-gold uppercase transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="w-12 h-px bg-gold/30 my-4" />

          <Link
            href="/access"
            onClick={(e) => {
              setIsOpen(false);
              handleApplyClick(e);
            }}
            className="border border-gold bg-gold/10 text-gold px-8 py-3.5 text-xs tracking-[0.28em] uppercase font-medium hover:bg-gold/20 transition-colors"
          >
            Apply to the Registry
          </Link>
        </div>
      </div>
    </>
  );
}