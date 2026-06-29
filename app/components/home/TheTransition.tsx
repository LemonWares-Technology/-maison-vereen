"use client";

export default function TheTransition() {
  return (
    <section className="bg-charcoal py-24 md:py-32 relative overflow-hidden border-b border-white/5 flex items-center justify-center text-center">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8">
        <div className="w-px h-24 bg-linear-to-b from-transparent via-gold/30 to-gold mx-auto mb-12" />
        
        <p className="type-subhead text-[#C8BFB2] font-light max-w-[600px] mx-auto italic">
          The Signature Collection is another expression of the same philosophy. Not a lesser alternative, but the artistry of Maison VEREEN, available today.
        </p>

        <div className="w-px h-24 bg-linear-to-t from-transparent via-gold/30 to-gold mx-auto mt-12" />
      </div>
    </section>
  );
}
