"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/the-first-250" },
  { label: "CONTACT", href: "/contact" },
];

const PILLARS = [
  {
    title: "A House Is Being Built.",
    body: "You can be part of its beginning.",
    icon: "temple" as const,
  },
  {
    title: "Why 250 Will Never Grow.",
    body: "Two hundred and fifty bottles will never become two hundred and fifty-one.",
    icon: "twofifty" as const,
  },
  {
    title: "This Page Exists for a Reason.",
    body: "Because someone thought you should know first.",
    icon: "doc" as const,
  },
  {
    title: "Five Minutes Is Enough.",
    body: "To understand what Maison Vereen is — truly.",
    icon: "clock" as const,
  },
  {
    title: "History Does Not Wait.",
    body: "The question is not whether this will matter.",
    icon: "shield" as const,
  },
];

const DETAILS = [
  {
    title: "The House",
    body: "Maison Vereen is a luxury fragrance house founded in Lagos, built to the same uncompromising standard as the world's most respected maisons.",
    icon: "bottle" as const,
  },
  {
    title: "Edition I",
    body: "Its founding chapter, Edition I, is limited to two hundred and fifty individually numbered bottles — a number that will never increase, and an edition that will never be reissued.",
    icon: "twofifty" as const,
  },
  {
    title: "The Founding Registry",
    body: "Access to Edition I is not immediate. Interested individuals first apply to the Maison Vereen Founding Registry, the House's reviewed record of qualified applicants, capped at three hundred and fifty members. Acceptance into the Registry is the first recognition the House extends; private invitations to acquire one of the two hundred and fifty bottles follow afterward, issued individually as the House determines.",
    icon: "people" as const,
  },
  {
    title: "Why It Matters",
    body: "What makes Edition I historic is simple: it is first. The first founding chapter of a House built to prove that African origin and global luxury standard were never opposing ideas. Joining the Founding Registry now means being recognised at the beginning of that history, rather than reading about it afterward.",
    icon: "crown" as const,
  },
  {
    title: "The Next Step",
    bodyBefore:
      "Applying takes a matter of minutes, carries no financial obligation, and is read personally by the House. From here, the fuller story — the philosophy, the founder, the craftsmanship — is available at ",
    bodyAfter: " for anyone who wants to go deeper before applying.",
    icon: "key" as const,
    link: { href: "/", label: "maisonvereen.com" },
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

function CircleIcon({
  type,
}: {
  type:
    | "temple"
    | "twofifty"
    | "doc"
    | "clock"
    | "shield"
    | "bottle"
    | "people"
    | "crown"
    | "key";
}) {
  const wrap = (child: ReactNode) => (
    <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold shrink-0">
      {child}
    </div>
  );

  if (type === "twofifty") {
    return wrap(
      <span className="font-serif text-sm font-light leading-none">250</span>
    );
  }

  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 28 28",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.2,
    "aria-hidden": true as const,
  };

  if (type === "temple") {
    return wrap(
      <svg {...common}>
        <path d="M4 24h20M6 24V12l8-6 8 6v12" strokeLinejoin="round" />
        <path d="M10 24V14h8v10M10 18h8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "doc") {
    return wrap(
      <svg {...common}>
        <path d="M8 4h9l5 5v15H8V4z" strokeLinejoin="round" />
        <path d="M17 4v5h5M11 14h6M11 18h6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "clock") {
    return wrap(
      <svg {...common}>
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "shield") {
    return wrap(
      <svg {...common}>
        <path
          d="M14 3l9 3.5v7c0 6-4 10.5-9 12-5-1.5-9-6-9-12v-7L14 3z"
          strokeLinejoin="round"
        />
        <text
          x="14"
          y="17"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontSize="8"
          fontFamily="Georgia, serif"
        >
          M
        </text>
      </svg>
    );
  }
  if (type === "bottle") {
    return wrap(
      <svg {...common}>
        <path
          d="M11 4h6v3l2.5 2.5V23a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 018.5 23V9.5L11 7V4z"
          strokeLinejoin="round"
        />
        <path d="M11 7h6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "people") {
    return wrap(
      <svg {...common}>
        <circle cx="14" cy="9" r="3.5" />
        <circle cx="7" cy="11" r="2.5" />
        <circle cx="21" cy="11" r="2.5" />
        <path
          d="M6 22c0-3.5 3.2-5.5 8-5.5s8 2 8 5.5M4.5 20.5c.4-2 2-3.5 4.5-4M23.5 20.5c-.4-2-2-3.5-4.5-4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "crown") {
    return wrap(
      <svg {...common}>
        <path
          d="M5 20h18l-1.5-11-4.5 4L14 6l-3 7-4.5-4L5 20z"
          strokeLinejoin="round"
        />
        <path d="M6.5 20h15v2.5h-15z" strokeLinejoin="round" />
      </svg>
    );
  }
  // key
  return wrap(
    <svg {...common}>
      <circle cx="11" cy="12" r="5" />
      <path
        d="M15 16l8 8M20 24h3v-3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── Hero — bottle melts from the right, copy left ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: image under header, copy on solid dark */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/edition1perfumebottle.webp"
                alt="Maison Vereen Edition I bottle and founding chapter box"
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
              <div className="w-full max-w-lg space-y-7">
                <div className="space-y-3">
                  <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold font-medium leading-relaxed block">
                    You are seeing this before most people ever will.
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>
                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(1.85rem, 5vw, 3.1rem)" }}
                >
                  Africa&apos;s First Serious Luxury Fragrance House.{" "}
                  <span className="text-gold">
                    Two Hundred and Fifty Bottles.
                  </span>{" "}
                  One Founding Chapter.
                </h1>
                <p className="font-serif text-base font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                  This page exists for one reason: to explain, briefly and
                  completely, what Maison Vereen is — and why joining the
                  Founding Registry now matters.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: bottle right, text left — same melt pattern as other pages */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute inset-0 left-[34%] xl:left-[30%]">
              <Image
                src="/edition1perfumebottle.webp"
                alt="Maison Vereen Edition I bottle and founding chapter box"
                fill
                priority
                className="object-cover object-[center_28%]"
                sizes="70vw"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-28% via-[#060506]/95 via-42% to-transparent to-70%" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/35" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#060506]/55" />
          </div>

          <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-xl space-y-7 md:space-y-8">
              <div className="space-y-3">
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold font-medium leading-relaxed block max-w-sm">
                  You are seeing this before most people ever will.
                </span>
                <div className="w-10 h-px bg-gold" />
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(1.85rem, 4vw, 3.1rem)" }}
              >
                Africa&apos;s First Serious Luxury Fragrance House.{" "}
                <span className="text-gold">Two Hundred and Fifty Bottles.</span>{" "}
                One Founding Chapter.
              </h1>

              <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                This page exists for one reason: to explain, briefly and
                completely, what Maison Vereen is — and why joining the Founding
                Registry now matters.
              </p>
            </div>
          </div>
        </section>

        {/* ── Five pillars ── */}
        <section className="relative bg-[#060506] py-14 md:py-20 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className={`flex flex-col items-center text-center gap-4 lg:px-4 xl:px-5 ${
                    i > 0 ? "lg:border-l lg:border-gold/20" : ""
                  }`}
                >
                  <CircleIcon type={p.icon} />
                  <h2 className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold font-medium leading-snug">
                    {p.title}
                  </h2>
                  <p className="font-serif text-sm md:text-[0.95rem] font-light leading-[1.7] text-[#EDE8DE]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Detail list ── */}
        <section className="relative bg-[#060506] py-14 md:py-20 border-t border-gold/15">
          <div className="w-[95%] md:w-full max-w-3xl mx-auto space-y-12 md:space-y-14">
            {DETAILS.map((d) => (
              <article key={d.title} className="flex gap-5 md:gap-7 items-start">
                <CircleIcon type={d.icon} />
                <div className="space-y-2.5 min-w-0 pt-1">
                  <h3 className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold font-medium">
                    {d.title}
                  </h3>
                  <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                    {"body" in d ? (
                      d.body
                    ) : (
                      <>
                        {d.bodyBefore}
                        <Link
                          href={d.link.href}
                          className="text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-colors"
                        >
                          {d.link.label}
                        </Link>
                        {d.bodyAfter}
                      </>
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Why Now — dark textured background, hourglass bleeds left ── */}
        <section className="relative overflow-hidden border-y border-gold/20">
          {/* Dark marble texture background */}
          <Image
            src="/thunderrock.webp"
            alt=""
            fill
            className="object-cover object-center opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#060506]/80" />

          <div className="relative z-10 w-[95%] md:w-full max-w-6xl mx-auto py-14 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)_auto] gap-10 lg:gap-12 items-center">

              {/* Hourglass — full bleed on desktop, centred on mobile */}
              <div className="relative w-full aspect-square max-w-52 mx-auto lg:max-w-none overflow-hidden">
                <Image
                  src="/timesand.webp"
                  alt="Hourglass — the Founding Registry is finite"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 208px, 240px"
                />
                {/* Right-side melt into background on desktop */}
                <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-transparent via-transparent to-[#060506]/70" />
                <div className="absolute inset-0 hidden lg:block bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/40" />
              </div>

              {/* Text */}
              <div className="space-y-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <div className="space-y-2">
                  <div className="w-8 h-px bg-gold mx-auto lg:mx-0" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium block">
                    Why Now
                  </span>
                  <div className="w-8 h-px bg-gold mx-auto lg:mx-0" />
                </div>
                <h2
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.35rem, 2.8vw, 2rem)" }}
                >
                  The Founding Registry will close permanently once three
                  hundred and fifty applicants have been accepted.
                </h2>
                <p className="font-serif text-base font-light leading-[1.8] text-[#EDE8DE]/85">
                  There is no artificial countdown here — simply a real, finite
                  number that will eventually be reached.
                </p>
              </div>

              {/* 350 badge — number large, text below inside double ring */}
              <div className="mx-auto lg:mx-0 w-36 h-36 rounded-full border border-gold/60 flex items-center justify-center shrink-0">
                <div className="border border-gold/35 rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] flex flex-col items-center justify-center gap-1 text-center px-3">
                  <span
                    className="font-serif font-light text-gold leading-none"
                    style={{ fontSize: "2.6rem" }}
                  >
                    350
                  </span>
                  <span className="font-sans text-[8px] uppercase tracking-[0.18em] text-gold font-medium leading-snug">
                    Founding
                    <br />
                    Positions
                    <br />
                    Maximum
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative bg-[#060506] py-16 md:py-24">
          <div className="w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-10">
            <h2
              className="font-serif font-light text-[#F2EDE4] leading-snug"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              This is your invitation to the beginning.
              <br />
              The choice is yours.
            </h2>

            <div className="w-8 h-px bg-gold mx-auto" />

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-center gap-5">
              <div className="space-y-3 flex-1 sm:max-w-xs">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-6 py-3.5 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-semibold transition-colors w-full"
                >
                  Apply to the Founding Registry
                  <ArrowIcon />
                </Link>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#EDE8DE]/55">
                  Join the Founding Registry
                </p>
              </div>

              <div className="space-y-3 flex-1 sm:max-w-xs">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium transition-colors w-full"
                >
                  Explore the Full Maison Vereen Website
                  <ArrowIcon />
                </Link>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#EDE8DE]/55">
                  Discover the Full Story
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Image
                src="/logo-mark.webp"
                alt="Maison Vereen"
                width={40}
                height={34}
                className="w-9 h-auto mx-auto"
              />
              <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-gold/70 block">
                Maison Vereen
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
