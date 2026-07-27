"use client";

import Link from "next/link";
import BlankBox from "../ui/BlankBox";

export default function FounderEdition() {
  return (
    <section className="bg-[#060506] border-b border-white/5 py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Blank Box (5 cols on lg) */}
          <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
            <BlankBox
              aspectRatio="4/5"
              className="w-full max-w-115"
              label="FOUNDER EDITION BOTTLE FRAME"
            />
          </div>

          {/* Right Column — Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7 order-1 lg:order-2">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-gold font-semibold block">
              THE FOUNDER EDITION
            </span>

            <h2
              className="font-serif font-light text-[#EDE8DE] leading-[1.08]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              The first.
            </h2>

            <div className="space-y-6 text-[#8A8178] font-light leading-[1.9] max-w-150" style={{ fontSize: "1.0625rem" }}>
              <p>
                Those who hold a bottle from Edition I will hold something no House can ever offer again: the first.
              </p>
              <p>
                Edition I is the founding chapter of Maison Vereen — the work from which every future edition will be measured.
              </p>
              <p>
                It was not created to be reordered, restocked, or repeated. It was created to exist once, completely, and then to close.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/edition-i"
                className="inline-flex items-center gap-3 border border-[#7A7068]/40 hover:border-gold text-[#EDE8DE] hover:text-gold px-7 py-3.5 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-medium transition-all duration-300 bg-[#060506]"
              >
                <span>DISCOVER EDITION I IN FULL</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
