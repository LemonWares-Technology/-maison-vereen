"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 6 — THE INDIVIDUAL BEHIND EVERY FRAGRANCE
// Exact copy from blueprint document

export default function TheCraftPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[560px] space-y-8">
                  <span className="section-tag">The Individual Behind Every Fragrance</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
                  >
                    Every Bottle Carries{" "}
                    <em className="not-italic block mt-2" style={{ color: "#C9A84C" }}>
                      a Person&apos;s Patience.
                    </em>
                  </h1>
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    A finished fragrance from Maison Vereen represents years of refinement — sourcing, testing, rejecting, and beginning again, until the formula deserved the House&apos;s name.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/house-section-image.png"
                  alt="Maison Vereen — hands at work, raw materials"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.85 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT — exact from blueprint ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] space-y-8">
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                Behind every Maison Vereen fragrance is a process most houses no longer have the patience for. It begins with sourcing — rare African materials selected not for cost efficiency but for character, often requiring relationships with growers and harvesters built over years rather than transactions completed in weeks.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                From there, development is slow and frequently unforgiving. Formulas are tested, set aside, revisited months later with fresh judgment, and rejected as often as they are advanced. Refinement continues until the master perfumer judges a formulation worthy of the House&apos;s name — a standard that has no lower tier, and no exceptions for deadlines.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                This page exists to honour that process, and the discipline of the people who carry it out, long before any visitor ever encounters the finished bottle.
              </p>
            </div>
          </div>
        </section>

        {/* ── RAW MATERIALS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/dark-stone.jpg"
                  alt="Raw materials — rare African resins and botanicals"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.8 }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/45" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D]">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Raw Materials</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    Raw material,{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      refined by obsession.
                    </em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen sources materials others overlook — rare resins, woods, and botanicals drawn from across the African continent, selected for the particular depth and character they bring rather than for ease of supply.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    These are not materials chosen for a story. They are chosen because they produce a quality of scent that cannot be replicated from elsewhere — a depth, a mineral permanence, an authority that the global fragrance supply chain has never found a substitute for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEVELOPMENT & REFINEMENT ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Development &amp; Refinement</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    Years,{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      distilled into millilitres.
                    </em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    A single Maison Vereen formulation may pass through dozens of iterations before approval. Patience is treated as a material in its own right — as essential to the finished work as any oil or absolute in the formula.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Nothing here was rushed to market. Craft is not a department. It is the entire House.
                  </p>
                  <div className="border-t border-white/5 pt-8 space-y-3">
                    <div className="w-8 h-px bg-gold/40" />
                    <p
                      className="font-serif font-light italic text-[#8A8070] leading-[1.55]"
                      style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)" }}
                    >
                      &ldquo;The hand behind the formula. Nothing leaves Maison Vereen because a deadline arrived.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/fragrance-dark.jpg"
                  alt="Maison Vereen — development and refinement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.75 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTAs ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="font-serif font-light text-[#E8E2D9] max-w-[480px]" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}>
              Understanding the craft makes one number mean something it did not before — two hundred and fifty.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <Link href="/edition-i" className="link-gold">
                <span>Discover Edition I in Full</span>
                <span className="text-gold">→</span>
              </Link>
              <Link
                href="/access"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Apply for a Position</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PAGE 6 → PAGE 7 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Understanding the craft makes one number mean something it did not before — two hundred and fifty.
            </p>
            <Link href="/edition-i" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Discover Edition I in Full →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
