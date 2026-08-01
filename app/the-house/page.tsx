"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

const HOUSE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/housebook" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

const PILLARS = [
  {
    icon: "fleur",
    body: "The House's values are simple and have not changed since its founding: craftsmanship without compromise, patience over speed, and an unwavering commitment to proving that African origin and global luxury standard are not opposing ideas but a single, obvious truth waiting to be demonstrated properly.",
  },
  {
    icon: "mark",
    body: "Maison Vereen's ambitions extend across generations, not seasons. The House hopes, a century from now, to be spoken of the way the world's oldest maisons are spoken of today — not as a brand that once trended, but as an institution that endured because it never lowered its standard to make growth easier.",
  },
  {
    icon: "globe",
    body: "The House is not interested in being the largest. It is committed to being one of the few that still matter in a hundred years. Every decision made today is measured against that future standard, not against the ease of the present moment.",
  },
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
    highlight: true,
  },
];

function FleurIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M18 4c0 4-3 6-3 10 0 2 1.5 3.5 3 4.5 1.5-1 3-2.5 3-4.5 0-4-3-6-3-10z" strokeLinejoin="round" />
      <path d="M18 18.5c-4 0-6 3-10 3 4 0 6 3 10 3 4 0 6-3 10-3-4 0-6-3-10-3z" strokeLinejoin="round" />
      <path d="M18 18.5V32M14 32h8" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <circle cx="18" cy="18" r="12" />
      <path d="M6.5 18h23M18 6.5c3.2 3.5 5 7.2 5 11.5S21.2 26 18 29.5C14.8 26 13 22.3 13 18s1.8-8 5-11.5z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M0 5h26M21 1l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PillarIcon({ type }: { type: "fleur" | "mark" | "globe" }) {
  if (type === "fleur") return <FleurIcon />;
  if (type === "globe") return <GlobeIcon />;
  return (
    <Image src="/logo-mark.webp" alt="" width={40} height={32} className="w-9 h-auto" />
  );
}

