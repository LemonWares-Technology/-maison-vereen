"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BeforeLanguageSection from "./components/home/BeforeLanguageSection";
import FounderEdition from "./components/home/FounderEdition";
import WhyOnly250 from "./components/home/WhyOnly250";
import PermanentClosureBanner from "./components/home/PermanentClosureBanner";
import FoundingRegistrySection from "./components/home/FoundingRegistrySection";
import ApplicationForm from "./components/ApplicationForm";

export default function HomePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col font-sans selection:bg-gold/30 selection:text-[#EDE8DE]">

      {/* ── Fixed Luxury Top Header ── */}
      <Header onOpenApply={openApply} />

      {/* ── Main Page Content ── */}
      <main className="flex-1">
        <p className="sr-only">Maison Vereen — Extrait de Parfum</p>

        {/* Section 1 — Hero Section */}
        <HeroSection onOpenApply={openApply} />

        {/* Section 2 — Before Language */}
        <BeforeLanguageSection />

        {/* Section 3 — The Founder Edition */}
        <FounderEdition />

        {/* Section 4 — Why Only 250 */}
        <WhyOnly250 />

        {/* Section 5 — Permanent Closure Banner */}
        <PermanentClosureBanner />

        {/* Section 6 — The Founding Registry */}
        <FoundingRegistrySection onOpenApply={openApply} />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Interactive Application Modal Drawer ── */}
      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
