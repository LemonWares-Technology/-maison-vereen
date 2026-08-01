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
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FINAL INVITATION", href: "/final-invitation" },
  { label: "CONTACT", href: "/contact" },
];

const HERO_LINES = [
  "Two hundred and fifty bottles.",
  "Three hundred and fifty founding positions.",
  "One founding chapter that will not return.",
];

const PILLARS = [
  {
    title: "You have read this far. That means something.",
    body: "The people this House was built for tend to recognise themselves in its language quickly — not because the writing is persuasive, but because the idea behind it is something they have understood for a long time without quite having a name for it.",
    icon: "crown" as const,
  },
  {
    title:
      "Edition I. Two hundred and fifty individually numbered bottles,",
    body: "made from African materials that carry the depth of the continent that produced them, built with a master perfumer to a standard with no lower tier. Authenticated, documented, and permanent in a way most things sold in the world of luxury no longer are.",
    icon: "bottle" as const,
  },
  {
    title: "The Founding Registry is open. Applying takes a matter of minutes,",
    body: "carries no financial obligation, and is read by a person. The question, ultimately, is not whether Maison Vereen will matter. It is whether you will have been part of it when it does.",
    icon: "key" as const,
  },
];

const AFFIRMATIONS = [
  {
    title: "Free to Apply",
    body: "The application is free and carries no financial obligation.",
    icon: "tag" as const,
  },
  {
    title: "Personal Review",
    body: "Applications are reviewed personally within 24 to 48 hours.",
    icon: "clock" as const,
  },
  {
    title: "Private & Secure",
    body: "Your information is held privately and never shared.",
    icon: "lock" as const,
  },
  {
    title: "Questions Before Applying?",
    body: "hello@maisonvereen.com",
    href: "mailto:hello@maisonvereen.com",
    icon: "mail" as const,
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

function PillarIcon({ type }: { type: "crown" | "bottle" | "key" }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: "0 0 36 36",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.2,
    className: "text-gold",
    "aria-hidden": true as const,
  };

  if (type === "crown") {
    return (
      <svg {...common}>
        <path
          d="M6 26h24l-2-14-6 5-4-8-4 8-6-5-2 14z"
          strokeLinejoin="round"
        />
        <path d="M8 26h20v3H8z" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "bottle") {
    return (
      <svg {...common}>
        <path
          d="M14 6h8v4l3 3v16a2 2 0 01-2 2H13a2 2 0 01-2-2V13l3-3V6z"
          strokeLinejoin="round"
        />
        <path d="M14 10h8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="14" cy="14" r="6" />
      <path
        d="M18.5 18.5L28 28M24 28h4v-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AffirmIcon({
  type,
}: {
  type: "tag" | "clock" | "lock" | "mail";
}) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.2,
    className: "text-gold",
    "aria-hidden": true as const,
  };

  if (type === "tag") {
    return (
      <svg {...common}>
        <path
          d="M4 14V5h9l11 11-9 9L4 14z"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (type === "clock") {
    return (
      <svg {...common}>
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "lock") {
    return (
      <svg {...common}>
        <rect x="6" y="12" width="16" height="12" rx="1.5" />
        <path
          d="M10 12V9a4 4 0 018 0v3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="7" width="20" height="14" rx="1.5" />
      <path d="M4 10l10 6 10-6" strokeLinejoin="round" />
    </svg>
  );
}

export default function FinalInvitationPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} onOpenApply={openApply} />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 lg:left-[30%] xl:left-[26%]">
              <Image
                src="/file_000000005fc471f495c71bc758a16ffc.webp"
                alt="Maison Vereen Edition I bottle, box, and sealed correspondence"
                fill
                priority
                className="object-cover object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] from-15% via-[#060506]/85 via-45% to-[#060506]/55 lg:hidden" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#060506] from-26% via-[#060506]/95 via-40% to-transparent to-68%" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/40" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-b from-transparent via-transparent to-[#060506]/50" />
          </div>

          <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-36 md:pt-40 pb-20 min-h-screen flex items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-7 md:space-y-8">
              <div className="space-y-3">
                <span className="font-serif text-lg md:text-xl text-gold block">
                  16
                </span>
                <div className="w-10 h-px bg-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  Final Invitation
                </span>
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.15rem, 4.6vw, 3.6rem)" }}
              >
                The Founding Chapter Closes When the Last Position Does.
              </h1>

              <div className="w-10 h-px bg-gold" />

              <ul className="space-y-3">
                {HERO_LINES.map((line) => (
                  <li
                    key={line}
                    className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#EDE8DE] font-medium leading-relaxed"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Three pillars ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/25">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className={`flex flex-col gap-5 md:px-8 lg:px-10 ${
                    i > 0 ? "md:border-l md:border-gold/25" : ""
                  }`}
                >
                  <PillarIcon type={p.icon} />
                  <h2
                    className="font-serif font-light text-[#F2EDE4] leading-snug"
                    style={{ fontSize: "clamp(1.15rem, 2vw, 1.4rem)" }}
                  >
                    {p.title}
                  </h2>
                  <p className="font-serif text-base font-light leading-[1.85] text-[#EDE8DE]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Invitation frame ── */}
        <section className="relative bg-[#060506] py-16 md:py-24">
          <div className="w-[95%] md:w-full max-w-5xl mx-auto">
            <div className="relative border border-gold/45 px-6 sm:px-10 md:px-16 py-14 md:py-20 text-center">
              {/* Corner accents */}
              <span
                className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"
                aria-hidden
              />
              <span
                className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"
                aria-hidden
              />
              <span
                className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"
                aria-hidden
              />
              <span
                className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"
                aria-hidden
              />
              <span
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gold/80"
                aria-hidden
              />

              <div className="space-y-8 max-w-3xl mx-auto">
                <Image
                  src="/logo-mark.webp"
                  alt="Maison Vereen"
                  width={56}
                  height={48}
                  className="w-12 h-auto mx-auto"
                />

                <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium block">
                  The Invitation Is Extended.
                </span>

                <h2
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  The choice, as always, is yours.
                </h2>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={openApply}
                    className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-6 py-3.5 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-semibold transition-colors text-center"
                  >
                    Apply to the Maison Vereen Founding Registry
                    <ArrowIcon />
                  </button>
                  <Link
                    href="/fragrance-library"
                    className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium transition-colors text-center"
                  >
                    Discover the Signature Collection
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing affirmations ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-12 md:space-y-14">
            <div className="text-center space-y-3">
              <h2 className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                Closing Affirmations
              </h2>
              <div className="w-10 h-px bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
              {AFFIRMATIONS.map((a, i) => (
                <div
                  key={a.title}
                  className={`flex flex-col items-center text-center gap-4 lg:px-6 ${
                    i > 0 ? "lg:border-l lg:border-gold/20" : ""
                  }`}
                >
                  <AffirmIcon type={a.icon} />
                  <h3 className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold font-medium">
                    {a.title}
                  </h3>
                  {a.href ? (
                    <a
                      href={a.href}
                      className="font-serif text-base font-light text-gold hover:text-gold-light transition-colors"
                    >
                      {a.body}
                    </a>
                  ) : (
                    <p className="font-serif text-base font-light leading-[1.75] text-[#EDE8DE]">
                      {a.body}
                    </p>
                  )}
                </div>
              ))}
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
