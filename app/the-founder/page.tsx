"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

import ImagePlaceholder from "../components/ui/ImagePlaceholder";

export default function TheFounderPage() {
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
                  THE FOUNDER&apos;S STORY
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                She Did Not Set Out to Build a Perfume Brand.
              </h1>

              {/* Bullet points */}
              <div className="space-y-3 font-serif text-sm sm:text-base text-gold/90 italic tracking-wide">
                <p>— Some things are built to outlive their founder.</p>
                <p>— Conviction does not require an introduction.</p>
                <p>— The House speaks. The founder rarely needs to.</p>
                <p>— Obsession, properly aimed, becomes a House.</p>
                <p>— This was never meant to be finished quickly.</p>
              </div>

              <p className="text-sm md:text-base text-[#8A8178] font-light leading-relaxed">
                The most prestigious houses in the world communicate through their
                work, not their founders. Maison Vereen was built in that tradition.
              </p>
            </div>

            {/* Right Image Placeholder (Founder in Studio) */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-3/4"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="The Founder of Maison Vereen"
              />
            </div>
          </div>
        </section>

        {/* ── INDENTED ESSAY / QUOTE SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="max-w-225 mx-auto border-l-2 border-gold/40 pl-6 sm:pl-10 md:pl-12 space-y-6 text-sm md:text-base text-[#B3A99B] font-light leading-relaxed">
            <p>
              Maison Vereen was founded on a simple, stubborn conviction: that a
              luxury fragrance house built to the world&apos;s highest standard could
              be built in Lagos, by an African founder, without asking permission or
              imitating anyone else&apos;s idea of what luxury should sound like.
            </p>
            <p>
              That conviction did not arrive as a business plan. It arrived as a
              refusal — a refusal to accept that craftsmanship of this calibre
              belonged only to certain cities, certain histories, certain names.
              What followed was years of formulation, refinement, and quiet
              obsession with getting every detail, from the raw material to the
              bottle&apos;s weight in the hand, exactly right.
            </p>
            <p>
              The founder&apos;s full story will be told over time, the way any serious
              house reveals itself — gradually, through the work. What matters at
              this stage is not her biography, but her intention: to build something
              that will still mean something in a hundred years, long after she is no
              longer the one telling its story.
            </p>
          </div>
        </section>

        {/* ── 2 COLUMNS CARDS SECTION (01 & 02) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Card 01 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <span className="font-serif text-xl text-gold block">01</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE] leading-snug">
                  Conviction Over Credentials
                </h2>
                <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                  The most prestigious houses in the world are remembered for their
                  work, not their founders&apos; faces. Maison Vereen follows that
                  same discipline deliberately — the House, not the individual, is
                  what is being built to last.
                </p>
              </div>
              <ImagePlaceholder aspect="aspect-16/9" label="Craft Archives" />
            </div>

            {/* Card 02 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <span className="font-serif text-xl text-gold block">02</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE] leading-snug">
                  Building to Outlive Her
                </h2>
                <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                  Every decision made today — from Edition I&apos;s scarcity to the
                  Founding Registry&apos;s careful structure — is made with one
                  question in mind: will this still make sense in a century, under
                  someone else&apos;s stewardship? If the answer is no, it does not
                  happen.
                </p>
              </div>
              <ImagePlaceholder aspect="aspect-16/9" label="Institutional Vision" />
            </div>
          </div>
        </section>

        {/* ── QUOTE BANNER & CTA SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5 text-center space-y-12">
          {/* Large Quote */}
          <div className="max-w-225 mx-auto space-y-4">
            <span className="font-serif text-4xl sm:text-5xl text-gold/50 block">
              &ldquo;
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-gold italic leading-relaxed">
              Conviction explains why the House exists. What follows explains why it
              could only ever look like this.
            </h2>
          </div>

          {/* Dual CTA Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 text-left pt-6">
            {/* Left CTA Box */}
            <div className="bg-[#0D0D10] border border-white/5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-21/9" label="The House Difference" />
                <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                  Discover what sets Maison Vereen apart and why nothing here is
                  ordinary.
                </p>
              </div>
              <div>
                <Link
                  href="/the-difference"
                  className="inline-flex items-center justify-between w-full bg-gold hover:bg-[#b5953d] text-[#060506] px-6 py-4 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300"
                >
                  <span>SEE WHAT MAKES THE HOUSE DIFFERENT</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right CTA Box */}
            <div className="bg-[#0D0D10] border border-white/5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                  For those who feel aligned with the mission and want to contribute
                  to its legacy.
                </p>
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
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Application Modal ── */}
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
