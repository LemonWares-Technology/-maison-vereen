"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 12 — THE HOUSE
// Blueprint sections (in order):
// 1. Hero: "A House Is Not Built in a Season."
// 2. Values & Culture
// 3. The Next Century
// 4. CTAs: Apply to the Founding Registry / Read What Others Are Saying
// 5. Transition → PAGE 13

export default function TheHousePage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[560px]">
                  <span className="section-tag">The House</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
                  >
                    A House Is Not Built{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      in a Season.
                    </em>
                  </h1>
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    Maison Vereen is building toward institutional permanence — a House whose values, culture, and craftsmanship are intended to outlast any single collection, founder, or era.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                    Everything explored elsewhere on this site — Edition I, the Signature Collection, the Founding Registry — exists within something larger: the House itself. This page steps back from any single product to describe the institution Maison Vereen intends to become.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                    The House&apos;s values are simple and have not changed since its founding: craftsmanship without compromise, patience over speed, and an unwavering commitment to proving that African origin and global luxury standard are not opposing ideas but a single, obvious truth waiting to be demonstrated properly.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                    Maison Vereen&apos;s ambitions extend across generations, not seasons. The House hopes, a century from now, to be spoken of the way the world&apos;s oldest maisons are spoken of today — not as a brand that once trended, but as an institution that endured because it never lowered its standard to make growth easier.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[440px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/the-house-hero.png"
                  alt="Maison Vereen — The House"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES & CULTURE + THE NEXT CENTURY ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Values &amp; Culture</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  Culture,{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>before commerce.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Every person who works within Maison Vereen, in any capacity, is held to the same standard: craftsmanship first, growth second. Decisions that would compromise quality for speed or scale are not made here, regardless of opportunity.
                </p>
              </div>
              <div className="space-y-6">
                <span className="section-tag">The Next Century</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  This is the House Maison Vereen{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>intends to become.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Maison Vereen is not building toward a successful launch. It is building toward an institution capable of outliving its founder, its first collectors, and its first century — the same way the world&apos;s most respected maisons were built, one deliberate decade at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTAs ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p
              className="font-serif font-light text-[#E8E2D9] max-w-[520px]"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}
            >
              What we hope to become in a hundred years.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <Link
                href="/access"
                className="inline-block bg-gold/90 hover:bg-gold px-8 py-3.5 text-charcoal transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                <span className="uppercase font-semibold">Apply to the Founding Registry</span>
              </Link>
              <Link href="/social-proof" className="link-gold">
                <span>Read What Others Are Saying</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PAGE 12 → PAGE 13 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              An institution is proven not by what it says about itself, but by what others say about it.
            </p>
            <Link href="/social-proof" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Read What Others Are Saying →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
