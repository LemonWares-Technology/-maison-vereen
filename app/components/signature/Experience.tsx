"use client";

import Link from "next/link";
import { LucideCheck } from "lucide-react";

export default function Experience() {
  const promises = [
    "Each fragrance is wrapped by hand in dark lacquered tissue before placement in its outer box",
    "A personal note, hand-signed, is included with every order",
    "Outer packaging is sealed with a Maison VEREEN wax emblem",
    "Shipping is discreet, insured, and tracked at every stage",
    "A fragrance guide specific to your chosen scent accompanies the order",
    "Customer care is personal — reach a human being, not an automated system",
    "Every customer enters our records and is remembered on future orders"
  ];

  return (
    <section className="bg-[#0A0A08] py-24 md:py-32 border-b border-[#8C7235]/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Abstract Visual Composition */}
          <div className="relative aspect-square md:aspect-4/5 bg-[#141410] border border-[#8C7235]/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-radial from-gold/5 to-transparent opacity-50" />
            
            {/* Schematic representation of packaging */}
            <div className="relative z-10 w-[60%] h-[70%] border border-[#8C7235]/30 flex items-center justify-center">
               <div className="w-[80%] h-[80%] border border-[#8C7235]/40 flex items-center justify-center bg-[#0A0A08]/50">
                  <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gold/10" />
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Copy and Promises */}
          <div>
            <span className="section-tag mb-6 text-gold">The Experience</span>
            <h2 className="type-headline text-[#F5F0E8] mb-8">
              From our hands <em className="italic text-gold">to yours.</em>
            </h2>
            
            <p className="type-body text-[#A09888] mb-12">
              Purchasing a Maison VEREEN fragrance is not the end of the experience — it is the beginning. Every order is handled with the same attention we bring to the fragrance itself.
            </p>

            <ul className="space-y-6 mb-16">
              {promises.map((promise, index) => (
                <li key={index} className="flex items-start gap-4">
                  <LucideCheck className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={2} />
                  <span className="type-body-sm text-[#F5F0E8] leading-relaxed">{promise}</span>
                </li>
              ))}
            </ul>

            <Link href="#gallery" className="inline-block bg-gold text-[#0A0A08] px-10 py-4 font-medium uppercase tracking-[0.2em] text-[11px] hover:bg-gold-light transition-colors">
              Begin Your Order
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
