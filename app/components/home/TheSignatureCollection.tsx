"use client";
import Image from "next/image";
import Link from "next/link";

const fragrances = [
  {
    family: "Woody · Resinous",
    name: "Ébène Sacré",
    notes: "Oud · Sandalwood · Amber",
    desc: "A meditation on sacred wood and dark resins, built around an aged oud absolute and a base of warm Mysore sandalwood. Earthy, enduring, unhurried.",
    price: "₦ 185,000",
    image: "/images/product-mockup-1.jpg"
  },
  {
    family: "Citrus · Aromatic",
    name: "Aube Verte",
    notes: "Bergamot · Vetiver · Cedar",
    desc: "The sharp clarity of Calabrian bergamot opens onto a heart of aromatic herbs and damp earth. A fragrance for mornings that feel like beginnings.",
    price: "₦ 148,000",
    image: "/images/product-mockup-2.jpg"
  },
  {
    family: "Floral · Musky",
    name: "Soie de Minuit",
    notes: "Rose Absolute · Cashmere · Musk",
    desc: "A rose of unusual depth — not bright, not feminine in the obvious sense. Heavy with cashmere woods and a musk that clings like memory to warm skin.",
    price: "₦ 162,000",
    image: "/images/product-mockup-3.jpg"
  }
];

export default function TheSignatureCollection() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 lg:py-40 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 space-y-20">
        
        {/* Header */}
        <div className="max-w-[640px] space-y-6 mx-auto text-center md:text-left md:mx-0 flex flex-col items-center md:items-start">
          <span className="section-tag">World Two — The Signature Collection</span>
          <h2 className="type-headline text-center md:text-left">The Art of Maison VEREEN, Available Today.</h2>
          <p className="type-body-sm text-center md:text-left">
            These perfumes embody the same commitment to craftsmanship, artistry, and refinement — designed for everyday enjoyment and available to anyone who values the work.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {fragrances.map((f, i) => (
            <div key={i} className="group flex flex-col space-y-8">
              <div className="relative aspect-3/4 bg-[#111] overflow-hidden border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
                {/* Fallback image style for mockups */}
                <div className="absolute inset-0 bg-linear-to-t from-charcoal to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center type-mono text-white/10 z-0">Visual Placeholder</div>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <span className="type-mono text-gold/80">{f.family}</span>
                  <h3 className="type-subhead text-[#E8E2D9]">{f.name}</h3>
                  <p className="type-caption text-[#8A8178] uppercase tracking-widest">{f.notes}</p>
                </div>
                <p className="type-body-sm text-[#5A5449] leading-relaxed">
                  {f.desc}
                </p>
              </div>
              
              <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                <span className="type-caption text-[#E8E2D9] tracking-wider">{f.price}</span>
                <Link href="/fragrance-library" className="type-caption uppercase text-gold hover:text-[#E8E2D9] tracking-widest transition-colors flex items-center gap-2">
                  Acquire
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="flex justify-center pt-10">
          <Link href="/fragrance-library" className="border border-white/20 hover:border-gold/60 px-10 py-4 type-caption uppercase tracking-[0.25em] text-[#E8E2D9] font-medium transition-all duration-500 hover:bg-gold/5">
            Browse All Fragrances
          </Link>
        </div>

      </div>
    </section>
  );
}
