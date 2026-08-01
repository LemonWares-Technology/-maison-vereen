"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GROUP_1_QUESTIONS = [
  {
    num: "1",
    q: "What exactly is Edition I and why are there only 250 bottles?",
    a: "Edition I is the founding chapter of Maison Vereen — two hundred and fifty individually numbered bottles, each authenticated and documented, produced once and never repeated.",
  },
  {
    num: "2",
    q: "How does the bottle numbering work?",
    a: "Numbers are assigned in the order applicants are formally accepted into the Founding Registry — meaning a bottle's number reflects not when it was purchased, but when its owner was recognised by the House.",
  },
  {
    num: "3",
    q: "What is the Founding Registry?",
    a: "The Maison Vereen Founding Registry is the House's official record of qualified applicants — the foundation from which Edition I's two hundred and fifty owners will ultimately be invited.",
  },
  {
    num: "4",
    q: "How are applications reviewed?",
    a: "Applications are read individually by a member of the House — never processed automatically.",
  },
  {
    num: "5",
    q: "What happens when 350 accepted members is reached?",
    a: "Once 350 applicants have been accepted, the Founding Registry closes permanently. No further applications will be reviewed.",
  },
  {
    num: "6",
    q: "What happens after applications close?",
    a: "Invitations to acquire are issued privately and individually as the House determines, in the order reflected by each member's assigned number.",
  },
  {
    num: "7",
    q: "How and when are invitations to acquire Edition I issued?",
    a: "Invitations are sent via private correspondence following application review and acceptance.",
  },
  {
    num: "8",
    q: "Can I still buy Edition I if I'm not in the Founding Registry?",
    a: "No. Edition I is available exclusively through the Founding Registry invitation process.",
  },
  {
    num: "9",
    q: "Is the Founding Registry a guarantee that I will be able to purchase Edition I?",
    a: "No. The Registry accepts up to 350 members for 250 bottles, ensuring carefully considered allocation.",
  },
  {
    num: "10",
    q: "Can I transfer or sell my invitation or bottle?",
    a: "Ownership positions and invitations are non-transferable to preserve the integrity of the founding chapter.",
  },
];

const GROUP_2_QUESTIONS = [
  {
    num: "11",
    q: "What does membership in Maison Vereen include?",
    a: "Founding Registry members receive priority access to future editions, private correspondence, and direct concierge access.",
  },
  {
    num: "12",
    q: "How is the Signature Collection different from Edition I?",
    a: "Where Edition I is finite by design, the Signature Collection is the House's enduring, permanent body of work.",
  },
  {
    num: "13",
    q: "How do I purchase a Signature Collection fragrance?",
    a: "Acquisition happens through a personal conversation with a House concierge, rather than an automated checkout.",
  },
  {
    num: "14",
    q: "Do you ship internationally?",
    a: "Yes. Maison Vereen ships globally via dedicated insured luxury freight.",
  },
  {
    num: "15",
    q: "Are there countries you do not ship to?",
    a: "Specific shipping arrangements are confirmed during concierge consultation.",
  },
  {
    num: "16",
    q: "How is authenticity verified?",
    a: "Every bottle includes a signed, security-printed certificate of authenticity with matching serial records.",
  },
  {
    num: "17",
    q: "Why doesn't Maison Vereen sell on marketplaces or through retailers?",
    a: "To protect provenance, pricing integrity, and direct relationships with every member.",
  },
  {
    num: "18",
    q: "What is the House's pricing philosophy?",
    a: "Pricing reflects uncompromising raw material quality, scarcity, and permanent archival record-keeping.",
  },
  {
    num: "19",
    q: "Will there be future limited editions after Edition I?",
    a: "Yes. Future limited chapters will be announced first to existing founding members.",
  },
  {
    num: "20",
    q: "How can I contact the House directly if my question isn't answered here?",
    a: "You can reach out via WhatsApp concierge or by emailing concierge@maisonvereen.com directly.",
  },
];

const FAQ_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQS", href: "/faqs" },
  { label: "CONTACT", href: "/contact" },
];

