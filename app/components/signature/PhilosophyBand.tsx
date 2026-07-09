"use client";

// PAGE 11 — Signature Collection philosophy band
// Blueprint: "Each one a character. None of them a category."

export default function PhilosophyBand() {
  return (
    <section className="bg-[#0D0D0D] border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-start">

          {/* Left — headline */}
          <div className="space-y-5">
            <span className="section-tag">The Collection</span>
            <h2
              className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              Each one a character.{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                None of them a category.
              </em>
            </h2>
          </div>

          {/* Right — body copy */}
          <div className="space-y-5">
            <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
              Each fragrance in the Collection is treated as a complete artistic statement: its own story, its own inspiration, its own character. None are framed as variations on a theme or filler around Edition I. Visitors are invited to discover each one individually, the way they might discover an artist&apos;s separate works.
            </p>
            <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
              There is no ecommerce experience here. Every fragrance in the Signature Collection leads to a personal conversation with the House&apos;s concierge — by design, not by limitation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
