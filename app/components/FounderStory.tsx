"use client";

import Image from "next/image";
import Link from "next/link";

export default function FounderStory() {
  return (
    <section
      id="founder-story"
      className="bg-charcoal border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
          {/* Left — image: side profile, low light, looking away — from document design note */}
          <div className="relative min-h-[440px] lg:min-h-0 overflow-hidden bg-[#060608] order-2 lg:order-1 group">
            <Image
              src="/founder-image-1.png"
              alt="Founder of Maison Vereen — side profile"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ opacity: 0.9 }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-[#060608]/40 via-transparent to-transparent" />

            {/* Bottle visible in background — slightly out of focus, from doc */}
            <div className="absolute bottom-8 right-8 space-y-1.5 z-10 text-right">
              <div className="w-5 h-px bg-gold/25 ml-auto" />
              <span
                className="block uppercase tracking-widest text-[#3A3028] font-light"
                style={{ fontSize: "9px" }}
              >
                The Founder of Maison Vereen
              </span>
            </div>
          </div>

          {/* Right — text: exact copy from document Page 1 and Page 4 */}
          <div className="flex items-center justify-center lg:justify-start px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D] order-1 lg:order-2 w-full">
            <div className="space-y-9 max-w-[480px] text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="section-tag">The Founder&apos;s Story</span>

              {/* Blueprint PAGE 4 headline — home page preview */}
              <h2
                className="type-display"
              >
                She Did Not Set Out to Build{" "}
                <em
                  className="block not-italic mt-2 text-gold"
                >
                  a Perfume Brand.
                </em>
              </h2>

              {/* Blueprint PAGE 4 main content — condensed for home */}
              <p
                className="type-body"
              >
                Maison Vereen was founded on a simple, stubborn conviction: that a luxury fragrance house built to the world&apos;s highest standard could be built in Lagos, by an African founder, without asking permission or imitating anyone else&apos;s idea of what luxury should sound like.
              </p>
              <p
                className="type-body"
              >
                That conviction did not arrive as a business plan. It arrived as a refusal — a refusal to accept that craftsmanship of this calibre belonged only to certain cities, certain histories, certain names.
              </p>
              <p
                className="type-body"
              >
                The most prestigious houses in the world communicate through their work, not their founders. Maison Vereen was built in that tradition.
              </p>

              <Link href="/the-founder" className="link-gold w-fit mx-auto lg:mx-0">
                <span>The Founder</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
