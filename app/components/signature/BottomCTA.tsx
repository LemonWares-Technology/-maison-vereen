"use client";

import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="bg-[#141410] py-32 md:py-48 text-center relative overflow-hidden">
      
      {/* Background warm glow */}
      <div className="absolute inset-0 bg-radial from-gold/5 to-transparent" />

      <div className="max-w-[600px] mx-auto px-6 relative z-10">
        
        <span className="section-tag mb-6 block text-gold">The Signature Collection</span>
        
        <h2 className="type-display text-[#F5F0E8] mb-8">
          Bring Maison VEREEN into <br />
          <em className="italic text-gold">your everyday life.</em>
        </h2>

        <p className="type-body text-[#A09888] mb-12 max-w-[480px] mx-auto">
          No application. No waiting list. Simply choose the fragrance that speaks to you, and we will take care of everything else.
        </p>

        <div className="flex flex-col items-center gap-8">
          <Link href="#gallery" className="bg-gold text-[#0A0A08] px-12 py-5 font-medium uppercase tracking-[0.2em] text-[11px] hover:bg-gold-light transition-colors w-full sm:w-auto">
            Shop the Collection
          </Link>
          
          <Link href="/the-first-250" className="link-gold">
            Aspiring to greater rarity? Discover the House of 250.
          </Link>
        </div>

      </div>
    </section>
  );
}
