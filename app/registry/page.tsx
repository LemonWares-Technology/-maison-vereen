"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

const MAX_MEMBERS = 350;
const EDITION_BOTTLES = 250;

const INTRO_PILLARS = [
  {
    title: "Application",
    body: "Anyone may apply to the Founding Registry. There is no fee, and applying does not create an obligation to purchase.",
  },
  {
    title: "Acceptance",
    body: "Applications are reviewed individually. Acceptance into the Registry is the House recognising a place among its founding members — not an automatic sale.",
  },
  {
    title: "Capacity",
    body: "The Registry closes at three hundred and fifty founding members for two hundred and fifty bottles of Edition I. Not every applicant will be accepted.",
  },
];

const PROCESS_STEPS = [
  {
    no: "01",
    title: "Apply",
    body: "Complete the application in a matter of minutes. Share who you are and why the founding chapter matters to you.",
  },
  {
    no: "02",
    title: "Review",
    body: "Applications are read individually by a member of the House. There is no automated shortlist.",
  },
  {
    no: "03",
    title: "Recognition",
    body: "Qualified applicants receive a decision within 24 to 48 hours, with clear next steps if accepted.",
  },
];

interface ApprovedRecord {
  verificationNumber: string;
  displayName: string;
  country: string;
  approvedAt: string;
}

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

function StepChevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="text-gold/55"
      aria-hidden
    >
      <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "—";
  }
}

function formatMemberNo(verificationNumber: string) {
  const n = Number(verificationNumber);
  if (!Number.isFinite(n) || n <= 0) return "—";
  return String(n).padStart(3, "0");
}

