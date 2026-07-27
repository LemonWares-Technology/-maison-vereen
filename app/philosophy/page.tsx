"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

const ImagePlaceholder = ({
  className = "",
  aspect = "aspect-4/3",
  label,
}: {
  className?: string;
  aspect?: string;
  label?: string;
}) => (
  <div
    className={`relative bg-[#0A0A0C] border border-gold/25 overflow-hidden flex flex-col items-center justify-center p-6 ${aspect} ${className}`}
  >
    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center bg-[#060506] mb-2">
      <span className="font-serif text-gold text-sm">MV</span>
    </div>
    {label && (
      <span className="text-[9px] uppercase tracking-[0.25em] text-[#8A8070] font-mono">
        {label}
      </span>
    )}
  </div>
);

const CONVICTIONS = [
  {
    number: "01",
    title: "CRAFTSMANSHIP",
    purpose: "Purpose: State the House's standard for making.",
    body: "Nothing leaves Maison Vereen because a deadline arrived. It leaves because it is finished, by the only standard that matters here — the master perfumer's own.",
    imageLabel: "Master Perfumer Craft",
  },
  {
    number: "02",
    title: "TIME",
    purpose: "Purpose: State the House's relationship to pace.",
    body: "Formulation, ageing, and refinement are permitted the time they require. The House would rather delay a release by a year than release something it cannot stand behind for a century.",
    imageLabel: "Hourglass & Maturation",
  },
  {
    number: "03",
    title: "MEMORY",
    purpose: "Purpose: Frame fragrance as an instrument of memory.",
    body: "A fragrance is the only object capable of returning someone, instantly and involuntarily, to a moment they thought they had lost. Maison Vereen designs for that return, not merely for how a scent performs in the first hour.",
    imageLabel: "Instrument of Memory",
  },
  {
    number: "04",
    title: "IDENTITY",
    purpose: "Purpose: Position fragrance as self-expression, not costume.",
    body: "A signature scent is not a mask. It is closer to a signature itself — unrepeatable, and recognisably the wearer's own. The House creates fragrances built to be worn for decades, not seasons.",
    imageLabel: "Signature & Identity",
  },
  {
    number: "05",
    title: "RARITY & LEGACY",
    purpose: "Purpose: Tie scarcity to permanence rather than marketing urgency.",
    body: "What is rare is rare because it was never compromised to meet demand. What is rare and well made becomes legacy — passed forward, told about, remembered after the person who first wore it is gone.",
    imageLabel: "Scarcity & Permanence",
  },
];

export default function PhilosophyPage() {
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
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  THE PHILOSOPHY OF THE HOUSE
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                Luxury Is Not Volume. It Is Conviction.
              </h1>

              <p className="font-serif text-base sm:text-lg text-gold italic font-light">
                Ten convictions govern Maison Vereen. None of them are negotiable,
                and none of them were chosen for how they would market.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                <p>
                  Every house, knowingly or not, is built on a set of beliefs. Most
                  never state them. Maison Vereen states them plainly, because a House
                  that intends to last a century cannot afford to leave its
                  convictions unwritten.
                </p>
                <p>
                  These beliefs are not slogans. They are the standard against which
                  every formulation, every material, every piece of correspondence
                  with a collector, and every page of this website has been measured
                  before being approved.
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-3/4"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Extrait de Parfum Edition I"
              />
            </div>
          </div>
        </section>

        {/* ── 5 NUMBERED ROWS (01 - 05) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="space-y-12">
            {CONVICTIONS.map((c) => (
              <div
                key={c.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0A0A0C] border border-white/5 p-6 sm:p-10"
              >
                {/* Left Image Placeholder Slot */}
                <div className="lg:col-span-4">
                  <ImagePlaceholder aspect="aspect-16/9" label={c.imageLabel} />
                </div>

                {/* Right Conviction Text */}
                <div className="lg:col-span-8 space-y-4">
                  <span className="font-serif text-3xl md:text-4xl text-gold block">
                    {c.number}
                  </span>

                  <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] tracking-wider uppercase">
                    {c.title}
                  </h2>

                  <p className="font-serif text-xs sm:text-sm text-gold italic font-light">
                    {c.purpose}
                  </p>

                  <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed max-w-175">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CENTER GOLD EMBLEM LOGO ── */}
        <div className="py-10 text-center">
          <div className="w-8 h-8 border border-gold/40 mx-auto flex items-center justify-center bg-[#060506]">
            <span className="font-serif text-gold text-xs">MV</span>
          </div>
        </div>

        {/* ── DUAL CTA SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Box */}
            <div className="bg-[#0D0D10] border border-white/5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                  Curious to know the person behind these convictions?
                </h3>
              </div>
              <div>
                <Link
                  href="/the-founder"
                  className="inline-flex items-center justify-between w-full border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-6 py-4 text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 bg-transparent"
                >
                  <span>MEET THE FOUNDER</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Box */}
            <div className="bg-[#0D0D10] border border-white/5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                  Ready to be part of the House?
                </h3>
              </div>
              <div>
                <button
                  onClick={openApply}
                  className="inline-flex items-center justify-between w-full border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-6 py-4 text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 bg-transparent"
                >
                  <span>APPLY FOR A POSITION</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEXT PAGE BANNER & TRANSITION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-6">
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gold font-light italic max-w-200 mx-auto leading-relaxed">
            A philosophy this deliberate does not appear by accident. It begins
            with one person&apos;s conviction.
          </h3>

          <Link
            href="/the-founder"
            className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#8A8178] hover:text-gold transition-colors font-medium"
          >
            NEXT: THE FOUNDER&apos;S STORY &rarr;
          </Link>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Application Modal ── */}
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
