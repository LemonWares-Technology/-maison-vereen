"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MEMBERSHIP_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "REGISTRY", href: "/the-first-250" },
  { label: "CONTACT", href: "/contact" },
];

const PILLARS = [
  {
    title: "Recognition",
    body: "You are known by the House, not treated as a number.",
    icon: "key" as const,
  },
  {
    title: "Priority",
    body: "You are considered first for what the House creates next.",
    icon: "gift" as const,
  },
  {
    title: "Access",
    body: "You receive access that is not available to the public.",
    icon: "quill" as const,
  },
  {
    title: "Relationship",
    body: "You remain connected for as long as the relationship is mutual.",
    icon: "shield" as const,
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

function KeyIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <circle cx="13" cy="14" r="6" />
      <path
        d="M17.5 18.5L28 29M24 25l3 3M22 27l2.5 2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <rect x="7" y="16" width="22" height="14" rx="1" />
      <path
        d="M7 16h22M18 16v14M12 16c0-3 2-5 4.5-5S18 14 18 16c0-2 1.5-5 4-5s4.5 2 4.5 5"
        strokeLinejoin="round"
      />
      <path d="M7 21h22" strokeLinecap="round" />
    </svg>
  );
}

function QuillIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M8 28c6-2 12-8 18-20 0 0-2 8-8 14-4 4-8 5-10 6z"
        strokeLinejoin="round"
      />
      <path d="M8 28l-2 4M22 10c2-3 5-5 8-6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldMarkIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M18 4l11 4v9c0 7.5-5 13-11 15-6-2-11-7.5-11-15V8l11-4z"
        strokeLinejoin="round"
      />
      <text
        x="18"
        y="21"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="10"
        fontFamily="Georgia, serif"
      >
        M
      </text>
    </svg>
  );
}

function PillarIcon({ type }: { type: "key" | "gift" | "quill" | "shield" }) {
  if (type === "key") return <KeyIcon />;
  if (type === "gift") return <GiftIcon />;
  if (type === "quill") return <QuillIcon />;
  return <ShieldMarkIcon />;
}

