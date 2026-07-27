"use client";

export default function PermanentClosureBanner() {
  return (
    <section className="bg-linear-to-b from-[#0B0A0A] via-[#0D0C0B] to-[#070606] border-b border-white/5 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle luxury glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-300 mx-auto px-6 sm:px-8 text-center relative z-10 space-y-10">

        {/* Crest Emblem Header */}
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full border border-gold/40 bg-[#060506] flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center">
              <span className="font-serif text-gold text-sm font-semibold italic">M</span>
            </div>
          </div>
        </div>

        {/* Main Quote Statement */}
        <div className="max-w-225 mx-auto">
          <p
            className="font-serif font-light text-[#EDE8DE] leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.8vw, 3rem)" }}
          >
            When the two hundred and fiftieth bottle is placed into a collector&apos;s hands,{" "}
            <span className="text-gold italic font-normal block sm:inline">
              the edition closes permanently.
            </span>
          </p>
        </div>

        {/* Bottom 3 Callout Pillars */}
        <div className="pt-6 max-w-200 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 items-center justify-center border-t border-white/10 sm:border-none">

          <div className="sm:border-r border-white/10 py-2 sm:py-0 sm:px-6 text-center">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#A3998E] font-medium">
              NO REPRINT.
            </span>
          </div>

          <div className="sm:border-r border-white/10 py-2 sm:py-0 sm:px-6 text-center">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#A3998E] font-medium">
              NO REISSUE.
            </span>
          </div>

          <div className="py-2 sm:py-0 sm:px-6 text-center">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#A3998E] font-medium">
              NO ANNIVERSARY RELEASE.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
