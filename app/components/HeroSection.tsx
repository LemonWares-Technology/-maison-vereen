"use client";

import Link from "next/link";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      width="28"
      height="10"
      viewBox="0 0 28 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M0 5h26M21 1l5 4-5 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroCopy() {
  return (
    <div className="w-full max-w-lg lg:max-w-xl space-y-5 md:space-y-8">
      <h1
        className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
        style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.5rem)" }}
      >
        The room knows
        <br />
        before you speak.
      </h1>

      <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold font-medium leading-relaxed max-w-md">
        Edition I. Two Hundred and Fifty Individually Numbered Bottles.
      </p>

      <p className="font-serif text-base sm:text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] max-w-md">
        Africa&apos;s first serious luxury fragrance house, now privately
        accepting applications into the Maison Vereen Founding Registry.
      </p>

      <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center pt-1">
        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
        >
          Apply to the Registry
          <ArrowIcon />
        </Link>
        <Link
          href="/edition-i"
          className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
        >
          Discover Edition I
        </Link>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#060506] overflow-hidden">
      {/* ── Mobile: bottle lower under header, then solid dark copy ── */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Dark spacer under fixed header, then bottle band */}
        <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
          <Image
            src="/edition1perfumebottle.webp"
            alt=""
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
          {/* Melt image down into the copy band */}
          <div
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(6,5,6,0.55) 45%, #060506 100%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#060506] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 flex-1 bg-[#060506] w-[95%] mx-auto pt-2 pb-14">
          <HeroCopy />
        </div>
      </div>

      {/* ── Desktop: bottle on right, melts into black on left ── */}
      <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
        <div className="bg-[#060506]" />
        <div className="relative overflow-hidden">
          <Image
            src="/edition1perfumebottle.webp"
            alt=""
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-58%" />
          <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/30" />
        </div>
      </div>

      <div className="relative z-10 hidden lg:flex w-full max-w-6xl mx-auto min-h-screen flex-col justify-center pt-40 pb-24">
        <div className="w-[95%] md:w-full mx-auto">
          <HeroCopy />
        </div>

        <div className="absolute bottom-12 left-[max(2.5%,calc((100%-80rem)/2))] flex items-center gap-3">
          {/* <span className="w-px h-10 bg-gold/70" />
          <span
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#EDE8DE]/80"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Scroll
          </span> */}
        </div>
      </div>
    </section>
  );
}