export default function MembershipPage() {

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE]">
      <Header navItems={MEMBERSHIP_NAV} />

      {/* Hero — full-bleed on desktop; stacked mobile fix */}
      <section className="relative min-h-screen overflow-hidden bg-[#060506]">
        {/* Mobile: image under header, copy on solid dark */}
        <div className="lg:hidden flex flex-col min-h-screen">
          <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
            <Image
              src="/images/house-section-image.webp"
              alt=""
              fill
              priority
              className="object-cover object-[70%_center]"
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
              <span className="font-sans text-sm text-[#EDE8DE] tracking-wide">
                10
              </span>
              <div className="w-8 h-px bg-gold" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
                Membership &amp; Access
              </span>
              <h1
                className="font-serif font-light text-[#EDE8DE] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 5.2vw, 4rem)" }}
              >
                Membership Is Not a Tier.
                <br />
                It Is a Relationship.
              </h1>
              <div className="w-8 h-px bg-gold" />
              <p className="font-serif text-base sm:text-lg font-medium leading-[1.85] text-[#EDE8DE] max-w-md">
                Membership in Maison Vereen extends well beyond a single
                acquisition — it is an ongoing relationship between the House and
                the people who help compose its history.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: full-bleed photo with left text fade */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none">
          <Image
            src="/images/house-section-image.webp"
            alt=""
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-40% to-transparent to-75%" />
          <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/25" />
        </div>

        <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start gap-5 md:gap-6">
            <span className="font-sans text-sm md:text-base text-[#EDE8DE] tracking-wide">
              10
            </span>
            <div className="w-8 h-px bg-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Membership &amp; Access
            </span>
            <h1
              className="font-serif font-light text-[#EDE8DE] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 4rem)" }}
            >
              Membership Is Not a Tier.
              <br />
              It Is a Relationship.
            </h1>
            <div className="w-8 h-px bg-gold" />
            <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] max-w-md">
              Membership in Maison Vereen extends well beyond a single
              acquisition — it is an ongoing relationship between the House and
              the people who help compose its history.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy statement */}
      <section className="relative bg-[#060506] py-20 md:py-28">
        <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-12 md:space-y-16">
          <div className="flex justify-center text-gold">
            <ShieldMarkIcon />
          </div>

          <p className="font-serif font-normal text-center text-[#F2EDE4] leading-[1.7] max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl">
            For most luxury brands, the relationship with a customer effectively
            ends at the point of sale. Maison Vereen was built on the opposite
            premise — that acquiring a piece of the House&apos;s work is the
            beginning of a relationship, not its conclusion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
            <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] px-2 md:px-8 md:pr-10 pb-8 md:pb-0 border-b md:border-b-0 md:border-r border-gold/30">
              Founding Registry members and Edition I owners are afforded a
              continuing place within the House: priority access to future
              editions before they are announced publicly, private experiences
              extended only to members, and a direct line of communication with
              the House that does not exist for the general public.
            </p>
            <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] px-2 md:px-8 md:pl-10 pt-8 md:pt-0">
              This page sets expectations honestly. Membership does not entitle
              anyone to a future bottle, and the House makes no promises it
              cannot keep. What it does promise is recognition, priority, and
              access — extended for as long as the relationship is held in good
              faith on both sides.
            </p>
          </div>
        </div>
      </section>

      {/* 01 Priority Access */}
      <section className="relative bg-[#060506] border-t border-gold/15">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-100 lg:min-h-130 overflow-hidden">
            <Image
              src="/images/house-section-image.webp"
              alt="Private release invitation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 px-8 py-16 md:px-12 lg:px-16 xl:px-20">
            <span className="font-sans text-sm text-gold tracking-wide">
              01
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#EDE8DE] leading-tight">
              Priority Access &amp; Future Editions
            </h2>
            <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] max-w-md">
              Members are informed of future editions, collaborations, and
              limited releases before any public announcement is made — a
              courtesy extended in recognition of their early conviction in the
              House.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Private Experiences */}
      <section className="relative bg-[#060506] border-t border-gold/15">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-100 lg:min-h-130 overflow-hidden">
            <Image
              src="/images/house-section-image.webp"
              alt="Private gathering"
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 px-8 py-16 md:px-12 lg:px-16 xl:px-20">
            <span className="font-sans text-sm text-gold tracking-wide">
              02
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#EDE8DE] leading-tight">
              Private Experiences &amp; Invitations
            </h2>
            <p className="font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE] max-w-md">
              From time to time, the House extends private invitations to
              members — tastings, workshops, and gatherings designed to deepen
              the relationship between Maison Vereen and the people who compose
              its founding history.
            </p>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="relative bg-[#060506] py-20 md:py-28 border-t border-gold/15">
        <div className="w-[95%] md:w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`flex flex-col items-center text-center gap-5 px-6 py-10 border-gold/30 ${
                  i > 0 ? "border-t sm:border-t-0" : ""
                } ${i % 2 === 1 ? "sm:border-l" : ""} ${
                  i >= 2 ? "sm:border-t lg:border-t-0" : ""
                } ${i > 0 ? "lg:border-l" : ""}`}
              >
                <div className="text-gold">
                  <PillarIcon type={pillar.icon} />
                </div>
                <h3 className="font-sans text-xs uppercase tracking-[0.28em] text-gold font-medium">
                  {pillar.title}
                </h3>
                <p className="font-serif text-lg font-medium leading-relaxed text-[#EDE8DE] max-w-60">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-[#060506] py-16 md:py-24 overflow-hidden border-t border-gold/15">
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image
            src="/logo-mark.webp"
            alt=""
            width={180}
            height={140}
            className="w-40 h-auto"
          />
        </div>
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image
            src="/logo-mark.webp"
            alt=""
            width={180}
            height={140}
            className="w-40 h-auto"
          />
        </div>

        <div className="relative w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-xl md:text-3xl lg:text-[2.5rem] font-light text-[#F2EDE4] leading-snug">
            Membership is one path into the House. The Signature Collection is
            another — open, permanent, and entirely its own.
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
              href="/fragrance-library"
              className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
            >
              Explore the Signature Collection
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer navItems={MEMBERSHIP_NAV} />
    </div>
  );
}
