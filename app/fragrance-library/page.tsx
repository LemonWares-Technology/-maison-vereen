"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGE 11 — SIGNATURE COLLECTION
// Blueprint sections (in order):
// 1. Hero: "The Permanent Work of the House."
// 2. Each Fragrance, In Full (gallery with concierge CTA per fragrance)
// 3. Concierge-Based Acquisition
// 4. CTAs: Speak to a Concierge / Request Details
// 5. Transition → PAGE 12

import SignatureHero from "../components/signature/SignatureHero";
import PhilosophyBand from "../components/signature/PhilosophyBand";
import FragranceGallery from "../components/signature/FragranceGallery";
import BottomCTA from "../components/signature/BottomCTA";
import ApplicationForm from "../components/ApplicationForm";

export default function FragranceLibraryPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Header />

      <main className="bg-charcoal flex-1">
        {/* 1 — Hero: "The Permanent Work of the House." */}
        <SignatureHero />

        {/* 2 — "Each one a character. None of them a category." + intro text */}
        <PhilosophyBand />

        {/* 3 — Each Fragrance, In Full (gallery) */}
        <FragranceGallery />

        {/* 4 — Concierge-Based Acquisition + CTAs + Transition */}
        <BottomCTA />
      </main>

      <Footer />

      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}
