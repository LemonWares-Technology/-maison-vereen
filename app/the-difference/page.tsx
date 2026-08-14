"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE DIFFERENCE", href: "/the-difference" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "THE HOUSE", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

const HERO_POINTS = [
  "Most houses sell a bottle. This one offers a position.",
  "Ownership, not ecommerce.",
  "Built to be inherited, not consumed.",
  "Where other houses expand, this one closes.",
];

const PILLARS = [
  {
    no: "01",
    title: "Collectability & Limited Editions",
    body: "Edition I will never be remade, reissued, or extended. What is held by its two hundred and fifty owners is permanent in a way few luxury objects remain today — its value is not protected by marketing, but by the simple fact that it cannot be replicated.",
    src: "/edition1bottle.webp",
    alt: "Edition I bottle engraved 017 / 250",
  },
  {
    no: "02",
    title: "Emotional Ownership & Future Value",
    body: "Owning something from Maison Vereen's founding chapter is closer to holding an early work from an artist before the world recognised their name. The House cannot promise future value — no serious house ever should — but it can promise that nothing about Edition I will ever be diminished by overproduction.",
    src: "/certifcicateofauthenticity.webp",
    alt: "Maison Vereen box and archival documents",
  },
  {
    no: "03",
    title: "House Culture & Private Acquisition",
    body: "Acquisition at Maison Vereen happens through relationship — application, review, invitation — rather than instant purchase. This is not designed to create friction for its own sake. It exists because a House is assembled deliberately, member by member, the same way any institution intended to last is built.",
    src: "/privateacquisition.webp",
    alt: "Private Acquisition doorway plaque",
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

export default function TheDifferencePage() {
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
                src="/privateacquisition.webp"
                alt="Maison Vereen bottle on black marble"
                fill
                priority
                className="object-cover object-[center_30%]"
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
                  The Maison Vereen Difference
                </span>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.1rem, 5.5vw, 3.6rem)" }}
                >
                  The Difference Was Never the Scent Alone.
                </h1>

                <ul className="space-y-3.5">
                  {HERO_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-sans text-base font-normal leading-snug text-gold"
                    >
                      <span
                        className="mt-[0.7em] w-4 h-px bg-gold shrink-0"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="body-copy max-w-md">
                  Every serious luxury house has its own philosophy. This is the
                  architecture of Maison Vereen&apos;s — built around
                  collectability, emotional ownership, and a culture rather than
                  a catalogue.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: image on right, melts into black on left */}
          <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
            <div className="bg-[#060506]" />
            <div className="relative overflow-hidden">
              <Image
                src="/privateacquisition.webp"
                alt="Maison Vereen bottle on black marble"
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="55vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-60%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/35" />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#060506]/55" />
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex w-[90%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-7 md:space-y-8">
              <div className="space-y-3">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  The Maison Vereen Difference
                </span>
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.15rem, 4.6vw, 3.6rem)" }}
              >
                The Difference Was Never the Scent Alone.
              </h1>

              <ul className="space-y-3.5">
                {HERO_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-sans text-base font-normal leading-snug text-gold"
                  >
                    <span
                      className="mt-[0.7em] w-4 h-px bg-gold shrink-0"
                      aria-hidden
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="body-copy max-w-md">
                Every serious luxury house has its own philosophy. This is the
                architecture of Maison Vereen&apos;s — built around
                collectability, emotional ownership, and a culture rather than a
                catalogue.
              </p>
            </div>
          </div>
        </section>

        {/* ── Extended philosophy ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5">
          <div className="w-[90%] md:w-full max-w-3xl mx-auto">
            <div className="border-l border-gold/50 pl-6 sm:pl-10 md:pl-12 space-y-7 text-body-muted font-light">
              <p>
                Visitors who have considered other fragrance houses arrive here
                with a quiet, reasonable question: why is this different from
                everything else I have already looked at? The honest answer is
                rarely the scent alone — formulation skill exists at the highest
                level in many houses. The difference is the entire architecture
                surrounding the work.
              </p>
              <p>
                Maison Vereen was not built to maximise how many bottles leave
                the House. It was built around collectability — limited,
                numbered, never-repeated editions; an artistic process that
                treats each formulation as a finished work rather than a
                renewable product line; and a culture in which ownership is
                something granted through relationship, not simply purchased on
                demand.
              </p>
              <p>
                This is offered as description, not comparison. Maison Vereen
                has no interest in positioning itself against any other house.
                Its difference is simply stated, and left for each visitor to
                weigh for themselves.
              </p>
            </div>
          </div>
        </section>

        {/* ── 01 / 02 / 03 pillars ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {PILLARS.map((p) => (
                <article
                  key={p.no}
                  className="flex flex-col gap-5 border border-[#EDE8DE]/12 bg-[#0C0B0A] p-4 sm:p-5 md:p-6"
                >
                  <div className="relative aspect-4/3 overflow-hidden border border-gold/40">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 95vw, 33vw"
                    />
                  </div>

                  <div className="space-y-3 px-1 pb-1">
                    <span className="font-serif text-sm md:text-base text-gold font-light tracking-wide block">
                      {p.no}
                    </span>
                    <h2
                      className="font-serif font-light text-[#F2EDE4] leading-snug"
                      style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
                    >
                      {p.title}
                    </h2>
                    <p className="font-sans text-[13px] sm:text-[14px] font-normal leading-[1.7] text-body-muted">
                      {p.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dual CTAs ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5 overflow-hidden">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
              {/* Discover craft */}
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-stretch lg:pr-10 xl:pr-14 min-w-0">
                <div className="relative w-full sm:w-44 lg:w-48 shrink-0 aspect-3/4 sm:aspect-auto sm:min-h-56 overflow-hidden">
                  <Image
                    src="/privateacquisition.webp"
                    alt="Maison Vereen bottle on black marble"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 95vw, 200px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#060506]/70 via-transparent to-[#060506]/35" />
                  <div className="absolute inset-0 bg-linear-to-r from-[#060506]/40 via-transparent to-[#060506]/50" />
                </div>

                <div className="flex flex-col justify-center gap-6 flex-1 min-w-0">
                  <h3
                    className="font-serif font-light text-[#F2EDE4] leading-snug"
                    style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)" }}
                  >
                    Discover the craft behind every creation.
                  </h3>
                  <Link
                    href="/the-founder"
                    className="inline-flex w-full max-w-md items-center justify-between gap-3 bg-gold hover:bg-gold-light text-[#060506] px-5 py-3.5 text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.16em] uppercase font-semibold transition-colors text-left"
                  >
                    <span className="min-w-0 leading-snug">
                      Meet the Artisans Behind Every Fragrance
                    </span>
                    <span className="shrink-0" aria-hidden>
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Apply */}
              <div className="relative z-10 flex flex-col justify-center gap-6 lg:pl-10 xl:pl-14 lg:border-l lg:border-gold/25 min-w-0 bg-[#060506]">
                <h3
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)" }}
                >
                  Ready to be part of the Maison?
                </h3>
                <Link
                  href="/apply"
                  className="inline-flex w-full max-w-md items-center justify-between gap-3 border border-gold text-gold hover:bg-gold/10 px-5 py-3.5 text-[11px] tracking-[0.16em] uppercase font-semibold transition-colors"
                >
                  <span>Apply for a Position</span>
                  <ArrowIcon />
                </Link>
                <p className="body-copy max-w-sm">
                  Applications are by consideration. For those who believe in
                  what we build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing lead-in ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 border-t border-white/5">
          <div className="w-[90%] md:w-full max-w-3xl mx-auto text-center space-y-8">
            <Image
              src="/logo-mark.webp"
              alt="Maison Vereen"
              width={48}
              height={40}
              className="w-10 h-auto mx-auto"
            />

            <h2 className="font-serif text-2xl text-gold">
              Philosophy explains why the House exists. The individuals behind
              every bottle explain how it is made real.
            </h2>

            <Link
              href="/the-craft"
              className="inline-flex items-center justify-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-body-muted hover:text-gold transition-colors font-semibold"
            >
              Next: The Individual Behind Every Fragrance
              <CircleArrowIcon />
            </Link>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
