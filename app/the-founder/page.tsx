"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 4 — THE FOUNDER'S STORY
// Exact copy from blueprint document

export default function TheFounderPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO — blueprint headline ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28 order-2 lg:order-1">
                <div className="space-y-9 max-w-[540px]">
                  <span className="section-tag">The Founder&apos;s Story</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
                  >
                    She Did Not Set Out to{" "}
                    <em className="not-italic block mt-2" style={{ color: "#C9A84C" }}>
                      Build a Perfume Brand.
                    </em>
                  </h1>
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    The most prestigious houses in the world communicate through their work, not their founders. Maison Vereen was built in that tradition.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[500px] lg:min-h-0 overflow-hidden bg-[#060608] order-1 lg:order-2">
                <Image
                  src="/founder-image-1.png"
                  alt="Founder of Maison Vereen"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-charcoal/50 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/30" />
                  <span className="block uppercase tracking-widest text-[#3A3028] font-light" style={{ fontSize: "9px" }}>
                    The Founder of Maison Vereen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT — exact from blueprint ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] space-y-8">
              <div className="space-y-6">
                <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                  Maison Vereen was founded on a simple, stubborn conviction: that a luxury fragrance house built to the world&apos;s highest standard could be built in Lagos, by an African founder, without asking permission or imitating anyone else&apos;s idea of what luxury should sound like.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                  That conviction did not arrive as a business plan. It arrived as a refusal — a refusal to accept that craftsmanship of this calibre belonged only to certain cities, certain histories, certain names. What followed was years of formulation, refinement, and quiet obsession with getting every detail, from the raw material to the bottle&apos;s weight in the hand, exactly right.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                  The founder&apos;s full story will be told over time, the way any serious house reveals itself — gradually, through the work. What matters at this stage is not her biography, but her intention: to build something that will still mean something in a hundred years, long after she is no longer the one telling its story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONVICTION OVER CREDENTIALS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">
              <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/founder-image-2.png"
                  alt="The founder's conviction — Maison Vereen"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-transparent" />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D]">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Conviction Over Credentials</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    The House speaks.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      The founder rarely needs to.
                    </em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The most prestigious houses in the world are remembered for their work, not their founders&apos; faces. Maison Vereen follows that same discipline deliberately — the House, not the individual, is what is being built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUILDING TO OUTLIVE HER ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[520px] space-y-8">
                  <span className="section-tag">Building to Outlive Her</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    Some things are built{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      to outlive their founder.
                    </em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Every decision made today — from Edition I&apos;s scarcity to the Founding Registry&apos;s careful structure — is made with one question in mind: will this still make sense in a century, under someone else&apos;s stewardship? If the answer is no, it does not happen.
                  </p>
                  <div className="border-t border-white/5 pt-8 space-y-4">
                    <div className="w-8 h-px bg-gold/40" />
                    <p
                      className="font-serif font-light italic text-[#8A8070] leading-[1.55]"
                      style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                    >
                      &ldquo;Obsession, properly aimed, becomes a House.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/the bottle.png"
                  alt="Maison Vereen Edition I"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-contain object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTAs ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p
              className="font-serif font-light text-[#E8E2D9] max-w-[480px]"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}
            >
              This was never meant to be finished quickly.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <Link href="/the-house" className="link-gold">
                <span>See What Makes the House Different</span>
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

        {/* PAGE 4 → PAGE 5 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Conviction explains why the House exists. What follows explains why it could only ever look like this.
            </p>
            <Link href="/the-house" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              See What Makes the House Different →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
