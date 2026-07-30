"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

import ImagePlaceholder from "../components/ui/ImagePlaceholder";

const MOCK_REGISTRY_ENTRIES = [
  { no: "001", city: "Lagos, Nigeria", status: "Accepted", date: "12 May 2024" },
  { no: "002", city: "London, United Kingdom", status: "Accepted", date: "14 May 2024" },
  { no: "003", city: "Nairobi, Kenya", status: "Accepted", date: "16 May 2024" },
  { no: "004", city: "Paris, France", status: "Accepted", date: "18 May 2024" },
  { no: "005", city: "Dubai, UAE", status: "Accepted", date: "20 May 2024" },
];

export default function RegistryPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  // Form states inside page section 05
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [reason, setReason] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openApply();
  };

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col font-sans selection:bg-gold/30 selection:text-[#EDE8DE]">
      {/* ── Header ── */}
      <Header onOpenApply={openApply} />

      <main className="flex-1 pt-24 md:pt-28">
        {/* ── HERO SECTION (01) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-12 md:py-20 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-8 max-w-155">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-gold">01</span>
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  THE MAISON VEREEN FOUNDING REGISTRY
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                The House Is Assembled Before the Bottles Are Released.
              </h1>

              <p className="text-sm md:text-base text-[#8A8178] font-light leading-relaxed">
                The Maison Vereen Founding Registry is the House&apos;s official
                record of qualified applicants — the foundation from which Edition
                I&apos;s two hundred and fifty owners will ultimately be invited.
              </p>
            </div>

            {/* Right Image Placeholder (Ledger Book) */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-4/3"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Founding Registry Ledger"
              />
            </div>
          </div>

          {/* Sub-hero paragraph */}
          <div className="mt-12 pt-8 border-t border-white/5 max-w-200">
            <p className="text-sm md:text-base text-[#B3A99B] font-light leading-relaxed">
              Before a single bottle of Edition I is offered for acquisition, the
              House is assembled. The Maison Vereen Founding Registry exists for
              that purpose — an official, reviewed record of the individuals who
              have applied to become part of Maison Vereen&apos;s founding chapter.
            </p>
          </div>

          {/* 3 Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#0A0A0C] border border-white/5 p-6 text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
              Applying to the Founding Registry is not a purchase, and it carries
              no financial obligation. It is an expression of serious interest,
              reviewed personally by the House, after which qualified applicants are
              formally accepted as Founding Registry members.
            </div>
            <div className="bg-[#0A0A0C] border border-white/5 p-6 text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
              Acceptance is the first recognition the House extends — and it
              precedes, often by some time, the private invitation to acquire one
              of the two hundred and fifty Edition I bottles.
            </div>
            <div className="bg-[#0A0A0C] border border-white/5 p-6 text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
              The Registry will accept a maximum of three hundred and fifty
              members. Because only two hundred and fifty bottles exist, not every
              accepted member will ultimately receive an invitation to acquire — a
              fact the House states plainly, rather than obscures, out of respect for
              those who apply.
            </div>
          </div>
        </section>

        {/* ── SECTION 03: THE REGISTRY ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Open Ledger Image Slot */}
            <ImagePlaceholder
              aspect="aspect-16/9"
              className="w-full rounded-sm"
              label="Founding Registry Ledger Entry"
            />

            {/* Right Content */}
            <div className="space-y-6">
              <span className="font-serif text-xl text-gold block">03</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE]">
                The Registry
              </h2>
              <p className="text-sm sm:text-base text-[#B3A99B] font-light leading-relaxed">
                The Founding Registry is the living record of those recognised by the
                House.
              </p>
              <p className="text-sm sm:text-base text-[#8A8178] font-light italic leading-relaxed">
                It is not a queue. It is the beginning of the Maison Vereen legacy.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 04: THE APPLICATION & REVIEW PROCESS ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="space-y-8 mb-12">
            <span className="font-serif text-xl text-gold block">04</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE] uppercase tracking-wider">
              THE APPLICATION &amp; REVIEW PROCESS
            </h2>
            <p className="text-sm sm:text-base text-[#8A8178] font-light max-w-175">
              A clear and intentional process. Designed to protect the integrity of
              the House and the experience of every founding member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 01 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="font-serif text-2xl text-gold">01</span>
              <h3 className="font-serif text-lg text-[#EDE8DE] uppercase tracking-widest">
                APPLY
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Complete the application in a matter of minutes. It is an
                expression of serious interest.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="font-serif text-2xl text-gold">02</span>
              <h3 className="font-serif text-lg text-[#EDE8DE] uppercase tracking-widest">
                REVIEW
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Applications are read individually by a member of the House — never
                processed automatically.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-[#0A0A0C] border border-white/5 p-8 space-y-4">
              <span className="font-serif text-2xl text-gold">03</span>
              <h3 className="font-serif text-lg text-[#EDE8DE] uppercase tracking-widest">
                RECOGNITION
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Qualified applicants receive a decision within 24 to 48 hours and,
                if accepted, are added to the Registry.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 05: APPLY TO THE FOUNDING REGISTRY (FORM) ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left info */}
            <div className="lg:col-span-4 space-y-6">
              <span className="font-serif text-xl text-gold block">05</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EDE8DE] uppercase tracking-wider">
                APPLY TO THE FOUNDING REGISTRY
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                There is no cost to apply. No obligation. No pressure. Just the
                opportunity to be considered for the House&apos;s founding chapter.
              </p>
            </div>

            {/* Middle Inline Form */}
            <div className="lg:col-span-5 bg-[#0A0A0C] border border-white/5 p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A8178] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-[#060506] border border-white/10 px-4 py-3 text-xs text-[#EDE8DE] focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A8178] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-[#060506] border border-white/10 px-4 py-3 text-xs text-[#EDE8DE] focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A8178] mb-2">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Select or type country"
                    className="w-full bg-[#060506] border border-white/10 px-4 py-3 text-xs text-[#EDE8DE] focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A8178] mb-2">
                    Why do you wish to be part of Maison Vereen&apos;s founding chapter?
                  </label>
                  <textarea
                    rows={4}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Share your reflection..."
                    className="w-full bg-[#060506] border border-white/10 px-4 py-3 text-xs text-[#EDE8DE] focus:outline-none focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-[#b5953d] text-[#060506] py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
                >
                  APPLY TO THE REGISTRY
                </button>
              </form>
            </div>

            {/* Right Envelope Image */}
            <div className="lg:col-span-3">
              <ImagePlaceholder aspect="aspect-3/4" label="Wax Sealed Correspondence" />
            </div>
          </div>
        </section>

        {/* ── SECTIONS 06, 07, 08 ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* 06 */}
            <div className="space-y-4">
              <span className="font-serif text-xl text-gold block">06</span>
              <h3 className="font-serif text-lg text-[#EDE8DE] uppercase tracking-wider">
                THE ACCEPTANCE MEANS
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Acceptance into the Founding Registry confers status as a recognised
                founding member of the House. It does not, by itself, guarantee a
                bottle. Invitations to acquire one of the two hundred and fifty
                Edition I bottles are issued privately and individually as the House
                determines, in the order reflected by each member&apos;s assigned
                number.
              </p>
            </div>

            {/* 07 */}
            <div className="space-y-4">
              <span className="font-serif text-xl text-gold block">07</span>
              <h3 className="font-serif text-lg text-[#EDE8DE] uppercase tracking-wider">
                WHEN THE REGISTRY CLOSES
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                Once three hundred and fifty applicants have been accepted, the
                Founding Registry closes permanently. No further applications will
                be reviewed. This ceiling exists for the same reason Edition I is
                limited to two hundred and fifty bottles — the House does not
                assemble itself beyond the scale it can honour.
              </p>
            </div>

            {/* 08 */}
            <div className="space-y-4 bg-[#0A0A0C] border border-white/5 p-8 text-center flex flex-col justify-center">
              <span className="font-serif text-xl text-gold block">08</span>
              <h3 className="font-serif text-lg text-[#EDE8DE] uppercase tracking-wider">
                THE NUMBERS
              </h3>
              <span className="font-serif text-4xl text-gold font-light block my-2">
                350
              </span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A8178] font-semibold">
                MAXIMUM FOUNDING MEMBERS
              </p>
              <div className="w-8 h-px bg-gold/40 mx-auto my-3" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A8178]">
                250 BOTTLES IN EDITION I
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 09: LIVE REGISTRY ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left text & link */}
            <div className="lg:col-span-3 space-y-6">
              <span className="font-serif text-xl text-gold block">09</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block">
                LIVE FOUNDING REGISTRY
              </span>
              <p className="text-xs sm:text-sm text-[#8A8178] font-light leading-relaxed">
                The Registry is growing. Member by member. In real time.
              </p>
              <Link
                href="/the-first-250"
                className="inline-block text-[10px] tracking-[0.25em] uppercase text-gold hover:underline"
              >
                VIEW THE LIVE REGISTRY &rarr;
              </Link>
            </div>

            {/* Middle Table */}
            <div className="lg:col-span-6 bg-[#0A0A0C] border border-white/5 p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#8A8178]">
                      <th className="pb-3">REGISTRY NO</th>
                      <th className="pb-3">CITY / COUNTRY</th>
                      <th className="pb-3">STATUS</th>
                      <th className="pb-3 text-right">DATE ACCEPTED</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[#EDE8DE]">
                    {MOCK_REGISTRY_ENTRIES.map((entry) => (
                      <tr key={entry.no}>
                        <td className="py-3 font-mono text-gold">
                          {entry.no}
                        </td>
                        <td className="py-3">{entry.city}</td>
                        <td className="py-3 text-emerald-400 font-medium">
                          {entry.status}
                        </td>
                        <td className="py-3 text-right text-[#8A8178]">
                          {entry.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-right">
                <Link
                  href="/the-first-250"
                  className="text-[9px] tracking-[0.25em] uppercase text-[#8A8178] hover:text-gold"
                >
                  VIEW FULL REGISTRY &rarr;
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-3">
              <ImagePlaceholder aspect="aspect-3/4" label="Leather Texture" />
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-8">
          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE]">
            The Registry is not an abstraction.
          </h2>
          <p className="font-serif text-base sm:text-lg text-gold italic">
            It is growing, member by member, in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={openApply}
              className="bg-gold hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              APPLY TO THE REGISTRY &rarr;
            </button>
            <Link
              href="/the-first-250"
              className="border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              VIEW THE LIVE REGISTRY
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Application Modal ── */}
      <ApplicationForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}
