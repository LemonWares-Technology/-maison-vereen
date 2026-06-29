"use client";
import Link from "next/link";

export default function DualPathway() {
  return (
    <section className="bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14">
        
        <div className="text-center space-y-6 mb-16 md:mb-24">
          <span className="section-tag">The Dual Pathway</span>
          <h2 className="type-headline">
            Two paths.<br className="md:hidden" /> One House.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 max-w-[1000px] mx-auto">
          
          {/* Path 1 */}
          <div className="bg-[#0D0D0D] p-10 md:p-14 space-y-8 flex flex-col group hover:bg-[#111] transition-colors duration-500">
            <div className="space-y-4 flex-1">
              <span className="type-mono text-gold/60">Path One</span>
              <h3 className="type-subhead text-[#E8E2D9]">Become One of the 250</h3>
              <p className="type-body-sm text-[#7A7068]">
                For those who feel the pull of rarity and exclusivity. Earn your position in the founding generation of the Prestige Collection.
              </p>
            </div>
            <div>
              <Link href="/access" className="inline-flex items-center gap-4 type-caption uppercase tracking-[0.2em] text-[#E8E2D9] group-hover:text-gold transition-colors">
                Apply for Ownership
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-gold/60 transition-all duration-500" />
              </Link>
            </div>
          </div>

          {/* Path 2 */}
          <div className="bg-[#080808] p-10 md:p-14 space-y-8 flex flex-col group hover:bg-[#111] transition-colors duration-500">
            <div className="space-y-4 flex-1">
              <span className="type-mono text-gold/60">Path Two</span>
              <h3 className="type-subhead text-[#E8E2D9]">Explore the Signature Collection</h3>
              <p className="type-body-sm text-[#7A7068]">
                Experience the artistry of Maison VEREEN today, without ceremony. Direct access to our curated selection of accessible luxury.
              </p>
            </div>
            <div>
              <Link href="/fragrance-library" className="inline-flex items-center gap-4 type-caption uppercase tracking-[0.2em] text-[#E8E2D9] group-hover:text-gold transition-colors">
                Browse Collection
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-gold/60 transition-all duration-500" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
