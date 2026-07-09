"use client";

import Link from "next/link";

// PAGE 11 — Signature Collection bottom CTA
// Blueprint CTAs: "Speak to a Concierge" (primary) / "Request Details" (secondary)
// Transition: "The Signature Collection is the ongoing work. What follows is the institution behind all of it."

export default function BottomCTA() {
  return (
    <>
      <section className="bg-[#080808] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-20 md:py-28">
          <div className="max-w-[640px] space-y-8">
            <span className="section-tag">Concierge-Based Acquisition</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              Always available.{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                Never diluted.
              </em>
            </h2>
            <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
              At the close of every fragrance page, visitors are invited to speak with a concierge, request details, or continue the conversation by WhatsApp or email. There is no &lsquo;Add to Cart&rsquo; anywhere within Maison Vereen — acquiring a Signature Collection fragrance is always a personal exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Link
                href="/contact"
                className="inline-block bg-gold/90 hover:bg-gold px-10 py-4 text-charcoal transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                <span className="uppercase font-semibold">Speak to a Concierge</span>
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-white/15 hover:border-gold/50 px-10 py-4 text-[#8A8178] hover:text-[#E8E2D9] transition-all duration-500"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                <span className="uppercase font-medium">Request Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 11 → PAGE 12 transition */}
      <section className="bg-[#060506] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 text-center">
          <p className="font-serif font-light italic text-[#7A7068]" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
            The Signature Collection is the ongoing work. What follows is the institution behind all of it.
          </p>
          <Link
            href="/the-house"
            className="inline-block mt-4 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium"
            style={{ fontSize: "10px" }}
          >
            The House →
          </Link>
        </div>
      </section>
    </>
  );
}
