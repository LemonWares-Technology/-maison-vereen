"use client";
import Link from "next/link";

// Blueprint PAGE 1 — Dual Pathway section (final choice)
// Primary: "Apply for a Position" | Secondary: "Speak to a Concierge"

export default function DualPathway() {
  return (
    <section className="bg-charcoal py-24 md:py-32 lg:py-40 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14">

        <div className="text-center space-y-6 mb-16 md:mb-24">
          <span className="section-tag">Two Paths. One House.</span>
          <h2
            className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Where do you belong?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 max-w-[1000px] mx-auto">

          {/* Path 1 — Edition I */}
          <div className="bg-[#0D0D0D] p-10 md:p-14 space-y-8 flex flex-col group hover:bg-[#111] transition-colors duration-500 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="space-y-4 flex-1">
              <span className="type-mono text-gold/60">Path One</span>
              <h3
                className="font-serif font-light text-[#E8E2D9]"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
              >
                Apply for a Position
              </h3>
              <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>
                Two hundred and fifty individually numbered bottles. Africa&apos;s first serious luxury fragrance house. Access by application only — reviewed personally by the House.
              </p>
            </div>
            <Link
              href="/access"
              className="inline-flex items-center gap-4 uppercase tracking-[0.2em] font-medium text-[#E8E2D9] group-hover:text-gold transition-colors"
              style={{ fontSize: "10px" }}
            >
              Apply for a Position
              <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-gold/60 transition-all duration-500" />
            </Link>
          </div>

          {/* Path 2 — Signature Collection */}
          <div className="bg-[#080808] p-10 md:p-14 space-y-8 flex flex-col group hover:bg-[#111] transition-colors duration-500 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gold/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="space-y-4 flex-1">
              <span className="type-mono text-gold/60">Path Two</span>
              <h3
                className="font-serif font-light text-[#E8E2D9]"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
              >
                Speak to a Concierge
              </h3>
              <p className="text-[#5A5449] font-light leading-[1.75]" style={{ fontSize: "16px" }}>
                The Signature Collection — the permanent, reorderable body of work. No application required. Every acquisition is a personal conversation with the House&apos;s concierge.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 uppercase tracking-[0.2em] font-medium text-[#E8E2D9] group-hover:text-gold transition-colors"
              style={{ fontSize: "10px" }}
            >
              Speak to a Concierge
              <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-gold/60 transition-all duration-500" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
