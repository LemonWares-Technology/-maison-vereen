"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

const COUNTRY_OPTIONS = [
  "Select your country",
  "South Africa",
  "Nigeria",
  "Ghana",
  "Kenya",
  "United States",
  "United Kingdom",
  "France",
  "Germany",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Singapore",
  "Other",
];

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Priority Access",
    body: "Be the first to know when applications open.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 8l9-5 9 5v8l-9 5-9-5V8z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        <path
          d="M12 3v18M3 8l9 5 9-5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Founder Updates",
    body: "Receive exclusive updates from the House.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Behind the Scenes",
    body: "Access rare stories, inspirations and creations.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="0.9" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Member Privileges",
    body: "Special access for those who share our vision.",
  },
];

export default function WaitlistPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: COUNTRY_OPTIONS[0],
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full bg-transparent border border-white/1 px-4 py-3 text-[13px] text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/50 transition-colors duration-300";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country:
            form.country === COUNTRY_OPTIONS[0] ? "" : form.country,
        }),
      });
      if (res.ok || res.status === 409) {
        setJoined(true);
      } else {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header  />

      <main className="bg-charcoal">

        {/* ── HERO ── */}
        <section className="pt-[72px] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">

              {/* Left */}
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-24 space-y-6 md:space-y-8 w-full">
                <span className="section-tag">Official Waiting List</span>
                <h1 className="type-display uppercase text-center lg:text-left">
                  Be among the few.
                  <br />
                  Be part of the first.
                </h1>
                <div className="type-body-sm space-y-2">
                  <p>Edition I is limited to 250 bottles.</p>
                  <p>
                    Join the official waiting list for priority access when
                    applications open.
                  </p>
                </div>
                <button
                  onClick={() => {
                    document
                      .getElementById("waitlist-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="self-start border border-gold/60 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500 text-[11px] tracking-[0.3em]"
                >
                  <span className="uppercase font-medium">
                    Join the Waiting List
                  </span>
                </button>
              </div>

              {/* Right — hero image */}
              <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-0 overflow-hidden bg-[#060606]">
                <Image
                  src="/images/maison-vereen-access.png"
                  alt="Maison Vereen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-charcoal/50" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060606]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WAITLIST COUNTER ── */}
        <WaitlistCounter />

        {/* ── FOUR BENEFITS ── */}
        <section className="bg-[#080808] border-b border-white/5">          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-x sm:divide-y-0 md:divide-y-0 divide-white/5">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group px-6 py-8 md:px-7 md:py-10 space-y-4 hover:bg-white/2 transition-colors duration-400"
                >
                  <div className="text-gold/35 group-hover:text-gold/60 transition-colors duration-400">
                    {b.icon}
                  </div>
                  <div className="w-4 h-px bg-gold/20 group-hover:w-8 group-hover:bg-gold/40 transition-all duration-500" />
                  <h3 className="type-caption uppercase tracking-widest text-[#8A8178]">
                    {b.title}
                  </h3>
                  <p className="text-[13px] text-[#4A4440] font-light leading-[1.7]">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGE + FORM ── */}
        <section id="waitlist-form" className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

              {/* Left — image: hidden on mobile, visible lg+ */}
              <div className="hidden lg:block relative overflow-hidden bg-[#040404]">
                <Image
                  src="/images/house-section-image.png"
                  alt="Maison Vereen"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-charcoal/40" />
                <div className="absolute inset-0 bg-linear-to-t from-[#040404]/60 via-transparent to-transparent" />
              </div>

              {/* Right — Waitlist form */}
              <div className="flex flex-col justify-center px-6 sm:px-8 md:px-14 py-12 md:py-16 lg:py-20 bg-charcoal lg:bg-charcoal lg:border-l lg:border-white/5">
                {!joined ? (
                  <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[440px]">
                    <div className="space-y-2 mb-8">
                      <span className="section-tag">
                        Join the Official Waiting List
                      </span>
                      <p className="type-body-sm">
                        Enter your details to join the Maison Vereen community.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="type-caption uppercase tracking-widest text-[#5A5449]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="type-caption uppercase tracking-widest text-[#5A5449]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label className="type-caption uppercase tracking-widest text-[#5A5449]">
                        Country
                      </label>
                      <div className="relative">
                        <select
                          value={form.country}
                          onChange={(e) =>
                            setForm({ ...form, country: e.target.value })
                          }
                          className={`${inputClass} appearance-none cursor-pointer pr-8`}
                        >
                          {COUNTRY_OPTIONS.map((c) => (
                            <option
                              key={c}
                              value={c}
                              disabled={c === COUNTRY_OPTIONS[0]}
                              className="bg-charcoal text-[#E8E2D9]"
                            >
                              {c}
                            </option>
                          ))}
                        </select>
                        {/* Chevron */}
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                          >
                            <path
                              d="M1 1l4 4 4-4"
                              stroke="#5A5449"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Consent */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={form.consent}
                        onClick={() =>
                          setForm({ ...form, consent: !form.consent })
                        }
                        className={`shrink-0 w-3.5 h-3.5 border mt-1 flex items-center justify-center transition-all duration-300 ${
                          form.consent
                            ? "border-gold bg-gold/15"
                            : "border-white/15 group-hover:border-white/25"
                        }`}
                      >
                        {form.consent && (
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M1.5 5l2.5 2.5 4.5-4.5"
                              stroke="#C9A84C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                      <span className="type-caption text-[#5A5449]">
                        I agree to receive updates and understand that this is
                        not an application.
                      </span>
                    </label>

                    {/* Error */}
                    {error && (
                      <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 leading-relaxed">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting || !form.consent}
                      className="w-full py-4 bg-gold/90 hover:bg-gold text-charcoal transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed text-[11px] tracking-[0.3em]"
                    >
                      <span className="uppercase font-semibold">
                        {submitting ? "Joining..." : "Join the Waiting List"}
                      </span>
                    </button>

                    <p className="type-caption text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  /* Success */
                  <div className="w-full max-w-[440px] space-y-6">
                    <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12l4 4 10-10"
                          stroke="#C9A84C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <span className="section-tag">You&apos;re on the list.</span>
                      <h3 className="type-headline">
                        Thank you, {form.name.split(" ")[0]}.
                      </h3>
                      <p className="type-body-sm">
                        You will receive priority notification when applications
                        for Edition I open.
                      </p>
                    </div>
                    <p className="type-caption">
                      Confirmation sent to{" "}
                      <span className="text-[#4A4440]">{form.email}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── APPROVED WAITING LIST ── */}
      <ApprovedList />

      <Footer />
      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </>
  );
}

// ── Approved Waiting List Component ─────────────────────────────────────────

interface ApprovedRecord {
  verificationNumber: string;
  displayName: string;
  country: string;
  approvedAt: string;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function ApprovedList() {
  const [records, setRecords] = useState<ApprovedRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/applications/approved?limit=50")
      .then((r) => r.json())
      .then((data) => {
        setRecords(data.records ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = records.filter((r) => {
    if (!search.trim()) return true;
    const q = search.trim().toLowerCase();
    return (
      r.verificationNumber.includes(q) ||
      r.displayName.toLowerCase().includes(q) ||
      r.country.toLowerCase().includes(q)
    );
  });

  return (
    <section className="bg-[#080808] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-16 md:py-20 space-y-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="section-tag">Approved Waiting List</span>
            <h2 className="type-headline">
              Verified members of the{" "}
              <em className="not-italic text-gold">
                Maison Vereen founding community.
              </em>
            </h2>
            <p className="type-body-sm">
              Approved applicants are listed chronologically. Verification numbers are permanent.
            </p>
          </div>

          {/* Search */}
          <div className="relative shrink-0 w-full sm:w-[280px]">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A3530] pointer-events-none"
              width="13" height="13" viewBox="0 0 24 24" fill="none"
            >
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, number, country…"
              className="w-full bg-[#0D0D0D] border border-white/8 pl-9 pr-4 py-2.5 text-xs text-[#E8E2D9] placeholder-[#3A3530] focus:outline-none focus:border-gold/40 transition-colors duration-200"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3A3530] hover:text-[#E8E2D9] transition-colors"
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          /* Skeleton */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#0D0D0D] px-6 py-7 space-y-3">
                <div className="skeleton h-3 w-24 rounded" />
                <div className="skeleton h-5 w-32 rounded" />
                <div className="skeleton h-3 w-20 rounded" />
                <div className="skeleton h-3 w-28 rounded" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center border border-white/5">
            <p className="type-body-sm">
              {search ? "No results match your search." : "No approved applicants yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
            {filtered.map((r, i) => (
              <div
                key={i}
                className="group bg-[#0D0D0D] px-6 py-7 space-y-4 hover:bg-white/2 transition-colors duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Badge row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Verification badge icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        stroke="#C9A84C"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="type-mono text-gold/70">
                      Verified Applicant
                    </span>
                  </div>
                  {/* Approved status */}
                  <span
                    className="uppercase tracking-widest text-emerald-400/80 border border-emerald-400/25 bg-emerald-400/6 px-2 py-0.5 text-[9px]"
                  >
                    Approved
                  </span>
                </div>

                {/* Verification number */}
                <p className="font-mono text-gold text-[20px] tracking-wide">
                  #{r.verificationNumber}
                </p>

                {/* Name */}
                <p className="font-serif font-light text-[#E8E2D9] text-[17px]">
                  {r.displayName}
                </p>

                {/* Location + date */}
                <div className="space-y-1.5 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="type-mono">Location</span>
                    <span className="type-caption text-[#7A7068]">{r.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="type-mono">Approved</span>
                    <span className="type-caption text-[#7A7068]">{formatDate(r.approvedAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Count */}
        {!loading && filtered.length > 0 && (
          <p className="type-caption text-center">
            Showing {filtered.length} verified {filtered.length === 1 ? "member" : "members"}
            {search && ` matching "${search}"`}
          </p>
        )}
      </div>
    </section>
  );
}

// ── Waitlist Counter Component ───────────────────────────────────────────────

function WaitlistCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(0));
  }, []);

  // Animate number from 0 to count
  useEffect(() => {
    if (count === null) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * count));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [count]);

  return (
    <section className="border-b border-white/5 bg-[#0D0D0D]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">

          {/* Rule */}
          <div className="hidden sm:block w-16 h-px bg-gold/30" />

          {/* Counter */}
          <div className="flex items-baseline gap-3">
            <span
              className="font-serif font-light text-gold leading-none tabular-nums"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.01em" }}
            >
              {count === null ? "—" : displayed.toLocaleString()}
            </span>
            <span className="font-serif font-light text-[#5A5449]" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}>
              of 250
            </span>
          </div>

          {/* Rule */}
          <div className="hidden sm:block w-16 h-px bg-gold/30" />

          {/* Label */}
          <p className="font-light text-[#7A7068] leading-[1.6]" style={{ fontSize: "14px" }}>
            {count === null ? (
              <span className="inline-block w-40 h-4 skeleton rounded" />
            ) : (
              <>people have joined the official waiting list</>
            )}
          </p>

          {/* Rule */}
          <div className="hidden sm:block w-16 h-px bg-gold/30" />
        </div>
      </div>
    </section>
  );
}
