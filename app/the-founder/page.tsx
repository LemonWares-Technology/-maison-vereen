"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  LucideShield,
  LucideScale,
  LucideLandmark,
  LucideTarget,
  LucideHourglass,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE FOUNDER", href: "/the-founder" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "THE HOUSE", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

const HERO_LINES: { text: string; icon: LucideIcon }[] = [
  {
    text: "Some things are built to outlive their founder.",
    icon: LucideShield,
  },
  {
    text: "Conviction does not require an introduction.",
    icon: LucideScale,
  },
  {
    text: "The House speaks. The founder rarely needs to.",
    icon: LucideLandmark,
  },
  {
    text: "Obsession, properly aimed, becomes a House.",
    icon: LucideTarget,
  },
  {
    text: "This was never meant to be finished quickly.",
    icon: LucideHourglass,
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

export default function TheFounderPage() {

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
                src="/womancreatingperfume.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_25%]"
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
                  The Founder&apos;s Story
                </span>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.1rem, 5.5vw, 3.75rem)" }}
                >
                  She Did Not Set Out to Build a Perfume Brand.
                </h1>

                <ul className="space-y-3.5 pt-1">
                  {HERO_LINES.map(({ text, icon: Icon }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon
                        className="mt-1 size-3.5 shrink-0 text-gold"
                        strokeWidth={1.4}
                        aria-hidden
                      />
                      <span className="text-[15px] font-light leading-relaxed text-gold">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-body-muted text-[16px] font-light max-w-md pt-2">
                  The most prestigious houses in the world communicate through
                  their work, not their founders. Maison Vereen was built in that
                  tradition.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: atelier on right, melts into black on left */}
          <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
            <div className="bg-[#060506]" />
            <div className="relative overflow-hidden">
              <Image
                src="/womancreatingperfume.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_25%]"
                sizes="55vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-60%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/35" />
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex w-[90%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-6 md:space-y-8">
              <div className="space-y-2">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  The Founder&apos;s Story
                </span>
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)" }}
              >
                She Did Not Set Out to Build a Perfume Brand.
              </h1>

              <ul className="space-y-3.5 pt-1">
                {HERO_LINES.map(({ text, icon: Icon }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon
                      className="mt-1 size-3.5 shrink-0 text-gold"
                      strokeWidth={1.4}
                      aria-hidden
                    />
                    <span className="text-[15px] font-light leading-relaxed text-gold">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-body-muted text-[16px] font-light max-w-md pt-2">
                The most prestigious houses in the world communicate through
                their work, not their founders. Maison Vereen was built in that
                tradition.
              </p>
            </div>
          </div>
        </section>

        {/* ── Narrative ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 border-t border-white/5">
          <div className="w-[90%] md:w-full max-w-3xl mx-auto space-y-8 text-body-muted text-[16px] font-light leading-[1.85] ">
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

        {/* ── 01 & 02 pillars — bordered cards, copy above / image below ── */}
        <section className="relative bg-[#060506] py-16 md:py-24">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              {(
                [
                  {
                    num: "01",
                    title: "Conviction Over Credentials",
                    body: "The most prestigious houses in the world are remembered for their work, not their founders' faces. Maison Vereen follows that same discipline deliberately — the House, not the individual, is what is being built to last.",
                    image: "/chemist.webp",
                    alt: "Craft archives — journal and tools of the House",
                  },
                  {
                    num: "02",
                    title: "Building to Outlive Her",
                    body: "Every decision made today — from Edition I's scarcity to the Founding Registry's careful structure — is made with one question in mind: will this still make sense in a century, under someone else's stewardship? If the answer is no, it does not happen.",
                    image: "/timesand.webp",
                    alt: "Hourglass — building for a century",
                  },
                ] as const
              ).map((card) => (
                <article
                  key={card.num}
                  className="flex flex-col gap-6 md:gap-7 border border-[#EDE8DE]/12 bg-[#0A0A0C] p-5 sm:p-6 md:p-8"
                >
                  <div className="flex flex-col gap-4 md:gap-5 flex-1">
                    <span className="font-serif text-lg md:text-xl text-gold font-light">
                      {card.num}
                    </span>
                    <h2
                      className="font-serif font-light text-[#F2EDE4] leading-snug"
                      style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.15rem)" }}
                    >
                      {card.title}
                    </h2>
                    <p className="text-base text-body-muted font-light leading-[1.85]">
                      {card.body}
                    </p>
                  </div>

                  <div className="relative aspect-16/10 w-full overflow-hidden border border-gold/25">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 90vw, 45vw"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote + dual CTA cards ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 w-[90%] md:w-full max-w-6xl mx-auto space-y-12 md:space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <span
                className="font-serif text-gold block leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                &ldquo;
              </span>
              <h2
                className="font-serif font-light text-gold leading-snug"
                style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)" }}
              >
                Conviction explains why the House exists.
                <br className="hidden sm:block" />
                What follows explains why it could only ever look like this.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              <article className="flex flex-col gap-6 md:gap-7 border border-[#EDE8DE]/12 bg-[#0A0A0C] p-5 sm:p-6 md:p-8">
                <div className="relative aspect-16/10 w-full overflow-hidden border border-gold/35">
                  <Image
                    src="/privateacquisition.webp"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
                <p className="font-sans text-sm md:text-base font-light leading-relaxed text-body-muted">
                  Discover what sets Maison Vereen apart and why nothing here is
                  ordinary.
                </p>
                <Link
                  href="/the-difference"
                  className="inline-flex w-full items-center justify-between gap-3 bg-gold hover:bg-gold-light text-[#060506] px-5 sm:px-6 py-3.5 text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-colors"
                >
                  See What Makes the House Different
                  <ArrowIcon />
                </Link>
              </article>

              <article className="flex flex-col justify-between gap-10 md:gap-14 border border-[#EDE8DE]/12 bg-[#0A0A0C] p-5 sm:p-6 md:p-8 min-h-0 lg:min-h-full">
                <p className="font-sans text-sm md:text-base font-light leading-relaxed text-body-muted">
                  For those who feel aligned with the mission and want to
                  contribute to its legacy.
                </p>
                <Link
                  href="/apply"
                  className="inline-flex w-full items-center justify-between gap-3 border border-gold text-gold hover:bg-gold/10 px-5 sm:px-6 py-3.5 text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-medium transition-colors"
                >
                  Apply for a Position
                  <ArrowIcon />
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
