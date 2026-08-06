"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HOUSE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

const PILLARS = [
  "The House's values are simple and have not changed since its founding: craftsmanship without compromise, patience over speed, and an unwavering commitment to proving that African origin and global luxury standard are not opposing ideas but a single, obvious truth waiting to be demonstrated properly.",
  "Maison Vereen's ambitions extend across generations, not seasons. The House hopes, a century from now, to be spoken of the way the world's oldest maisons are spoken of today — not as a brand that once trended, but as an institution that endured because it never lowered its standard to make growth easier.",
  "The House is not interested in being the largest. It is committed to being one of the few that still matter in a hundred years. Every decision made today is measured against that future standard, not against the ease of the present moment.",
] as const;

const VALUES_LIST = [
  "CRAFTSMANSHIP WITHOUT COMPROMISE",
  "PATIENCE OVER SPEED",
  "INTEGRITY IN EVERY DECISION",
  "RESPECT FOR HERITAGE",
  "EXCELLENCE IN EVERY DETAIL",
];

const CENTURY_LIST = [
  "BUILT TO ENDURE",
  "ROOTED IN PURPOSE",
  "DESIGNED FOR GENERATIONS",
  "DEFINED BY QUALITY",
  "MEASURED IN DECADES",
];

const TIMELINE_STEPS = [
  {
    year: "2024",
    title: "FOUNDATION",
    body: "The House is established with a clear vision and uncompromising standards.",
  },
  {
    year: "2024–2025",
    title: "EDITION I",
    body: "The founding edition is created — finite by design, marking the first chapter of the House.",
  },
  {
    year: "2025+",
    title: "SIGNATURE COLLECTION",
    body: "The permanent body of work is released — fragrances that will endure and evolve with the House.",
  },
  {
    year: "2025+",
    title: "THE REGISTRY",
    body: "The House is assembled through conviction, not transaction. The foundation of community.",
  },
  {
    year: "2030+",
    title: "GROWTH WITH PURPOSE",
    body: "The House expands its craft, its culture, and its impact without compromising its values.",
  },
  {
    year: "2124",
    title: "A CENTURY STRONG",
    body: "Maison Vereen is remembered not for trends, but for timeless craft and character.",
  },
];

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

