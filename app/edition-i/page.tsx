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
  theme = "dark",
}: {
  className?: string;
  aspect?: string;
  label?: string;
  theme?: "dark" | "light";
}) => {
  const isLight = theme === "light";
  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center p-6 ${aspect} ${className} ${isLight
        ? "bg-[#E5DFD3] border border-[#8A7A59]/30"
        : "bg-[#0A0A0C] border border-gold/25"
        }`}
    >
      <div
        className={`w-10 h-10 border flex items-center justify-center mb-2 ${isLight
          ? "border-[#8A7A59]/40 bg-[#EDE8DE]"
          : "border-gold/40 bg-[#060506]"
          }`}
      >
        <span
          className={`font-serif text-sm ${isLight ? "text-[#5A4D33]" : "text-gold"
            }`}
        >
          MV
        </span>
      </div>
      {label && (
        <span
          className={`text-[9px] uppercase tracking-[0.25em] font-mono ${isLight ? "text-[#7A6C4D]" : "text-[#8A8070]"
            }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default function EditionIPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col font-sans selection:bg-gold/30 selection:text-[#EDE8DE]">
      {/* ── Header ── */}
      <Header onOpenApply={openApply} />

      <main className="flex-1 pt-24 md:pt-28">
        {/* ── HERO SECTION (01) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-12 md:py-20 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-8 max-w-155">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-gold">01</span>
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  EDITION I: HOUSE OF 250
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                Two Hundred and Fifty. No More, Ever.
              </h1>

              <p className="text-sm md:text-base text-[#8A8178] font-light leading-relaxed">
                Edition I is Maison Vereen&apos;s founding chapter.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-3/4"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Edition I / 017 / 250"
              />
            </div>
          </div>
        </section>

        {/* ── LIGHT / CREAM PARCHMENT SECTION (02) ── */}
        <section className="bg-[#EDE8DE] text-[#2C2823] px-6 sm:px-8 md:px-14 lg:px-20 py-16 md:py-24 border-b border-[#D5CFBF]">
          <div className="max-w-225 mx-auto space-y-8">
            <span className="font-serif text-2xl text-[#8A7A59] block text-center">
              02
            </span>

            <div className="space-y-6 text-sm sm:text-base text-[#4A433A] font-light leading-relaxed">
              <p>
                Edition I exists once. When the two hundred and fiftieth bottle is
                placed into a collector&apos;s hands, the edition closes permanently —
                not paused, not revisited in a future &ldquo;anniversary&rdquo;
                release, but closed, in the way a first edition of any serious work
                closes the moment its print run ends.
              </p>
              <p>
                Each bottle carries an individual number, assigned in the sequence
                of acceptance into the Founding Registry, and a certificate of
                authenticity that documents its place within the two hundred and
                fifty. Ownership of an Edition I bottle is, in effect, ownership of
                a numbered position in the House&apos;s own founding history.
              </p>
              <p>
                This page exists to answer, in full, the questions a serious
                collector will naturally ask: why this number, how authentication
                works, what ownership actually entails, and why the House will never
                be persuaded to extend the edition under any circumstance.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 03: NUMBERING PHILOSOPHY ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image Placeholder */}
            <ImagePlaceholder
              aspect="aspect-4/3"
              className="w-full rounded-sm"
              label="Engraved Number 017 / 250"
            />

            {/* Right Content */}
            <div className="space-y-6">
              <span className="font-serif text-xl text-gold block">03</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                Numbering Philosophy
              </h2>
              <p className="text-sm sm:text-base text-[#8A8178] font-light leading-relaxed">
                Numbers are assigned in the order applicants are formally accepted
                into the Founding Registry — meaning a bottle&apos;s number reflects
                not when it was purchased, but when its owner was recognised by the
                House. Early conviction is rewarded with early numbering.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 04: CERTIFICATE OF AUTHENTICITY ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image Placeholder */}
            <ImagePlaceholder
              aspect="aspect-4/3"
              className="w-full rounded-sm"
              label="Certificate of Authenticity &amp; Wax Seal"
            />

            {/* Right Content */}
            <div className="space-y-6">
              <span className="font-serif text-xl text-gold block">04</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                Certificate of Authenticity &amp; Ownership Experience
              </h2>
              <p className="text-sm sm:text-base text-[#8A8178] font-light leading-relaxed">
                Every Edition I bottle is accompanied by a signed certificate of
                authenticity, recording its number, its owner&apos;s name, and its
                place within the two hundred and fifty.
              </p>
              <p className="text-sm sm:text-base text-[#8A8178] font-light leading-relaxed">
                Ownership includes private correspondence from the House at the
                time of acquisition and continued recognition as a founding member
                for as long as the House exists.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 05: 3 COLUMNS FEATURE GRID ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <span className="font-serif text-xl text-gold block mb-8">05</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="font-serif text-2xl text-gold">01</span>
              <h3 className="font-serif text-lg text-[#EDE8DE]">
                Number Assignment
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Bottles are numbered in the order of acceptance into the Founding
                Registry — not purchase. Your number reflects when the House
                recognised your place.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="font-serif text-2xl text-gold">02</span>
              <h3 className="font-serif text-lg text-[#EDE8DE]">
                Authentication
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Each bottle is individually recorded and accompanied by a signed
                certificate of authenticity. Its place in the edition is documented
                for life.
              </p>
            </div>

            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="font-serif text-2xl text-gold">03</span>
              <h3 className="font-serif text-lg text-[#EDE8DE]">
                Ownership Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                You are not simply a buyer. You are a founding member. The House
                maintains your record and honours your place in its founding
                chapter.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 06: BOLD GOLD BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-20 text-center space-y-4 border-b border-white/5">
          <span className="font-serif text-xl text-gold block">06</span>
          <span className="font-serif text-6xl sm:text-7xl lg:text-9xl text-gold font-light block leading-none">
            250
          </span>
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#EDE8DE] font-semibold">
            WORLDWIDE. NEVER REPEATED. PERMANENT.
          </p>
        </section>

        {/* ── SECTION 07: LIGHT PARCHMENT STATEMENT ── */}
        <section className="bg-[#EDE8DE] text-[#2C2823] px-6 sm:px-8 md:px-14 lg:px-20 py-16 md:py-24 text-center border-b border-[#D5CFBF]">
          <div className="max-w-200 mx-auto space-y-4">
            <span className="font-serif text-2xl text-[#8A7A59] block">07</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2823]">
              History does not get a reprint.
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5A5245] font-medium">
              Maison Vereen will never reproduce Edition I under any circumstance.
            </p>
          </div>
        </section>

        {/* ── SECTION 08: BOTTOM CTAS ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-8">
          <span className="font-serif text-xl text-gold block">08</span>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={openApply}
              className="bg-gold hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              APPLY TO THE FOUNDING REGISTRY &rarr;
            </button>

            <Link
              href="/registry"
              className="border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              UNDERSTAND THE FOUNDING REGISTRY &rarr;
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
