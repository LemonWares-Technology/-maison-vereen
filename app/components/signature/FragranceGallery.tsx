"use client";

import { useState, useRef } from "react";
import FragranceEnquiryModal from "./FragranceEnquiryModal";

const FRAGRANCES = [
  {
    id: "ebene-sacre",
    family: "Woody · Resinous",
    name: "Ébène Sacré",
    accord: "Oud · Sandalwood · Amber",
    quote: "\u201cA meditation on sacred wood and dark resins \u2014 earthy, enduring, and deeply unhurried.\u201d",
    notes: ["Aged Oud", "Mysore Sandalwood", "Warm Amber", "Vetiver"],
    price: "₦ 185,000",
    mood: "woody",
  },
  {
    id: "aube-verte",
    family: "Citrus · Aromatic",
    name: "Aube Verte",
    accord: "Bergamot · Vetiver · Cedar",
    quote: "\u201cSharp clarity opening into damp earth \u2014 a fragrance for mornings that feel like beginnings.\u201d",
    notes: ["Calabrian Bergamot", "Aromatic Herbs", "Vetiver", "Cedar"],
    price: "₦ 148,000",
    mood: "citrus",
  },
  {
    id: "soie-de-minuit",
    family: "Floral · Musky",
    name: "Soie de Minuit",
    accord: "Rose Absolute · Cashmere · Musk",
    quote: "\u201cA rose of unusual depth \u2014 heavy with warmth, and a musk that clings like memory.\u201d",
    notes: ["Rose Absolute", "Cashmere Wood", "White Musk", "Iris"],
    price: "₦ 162,000",
    mood: "floral",
  },
  {
    id: "velours-dore",
    family: "Oriental · Warm",
    name: "Velours Doré",
    accord: "Vanilla · Benzoin · Saffron",
    quote: "\u201cGolden and sensual \u2014 worn best after dark, when presence matters more than words.\u201d",
    notes: ["Madagascar Vanilla", "Saffron", "Benzoin Resin", "Oud"],
    price: "₦ 196,000",
    mood: "woody",
  },
  {
    id: "brume-de-lagos",
    family: "Aquatic · Fresh",
    name: "Brume de Lagos",
    accord: "Sea Salt · White Tea · Driftwood",
    quote: "\u201cThe coastline at dawn \u2014 salt on skin, clarity in the air, and the feeling of space.\u201d",
    notes: ["Atlantic Sea Salt", "White Tea", "Driftwood", "Ozonic"],
    price: "₦ 138,000",
    mood: "citrus",
  },
];

const MOODS = [
  { id: "all", label: "All" },
  { id: "woody", label: "Woody & Warm" },
  { id: "floral", label: "Floral" },
  { id: "citrus", label: "Fresh & Citrus" },
];

export default function FragranceGallery() {
  const [activeMood, setActiveMood] = useState("all");
  const [activeSlide, setActiveSlide] = useState(0);
  const [enquiryFragrance, setEnquiryFragrance] = useState<{ id: string; name: string; price: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = activeMood === "all"
    ? FRAGRANCES
    : FRAGRANCES.filter((f) => f.mood === activeMood || f.family.toLowerCase().includes(activeMood));

  function scrollTo(idx: number) {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[idx] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActiveSlide(idx);
  }

  function onScroll() {
    const container = scrollRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    const scrollLeft = container.scrollLeft;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - scrollLeft - 24);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveSlide(closest);
  }

  return (
    <>
      <section id="gallery" className="bg-[#0A0A08] py-20 md:py-28 overflow-hidden border-b border-[#8C7235]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-8">
            <div>
              <span className="section-tag text-gold mb-3 block">The Collection</span>
              <h2 className="font-serif font-light text-[#F5F0E8] leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                The <em className="italic text-gold">fragrances.</em>
              </h2>
            </div>

            {/* Mood filter */}
            <div className="flex flex-wrap gap-2" role="listbox" aria-label="Filter by mood">
              {MOODS.map((mood) => (
                <button key={mood.id} role="option" aria-selected={activeMood === mood.id}
                  onClick={() => { setActiveMood(mood.id); setActiveSlide(0); }}
                  className={`px-4 py-2 border transition-all duration-300 uppercase tracking-[0.18em] font-medium ${
                    activeMood === mood.id
                      ? "border-gold text-gold bg-gold/10"
                      : "border-[#8C7235]/30 text-[#8C7235] hover:border-[#8C7235] hover:text-[#F5F0E8]"
                  }`}
                  style={{ fontSize: "10px" }}>
                  {mood.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery track */}
          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={onScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-8 pb-8 touch-pan-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
              role="list"
            >
              {filtered.map((f, i) => (
                <article
                  key={f.id}
                  className="snap-start shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[360px] xl:w-[400px] flex flex-col group"
                  role="listitem"
                >
                  {/* Visual panel */}
                  <div className="h-[320px] sm:h-[360px] bg-[#141410] relative mb-6 overflow-hidden border border-[#8C7235]/10 group-hover:border-gold/25 transition-colors duration-500 flex items-center justify-center">
                    <div className="absolute inset-0 bg-radial from-gold/0 to-transparent group-hover:from-gold/8 transition-colors duration-700" />
                    {/* Bottle silhouette */}
                    <div className="relative z-10 w-[100px] h-[190px] border border-gold/20 rounded-t-[50px] bg-[#0A0A08]/60 backdrop-blur-sm transition-transform duration-700 group-hover:-translate-y-2">
                      <div className="absolute bottom-2 left-2 right-2 h-1/2 bg-linear-to-t from-gold/10 to-transparent rounded-b-xl" />
                    </div>
                    <span className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 font-mono uppercase tracking-[0.2em] text-gold/70" style={{ fontSize: "9px" }}>
                      View →
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <span className="font-mono uppercase tracking-[0.2em] text-[#8C7235] mb-2" style={{ fontSize: "9px" }}>{f.family}</span>
                    <h3 className="font-serif font-light text-[#F5F0E8] mb-1 leading-none" style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}>{f.name}</h3>
                    <p className="font-mono text-[#6B6450] mb-4" style={{ fontSize: "10px" }}>{f.accord}</p>

                    <p className="font-serif font-light italic text-[#A09888] mb-6 leading-[1.6] flex-1" style={{ fontSize: "15px" }}>
                      {f.quote}
                    </p>

                    {/* Notes */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {f.notes.map((note) => (
                        <span key={note} className="px-2.5 py-1 border border-[#8C7235]/20 text-[#A09888] group-hover:border-gold/30 group-hover:text-[#F5F0E8] transition-colors duration-300" style={{ fontSize: "10px" }}>
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-[#8C7235]/20">
                      <span className="font-light text-[#F5F0E8]" style={{ fontSize: "15px" }}>{f.price}</span>
                      <button
                        onClick={() => setEnquiryFragrance({ id: f.id, name: f.name, price: f.price })}
                        className="font-mono uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-200 flex items-center gap-1.5"
                        style={{ fontSize: "10px" }}
                      >
                        Acquire <span>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Slide indicator dots */}
            <div className="flex items-center gap-2 mt-5" role="tablist" aria-label="Gallery navigation">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeSlide}
                  onClick={() => scrollTo(i)}
                  className={`transition-all duration-300 rounded-full ${i === activeSlide ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-[#8C7235]/30 hover:bg-[#8C7235]"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      <FragranceEnquiryModal
        fragrance={enquiryFragrance}
        onClose={() => setEnquiryFragrance(null)}
      />
    </>
  );
}
