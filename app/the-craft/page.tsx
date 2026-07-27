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

const RAW_MATERIALS = [
  { name: "RESINS", label: "Frankincense & Myrrh" },
  { name: "WOODS", label: "Sandalwood & Oud" },
  { name: "BOTANICALS", label: "Rare Herbs & Leaves" },
  { name: "FLOWERS", label: "Orange Blossom & Jasmine" },
  { name: "SPICES", label: "Peppercorn & Cinnamon" },
];

const PROCESS_STEPS = [
  { step: "SOURCE", icon: "🌱", text: "Rare materials chosen for character." },
  { step: "STUDY", icon: "🔍", text: "Each material is studied in depth." },
  { step: "BLEND", icon: "🧪", text: "Ideas are combined with precision." },
  { step: "REJECT", icon: "✕", text: "More ideas are set aside than kept." },
  { step: "REBUILD", icon: "↻", text: "We begin again with new insight." },
  { step: "AGE", icon: "⌛", text: "Time is allowed to transform the blend." },
  { step: "EVALUATE", icon: "👁", text: "Every detail is judged impartially." },
  { step: "APPROVE", icon: "✓", text: "Only what meets the standard moves forward." },
  { step: "MAISON VEREEN", icon: "MV", text: "Only then does it carry the House's name." },
];

export default function TheCraftPage() {
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
                  THE INDIVIDUAL BEHIND EVERY FRAGRANCE
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                Every Bottle Carries a Person&apos;s Patience.
              </h1>

              {/* Bullet points */}
              <div className="space-y-3 font-serif text-sm sm:text-base text-gold/90 italic tracking-wide">
                <p>— Nothing here was rushed to market.</p>
                <p>— Raw material, refined by obsession.</p>
                <p>— Craft is not a department. It is the entire House.</p>
                <p>— Years, distilled into millilitres.</p>
                <p>— The hand behind the formula.</p>
              </div>

              <p className="text-sm md:text-base text-[#8A8178] font-light leading-relaxed">
                A finished fragrance from Maison Vereen represents years of
                refinement — sourcing, testing, rejecting, and beginning again,
                until the formula deserved the House&apos;s name.
              </p>

              <div>
                <Link
                  href="/edition-i"
                  className="inline-flex items-center gap-3 border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
                >
                  <span>DISCOVER EDITION I IN FULL</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-3/4"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Master Perfumer at Work"
              />
            </div>
          </div>
        </section>

        {/* ── THE PROCESS BEHIND PERFECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block">
                THE PROCESS BEHIND PERFECTION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE] leading-snug">
                Behind every Maison Vereen fragrance is a process most houses no
                longer have the patience for.
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                <p>
                  It begins with sourcing — rare African materials selected not for
                  cost efficiency but for character, often requiring relationships
                  with growers and harvesters built over years rather than
                  transactions completed in weeks.
                </p>
                <p>
                  From there, development is slow and frequently unforgiving.
                  Formulas are tested, set aside, revisited months later with fresh
                  judgment, and rejected as often as they are advanced.
                  Refinement continues until the master perfumer judges a formulation
                  worthy of the House&apos;s name — a standard that has no lower tier,
                  and no exceptions for deadlines.
                </p>
                <p>
                  This page exists to honour that process, and the discipline of the
                  people who carry it out, long before any visitor ever encounters
                  the finished bottle.
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <ImagePlaceholder
              aspect="aspect-4/3"
              className="w-full rounded-sm"
              label="Perfumer Formula Notebook &amp; Vials"
            />
          </div>
        </section>

        {/* ── RAW MATERIALS (LIGHT PARCHMENT SECTION) ── */}
        <section className="bg-[#EDE8DE] text-[#2C2823] px-6 sm:px-8 md:px-14 lg:px-20 py-16 md:py-24 border-b border-[#D5CFBF]">
          <div className="max-w-350 mx-auto space-y-12">
            <div className="max-w-175 mx-auto text-center space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A7A59] font-medium block">
                RAW MATERIALS
              </span>
              <p className="text-xs sm:text-sm text-[#4A433A] font-light leading-relaxed">
                Maison Vereen sources materials others overlook — rare resins, woods,
                and botanicals drawn from across the African continent, selected for
                the particular depth and character they bring rather than for ease of
                supply.
              </p>
            </div>

            {/* 5 Material Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {RAW_MATERIALS.map((mat) => (
                <div key={mat.name} className="space-y-3 text-center">
                  <ImagePlaceholder
                    theme="light"
                    aspect="aspect-square"
                    label={mat.label}
                  />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#2C2823] font-semibold block">
                    {mat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROCESS — UNHURRIED BY DESIGN (9 STEP PIPELINE) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block text-center">
              THE PROCESS &mdash; UNHURRIED BY DESIGN
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4 text-center">
              {PROCESS_STEPS.map((item, idx) => (
                <div
                  key={item.step}
                  className="bg-[#0A0A0C] border border-white/5 p-4 flex flex-col items-center space-y-3 relative group"
                >
                  <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-xs font-serif text-gold">
                    {item.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#EDE8DE] font-semibold">
                    {item.step}
                  </span>
                  <p className="text-[10px] text-[#8A8178] font-light leading-snug">
                    {item.text}
                  </p>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-gold/40 text-xs z-10">
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEVELOPMENT & REFINEMENT ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block">
                DEVELOPMENT &amp; REFINEMENT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                A single formula may pass through dozens of trials before
                approval.
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                <p>
                  Patience is treated as a material in its own right — as essential
                  to the finished work as any oil or absolute in the formula.
                </p>
                <p>
                  We would rather wait years for a fragrance that will last for
                  generations than release something the House cannot stand behind
                  for a century.
                </p>
              </div>
            </div>

            {/* Right Photo Grid */}
            <div className="lg:col-span-6 space-y-4">
              <ImagePlaceholder aspect="aspect-21/9" label="Glass Vials &amp; Formulations" />
              <div className="grid grid-cols-4 gap-3">
                <ImagePlaceholder aspect="aspect-square" label="Resin" />
                <ImagePlaceholder aspect="aspect-square" label="Flowers" />
                <ImagePlaceholder aspect="aspect-square" label="Smoke" />
                <ImagePlaceholder aspect="aspect-square" label="Gold Box" />
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Text */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE]">
                Understanding the craft makes one number mean something it did not
                before — <span className="text-gold">250.</span>
              </h3>
            </div>

            {/* Middle Button */}
            <div className="bg-[#0A0A0C] border border-white/5 p-6 flex flex-col justify-between space-y-4">
              <Link
                href="/edition-i"
                className="inline-flex items-center justify-between w-full bg-gold hover:bg-[#b5953d] text-[#060506] px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
              >
                <span>DISCOVER EDITION I IN FULL</span>
                <span>&rarr;</span>
              </Link>
              <p className="text-[10px] text-[#8A8178] font-light">
                Return to Edition I with full appreciation for the craft behind it.
              </p>
            </div>

            {/* Right Button */}
            <div className="bg-[#0A0A0C] border border-white/5 p-6 flex flex-col justify-between space-y-4">
              <button
                onClick={openApply}
                className="inline-flex items-center justify-between w-full border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-medium transition-colors bg-transparent"
              >
                <span>APPLY FOR A POSITION</span>
                <span>&rarr;</span>
              </button>
              <p className="text-[10px] text-[#8A8178] font-light">
                For those who want to be part of something built to last.
              </p>
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