const PILLARS = [
  {
    title: "Direct Answers",
    lines: ["No ambiguity.", "No corporate filler."],
    icon: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
        aria-hidden
      >
        {/* Tall heraldic shield + single horizontal bar */}
        <path d="M36 8L58 16.5v18.5c0 14.5-9.2 24.2-22 29-12.8-4.8-22-14.5-22-29V16.5L36 8z" />
        <path d="M20 32h32" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Practical Clarity",
    lines: ["The details that matter,", "explained properly."],
    icon: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {/* Ornate skeleton key, angled */}
        <circle cx="24" cy="24" r="11" />
        <circle cx="24" cy="24" r="5" />
        <path d="M32.5 31.5L58 57" />
        <path d="M48 47l6 6M44.5 53.5l3.5 3.5M53.5 41.5l3.5 3.5" />
        <path d="M52 51h8M55 48v8" />
      </svg>
    ),
  },
  {
    title: "House Perspective",
    lines: ["Answers in the voice", "of Maison Vereen."],
    icon: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
        aria-hidden
      >
        {/* Open book with page lines */}
        <path d="M36 18C30 13.5 22.5 11 14 11v42c8.5 0 16 2.5 22 7 6-4.5 13.5-7 22-7V11c-8.5 0-16 2.5-22 7z" />
        <path d="M36 18v42" strokeLinecap="round" />
        <path d="M20 24h10M20 31h10M20 38h8" strokeLinecap="round" opacity="0.7" />
        <path d="M42 24h10M42 31h10M42 38h8" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Total Transparency",
    lines: ["Nothing hidden.", "Nothing exaggerated."],
    icon: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        aria-hidden
      >
        {/* Decorative wax-seal crest with M */}
        <circle cx="36" cy="36" r="26" />
        <circle cx="36" cy="36" r="20" />
        {/* Scalloped inner ring hints */}
        <circle cx="36" cy="36" r="23" strokeDasharray="2.2 3.4" opacity="0.55" />
        <text
          x="36"
          y="42"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="22"
          fontWeight="500"
        >
          M
        </text>
      </svg>
    ),
  },
];

