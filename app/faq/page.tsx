"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ImagePlaceholder from "../components/ui/ImagePlaceholder";

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

export default function FAQPage() {
  const [openGroup1, setOpenGroup1] = useState<string | null>(null);
  const [openGroup2, setOpenGroup2] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col font-sans selection:bg-gold/30 selection:text-[#EDE8DE]">
      {/* ── Header ── */}
      <Header />

      <main className="flex-1 pt-24 md:pt-28">
        {/* ── HERO SECTION ── */}
        <section className="w-[90%] md:w-full max-w-6xl mx-auto py-12 md:py-20 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-8 max-w-155">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-gold">14</span>
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                Everything You Would Ask, Answered Directly.
              </h1>

              <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
                Twenty questions, answered in the unhurried, confident voice of
                the House — designed to dissolve objection and deepen
                understanding at once.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-4/3"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="FAQ Ledger Manuscript Desk"
                src="/images/founder.webp"
              />
            </div>
          </div>

          {/* Sub-hero paragraph */}
          <div className="mt-12 pt-8 border-t border-white/5 max-w-225">
            <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
              This page exists so that no serious applicant is left with an
              unanswered practical question before applying. Each answer is written
              in the House&apos;s own voice — confident, direct, and unhurried —
              never defensive, never evasive.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-[#0A0A0C] border border-white/5 p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                DIRECT ANSWERS
              </span>
              <p className="text-xs text-[#EDE8DE] font-light">
                No ambiguity. No corporate filler.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                PRACTICAL CLARITY
              </span>
              <p className="text-xs text-[#EDE8DE] font-light">
                The details that matter, explained properly.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                HOUSE PERSPECTIVE
              </span>
              <p className="text-xs text-[#EDE8DE] font-light">
                Answers in the voice of Maison Vereen.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                TOTAL TRANSPARENCY
              </span>
              <p className="text-xs text-[#EDE8DE] font-light">
                Nothing hidden. Nothing exaggerated.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2 COLUMNS ACCORDION SECTION ── */}
        <section className="w-[90%] md:w-full max-w-6xl mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 01 */}
            <div className="space-y-8">
              <div>
                <span className="font-serif text-xl text-gold block">01</span>
                <h2 className="font-serif text-2xl font-light text-[#EDE8DE] leading-snug">
                  Edition I &amp; The Founding Registry
                </h2>
                <p className="text-xs text-[#EDE8DE] font-light mt-1">
                  Questions about Edition I, the Founding Registry, and the path
                  to becoming part of the House&apos;s founding chapter.
                </p>
              </div>

              {/* Accordion 1-10 */}
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {GROUP_1_QUESTIONS.map((item) => {
                  const isOpen = openGroup1 === item.num;
                  return (
                    <div key={item.num} className="py-4">
                      <button
                        onClick={() =>
                          setOpenGroup1(isOpen ? null : item.num)
                        }
                        className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-light text-[#EDE8DE] hover:text-gold transition-colors gap-4"
                      >
                        <span>
                          <span className="text-gold font-mono mr-2">
                            {item.num}
                          </span>
                          {item.q}
                        </span>
                        <span className="text-gold font-mono">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="text-xs text-[#EDE8DE] font-light mt-3 leading-relaxed pl-6">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Callout box */}
              <div className="bg-[#0A0A0C] border border-white/5 p-6 flex items-center gap-6">
                <ImagePlaceholder
                  aspect="aspect-square"
                  className="w-16 h-16 shrink-0"
                  label="Wax Seal"
                  src="/images/founder.webp"
                />
                <div className="space-y-1">
                  <p className="font-sans text-xs text-gold">
                    &ldquo;The registry is not a queue. It is a circle of
                    recognition.&rdquo;
                  </p>
                  <p className="text-[10px] text-[#EDE8DE] font-light">
                    Every accepted member is chosen because the House believes in who
                    they are and what they represent — not because they were first.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 02 */}
            <div className="space-y-8">
              <div>
                <span className="font-serif text-xl text-gold block">02</span>
                <h2 className="font-serif text-2xl font-light text-[#EDE8DE] leading-snug">
                  Membership, Signature Collection &amp; Practical Matters
                </h2>
                <p className="text-xs text-[#EDE8DE] font-light mt-1">
                  Questions about membership, the Signature Collection,
                  concierge purchasing, and everything practical.
                </p>
              </div>

              {/* Accordion 11-20 */}
              <div className="divide-y divide-white/5 border-t border-b border-white/5">
                {GROUP_2_QUESTIONS.map((item) => {
                  const isOpen = openGroup2 === item.num;
                  return (
                    <div key={item.num} className="py-4">
                      <button
                        onClick={() =>
                          setOpenGroup2(isOpen ? null : item.num)
                        }
                        className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-light text-[#EDE8DE] hover:text-gold transition-colors gap-4"
                      >
                        <span>
                          <span className="text-gold font-mono mr-2">
                            {item.num}
                          </span>
                          {item.q}
                        </span>
                        <span className="text-gold font-mono">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="text-xs text-[#EDE8DE] font-light mt-3 leading-relaxed pl-6">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Callout box */}
              <div className="bg-[#0A0A0C] border border-white/5 p-6 flex items-center gap-6">
                <ImagePlaceholder
                  aspect="aspect-square"
                  className="w-16 h-16 shrink-0"
                  label="Bottle Hands"
                  src="/images/founder.webp"
                />
                <div className="space-y-1">
                  <p className="font-sans text-xs text-gold">
                    &ldquo;A conversation, not a cart.&rdquo;
                  </p>
                  <p className="text-[10px] text-[#EDE8DE] font-light">
                    Every acquisition is personal because every fragrance is
                    personal. That will never change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STILL HAVE A QUESTION SECTION ── */}
        <section className="w-[90%] md:w-full max-w-6xl mx-auto py-12 text-center space-y-4 border-b border-white/5">
          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE]">
            Still have a question not covered here?
          </h2>
          <p className="text-xs text-[#EDE8DE] font-light">
            The House is always reachable. Some questions are better asked directly.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[10px] tracking-[0.25em] uppercase text-gold hover:underline pt-2"
          >
            SPEAK WITH THE HOUSE DIRECTLY &rarr;
          </Link>
        </section>

        {/* ── BOTTOM BANNER ── */}
        <section className="w-[90%] md:w-full max-w-6xl mx-auto py-16 text-center space-y-8">
          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] max-w-200 mx-auto leading-relaxed">
            Some questions are better asked directly. The House is always
            reachable.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              href="/apply"
              className="bg-gold hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              APPLY TO THE FOUNDING REGISTRY &rarr;
            </Link>

            <Link
              href="/contact"
              className="border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              SPEAK WITH THE HOUSE DIRECTLY &rarr;
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />

    </div>
  );
}
