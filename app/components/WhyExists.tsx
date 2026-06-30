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
              <span className="section-tag">Why Maison Vereen Exists</span>

              <h2
                className="type-display"
              >
                There was a gap.{" "}
                <em className="not-italic text-gold">
                  We built the house to fill it.
                </em>
              </h2>

              <p className="type-body">
                Every luxury fragrance house in the world was built by someone,
                somewhere, for a vision they could not find elsewhere. Chanel
                saw a woman the fashion world hadn&apos;t dressed yet. Hermès
                saw an object the market hadn&apos;t built yet. We saw an
                individual the fragrance world had never celebrated.
              </p>
              <p className="type-body">
                The builder. The visionary. The founder. The creator. The
                leader who moves without permission. The individual whose
                presence is felt before they speak.
              </p>
              <p className="type-body">
                No fragrance house was built for this person. Until now.
              </p>

              <Link href="/the-house" className="link-gold w-fit mx-auto lg:mx-0">
                <span>The House</span>
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
