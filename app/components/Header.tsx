"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export type NavItem = {
  label: string;
  href: string;
};
export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE EXPERIENCE", href: "/philosophy" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
];
/** Matches `h-30` — use as top padding on page content that should clear the header */
export const HEADER_OFFSET_CLASS = "pt-30";
interface HeaderProps {
  navItems?: NavItem[];
}
export default function Header({
  navItems = DEFAULT_NAV_ITEMS,
}: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full h-30 flex items-center justify-center transition-all duration-500 ${
          scrolled
            ? "bg-[#060506]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-[#060506]/40 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <div className="w-[95%] md:w-full max-w-7xl uppercase text-[13px] h-full flex items-center justify-between mx-auto">
          <Link href="/" className="shrink-0 leading-none">
            <Image
              src="/logo-mark.webp"
              alt="Maison Vereen"
              width={110}
              height={90}
              priority
              className="block h-14 sm:h-16 md:h-18 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={`${label}-${href}`}
                  href={href}
                  className={`tracking-[0.2em] transition-colors duration-300 ${
                    active
                      ? "text-gold underline underline-offset-8 decoration-1"
                      : "text-[#EDE8DE] hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/apply"
              className="border border-gold-dark px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-[13px] hover:text-gold hover:cursor-pointer transition-all duration-300"
            >
              Apply to the Registry
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden text-[#EDE8DE] hover:text-gold p-1.5 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M2 5h16M5.5 10H18M2 15h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile overlay — same navItems as the desktop header */}
      <div
        className={`fixed inset-0 z-40 bg-[#060506]/95 backdrop-blur-xl flex flex-col transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-30 shrink-0" aria-hidden />
        <div className="flex-1 flex flex-col justify-center items-center w-[95%] mx-auto px-2 space-y-8">
          <nav className="flex flex-col items-center gap-6 text-center">
            {navItems.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={`${label}-${href}`}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-xl sm:text-2xl tracking-[0.25em] uppercase transition-colors ${
                    active
                      ? "text-gold underline underline-offset-8"
                      : "text-[#EDE8DE] hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="w-12 h-px bg-gold/30" />
          <Link
            href="/apply"
            onClick={() => setIsOpen(false)}
            className="border border-gold bg-gold/10 text-gold px-8 py-3.5 text-xs tracking-[0.28em] uppercase font-medium hover:bg-gold/20 transition-colors"
          >
            Apply to the Registry
          </Link>
        </div>
      </div>
    </>
  );
}
