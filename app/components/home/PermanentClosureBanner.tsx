"use client";

import Image from "next/image";

const PLEDGES = [
  { lines: ["No Reprint."] },
  { lines: ["No Reissue."] },
  { lines: ["No Anniversary", "Release."] },
];

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
      <div className="absolute inset-0 bg-[#060506]/88" />
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

        <p className="font-serif w-full font-normal text-[#F2EDE4] text-[clamp(1.75rem,4vw,3rem)] leading-tight max-w-5xl mx-auto">
          When the two hundred and fiftieth bottle is placed into a
          collector&apos;s hands,{" "}
          <span className="italic font-normal text-gold">
            the edition closes permanently.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 pt-2">
          {PLEDGES.map((pledge, i) => (
            <div key={pledge.lines.join(" ")} className="flex items-center">
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-10 bg-[#EDE8DE]/25 mx-7 md:mx-10"
                  aria-hidden
                />
              )}
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-gold font-medium leading-relaxed text-center min-w-28">
                {pledge.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
