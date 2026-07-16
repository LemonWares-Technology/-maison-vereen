"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

// PAGE 1 — Blueprint sequence (top to bottom):
// 1. Hero: "The room knows before you speak."
// 2. The Founder Edition — what Edition I is
// 3. Why Only 250 — craftsmanship logic, not marketing
// 4. Transition: "Before you apply, you should understand what you are applying to." → /our-story

import HeroSection from "./components/HeroSection";
import FounderEdition from "./components/home/FounderEdition";
import WhyOnly250 from "./components/home/WhyOnly250";

export default function HomePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <>
      <Header />

      <main className="flex-1 bg-charcoal">

        {/* 1 — Hero
            "The room knows before you speak."
            Blueprint: Headline, supporting statement, 3 paragraphs of main content, Apply for a Position / Enter the House */}
        <p className="sr-only">Maison Vereen</p>
        <HeroSection onOpenApply={openApply} />

        {/* 2 — The Founder Edition
            Blueprint: "Introduce Edition I as the flagship founding chapter of the House" */}
        <FounderEdition />

        {/* 3 — Why Only 250
            Blueprint: "Explain the scarcity as intentional craftsmanship logic, not a marketing device" */}
        <WhyOnly250 />

        {/* PAGE 1 → PAGE 2 transition
            Blueprint: "Before you apply, you should understand what you are applying to."
            Leads to: Discover Maison Vereen (/our-story) */}
        <section className="bg-[#060506] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-14 text-center">
            <p
              className="font-serif font-light italic text-[#7A7068]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}
            >
              Before you apply, you should understand what you are applying to.
            </p>
            <Link
              href="/our-story"
              className="inline-block mt-5 text-gold/70 hover:text-gold transition-colors uppercase tracking-[0.25em] font-medium"
              style={{ fontSize: "10px" }}
            >
              Discover Maison Vereen →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}
