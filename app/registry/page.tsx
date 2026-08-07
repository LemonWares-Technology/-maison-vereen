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
  { label: "REGISTRY", href: "/the-first-250" },
  { label: "CONTACT", href: "/contact" },
];

const MAX_MEMBERS = 350;
const EDITION_BOTTLES = 250;

const INTRO_PILLARS = [
  {
    title: "Application",
    body: "Applying to the Founding Registry is not a purchase, and it carries no financial obligation. It is an expression of serious interest, reviewed personally by the House, after which qualified applicants are formally accepted as Founding Registry members.",
  },
  {
    title: "Acceptance",
    body: "Acceptance is the first recognition the House extends — and it precedes, often by some time, the private invitation to acquire one of the two hundred and fifty Edition I bottles.",
  },
  {
    title: "Capacity",
    body: "The Registry will accept a maximum of three hundred and fifty members. Because only two hundred and fifty bottles exist, not every accepted member will ultimately receive an invitation to acquire — a fact the House states plainly, rather than obscures, out of respect for those who apply.",
  },
];

const PROCESS_STEPS = [
  {
    no: "01",
    title: "Apply",
    body: "Complete the application in a matter of minutes. It's an expression of serious interest.",
  },
  {
    no: "02",
    title: "Review",
    body: "Applications are read individually by a member of the House. There is no automated shortlist.",
  },
  {
    no: "03",
    title: "Recognition",
    body: "Qualified applicants receive a decision within 24–48 hours, and are added to the Registry.",
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
    <svg width="22" height="8" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M0 5h26M21 1l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepChevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gold/55 shrink-0" aria-hidden>
      <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(iso));
  } catch { return "—"; }
}

