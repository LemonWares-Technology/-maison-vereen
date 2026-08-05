"use client";
import { useEffect, useRef, useState } from "react";
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
  { label: "REGISTRY", href: "/the-first-250" },
];
const DIRECTORY_NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE EXPERIENCE", href: "/philosophy" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "THE FOUNDER", href: "/the-founder" },
  { label: "THE CRAFT", href: "/the-craft" },
  { label: "THE DIFFERENCE", href: "/the-difference" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "LIVE REGISTRY", href: "/the-first-250" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQS", href: "/faqs" },
  { label: "CONTACT", href: "/contact" },
  { label: "APPLY", href: "/apply" },
];
const MAX_PRIMARY_NAV_ITEMS = 5;
/** Matches `h-30` — use as top padding on page content that should clear the header */
export const HEADER_OFFSET_CLASS = "pt-30";
interface HeaderProps {
  navItems?: NavItem[];
}
export default function Header({
  navItems = DEFAULT_NAV_ITEMS,
}: HeaderProps) {
  const pathname = usePathname();
  const primaryNavItems = navItems.slice(0, MAX_PRIMARY_NAV_ITEMS);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopDirectoryOpen, setIsDesktopDirectoryOpen] = useState(false);
  const [isMobileDirectoryOpen, setIsMobileDirectoryOpen] = useState(false);
  const desktopDirectoryRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
    setIsDesktopDirectoryOpen(false);
    setIsMobileDirectoryOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isDesktopDirectoryOpen) return;
    const onMouseDown = (event: MouseEvent) => {
      if (!desktopDirectoryRef.current) return;
      if (!desktopDirectoryRef.current.contains(event.target as Node)) {
        setIsDesktopDirectoryOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isDesktopDirectoryOpen]);
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full h-30 flex items-center justify-center transition-all duration-500 ${scrolled
            ? "bg-[#060506]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-[#060506]/40 backdrop-blur-xl border-b border-transparent"
          }`}
      >
        <div className="w-[95%] md:w-full max-w-6xl uppercase text-[13px] h-full flex items-center justify-between mx-auto">
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
          <nav className="hidden md:flex items-center gap-x-3 lg:gap-x-4 min-w-0 flex-1 justify-center px-4">
            {primaryNavItems.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={`${label}-${href}`}
                  href={href}
                  className={`tracking-[0.12em] lg:tracking-[0.16em] transition-colors duration-300 whitespace-nowrap shrink-0 ${active
                      ? "text-gold underline underline-offset-8 decoration-1"
                      : "text-[#EDE8DE] hover:text-gold"
                    }`}
                  style={{ fontSize: "clamp(9px, 0.85vw, 13px)" }}
                >
                  {label}
                </Link>
              );
            })}
            <span className="h-4 w-px bg-gold/30 mx-1 shrink-0" aria-hidden />
            <div ref={desktopDirectoryRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsDesktopDirectoryOpen((prev) => !prev)}
                className={`inline-flex items-center gap-2 tracking-[0.15em] lg:tracking-[0.2em] transition-colors duration-300 whitespace-nowrap ${isDesktopDirectoryOpen ? "text-gold" : "text-[#EDE8DE] hover:text-gold"}`}
                style={{ fontSize: "clamp(9px, 0.85vw, 13px)" }}
                aria-haspopup="menu"
                aria-expanded={isDesktopDirectoryOpen}
              >
                ALL PAGES
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className={`transition-transform ${isDesktopDirectoryOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path d="M1 1l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72 border border-gold/30 bg-[#080706]/95 backdrop-blur-lg transition-all duration-200 ${isDesktopDirectoryOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
                role="menu"
                aria-label="All pages navigation"
              >
                <div className="py-2">
                  {DIRECTORY_NAV_ITEMS.map(({ label, href }) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={`directory-${label}-${href}`}
                        href={href}
                        onClick={() => setIsDesktopDirectoryOpen(false)}
                        className={`block px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-colors ${active ? "text-gold bg-gold/10" : "text-[#EDE8DE] hover:text-gold hover:bg-gold/8"}`}
                        role="menuitem"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
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
        className={`fixed inset-0 z-40 bg-[#060506]/95 backdrop-blur-xl flex flex-col transition-all duration-500 md:hidden ${isOpen
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
                  className={`font-serif text-xl sm:text-2xl tracking-[0.25em] uppercase transition-colors ${active
                      ? "text-gold underline underline-offset-8"
                      : "text-[#EDE8DE] hover:text-gold"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="w-full max-w-sm space-y-3">
              <button
                type="button"
                onClick={() => setIsMobileDirectoryOpen((prev) => !prev)}
                className="w-full inline-flex items-center justify-center gap-3 border border-gold/45 bg-[#0A0908]/80 px-4 py-3 text-[11px] tracking-[0.24em] text-gold uppercase"
                aria-expanded={isMobileDirectoryOpen}
                aria-controls="mobile-directory-list"
              >
                All Pages
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className={`transition-transform ${isMobileDirectoryOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path d="M1 1l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                id="mobile-directory-list"
                className={`border border-gold/25 bg-[#080706]/90 transition-all duration-200 ${isMobileDirectoryOpen ? "opacity-100 max-h-[60vh] overflow-y-auto" : "opacity-0 max-h-0 overflow-hidden"}`}
              >
                {DIRECTORY_NAV_ITEMS.map(({ label, href }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={`mobile-directory-${label}-${href}`}
                      href={href}
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileDirectoryOpen(false);
                      }}
                      className={`block text-center px-4 py-3 text-xs tracking-[0.2em] uppercase transition-colors ${active ? "text-gold bg-gold/10" : "text-[#EDE8DE] hover:text-gold hover:bg-gold/8"}`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
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
