"use client";

import { LucideDroplets, LucideClock, LucideFlaskConical, LucideScale, LucidePackageSearch, LucideGem } from "lucide-react";

export default function Craftsmanship() {
  const crafts = [
    {
      icon: LucidePackageSearch,
      title: "Provenance of Ingredients",
      desc: "Every material Maison VEREEN uses carries a traceable origin. We source aged oud from Assam, sandalwood from Mysore, bergamot from Calabria, and rose absolute from Grasse. Provenance is not a marketing claim. It is the beginning of quality."
    },
    {
      icon: LucideFlaskConical,
      title: "The Philosophy of Blending",
      desc: "We do not blend to a brief. We blend until a fragrance has a feeling — a quality that cannot be described in percentages but is immediately understood on skin. This process takes months. Sometimes longer. We are not in a hurry."
    },
    {
      icon: LucideScale,
      title: "Precision and Patience",
      desc: "Fragrance formulation is a discipline of exactness. A single percentage point separates a note that sings from one that overwhelms. We measure, evaluate, rest, and return — as many times as required — until the balance is undeniable."
    },
    {
      icon: LucideClock,
      title: "Maceration and Maturation",
      desc: "After blending, every Maison VEREEN fragrance macerates for a minimum of eight weeks. This is not convention — it is chemistry. Ingredients must have time to bond, to harmonise, and to become more than the sum of their parts."
    },
    {
      icon: LucideDroplets,
      title: "Small Batch Production",
      desc: "We produce the Signature Collection in small, controlled batches — never more than necessary to serve those who have ordered. This keeps the fragrance fresh, maintains quality consistency, and means that what you receive has not spent months in a warehouse."
    },
    {
      icon: LucideGem,
      title: "The Bottle as Object",
      desc: "The vessel is not an afterthought. Each Signature bottle is designed to communicate the character of its fragrance before it is opened — in weight, proportion, finish, and clarity. It should be worthy of remaining on a dressing table long after the last drop is gone."
    }
  ];

  return (
    <section className="bg-[#141410] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16">
        
        <div className="mb-16 md:mb-24 max-w-2xl">
          <span className="section-tag mb-6">Our Process</span>
          <h2 className="type-headline text-[#F5F0E8]">
            Craft without <em className="italic text-gold">compromise.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-gold/20 border border-gold/20">
          {crafts.map((craft, i) => (
            <div key={i} className="bg-[#141410] p-10 md:p-14 group relative overflow-hidden">
              <craft.icon className="w-6 h-6 text-[#8C7235] mb-8 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
              <h3 className="type-subhead text-[#F5F0E8] mb-4 text-[22px]">{craft.title}</h3>
              <p className="type-body-sm text-[#A09888] leading-relaxed">
                {craft.desc}
              </p>
              
              {/* Animated gold border on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-gold w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
