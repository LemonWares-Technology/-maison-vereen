"use client";

import Link from "next/link";

// PAGE 1 — Supporting Section: "Why Only 250"
// Blueprint: "Explain the scarcity as intentional craftsmanship logic, not a marketing device"

export default function WhyOnly250() {
  return (
    <section className="border-b border-white/5 bg-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left — Why Only 250 */}
          <div className="space-y-6">
            <span className="section-tag">Why Only 250</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.2vw, 2.8rem)" }}
            >
              Two hundred and fifty is not a marketing number.{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                It is a commitment.
              </em>
            </h2>
            <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
              Two hundred and fifty is not a marketing number. It is the number the House&apos;s master perfumer determined could be produced without compromising a single element of the formulation, the vessel, or the ceremony of ownership. Founding circles of this kind have always been small — not because exclusivity is fashionable, but because true craftsmanship has a ceiling, and Maison Vereen has chosen never to exceed it.
            </p>
          </div>

          {/* Right — The numbers */}
          <div className="space-y-10">
            {/* 250 gravity display */}
            <div className="border border-white/6 bg-[#080808] px-8 py-10 space-y-4">
              <p
                className="font-mono text-gold leading-none tabular-nums"
                style={{ fontSize: "clamp(4rem, 8vw, 6rem)", letterSpacing: "0.08em" }}
              >
                250
              </p>
              <p className="uppercase tracking-[0.3em] text-[#5A5449] font-medium" style={{ fontSize: "9px" }}>
                Bottles worldwide. Not per country.<br />Not per year. Total, globally, forever.
              </p>
              <div className="w-8 h-px bg-gold/30" />
              <p className="text-[#7A7068] font-light leading-[1.7]" style={{ fontSize: "15px" }}>
                When the two hundred and fiftieth bottle is placed into a collector&apos;s hands, the edition closes permanently. No reprint. No reissue. No anniversary release.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/access"
                className="inline-block bg-gold/90 hover:bg-gold px-8 py-3.5 text-charcoal transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                <span className="uppercase font-semibold">Apply for a Position</span>
              </Link>
              <Link
                href="/registry"
                className="inline-block border border-white/15 hover:border-gold/50 px-8 py-3.5 text-[#8A8178] hover:text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">View the Founding Registry</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
