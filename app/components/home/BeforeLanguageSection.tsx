"use client";

import BlankBox from "../ui/BlankBox";

export default function BeforeLanguageSection() {
  return (
    <section className="bg-[#060506] border-b border-white/5 py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-gold font-semibold block">
              BEFORE LANGUAGE.
            </span>

            <div className="space-y-6 text-[#8A8178] font-light leading-[1.9] max-w-155" style={{ fontSize: "1.0625rem" }}>
              <p>
                Before your name is known, before your story is told, before a single word has passed between you and a room — something has already been decided.
              </p>
              <p>
                Maison Vereen was built for that instant. The one that happens before language.
              </p>
              <p>
                This is not a house that asks you to become someone. It recognises who has already arrived.
              </p>
              <p>
                Edition I exists for the small number of people who have always understood the difference between fitting in and belonging — and who have been waiting, without quite knowing it, for something built to that standard.
              </p>
              <p>
                Two hundred and fifty bottles. No more will ever be made. What follows on this page is not a product description. It is an invitation to understand what you would be applying to become part of.
              </p>
            </div>
          </div>

          {/* Right Column — Blank Box (5 cols on lg) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <BlankBox
              aspectRatio="4/5"
              className="w-full max-w-120"
              label="ARCHITECTURAL FRAME"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
