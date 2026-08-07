"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },

  { label: "CONTACT", href: "/contact" },
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

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── Hero — bottle melts into black ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: bottle under header, copy on solid dark */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/images/the-house-last.webp"
                alt="Maison Vereen Edition I bottle on black marble"
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
                  Discover Maison Vereen
                </span>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.1rem, 5vw, 4rem)" }}
                >
                  A House, Not a Brand.
                </h1>

                {/* <div className="w-10 h-px bg-gold" /> */}

                <p
                  className="font-serif font-light text-gold leading-snug"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
                >
                  Some houses sell scent. This one builds legacy.
                </p>

                <p className=" font-light leading-[1.85] text-body-muted max-w-md">
                  Maison Vereen exists to elevate fragrance into collectible art —
                  and to prove that a luxury house of true global standing can be
                  born in Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: bottle melts from the right */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute inset-0 left-[32%] xl:left-[28%]">
              <Image
                src="/images/the-house-last.webp"
                alt="Maison Vereen Edition I bottle on black marble"
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
              <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                Discover Maison Vereen
              </span>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                A House, Not a Brand.
              </h1>

              {/* <div className="w-10 h-px bg-gold" /> */}

              <p
                className="font-serif font-light text-gold leading-snug"
                style={{ fontSize: "clamp(1.15rem, 2vw, 1.45rem)" }}
              >
                Some houses sell scent. This one builds legacy.
              </p>

              <p className=" font-light leading-[1.85] text-body-muted max-w-md">
                Maison Vereen exists to elevate fragrance into collectible art —
                and to prove that a luxury house of true global standing can be
                born in Africa.
              </p>
            </div>
          </div>
        </section>

        {/* ── 01 cream ── */}
        <section className="relative bg-[#EDE8DE] text-[#2C2823]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-80 md:min-h-105 lg:min-h-full aspect-4/5 lg:aspect-auto overflow-hidden">
              <Image
                src="/images/house-section-image.webp"
                alt="Coastline light — the origin of the House"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex items-center px-8 sm:px-12 md:px-14 lg:px-16 py-16 md:py-20">
              <div className="space-y-8 max-w-xl">
                <div className="space-y-3">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light block">
                    01
                  </span>
                  {/* <div className="w-10 h-px bg-gold" /> */}
                </div>

                <div className="space-y-6 text-body-muted text-base  font-light leading-[1.85]">
                  <p>
                    Maison Vereen is a luxury maison built around two distinct
                    experiences: Edition I, the founding collector&apos;s
                    chapter limited to two hundred and fifty bottles, and the
                    Signature Collection, the House&apos;s permanent body of
                    artistic work. Both are expressions of the same conviction
                    — that fragrance, made without compromise, deserves to be
                    treated as art rather than inventory.
                  </p>
                  <p>
                    The House exists because a gap was left unfilled. Africa has
                    supplied the world&apos;s perfumers with some of their
                    rarest materials for generations, yet has never produced a
                    fragrance house the world recognised as a serious luxury
                    institution in its own right. Maison Vereen was founded to
                    close that gap — not by imitating the houses of Paris or
                    Geneva, but by holding itself to the same uncompromising
                    standard while remaining unmistakably of its own origin.
                  </p>
                  <p>
                    This is a long-term undertaking. Maison Vereen is not
                    building toward a season or a single collection. It is
                    building toward a century — a House whose name will mean,
                    decades from now, what the world&apos;s oldest maisons mean
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 / 03 bordered cards ── */}
        <section className="relative bg-[#060506] py-16 md:py-24">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              {(
                [
                  {
                    num: "02",
                    title: "What We Are",
                    paragraphs: [
                      "Maison Vereen is a fragrance house, not a fragrance brand — a distinction the House holds carefully. A brand sells a product range. A house builds a body of work, a philosophy, and a relationship with the people who choose to be part of it.",
                      "Every decision here, from the number of bottles in Edition I to the language used to describe a single note, is made in service of that distinction.",
                    ],
                    image: "/images/dark-architecture.webp",
                    alt: "",
                  },
                  {
                    num: "03",
                    title: "Why Fragrance Can Become Art",
                    paragraphs: [
                      "Wine, watches, and rare manuscripts are collected for scarcity, craftsmanship, provenance, and the story a single object carries forward.",
                      "Fragrance has rarely been built with the same discipline — most houses treat scent as renewable inventory rather than a finished work.",
                      "Maison Vereen treats every formulation, especially within Edition I, as a singular work: created once, documented permanently, and never diluted by repetition.",
                    ],
                    image: "/images/the-house-last.webp",
                    alt: "",
                  },
                ] as const
              ).map((card) => (
                <article
                  key={card.num}
                  className="flex flex-col gap-6 md:gap-7 border border-[#EDE8DE]/12 bg-[#0A0A0C] p-5 sm:p-6 md:p-8"
                >
                  <div className="flex flex-col gap-4 md:gap-5 flex-1">
                    <span className="font-serif text-xl text-gold font-light">
                      {card.num}
                    </span>
                    <h2
                      className="font-serif font-light text-[#F2EDE4] leading-snug"
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}
                    >
                      {card.title}
                    </h2>
                    <div className="space-y-4 font-sans text-[15px] md:text-base font-normal leading-[1.8] text-body-muted">
                      {card.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)} className="m-0">
                          {p}
                        </p>
                      ))}
                    </div>
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

        {/* ── Cream CTAs ── */}
        <section className="relative bg-[#EDE8DE] text-[#2C2823] overflow-hidden">
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.12] pointer-events-none hidden md:block">
            <Image
              src="/images/house-section-image.webp"
              alt=""
              fill
              className="object-cover object-left"
              sizes="50vw"
            />
          </div>

          <div className="relative w-[90%] md:w-full max-w-6xl mx-auto py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
              <div className="space-y-5 lg:pr-12 xl:pr-16">
                <h3
                  className="font-serif font-light text-[#2C2823] leading-snug"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
                >
                  Continue the journey.
                </h3>
                <p className="text-base md:text-lg font-light leading-[1.8] text-[#2C2823]/85 max-w-md">
                  Understanding what Maison Vereen is naturally raises a deeper
                  question — what does it believe?
                </p>
                <Link
                  href="/philosophy"
                  className="inline-flex items-center justify-center gap-3 border border-[#2C2823]/50 hover:border-[#2C2823] text-[#2C2823] px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
                >
                  Continue to the Philosophy
                  <ArrowIcon />
                </Link>
              </div>

              <div className="space-y-5 lg:pl-12 xl:pl-16 lg:border-l lg:border-[#2C2823]/20">
                <h3
                  className="font-serif font-light text-[#2C2823] leading-snug"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
                >
                  Ready to be part of the House?
                </h3>
                <p className="text-base md:text-lg font-light leading-[1.8] text-[#2C2823]/85 max-w-md">
                  Applications are by consideration. If you believe you have
                  what it takes to contribute to a legacy in the making, we
                  invite you to apply.
                </p>
                <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 border border-[#2C2823]/50 hover:border-[#2C2823] text-[#2C2823] px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
              >
                Apply for a Position
                  <ArrowIcon />
              </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
