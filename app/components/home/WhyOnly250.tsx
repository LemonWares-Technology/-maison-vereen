"use client";

import Image from "next/image";

const WORLDWIDE_LINES = [
  "Bottles Worldwide.",
  "Not Per Country.",
  "Not Per Year.",
  "Total, Globally, Forever.",
];

export default function WhyOnly250() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Shared marble field with the closure banner below */}
      <Image
        src="/thunderrock.webp"
        alt=""
        fill
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#060506]/78" />

      <div className="relative z-10 w-[90%] md:w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-24 items-start">
          <div className="space-y-8 md:space-y-10">
            <p
              className="font-serif font-light text-gold leading-none tracking-tighter"
              style={{ fontSize: "clamp(5.5rem, 16vw, 11rem)" }}
            >
              250
            </p>

            <div className="max-w-xs space-y-1">
              {WORLDWIDE_LINES.map((line) => (
                <p
                  key={line}
                  className="font-sans text-[11px] uppercase tracking-[0.28em] text-body-muted font-light leading-relaxed py-1"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:space-y-7 lg:pt-8">
            <div className="space-y-2.5">
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium block">
                Why Only 250
              </span>
            </div>


            <h2
              className="font-serif font-light text-[#F2EDE4] leading-[1.2]"
              style={{ fontSize: "clamp(1.65rem, 3.2vw, 2.5rem)" }}
            >
              Two hundred and fifty is not a marketing number. It is a
              commitment.
            </h2>

            <div className="space-y-5 text-body-muted text-base font-light leading-widest max-w-xl">
              <p>
                The House&apos;s master perfumer determined this was the highest
                number that could be produced without compromising a single
                element of the formulation, the vessel, or the ceremony of
                ownership.
              </p>
              <p>
                Founding circles of this kind have always been small — not
                because exclusivity is fashionable, but because true
                craftsmanship has a ceiling, and Maison Vereen has chosen never
                to exceed it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
