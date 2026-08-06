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
  { label: "LEGACY", href: "/legacy" },
  { label: "FAQS", href: "/faqs" },
  { label: "CONTACT", href: "/contact" },
  { label: "APPLY", href: "/apply" },
];

const MAX_PRIMARY_NAV_ITEMS = 5;

/** Matches `h-30` — use as top padding on page content that should clear the header */
export const HEADER_OFFSET_CLASS = "pt-30";

/** Shared content rail — keep page sections aligned with the header */
export const CONTENT_RAIL_CLASS = "w-[95%] md:w-full max-w-6xl mx-auto";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface HeaderProps {
  navItems?: NavItem[];
}

export default function Header({
  navItems = DEFAULT_NAV_ITEMS,
}: HeaderProps) {
  const pathname = usePathname();
  const currentDirectoryItem = DIRECTORY_NAV_ITEMS.find((item) =>
    isNavActive(pathname, item.href)
  );

  // Keep up to 5 primary links, always including the page in view when known
  let primaryNavItems = navItems.slice(0, MAX_PRIMARY_NAV_ITEMS);
  if (
    currentDirectoryItem &&
    !primaryNavItems.some((item) => isNavActive(pathname, item.href))
  ) {
    primaryNavItems = [
      ...primaryNavItems.slice(0, Math.max(0, MAX_PRIMARY_NAV_ITEMS - 1)),
      currentDirectoryItem,
    ];
  }

  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPath, setDrawerPath] = useState(pathname);

  // Close the directory when the route changes (render-time sync, not an effect)
  if (pathname !== drawerPath) {
    setDrawerPath(pathname);
    if (isDrawerOpen) setIsDrawerOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full h-30 flex items-center justify-center transition-all duration-500 ${
          scrolled
            ? "bg-[#060506]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-[#060506]/40 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <div className={`${CONTENT_RAIL_CLASS} uppercase text-[13px] h-full flex items-center justify-between`}>
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
              const active = isNavActive(pathname, href);
              return (
                <Link
                  key={`${label}-${href}`}
                  href={href}
                  className={`tracking-[0.12em] lg:tracking-[0.16em] transition-colors duration-300 whitespace-nowrap shrink-0 ${
                    active
                      ? "text-gold underline underline-offset-8 decoration-1"
                      : "text-body-muted hover:text-gold"
                  }`}
                  style={{ fontSize: "clamp(9px, 0.85vw, 13px)" }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/apply"
              className={`border px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-[13px] hover:cursor-pointer transition-all duration-300 ${
                isNavActive(pathname, "/apply")
                  ? "border-gold text-gold"
                  : "border-gold-dark hover:text-gold"
              }`}
            >
              Apply to the Registry
            </Link>

            <button
              type="button"
              onClick={() => setIsDrawerOpen((prev) => !prev)}
              className="text-[#EDE8DE] hover:text-gold p-1.5 transition-colors"
              aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={isDrawerOpen}
              aria-controls="site-directory-drawer"
            >
              {isDrawerOpen ? (
                <svg
                  width="22"
                  height="22"
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
                  width="22"
                  height="22"
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

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden
      />

      {/* Right slide drawer (~30% desktop, usable width on mobile) */}
      <aside
        id="site-directory-drawer"
        className={`fixed top-0 right-0 z-50 h-full w-[min(22rem,85vw)] lg:w-[30vw] bg-[#080706] border-l border-gold/25 shadow-2xl transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isDrawerOpen}
      >
        <div className="h-30 flex items-center justify-between px-6 border-b border-gold/20">
          <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            className="text-[#EDE8DE] hover:text-gold p-1.5 transition-colors"
            aria-label="Close menu"
          >
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
          </button>
        </div>

        <nav className="h-[calc(100%-7.5rem)] overflow-y-auto py-4">
          {DIRECTORY_NAV_ITEMS.map(({ label, href }) => {
            const active = isNavActive(pathname, href);
            return (
              <Link
                key={`drawer-${label}-${href}`}
                href={href}
                onClick={() => setIsDrawerOpen(false)}
                className={`block px-6 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors ${
                  active
                    ? "text-gold bg-gold/10"
                    : "text-[#EDE8DE] hover:text-gold hover:bg-gold/8"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
