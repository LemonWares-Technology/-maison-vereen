"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 3 — THE PHILOSOPHY OF THE HOUSE
// Exact copy from blueprint document

const convictions = [
  {
    num: "I",
    title: "Craftsmanship",
    tag: "The House's standard for making.",
    body: "Nothing leaves Maison Vereen because a deadline arrived. It leaves because it is finished, by the only standard that matters here — the master perfumer's own.",
  },
  {
    num: "II",
    title: "Time",
    tag: "The House's relationship to pace.",
    body: "Formulation, ageing, and refinement are permitted the time they require. The House would rather delay a release by a year than release something it cannot stand behind for a century.",
  },
  {
    num: "III",
    title: "Memory",
    tag: "Fragrance as an instrument of memory.",
    body: "A fragrance is the only object capable of returning someone, instantly and involuntarily, to a moment they thought they had lost. Maison Vereen designs for that return, not merely for how a scent performs in the first hour.",
  },
  {
    num: "IV",
    title: "Identity",
    tag: "Fragrance as self-expression, not costume.",
    body: "A signature scent is not a mask. It is closer to a signature itself — unrepeatable, and recognisably the wearer's own. The House creates fragrances built to be worn for decades, not seasons.",
  },
  {
    num: "V",
    title: "Rarity & Legacy",
    tag: "Scarcity tied to permanence, not urgency.",
    body: "What is rare is rare because it was never compromised to meet demand. What is rare and well made becomes legacy — passed forward, told about, remembered after the person who first wore it is gone.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="border-b border-white/5 pt-[72px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
              <div className="flex items-center justify-center lg:justify-start px-6 sm:px-8 md:px-14 py-20 md:py-28 w-full">
                <div className="space-y-7 max-w-[560px] text-center lg:text-left flex flex-col items-center lg:items-start">
                  <span className="section-tag">The Philosophy of the House</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.05]"
                    style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)" }}
                  >
                    Luxury Is Not Volume.{" "}
                    <em className="not-italic text-gold">It Is Conviction.</em>
                  </h1>
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    Ten convictions govern Maison Vereen. None of them are negotiable, and none of them were chosen for how they would market.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Every house, knowingly or not, is built on a set of beliefs. Most never state them. Maison Vereen states them plainly, because a House that intends to last a century cannot afford to leave its convictions unwritten.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    These beliefs are not slogans. They are the standard against which every formulation, every material, every piece of correspondence with a collector, and every page of this website has been measured before being approved.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/philosophy-hero.png"
                  alt="Maison Vereen — The Philosophy of the House"
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

        {/* ── FIVE CONVICTIONS — exact from blueprint ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-0">
            {convictions.map((c, i) => (
              <div
                key={i}
                className={`group border-b border-white/5 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16 items-start ${i === 0 ? "border-t" : ""}`}
              >
                {/* Number + tag */}
                <div className="flex lg:flex-col gap-4 lg:gap-3 items-center lg:items-start">
                  <span
                    className="font-serif text-gold/50 group-hover:text-gold/80 transition-colors duration-300"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", lineHeight: 1 }}
                  >
                    {c.num}
                  </span>
                  <span className="uppercase tracking-[0.2em] text-[#5A5449] font-medium" style={{ fontSize: "9px" }}>
                    {c.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="space-y-4">
                  <h2
                    className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                  >
                    {c.title}
                  </h2>
                  <p className="text-[#8A8070] font-light leading-[1.9] max-w-[700px]" style={{ fontSize: "17px" }}>
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CLOSING QUOTE ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[700px] mx-auto text-center space-y-8">
              <div className="gold-rule mx-auto" />
              <p
                className="font-serif font-light italic text-[#8A8178] leading-[1.55] tracking-[0.03em]"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
              >
                &ldquo;Memory is the only packaging that lasts.&rdquo;
              </p>
              <div className="gold-rule mx-auto" />
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
              Rarity is not a strategy. It is a value.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <Link href="/the-founder" className="link-gold">
                <span>Meet the Founder</span>
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

        {/* PAGE 3 → PAGE 4 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              A philosophy this deliberate does not appear by accident. It begins with one person&apos;s conviction.
            </p>
            <Link href="/the-founder" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Meet the Founder →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
