"use client";

export default function TheIdentity() {
  return (
    <section className="bg-charcoal pt-[120px] pb-24 md:pt-[160px] md:pb-32 border-b border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 relative z-10">
        <div className="max-w-[800px] mx-auto text-center space-y-8 md:space-y-12">
          
          <div className="space-y-4">
            <span className="section-tag anim-fade-up">The Philosophy</span>
            <h1 className="type-display uppercase anim-fade-up-d1">
              Fragrance is not worn.<br />
              <span className="text-gold">It is inherited.</span>
            </h1>
          </div>
          
          <div className="type-body-sm max-w-[640px] mx-auto space-y-6 text-[#7A7068] anim-fade-up-d2">
            <p>
              Maison VEREEN exists at the intersection of rarity and artistry — offering two distinct ways to experience the world of exceptional fragrance.
            </p>
            <p>
              Every decision, from the raw materials selected to the number of bottles produced, is made in service of a single conviction: that a truly extraordinary fragrance deserves to be treated as something more than a product.
            </p>
          </div>
          
          <div className="w-px h-16 bg-linear-to-b from-gold/50 to-transparent mx-auto anim-fade-up-d3" />
        </div>
      </div>
    </section>
  );
}
