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
  { label: "THE FOUNDER", href: "/the-founder" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/housebook" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

const HERO_LINES = [
  "Some things are built to outlive their founder.",
  "Conviction does not require an introduction.",
  "The House speaks. The founder rarely needs to.",
  "Obsession, properly aimed, becomes a House.",
  "This was never meant to be finished quickly.",
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

export default function TheFounderPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} onOpenApply={openApply} />

      <main className="flex-1">
        {/* ── Hero — dark text left, atelier right melting into black ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
            <div className="hidden lg:block bg-[#060506]" />
            <div className="relative min-h-screen lg:min-h-0 overflow-hidden">
              <Image
                src="/founder-image-1.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/75 to-[#060506]/45 lg:bg-none" />
              <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-60%" />
              <div className="absolute inset-0 hidden lg:block bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/35" />
            </div>
          </div>

          <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-36 md:pt-40 pb-20 min-h-screen flex items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-6 md:space-y-8">
              <div className="space-y-2">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  The Founder&apos;s Story
                </span>
                <div className="w-10 h-px bg-gold" />
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)" }}
              >
                She Did Not Set Out to Build a Perfume Brand.
              </h1>

              <ul className="space-y-3.5 pt-1">
                {HERO_LINES.map((line) => (
                  <li key={line} className="flex items-start gap-4">
                    <span className="mt-[0.7em] w-5 h-px shrink-0 bg-gold" />
                    <span className="font-serif text-base md:text-lg font-medium leading-relaxed text-gold">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-gold/90 max-w-md pt-2">
                The most prestigious houses in the world communicate through
                their work, not their founders. Maison Vereen was built in that
                tradition.
              </p>
            </div>
          </div>
        </section>

        {/* ── Narrative ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 border-t border-white/5">
          <div className="w-[95%] md:w-full max-w-3xl mx-auto space-y-8 font-serif text-lg md:text-xl lg:text-[1.35rem] font-medium leading-[1.85] text-[#EDE8DE]">
            <p>
              Maison Vereen was founded on a simple, stubborn conviction: that a
              luxury fragrance house built to the world&apos;s highest standard
              could be built in Lagos, by an African founder, without asking
              permission or imitating anyone else&apos;s idea of what luxury
              should sound like.
            </p>
            <p>
              That conviction did not arrive as a business plan. It arrived as a
              refusal — a refusal to accept that craftsmanship of this calibre
              belonged only to certain cities, certain histories, certain names.
              What followed was years of formulation, refinement, and quiet
              obsession with getting every detail, from the raw material to the
              bottle&apos;s weight in the hand, exactly right.
            </p>
            <p>
              The founder&apos;s full story will be told over time, the way any
              serious house reveals itself — gradually, through the work. What
              matters at this stage is not her biography, but her intention: to
              build something that will still mean something in a hundred years,
              long after she is no longer the one telling its story.
            </p>
          </div>
        </section>

        {/* ── 01 & 02 pillars — text | image side-by-side, gold divider ── */}
        <section className="relative bg-[#060506] py-16 md:py-24">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-gold/30">
              {/* 01 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 lg:gap-8 items-center pb-14 lg:pb-0 lg:pr-10 xl:pr-14 border-b border-gold/25 lg:border-b-0">
                <div className="space-y-4 md:space-y-5">
                  <div className="space-y-2">
                    <span className="font-serif text-lg md:text-xl text-gold block">
                      01
                    </span>
                    <div className="w-8 h-px bg-gold" />
                  </div>
                  <h2
                    className="font-serif font-light text-[#F2EDE4] leading-snug"
                    style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.15rem)" }}
                  >
                    Conviction Over Credentials
                  </h2>
                  <p className="font-serif text-base md:text-lg font-medium leading-[1.85] text-[#EDE8DE]">
                    The most prestigious houses in the world are remembered for
                    their work, not their founders&apos; faces. Maison Vereen
                    follows that same discipline deliberately — the House, not
                    the individual, is what is being built to last.
                  </p>
                </div>

                <div className="relative w-full aspect-3/4 sm:aspect-auto sm:h-full sm:min-h-80 overflow-hidden">
                  <Image
                    src="/images/hand_writing.webp"
                    alt="Craft archives — journal and tools of the House"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 25vw"
                  />
                  {/* Heavy melt into black — no boxed photo */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#060506_78%)]" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/20 to-[#060506]/70" />
                  <div className="absolute inset-0 bg-linear-to-r from-[#060506]/80 via-transparent to-[#060506]/80" />
                </div>
              </div>

              {/* 02 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 lg:gap-8 items-center pt-14 lg:pt-0 lg:pl-10 xl:pl-14">
                <div className="space-y-4 md:space-y-5">
                  <div className="space-y-2">
                    <span className="font-serif text-lg md:text-xl text-gold block">
                      02
                    </span>
                    <div className="w-8 h-px bg-gold" />
                  </div>
                  <h2
                    className="font-serif font-light text-[#F2EDE4] leading-snug"
                    style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.15rem)" }}
                  >
                    Building to Outlive Her
                  </h2>
                  <p className="font-serif text-base md:text-lg font-medium leading-[1.85] text-[#EDE8DE]">
                    Every decision made today — from Edition I&apos;s scarcity to
                    the Founding Registry&apos;s careful structure — is made with
                    one question in mind: will this still make sense in a
                    century, under someone else&apos;s stewardship? If the answer
                    is no, it does not happen.
                  </p>
                </div>

                <div className="relative w-full aspect-3/4 sm:aspect-auto sm:h-full sm:min-h-80 overflow-hidden">
                  <Image
                    src="/images/dark-architecture.jpg"
                    alt="Institutional vision — an enduring House"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,#060506_75%)]" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/25 to-[#060506]/70" />
                  <div className="absolute inset-0 bg-linear-to-r from-[#060506]/80 via-transparent to-[#060506]/80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quote + CTAs ── */}
        <section className="relative bg-[#060506] overflow-hidden">
          <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-20 md:pt-28 pb-10 md:pb-14">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <span
                className="font-serif text-gold block leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                &ldquo;
              </span>
              <h2
                className="font-serif font-light text-gold leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)" }}
              >
                Conviction explains why the House exists.
                <br className="hidden sm:block" />
                What follows explains why it could only ever look like this.
              </h2>
              <div className="w-10 h-px bg-gold mx-auto" />
            </div>
          </div>

          {/* Bottle rail + dual CTAs */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(180px,0.85fr)_minmax(0,1.15fr)_minmax(0,1.15fr)] items-stretch">
            {/* Left — bottle + candle atmosphere melting into black */}
            <div className="relative hidden lg:block min-h-72 overflow-hidden">
              <Image
                src="/file_00000000a75471f48402160a6ed179fc.webp"
                alt=""
                fill
                className="object-cover object-[40%_center]"
                sizes="28vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#060506]/20 to-[#060506]" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/60" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_55%,transparent_15%,#060506_85%)]" />
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col justify-center gap-5 px-6 sm:px-10 md:px-12 py-12 md:py-16 border-t border-gold/20 lg:border-t-0 lg:border-r lg:border-gold/30">
              <Link
                href="/the-difference"
                className="inline-flex w-full items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-6 py-3.5 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold transition-colors text-center"
              >
                See What Makes the House Different
                <ArrowIcon />
              </Link>
              <p className="font-sans text-sm md:text-base font-light leading-relaxed text-[#EDE8DE]/85 max-w-sm">
                Discover what sets Maison Vereen apart and why nothing here is
                ordinary.
              </p>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col justify-center gap-5 px-6 sm:px-10 md:px-12 py-12 md:py-16 border-t border-gold/20 lg:border-t-0">
              <button
                type="button"
                onClick={openApply}
                className="inline-flex w-full items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium transition-colors"
              >
                Apply for a Position
                <ArrowIcon />
              </button>
              <p className="font-sans text-sm md:text-base font-light leading-relaxed text-[#EDE8DE]/85 max-w-sm">
                For those who feel aligned with the mission and want to
                contribute to its legacy.
              </p>
            </div>
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
