"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 2 — DISCOVER MAISON VEREEN
// Exact copy from blueprint document

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[580px] space-y-8">
                  <span className="section-tag">Discover Maison Vereen</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
                  >
                    A House,{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      Not a Brand.
                    </em>
                  </h1>
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                  >
                    Maison Vereen exists to elevate fragrance into collectible art — and to prove that a luxury house of true global standing can be born in Africa.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen is a luxury maison built around two distinct experiences: Edition I, the founding collector&apos;s chapter limited to two hundred and fifty bottles, and the Signature Collection, the House&apos;s permanent body of artistic work. Both are expressions of the same conviction — that fragrance, made without compromise, deserves to be treated as art rather than inventory.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The House exists because a gap was left unfilled. Africa has supplied the world&apos;s perfumers with some of their rarest materials for generations, yet has never produced a fragrance house the world recognised as a serious luxury institution in its own right. Maison Vereen was founded to close that gap — not by imitating the houses of Paris or Geneva, but by holding itself to the same uncompromising standard while remaining unmistakably of its own origin.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    This is a long-term undertaking. Maison Vereen is not building toward a season or a single collection. It is building toward a century — a House whose name will mean, decades from now, what the world&apos;s oldest maisons mean today.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/the-house-hero.png"
                  alt="Maison Vereen — Discover the House"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE ARE ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">What We Are</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  Some houses sell scent.{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>
                    This one builds legacy.
                  </em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Maison Vereen is a fragrance house, not a fragrance brand — a distinction the House holds carefully. A brand sells a product range. A house builds a body of work, a philosophy, and a relationship with the people who choose to be part of it. Every decision here, from the number of bottles in Edition I to the language used to describe a single note, is made in service of that distinction.
                </p>
              </div>
              <div className="space-y-6">
                <span className="section-tag">Why Fragrance Can Become Art</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  Created once. Documented permanently.{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>
                    Never diluted by repetition.
                  </em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Wine, watches, and rare manuscripts are all collected for the same underlying reasons: scarcity, craftsmanship, provenance, and the story a single object carries forward. Fragrance has rarely been built with the same discipline — most houses treat scent as renewable inventory rather than a finished work. Maison Vereen treats every formulation, especially within Edition I and subsequent Editions of 250, as a singular work: created once, documented permanently, and never diluted by repetition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPLIT IMAGE SECTION ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/house-section-image.png"
                  alt="Maison Vereen — African materials, hands at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.85 }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/40" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D]">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Building Toward a Century</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    Not a brand that once trended.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      An institution that endured.
                    </em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen is not building toward a season or a single collection. It is building toward a century — a House whose name will mean, decades from now, what the world&apos;s oldest maisons mean today.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The House hopes, a century from now, to be spoken of the way the world&apos;s oldest maisons are spoken of today — not as a brand that once trended, but as an institution that endured because it never lowered its standard to make growth easier.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 pt-2">
                    <Link
                      href="/philosophy"
                      className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                      style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                    >
                      <span className="uppercase font-medium">Continue to The Philosophy</span>
                    </Link>
                    <Link href="/access" className="link-gold self-center">
                      <span>Apply for a Position</span>
                      <span className="text-gold">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 2 → PAGE 3 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Understanding what Maison Vereen is naturally raises a deeper question — what does it believe?
            </p>
            <Link href="/philosophy" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Continue to The Philosophy →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
