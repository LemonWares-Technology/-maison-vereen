"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />
      <main className="flex-1">
        <ApplicationForm />
      </main>
      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