function AccordionColumn({
  index,
  title,
  description,
  items,
  openId,
  onToggle,
  callout,
}: {
  index: string;
  title: string;
  description: string;
  items: { num: string; q: string; a: string }[];
  openId: string | null;
  onToggle: (num: string) => void;
  callout: {
    image: string;
    imageAlt: string;
    quote: string;
    body: string;
  };
}) {
  return (
    <div className="space-y-5">
      <div className="border border-gold/35 bg-[#0C0B0A] p-6 sm:p-8 space-y-8">
        <div className="space-y-3">
          <span className="font-serif text-3xl md:text-4xl text-gold font-light block leading-none">
            {index}
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-light text-gold leading-snug">
            {title}
          </h2>
          <p className="font-sans text-sm text-[#EDE8DE]/85 font-light leading-relaxed">
            {description}
          </p>
        </div>

        <div className="border-t border-gold/30">
          {items.map((item) => {
            const isOpen = openId === item.num;
            return (
              <div key={item.num} className="border-b border-gold/30">
                <button
                  type="button"
                  onClick={() => onToggle(item.num)}
                  className="w-full flex items-start justify-between gap-4 py-4.5 sm:py-5 text-left group"
                >
                  <span className="font-serif text-[15px] sm:text-base md:text-[17px] font-light text-[#F2EDE4] leading-snug group-hover:text-gold transition-colors">
                    <span className="text-gold mr-3 tabular-nums not-italic">
                      {item.num}
                    </span>
                    {item.q}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-gold shrink-0 mt-1.5"
                    aria-hidden
                  >
                    {isOpen ? (
                      <path d="M2 7h10" strokeLinecap="round" />
                    ) : (
                      <path d="M7 2v10M2 7h10" strokeLinecap="round" />
                    )}
                  </svg>
                </button>
                {isOpen && (
                  <p className="font-sans text-sm text-[#EDE8DE]/90 font-light leading-relaxed pb-5 pl-8">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border border-gold/35 bg-[#0C0B0A] p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden">
          <Image
            src={callout.image}
            alt={callout.imageAlt}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <div className="space-y-2 min-w-0">
          <p className="font-serif text-sm sm:text-base text-gold font-light leading-snug">
            &ldquo;{callout.quote}&rdquo;
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#EDE8DE]/80 font-light leading-relaxed">
            {callout.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [openGroup1, setOpenGroup1] = useState<string | null>(null);
  const [openGroup2, setOpenGroup2] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE]">
      <Header navItems={FAQ_NAV} />

      {/* Two-panel hero */}
      <section className="relative min-h-screen bg-[#060506]">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
          <div className="hidden lg:block bg-[#060506]" />
          <div className="relative min-h-screen lg:min-h-0 overflow-hidden">
            <Image
              src="/file_00000000a39471f4b5714dd0617de348.webp"
              alt=""
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/70 to-[#060506]/40 lg:bg-none" />
            <div className="absolute inset-0 hidden lg:block bg-linear-to-r from-[#060506] from-0% via-[#060506]/85 via-25% to-transparent to-55%" />
          </div>
        </div>

        <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto pt-36 md:pt-40 pb-20 min-h-screen flex items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start gap-5 md:gap-6">
            <span className="font-sans text-sm md:text-base text-[#EDE8DE] tracking-wide">
              14
            </span>
            <div className="w-8 h-px bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
              Frequently Asked Questions
            </span>
            <h1
              className="font-serif font-light text-[#EDE8DE] leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}
            >
              Everything You
              <br />
              Would Ask,
              <br />
              Answered Directly.
            </h1>
            <div className="w-8 h-px bg-gold" />
            <p className="font-sans text-sm md:text-base font-light leading-[1.85] text-[#EDE8DE] max-w-md">
              Twenty questions, answered in the unhurried, confident voice of
              the House — designed to dissolve objection and deepen
              understanding at once.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy + pillars */}
      <section className="relative bg-[#060506] py-20 md:py-28">
        <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-16 md:space-y-20">
          <p className="font-serif font-light text-center text-[#F2EDE4] leading-[1.7] max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl">
            This page exists so that no serious applicant is left with an
            unanswered practical question before applying. Each answer is written
            in the House&apos;s own voice — confident, direct, and unhurried —
            never defensive, never evasive.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`flex flex-col items-center text-center gap-6 text-gold px-4 sm:px-6 py-8 ${
                  i % 2 === 1 ? "border-l border-gold/30" : ""
                } ${i >= 2 ? "border-t border-gold/30 lg:border-t-0" : ""} ${
                  i > 0 ? "lg:border-l lg:border-gold/30" : ""
                }`}
              >
                <div className="text-gold scale-100 sm:scale-110">{pillar.icon}</div>
                <div className="space-y-2">
                  <p className="font-sans text-xs uppercase tracking-[0.28em] font-medium text-gold">
                    {pillar.title}
                  </p>
                  {pillar.lines.map((line) => (
                    <p
                      key={line}
                      className="font-sans text-xs sm:text-sm text-[#EDE8DE]/85 font-light leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column FAQ accordions + callouts */}
      <section className="relative bg-[#060506] pb-16 md:pb-20">
        <div className="w-[95%] md:w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <AccordionColumn
            index="01"
            title="Edition I & The Founding Registry"
            description="Questions about Edition I, the Founding Registry, and the path to becoming part of the House's founding chapter."
            items={GROUP_1_QUESTIONS}
            openId={openGroup1}
            onToggle={(num) =>
              setOpenGroup1((prev) => (prev === num ? null : num))
            }
            callout={{
              image: "/file_000000005fc471f495c71bc758a16ffc.webp",
              imageAlt: "Wax seal correspondence",
              quote: "The registry is not a queue. It is a circle of recognition.",
              body: "Every accepted member is chosen because the House believes in who they are and what they represent — not because they were first.",
            }}
          />
          <AccordionColumn
            index="02"
            title="Membership, Signature Collection & Practical Matters"
            description="Questions about membership, the Signature Collection, concierge purchasing, and everything practical."
            items={GROUP_2_QUESTIONS}
            openId={openGroup2}
            onToggle={(num) =>
              setOpenGroup2((prev) => (prev === num ? null : num))
            }
            callout={{
              image: "/file_00000000520071f4915a7351029b1f7b.webp",
              imageAlt: "Hands with fragrance bottle",
              quote: "A conversation, not a cart.",
              body: "Every acquisition is personal because every fragrance is personal. That will never change.",
            }}
          />
        </div>
      </section>

      {/* Still have a question */}
      <section className="relative bg-[#060506] py-16 md:py-24 overflow-hidden">
        <div className="absolute left-[8%] top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none hidden md:block">
          <Image
            src="/logo-mark.webp"
            alt=""
            width={220}
            height={180}
            className="w-40 lg:w-52 h-auto"
          />
        </div>
        <div className="relative w-[95%] md:w-full max-w-7xl mx-auto text-center space-y-5">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-[#F2EDE4]">
            Still have a question not covered here?
          </h2>
          <p className="font-sans text-sm md:text-base text-[#EDE8DE]/80 font-light">
            The House is always reachable. Some questions are better asked
            directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.28em] uppercase text-gold hover:text-gold-light transition-colors pt-2"
          >
            Speak with the House directly
            <svg width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
              <path d="M0 5h26M21 1l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#060506] py-16 md:py-24 overflow-hidden border-t border-gold/15">
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image src="/logo-mark.webp" alt="" width={200} height={160} className="w-44 h-auto" />
        </div>
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image src="/logo-mark.webp" alt="" width={200} height={160} className="w-44 h-auto" />
        </div>

        <div className="relative w-[95%] md:w-full max-w-7xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-[2.5rem] font-light text-[#F2EDE4] leading-snug max-w-3xl mx-auto">
            Some questions are better asked directly. The House is always
            reachable.
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="/access"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-[11px] tracking-[0.25em] uppercase font-semibold transition-colors"
            >
              Apply to the Founding Registry
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
                <path d="M0 5h26M21 1l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-[11px] tracking-[0.25em] uppercase font-medium transition-colors"
            >
              Speak with the House directly
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                <path d="M0 5h26M21 1l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer navItems={FAQ_NAV} />
    </div>
  );
}
