"use client";

import { useEffect, useState } from "react";

export default function SignatureHero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-[#0A0A08] overflow-hidden flex flex-col md:flex-row">
      {/* Left Text Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 sm:px-8 md:px-16 pb-24 md:pb-32 h-full order-2 md:order-1 pt-12 md:pt-0">
        <div className="max-w-[500px]">
          <h1 className="type-display text-[#F5F0E8] anim-fade-up mb-6">
            Crafted for <br />
            <em className="italic text-gold">living beautifully.</em>
          </h1>
          <p className="type-body text-[#A09888] anim-fade-up-d1 mb-10 max-w-[420px]">
            The same obsession. The same materials. The same hands. Now available to wear every day, without ceremony or waiting — simply because you value the art of fragrance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 anim-fade-up-d2">
            <button className="bg-gold text-[#0A0A08] px-8 py-4 font-medium uppercase tracking-[0.2em] text-[11px] hover:bg-gold-light transition-colors">
              Explore the Collection
            </button>
            <button className="border border-[#8C7235] text-[#F5F0E8] px-8 py-4 font-medium uppercase tracking-[0.2em] text-[11px] hover:bg-[#8C7235]/10 transition-colors">
              Discover Our Craft
            </button>
          </div>
        </div>
      </div>

      {/* Right Atmospheric Visual */}
      <div className="relative flex-1 h-[50vh] md:h-full order-1 md:order-2 bg-[#0A0A08]">
        {/* Abstract bottle / atmospheric gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A08] via-transparent to-transparent z-10 md:bg-linear-to-l" />
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-right opacity-80" 
          style={{
            backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(201, 168, 76, 0.15) 0%, transparent 60%)",
          }}
        />
        {/* Placeholder for editorial bottle silhouette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
           <div className="w-1/3 h-2/3 max-w-[200px] border border-gold/20 rounded-t-[100px] blur-[2px]" />
        </div>
        
        {/* Animated Gold Line */}
        <div className="hidden md:block absolute top-0 right-16 w-px h-[40vh] bg-linear-to-b from-gold to-transparent anim-slide-up origin-top" />
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-16 flex flex-col items-center gap-2 transition-opacity duration-500 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-linear-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
