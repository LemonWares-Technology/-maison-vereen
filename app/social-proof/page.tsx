"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

import ImagePlaceholder from "../components/ui/ImagePlaceholder";

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

export default function SocialProofPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col font-sans selection:bg-gold/30 selection:text-[#EDE8DE]">
      {/* ── Header ── */}
      <Header onOpenApply={openApply} />

      <main className="flex-1 pt-24 md:pt-28">
        {/* ── HERO SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-12 md:py-20 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-8 max-w-155">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-gold">13</span>
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  SOCIAL PROOF
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                Recognised by Those Who Know the Difference.
              </h1>

              <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
                This page exists as a living, growing record of recognition —
                collector testimonials, press coverage, and milestones —
                documented as the House&apos;s history, not displayed as advertising.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-4/3"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Magnifying Glass &amp; Ledger Desk"
              />
            </div>
          </div>

          {/* Sub-hero paragraph */}
          <div className="mt-12 pt-8 border-t border-white/5 max-w-225">
            <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
              Maison Vereen&apos;s social proof is designed never to feel like
              reviews. Reviews are what consumers leave for products. What appears
              here is documentation — the accumulating record of a House&apos;s
              recognition by collectors, press, and partners over time. At launch,
              this page will carry placeholder structures, ready to be populated as
              recognition arrives organically. Nothing here will ever be
              fabricated or inflated; the page is built to grow honestly, even if
              that means starting quietly.
            </p>
          </div>
        </section>

        {/* ── 01 REFLECTIONS & 02 PRESS MILESTONES ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Card 01 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="font-serif text-xl text-gold block">01</span>
                <h2 className="font-serif text-2xl font-light text-[#EDE8DE]">
                  Collector &amp; Member Reflections
                </h2>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  Reflections shared by Founding Registry members and collectors,
                  presented as quoted excerpts with name, country, and (where
                  relevant) bottle number — never as star ratings or review
                  widgets.
                </p>

                {/* 3 Quote Cards */}
                <div className="space-y-4 pt-2">
                  {REFLECTIONS.map((r, i) => (
                    <div
                      key={i}
                      className="bg-[#060506] border border-white/5 p-4 space-y-2 text-xs"
                    >
                      <p className="font-serif text-[#EDE8DE] italic leading-relaxed">
                        &ldquo;{r.quote}&rdquo;
                      </p>
                      <div className="flex justify-between items-center text-[10px] text-[#EDE8DE]">
                        <span>
                          &mdash; {r.author}, {r.country}
                        </span>
                        <span className="text-gold font-mono">
                          {r.bottle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#EDE8DE]">
                MORE REFLECTIONS TO COME &rarr;
              </span>
            </div>

            {/* Card 02 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="font-serif text-xl text-gold block">02</span>
                <h2 className="font-serif text-2xl font-light text-[#EDE8DE]">
                  Press, Editorial &amp; Milestones
                </h2>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  A running record of press coverage, editorial features, interviews,
                  awards, notable events, and House milestones, displayed
                  chronologically as the unfolding record of Maison Vereen&apos;s
                  history.
                </p>

                {/* 3 Table Rows */}
                <div className="space-y-4 pt-2">
                  {PRESS_ROWS.map((p, i) => (
                    <div
                      key={i}
                      className="bg-[#060506] border border-white/5 p-4 flex items-center justify-between gap-4 text-xs"
                    >
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-gold block">
                          {p.date} &bull; {p.type}
                        </span>
                        <p className="font-serif text-[#EDE8DE]">{p.title}</p>
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#EDE8DE] shrink-0">
                        READ MORE &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#EDE8DE]">
                MORE COVERAGE &amp; MILESTONES TO COME &rarr;
              </span>
            </div>
          </div>
        </section>

        {/* ── EDITORIAL PREVIEW BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5 text-center space-y-4">
          <span className="font-serif text-4xl text-gold/40 block">
            &ldquo;
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#EDE8DE] italic max-w-200 mx-auto leading-relaxed">
            Maison Vereen is crafting more than fragrances — it is shaping a legacy
            with every decision.
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold block pt-2">
            &mdash; EDITORIAL PREVIEW
          </span>
        </section>

        {/* ── PRESS & FEATURES LOGOS STRIP ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 border-b border-white/5">
          <div className="space-y-8 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block">
              PRESS &amp; FEATURES
            </span>
            <p className="text-xs text-[#EDE8DE]">As seen in</p>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm sm:text-base font-serif tracking-[0.2em] text-[#EDE8DE]">
              {PRESS_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="hover:text-[#EDE8DE] transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOUSE MILESTONES & 4 PHOTO GRID ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block text-center">
              HOUSE MILESTONES (THE RECORD CONTINUES)
            </span>

            {/* 4 Photo Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <ImagePlaceholder aspect="aspect-4/3" label="Archival Document" />
              <ImagePlaceholder aspect="aspect-4/3" label="Window Skyline View" />
              <ImagePlaceholder aspect="aspect-4/3" label="Wax Seal Invitation" />
              <ImagePlaceholder aspect="aspect-4/3" label="Private Maison Meeting" />
            </div>
          </div>
        </section>

        {/* ── BOTTOM BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-8">
          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] max-w-200 mx-auto leading-relaxed">
            Recognition answers some questions. Practical ones remain — and
            deserve clear answers.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={openApply}
              className="bg-gold hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              APPLY TO THE FOUNDING REGISTRY &rarr;
            </button>

            <Link
              href="/faq"
              className="border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              READ FREQUENTLY ASKED QUESTIONS &rarr;
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Application Modal ── */}
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
