"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";

const TIMELINE_STEPS = [
  {
    year: "2024",
    title: "FOUNDATION",
    desc: "The House is established with a clear vision and uncompromising standards.",
  },
  {
    year: "2024–2025",
    title: "EDITION I",
    desc: "The founding edition is created — finite by design, marking the first chapter of the House.",
  },
  {
    year: "2025+",
    title: "SIGNATURE COLLECTION",
    desc: "The permanent body of work is released — fragrances that will endure and evolve with the House.",
  },
  {
    year: "2025+",
    title: "THE REGISTRY",
    desc: "The House is assembled through conviction, not transaction. The foundation of community.",
  },
  {
    year: "2030+",
    title: "GROWTH WITH PURPOSE",
    desc: "The House expands its craft, its culture, and its impact without compromising its values.",
  },
  {
    year: "2124",
    title: "A CENTURY STRONG",
    desc: "Maison Vereen is remembered not for trends, but for timeless craft and character.",
  },
];

export default function TheHousePage() {
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
                <span className="font-serif text-xl text-gold">12</span>
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  THE HOUSE
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                A House Is Not Built in a Season.
              </h1>

              <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
                Maison Vereen is building toward institutional permanence — a house
                whose values, culture, and craftsmanship are intended to outlast
                any single collection, founder, or era.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-4/3"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Historic House Charter Desk"
              />
            </div>
          </div>

          {/* Sub-hero paragraph */}
          <div className="mt-12 pt-8 border-t border-white/5 max-w-225">
            <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
              Everything explored elsewhere on this site — Edition I, the
              Signature Collection, the Founding Registry — exists within
              something larger: the House itself. This page steps back from any
              single product to describe the institution Maison Vereen intends to
              become.
            </p>
          </div>

          {/* 3 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#0A0A0C] border border-white/5 p-6 text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
              The House&apos;s values are simple and have not changed since its
              founding: craftsmanship without compromise, patience over speed, and
              an unwavering commitment to proving that African origin and global
              luxury standard are not opposing ideas but a single, obvious truth
              waiting to be demonstrated properly.
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-6 text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
              Maison Vereen&apos;s ambitions extend across generations, not
              seasons. The House hopes, a century from now, to be spoken of the way
              the world&apos;s oldest maisons are spoken of today — not as a brand
              that once trended, but as an institution that endured because it
              never lowered its standard to make growth easier.
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-6 text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
              The House is not interested in being the largest. It is committed to
              being one of the few that still matter in a hundred years. Every
              decision made today is measured against that future standard, not
              against the ease of the present moment.
            </div>
          </div>
        </section>

        {/* ── VALUES & CULTURE vs THE NEXT CENTURY ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Card 01 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-16/9" label="Values &amp; Culture Book" />
                <span className="font-serif text-xl text-gold block">01</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                  Values &amp; Culture
                </h2>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  Every person who works within Maison Vereen, in any capacity, is
                  held to the same standard: craftsmanship first, growth second.
                  Decisions that would compromise quality for speed or scale are
                  not made here, regardless of opportunity.
                </p>

                <div className="space-y-2 text-[10px] uppercase tracking-[0.25em] text-gold font-mono pt-4 border-t border-white/5">
                  <p>— CRAFTSMANSHIP WITHOUT COMPROMISE</p>
                  <p>— PATIENCE OVER SPEED</p>
                  <p>— INTEGRITY IN EVERY DECISION</p>
                  <p>— RESPECT FOR HERITAGE</p>
                  <p>— EXCELLENCE IN EVERY DETAIL</p>
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-16/9" label="Grand Archway Hallway" />
                <span className="font-serif text-xl text-gold block">02</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                  The Next Century
                </h2>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  Maison Vereen is not building toward a successful launch. It is
                  building toward an institution capable of outliving its founder,
                  its first collectors, and its first century — the same way the
                  world&apos;s most respected maisons were built, one deliberate
                  decade at a time.
                </p>

                <div className="space-y-2 text-[10px] uppercase tracking-[0.25em] text-gold font-mono pt-4 border-t border-white/5">
                  <p>— BUILT TO ENDURE</p>
                  <p>— ROOTED IN PURPOSE</p>
                  <p>— DESIGNED FOR GENERATIONS</p>
                  <p>— DEFINED BY QUALITY</p>
                  <p>— MEASURED IN DECADES</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE: A JOURNEY MEASURED IN GENERATIONS ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block text-center">
              A JOURNEY MEASURED IN GENERATIONS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {TIMELINE_STEPS.map((t) => (
                <div
                  key={t.year}
                  className="bg-[#0A0A0C] border border-white/5 p-6 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-gold block">
                      {t.year}
                    </span>
                    <h3 className="font-serif text-sm text-[#EDE8DE] uppercase tracking-wider">
                      {t.title}
                    </h3>
                    <p className="text-[11px] text-[#EDE8DE] font-light leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                  <div className="w-4 h-px bg-gold/40 mt-4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-8">
          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] max-w-200 mx-auto leading-relaxed">
            An institution is proven not by what it says about itself, but by
            what others say about it.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={openApply}
              className="bg-gold hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              APPLY TO THE FOUNDING REGISTRY &rarr;
            </button>

            <Link
              href="/social-proof"
              className="border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              READ WHAT OTHERS ARE SAYING &rarr;
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