export default function TheHousePage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE]">
      <Header navItems={HOUSE_NAV} />

      {/* Hero — bottle lower on mobile, melt desktop */}
      <section className="relative min-h-screen bg-[#060506] overflow-hidden">
        {/* Mobile: image under header, copy on solid dark */}
        <div className="lg:hidden flex flex-col min-h-screen">
          <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
            <Image
              src="/images/the-house-hero.webp"
              alt=""
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

          <div className="relative z-10 flex-1 bg-[#060506] w-[95%] mx-auto pt-2 pb-14">
            <div className="w-full max-w-lg flex flex-col items-start gap-5">
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm text-gold tracking-wide">
                  12
                </span>
                {/* <div className="h-px w-6 sm:w-8 bg-gold shrink-0" /> */}
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">
                  The House
                </span>
              </div>
              <h1
                className="font-serif font-light text-[#EDE8DE] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.25rem)" }}
              >
                A House Is Not Built in a Season.
              </h1>
              {/* <div className="w-8 h-px bg-gold" /> */}
              <p className="body-copy max-w-md">
                Maison Vereen is building toward institutional permanence — a
                House whose values, culture, and craftsmanship are intended to
                outlast any single collection, founder, or era.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: image on right, melts into black on left */}
        <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
          <div className="bg-[#060506]" />
          <div className="relative overflow-hidden">
            <Image
              src="/images/the-house-hero.webp"
              alt=""
              fill
              priority
              className="object-cover object-[center_30%]"
              sizes="55vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/85 via-25% to-transparent to-55%" />
          </div>
        </div>

        <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start gap-5 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="font-sans text-sm md:text-base text-gold tracking-wide">
                12
              </span>
              <div className="h-px w-6 sm:w-8 bg-gold shrink-0" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                The House
              </span>
            </div>
            <h1
              className="font-serif font-light text-[#EDE8DE] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              A House Is Not Built in a Season.
            </h1>
            {/* <div className="w-8 h-px bg-gold" /> */}
            <p className="body-copy max-w-md">
              Maison Vereen is building toward institutional permanence — a
              House whose values, culture, and craftsmanship are intended to
              outlast any single collection, founder, or era.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy intro + pillars */}
      <section className="relative bg-[#060506] py-20 md:py-28">
        <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-16 md:space-y-20">
          <p className="body-copy text-center max-w-3xl mx-auto">
            Everything explored elsewhere on this site — Edition I, the
            Signature Collection, the Founding Registry — exists within
            something larger: the House itself. This page steps back from any
            single product to describe the institution Maison Vereen intends to
            become.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PILLARS.map((body) => (
              <div
                key={body.slice(0, 48)}
                className="border bg-[#0A0A0C] border-[#EDE8DE]/12 px-6 py-8 sm:px-7 sm:py-9 md:px-8 md:py-10"
              >
                <p className="font-sans text-[13px] sm:text-[14px] font-normal leading-[1.7] text-body-muted text-left">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Culture / The Next Century — full-bleed media, text on header rail */}
      <section className="relative bg-[#060506] border-t border-gold/15">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* 01 Values & Culture */}
          <div className="relative min-h-150 overflow-hidden group border-b lg:border-b-0 lg:border-r border-gold/20">
            <Image
              src="/images/the-house-belonging.webp"
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#060506]/70" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/50 to-[#060506]/40" />
            <div className="relative z-10 flex h-full min-h-150 flex-col justify-end gap-6 content-rail-inset-l py-12 md:py-16">
              <div className="space-y-2">
                <span className="font-sans text-sm text-gold tracking-wide">
                  01
                </span>
                {/* <div className="w-8 h-px bg-gold" /> */}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#EDE8DE]">
                Values &amp; Culture
              </h2>
              <p className="body-copy max-w-md">
                Every person who works within Maison Vereen, in any capacity, is
                held to the same standard: craftsmanship first, growth second.
                Decisions that would compromise quality for speed or scale are
                not made here, regardless of opportunity.
              </p>
              <ul className="space-y-2.5 pt-2">
                {VALUES_LIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold font-semibold"
                  >
                    <span
                      className="h-px w-4 shrink-0 bg-gold/70"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 02 The Next Century */}
          <div className="relative min-h-150 overflow-hidden group">
            <Image
              src="/images/the-house-hero.webp"
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#060506]/70" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/50 to-[#060506]/40" />
            <div className="relative z-10 flex h-full min-h-150 flex-col justify-end gap-6 content-rail-inset-r py-12 md:py-16">
              <div className="space-y-2">
                <span className="font-sans text-sm text-gold tracking-wide">
                  02
                </span>
                {/* <div className="w-8 h-px bg-gold" /> */}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#EDE8DE]">
                The Next Century
              </h2>
              <p className="body-copy max-w-md">
                Maison Vereen is not building toward a successful launch. It is
                building toward an institution capable of outliving its founder,
                its first collectors, and its first century — the same way the
                world&apos;s most respected maisons were built, one deliberate
                decade at a time.
              </p>
              <ul className="space-y-2.5 pt-2">
                {CENTURY_LIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold font-semibold"
                  >
                    <span
                      className="h-px w-4 shrink-0 bg-gold/70"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey — generation cards */}
      <section className="relative bg-[#060506] py-20 md:py-28 border-t border-gold/15">
        <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-12 md:space-y-14">
          <h2 className="text-center font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            A Journey Measured in Generations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4">
            {TIMELINE_STEPS.map((step) => (
              <article
                key={`${step.year}-${step.title}`}
                className="flex flex-col gap-4 bg-[#0C0B0A] border border-[#EDE8DE]/10 px-5 py-7 sm:px-6 sm:py-8"
              >
                <div className="space-y-2">
                  <p className="font-serif text-[11px] sm:text-xs tracking-[0.08em] text-gold font-light">
                    {step.year}
                  </p>
                  <h3 className="font-serif text-base sm:text-lg font-light uppercase tracking-[0.06em] text-gold leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans text-[12px] sm:text-[13px] font-normal leading-[1.7] text-body-muted flex-1">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote + CTAs */}
      <section className="relative bg-[#060506] py-16 md:py-24 overflow-hidden border-t border-gold/15">
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          {/* <Image
            src="/logo-mark.webp"
            alt=""
            width={180}
            height={140}
            className="w-40 h-auto"
          /> */}
        </div>
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          {/* <Image
            src="/logo-mark.webp"
            alt=""
            width={180}
            height={140}
            className="w-40 h-auto"
          /> */}
        </div>

        <div className="relative w-[95%] md:w-full max-w-5xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-2xl font-light text-[#EDE8DE] leading-[1.08] tracking-tight">
            An institution is proven not by what it says about itself, but by
            what others say about it.
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0 bg-gold hover:bg-gold-light text-[#060506] px-7 sm:px-8 py-3.5 text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              Apply to the Founding Registry
              <ArrowIcon />
            </Link>
            <Link
              href="/social-proof"
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0 border border-gold text-gold hover:bg-gold/10 px-7 sm:px-8 py-3.5 text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              Read What Others Are Saying
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer navItems={HOUSE_NAV} />
    </div>
  );
}
