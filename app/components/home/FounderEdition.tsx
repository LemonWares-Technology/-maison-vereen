"use client";

import Link from "next/link";
import Image from "next/image";

// PAGE 1 — Supporting Section: "The Founder Edition"
// Blueprint: "Introduce Edition I as the flagship founding chapter of the House"

export default function FounderEdition() {
  return (
    <section className="border-b border-white/5 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          {/* Image side */}
          <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#060608]">
            <Image
              src="/images/the bottle.png"
              alt="Maison Vereen Edition I — The Founder Edition"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
              style={{ opacity: 0.85 }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/60" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060608]/80 via-transparent to-transparent" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 45% 55% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-6 sm:px-8 md:px-14 lg:px-20 py-20 md:py-28">
            <div className="space-y-8 max-w-[520px]">
              <span className="section-tag">The Founder Edition</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Those who hold a bottle from Edition I will hold something{" "}
                <em className="not-italic" style={{ color: "#C9A84C" }}>
                  no House can ever offer again: the first.
                </em>
              </h2>
              <p className="text-[#7A7068] font-light leading-[1.9]" style={{ fontSize: "17px" }}>
                Edition I is the founding chapter of Maison Vereen — the work from which every future edition will be measured. It was not created to be reordered, restocked, or repeated. It was created to exist once, completely, and then to close.
              </p>
              <Link href="/edition-i" className="link-gold w-fit">
                <span>Discover Edition I in Full</span>
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
