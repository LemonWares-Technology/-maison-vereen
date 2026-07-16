"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

// PAGE 7 — EDITION I: HOUSE OF 250 (FULL PAGE)
// Blueprint sections (in order):
// 1. Hero: "Two Hundred and Fifty. No More, Ever."
// 2. Numbering Philosophy
// 3. Certificate of Authenticity & Ownership Experience
// 4. Why Edition I Will Never Return
// 5. CTAs: Apply to the Founding Registry / Understand the Founding Registry
// 6. Transition → PAGE 8

const ownershipItems = [
  "The Edition I bottle — hand-blown glass, African mineral inclusions, individually numbered, engraved.",
  "The Gold Ownership Card — 18-micron gold-plated metal, laser-engraved with owner name and bottle number, QR-authenticated.",
  "The Private Ownership Portal — personal digital archive, founder's video letter, edition provenance, authentication record.",
  "The Certificate of Authentication — security-printed, UV-reactive, holographic strip. Matches the bottle number.",
  "The Founder's Personal Letter — written for Edition I. Signed. Part of the edition's permanent record.",
  "Collector's Register entry — permanent documentation of ownership in the Maison Vereen founding archive.",
  "Priority access to all future editions — confirmed owners receive first access before any public announcement.",
];

export default function EditionIPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="space-y-8 max-w-[540px]">
                  <span className="section-tag">Edition I: House of 250</span>
                  <h1
                    className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
                  >
                    Two Hundred and Fifty.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>No More, Ever.</em>
                  </h1>

                  {/* Sub-headline — chosen from blueprint Item 3 alternatives */}
                  <p
                    className="font-serif font-light text-gold/80 italic"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}
                  >
                    History does not get a reprint.
                  </p>

                  <p
                    className="font-serif font-light text-[#C8BFB2]"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    Edition I of Many Editions is Maison Vereen&apos;s founding chapter — two hundred and fifty individually numbered bottles, each authenticated, documented, and permanent in a way few luxury objects remain today.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                    Edition I exists once. When the two hundred and fiftieth bottle is placed into a collector&apos;s hands, the edition closes permanently — not paused, not revisited in a future &ldquo;anniversary&rdquo; release, but closed, in the way a first edition of any serious work closes the moment its print run ends.
                  </p>
                  <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                    Each bottle carries an individual number, assigned in the sequence of acceptance into the Founding Registry, and a certificate of authenticity that documents its place within the two hundred and fifty. Ownership of an Edition I bottle is, in effect, ownership of a numbered position in the House&apos;s own founding history.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      onClick={() => setIsApplyOpen(true)}
                      className="inline-block bg-gold/90 hover:bg-gold px-8 py-3.5 text-charcoal transition-all duration-500"
                      style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                    >
                      <span className="uppercase font-semibold">Apply to the Founding Registry</span>
                    </button>
                    <Link
                      href="/registry"
                      className="inline-block border border-white/20 hover:border-gold/50 px-8 py-3.5 text-[#8A8178] hover:text-[#E8E2D9] transition-all duration-500"
                      style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                    >
                      <span className="uppercase font-medium">Understand the Founding Registry</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[440px] lg:min-h-0 bg-[#060608] overflow-hidden">
                <Image
                  src="/images/the bottle.png"
                  alt="Maison Vereen Edition I"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-contain object-center"
                  style={{ opacity: 0.85 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/30" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/80 via-transparent to-charcoal/15" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 40% 55% at 55% 40%, rgba(201,168,76,0.08) 0%, transparent 65%)" }}
                />
                <div className="absolute bottom-8 left-8 space-y-1.5 z-10">
                  <div className="w-5 h-px bg-gold/40" />
                  <span className="block uppercase tracking-widest text-[#7A7068]" style={{ fontSize: "10px" }}>Maison Vereen</span>
                  <span className="block uppercase tracking-widest text-[#5A5448]" style={{ fontSize: "10px" }}>Edition I — 250 Bottles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NUMBERING PHILOSOPHY ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Numbering Philosophy</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  A number that{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>will never change.</em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Numbers are assigned in the order applicants are formally accepted into the Founding Registry — meaning a bottle&apos;s number reflects not when it was purchased, but when its owner was recognised by the House. Early conviction is rewarded with early numbering.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Bottle 001 belongs to the first person the House accepted. Bottle 250 belongs to the last. Every number between them is equally permanent, equally authentic, and equally part of the founding record. But the lower the number, the earlier the belief.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-white/6 bg-[#080808] px-8 py-10 space-y-4">
                  <p
                    className="font-mono text-gold leading-none tabular-nums"
                    style={{ fontSize: "clamp(4rem, 8vw, 6rem)", letterSpacing: "0.08em" }}
                  >
                    250
                  </p>
                  <p className="uppercase tracking-[0.3em] text-[#5A5449] font-medium" style={{ fontSize: "9px" }}>
                    Numbered positions.<br />Owned once. Documented permanently.
                  </p>
                  <div className="w-8 h-px bg-gold/30" />
                  <p className="text-[#7A7068] font-light leading-[1.7]" style={{ fontSize: "15px" }}>
                    History does not get a reprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATE OF AUTHENTICITY & OWNERSHIP EXPERIENCE ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
              {/* Certificate image */}
              <div className="relative min-h-[480px] lg:min-h-0 overflow-hidden bg-[#080808] flex items-center justify-center p-8 md:p-12">
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)" }} />
                <div className="relative w-full max-w-[420px] mx-auto">
                  <div className="relative aspect-3/4 shadow-2xl" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.12)" }}>
                    <Image
                      src="/images/certificate.png"
                      alt="Maison Vereen Edition I — Certificate of Authenticity & Ownership"
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-contain"
                      style={{ opacity: 0.97 }}
                    />
                  </div>
                  <p className="text-center uppercase tracking-[0.25em] text-[#4A4438] font-light mt-4" style={{ fontSize: "9px" }}>
                    Certificate of Authenticity &amp; Ownership — Edition I
                  </p>
                </div>
              </div>
              {/* Text */}
              <div className="flex items-center px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-[#0D0D0D]">
                <div className="space-y-8 max-w-[480px]">
                  <span className="section-tag">Certificate of Authenticity &amp; Ownership Experience</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                  >
                    Numbered by hand.{" "}
                    <em className="not-italic" style={{ color: "#C9A84C" }}>Authenticated for life.</em>
                  </h2>
                  <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                    Every Edition I bottle is accompanied by a signed certificate of authenticity — security-printed, UV-reactive, holographic. It records the collector&apos;s name, the edition number, the bottle number, and the date of acquisition. Ownership includes private correspondence from the House at the time of acquisition and continued recognition as a founding member for as long as the House exists.
                  </p>
                  {/* Ownership items */}
                  <div className="space-y-3 border-t border-white/5 pt-6">
                    {ownershipItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="shrink-0 w-4 h-px bg-gold/35 mt-[11px]" />
                        <p className="text-[#7A7068] font-light leading-[1.7]" style={{ fontSize: "14px" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY EDITION I WILL NEVER RETURN ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[760px] space-y-8">
              <span className="section-tag">Why Edition I Will Never Return</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                The founding chapter does{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>not have a sequel.</em>
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                Maison Vereen will not reissue, extend, or reproduce Edition I under any future circumstance, regardless of demand. This is not a marketing position. It is the same discipline that makes any founding edition, in any serious collectible category, worth holding in the first place.
              </p>
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                When the two hundred and fiftieth bottle is placed into a collector&apos;s hands, the edition closes permanently — not paused, not revisited in a future &ldquo;anniversary&rdquo; release, but closed, in the way a first edition of any serious work closes the moment its print run ends.
              </p>
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
              Two hundred and fifty bottles require somewhere for two hundred and fifty stories to begin.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="inline-block bg-gold/90 hover:bg-gold px-8 py-3.5 text-charcoal transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-semibold">Apply to the Founding Registry</span>
              </button>
              <Link href="/registry" className="link-gold">
                <span>Understand the Founding Registry</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PAGE 7 → PAGE 8 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Two hundred and fifty bottles require somewhere for two hundred and fifty stories to begin. That place is the Founding Registry.
            </p>
            <Link href="/registry" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Apply to the Founding Registry →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}
