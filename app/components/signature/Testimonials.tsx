"use client";

import { LucideStar } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ébène Sacré changed the way I think about wearing fragrance. This is not something you put on — it is something you become.",
      author: "A. Okafor",
      city: "Lagos",
      fragrance: "Ébène Sacré"
    },
    {
      quote: "The unboxing experience alone was worth the price. I have ordered from the so-called luxury houses in Europe. This was more considered than any of them.",
      author: "C. Mensah",
      city: "Accra",
      fragrance: "Soie de Minuit"
    },
    {
      quote: "Aube Verte is the first fragrance I have found in years that makes me feel like myself. Not someone else’s idea of refinement. Mine.",
      author: "T. Adeyemi",
      city: "Abuja",
      fragrance: "Aube Verte"
    }
  ];

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <LucideStar key={i} className="w-3 h-3 text-gold fill-gold" />
    ));
  };

  return (
    <section className="bg-[#0A0A08] py-24 md:py-32 border-b border-[#8C7235]/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 text-center">
        
        <span className="section-tag mb-4 block">Testimonials</span>
        <h2 className="type-headline text-[#F5F0E8] mb-16">
          Worn, Remembered, <em className="italic text-gold">Returned To.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((test, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="flex gap-1 mb-8 opacity-80">
                {renderStars()}
              </div>
              
              <p className="type-pullquote text-[#A09888] mb-10 leading-relaxed max-w-[320px]">
                "{test.quote}"
              </p>
              
              <div className="mt-auto flex flex-col items-center gap-1 border-t border-[#8C7235]/20 pt-6 w-full max-w-[200px]">
                <span className="type-body-sm text-[#F5F0E8] font-medium">{test.author}</span>
                <span className="type-caption text-[#8C7235] uppercase tracking-widest">{test.city}</span>
                <span className="type-mono text-[#A09888] mt-2 italic">{test.fragrance}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
