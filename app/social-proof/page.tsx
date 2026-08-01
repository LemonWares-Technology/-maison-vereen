"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "SOCIAL PROOF", href: "/social-proof" },
  { label: "CONTACT", href: "/contact" },
];

const PRESS_LOGOS = [
  "VOGUE",
  "GQ",
  "HIGHSNOBIETY",
  "Forbes",
  "BAZAAR",
  "Robb Report",
  "BUSINESS OF FASHION",
];

const REFLECTIONS = [
  {
    quote:
      "Maison Vereen is not just a Fragrance House. It feels like becoming part of something that will outlive us.",
    author: "Adekunle O.",
    country: "Nigeria",
    bottle: "Bottle No. 047",
  },
  {
    quote:
      "Every detail reflects intention. You can feel that nothing here was rushed.",
    author: "Isabelle R.",
    country: "United Kingdom",
    bottle: "Bottle No. 082",
  },
  {
    quote:
      "Being part of the Founding Registry is an honour I will always remember.",
    author: "Marcus T.",
    country: "Canada",
    bottle: "Bottle No. 126",
  },
];

const PRESS_ROWS = [
  {
    date: "MAY 2024",
    type: "FEATURE",
    title: "Maison Vereen Introduces a New Standard of African Luxury Perfumery.",
  },
  {
    date: "JUNE 2024",
    type: "INTERVIEW",
    title: "In Conversation with Maison Vereen: Craft, Legacy & The Long View.",
  },
  {
    date: "JULY 2024",
    type: "MENTION",
    title: "Recognised by Industry Leaders for Craftsmanship and Vision.",
  },
];

const MILESTONES = [
  {
    year: "2024",
    title: "The Foundation",
    body: "Maison Vereen is established with a clear vision and uncompromising standards.",
  },
  {
    year: "2024",
    title: "Edition I",
    body: "The first edition is released in a strictly limited quantity of 250 bottles.",
  },
  {
    year: "2024+",
    title: "Founding Registry",
    body: "The House opens the Founding Registry, inviting the first members.",
  },
  {
    year: "2025+",
    title: "Signature Collection",
    body: "The permanent collection of Maison Vereen fragrances is introduced.",
  },
  {
    year: "",
    title: "The Journey Continues",
    body: "More chapters will be written, one deliberate decade at a time.",
  },
  {
    year: "",
    title: "A Century Ahead",
    body: "The House is built to outlast trends, seasons, and generations.",
    filled: true,
  },
];

