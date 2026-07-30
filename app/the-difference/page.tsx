"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

import ImagePlaceholder from "../components/ui/ImagePlaceholder";

export default function TheDifferencePage() {
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
                  THE MAISON VEREEN DIFFERENCE
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                The Difference Was Never the Scent Alone.
              </h1>

              {/* Bullet points */}
              <div className="space-y-3 font-serif text-sm sm:text-base text-gold/90 italic tracking-wide">
                <p>— Most houses sell a bottle. This one offers a position.</p>
                <p>— Ownership, not ecommerce.</p>
                <p>— Built to be inherited, not consumed.</p>
                <p>— Where other houses expand, this one closes.</p>
              </div>

              <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
                Every serious luxury house has its own philosophy. This is the
                architecture of Maison Vereen&apos;s — built around
                collectability, emotional ownership, and a culture rather than a
                catalogue.
              </p>
            </div>

            {/* Right Image Placeholder (Arched gateway) */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-3/4"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Architecture of Difference"
              />
            </div>
          </div>
        </section>

        {/* ── INDENTED QUOTE / ESSAY SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="max-w-225 mx-auto border-l-2 border-gold/40 pl-6 sm:pl-10 md:pl-12 space-y-6 text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
            <p>
              Visitors who have considered other fragrance houses arrive here with a
              quiet, reasonable question: why is this different from everything
              else I have already looked at? The honest answer is rarely the scent
              alone — formulation skill exists at the highest level in many houses.
              The difference is the entire architecture surrounding the work.
            </p>
            <p>
              Maison Vereen was not built to maximise how many bottles leave the
              House. It was built around collectability — limited, numbered,
              never-repeated editions; an artistic process that treats each
              formulation as a finished work rather than a renewable product line;
              and a culture in which ownership is something granted through
              relationship, not simply purchased on demand.
            </p>
            <p>
              This is offered as description, not comparison. Maison Vereen has no
              interest in positioning itself against any other house. Its
              difference is simply stated, and left for each visitor to weigh for
              themselves.
            </p>
          </div>
        </section>

        {/* ── 3 COLUMNS CARDS SECTION (01, 02, 03) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 01 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-16/9" label="Edition I / 017 / 250" />
                <span className="font-serif text-xl text-gold block">01</span>
                <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] leading-snug">
                  Collectability &amp; Limited Editions
                </h2>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  Edition I will never be remade, reissued, or extended. What is
                  held by its two hundred and fifty owners is permanent in a way few
                  luxury objects remain today — its value is not protected by
                  marketing, but by the simple fact that it cannot be replicated.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-16/9" label="Founding Chapter" />
                <span className="font-serif text-xl text-gold block">02</span>
                <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] leading-snug">
                  Emotional Ownership &amp; Future Value
                </h2>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  Owning something from Maison Vereen&apos;s founding chapter is
                  closer to holding an early work from an artist before the world
                  recognised their name. The House cannot promise future value — no
                  serious house ever should — but it can promise that nothing about
                  Edition I will ever be diminished by overproduction.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-16/9" label="Private Acquisition" />
                <span className="font-serif text-xl text-gold block">03</span>
                <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] leading-snug">
                  House Culture &amp; Private Acquisition
                </h2>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  Acquisition at Maison Vereen happens through relationship —
                  application, review, invitation — rather than instant purchase.
                  This is not designed to create friction for its own sake. It
                  exists because a House is assembled deliberately, member by
                  member, the same way any institution intended to last is built.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Box */}
            <div className="bg-[#0D0D10] border border-white/5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-21/9" label="Master Artisans" />
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                  Discover the craft behind every creation.
                </h3>
              </div>
              <div>
                <Link
                  href="/the-founder"
                  className="inline-flex items-center justify-between w-full bg-gold hover:bg-[#b5953d] text-[#060506] px-6 py-4 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300"
                >
                  <span>Meet the Artisans Behind Every Fragrance</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Box */}
            <div className="bg-[#0D0D10] border border-white/5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                  Ready to be part of the Maison?
                </h3>
                <p className="text-xs sm:text-sm text-[#EDE8DE] font-light leading-relaxed">
                  Applications are by consideration. For those who believe in what we
                  build.
                </p>
              </div>
              <div>
                <button
                  onClick={openApply}
                  className="inline-flex items-center justify-between w-full border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-6 py-4 text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 bg-transparent"
                >
                  <span>Apply for a Position</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEXT PAGE BANNER & TRANSITION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-6">
          <div className="w-8 h-8 border border-gold/40 mx-auto flex items-center justify-center bg-[#060506]">
            <span className="font-serif text-gold text-xs">MV</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gold font-light italic max-w-200 mx-auto leading-relaxed">
            Philosophy explains why the House exists. The individuals behind every
            bottle explain how it is made real.
          </h3>

          <Link
            href="/the-founder"
            className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#EDE8DE] hover:text-gold transition-colors font-medium"
          >
            NEXT: THE INDIVIDUAL BEHIND EVERY FRAGRANCE &rarr;
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
