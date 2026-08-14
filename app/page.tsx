"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BeforeLanguageSection from "./components/home/BeforeLanguageSection";
import FounderEdition from "./components/home/FounderEdition";
import WhyOnly250 from "./components/home/WhyOnly250";
import PermanentClosureBanner from "./components/home/PermanentClosureBanner";
import FoundingRegistrySection from "./components/home/FoundingRegistrySection";

const HOME_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "PHILOSOPHY", href: "/philosophy" },
  { label: "THE HOUSE", href: "/journal" },
];

const HOME_FOOTER_NAV = [
  ...HOME_NAV,
  { label: "CONTACT", href: "/contact" },
];

export default function HomePage() {

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={HOME_NAV} />

      <main className="flex-1">
        <p className="sr-only">Maison Vereen — Extrait de Parfum</p>
        <HeroSection />
        <BeforeLanguageSection />
        <FounderEdition />
        <WhyOnly250 />
        <PermanentClosureBanner />
        <FoundingRegistrySection />
      </main>

      <Footer navItems={HOME_FOOTER_NAV} />
    </div>
  );
}
