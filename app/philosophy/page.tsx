"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "PHILOSOPHY", href: "/philosophy" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

const CONVICTIONS = [
  {
    number: "01",
    title: "CRAFTSMANSHIP",
    purpose: "Purpose: State the House's standard for making.",
    body: "Nothing leaves Maison Vereen because a deadline arrived. It leaves because it is finished, by the only standard that matters here — the master perfumer's own.",
    src: "/images/philosophy-hero.webp",
    alt: "Master perfumer craft with glass dropper and vials",
  },
  {
    number: "02",
    title: "TIME",
    purpose: "Purpose: State the House's relationship to pace.",
    body: "Formulation, ageing, and refinement are permitted the time they require. The House would rather delay a release by a year than release something it cannot stand behind for a century.",
    src: "/timesand.webp",
    alt: "Hourglass marking the House's patience with time",
  },
  {
    number: "03",
    title: "MEMORY",
    purpose: "Purpose: Frame fragrance as an instrument of memory.",
    body: "A fragrance is the only object capable of returning someone, instantly and involuntarily, to a moment they thought they had lost. Maison Vereen designs for that return, not merely for how a scent performs in the first hour.",
    src: "/memory.webp",
    alt: "Raw amber resin and materials of memory",
  },
  {
    number: "04",
    title: "IDENTITY",
    purpose: "Purpose: Position fragrance as self-expression, not costume.",
    body: "A signature scent is not a mask. It is closer to a signature itself — unrepeatable, and recognisably the wearer's own. The House creates fragrances built to be worn for decades, not seasons.",
    src: "/theidentity.webp",
    alt: "Fountain pen and handwritten signature",
  },
  {
    number: "05",
    title: "RARITY & LEGACY",
    purpose: "Purpose: Tie scarcity to permanence rather than marketing urgency.",
    body: "What is rare is rare because it was never compromised to meet demand. What is rare and well made becomes legacy — passed forward, told about, remembered after the person who first wore it is gone.",
    src: "/timesand.webp",
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
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── Hero — image up top on mobile, melt desktop ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: image under header, then solid dark copy */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/images/philosophy-hero.webp"
                alt="Maison Vereen bottle on black marble"
                fill
                priority
                className="object-cover object-[center_28%]"
                sizes="100vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(6,5,6,0.55) 45%, #060506 100%)",
                }}
              />
              <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#060506] to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 flex-1 bg-[#060506] w-[90%] mx-auto pt-2 pb-14">
              <div className="w-full max-w-lg space-y-6">
                <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium">
                  The Philosophy of the House
                </span>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.1rem, 5.5vw, 3.6rem)" }}
                >
                  Luxury Is Not Volume. It Is Conviction.
                </h1>

                <p className="font-serif text-base font-light leading-[1.8] text-gold max-w-lg">
                  Ten convictions govern Maison Vereen. None of them are
                  negotiable, and none of them were chosen for how they would
                  market.
                </p>

                <div className="grid grid-cols-1 gap-5 pt-1">
                  <p className="text-body-muted text-[14px] font-light leading-[1.8]">
                    Every house, knowingly or not, is built on a set of beliefs.
                    Most never state them. Maison Vereen states them plainly,
                    because a House that intends to last a century cannot afford
                    to leave its convictions unwritten.
                  </p>
                  <p className="text-body-muted text-[14px] font-light leading-[1.8]">
                    These beliefs are not slogans. They are the standard against
                    which every formulation, every material, every piece of
                    correspondence with a collector, and every page of this
                    website has been measured before being approved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: image melts into black on the left */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute inset-0 left-[32%] xl:left-[28%]">
              <Image
                src="/images/philosophy-hero.webp"
                alt="Maison Vereen bottle on black marble"
                fill
                priority
                className="object-cover object-[center_28%]"
                sizes="70vw"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-28% via-[#060506]/95 via-42% to-transparent to-68%" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506]/60 via-transparent to-[#060506]/45" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#060506]/50" />
            <div className="absolute inset-0 bg-linear-to-l from-[#060506]/35 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 hidden lg:flex w-[90%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-7 md:space-y-8">
              <div className="space-y-3">
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
                <p className="text-body-muted text-[14px] font-light leading-[1.8]">
                  Every house, knowingly or not, is built on a set of beliefs.
                  Most never state them. Maison Vereen states them plainly,
                  because a House that intends to last a century cannot afford
                  to leave its convictions unwritten.
                </p>
                <p className="text-body-muted text-[14px] font-light leading-[1.8]">
                  These beliefs are not slogans. They are the standard against
                  which every formulation, every material, every piece of
                  correspondence with a collector, and every page of this
                  website has been measured before being approved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Convictions — bordered cards, image left / copy right ── */}
        <section className="relative bg-[#060506] py-16 md:py-24">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto space-y-5 md:space-y-6">
            {CONVICTIONS.map((c) => (
              <article
                key={c.number}
                className="border border-[#EDE8DE]/12 bg-[#0A0A0C] p-5 sm:p-6 md:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,14rem)_1fr] lg:grid-cols-[minmax(0,16rem)_1fr] gap-6 md:gap-8 lg:gap-10 items-start">
                  <div className="relative aspect-4/3 md:aspect-square w-full overflow-hidden border border-gold/35">
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 90vw, 256px"
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:gap-4">
                    <span className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-gold font-light leading-none">
                      {c.number}
                    </span>
                    <h2 className="font-serif text-xl md:text-2xl font-light tracking-widest uppercase text-[#EDE8DE]">
                      {c.title}
                    </h2>
                    <p className="font-serif text-base md:text-lg italic font-light text-gold leading-snug">
                      {c.purpose}
                    </p>
                    <p className="text-body-muted text-[14px] font-light leading-[1.8] max-w-xl">
                      {c.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Dual CTAs ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[90%] md:w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              <article className="flex flex-col gap-8 border border-[#EDE8DE]/12 bg-[#0C0B0A] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                <h3
                  className="font-serif font-light text-[#EDE8DE] leading-snug"
                  style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.65rem)" }}
                >
                  Curious to know the person behind these convictions?
                </h3>
                <Link
                  href="/the-founder"
                  className="inline-flex w-full items-center justify-between gap-3 border border-gold text-gold hover:bg-gold/10 px-5 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors"
                >
                  Meet the Founder
                  <ArrowIcon />
                </Link>
              </article>

              <article className="flex flex-col gap-8 border border-[#EDE8DE]/12 bg-[#0C0B0A] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                <h3
                  className="font-serif font-light text-[#EDE8DE] leading-snug"
                  style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.65rem)" }}
                >
                  Ready to be part of the House?
                </h3>
                <Link
                  href="/apply"
                  className="inline-flex w-full items-center justify-between gap-3 border border-gold text-gold hover:bg-gold/10 px-5 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors"
                >
                  Apply for a Position
                  <ArrowIcon />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5">
          <div className="w-[90%] md:w-full max-w-3xl mx-auto text-center space-y-8">
            <h2
              className="font-serif font-light text-gold leading-snug italic"
              style={{ fontSize: "clamp(1.35rem, 3vw, 2rem)" }}
            >
              A philosophy this deliberate does not appear by accident. It
              begins with one person&apos;s conviction.
            </h2>

            <Link
              href="/the-founder"
              className="inline-flex items-center justify-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE] hover:text-gold transition-colors font-light"
            >
              Next: The Founder&apos;s Story
              <CircleArrowIcon />
            </Link>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
