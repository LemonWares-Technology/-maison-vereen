"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE EXPERIENCE", href: "/philosophy" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

const CONVICTIONS = [
  {
    number: "01",
    title: "CRAFTSMANSHIP",
    purpose: "Purpose: State the House's standard for making.",
    body: "Nothing leaves Maison Vereen because a deadline arrived. It leaves because it is finished, by the only standard that matters here — the master perfumer's own.",
    src: "/file_00000000520071f4915a7351029b1f7b.webp",
    alt: "Master perfumer craft with glass dropper and vials",
  },
  {
    number: "02",
    title: "TIME",
    purpose: "Purpose: State the House's relationship to pace.",
    body: "Formulation, ageing, and refinement are permitted the time they require. The House would rather delay a release by a year than release something it cannot stand behind for a century.",
    src: "/file_00000000aba081f49f4ebc11da3f8c3d.webp",
    alt: "Hourglass marking the House's patience with time",
  },
  {
    number: "03",
    title: "MEMORY",
    purpose: "Purpose: Frame fragrance as an instrument of memory.",
    body: "A fragrance is the only object capable of returning someone, instantly and involuntarily, to a moment they thought they had lost. Maison Vereen designs for that return, not merely for how a scent performs in the first hour.",
    src: "/file_00000000a97471f4be1bee83e5dedea0.webp",
    alt: "Raw amber resin and materials of memory",
  },
  {
    number: "04",
    title: "IDENTITY",
    purpose: "Purpose: Position fragrance as self-expression, not costume.",
    body: "A signature scent is not a mask. It is closer to a signature itself — unrepeatable, and recognisably the wearer's own. The House creates fragrances built to be worn for decades, not seasons.",
    src: "/images/hand_writing.webp",
    alt: "Fountain pen and handwritten signature",
  },
  {
    number: "05",
    title: "RARITY & LEGACY",
    purpose: "Purpose: Tie scarcity to permanence rather than marketing urgency.",
    body: "What is rare is rare because it was never compromised to meet demand. What is rare and well made becomes legacy — passed forward, told about, remembered after the person who first wore it is gone.",
    src: "/file_00000000df2071f4ac2ce7694ace922d.webp",
    alt: "Dark stone with veins of gold — rarity and permanence",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="22"
      height="8"
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

function CircleArrowIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden
    >
      <circle cx="14" cy="14" r="13" />
      <path
        d="M8 14h10M14 10l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PhilosophyPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} onOpenApply={openApply} />

      <main className="flex-1">
        {/* ── Hero — image melts into black like Edition I ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Full-bleed photo plane; melts hard into the left copy zone */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 lg:left-[32%] xl:left-[28%]">
              <Image
                src="/file_00000000a75471f48402160a6ed179fc.webp"
                alt="Maison Vereen bottle on black marble"
                fill
                priority
                className="object-cover object-[center_28%]"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
            {/* Mobile: dissolve upward behind copy */}
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] from-15% via-[#060506]/85 via-45% to-[#060506]/55 lg:hidden" />
            {/* Desktop: continuous left melt into the text field */}
            <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#060506] from-[28%] via-[#060506]/95 via-[42%] to-transparent to-[68%]" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-t from-[#060506]/60 via-transparent to-[#060506]/45" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-b from-transparent via-transparent to-[#060506]/50" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-l from-[#060506]/35 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-36 md:pt-40 pb-20 min-h-screen flex items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-7 md:space-y-8">
              <div className="space-y-3">
                <div className="w-10 h-px bg-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  The Philosophy of the House
                </span>
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.15rem, 4.6vw, 3.6rem)" }}
              >
                Luxury Is Not Volume. It Is Conviction.
              </h1>

              <p className="font-serif text-base md:text-lg font-light leading-[1.8] text-gold max-w-lg">
                Ten convictions govern Maison Vereen. None of them are
                negotiable, and none of them were chosen for how they would
                market.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-2">
                <p className="font-serif text-base font-light leading-[1.8] text-[#EDE8DE]">
                  Every house, knowingly or not, is built on a set of beliefs.
                  Most never state them. Maison Vereen states them plainly,
                  because a House that intends to last a century cannot afford
                  to leave its convictions unwritten.
                </p>
                <p className="font-serif text-base font-light leading-[1.8] text-[#EDE8DE]">
                  These beliefs are not slogans. They are the standard against
                  which every formulation, every material, every piece of
                  correspondence with a collector, and every page of this
                  website has been measured before being approved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Convictions 01–05 — open rows, images dissolve into black ── */}
        <section className="relative bg-[#060506]">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            {CONVICTIONS.map((c, i) => (
              <article
                key={c.number}
                className={`py-12 md:py-16 lg:py-20 ${
                  i < CONVICTIONS.length - 1 ? "border-b border-gold/20" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[5.5rem_minmax(0,15rem)_minmax(0,1fr)] xl:grid-cols-[6.5rem_minmax(0,17rem)_minmax(0,1fr)] gap-8 lg:gap-10 xl:gap-14 items-start">
                  <div className="space-y-3">
                    <span className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-gold font-light leading-none block">
                      {c.number}
                    </span>
                    <div className="w-10 h-px bg-gold" />
                  </div>

                  <div className="relative aspect-square max-w-xs lg:max-w-none overflow-hidden">
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 280px, 272px"
                    />
                  </div>

                  <div className="space-y-4 max-w-2xl">
                    <h2 className="font-serif text-xl md:text-2xl font-light tracking-[0.12em] uppercase text-gold">
                      {c.title}
                    </h2>
                    <p className="font-serif text-base md:text-lg italic font-light text-gold/90 leading-snug">
                      {c.purpose}
                    </p>
                    <p className="font-serif text-base md:text-[1.1rem] font-light leading-[1.85] text-[#EDE8DE]">
                      {c.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Dual CTAs — open columns, gold rule only ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-5xl mx-auto space-y-12 md:space-y-14">
            <Image
              src="/logo-mark.webp"
              alt="Maison Vereen"
              width={48}
              height={40}
              className="w-10 h-auto mx-auto"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex flex-col gap-6 lg:pr-12 xl:pr-16">
                <h3
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)" }}
                >
                  Curious to know the person behind these convictions?
                </h3>
                <Link
                  href="/the-founder"
                  className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors self-start"
                >
                  Meet the Founder
                  <ArrowIcon />
                </Link>
              </div>

              <div className="flex flex-col gap-6 lg:pl-12 xl:pl-16 lg:border-l lg:border-gold/25">
                <h3
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)" }}
                >
                  Ready to be part of the House?
                </h3>
                <button
                  type="button"
                  onClick={openApply}
                  className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors self-start"
                >
                  Apply for a Position
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5">
          <div className="w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-8">
            <h2
              className="font-serif font-light text-gold leading-snug italic"
              style={{ fontSize: "clamp(1.35rem, 3vw, 2rem)" }}
            >
              A philosophy this deliberate does not appear by accident. It
              begins with one person&apos;s conviction.
            </h2>

            <Link
              href="/the-founder"
              className="inline-flex items-center justify-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE] hover:text-gold transition-colors font-medium"
            >
              Next: The Founder&apos;s Story
              <CircleArrowIcon />
            </Link>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />

      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
