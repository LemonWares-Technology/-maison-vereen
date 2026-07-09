"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 5 — THE MAISON VEREEN DIFFERENCE
// Exact copy from blueprint document

export default function TheDifferencePage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-[560px] space-y-8">
                  <span className="section-tag">The Maison Vereen Difference</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
                  >
                    The Difference Was Never{" "}
                    <em className="not-italic block mt-2" style={{ color: "#C9A84C" }}>
                      the Scent Alone.
                    </em>
                  </h1>
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    Every serious luxury house has its own philosophy. This is the architecture of Maison Vereen&apos;s — built around collectability, emotional ownership, and a culture rather than a catalogue.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Visitors who have considered other fragrance houses arrive here with a quiet, reasonable question: why is this different from everything else I have already looked at? The honest answer is rarely the scent alone — formulation skill exists at the highest level in many houses. The difference is the entire architecture surrounding the work.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen was not built to maximise how many bottles leave the House. It was built around collectability — limited, numbered, never-repeated editions; an artistic process that treats each formulation as a finished work rather than a renewable product line; and a culture in which ownership is something granted through relationship, not simply purchased on demand.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    This is offered as description, not comparison. Maison Vereen has no interest in positioning itself against any other house. Its difference is simply stated, and left for each visitor to weigh for themselves.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/the-house-hero.png"
                  alt="Maison Vereen — Architecture of difference"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.85 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/65 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── THREE SUPPORTING SECTIONS — exact from blueprint ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-0">
            {[
              {
                tag: "Collectability & Limited Editions",
                headline: "Most houses sell a bottle. This one offers a position.",
                body: "Edition I will never be remade, reissued, or extended. What is held by its two hundred and fifty owners is permanent in a way few luxury objects remain today — its value is not protected by marketing, but by the simple fact that it cannot be replicated.",
              },
              {
                tag: "Emotional Ownership & Future Value",
                headline: "Built to be inherited, not consumed.",
                body: "Owning something from Maison Vereen's founding chapter is closer to holding an early work from an artist before the world recognised their name. The House cannot promise future value — no serious house ever should — but it can promise that nothing about Edition I will ever be diminished by overproduction.",
              },
              {
                tag: "House Culture & Private Acquisition",
                headline: "Where other houses expand, this one closes.",
                body: "Acquisition at Maison Vereen happens through relationship — application, review, invitation — rather than instant purchase. This is not designed to create friction for its own sake. It exists because a House is assembled deliberately, member by member, the same way any institution intended to last is built.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group border-b border-white/5 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start ${i === 0 ? "border-t" : ""}`}
              >
                <div className="space-y-4">
                  <span className="section-tag">{item.tag}</span>
                  <h2
                    className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}
                  >
                    {item.headline}
                  </h2>
                </div>
                <p className="text-[#8A8070] font-light leading-[1.9] mt-2 lg:mt-8" style={{ fontSize: "17px" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OWNERSHIP, NOT ECOMMERCE ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
              <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#060608]">
                <Image
                  src="/images/the-house-belonging.png"
                  alt="Ownership at Maison Vereen"
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
                  <span className="section-tag">Ownership, Not Ecommerce</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    There is no cart.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      There is a conversation.
                    </em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Acquisition at Maison Vereen begins with an application and ends with an invitation. No transaction is immediate. No position is unconsidered. This is the architecture of a house that was built to last — and it begins the moment a visitor chooses to apply rather than simply purchase.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 pt-2">
                    <Link
                      href="/the-craft"
                      className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3 text-[#E8E2D9] transition-all duration-500"
                      style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                    >
                      <span className="uppercase font-medium">Meet the Artisans Behind Every Fragrance</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTAs ── */}
        <section className="border-b border-white/5 bg-[#080808]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="font-serif font-light text-[#E8E2D9] max-w-[480px]" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}>
              Philosophy explains why the House exists. The individuals behind every bottle explain how it is made real.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <Link href="/the-craft" className="link-gold">
                <span>Meet the Artisans</span>
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

        {/* PAGE 5 → PAGE 6 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Philosophy explains why the House exists. The individuals behind every bottle explain how it is made real.
            </p>
            <Link href="/the-craft" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Meet the Artisans Behind Every Fragrance →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
