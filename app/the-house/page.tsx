"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

// Page 2 — THE HOUSE: Five Principles (exact from document)
const principles = [
  {
    num: "01",
    title: "Rarity is not manufactured.",
    body: "We do not create scarcity for effect. 250 bottles is not a marketing strategy. It is a commitment to permanence over volume.",
  },
  {
    num: "02",
    title: "Distinction is not sold. It is recognized.",
    body: "The house serves those who already carry it. We do not promise to make anyone more distinguished.",
  },
  {
    num: "03",
    title: "Craft is non-negotiable.",
    body: "Every material, every element, every experience connected to Maison Vereen must be genuinely extraordinary. No exceptions.",
  },
  {
    num: "04",
    title: "Africa is the origin, not the limitation.",
    body: "The house was born on this continent because this continent has produced the kind of people this house was built for. That origin is the story, not the asterisk.",
  },
  {
    num: "05",
    title: "The house is built for decades.",
    body: "Every decision is made with the question: will we be proud of this in twenty years? If the answer is uncertain, the answer is no.",
  },
];

export default function TheHousePage() {

  return (
    <>
      <Header  />
      <main className="bg-charcoal">

        {/* ── HERO — PAGE 12: "A House Is Not Built in a Season." ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[520px]">
                  <span className="section-tag">The House</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                    style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.8rem)" }}
                  >
                    A House Is Not Built{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>
                      in a Season.
                    </em>
                  </h1>
                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
                  >
                    Maison Vereen is building toward institutional permanence — a House whose values, culture, and craftsmanship are intended to outlast any single collection, founder, or era.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Everything explored elsewhere on this site — Edition I, the Signature Collection, the Founding Registry — exists within something larger: the House itself. This page steps back from any single product to describe the institution Maison Vereen intends to become.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    The House&apos;s values are simple and have not changed since its founding: craftsmanship without compromise, patience over speed, and an unwavering commitment to proving that African origin and global luxury standard are not opposing ideas but a single, obvious truth waiting to be demonstrated properly.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Maison Vereen&apos;s ambitions extend across generations, not seasons. The House hopes, a century from now, to be spoken of the way the world&apos;s oldest maisons are spoken of today — not as a brand that once trended, but as an institution that endured because it never lowered its standard to make growth easier.
                  </p>
                  <Link href="/social-proof" className="link-gold w-fit">
                    <span>Read What Others Are Saying</span>
                    <span className="text-gold">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-0 bg-[#060608] overflow-hidden">
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

        {/* ── 4-ICON PILLARS BAR — from screenshot layout, copy from doc Page 2 ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
              {[
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.9"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="0.9"/><path d="M2 12h20M4.5 6.5C6.8 8 9.3 9 12 9s5.2-1 7.5-2.5M4.5 17.5C6.8 16 9.3 15 12 15s5.2 1 7.5 2.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/></svg>,
                  label: "Heritage",
                  sub: "Rooted in Africa. Created for the world.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/></svg>,
                  label: "Excellence",
                  sub: "We pursue the highest standards in every creation.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  label: "Authenticity",
                  sub: "We stay true to our identity and our purpose.",
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/><path d="M12 2v20M3 7l9 5 9-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/></svg>,
                  label: "Legacy",
                  sub: "We create for today. We are remembered for tomorrow.",
                },
              ].map((item, i) => (
                <div key={i} className="group px-7 py-10 flex flex-col items-center text-center gap-4 hover:bg-white/2 transition-colors duration-400">
                  <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-400">{item.icon}</div>
                  <div className="w-4 h-px bg-gold/20 group-hover:w-8 group-hover:bg-gold/40 transition-all duration-500" />
                  <span className="uppercase tracking-[0.22em] text-[#8A8178] group-hover:text-[#C8C0B4] font-medium transition-colors duration-300" style={{ fontSize: "11px" }}>{item.label}</span>
                  <p className="text-[#3A3530] font-light leading-[1.6] group-hover:text-[#5A5449] transition-colors duration-300" style={{ fontSize: "13px" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY IT WAS CREATED — Page 2 ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Why it was created</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                  Because the house that should have existed{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>didn&apos;t.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Walk into any luxury fragrance counter in any city in the world. You will find houses built for aspiration — for who you want to become, what lifestyle you want to signal, what identity you want to purchase.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  What you will not find is a house built for who you already are. For the builder. The founder. The creator who needs no validation. The leader whose authority is not borrowed. This is the gap Maison Vereen was built to fill.
                </p>
              </div>
              <div className="space-y-6">
                <span className="section-tag">The Meaning of Distinction</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                  Distinction is not an achievement.{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>It is a characteristic.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Achievements can be listed. Distinction is felt. It is the quality in a person that makes a room rearrange itself when they enter. It is not performed. It is not purchased. It is carried.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Maison Vereen was built around the belief that this quality deserves to be recognized — not created, not simulated, not sold. The fragrance does not make you distinguished. The fragrance recognizes the distinction you already possess.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES & CULTURE ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Values &amp; Culture</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                  Culture,{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>before commerce.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Every person who works within Maison Vereen, in any capacity, is held to the same standard: craftsmanship first, growth second. Decisions that would compromise quality for speed or scale are not made here, regardless of opportunity.
                </p>
              </div>
              <div className="space-y-6">
                <span className="section-tag">The Next Century</span>
                <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                  The institution behind{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>the editions.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Maison Vereen is not building toward a successful launch. It is building toward an institution capable of outliving its founder, its first collectors, and its first century — the same way the world&apos;s most respected maisons were built, one deliberate decade at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FIVE PRINCIPLES ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28 space-y-12">
            <div className="space-y-4">
              <span className="section-tag">What we stand for</span>
              <h2 className="font-serif font-light text-[#E8E2D9] leading-[1.1]" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
                Values do not change with trends.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>Ours will not either.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {principles.map((p, i) => (
                <div key={i} className="group bg-[#0D0D0D] px-8 py-10 space-y-4 hover:bg-white/2 transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-mono text-gold/40" style={{ fontSize: "10px" }}>{p.num}</span>
                  <h3 className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300" style={{ fontSize: "21px" }}>
                    {p.title}
                  </h3>
                  <p className="text-[#7A7068] font-light leading-[1.7]" style={{ fontSize: "16px" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="font-serif font-light text-[#E8E2D9] max-w-[480px]" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}>
              What we hope to become in a hundred years.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <Link href="/social-proof" className="link-gold">
                <span>Read What Others Are Saying</span>
                <span className="text-gold">→</span>
              </Link>
              <Link
                href="/access"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Apply to the Founding Registry</span>
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
