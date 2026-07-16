"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// 404 — Not Found
// Matches the site's dark luxury design system

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#060506] text-[#E8E2D9] flex flex-col">

      {/* ── HEADER — logo only ── */}
      <header className="w-full border-b border-white/5 bg-black/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 h-[100px] md:h-[125px] flex items-center justify-between">
          <Link href="/" className="group shrink-0" aria-label="Maison Vereen — Home">
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={280}
              height={96}
              className="h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 md:hidden"
              priority
            />
            <Image
              src="/logo.png"
              alt="Maison Vereen"
              width={320}
              height={110}
              className="h-[110px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-4 h-px bg-gold/30" />
            <span className="uppercase tracking-[0.3em] text-[#5A5449] font-medium" style={{ fontSize: "9px" }}>
              Edition I · 250 Bottles
            </span>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-14">
        <div className="max-w-[640px] w-full text-center space-y-10 py-24">

          {/* Gold rule */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/25" />
            <span className="uppercase tracking-[0.4em] text-[#5A5449] font-medium" style={{ fontSize: "9px" }}>
              404
            </span>
            <div className="w-12 h-px bg-gold/25" />
          </div>

          {/* Headline */}
          <div className="space-y-5">
            <h1
              className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              This page does not{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                exist.
              </em>
            </h1>
            <p
              className="font-serif font-light text-[#7A7068]"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
            >
              The address you followed has either moved or was never here. The House, however, is.
            </p>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-gold/20 mx-auto" />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-block bg-gold/90 hover:bg-gold px-8 py-3.5 text-charcoal transition-all duration-500"
              style={{ fontSize: "11px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-semibold">Return to the House</span>
            </Link>
            <button
              onClick={() => router.back()}
              className="inline-block border border-white/15 hover:border-gold/50 px-8 py-3.5 text-[#8A8178] hover:text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "11px", letterSpacing: "0.28em" }}
            >
              <span className="uppercase font-medium">Go Back</span>
            </button>
          </div>

          {/* Secondary nav suggestions */}
          <div className="space-y-3">
            <p className="uppercase tracking-[0.3em] text-[#3A3530] font-medium" style={{ fontSize: "9px" }}>
              Or explore the House
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { label: "Discover Maison Vereen", href: "/our-story" },
                { label: "Edition I", href: "/edition-i" },
                { label: "Founding Registry", href: "/registry" },
                { label: "Apply for Access", href: "/access" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#5A5449] hover:text-gold/70 transition-colors font-light"
                  style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* ── FOOTER STRIP ── */}
      <footer className="border-t border-white/5 bg-[#040404]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="uppercase tracking-[0.25em] text-[#2A2520] font-medium" style={{ fontSize: "9px" }}>
            Maison Vereen · Edition I · Lagos
          </span>
          <span className="uppercase tracking-[0.15em] text-[#1A1A18] font-light" style={{ fontSize: "9px" }}>
            © 2025 Maison Vereen
          </span>
        </div>
      </footer>

    </div>
  );
}