const GALLERY = [
  {
    src: "/file_00000000520071f4915a7351029b1f7b.webp",
    alt: "Archival document and craft of the House",
  },
  {
    src: "/images/hero-city.jpg",
    alt: "City skyline through a Maison window",
  },
  {
    src: "/images/wax-seal.jpg",
    alt: "Gold wax seal of Maison Vereen",
  },
  {
    src: "/file_00000000a39471f4b5714dd0617de348.webp",
    alt: "Private Maison gathering",
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

export default function SocialProofPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
            <div className="hidden lg:block bg-[#060506]" />
            <div className="relative min-h-screen lg:min-h-0 overflow-hidden">
              <Image
                src="/file_00000000a39471f4b5714dd0617de348.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/75 to-[#060506]/45 lg:bg-none" />
              <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-58%" />
              <div className="absolute inset-0 hidden lg:block bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/30" />
            </div>
          </div>

          <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-36 md:pt-40 pb-20 min-h-screen flex items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-6 md:space-y-7">
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg md:text-xl text-gold">13</span>
                <div className="w-6 h-px bg-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  Social Proof
                </span>
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)" }}
              >
                Recognised by Those Who Know the Difference.
              </h1>

              <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] max-w-md">
                This page exists as a living, growing record of recognition —
                collector testimonials, press coverage, and milestones —
                documented as the House&apos;s history, not displayed as
                advertising.
              </p>
            </div>
          </div>
        </section>

        {/* ── Documentation statement ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5">
          <div className="w-[95%] md:w-full max-w-3xl mx-auto">
            <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] text-center">
              Maison Vereen&apos;s social proof is designed never to feel like
              reviews. Reviews are what consumers leave for products. What
              appears here is documentation — the accumulating record of a
              House&apos;s recognition by collectors, press, and partners over
              time. At launch, this page will carry placeholder structures,
              ready to be populated as recognition arrives organically. Nothing
              here will ever be fabricated or inflated; the page is built to grow
              honestly, even if that means starting quietly.
            </p>
          </div>
        </section>

        {/* ── 01 Reflections | 02 Press ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-white/15 gap-14 lg:gap-0">
              {/* 01 — three cards in a responsive row */}
              <div className="lg:pr-10 xl:pr-14 space-y-8 flex flex-col">
                <div className="space-y-4">
                  <span className="font-serif text-lg text-gold block">01</span>
                  <h2
                    className="font-serif font-light text-gold leading-snug"
                    style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.15rem)" }}
                  >
                    Collector &amp; Member Reflections
                  </h2>
                  <p className="font-sans text-sm md:text-base font-light leading-[1.85] text-[#EDE8DE]/85 max-w-md">
                    Reflections shared by Founding Registry members and
                    collectors, presented as quoted excerpts with name, country,
                    and (where relevant) bottle number — never as star ratings or
                    review widgets.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 w-full flex-1">
                  {REFLECTIONS.map((r) => (
                    <blockquote
                      key={r.bottle}
                      className="w-full min-w-0 h-full border border-white/20 grid grid-rows-[auto_1fr_auto] gap-y-4 px-4 py-5 sm:px-4 sm:py-6"
                    >
                      <span
                        className="font-serif text-gold leading-none"
                        style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}
                        aria-hidden
                      >
                        &ldquo;
                      </span>

                      <p className="font-serif text-sm sm:text-[0.9rem] lg:text-[0.95rem] font-medium leading-[1.7] text-[#EDE8DE] min-w-0">
                        {r.quote}
                        <span className="text-gold" aria-hidden>
                          &rdquo;
                        </span>
                      </p>

                      <footer className="space-y-2.5 pt-1">
                        <div className="w-6 h-px bg-gold/70" />
                        <cite className="not-italic font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-gold block leading-relaxed">
                          <span className="block">— {r.author}</span>
                          <span className="block">{r.country}</span>
                          <span className="block">{r.bottle}</span>
                        </cite>
                      </footer>
                    </blockquote>
                  ))}
                </div>

                <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold font-medium pt-1 inline-flex items-center gap-2">
                  More Reflections to Come
                  <ArrowIcon />
                </p>
              </div>

              {/* 02 — bordered horizontal rows */}
              <div className="lg:pl-10 xl:pl-14 space-y-8 flex flex-col border-t border-white/15 lg:border-t-0 pt-14 lg:pt-0">
                <div className="space-y-4">
                  <span className="font-serif text-lg text-gold block">02</span>
                  <h2
                    className="font-serif font-light text-gold leading-snug"
                    style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.15rem)" }}
                  >
                    Press, Editorial &amp; Milestones
                  </h2>
                  <p className="font-sans text-sm md:text-base font-light leading-[1.85] text-[#EDE8DE]/85 max-w-md">
                    A running record of press coverage, editorial features,
                    interviews, awards, notable events, and House milestones,
                    displayed chronologically as the unfolding record of Maison
                    Vereen&apos;s history.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 flex-1 content-start">
                  {PRESS_ROWS.map((p) => (
                    <article
                      key={p.title}
                      className="w-full border border-white/20 grid grid-cols-1 sm:grid-cols-[minmax(5.5rem,auto)_auto_minmax(0,1fr)_auto] gap-3 sm:gap-4 items-center px-4 py-4 sm:px-5 sm:py-5"
                    >
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#EDE8DE]/70 font-medium leading-relaxed">
                        {p.date} {p.type}
                      </span>

                      <div className="relative w-10 h-10 shrink-0 rounded-full border border-gold/45 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/logo-mark.webp"
                          alt=""
                          width={24}
                          height={20}
                          className="w-5 h-auto"
                        />
                      </div>

                      <h3 className="font-serif text-sm sm:text-base font-light text-[#EDE8DE] leading-snug min-w-0">
                        {p.title}
                      </h3>

                      <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-gold shrink-0 sm:justify-self-end">
                        Read More
                        <ArrowIcon />
                      </span>
                    </article>
                  ))}
                </div>

                <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold font-medium pt-1 inline-flex items-center gap-2">
                  More Coverage &amp; Milestones to Come
                  <ArrowIcon />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Editorial preview quote — responsive 3-col grid frame ── */}
        <section className="relative bg-[#060506] py-10 md:py-14">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="border border-gold/45 grid grid-cols-[minmax(2.5rem,auto)_minmax(0,1fr)_minmax(2.5rem,auto)] sm:grid-cols-[minmax(3.5rem,auto)_minmax(0,1fr)_minmax(3.5rem,auto)] md:grid-cols-[minmax(4.5rem,auto)_minmax(0,1fr)_minmax(4.5rem,auto)] items-center gap-x-2 sm:gap-x-4 md:gap-x-6 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-5 md:px-8">
              <span
                className="justify-self-center self-center font-serif text-gold leading-none select-none"
                style={{ fontSize: "clamp(2.75rem, 10vw, 7rem)" }}
                aria-hidden
              >
                &ldquo;
              </span>

              <div className="min-w-0 text-center space-y-4 sm:space-y-5 px-1 sm:px-4 md:px-8">
                <p
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.15rem, 2.6vw, 2.15rem)" }}
                >
                  Maison Vereen is crafting more than fragrances — it is shaping
                  a legacy with every decision.
                </p>
                <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-gold font-medium">
                  — Editorial Preview
                </p>
              </div>

              <span
                className="justify-self-center self-center font-serif text-gold leading-none select-none"
                style={{ fontSize: "clamp(2.75rem, 10vw, 7rem)" }}
                aria-hidden
              >
                &rdquo;
              </span>
            </div>
          </div>
        </section>

        {/* ── Press logos ── */}
        <section className="relative bg-[#060506] py-16 md:py-20 border-t border-white/5">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              <div className="w-8 h-px bg-gold mx-auto" />
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium block">
                Press &amp; Features
              </span>
              <p className="font-sans text-sm text-[#EDE8DE]/70">As seen in</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12 md:gap-x-14">
              {PRESS_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="font-serif text-sm sm:text-base tracking-[0.18em] text-[#EDE8DE]/55 hover:text-[#EDE8DE]/85 transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>

            <div
              className="flex items-center justify-center gap-2.5 pt-2"
              aria-hidden
            >
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === 1 ? "bg-gold" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── House milestones timeline ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5 overflow-hidden">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-12 md:space-y-14">
            <h2 className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-gold font-medium text-center">
              House Milestones (The Record Continues)
            </h2>

            {/* Desktop — 6-col grid with line through the nodes */}
            <div className="hidden lg:block relative">
              <div className="absolute left-[4%] right-[4%] top-22 h-px bg-gold/50" />
              <div className="grid grid-cols-6 gap-5">
                {MILESTONES.map((m) => (
                  <div
                    key={m.title}
                    className="relative flex flex-col items-center text-center gap-0"
                  >
                    <div className="min-h-18 flex flex-col items-center justify-end gap-1 pb-5">
                      <h3 className="font-sans text-xs uppercase tracking-[0.16em] text-gold font-medium leading-snug">
                        {m.year ? (
                          <>
                            {m.year}
                            <span className="mx-1.5 text-gold/50">|</span>
                          </>
                        ) : null}
                        {m.title}
                      </h3>
                    </div>

                    <div
                      className={`z-10 rounded-full border border-gold shrink-0 ${
                        m.filled
                          ? "w-4 h-4 bg-gold shadow-[0_0_12px_rgba(201,168,76,0.55)]"
                          : "w-3.5 h-3.5 bg-[#060506]"
                      }`}
                    />

                    <p className="font-serif text-sm font-light leading-[1.7] text-[#EDE8DE] pt-6 max-w-44">
                      {m.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile — vertical spine */}
            <div className="lg:hidden space-y-0 border-l border-gold/35 ml-2">
              {MILESTONES.map((m) => (
                <div key={m.title} className="relative pl-8 pb-10 last:pb-0">
                  <div
                    className={`absolute left-0 top-1.5 -translate-x-1/2 rounded-full border border-gold ${
                      m.filled
                        ? "w-3.5 h-3.5 bg-gold shadow-[0_0_10px_rgba(201,168,76,0.5)]"
                        : "w-3 h-3 bg-[#060506]"
                    }`}
                  />
                  <div className="space-y-2.5">
                    <h3 className="font-sans text-sm uppercase tracking-[0.18em] text-gold font-medium leading-snug">
                      {m.year ? (
                        <>
                          {m.year}
                          <span className="mx-1.5 text-gold/50">|</span>
                        </>
                      ) : null}
                      {m.title}
                    </h3>
                    <p className="font-serif text-base font-light leading-[1.7] text-[#EDE8DE]">
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="relative bg-[#060506] py-8 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((img) => (
              <div
                key={img.src}
                className="relative aspect-4/3 overflow-hidden bg-[#0A0A0C]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#060506_90%)]" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506]/70 via-transparent to-[#060506]/40" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing CTAs ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 border-t border-white/5">
          <div className="w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-10">
            <h2
              className="font-serif font-light text-[#F2EDE4] leading-snug"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)" }}
            >
              Recognition answers some questions. Practical ones remain — and
              deserve clear answers.
            </h2>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
              >
                Apply to the Founding Registry
                <ArrowIcon />
              </Link>
              <Link
                href="/faqs"
                className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
              >
                Read Frequently Asked Questions
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