export default function TheHousePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE]">
      <Header navItems={HOUSE_NAV} onOpenApply={openApply} />

      {/* Hero — FAQs pattern */}
      <section className="relative min-h-screen bg-[#060506]">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
          <div className="hidden lg:block bg-[#060506]" />
          <div className="relative min-h-screen lg:min-h-0 overflow-hidden">
            <Image
              src="/images/the-house-hero.webp"
              alt=""
              fill
              priority
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/70 to-[#060506]/40 lg:bg-none" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#060506] from-0% via-[#060506]/85 via-25% to-transparent to-55%" />
          </div>
        </div>

        <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-36 md:pt-40 pb-20 min-h-screen flex items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start gap-5 md:gap-6">
            <span className="font-sans text-sm md:text-base text-[#EDE8DE] tracking-wide">
              12
            </span>
            <div className="w-8 h-px bg-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-medium">
              The House
            </span>
            <h1
              className="font-serif font-light text-[#EDE8DE] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              A House Is Not Built in a Season.
            </h1>
            <div className="w-8 h-px bg-gold" />
            <p className="font-serif text-base md:text-lg font-normal leading-[1.85] text-[#EDE8DE] max-w-md">
              Maison Vereen is building toward institutional permanence — a House
              whose values, culture, and craftsmanship are intended to outlast any
              single collection, founder, or era.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy intro + pillars */}
      <section className="relative bg-[#060506] py-20 md:py-28">
        <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-16 md:space-y-20">
          <p className="font-serif font-normal text-center text-[#F2EDE4] leading-[1.7] max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl">
            Everything explored elsewhere on this site — Edition I, the Signature
            Collection, the Founding Registry — exists within something larger: the
            House itself. This page steps back from any single product to describe
            the institution Maison Vereen intends to become.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.icon}
                className={`flex flex-col items-center text-center gap-6 px-6 sm:px-8 py-8 ${
                  i > 0 ? "md:border-l md:border-gold/30" : ""
                } ${i > 0 ? "border-t border-gold/30 md:border-t-0" : ""}`}
              >
                <div className="text-gold">
                  <PillarIcon type={pillar.icon} />
                </div>
                <p className="font-serif text-base sm:text-lg font-normal leading-[1.85] text-[#EDE8DE] max-w-sm">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Culture / The Next Century */}
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
            <div className="relative z-10 flex h-full min-h-150 flex-col justify-end gap-6 px-8 py-12 md:px-12 md:py-16 xl:px-14">
              <div className="space-y-2">
                <span className="font-sans text-sm text-gold tracking-wide">01</span>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#EDE8DE]">
                Values &amp; Culture
              </h2>
              <p className="font-serif text-lg md:text-xl font-medium leading-[1.75] text-[#EDE8DE] max-w-md">
                Every person who works within Maison Vereen, in any capacity, is
                held to the same standard: craftsmanship first, growth second.
                Decisions that would compromise quality for speed or scale are not
                made here, regardless of opportunity.
              </p>
              <ul className="space-y-2.5 pt-2">
                {VALUES_LIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold"
                  >
                    <span className="h-px w-4 shrink-0 bg-gold/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 02 The Next Century */}
          <div className="relative min-h-150 overflow-hidden group">
            <Image
              src="/images/dark-architecture.jpg"
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#060506]/70" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/50 to-[#060506]/40" />
            <div className="relative z-10 flex h-full min-h-150 flex-col justify-end gap-6 px-8 py-12 md:px-12 md:py-16 xl:px-14">
              <div className="space-y-2">
                <span className="font-sans text-sm text-gold tracking-wide">02</span>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#EDE8DE]">
                The Next Century
              </h2>
              <p className="font-serif text-lg md:text-xl font-medium leading-[1.75] text-[#EDE8DE] max-w-md">
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
                    className="flex items-center gap-3 font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold"
                  >
                    <span className="h-px w-4 shrink-0 bg-gold/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-[#060506] py-20 md:py-28 border-t border-gold/15">
        <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-12 md:space-y-14">
          <div className="text-center space-y-4">
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold font-medium block">
              A Journey Measured in Generations
            </span>
            <div className="mx-auto h-px w-10 bg-gold" />
          </div>

          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative grid grid-cols-6">
              <div className="absolute left-[8.33%] right-[8.33%] top-[0.7rem] h-px bg-gold/55" />
              {TIMELINE_STEPS.map((step, i) => (
                <div
                  key={`${step.year}-${step.title}`}
                  className={`relative flex flex-col items-center text-center px-3 xl:px-4 pt-0 ${
                    i > 0 ? "border-l border-white/10" : ""
                  }`}
                >
                  <div
                    className={`relative z-10 mb-6 rounded-full border border-gold bg-[#060506] ${
                      step.highlight
                        ? "h-5 w-5 shadow-[0_0_14px_rgba(201,168,76,0.65)]"
                        : "h-3.5 w-3.5"
                    }`}
                  >
                    {step.highlight && (
                      <span className="absolute inset-1 rounded-full bg-gold" />
                    )}
                  </div>
                  <p className="font-serif text-[11px] xl:text-xs uppercase tracking-[0.16em] text-gold leading-snug">
                    {step.year}
                    <br />
                    {step.title}
                  </p>
                  <p className="mt-4 font-sans text-sm font-medium leading-relaxed text-[#EDE8DE]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet timeline */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
            {TIMELINE_STEPS.map((step) => (
              <div
                key={`${step.year}-${step.title}-m`}
                className="relative border-t border-gold/25 pt-6 text-center sm:text-left"
              >
                <div
                  className={`mx-auto sm:mx-0 mb-4 rounded-full border border-gold bg-[#060506] ${
                    step.highlight
                      ? "h-4 w-4 shadow-[0_0_12px_rgba(201,168,76,0.55)]"
                      : "h-2.5 w-2.5"
                  }`}
                />
                <p className="font-serif text-xs uppercase tracking-[0.18em] text-gold leading-snug">
                  {step.year} {step.title}
                </p>
                <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-[#EDE8DE]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote + CTAs */}
      <section className="relative bg-[#060506] py-16 md:py-24 overflow-hidden border-t border-gold/15">
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image src="/logo-mark.webp" alt="" width={180} height={140} className="w-40 h-auto" />
        </div>
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image src="/logo-mark.webp" alt="" width={180} height={140} className="w-40 h-auto" />
        </div>

        <div className="relative w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-[2.5rem] font-light text-[#F2EDE4] leading-snug">
            An institution is proven not by what it says about itself, but by what
            others say about it.
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <button
              type="button"
              onClick={openApply}
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
            >
              Apply to the Founding Registry
              <ArrowIcon />
            </button>
            <Link
              href="/social-proof"
              className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
            >
              Read What Others Are Saying
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer navItems={HOUSE_NAV} />

      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
