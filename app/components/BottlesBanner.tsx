"use client";

import React from "react";

export default function BottlesBanner() {
  return (
    <section className="bg-[#080808] border-y border-white/[0.05] overflow-hidden py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 text-center">
        <p
          className="font-serif font-light text-[#E8E2D9] tracking-[0.28em] md:tracking-[0.38em] uppercase whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ fontSize: "clamp(1.1rem, 3vw, 2.8rem)" }}
        >
          250 Bottles.&nbsp;&nbsp;One Legacy.&nbsp;&nbsp;Forever.
        </p>
      </div>
    </section>
  );
}
