"use client";

export default function WhyOnly250() {
  return (
    <section className="bg-[#060506] border-b border-white/5 py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column — 250 Numeric Display (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <p
              className="font-serif font-light text-gold leading-none tabular-nums tracking-tighter"
              style={{ fontSize: "clamp(6rem, 13vw, 11rem)" }}
            >
              250
            </p>

            <div className="space-y-1 pt-2">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE] font-medium leading-relaxed">
                BOTTLES WORLDWIDE.
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE] font-medium leading-relaxed">
                NOT PER COUNTRY.
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE] font-medium leading-relaxed">
                NOT PER YEAR.
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE] font-medium leading-relaxed">
                TOTAL, GLOBALLY, FOREVER.
              </p>
            </div>
          </div>

          {/* Right Column — Narrative Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7 pt-4 lg:pt-0">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-gold font-semibold block">
              WHY ONLY 250
            </span>

            <h2
              className="font-serif font-light text-[#EDE8DE] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
            >
              Two hundred and fifty is not a marketing number. <br className="hidden sm:block" />
              It is a commitment.
            </h2>

            <div className="space-y-6 text-[#EDE8DE] font-light leading-[1.9] max-w-155" style={{ fontSize: "1.0625rem" }}>
              <p>
                The House&apos;s master perfumer determined this was the highest number that could be produced without compromising a single element of the formulation, the vessel, or the ceremony of ownership.
              </p>
              <p>
                Founding circles of this kind have always been small — not because exclusivity is fashionable, but because true craftsmanship has a ceiling, and Maison Vereen has chosen never to exceed it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
