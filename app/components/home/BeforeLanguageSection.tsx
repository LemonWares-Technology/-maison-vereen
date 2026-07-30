"use client";

import Image from "next/image";

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

            <div className="space-y-6 text-[#EDE8DE] font-light leading-[1.9] max-w-155" style={{ fontSize: "1.0625rem" }}>
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

          {/* Right Column — Philosophy / Sensory Image (5 cols on lg) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-120 overflow-hidden rounded-xs shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/founder-image-2.webp"
                alt="The moment before language — Maison Vereen"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(6,5,6,0.35)_100%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#060506]/50 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
