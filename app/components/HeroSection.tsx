"use client";

import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  onOpenApply: () => void;
}

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

export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-[#060506] overflow-hidden">
      {/* Right bottle — melts into black on the left */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
        <div className="hidden lg:block bg-[#060506]" />
        <div className="relative min-h-screen lg:min-h-0 overflow-hidden">
          <Image
            src="/file_00000000a75471f48402160a6ed179fc.webp"
            alt=""
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/75 to-[#060506]/45 lg:bg-none" />
          <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-58%" />
          <div className="absolute inset-0 hidden lg:block bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/30" />
        </div>
      </div>

      <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-36 md:pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <div className="w-full max-w-lg lg:max-w-xl space-y-7 md:space-y-8">
          <h1
            className="font-serif font-light text-[#F2EDE4] leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            The room knows
            <br />
            before you speak.
          </h1>

          <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold font-medium leading-relaxed max-w-md">
            Edition I. Two Hundred and Fifty Individually Numbered Bottles.
          </p>

          <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] max-w-md">
            Africa&apos;s first serious luxury fragrance house, now privately
            accepting applications into the Maison Vereen Founding Registry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-1">
            <button
              type="button"
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
            >
              Apply to the Registry
              <ArrowIcon />
            </button>
            <Link
              href="/edition-i"
              className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
            >
              Discover Edition I
            </Link>
          </div>
        </div>

        {/* Vertical SCROLL cue — bottom left */}
        <div className="absolute bottom-8 left-0 md:bottom-12 flex items-center gap-3">
          <span className="w-px h-10 bg-gold/70" />
          <span
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#EDE8DE]/80"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
