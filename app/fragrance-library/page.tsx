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
    className={`relative bg-[#0A0A0C] border border-[#C9A84C]/25 overflow-hidden flex flex-col items-center justify-center p-6 ${aspect} ${className}`}
  >
    <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center bg-[#060506] mb-2">
      <span className="font-serif text-[#C9A84C] text-sm">MV</span>
    </div>
    {label && (
      <span className="text-[9px] uppercase tracking-[0.25em] text-[#8A8070] font-mono">
        {label}
      </span>
    )}
  </div>
);

const SIGNATURE_BOTTLES = [
  {
    no: "No. I",
    name: "VEREEN",
    notes: "WOODY / AMBER",
    desc: "Warmth grounded in depth. Confidence without noise.",
    label: "Vereen Notes & Bottle",
  },
  {
    no: "No. II",
    name: "LUMIÈRE",
    notes: "FLORAL / MUSK",
    desc: "Light that lingers. Grace with intention.",
    label: "Lumière Notes & Bottle",
  },
  {
    no: "No. III",
    name: "OBSIDIAN",
    notes: "AMBER / LEATHER",
    desc: "Power in stillness. Presence that remains.",
    label: "Obsidian Notes & Bottle",
  },
  {
    no: "No. IV",
    name: "SANTALIS",
    notes: "WOODY / SPICY",
    desc: "Quiet strength. Refined and timeless.",
    label: "Santalis Notes & Bottle",
  },
  {
    no: "No. V",
    name: "CLAIRVOYANT",
    notes: "CITRUS / AROMATIC",
    desc: "Clarity in motion. Crisp, intelligent, assured.",
    label: "Clairvoyant Notes & Bottle",
  },
];

export default function FragranceLibraryPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col font-sans selection:bg-[#C9A84C]/30 selection:text-[#EDE8DE]">
      {/* ── Header ── */}
      <Header onOpenApply={openApply} />

      <main className="flex-1 pt-24 md:pt-28">
        {/* ── HERO SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-12 md:py-20 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-8 max-w-[620px]">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-[#C9A84C]">11</span>
                <div className="w-6 h-[1px] bg-[#C9A84C]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium">
                  SIGNATURE COLLECTION
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                The Permanent Work of the House.
              </h1>

              <p className="text-sm md:text-base text-[#8A8178] font-light leading-relaxed">
                The Signature Collection represents Maison Vereen&apos;s permanent
                body of work — fragrances available on an ongoing basis, each
                developed with the same standard applied to Edition I.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-3/4"
                className="w-full max-w-[500px] rounded-sm shadow-2xl"
                label="Signature Collection Bottle &amp; Vessel"
              />
            </div>
          </div>

          {/* Sub-hero paragraph */}
          <div className="mt-12 pt-8 border-t border-white/5 max-w-[900px]">
            <p className="text-sm md:text-base text-[#B3A99B] font-light leading-relaxed">
              Where Edition I is finite by design, the Signature Collection is the
              House&apos;s enduring body of work — fragrances intended to remain
              part of Maison Vereen&apos;s offering for years, refined and revisited
              as the House&apos;s craft continues to evolve, but never produced at
              the expense of quality.
            </p>
          </div>

          {/* 3 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
                EACH A COMPLETE STATEMENT
              </span>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Every fragrance in the Collection is treated as a complete
                artistic statement: its own story, its own inspiration, its own
                character.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
                DISCOVER INDIVIDUALLY
              </span>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                None are framed as variations on a theme or filler around Edition
                I. Discover each one the way you might discover an artist&apos;s
                separate works.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
                NO ECOMMERCE EXPERIENCE
              </span>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                There is no ecommerce experience here. Every fragrance leads to a
                personal conversation with the House&apos;s concierge — by design,
                not by limitation.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE SIGNATURE COLLECTION GALLERY (5 BOTTLE CARDS) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium block">
                THE SIGNATURE COLLECTION
              </span>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light">
                A selection of the House&apos;s ongoing work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {SIGNATURE_BOTTLES.map((b) => (
                <div
                  key={b.name}
                  className="bg-[#0A0A0C] border border-white/5 p-6 flex flex-col justify-between space-y-6 group hover:border-[#C9A84C]/40 transition-colors"
                >
                  <div className="space-y-4">
                    <ImagePlaceholder aspect="aspect-3/4" label={b.label} />
                    <span className="text-[10px] text-[#8A8178] font-mono block">
                      {b.no}
                    </span>
                    <h3 className="font-serif text-xl text-[#EDE8DE] tracking-wider">
                      {b.name}
                    </h3>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A84C] font-mono block">
                      {b.notes}
                    </span>
                    <p className="text-xs text-[#8A8178] font-light leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#EDE8DE] group-hover:text-[#C9A84C] transition-colors pt-2"
                  >
                    <span>DISCOVER</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 01 EACH FRAGRANCE & 02 CONCIERGE ACQUISITION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Card 01 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-16/9" label="Fragrance Archives" />
                <span className="font-serif text-xl text-[#C9A84C] block">01</span>
                <h3 className="font-serif text-2xl font-light text-[#EDE8DE]">
                  Each Fragrance, In Full
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                  Every fragrance page within the Signature Collection includes its
                  story and inspiration, a description of its character and mood,
                  its note structure, and the occasions or moments it was created to
                  accompany — followed by concierge-based acquisition options rather
                  than a cart.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <ImagePlaceholder aspect="aspect-16/9" label="Gold Sealed Correspondence" />
                <span className="font-serif text-xl text-[#C9A84C] block">02</span>
                <h3 className="font-serif text-2xl font-light text-[#EDE8DE]">
                  Concierge-Based Acquisition
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                  At the close of every fragrance page, visitors are invited to speak
                  with a concierge, request details, or continue the conversation by
                  WhatsApp or email. There is no &ldquo;Add to Cart&rdquo; anywhere
                  within Maison Vereen — acquiring a Signature Collection fragrance
                  is always a personal exchange.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM BANNER & CTAS ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 text-center space-y-8">
          <div className="w-8 h-8 border border-[#C9A84C]/40 mx-auto flex items-center justify-center bg-[#060506]">
            <span className="font-serif text-[#C9A84C] text-xs">MV</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] max-w-[800px] mx-auto leading-relaxed">
            The Signature Collection is the ongoing work. What follows is the
            institution behind all of it.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              href="/contact"
              className="bg-[#C9A84C] hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors flex items-center gap-2"
            >
              <span>SPEAK TO A CONCIERGE</span>
              <span>💬</span>
            </Link>

            <Link
              href="/contact"
              className="border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#EDE8DE] hover:text-[#C9A84C] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              REQUEST DETAILS &rarr;
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
