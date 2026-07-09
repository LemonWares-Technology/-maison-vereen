"use client";
import Link from "next/link";

// Blueprint PAGE 1 — home page Signature Collection preview
// Headline: "The Permanent Work of the House."
// CTAs: Speak to a Concierge (primary) / Browse All Fragrances (secondary)

const fragrances = [
  {
    family: "Woody · Resinous",
    name: "Ébène Sacré",
    notes: "Oud · Sandalwood · Amber",
    desc: "A meditation on sacred wood and dark resins, built around an aged oud absolute and a base of warm Mysore sandalwood. Earthy, enduring, unhurried.",
  },
  {
    family: "Citrus · Aromatic",
    name: "Aube Verte",
    notes: "Bergamot · Vetiver · Cedar",
    desc: "The sharp clarity of Calabrian bergamot opens onto a heart of aromatic herbs and damp earth. A fragrance for mornings that feel like beginnings.",
  },
  {
    family: "Floral · Musky",
    name: "Soie de Minuit",
    notes: "Rose Absolute · Cashmere · Musk",
    desc: "A rose of unusual depth — not bright, not feminine in the obvious sense. Heavy with cashmere woods and a musk that clings like memory to warm skin.",
  },
];

export default function TheSignatureCollection() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 lg:py-40 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 space-y-20">

        {/* Header — exact blueprint copy */}
        <div className="max-w-[680px] space-y-6 flex flex-col items-start">
          <span className="section-tag">World Two — The Signature Collection</span>
          <h2
            className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            The Permanent Work{" "}
            <em className="not-italic" style={{ color: "#C9A84C" }}>
              of the House.
            </em>
          </h2>
          <p className="text-[#7A7068] font-light leading-[1.85]" style={{ fontSize: "17px" }}>
            The Signature Collection represents Maison Vereen&apos;s permanent body of work — fragrances available on an ongoing basis, each developed with the same standard applied to Edition I. Not limited. Still uncompromised.
          </p>
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {fragrances.map((f, i) => (
            <div key={i} className="group flex flex-col space-y-6 border-t border-white/6 pt-8 hover:border-gold/25 transition-colors duration-500">
              <div className="space-y-1">
                <span className="type-mono text-gold/70">{f.family}</span>
                <h3
                  className="font-serif font-light text-[#E8E2D9]"
                  style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)" }}
                >
                  {f.name}
                </h3>
                <p className="uppercase tracking-[0.2em] text-[#5A5449]" style={{ fontSize: "10px" }}>
                  {f.notes}
                </p>
              </div>
              <p className="text-[#5A5449] font-light leading-[1.75] flex-1" style={{ fontSize: "15px" }}>
                {f.desc}
              </p>
              <Link
                href="/fragrance-library"
                className="inline-flex items-center gap-3 uppercase tracking-[0.2em] font-medium text-gold/50 group-hover:text-gold transition-colors duration-300"
                style={{ fontSize: "10px" }}
              >
                <span>Speak to a Concierge</span>
                <div className="w-6 h-px bg-gold/40 group-hover:w-10 group-hover:bg-gold transition-all duration-400" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 pt-4">
          <Link
            href="/contact"
            className="inline-block bg-gold/90 hover:bg-gold px-10 py-4 text-charcoal transition-all duration-500"
            style={{ fontSize: "11px", letterSpacing: "0.3em" }}
          >
            <span className="uppercase font-semibold">Speak to a Concierge</span>
          </Link>
          <Link
            href="/fragrance-library"
            className="inline-block border border-white/15 hover:border-gold/50 px-10 py-4 text-[#8A8178] hover:text-[#E8E2D9] transition-all duration-500"
            style={{ fontSize: "11px", letterSpacing: "0.28em" }}
          >
            <span className="uppercase font-medium">Browse All Fragrances</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
