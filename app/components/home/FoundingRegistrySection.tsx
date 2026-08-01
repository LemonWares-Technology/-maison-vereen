"use client";

import Image from "next/image";

interface FoundingRegistrySectionProps {
  onOpenApply: () => void;
}

function ArrowIcon() {
  return (
    <svg
      width="28"
      height="10"
      viewBox="0 0 28 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M0 5h26M21 1l5 4-5 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FoundingRegistrySection({
  onOpenApply,
}: FoundingRegistrySectionProps) {
  return (
    <section className="relative bg-[#060506] overflow-hidden">
      {/* Right cap close-up — melts into black */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
        <div className="hidden lg:block bg-[#060506]" />
        <div className="relative min-h-full overflow-hidden opacity-0 lg:opacity-100">
          <Image
            src="/file_00000000a97471f4be1bee83e5dedea0.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-58%" />
          <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,transparent_18%,#060506_85%)]" />
        </div>
      </div>

      <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7 md:space-y-8 max-w-xl">
            <div className="space-y-2.5">
              <div className="w-8 h-px bg-gold" />
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium block">
                The Founding Registry
              </span>
            </div>

            <h2
              className="font-serif font-light text-[#F2EDE4] leading-[1.08]"
              style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.5rem)" }}
            >
              Applications remain open while Edition I remains available.
            </h2>

            <p className="font-sans text-sm md:text-base font-light leading-[1.9] text-[#EDE8DE]/95">
              Apply to become one of the original 250 collectors.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenApply}
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
              >
                Apply to the Registry
                <ArrowIcon />
              </button>
            </div>
          </div>

          {/* Mobile image */}
          <div className="relative w-full aspect-4/5 overflow-hidden lg:hidden">
            <Image
              src="/file_00000000a97471f4be1bee83e5dedea0.webp"
              alt="Edition I octagonal cap — Maison Vereen"
              fill
              className="object-cover object-center"
              sizes="95vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/55" />
            <div className="absolute inset-0 bg-linear-to-r from-[#060506]/70 via-transparent to-[#060506]/70" />
          </div>

          <div className="hidden lg:block min-h-140" aria-hidden />
        </div>
      </div>
    </section>
  );
}