export default function RegistryPage() {
  const [recent, setRecent] = useState<ApprovedRecord[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/applications/approved?limit=8")
      .then((r) => r.json())
      .then((data: { records?: ApprovedRecord[] }) => {
        if (cancelled) return;
        const records = [...(data.records ?? [])]
          .sort(
            (a, b) =>
              new Date(b.approvedAt).getTime() -
              new Date(a.approvedAt).getTime()
          )
          .slice(0, 5);
        setRecent(records);
        setLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: image under header, copy on solid dark */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/images/private_maison_desk.webp"
                alt="Founding Registry ledger of Maison Vereen"
                fill
                priority
                className="object-cover object-center"
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
              <div className="w-full max-w-lg space-y-6">
                <div className="space-y-3">
                  <span className="font-serif text-lg text-gold block">01</span>
                  <div className="w-10 h-px bg-gold" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium">
                    The Maison Vereen Founding Registry
                  </span>
                </div>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                >
                  The House Is Assembled Before the Bottles Are Released.
                </h1>

                <p className="font-serif text-base font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                  The Founding Registry is the official record of those who apply
                  to become founding members of Maison Vereen — and, for those
                  accepted, the path toward Edition I.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: image melts from the right */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute inset-0 left-[30%] xl:left-[26%]">
              <Image
                src="/images/private_maison_desk.webp"
                alt="Founding Registry ledger of Maison Vereen"
                fill
                priority
                className="object-cover object-center"
                sizes="70vw"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-26% via-[#060506]/95 via-40% to-transparent to-68%" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/40" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#060506]/45" />
          </div>

          <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-7xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-7">
              <div className="space-y-3">
                <span className="font-serif text-lg md:text-xl text-gold block">
                  01
                </span>
                <div className="w-10 h-px bg-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                  The Maison Vereen Founding Registry
                </span>
              </div>

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)" }}
              >
                The House Is Assembled Before the Bottles Are Released.
              </h1>

              <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                The Founding Registry is the official record of those who apply
                to become founding members of Maison Vereen — and, for those
                accepted, the path toward Edition I.
              </p>
            </div>
          </div>
        </section>

        {/* ── Intro + pillars ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto space-y-12 md:space-y-16">
            <p className="font-serif text-lg md:text-xl font-light leading-[1.85] text-[#EDE8DE] text-center max-w-3xl mx-auto">
              The Registry exists so the House can be assembled with intention —
              member by member — before Edition I is placed into the world. It
              is not a waitlist for inventory. It is the founding record of the
              Maison.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
              {INTRO_PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className={`space-y-4 text-center md:text-left md:px-8 ${
                    i > 0 ? "md:border-l md:border-gold/25" : ""
                  }`}
                >
                  <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
                    {p.title}
                  </h3>
                  <p className="font-serif text-base font-light leading-[1.8] text-[#EDE8DE]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 The Registry ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src="/images/hand_writing.webp"
                  alt="Open Founding Registry ledger"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 95vw, 45vw"
                />
              </div>

              <div className="space-y-6 max-w-xl">
                <div className="space-y-3">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light block">
                    03
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>
                <h2
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  The Registry
                </h2>
                <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  The Registry is a living record — names accepted, places
                  represented, dates entered — and the beginning of the Maison
                  Vereen legacy. Each accepted member becomes part of the
                  House&apos;s founding chapter, permanently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Process ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-12 lg:gap-16 items-start">
              <div className="space-y-5 max-w-md">
                <div className="space-y-3">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light block">
                    04
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>
                <h2 className="font-sans text-xs uppercase tracking-[0.28em] text-gold font-medium">
                  The Application &amp; Review Process
                </h2>
                <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  A clear and intentional process. Designed to protect the
                  integrity of the House and the meaning of membership within
                  it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 lg:gap-2">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.no} className="flex items-start sm:flex-1 gap-3">
                    <div className="space-y-3 flex-1 min-w-0">
                      <span className="font-serif text-sm text-gold block">
                        {step.no}
                      </span>
                      <h3 className="font-serif text-xl text-[#F2EDE4] font-light tracking-wide uppercase">
                        {step.title}
                      </h3>
                      <p className="font-serif text-sm md:text-base font-light leading-[1.75] text-[#EDE8DE]">
                        {step.body}
                      </p>
                    </div>
                    {idx < PROCESS_STEPS.length - 1 ? (
                      <div className="hidden sm:flex items-center pt-8 shrink-0 px-1">
                        <StepChevron />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Apply ── */}
        <section
          id="apply"
          className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20 scroll-mt-28"
        >
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 max-w-xl">
                <div className="space-y-3">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light block">
                    05
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>
                <h2 className="font-sans text-xs uppercase tracking-[0.28em] text-gold font-medium">
                  Apply to the Registry
                </h2>
                <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  The application is free and creates no obligation. Open the
                  full registry application — every answer is read personally by
                  the House.
                </p>
                <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors"
              >
                Apply to the Registry
                  <ArrowIcon />
              </Link>
              </div>

              <div className="relative w-full aspect-4/5 max-w-md mx-auto lg:max-w-none overflow-hidden">
                <Image
                  src="/images/wax-seal.jpg"
                  alt="Gold wax seal correspondence of Maison Vereen"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 / 07 / 08 ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
              <div className="space-y-4 md:px-8">
                <span className="font-serif text-xl text-gold font-light block">
                  06
                </span>
                <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
                  What Acceptance Means
                </h3>
                <p className="font-serif text-base font-light leading-[1.8] text-[#EDE8DE]">
                  Acceptance into the Founding Registry recognises you as a
                  founding member of the House. It is the beginning of a
                  relationship — correspondence, consideration, and, in time,
                  the opportunity to hold Edition I.
                </p>
              </div>

              <div className="space-y-4 md:px-8 md:border-l md:border-gold/25">
                <span className="font-serif text-xl text-gold font-light block">
                  07
                </span>
                <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
                  When the Registry Closes
                </h3>
                <p className="font-serif text-base font-light leading-[1.8] text-[#EDE8DE]">
                  The Founding Registry closes permanently once three hundred
                  and fifty founding members have been accepted. After that,
                  this chapter of the House does not reopen.
                </p>
              </div>

              <div className="space-y-4 md:px-8 md:border-l md:border-gold/25">
                <span className="font-serif text-xl text-gold font-light block">
                  08
                </span>
                <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
                  The Numbers
                </h3>
                <p
                  className="font-serif font-light text-gold leading-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
                >
                  {MAX_MEMBERS}
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold font-medium">
                  Maximum Founding Members
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#EDE8DE]/70 font-medium pt-2">
                  {EDITION_BOTTLES} Bottles in Edition I
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 Live Registry ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.2fr)_minmax(0,0.85fr)] gap-12 lg:gap-10 items-start">
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light block">
                    09
                  </span>
                  <div className="w-10 h-px bg-gold" />
                </div>
                <h2 className="font-sans text-xs uppercase tracking-[0.28em] text-gold font-medium">
                  Live Registry
                </h2>
                <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  The Registry is growing. Member by member. In real time.
                </p>
                <Link
                  href="/the-first-250"
                  className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors font-medium"
                >
                  View the Live Registry
                  <ArrowIcon />
                </Link>
              </div>

              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-100 text-left">
                    <thead>
                      <tr className="border-b border-gold/25">
                        {[
                          "Registry No.",
                          "City / Country",
                          "Status",
                          "Date Accepted",
                        ].map((h) => (
                          <th
                            key={h}
                            className="pb-3 pr-4 font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-medium"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {!loaded ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="py-6 font-serif text-sm text-[#EDE8DE]/60"
                          >
                            Loading the record…
                          </td>
                        </tr>
                      ) : recent.length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="py-6 font-serif text-sm text-[#EDE8DE]/60"
                          >
                            The first accepted names will appear here.
                          </td>
                        </tr>
                      ) : (
                        recent.map((r) => (
                          <tr
                            key={r.verificationNumber}
                            className="border-b border-white/5"
                          >
                            <td className="py-3.5 pr-4 font-serif text-sm text-[#EDE8DE]">
                              {formatMemberNo(r.verificationNumber)}
                            </td>
                            <td className="py-3.5 pr-4 font-serif text-sm text-[#EDE8DE]">
                              {r.country}
                            </td>
                            <td className="py-3.5 pr-4 font-serif text-sm text-gold">
                              Accepted
                            </td>
                            <td className="py-3.5 font-serif text-sm text-[#EDE8DE]/80">
                              {formatDate(r.approvedAt)}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="text-center">
                  <Link
                    href="/the-first-250"
                    className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors font-medium"
                  >
                    View Full Registry
                    <ArrowIcon />
                  </Link>
                </div>
              </div>

              <div className="relative w-full aspect-square max-w-xs mx-auto lg:max-w-none overflow-hidden">
                <Image
                  src="/file_000000005fc471f495c71bc758a16ffc.webp"
                  alt="Maison Vereen registry book"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 70vw, 28vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA band ── */}
        <section className="relative bg-[#060506] py-14 md:py-18 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_auto] gap-8 lg:gap-10 items-center">
              <h2
                className="font-serif font-light text-[#F2EDE4] leading-snug"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}
              >
                The Registry is not an abstraction.
              </h2>
              <p className="font-serif text-base md:text-lg font-light leading-[1.8] text-[#EDE8DE]">
                It is growing, member by member, in real time.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors"
              >
                Apply to the Registry
                  <ArrowIcon />
              </Link>
                <Link
                  href="/the-first-250"
                  className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
                >
                  View the Live Registry
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
