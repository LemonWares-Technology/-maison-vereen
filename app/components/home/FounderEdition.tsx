"use client";

import Link from "next/link";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      width="22"
      height="8"
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

export default function FounderEdition() {
  return (
    <section className="relative bg-[#060506] overflow-hidden">
      {/* Left bottle — melts into black on the right */}
      <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2 pointer-events-none">
        <div className="relative overflow-hidden">
          <Image
            src="/certifcicateofauthenticity.webp"
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-linear-to-l from-[#060506] from-0% via-[#060506]/85 via-30% to-transparent to-62%" />
          <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/30" />
        </div>
        <div className="bg-[#060506]" />
      </div>

      <div className="relative z-10 w-[95%] md:w-full max-w-6xl mx-auto py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="relative w-full aspect-4/5 overflow-hidden lg:hidden order-2">
            <Image
              src="/certifcicateofauthenticity.webp"
              alt="Maison Vereen Edition I — the founding chapter"
              fill
              className="object-cover object-center"
              sizes="95vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/50" />
            <div className="absolute inset-0 bg-linear-to-r from-[#060506]/60 via-transparent to-[#060506]/60" />
          </div>

          <div className="hidden lg:block min-h-145" aria-hidden />

          <div className="space-y-6 md:space-y-7 max-w-lg order-1 lg:ml-auto">
            <div className="space-y-2.5">
              <div className="w-8 h-px bg-gold" />
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium block">
                The Founder Edition
              </span>
            </div>

            <h2
              className="font-serif font-light text-[#F2EDE4] leading-[1.05]"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)" }}
            >
              The first.
            </h2>

            <div className="space-y-5 font-sans text-sm md:text-base font-light leading-[1.9] text-[#EDE8DE]/95">
              <p>
                Those who hold a bottle from Edition I will hold something no
                House can ever offer again: the first.
              </p>
              <p>
                Edition I is the founding chapter of Maison Vereen — the work
                from which every future edition will be measured.
              </p>
              <p>
                It was not created to be reordered, restocked, or repeated. It
                was created to exist once, completely, and then to close.
              </p>
            </div>

            <div className="pt-3">
              <Link
                href="/edition-i"
                className="group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[#EDE8DE] hover:text-gold transition-colors"
              >
                <span className="border-b border-gold pb-1.5 group-hover:border-gold-light transition-colors">
                  Discover Edition I in Full
                </span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
