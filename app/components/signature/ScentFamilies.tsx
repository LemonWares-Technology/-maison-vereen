"use client";

import { LucideLeaf, LucideFlame, LucideFlower2, LucideMoon, LucideLayoutGrid } from "lucide-react";

export default function ScentFamilies() {
  const families = [
    {
      icon: LucideLeaf,
      mood: "Fresh & Bright",
      desc: "Citrus, aquatic, green",
      count: 2
    },
    {
      icon: LucideFlame,
      mood: "Warm & Woody",
      desc: "Oud, sandalwood, resin",
      count: 1
    },
    {
      icon: LucideFlower2,
      mood: "Floral Elegance",
      desc: "Rose, iris, jasmine",
      count: 1
    },
    {
      icon: LucideMoon,
      mood: "Evening Signatures",
      desc: "Oriental, amber, sensual",
      count: 1
    },
    {
      icon: LucideLayoutGrid,
      mood: "Everyday Icons",
      desc: "Clean, versatile, timeless",
      count: 5
    }
  ];

  return (
    <section className="bg-[#141410] py-24 border-b border-[#8C7235]/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 text-center">
        
        <span className="section-tag mb-4 block">Navigation</span>
        <h2 className="type-headline text-[#F5F0E8] mb-16">
          Explore by <em className="italic text-gold">Mood</em>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {families.map((family, idx) => (
            <button 
              key={idx} 
              onClick={() => {
                const gallery = document.getElementById("gallery");
                if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#0A0A08] p-8 border border-[#8C7235]/20 hover:border-gold group transition-all duration-300 relative overflow-hidden text-left sm:text-center flex flex-col items-start sm:items-center"
            >
              <family.icon className="w-6 h-6 text-[#8C7235] group-hover:text-gold mb-6 transition-colors duration-300" strokeWidth={1.5} />
              
              <span className="type-mono text-[#F5F0E8] text-[12px] mb-2">{family.mood}</span>
              <span className="type-caption text-[#A09888] mb-4">{family.desc}</span>
              <span className="type-mono text-[#8C7235] text-[10px] mt-auto">
                {family.count} {family.count === 1 ? "Fragrance" : "Fragrances"}
              </span>

              {/* Animated gold underline on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-gold w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
