"use client";

import { useState } from "react";
import Link from "next/link";
import FragranceEnquiryModal from "./FragranceEnquiryModal";

const FEATURED = { id: "ebene-sacre", name: "Ébène Sacré", price: "₦ 185,000" };

export default function FeaturedSpread() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  return (
    <>
      <section id="ebene-sacre" className="bg-[#0A0A08] py-24 md:py-32 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#8C7235]/20 border border-[#8C7235]/20 rounded-sm overflow-hidden">
          
          {/* Left: Visual */}
          <div className="bg-[#141410] relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center p-12 overflow-hidden group">
            {/* Warm gradient background */}
            <div className="absolute inset-0 bg-radial from-gold/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A0A08] to-transparent opacity-80" />
            
            {/* Abstract bottle representation */}
            <div className="relative z-10 w-[180px] h-[320px] md:w-[220px] md:h-[400px] border border-gold/30 rounded-t-[100px] bg-[#0A0A08]/40 backdrop-blur-sm shadow-[0_0_50px_rgba(201,168,76,0.1)] transition-transform duration-700 group-hover:-translate-y-4">
              <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-10 h-10 border border-gold/50 rounded-full" />
              {/* Liquid level */}
              <div className="absolute bottom-4 left-4 right-4 h-1/3 bg-linear-to-t from-gold/20 to-transparent rounded-b-xl" />
            </div>
            
            <div className="absolute top-8 left-8">
              <span className="section-tag text-gold">Featured Selection</span>
            </div>
          </div>

          {/* Right: Story Copy */}
          <div className="bg-[#0A0A08] p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            
            <div className="space-y-4 mb-10">
              <span className="type-mono text-[#8C7235]">Woody · Resinous</span>
              <h2 className="type-display text-[#F5F0E8]">Ébène Sacré</h2>
              <p className="type-mono text-[#A09888]">Oud · Sandalwood · Amber</p>
            </div>

            <div className="space-y-8 mb-16">
              <p className="type-body text-[#A09888]">
                There are woods that carry centuries within them. Ébène Sacré was composed around a single aged oud absolute — sourced from a third-generation distillery in Assam — layered over Mysore sandalwood and a base of warm, golden amber.
              </p>
              <p className="type-body text-[#A09888]">
                It does not announce itself. It reveals itself slowly — first on the skin, then in the room, then in memory. This is a fragrance for people who do not need to be noticed. Only remembered.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-16 border-t border-[#8C7235]/20 pt-10">
              <div>
                <span className="type-mono text-[#6B6450] block mb-1">Character</span>
                <span className="type-body-sm text-[#F5F0E8]">Quiet authority</span>
              </div>
              <div>
                <span className="type-mono text-[#6B6450] block mb-1">Occasion</span>
                <span className="type-body-sm text-[#F5F0E8]">Evening, formal</span>
              </div>
              <div>
                <span className="type-mono text-[#6B6450] block mb-1">Longevity</span>
                <span className="type-body-sm text-[#F5F0E8]">12–16 hours</span>
              </div>
              <div>
                <span className="type-mono text-[#6B6450] block mb-1">Projection</span>
                <span className="type-body-sm text-[#F5F0E8]">Intimate sillage</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-gold text-[#0A0A08] px-8 py-4 font-medium uppercase tracking-[0.2em] hover:bg-gold-light transition-colors w-full sm:w-auto text-center"
                style={{ fontSize: "11px" }}
              >
                Acquire — ₦ 185,000
              </button>
              <Link href="#gallery" className="border border-[#8C7235] text-[#F5F0E8] px-8 py-4 font-medium uppercase tracking-[0.2em] hover:bg-[#8C7235]/10 transition-colors w-full sm:w-auto text-center"
                style={{ fontSize: "11px" }}>
                View All
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>

    <FragranceEnquiryModal
      fragrance={enquiryOpen ? FEATURED : null}
      onClose={() => setEnquiryOpen(false)}
    />
    </>
  );
}
