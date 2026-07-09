"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 10 — MEMBERSHIP & ACCESS
// Exact copy from blueprint document

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[720px] space-y-8">
              <span className="section-tag">Membership &amp; Access</span>
              <h1
                className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
              >
                Membership Is Not a Tier.{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  It Is a Relationship.
                </em>
              </h1>
              <p
                className="font-serif font-light text-[#C8BFB2]"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
              >
                Membership in Maison Vereen extends well beyond a single acquisition — it is an ongoing relationship between the House and the people who help compose its history.
              </p>
              <div className="space-y-6">
                <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                  For most luxury brands, the relationship with a customer effectively ends at the point of sale. Maison Vereen was built on the opposite premise — that acquiring a piece of the House&apos;s work is the beginning of a relationship, not its conclusion.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                  Founding Registry members and Edition I owners are afforded a continuing place within the House: priority access to future editions before they are announced publicly, private experiences extended only to members, and a direct line of communication with the House that does not exist for the general public.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                  This page sets expectations honestly. Membership does not entitle anyone to a future bottle, and the House makes no promises it cannot keep. What it does promise is recognition, priority, and access — extended for as long as the relationship is held in good faith on both sides.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRIORITY ACCESS & FUTURE EDITIONS ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
              <div className="space-y-6">
                <span className="section-tag">Priority Access &amp; Future Editions</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  Access, extended —{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>
                    not sold.
                  </em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Members are informed of future editions, collaborations, and limited releases before any public announcement is made — a courtesy extended in recognition of their early conviction in the House.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  Priority is earned through presence, not payment. The individuals who were part of the House earliest are recognised as such, in every future chapter the House produces.
                </p>
              </div>
              <div className="space-y-6">
                <span className="section-tag">Private Experiences &amp; Invitations</span>
                <h2
                  className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
                >
                  Beyond the bottle:{" "}
                  <em className="not-italic" style={{ color: "#C9A84C" }}>
                    a continuing relationship.
                  </em>
                </h2>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  From time to time, the House extends private invitations to members — tastings, workshops, and gatherings designed to deepen the relationship between Maison Vereen and the people who compose its founding history.
                </p>
                <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
                  These are not loyalty perks. They are the natural extension of a relationship the House takes seriously — and intends to hold for as long as the relationship is held in good faith on both sides.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── THIS IS WHERE THE RELATIONSHIP BEGINS ── */}
        <section className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
            <div className="max-w-[680px] mx-auto text-center space-y-8">
              <div className="w-8 h-px bg-gold/30 mx-auto" />
              <p
                className="font-serif font-light text-[#C8BFB2] leading-[1.55]"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
              >
                &ldquo;This is where the relationship begins, not ends.&rdquo;
              </p>
              <div className="w-8 h-px bg-gold/30 mx-auto" />
              <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "16px" }}>
                Joining the Founding Registry is the first step. What it opens is not a transaction, but a place within the House — permanent, recognised, and growing in meaning as the House itself grows.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                <Link
                  href="/access"
                  className="inline-block bg-gold/90 hover:bg-gold px-10 py-4 text-charcoal transition-all duration-500"
                  style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                >
                  <span className="uppercase font-semibold">Apply to the Founding Registry</span>
                </Link>
                <Link
                  href="/fragrance-library"
                  className="inline-block border border-white/20 hover:border-gold/50 px-10 py-4 text-[#C8BFB2] hover:text-[#E8E2D9] transition-all duration-500"
                  style={{ fontSize: "11px", letterSpacing: "0.28em" }}
                >
                  <span className="uppercase font-medium">Explore the Signature Collection</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 10 → PAGE 11 transition */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
            <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
              Membership is one path into the House. The Signature Collection is another — open, permanent, and entirely its own.
            </p>
            <Link href="/fragrance-library" className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium" style={{ fontSize: "10px" }}>
              Explore the Signature Collection →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
