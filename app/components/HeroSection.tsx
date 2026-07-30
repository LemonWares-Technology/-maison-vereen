"use client";

import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  onOpenApply: () => void;
}

export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#060506] border-b border-white/5 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Main Headline */}
            <h1
              className="font-serif font-light text-[#EDE8DE] leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
            >
              The room knows <br className="hidden sm:block" />
              before you speak.
            </h1>

            {/* Subtitle / Eyebrow Block */}
            <div className="space-y-1.5 pt-2">
              <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">
                EDITION I.
              </span>
              <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#A3998E] font-medium">
                TWO HUNDRED AND FIFTY INDIVIDUALLY NUMBERED BOTTLES.
              </span>
            </div>

            {/* Supporting Copy */}
            <p
              className="text-[#8A8178] font-light leading-[1.85] max-w-145"
              style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.0625rem)" }}
            >
              Africa&apos;s first serious luxury fragrance house, now privately accepting applications into the Maison Vereen Founding Registry.
            </p>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={onOpenApply}
                className="bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>APPLY TO THE REGISTRY</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <Link
                href="/edition-i"
                className="border border-[#7A7068]/40 hover:border-gold` text-[#EDE8DE] hover:text-gold px-7 py-3.5 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-medium transition-all duration-300 text-center bg-[#060506]"
              >
                DISCOVER EDITION I
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-10 flex items-center gap-3">
              <span className="w-px h-5 bg-gold/60" />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#7A7068]">
                SCROLL
              </span>
            </div>

          </div>

          {/* Right Column — Bottle Hero Image (5 cols on lg) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-115 overflow-hidden rounded-xs shadow-2xl" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/file_00000000a75471f48402160a6ed179fc.png"
                alt="Maison Vereen Edition I — The Bottle"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-center"
                priority
              />
              {/* Subtle vignette overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(6,5,6,0.45)_100%)] pointer-events-none" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#060506]/60 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
