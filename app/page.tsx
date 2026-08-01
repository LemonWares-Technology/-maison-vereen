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

const HOME_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE EXPERIENCE", href: "/philosophy" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
];

const HOME_FOOTER_NAV = [
  ...HOME_NAV,
  { label: "CONTACT", href: "/contact" },
];

export default function HomePage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={HOME_NAV} onOpenApply={openApply} />

      <main className="flex-1">
        <p className="sr-only">Maison Vereen — Extrait de Parfum</p>
        <HeroSection onOpenApply={openApply} />
        <BeforeLanguageSection />
        <FounderEdition />
        <WhyOnly250 />
        <PermanentClosureBanner />
        <FoundingRegistrySection onOpenApply={openApply} />
      </main>

      <Footer navItems={HOME_FOOTER_NAV} />

      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
