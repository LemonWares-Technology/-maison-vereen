"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Landmark, MessageSquare, Mail, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#060506] text-[#E8E2D9] min-h-screen">

        {/* ── 1. HERO SECTION ── */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center border-b border-white/5 bg-[#060506]">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] lg:min-h-screen items-stretch">

              {/* Left Side: Copy */}
              <div className="flex flex-col justify-between px-6 sm:px-8 md:px-14 pt-[140px] pb-12 lg:py-28">
                <div className="space-y-8 max-w-[520px] my-auto">
                  <div className="space-y-4">
                    <span className="block uppercase tracking-[0.3em] text-gold font-semibold text-[10px]">
                      Contact &amp; Concierge
                    </span>
                    <h1
                      className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
                      style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}
                    >
                      Speak With <br />
                      the House Directly.
                    </h1>
                  </div>

                  {/* Sub-headline & Description */}
                  <div className="space-y-5">
                    <p className="uppercase tracking-[0.28em] text-gold font-semibold text-[10px]">
                      Not a support ticket. A conversation.
                    </p>
                    <p className="text-[#8A8178] font-light leading-[1.85] text-[17px]">
                      Every enquiry to Maison Vereen — whether from a collector, a journalist, or a future partner — is read and answered personally by the House.
                    </p>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden lg:flex items-center gap-3 text-[#5A5449] font-light text-[10px] tracking-[0.3em] uppercase pt-8">
                  <div className="w-8 h-px bg-gold/30 animate-pulse" />
                  <span>Scroll to begin</span>
                </div>
              </div>

              {/* Right Side: Generated Desk Visual */}
              <div className="relative min-h-[450px] lg:min-h-auto overflow-hidden bg-[#030304]">
                <Image
                  src="/images/private_maison_desk.png"
                  alt="Maison Vereen Study Desk"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ opacity: 0.85 }}
                />
                {/* Elegant overlay gradients to bleed into black bg */}
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#060506] to-transparent hidden lg:block" />
                <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#060506] to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-transparent opacity-90" />
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. A CONVERSATION BEGINS HERE ── */}
        <section className="bg-[#060506] py-24 border-b border-white/5">
          <div className="max-w-[800px] mx-auto px-6 text-center space-y-8">
            <span className="block uppercase tracking-[0.3em] text-gold font-semibold text-[10px]">
              A Conversation Begins Here
            </span>
            <p className="font-serif font-light text-[#C8BFB2] leading-[1.9] text-[18px] md:text-[21px]">
              Maison Vereen does not operate a customer service desk. Every message that arrives through this page is read personally, and answered in the same considered tone found throughout this website. Visitors are invited to reach the House through whichever channel feels most natural to them.
            </p>
            <div className="flex justify-center pt-4">
              <span className="font-serif text-gold/30 text-3xl font-light tracking-[0.2em]">M</span>
            </div>
          </div>
        </section>

        {/* ── 3. TWO DISTINCT PATHWAYS ── */}
        <section className="bg-[#060506] border-b border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">

              {/* Card 1: Collectors */}
              <div className="relative bg-[#0A0A0C] px-8 sm:px-14 py-20 lg:py-28 overflow-hidden group flex flex-col justify-between min-h-[500px]">
                {/* Background Bottle Silhouette */}
                <div className="absolute left-0 bottom-0 w-[240px] h-[360px] opacity-10 pointer-events-none transition-all duration-700 group-hover:scale-105 group-hover:opacity-15">
                  <Image
                    src="/images/hero-bottle.png"
                    alt="Maison Vereen Bottle Silhouette"
                    fill
                    className="object-contain object-bottom-left"
                  />
                </div>
                <div className="relative z-10 space-y-10 max-w-[480px] ml-auto">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                      <Shield className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <span className="block uppercase tracking-[0.25em] text-gold font-semibold text-[11px]">
                      For Collectors
                    </span>
                    <p className="text-[#8A8178] font-light leading-[1.85] text-[16px]">
                      Speak with a concierge for fragrance advice, questions about Edition I, or guidance on the Founding Registry application.
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-[10px] tracking-[0.25em] text-[#5A5449] font-medium uppercase pt-2">
                    <span className="hover:text-gold transition-colors">Edition I Enquiries</span>
                    <span className="hover:text-gold transition-colors">Founding Registry</span>
                    <span className="hover:text-gold transition-colors">Signature Collection</span>
                    <span className="hover:text-gold transition-colors">Fragrance Guidance</span>
                  </div>

                  <div className="pt-6">
                    <a
                      href="https://wa.me/2348021234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-gold/40 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-xs tracking-[0.28em] uppercase font-semibold text-[#E8E2D9] transition-all duration-500"
                    >
                      Speak to a Concierge →
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Press & Gifting */}
              <div className="relative bg-[#0A0A0C] px-8 sm:px-14 py-20 lg:py-28 overflow-hidden group flex flex-col justify-between min-h-[500px]">
                {/* Background Wax Seal Silhouette */}
                <div className="absolute right-0 bottom-0 w-[280px] h-[280px] opacity-[0.07] pointer-events-none transition-all duration-700 group-hover:scale-105 group-hover:opacity-10">
                  <Image
                    src="/images/wax-seal.jpg"
                    alt="Maison Vereen Wax Seal"
                    fill
                    className="object-cover object-center rounded-full"
                  />
                </div>
                <div className="relative z-10 space-y-10 max-w-[480px]">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                      <Landmark className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <span className="block uppercase tracking-[0.25em] text-gold font-semibold text-[11px]">
                      For Press, Partners &amp; Gifting
                    </span>
                    <p className="text-[#8A8178] font-light leading-[1.85] text-[16px]">
                      Media enquiries, partnership proposals, wholesale discussions, and gifting arrangements are each directed to the right person within the House.
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-[10px] tracking-[0.25em] text-[#5A5449] font-medium uppercase pt-2">
                    <span className="hover:text-gold transition-colors">Media &amp; Interviews</span>
                    <span className="hover:text-gold transition-colors">Partnerships</span>
                    <span className="hover:text-gold transition-colors">Corporate Gifting</span>
                    <span className="hover:text-gold transition-colors">Wholesale Discussions</span>
                  </div>

                  <div className="pt-6">
                    <a
                      href="mailto:concierge@maisonvereen.com?subject=Press or Partnership Inquiry"
                      className="inline-block border border-gold/40 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-xs tracking-[0.28em] uppercase font-semibold text-[#E8E2D9] transition-all duration-500"
                    >
                      Contact the House →
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. PREFERRED WAYS TO REACH US ── */}
        <section className="bg-[#060506] py-24 border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 space-y-14">

            {/* Header decor */}
            <div className="flex items-center gap-6">
              <div className="h-1px bg-gold/25 flex-1" />
              <span className="uppercase tracking-[0.3em] text-gold font-semibold text-[11px] shrink-0">
                Preferred Ways to Reach Us
              </span>
              <div className="h-1px bg-gold/25 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">

              {/* Card 1: WhatsApp */}
              <div className="relative bg-[#0A0A0C] px-8 py-14 overflow-hidden group min-h-[380px] flex flex-col justify-between">
                {/* Background Image phone */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/whatsapp_phone.png"
                    alt="WhatsApp Concierge"
                    fill
                    className="object-cover object-center opacity-10 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-15"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0C] via-[#0A0A0C]/90 to-transparent" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold">
                    <MessageSquare className="w-4 h-4 stroke-[1.25]" />
                  </div>
                  <h3 className="font-serif text-[#C8C0B4] text-[18px]">WhatsApp Concierge</h3>
                  <p className="text-[#5A5449] font-light leading-[1.6] text-[14px]">
                    Begin a private conversation with the House.
                  </p>
                </div>
                <div className="relative z-10 pt-8">
                  <a
                    href="https://wa.me/2348021234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-[#E8E2D9] text-[10px] tracking-[0.3em] font-semibold uppercase transition-colors"
                  >
                    Open WhatsApp →
                  </a>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="relative bg-[#0A0A0C] px-8 py-14 overflow-hidden group min-h-[380px] flex flex-col justify-between">
                {/* Background Image hand writing */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/hand_writing.png"
                    alt="Email the House"
                    fill
                    className="object-cover object-center opacity-10 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-15"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0C] via-[#0A0A0C]/90 to-transparent" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold">
                    <Mail className="w-4 h-4 stroke-[1.25]" />
                  </div>
                  <h3 className="font-serif text-[#C8C0B4] text-[18px]">Email the House</h3>
                  <p className="text-[#5A5449] font-light leading-[1.6] text-[14px]">
                    For thoughtful correspondence and longer enquiries.
                  </p>
                </div>
                <div className="relative z-10 pt-8">
                  <a
                    href="mailto:concierge@maisonvereen.com"
                    className="text-gold hover:text-[#E8E2D9] text-[10px] tracking-[0.3em] font-semibold uppercase transition-colors"
                  >
                    Write an Email →
                  </a>
                </div>
              </div>

              {/* Card 3: Schedule */}
              <div className="relative bg-[#0A0A0C] px-8 py-14 overflow-hidden group min-h-[380px] flex flex-col justify-between">
                {/* Background Image desk globe */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/desk_globe.png"
                    alt="Schedule a Conversation"
                    fill
                    className="object-cover object-center opacity-10 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-15"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0C] via-[#0A0A0C]/90 to-transparent" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center text-gold">
                    <Calendar className="w-4 h-4 stroke-[1.25]" />
                  </div>
                  <h3 className="font-serif text-[#C8C0B4] text-[18px]">Schedule a Conversation</h3>
                  <p className="text-[#5A5449] font-light leading-[1.6] text-[14px]">
                    Arrange a dedicated discussion with a member of the House.
                  </p>
                </div>
                <div className="relative z-10 pt-8">
                  <Link
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "mailto:appointments@maisonvereen.com?subject=Schedule%20a%20Conversation";
                    }}
                    className="text-gold hover:text-[#E8E2D9] text-[10px] tracking-[0.3em] font-semibold uppercase transition-colors"
                  >
                    Request a Time →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. EVERY ENQUIRY DESERVES A CONSIDERED REPLY ── */}
        <section className="bg-[#060506] py-28 border-b border-white/5">
          <div className="max-w-[1000px] mx-auto px-6 flex items-center justify-center gap-8 md:gap-14">

            {/* Left Seal Ornament */}
            <div className="hidden md:flex shrink-0 w-[80px] h-[80px] border border-gold/15 rounded-full items-center justify-center opacity-40">
              <span className="font-serif text-gold/40 text-[9px] tracking-widest uppercase">MV</span>
            </div>

            {/* Quote */}
            <p className="font-serif font-light text-[#E8E2D9] leading-normal text-[22px] md:text-[28px] text-center max-w-[680px]">
              Every enquiry deserves a considered reply. That is why every message is read personally.
            </p>

            {/* Right Seal Ornament */}
            <div className="hidden md:flex shrink-0 w-[80px] h-[80px] border border-gold/15 rounded-full items-center justify-center opacity-40">
              <span className="font-serif text-gold/40 text-[9px] tracking-widest uppercase">MV</span>
            </div>

          </div>
        </section>

        {/* ── 6. DETAILED CONTACT INFO & TIMES ── */}
        <section className="bg-[#0A0A0C] border-b border-white/5 py-20 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

              {/* Left Column: Address & Channels */}
              <div className="lg:col-span-5 space-y-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <span className="block uppercase tracking-[0.25em] text-gold font-semibold text-[10px]">
                    Maison Vereen
                  </span>
                  <p className="font-serif text-lg font-light text-[#C8BFB2]">Lagos, Nigeria</p>
                </div>

                <div className="space-y-5 font-light text-[14px]">
                  <div className="flex items-center gap-6">
                    <span className="uppercase tracking-[0.25em] text-[#5A5449] w-24">WhatsApp</span>
                    <a href="https://wa.me/2348021234567" target="_blank" rel="noopener noreferrer" className="text-[#C8C0B4] hover:text-gold transition-colors">
                      +234 802 123 4567
                    </a>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="uppercase tracking-[0.25em] text-[#5A5449] w-24">Email</span>
                    <a href="mailto:concierge@maisonvereen.com" className="text-[#C8C0B4] hover:text-gold transition-colors break-all">
                      concierge@maisonvereen.com
                    </a>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="uppercase tracking-[0.25em] text-[#5A5449] w-24">Instagram</span>
                    <a href="https://instagram.com/maisonvereen" target="_blank" rel="noopener noreferrer" className="text-[#C8C0B4] hover:text-gold transition-colors">
                      @maisonvereen
                    </a>
                  </div>
                </div>
              </div>

              {/* Center Column: Response Times */}
              <div className="lg:col-span-4 space-y-8 flex flex-col justify-center lg:border-l lg:border-white/5 lg:pl-16">
                <div className="space-y-4">
                  <span className="block uppercase tracking-[0.25em] text-gold font-semibold text-[10px]">
                    Response Times
                  </span>
                  <p className="font-serif text-3xl md:text-4xl text-gold font-light">Within 24–48 hours</p>
                </div>
                <p className="text-[#7A7068] font-light leading-[1.8] text-[15px]">
                  All enquiries, regardless of their nature, are read and answered personally by the House.
                </p>
              </div>

              {/* Right Column: Plaque Vertical Image */}
              <div className="lg:col-span-3 relative min-h-[220px] lg:min-h-0 bg-[#030304] overflow-hidden">
                <Image
                  src="/images/private_maison_desk.png"
                  alt="Maison Vereen plaque visual detail"
                  fill
                  className="object-cover object-right"
                  style={{ opacity: 0.6 }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0C] via-[#0A0A0C]/20 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0C] via-transparent to-transparent" />
              </div>

            </div>
          </div>
        </section>

        {/* ── 7. FINAL CONVERSE INVITATION ── */}
        <section className="bg-[#060506] py-28 text-center border-t border-white/5">
          <div className="max-w-[760px] mx-auto px-6 space-y-10">
            <p className="font-serif font-light text-[#E8E2D9] leading-[1.4] text-[20px] md:text-[25px]">
              You now know the House completely. What remains is simply to begin the conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <a
                href="https://wa.me/2348021234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold/90 hover:bg-gold px-12 py-4 text-charcoal transition-all duration-500 font-semibold uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}
              >
                Speak to a Concierge
              </a>
              <a
                href="mailto:concierge@maisonvereen.com"
                className="inline-block border border-white/10 hover:border-gold/40 px-10 py-4 text-[#8A8178] hover:text-[#E8E2D9] transition-all duration-500 font-medium uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.25em" }}
              >
                Continue by Email
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
