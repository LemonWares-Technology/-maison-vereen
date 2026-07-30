"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";

export default function ContactPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col font-sans selection:bg-gold/30 selection:text-[#EDE8DE]">
      {/* ── Header ── */}
      <Header onOpenApply={openApply} />

      <main className="flex-1 pt-24 md:pt-28">
        {/* ── HERO SECTION ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-12 md:py-20 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-8 max-w-155">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-gold">15</span>
                <div className="w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  CONTACT &amp; CONCIERGE
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DE] leading-[1.1]">
                Speak With the House Directly.
              </h1>

              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                NOT A SUPPORT TICKET. A CONVERSATION.
              </p>

              <p className="text-sm md:text-base text-[#EDE8DE] font-light leading-relaxed">
                Every enquiry to Maison Vereen — whether from a collector, a
                journalist, or a future partner — is read and answered personally
                by the House.
              </p>

              <div className="text-[10px] tracking-[0.3em] uppercase text-[#EDE8DE]">
                SCROLL TO BEGIN &darr;
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full flex justify-center lg:justify-end">
              <ImagePlaceholder
                aspect="aspect-3/4"
                className="w-full max-w-125 rounded-sm shadow-2xl"
                label="Private Maison Desk &amp; Plaque"
              />
            </div>
          </div>
        </section>

        {/* ── A CONVERSATION BEGINS HERE ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block">
            A CONVERSATION BEGINS HERE
          </span>

          <p className="font-serif text-base sm:text-lg md:text-xl font-light text-[#EDE8DE] max-w-200 mx-auto leading-relaxed">
            Maison Vereen does not operate a customer service desk. Every message
            that arrives through this page is read personally, and answered in the
            same considered tone found throughout this website. Visitors are
            invited to reach the House through whichever channel feels most natural
            to them.
          </p>

          <div className="w-8 h-8 border border-gold/40 mx-auto flex items-center justify-center bg-[#060506]">
            <span className="font-serif text-gold text-xs">M</span>
          </div>
        </section>

        {/* ── TWO PATHWAYS: COLLECTORS vs PRESS & GIFTING ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Card: Collectors */}
            <div className="bg-[#0A0A0C] border border-white/5 overflow-hidden grid grid-cols-1 sm:grid-cols-12 group">
              <div className="sm:col-span-4 relative min-h-60 sm:min-h-full">
                <Image
                  src="/file_00000000a75471f48402160a6ed179fc.webp"
                  alt="For Collectors"
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0A0A0C]/90 sm:to-[#0A0A0C]" />
              </div>
              <div className="sm:col-span-8 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center bg-[#060506]">
                    <span className="font-serif text-gold text-sm">🛡</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                    FOR COLLECTORS
                  </span>
                  <p className="text-xs text-[#EDE8DE] font-light leading-relaxed">
                    Speak with a concierge for fragrance advice, questions about Edition I, or guidance on the Founding Registry application.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[9px] uppercase tracking-[0.18em] text-[#EDE8DE] font-mono pt-4 border-t border-white/5">
                    <p>EDITION I ENQUIRIES</p>
                    <p>FOUNDING REGISTRY</p>
                    <p>SIGNATURE COLLECTION</p>
                    <p>FRAGRANCE GUIDANCE</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/2348021234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-5 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
                >
                  <span>SPEAK TO A CONCIERGE</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Card: Press & Gifting */}
            <div className="bg-[#0A0A0C] border border-white/5 overflow-hidden grid grid-cols-1 sm:grid-cols-12 group">
              <div className="sm:col-span-8 p-8 flex flex-col justify-between space-y-6 order-2 sm:order-1">
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center bg-[#060506]">
                    <span className="font-serif text-gold text-sm">🏛</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                    FOR PRESS, PARTNERS &amp; GIFTING
                  </span>
                  <p className="text-xs text-[#EDE8DE] font-light leading-relaxed">
                    Media enquiries, partnership proposals, wholesale discussions, and gifting arrangements are each directed to the right person within the House.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[9px] uppercase tracking-[0.18em] text-[#EDE8DE] font-mono pt-4 border-t border-white/5">
                    <p>MEDIA &amp; INTERVIEWS</p>
                    <p>PARTNERSHIPS</p>
                    <p>CORPORATE GIFTING</p>
                    <p>WHOLESALE DISCUSSIONS</p>
                  </div>
                </div>
                <a
                  href="mailto:concierge@maisonvereen.com"
                  className="inline-flex items-center justify-between w-full border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-5 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
                >
                  <span>CONTACT THE HOUSE</span>
                  <span>&rarr;</span>
                </a>
              </div>
              <div className="sm:col-span-4 relative min-h-60 sm:min-h-full order-1 sm:order-2">
                <Image
                  src="/file_000000005fc471f495c71bc758a16ffc.webp"
                  alt="For Press & Gifting"
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0A0A0C]/90 sm:to-[#0A0A0C]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── PREFERRED WAYS TO REACH US ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block text-center">
              PREFERRED WAYS TO REACH US
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: WhatsApp */}
              <div className="bg-[#0A0A0C] border border-white/5 overflow-hidden flex flex-col justify-between group">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src="/file_00000000a39471f4b5714dd0617de348.webp"
                    alt="WhatsApp Concierge"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />
                </div>
                <div className="p-8 pt-2 space-y-6 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg text-[#EDE8DE]">
                      WHATSAPP CONCIERGE
                    </h3>
                    <p className="text-xs text-[#EDE8DE] font-light leading-relaxed">
                      Begin a private conversation with the House.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/2348021234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-[0.25em] uppercase text-gold hover:underline font-medium block pt-2 border-t border-white/5"
                  >
                    OPEN WHATSAPP &rarr;
                  </a>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="bg-[#0A0A0C] border border-white/5 overflow-hidden flex flex-col justify-between group">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src="/file_00000000520071f4915a7351029b1f7b.webp"
                    alt="Email The House"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />
                </div>
                <div className="p-8 pt-2 space-y-6 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg text-[#EDE8DE]">
                      EMAIL THE HOUSE
                    </h3>
                    <p className="text-xs text-[#EDE8DE] font-light leading-relaxed">
                      For thoughtful correspondence and longer enquiries.
                    </p>
                  </div>
                  <a
                    href="mailto:concierge@maisonvereen.com"
                    className="text-[9px] tracking-[0.25em] uppercase text-gold hover:underline font-medium block pt-2 border-t border-white/5"
                  >
                    WRITE AN EMAIL &rarr;
                  </a>
                </div>
              </div>

              {/* Card 3: Schedule */}
              <div className="bg-[#0A0A0C] border border-white/5 overflow-hidden flex flex-col justify-between group">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src="/file_00000000aba081f49f4ebc11da3f8c3d.webp"
                    alt="Schedule A Conversation"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />
                </div>
                <div className="p-8 pt-2 space-y-6 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg text-[#EDE8DE]">
                      SCHEDULE A CONVERSATION
                    </h3>
                    <p className="text-xs text-[#EDE8DE] font-light leading-relaxed">
                      Arrange a dedicated discussion with a member of the House.
                    </p>
                  </div>
                  <a
                    href="mailto:appointments@maisonvereen.com?subject=Schedule%20a%20Conversation"
                    className="text-[9px] tracking-[0.25em] uppercase text-gold hover:underline font-medium block pt-2 border-t border-white/5"
                  >
                    REQUEST A TIME &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE STATEMENT BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-4 border-b border-white/5">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#EDE8DE] max-w-200 mx-auto leading-relaxed">
            Every enquiry deserves a considered reply. That is why every message
            is read personally.
          </p>
        </section>

        {/* ── DETAILS & RESPONSE TIMES ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Address */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block">
                MAISON VEREEN
              </span>
              <p className="font-serif text-lg text-[#EDE8DE]">Lagos, Nigeria</p>
              <div className="space-y-1 text-xs text-[#EDE8DE] font-mono pt-2">
                <p>Whatsapp: +234 802 123 4567</p>
                <p>Email: concierge@maisonvereen.com</p>
                <p>Instagram: @maisonvereen</p>
              </div>
            </div>

            {/* Center Response Times */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium block">
                RESPONSE TIMES
              </span>
              <p className="font-serif text-2xl text-[#EDE8DE]">Within 24–48 hours</p>
              <p className="text-xs text-[#EDE8DE] font-light leading-relaxed">
                All enquiries, regardless of their nature, are read and answered
                personally by the House.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-3">
              <ImagePlaceholder aspect="aspect-3/4" label="Maison Plaque M" />
            </div>
          </div>
        </section>

        {/* ── BOTTOM BANNER ── */}
        <section className="px-6 sm:px-8 md:px-14 lg:px-20 max-w-350 mx-auto py-16 text-center space-y-8">
          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#EDE8DE] max-w-200 mx-auto leading-relaxed">
            You now know the House completely. What remains is simply to begin
            the conversation.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a
              href="https://wa.me/2348021234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-[#b5953d] text-[#060506] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              SPEAK TO A CONCIERGE &rarr;
            </a>

            <a
              href="mailto:concierge@maisonvereen.com"
              className="border border-gold/60 hover:border-gold text-[#EDE8DE] hover:text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              CONTINUE BY EMAIL &rarr;
            </a>
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
