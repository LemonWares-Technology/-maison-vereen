"use client";

import Image from "next/image";

interface FoundingRegistrySectionProps {
  onOpenApply: () => void;
}

export default function FoundingRegistrySection({ onOpenApply }: FoundingRegistrySectionProps) {
  return (
    <section className="bg-[#060506] border-b border-white/5 py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Copy & CTA (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-gold font-semibold block">
              THE FOUNDING REGISTRY
            </span>

            <h2
              className="font-serif font-light text-[#EDE8DE] leading-[1.08]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
            >
              Applications remain open <br className="hidden sm:block" />
              while Edition I remains available.
            </h2>

            <p className="text-[#EDE8DE] font-light leading-[1.85]" style={{ fontSize: "1.0625rem" }}>
              Apply to become one of the original 250 collectors.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenApply}
                className="bg-gold hover:bg-gold-white text-[#060506] px-7 py-3.5 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>APPLY TO THE REGISTRY</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Column — Registry Desk Image (5 cols on lg) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-115 overflow-hidden rounded-xs shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/file_000000005fc471f495c71bc758a16ffc.webp"
                alt="The Founding Registry — Maison Vereen Private Maison Desk"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(6,5,6,0.38)_100%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#060506]/50 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
