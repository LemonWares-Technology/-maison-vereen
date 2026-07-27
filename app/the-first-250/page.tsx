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

const RECENTLY_WELCOMED = [
  { no: "001", name: "James F.", country: "Nigeria", status: "Accepted" },
  { no: "002", name: "Sarah M.", country: "United Kingdom", status: "Accepted" },
  { no: "003", name: "Grace A.", country: "Ghana", status: "Accepted" },
  { no: "004", name: "David K.", country: "Canada", status: "Accepted" },
];

export default function TheFirst250Page() {
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
                <span className="font-serif text-xl text-[#C9A84C]">09</span>
                <div className="w-6 h-[1px] bg-[#C9A84C]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium">
                  LIVE FOUNDING REGISTRY
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                127 of 350. The House Is Being Assembled Now.
              </h1>

              <p className="text-sm md:text-base text-[#8A8178] font-light leading-relaxed">
                The live Founding Registry count reflects every applicant the House
                has personally reviewed and accepted — never an estimate, never
                inflated.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-4/3"
                className="w-full max-w-[500px] rounded-sm shadow-2xl"
                label="Founding Registry Ledger"
              />
            </div>
          </div>
        </section>

        {/* ── A LIVING RECORD ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="max-w-[800px] mx-auto text-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium block">
              A LIVING RECORD
            </span>
            <p className="text-sm sm:text-base text-[#B3A99B] font-light leading-relaxed">
              This page exists as a living record of the Founding Registry&apos;s
              growth. The count displayed here rises only when Maison Vereen
              formally accepts an applicant — never automatically, never on a
              timer, and never adjusted for effect.
            </p>
            <p className="text-sm sm:text-base text-[#8A8178] font-light leading-relaxed">
              As the count approaches three hundred and fifty, this page becomes
              the clearest, most honest signal of how close the Founding Registry
              is to closing.
            </p>
          </div>
        </section>

        {/* ── BIG COUNTER BOX ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="bg-[#0A0A0C] border border-[#C9A84C]/30 p-10 sm:p-16 max-w-[900px] mx-auto text-center space-y-8">
            <span className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#C9A84C] font-light block leading-none">
              127
            </span>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#EDE8DE] font-medium">
              ACCEPTED MEMBERS
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A8178]">
              out of 350
            </p>

            {/* Progress bar */}
            <div className="w-full bg-white/10 h-1 relative overflow-hidden rounded-full max-w-[500px] mx-auto">
              <div
                className="bg-[#C9A84C] h-full transition-all duration-1000"
                style={{ width: "36.2%" }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[#8A8178] max-w-[500px] mx-auto">
              <span>127</span>
              <span>350</span>
            </div>
          </div>
        </section>

        {/* ── RECENTLY WELCOMED ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="max-w-[900px] mx-auto space-y-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium block text-center">
              RECENTLY WELCOMED
            </span>

            <div className="bg-[#0A0A0C] border border-white/5 p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#8A8178]">
                      <th className="pb-3">MEMBER</th>
                      <th className="pb-3">COUNTRY</th>
                      <th className="pb-3 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[#EDE8DE]">
                    {RECENTLY_WELCOMED.map((row) => (
                      <tr key={row.no}>
                        <td className="py-4 font-serif">
                          <span className="text-[#C9A84C] font-mono mr-3">
                            {row.no}
                          </span>
                          {row.name}
                        </td>
                        <td className="py-4 text-[#8A8178]">{row.country}</td>
                        <td className="py-4 text-right text-[#C9A84C] font-medium">
                          {row.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY 350? ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Big Text */}
            <div className="bg-[#0A0A0C] border border-white/5 p-10 text-center">
              <span className="font-serif text-5xl sm:text-6xl text-[#C9A84C] font-light block mb-3">
                350
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#EDE8DE] font-semibold">
                MAXIMUM FOUNDING MEMBERS
              </span>
            </div>

            {/* Right Explanation */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium block">
                WHY 350?
              </span>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                The Registry accepts a maximum of three hundred and fifty members
                because the House honours scale as much as exclusivity. Only two
                hundred and fifty bottles exist in Edition I. The Registry is
                intentionally larger to ensure the House can select with care, never
                compromise on standards, and protect the integrity of the founding
                chapter.
              </p>
            </div>
          </div>
        </section>

        {/* ── GOLD SHIELD EMBLEM BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 text-center space-y-4 border-b border-white/5">
          <div className="w-10 h-10 border border-[#C9A84C]/40 mx-auto flex items-center justify-center bg-[#060506] mb-4">
            <span className="font-serif text-[#C9A84C] text-xs">MV</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
            This number only moves forward.
          </h2>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-semibold">
            NEVER ESTIMATED. NEVER INFLATED. NEVER RUSHED.
          </p>
        </section>

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto py-16 md:py-24 text-center space-y-8">
          <div className="space-y-4 max-w-[600px] mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
              Acceptance into the Registry is only the beginning
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8178] font-light">
              Membership in this House means much more.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={openApply}
              className="bg-[#C9A84C] hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              APPLY TO THE FOUNDING REGISTRY &rarr;
            </button>
            <Link
              href="/membership"
              className="border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#EDE8DE] hover:text-[#C9A84C] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              LEARN ABOUT MEMBERSHIP &amp; ACCESS &rarr;
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
