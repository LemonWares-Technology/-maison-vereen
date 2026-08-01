"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import FragranceEnquiryModal from "../components/signature/FragranceEnquiryModal";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

const WHATSAPP_URL = "https://wa.me/2348144413526";

const PILLARS = [
  {
    title: "Each a Complete Statement",
    body: "Every fragrance in the Collection is treated as a complete artistic statement; its own story, its own inspiration, its own character.",
    icon: "quill" as const,
  },
  {
    title: "Discover Individually",
    body: "None are framed as variations on a theme or filler around Edition I. Discover each one the way you might discover an artist's separate works.",
    icon: "flask" as const,
  },
  {
    title: "No Ecommerce Experience",
    body: "There is no ecommerce experience here. Every fragrance leads to a personal conversation with the House's concierge—by design, not by limitation.",
    icon: "lock" as const,
  },
];

const SIGNATURE_BOTTLES = [
  {
    id: "vereen",
    no: "No. I",
    name: "VEREEN",
    notes: "WOODY / AMBER",
    desc: "Warmth grounded in depth. Confidence without noise.",
    src: "/file_00000000a75471f48402160a6ed179fc.webp",
    alt: "Maison Vereen Edition I bottle — Vereen",
  },
  {
    id: "lumiere",
    no: "No. II",
    name: "LUMIÈRE",
    notes: "FLORAL / MUSK",
    desc: "Light that lingers. Grace with intention.",
    src: "/file_000000009ffc81f4b13c80251cc456a8.webp",
    alt: "Maison Vereen vessel — Lumière",
  },
  {
    id: "obsidian",
    no: "No. III",
    name: "OBSIDIAN",
    notes: "AMBER / LEATHER",
    desc: "Power in stillness. Presence that remains.",
    src: "/file_00000000a97471f4be1bee83e5dedea0.webp",
    alt: "Maison Vereen bottle detail — Obsidian",
  },
  {
    id: "santalis",
    no: "No. IV",
    name: "SANTALIS",
    notes: "WOODY / SPICY",
    desc: "Quiet strength. Refined and timeless.",
    src: "/file_000000005fc471f495c71bc758a16ffc.webp",
    alt: "Maison Vereen packaging — Santalis",
  },
  {
    id: "clairvoyant",
    no: "No. V",
    name: "CLAIRVOYANT",
    notes: "CITRUS / AROMATIC",
    desc: "Clarity in motion. Crisp, intelligent, assured.",
    src: "/images/hero-bottle.webp",
    alt: "Maison Vereen bottle — Clairvoyant",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="22"
      height="8"
      viewBox="0 0 28 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M0 5h26M21 1l5 4-5 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <path
        d="M4 6.5A3.5 3.5 0 017.5 3h9A3.5 3.5 0 0120 6.5v6a3.5 3.5 0 01-3.5 3.5H10l-4.5 4V16H7.5A3.5 3.5 0 014 12.5v-6z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillarIcon({ type }: { type: "quill" | "flask" | "lock" }) {
  if (type === "quill") {
    return (
      <svg
        width="28"
        height="36"
        viewBox="0 0 28 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-gold"
        aria-hidden
      >
        <path
          d="M14 2c0 8-6 12-6 20 0 4 2.5 7 6 10 3.5-3 6-6 6-10 0-8-6-12-6-20z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 22v12" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "flask") {
    return (
      <svg
        width="28"
        height="36"
        viewBox="0 0 28 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-gold"
        aria-hidden
      >
        <path
          d="M11 2h6M12 2v10L5 28a4 4 0 003.5 6h11A4 4 0 0023 28L16 12V2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="26" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg
      width="28"
      height="36"
      viewBox="0 0 28 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="text-gold"
      aria-hidden
    >
      <rect x="5" y="14" width="18" height="16" rx="1.5" />
      <path
        d="M9 14V10a5 5 0 0110 0v4"
        strokeLinecap="round"
      />
      <circle cx="14" cy="22" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function FragranceLibraryPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [enquiryFragrance, setEnquiryFragrance] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} onOpenApply={openApply} />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: image under header, copy on solid dark */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/file_000000009ffc81f4b13c80251cc456a8.webp"
                alt="Maison Vereen Signature Collection bottle and vessel"
                fill
                priority
                className="object-cover object-[center_32%]"
                sizes="100vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(6,5,6,0.55) 45%, #060506 100%)",
                }}
              />
              <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#060506] to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 flex-1 bg-[#060506] w-[95%] mx-auto pt-2 pb-14">
              <div className="w-full max-w-lg space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-lg text-gold">II</span>
                  <div className="w-6 h-px bg-gold" />
                </div>

                <div className="space-y-3">
                  <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium">
                    Signature Collection
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.8vw, 3.75rem)" }}
                >
                  The Permanent Work of the House.
                </h1>

                <div className="w-10 h-px bg-gold" />

                <p className="font-serif text-base font-light leading-[1.8] text-[#EDE8DE] max-w-md">
                  The Signature Collection represents Maison Vereen&apos;s
                  permanent body of work — fragrances available on an ongoing
                  basis, each developed with the same standard applied to Edition
                  I.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: image on right, melts into black on left */}
          <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
            <div className="bg-[#060506]" />
            <div className="relative overflow-hidden">
              <Image
                src="/file_000000009ffc81f4b13c80251cc456a8.webp"
                alt="Maison Vereen Signature Collection bottle and vessel"
                fill
                priority
                className="object-cover object-[center_35%]"
                sizes="55vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-60%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/35" />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#060506]/55" />
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-7xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-6 md:space-y-7">
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg md:text-xl text-gold">
                  II
                </span>
                <div className="w-6 h-px bg-gold" />
              </div>

              <div className="space-y-3">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  Signature Collection
                </span>
                <div className="w-10 h-px bg-gold" />
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)" }}
              >
                The Permanent Work of the House.
              </h1>

              <div className="w-10 h-px bg-gold" />

              <p className="font-serif text-base md:text-lg font-light leading-[1.8] text-[#EDE8DE] max-w-md">
                The Signature Collection represents Maison Vereen&apos;s
                permanent body of work — fragrances available on an ongoing
                basis, each developed with the same standard applied to Edition
                I.
              </p>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5">
          <div className="w-[95%] md:w-full max-w-3xl mx-auto text-center">
            <p className="font-serif italic font-light text-[#EDE8DE] leading-[1.85] text-lg md:text-xl lg:text-[1.35rem]">
              Where Edition I is finite by design, the Signature Collection is
              the House&apos;s enduring body of work — fragrances intended to
              remain part of Maison Vereen&apos;s offering for years, refined
              and revisited as the House&apos;s craft continues to evolve, but
              never produced at the expense of quality.
            </p>
          </div>
        </section>

        {/* ── Philosophy pillars ── */}
        <section className="relative bg-[#060506] pb-16 md:pb-24">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className={`flex flex-col items-center text-center gap-5 px-4 md:px-8 lg:px-10 ${
                    i > 0 ? "md:border-l md:border-white/10" : ""
                  }`}
                >
                  <PillarIcon type={p.icon} />
                  <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-serif text-base font-light leading-[1.75] text-[#EDE8DE] max-w-sm">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fragrance gallery ── */}
        <section
          id="fragrances"
          className="relative bg-[#060506] py-16 md:py-24 border-t border-white/5"
        >
          <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-12 md:space-y-14">
            <div className="text-center space-y-3">
              <h2 className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-gold font-medium">
                The Signature Collection
              </h2>
              <p className="font-serif text-base md:text-lg font-light text-[#EDE8DE]">
                A selection of the House&apos;s ongoing work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-4">
              {SIGNATURE_BOTTLES.map((b) => (
                <article
                  key={b.id}
                  className="group border border-gold/25 hover:border-gold/55 transition-colors duration-400 flex flex-col bg-[#060506] overflow-hidden"
                >
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/35 to-[#060506]/25" />
                    <div className="absolute inset-0 bg-linear-to-r from-[#060506]/40 via-transparent to-[#060506]/40" />
                  </div>

                  <div className="flex flex-col flex-1 gap-3 px-4 pt-5 pb-5 -mt-10 relative z-10">
                    <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold">
                      {b.no}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-light tracking-[0.06em] text-[#F2EDE4]">
                      {b.name}
                    </h3>
                    <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                      {b.notes}
                    </span>
                    <p className="font-serif text-sm md:text-[0.95rem] font-light leading-[1.7] text-[#EDE8DE] flex-1">
                      {b.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setEnquiryFragrance({ id: b.id, name: b.name })
                      }
                      className="inline-flex items-center gap-2.5 mt-2 font-sans text-[11px] uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors self-start"
                    >
                      Discover
                      <ArrowIcon />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 01 Each Fragrance, In Full ── */}
        <section className="relative bg-[#060506] overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2 pointer-events-none">
            <div className="relative overflow-hidden">
              <Image
                src="/images/hand_writing.webp"
                alt=""
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-linear-to-l from-[#060506] from-0% via-[#060506]/80 via-30% to-transparent to-65%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/40" />
            </div>
            <div className="bg-[#060506]" />
          </div>

          <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative w-full aspect-4/3 overflow-hidden lg:hidden">
                <Image
                  src="/images/hand_writing.webp"
                  alt="Archival journal and fountain pen of the House"
                  fill
                  className="object-cover object-center"
                  sizes="95vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/55" />
                <div className="absolute inset-0 bg-linear-to-r from-[#060506]/65 via-transparent to-[#060506]/65" />
              </div>

              <div className="hidden lg:block min-h-100" aria-hidden />

              <div className="space-y-5 max-w-xl lg:ml-auto">
                <div className="space-y-3">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light block">
                    01
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>
                <h2
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)" }}
                >
                  Each Fragrance, In Full
                </h2>
                <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  Every fragrance page within the Signature Collection includes
                  its story and inspiration, a description of its character and
                  mood, its note structure, and the occasions or moments it was
                  created to accompany — followed by concierge-based acquisition
                  options rather than a cart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Concierge-Based Acquisition ── */}
        <section className="relative bg-[#060506] overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2 pointer-events-none">
            <div className="bg-[#060506]" />
            <div className="relative overflow-hidden">
              <Image
                src="/images/wax-seal.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/80 via-30% to-transparent to-65%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/40" />
            </div>
          </div>

          <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-5 max-w-xl order-2 lg:order-1">
                <div className="space-y-3">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light block">
                    02
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>
                <h2
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)" }}
                >
                  Concierge-Based Acquisition
                </h2>
                <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  At the close of every fragrance page, visitors are invited to
                  speak with a concierge, request details, or continue the
                  conversation by WhatsApp or email. There is no &ldquo;Add to
                  Cart&rdquo; anywhere within Maison Vereen — acquiring a
                  Signature Collection fragrance is always a personal exchange.
                </p>
              </div>

              <div className="relative w-full aspect-4/3 overflow-hidden lg:hidden order-1">
                <Image
                  src="/images/wax-seal.jpg"
                  alt="Gold wax seal correspondence of Maison Vereen"
                  fill
                  className="object-cover object-center"
                  sizes="95vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/55" />
                <div className="absolute inset-0 bg-linear-to-r from-[#060506]/65 via-transparent to-[#060506]/65" />
              </div>

              <div
                className="hidden lg:block min-h-100 order-2"
                aria-hidden
              />
            </div>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="relative bg-[#060506] py-20 md:py-28 border-t border-white/5 overflow-hidden">
          <div className="absolute left-[-6%] top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none hidden md:block">
            <Image
              src="/logo-mark.webp"
              alt=""
              width={360}
              height={290}
              className="w-64 lg:w-80 h-auto"
            />
          </div>
          <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none hidden md:block">
            <Image
              src="/logo-mark.webp"
              alt=""
              width={360}
              height={290}
              className="w-64 lg:w-80 h-auto"
            />
          </div>

          <div className="relative w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-10">
            <Image
              src="/logo-mark.webp"
              alt="Maison Vereen"
              width={48}
              height={40}
              className="w-10 h-auto mx-auto"
            />

            <h2
              className="font-serif font-light text-[#F2EDE4] leading-snug"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)" }}
            >
              The Signature Collection is the ongoing work. What follows is the
              institution behind all of it.
            </h2>

            <div className="w-10 h-px bg-gold mx-auto" />

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
              >
                Speak to a Concierge
                <ChatIcon />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
              >
                Request Details
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />

      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />

      <FragranceEnquiryModal
        fragrance={enquiryFragrance}
        onClose={() => setEnquiryFragrance(null)}
      />
    </div>
  );
}
