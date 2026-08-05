"use client";

import Image from "next/image";

const PLEDGES = ["No Reprint.", "No Reissue.", "No Anniversary Release."];

export default function PermanentClosureBanner() {
  return (
    <section className="relative py-24 md:py-32 lg:py-36 overflow-hidden">
      <Image
        src="/thunderrock.webp"
        alt=""
        fill
        className="object-cover object-[center_70%] opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#060506]/78" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-12 md:space-y-14">
        <div className="flex justify-center">
          <Image
            src="/logo-mark.webp"
            alt=""
            width={56}
            height={46}
            className="w-11 md:w-12 h-auto"
          />
        </div>

        <div className="space-y-5 max-w-2xl mx-auto">
          <p className="body-copy">
            When the two hundred and fiftieth bottle is placed into a
            collector&apos;s hands,
          </p>
          <p
            className="font-sans font-normal text-gold leading-snug"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.85rem)" }}
          >
            the edition closes permanently.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 pt-2">
          {PLEDGES.map((label, i) => (
            <div key={label} className="flex items-center">
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-8 bg-[#EDE8DE]/25 mx-7 md:mx-10"
                  aria-hidden
                />
              )}
              <div className="flex flex-col items-center gap-3">
                <div className="w-7 h-px bg-gold" />
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#EDE8DE] font-medium">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
