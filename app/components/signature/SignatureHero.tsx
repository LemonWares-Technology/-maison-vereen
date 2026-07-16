"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// PAGE 11 — SIGNATURE COLLECTION HERO
// Exact blueprint: "The Permanent Work of the House."

export default function SignatureHero() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCTA(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[#060506] pt-[100px] md:pt-[125px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maison-vereen-access.png"
          alt="Maison Vereen Signature Collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#060506]/98 via-[#060506]/65 to-[#060506]/30" />
        <div className="absolute inset-0 bg-linear-to-r from-[#060506]/80 via-transparent to-[#060506]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 pb-20 md:pb-28">
        <div className="max-w-[680px] space-y-8">
          <span className="section-tag">Signature Collection</span>
          <h1
            className="font-serif font-light text-[#EDE7DC] leading-[1.05] anim-fade-up"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
          >
            The Permanent Work{" "}
            <em className="not-italic" style={{ color: "#C9A84C" }}>
              of the House.
            </em>
          </h1>

          {/* Sub-headline — chosen from blueprint Item 3 alternatives */}
          <p
            className="font-serif font-light text-gold/80 italic anim-fade-up-d1"
            style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}
          >
            Each one a character. None of them a category.
          </p>

          <p
            className="font-serif font-light text-[#C8BFB2] italic anim-fade-up-d2"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
          >
            The Signature Collection represents Maison Vereen&apos;s permanent body of work — fragrances available on an ongoing basis, each developed with the same standard applied to Edition I.
          </p>
          <p
            className="text-[#8A8070] font-light leading-[1.85] max-w-[520px] anim-fade-up-d2"
            style={{ fontSize: "1.0625rem" }}
          >
            Where Edition I is finite by design, the Signature Collection is the House&apos;s enduring body of work — fragrances intended to remain part of Maison Vereen&apos;s offering for years, refined and revisited as the House&apos;s craft continues to evolve, but never produced at the expense of quality.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out anim-fade-up-d3"
            style={{ opacity: showCTA ? 1 : 0 }}
          >
            <a
              href="#fragrances"
              className="inline-block bg-gold/90 hover:bg-gold px-8 py-3.5 text-charcoal transition-all duration-500"
              style={{ fontSize: "10px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-semibold">Speak to a Concierge</span>
            </a>
            <Link
              href="/contact"
              className="inline-block border border-[#E8E2D9]/25 hover:border-gold/50 px-8 py-3.5 text-[#8A8070] hover:text-[#E8E2D9] transition-all duration-500"
              style={{ fontSize: "10px", letterSpacing: "0.3em" }}
            >
              <span className="uppercase font-medium">Request Details</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