function formatMemberNo(v: string) {
  const n = Number(v);
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
          .sort((a, b) => new Date(b.approvedAt).getTime() - new Date(a.approvedAt).getTime())
          .slice(0, 5);
        setRecent(records);
        setLoaded(true);
      })
      .catch(() => { if (!cancelled) setLoaded(true); });
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />
      <main className="flex-1">

        {/* ── 01 HERO ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image src="/images/application-hero.webp" alt="" fill priority className="object-cover object-center" sizes="100vw" />
              <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(6,5,6,0.55) 45%, #060506 100%)" }} />
              <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#060506] to-transparent pointer-events-none" />
            </div>
            <div className="relative z-10 flex-1 bg-[#060506] w-[95%] mx-auto pt-2 pb-14">
              <div className="w-full max-w-lg space-y-6">
                <div className="space-y-3">
                  <span className="font-serif text-lg text-gold block">01</span>
                  <div className="w-10 h-px bg-gold" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium">The Maison Vereen Founding Registry</span>
                </div>
                <h1 className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                  The House Is Assembled Before the Bottles Are Released.
                </h1>
                <p className="font-serif text-base font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                  The Founding Registry is the official record of those who apply to become founding members of Maison Vereen — and, for those accepted, the path toward Edition I.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute inset-0 left-[30%] xl:left-[26%]">
              <Image src="/images/application-hero.webp" alt="" fill priority className="object-cover object-center" sizes="70vw" />
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-26% via-[#060506]/95 via-40% to-transparent to-68%" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/40" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#060506]/45" />
          </div>

          <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-7">
              <div className="space-y-3">
                <span className="font-serif text-lg md:text-xl text-gold block">01</span>
                <div className="w-10 h-px bg-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">The Maison Vereen Founding Registry</span>
              </div>
              <h1 className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight" style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)" }}>
                The House Is Assembled Before the Bottles Are Released.
              </h1>
              <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                The Founding Registry is the official record of those who apply to become founding members of Maison Vereen — and, for those accepted, the path toward Edition I.
              </p>
            </div>
          </div>
        </section>

        {/* ── 02 INTRO — dark marble texture + centered para + 3 columns ── */}
        <section className="relative py-16 md:py-24 border-t border-gold/20 overflow-hidden">
          <Image src="/images/application-hero.webp" alt="" fill className="object-cover object-center opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-[#060506]/82" />
          <div className="relative z-10 w-[95%] md:w-full max-w-6xl mx-auto space-y-14">
            <p className="font-serif text-base md:text-lg lg:text-xl font-light leading-[1.9] text-[#EDE8DE] text-center max-w-3xl mx-auto">
              Before a single bottle of Edition I is offered for acquisition, the House is assembled.
              The Maison Vereen Founding Registry exists for that purpose — an official, reviewed
              record of the individuals who have applied to become part of Maison Vereen&apos;s founding chapter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
              {INTRO_PILLARS.map((p, i) => (
                <div key={p.title} className={`md:px-8 ${i > 0 ? "md:border-l md:border-gold/20" : ""}`}>
                  <p className="font-serif text-sm font-light leading-[1.95] text-[#EDE8DE]/80">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 THE REGISTRY — ledger image left, text right ── */}
        <section className="relative bg-[#060506] border-t border-gold/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — ledger image with subtle melt only on right edge */}
            <div className="relative min-h-80 md:min-h-100 lg:min-h-120 overflow-hidden">
              <Image
                src="/images/application-hero.webp"
                alt="Open Founding Registry ledger"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/20" />
              <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#060506] to-transparent hidden lg:block" />
            </div>
            {/* Right — text */}
            <div className="flex flex-col justify-center px-8 sm:px-12 md:px-14 lg:px-16 py-16 md:py-20 space-y-6">
              <div className="space-y-3">
                <span className="font-serif text-2xl text-gold font-light block">03</span>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif font-light text-[#F2EDE4] leading-snug" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                The Registry
              </h2>
              <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                The Founding Registry is the living record of those recognised by the House.
              </p>
              <p className="font-serif text-base font-light leading-[1.85] text-[#EDE8DE]/80 max-w-md">
                It is not a queue. It is the beginning of the Maison Vereen legacy.
              </p>
            </div>
          </div>
        </section>

        {/* ── 04 THE APPLICATION & REVIEW PROCESS ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2.25fr)] gap-12 lg:gap-16 items-start">
              {/* Left label col */}
              <div className="space-y-4">
                <span className="font-serif text-xl text-gold font-light block">04</span>
                <div className="w-8 h-px bg-gold" />
                <h2 className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold font-medium leading-relaxed">
                  The Application &amp;<br />Review Process
                </h2>
                <p className="font-serif text-sm font-light leading-[1.85] text-[#EDE8DE]/80">
                  A clear and intentional process. Designed to protect the integrity of the House and the meaning of founding membership.
                </p>
              </div>
              {/* Right — 3 steps with chevrons */}
              <div className="flex flex-col sm:flex-row gap-10 sm:gap-4 items-start">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.no} className="flex items-start sm:flex-1 gap-3">
                    <div className="space-y-2 flex-1 min-w-0">
                      <span
                        className="font-serif text-gold font-light leading-none block"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                      >
                        {step.no}
                      </span>
                      <h3 className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#F2EDE4] font-medium">
                        {step.title}
                      </h3>
                      <p className="font-serif text-sm font-light leading-[1.75] text-[#EDE8DE]/75">
                        {step.body}
                      </p>
                    </div>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <div className="hidden sm:flex items-center pt-4 shrink-0 px-1">
                        <StepChevron />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 APPLY TO THE REGISTRY — form fields + wax seal image ── */}
        <section id="apply" className="relative bg-[#060506] border-t border-gold/20 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — preview form (decorative, clicking anything goes to /apply) */}
            <div className="px-8 sm:px-12 md:px-14 lg:px-16 py-16 md:py-20 space-y-8">
              <div className="space-y-3">
                <span className="font-serif text-xl text-gold font-light block">05</span>
                <div className="w-8 h-px bg-gold" />
                <h2 className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold font-medium">
                  Apply to the Founding Registry
                </h2>
                <p className="font-serif text-sm font-light leading-[1.85] text-[#EDE8DE]/80 max-w-sm">
                  There is no cost to apply. The application is read personally by the House.
                </p>
              </div>
              {/* Fields — decorative preview, wrapped in a link overlay */}
              <div className="relative space-y-3 max-w-md">
                {/* Invisible full-area link sits on top */}
                <Link href="/apply" className="absolute inset-0 z-10" aria-label="Open application" />
                <div className="grid grid-cols-2 gap-3 pointer-events-none">
                  <div className="bg-[#0D0B09] border border-gold/25 px-4 py-3 text-sm font-light text-[#EDE8DE]/40">
                    Full Name
                  </div>
                  <div className="bg-[#0D0B09] border border-gold/25 px-4 py-3 text-sm font-light text-[#EDE8DE]/40">
                    Email Address
                  </div>
                </div>
                <div className="bg-[#0D0B09] border border-gold/25 px-4 py-3 text-sm font-light text-[#EDE8DE]/40 pointer-events-none flex items-center justify-between">
                  <span>Country of Residence</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="shrink-0"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="bg-[#0D0B09] border border-gold/25 px-4 py-3 text-sm font-light text-[#EDE8DE]/40 min-h-20 pointer-events-none">
                  Why do you wish to be part of Maison Vereen&apos;s Founding Registry?
                </div>
                <div className="w-full bg-gold text-[#060506] py-3.5 text-[11px] tracking-[0.28em] uppercase font-semibold text-center pointer-events-none">
                  Apply to the Registry
                </div>
              </div>
            </div>
            {/* Right — wax seal book image */}
            <div className="relative min-h-80 lg:min-h-0 overflow-hidden">
              <Image
                src="/images/the bottle.webp"
                alt="Gold wax seal correspondence of Maison Vereen"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#060506] to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/60 via-transparent to-[#060506]/20" />
            </div>
          </div>
        </section>

        {/* ── 06 / 07 / 08 — What Acceptance Means / When Registry Closes / The Numbers ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

              {/* 06 */}
              <div className="space-y-4 md:pr-10">
                <span className="font-serif text-xl text-gold font-light block">06</span>
                <div className="w-8 h-px bg-gold" />
                <h3 className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold font-medium">
                  The Acceptance Means
                </h3>
                <p className="font-serif text-sm font-light leading-[1.9] text-[#EDE8DE]/85">
                  Acceptance into the Founding Registry confirms you as a founding member of the House. It does not, by itself, guarantee a bottle. Invitations to acquire are extended individually as the House determines, in the order reflected by each member&apos;s assigned position.
                </p>
              </div>

              {/* 07 */}
              <div className="space-y-4 md:px-10 md:border-l md:border-gold/20">
                <span className="font-serif text-xl text-gold font-light block">07</span>
                <div className="w-8 h-px bg-gold" />
                <h3 className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold font-medium">
                  When the Registry Closes
                </h3>
                <p className="font-serif text-sm font-light leading-[1.9] text-[#EDE8DE]/85">
                  Once three hundred and fifty applicants have been accepted, the Founding Registry closes permanently. No further applications will be reviewed for Edition I. The House will not extend this number to in order to sell the remaining two hundred and fifty bottles — the House does not need to reach the cutoff before it could close to new applicants.
                </p>
              </div>

              {/* 08 */}
              <div className="space-y-4 md:pl-10 md:border-l md:border-gold/20">
                <span className="font-serif text-xl text-gold font-light block">08</span>
                <div className="w-8 h-px bg-gold" />
                <h3 className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold font-medium">
                  The Numbers
                </h3>
                <p
                  className="font-serif font-light text-gold leading-none"
                  style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
                >
                  {MAX_MEMBERS}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold font-medium">
                  Maximum Founding Members
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#EDE8DE]/55 font-medium pt-1">
                  {EDITION_BOTTLES} Bottles · Edition I
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09 LIVE REGISTRY — label left, table center, image right ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.4fr)_minmax(0,0.75fr)] gap-12 lg:gap-10 items-start">

              {/* Left label */}
              <div className="space-y-5">
                <span className="font-serif text-xl text-gold font-light block">09</span>
                <div className="w-8 h-px bg-gold" />
                <h2 className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold font-medium">
                  Live Registry
                </h2>
                <p className="font-serif text-sm font-light leading-[1.85] text-[#EDE8DE]/85">
                  The Registry is growing. Member by member. In real time.
                </p>
                <Link
                  href="/the-first-250"
                  className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors font-medium"
                >
                  View the Live Registry
                  <ArrowIcon />
                </Link>
              </div>

              {/* Center table */}
              <div className="space-y-5">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gold/25">
                        {["Registry No.", "City / Country", "Status", "Date Accepted"].map((h) => (
                          <th key={h} className="pb-3 pr-4 font-sans text-[9px] uppercase tracking-[0.2em] text-gold font-medium whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {!loaded ? (
                        <tr>
                          <td colSpan={4} className="py-6 font-serif text-sm text-[#EDE8DE]/50">
                            Loading the record…
                          </td>
                        </tr>
                      ) : recent.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="py-6 font-serif text-sm text-[#EDE8DE]/50">
                            The first accepted names will appear here.
                          </td>
                        </tr>
                      ) : (
                        recent.map((r) => (
                          <tr key={r.verificationNumber} className="border-b border-white/5">
                            <td className="py-3 pr-4 font-mono text-xs text-gold">{formatMemberNo(r.verificationNumber)}</td>
                            <td className="py-3 pr-4 font-serif text-sm text-[#EDE8DE]">{r.country}</td>
                            <td className="py-3 pr-4 font-sans text-[10px] uppercase tracking-[0.15em] text-gold">Accepted</td>
                            <td className="py-3 font-serif text-sm text-[#EDE8DE]/70">{formatDate(r.approvedAt)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="text-center">
                  <Link
                    href="/the-first-250"
                    className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors font-medium"
                  >
                    View Full Registry →
                  </Link>
                </div>
              </div>

              {/* Right image */}
              <div className="relative w-full aspect-square max-w-xs mx-auto lg:max-w-none overflow-hidden">
                <Image
                  src="/images/the bottle.webp"
                  alt="Maison Vereen registry correspondence"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 70vw, 24vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506]/60 via-transparent to-[#060506]/30" />
                <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#060506] to-transparent hidden lg:block" />
              </div>

            </div>
          </div>
        </section>

        {/* ── CLOSING CTA BAND ── */}
        <section className="relative bg-[#060506] py-14 md:py-16 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_auto] gap-8 lg:gap-10 items-center">
              <h2
                className="font-serif font-light text-[#F2EDE4] leading-snug"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}
              >
                The Registry is not<br />an abstraction.
              </h2>
              <p className="font-serif text-base md:text-lg font-light leading-[1.8] text-[#EDE8DE]">
                It is growing, member by member, in real time.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors"
                >
                  Apply to the Registry
                  <ArrowIcon />
                </Link>
                <Link
                  href="/the-first-250"
                  className="inline-flex items-center justify-center gap-3 border border-gold/50 text-gold hover:border-gold px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
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
