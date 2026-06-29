"use client";

export default function PhilosophyBand() {
  return (
    <section className="bg-[#141410] border-y border-[#8C7235]/20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-16 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column — Philosophical Statement */}
          <div className="lg:w-5/12 shrink-0">
            <h2 className="type-headline text-gold max-w-[320px]">
              Art you wear.<br />
              <em className="italic text-[#F5F0E8]">Every single day.</em>
            </h2>
          </div>
          
          {/* Right Column — Body Copy */}
          <div className="lg:w-7/12 space-y-8">
            <p className="type-body text-[#A09888] leading-relaxed">
              The Signature Collection was born from a single conviction: that extraordinary fragrance should not require an invitation. These are not simplified versions of our craft. They are complete, deliberate works — each one the result of months of formulation, refinement, and patience.
            </p>
            <p className="type-body text-[#A09888] leading-relaxed">
              We select only materials of verifiable provenance. We blend by hand in small batches. We allow each creation to macerate until it has become exactly what it needs to be — unhurried, uncompromised, and unmistakably Maison VEREEN.
            </p>
            
            {/* Supporting specific stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 mt-12 border-t border-[#8C7235]/10">
              <div className="space-y-2">
                <div className="type-mono text-gold">Time</div>
                <div className="type-body-sm text-[#F5F0E8]">18+ Months Development</div>
              </div>
              <div className="space-y-2">
                <div className="type-mono text-gold">Materials</div>
                <div className="type-body-sm text-[#F5F0E8]">100% Natural Carriers</div>
              </div>
              <div className="space-y-2">
                <div className="type-mono text-gold">Sourcing</div>
                <div className="type-body-sm text-[#F5F0E8]">7 Countries of Origin</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
