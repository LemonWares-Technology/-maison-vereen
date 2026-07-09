"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhyExists() {
  return (
    <section id="why-exists" className="bg-charcoal border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">

          {/* Left — text panel */}
          <div className="flex items-center justify-center lg:justify-start px-6 sm:px-8 md:px-14 lg:px-16 py-16 md:py-24 lg:py-28 w-full">
            <div className="space-y-8 max-w-[520px] text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="section-tag">A House, Not a Brand.</span>

              <h2
                className="type-display"
              >
                Some houses sell scent.{" "}
                <em className="not-italic text-gold">
                  This one builds legacy.
                </em>
              </h2>

              <p className="type-body">
                Maison Vereen exists to elevate fragrance into collectible art — and to prove that a luxury house of true global standing can be born in Africa.
              </p>
              <p className="type-body">
                The House exists because a gap was left unfilled. Africa has supplied the world&apos;s perfumers with some of their rarest materials for generations, yet has never produced a fragrance house the world recognised as a serious luxury institution in its own right.
              </p>
              <p className="type-body">
                Maison Vereen was founded to close that gap — not by imitating the houses of Paris or Geneva, but by holding itself to the same uncompromising standard while remaining unmistakably of its own origin.
              </p>

              <Link href="/our-story" className="link-gold w-fit mx-auto lg:mx-0">
                <span>Discover Maison Vereen</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>

          {/* Right — image, same treatment as the-house page sections */}
          <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608] group">
            <Image
              src="/images/the-house-hero.png"
              alt="The vision behind Maison Vereen"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ opacity: 0.9 }}
            />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
