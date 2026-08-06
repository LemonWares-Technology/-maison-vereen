"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CONTACT_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },

  { label: "CONTACT", href: "/contact" },
];

const WHATSAPP_URL = "https://wa.me/2348144413526";
const EMAIL_CONCIERGE = "mailto:concierge@maisonvereen.com";
const EMAIL_APPOINTMENTS =
  "mailto:appointments@maisonvereen.com?subject=Schedule%20a%20Conversation";

const COLLECTOR_TOPICS = [
  "EDITION I ENQUIRIES",
  "FOUNDING REGISTRY",
  "SIGNATURE COLLECTION",
  "FRAGRANCE GUIDANCE",
];

const PRESS_TOPICS = [
  "MEDIA & INTERVIEWS",
  "PARTNERSHIPS",
  "CORPORATE GIFTING",
  "WHOLESALE DISCUSSIONS",
];

function ArrowIcon() {
  return (
    <svg width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M0 5h26M21 1l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M20 4l12 4v10c0 8-5.5 14-12 16-6.5-2-12-8-12-16V8l12-4z" strokeLinejoin="round" />
      <path d="M20 14.5l1.6 3.2 3.5.5-2.5 2.5.6 3.5L20 22.5l-3.2 1.7.6-3.5-2.5-2.5 3.5-.5L20 14.5z" strokeLinejoin="round" />
    </svg>
  );
}

function ColumnsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M6 34h28M10 34V14h4v20M26 34V14h4v20M8 14h24M12 10h16l-2-4H14l-2 4z" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path
        d="M14 3.5c-5.8 0-10.5 4.6-10.5 10.3 0 1.8.5 3.5 1.4 5L3.5 24.5l5.9-1.5c1.4.8 3 1.2 4.6 1.2 5.8 0 10.5-4.6 10.5-10.3S19.8 3.5 14 3.5z"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 9.8c.3-.7.5-.7.8-.7h.6c.2 0 .5 0 .7.5l.9 2.1c.1.3 0 .6-.2.8l-.5.6c-.2.2-.2.4 0 .7.4.7 1.2 1.6 2.1 2.2.5.3.8.3 1.1.1l.7-.7c.2-.2.5-.3.8-.2l2.1.9c.4.2.5.4.5.7v.6c0 .3 0 .5-.2.7-.3.5-1.1 1.1-1.8 1.2-.6.1-1.4 0-3.2-.7-2.2-.9-3.7-3.1-4-3.6-.3-.5-1.2-1.7-1.2-3.2 0-1.4.7-2.1 1-2.4z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <rect x="3.5" y="6.5" width="21" height="15" rx="1" />
      <path d="M3.5 9.5L14 16.5l10.5-7" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <rect x="4" y="6" width="20" height="18" rx="1" />
      <path d="M4 11h20M10 4v4M18 4v4M9 16h4M15 16h4M9 20h4" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE]">
      <Header navItems={CONTACT_NAV} />

      {/* Hero — melt layout + mobile stacked fix */}
      <section className="relative min-h-screen bg-[#060506] overflow-hidden">
        {/* Mobile: image under header, copy on solid dark */}
        <div className="lg:hidden flex flex-col min-h-screen">
          <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
            <Image
              src="/images/private_maison_desk.webp"
              alt=""
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
            <div className="w-full max-w-lg flex flex-col items-start gap-5">
              <div className="flex items-center gap-3">
              <span className="font-sans text-sm text-gold tracking-wide">15</span>
              {/* <div className="h-px w-6 sm:w-8 bg-gold shrink-0" /> */}
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">
                Contact &amp; Concierge
              </span>
            </div>
              <h1
                className="font-serif font-light text-[#EDE8DE] leading-[1.06] tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.25rem)" }}
              >
                Speak With the House Directly.
              </h1>
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
                Not a support ticket. A conversation.
              </p>
              {/* <div className="w-8 h-px bg-gold" /> */}
              <p className="body-copy max-w-md">
                Every enquiry to Maison Vereen — whether from a collector, a
                journalist, or a future partner — is read and answered personally
                by the House.
              </p>
              <a
                href="#conversation"
                className="mt-2 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.28em] text-[#EDE8DE]/70 hover:text-gold transition-colors"
              >
                <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                  <rect x="1" y="1" width="12" height="20" rx="6" />
                  <path d="M7 5v4" strokeLinecap="round" />
                </svg>
                Scroll to begin
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: image on right, melts into black on left */}
        <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
          <div className="bg-[#060506]" />
          <div className="relative overflow-hidden">
            <Image
              src="/images/private_maison_desk.webp"
              alt=""
              fill
              priority
              className="object-cover object-[center_35%]"
              sizes="55vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/85 via-25% to-transparent to-55%" />
          </div>
        </div>

        <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start gap-5 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="font-sans text-sm md:text-base text-gold tracking-wide">15</span>
              {/* <div className="h-px w-6 sm:w-8 bg-gold shrink-0" /> */}
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                Contact &amp; Concierge
              </span>
            </div>
            <h1
              className="font-serif font-light text-[#EDE8DE] leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              Speak With the House Directly.
            </h1>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Not a support ticket. A conversation.
            </p>
            {/* <div className="w-8 h-px bg-gold" /> */}
            <p className="body-copy max-w-md">
              Every enquiry to Maison Vereen — whether from a collector, a
              journalist, or a future partner — is read and answered personally
              by the House.
            </p>
            <a
              href="#conversation"
              className="mt-4 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.28em] text-[#EDE8DE]/70 hover:text-gold transition-colors"
            >
              <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                <rect x="1" y="1" width="12" height="20" rx="6" />
                <path d="M7 5v4" strokeLinecap="round" />
              </svg>
              Scroll to begin
            </a>
          </div>
        </div>
      </section>

      {/* A Conversation Begins Here */}
      <section
        id="conversation"
        className="relative bg-[#060506] py-20 md:py-28 scroll-mt-28"
      >
        <div className="w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-medium block">
            A Conversation Begins Here
          </span>
          <p className="body-copy">
            Maison Vereen does not operate a customer service desk. Every message
            that arrives through this page is read personally, and answered in the
            same considered tone found throughout this website. Visitors are
            invited to reach the House through whichever channel feels most natural
            to them.
          </p>
          <div className="flex items-center justify-center gap-5 pt-2">
            <div className="h-px w-12 sm:w-16 bg-gold/50" />
            <Image
              src="/logo-mark.webp"
              alt=""
              width={40}
              height={32}
              className="w-8 h-auto opacity-80"
            />
            <div className="h-px w-12 sm:w-16 bg-gold/50" />
          </div>
        </div>
      </section>

      {/* Pathways — side images + centered dual columns */}
      <section className="relative bg-[#060506] border-t border-gold/15">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(140px,0.9fr)_minmax(0,1.6fr)_minmax(0,1.6fr)_minmax(140px,0.9fr)]">
          {/* Left rail — bottle */}
          <div className="relative hidden lg:block min-h-120 overflow-hidden">
            <Image
              src="/images/private_maison_desk.webp"
              alt=""
              fill
              className="object-cover object-[40%_center]"
              sizes="18vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#060506]" />
          </div>

          {/* Collectors */}
          <div className="flex flex-col items-center text-center justify-between gap-8 border-b lg:border-b-0 lg:border-r border-gold/25 px-6 py-12 md:px-10 md:py-14 xl:px-12">
            <div className="flex flex-col items-center gap-5 max-w-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold">
                <ShieldIcon />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-light uppercase tracking-[0.18em] text-gold">
                  For Collectors
                </h3>
                <div className="mx-auto h-px w-10 bg-gold/60" />
              </div>
              <p className="body-copy">
                Speak with a concierge for fragrance advice, questions about
                Edition I, or guidance on the Founding Registry application.
              </p>
              <ul className="space-y-2.5 pt-1">
                {COLLECTOR_TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold/90"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-5 py-3 font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
            >
              Speak to a Concierge
              <ArrowIcon />
            </a>
          </div>

          {/* Press */}
          <div className="flex flex-col items-center text-center justify-between gap-8 border-b lg:border-b-0 px-6 py-12 md:px-10 md:py-14 xl:px-12">
            <div className="flex flex-col items-center gap-5 max-w-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold">
                <ColumnsIcon />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-light uppercase tracking-[0.14em] text-gold">
                  For Press, Partners &amp; Gifting
                </h3>
                <div className="mx-auto h-px w-10 bg-gold/60" />
              </div>
              <p className="body-copy">
                Media enquiries, partnership proposals, wholesale discussions, and
                gifting arrangements are each directed to the right person within
                the House.
              </p>
              <ul className="space-y-2.5 pt-1">
                {PRESS_TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold/90"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={EMAIL_CONCIERGE}
              className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-5 py-3 font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
            >
              Contact the House
              <ArrowIcon />
            </a>
          </div>

          {/* Right rail — wax seal */}
          <div className="relative hidden lg:block min-h-120 overflow-hidden">
            <Image
              src="/images/whatsapp_phone.webp"
              alt=""
              fill
              className="object-cover object-[60%_center]"
              sizes="18vw"
            />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#060506]" />
          </div>
        </div>
      </section>

      {/* Preferred ways */}
      <section className="relative bg-[#060506] py-14 md:py-20 border-t border-gold/15">
        <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-10">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-px flex-1 max-w-24 sm:max-w-40 bg-gold/50" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-medium shrink-0">
              Preferred Ways to Reach Us
            </span>
            <div className="h-px flex-1 max-w-24 sm:max-w-40 bg-gold/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {[
              {
                title: "WhatsApp Concierge",
                body: "Begin a private conversation with the House.",
                href: WHATSAPP_URL,
                linkLabel: "Open WhatsApp",
                image: "/images/whatsapp_phone.webp",
                external: true,
                icon: <WhatsAppIcon />,
              },
              {
                title: "Email the House",
                body: "For thoughtful correspondence and longer enquiries.",
                href: EMAIL_CONCIERGE,
                linkLabel: "Write an Email",
                image: "/images/hand_writing.webp",
                external: false,
                icon: <EnvelopeIcon />,
              },
              {
                title: "Schedule a Conversation",
                body: "Arrange a dedicated discussion with a member of the House.",
                href: EMAIL_APPOINTMENTS,
                linkLabel: "Request a Time",
                image: "/images/whatsapp_phone.webp",
                external: false,
                icon: <CalendarIcon />,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative min-h-72 overflow-hidden border border-gold/30 group flex flex-col"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#060506]/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/80 to-[#060506]/40" />
                <div className="relative z-10 flex flex-1 flex-col justify-end gap-3 p-5 md:p-6 min-h-72">
                  <div className="space-y-2.5">
                    <div className="text-gold scale-90 origin-left">{card.icon}</div>
                    <h3 className="font-serif text-lg font-light text-gold uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <p className="body-copy">
                      {card.body}
                    </p>
                  </div>
                  <a
                    href={card.href}
                    {...(card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 border-t border-gold/25 pt-3 font-sans text-[11px] uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors"
                  >
                    {card.linkLabel}
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative bg-[#060506] py-20 md:py-28 overflow-hidden border-t border-gold/15">
        <div className="absolute left-[8%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden md:block">
          <Image src="/logo-mark.webp" alt="" width={200} height={160} className="w-40 lg:w-48 h-auto" />
        </div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden md:block">
          {/* <Image src="/logo-mark.webp" alt="" width={200} height={160} className="w-40 lg:w-48 h-auto" /> */}
        </div>
        <div className="relative w-[95%] md:w-full max-w-3xl mx-auto text-center">
          <p className="font-serif text-body-muted text-3xl font-light ">
            Every enquiry deserves a considered reply. That is why every message
            is read personally.
          </p>
        </div>
      </section>

      {/* Details & response times */}
      <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/15 overflow-hidden">
        <div className="w-[95%] md:w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_0.7fr] gap-10 lg:gap-12 xl:gap-16 items-stretch">
          <div className="space-y-6">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-medium block">
              Maison Vereen
            </span>
            <p className="body-copy text-xl md:text-2xl">
              Lagos, Nigeria
            </p>
            <ul className="space-y-4 pt-2">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-sans text-base hover:text-gold transition-colors"
                >
                  <span className="text-gold shrink-0">
                    <WhatsAppIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-0.5">
                      WhatsApp
                    </span>
                    <span className="text-body-muted">+234 814 441 3526</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_CONCIERGE}
                  className="inline-flex items-center gap-3 font-sans text-base hover:text-gold transition-colors"
                >
                  <span className="text-gold shrink-0">
                    <EnvelopeIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-0.5">
                      Email
                    </span>
                    <span className="text-body-muted">concierge@maisonvereen.com</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/maisonvereen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-sans text-base hover:text-gold transition-colors"
                >
                  <span className="text-gold shrink-0">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
                      <rect x="4" y="4" width="20" height="20" rx="5" />
                      <circle cx="14" cy="14" r="4.5" />
                      <circle cx="19.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-0.5">
                      Instagram
                    </span>
                    <span className="text-body-muted">@maisonvereen</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5 lg:border-l lg:border-gold/25 lg:pl-10 xl:pl-14">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-medium block">
              Response Times
            </span>
            <p className="font-serif text-3xl md:text-4xl font-light text-gold">
              Within 24—48 hours
            </p>
            <p className="body-copy max-w-md">
              All enquiries, regardless of their nature, are read and answered
              personally by the House.
            </p>
          </div>

          {/* Door plaque atmosphere */}
          <div className="relative hidden lg:block min-h-64 overflow-hidden">
            <Image
              src="/images/private_maison_desk.webp"
              alt=""
              fill
              className="object-cover object-center"
              sizes="20vw"
            />
            <div className="absolute inset-0 bg-[#060506]/55" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#060506]/20 to-[#060506]/80" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#060506] py-16 md:py-24 overflow-hidden border-t border-gold/15">
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image src="/logo-mark.webp" alt="" width={180} height={140} className="w-40 h-auto" />
        </div>
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <Image src="/logo-mark.webp" alt="" width={180} height={140} className="w-40 h-auto" />
        </div>

        <div className="relative w-[95%] md:w-full max-w-5xl mx-auto text-center space-y-10">
          <h2 className="body-copy">
            You now know the House completely. What remains is simply to begin
            the conversation.
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0 bg-gold hover:bg-gold-light text-[#060506] px-7 sm:px-8 py-3.5 text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              Speak to a Concierge
              <ArrowIcon />
            </a>
            <a
              href={EMAIL_CONCIERGE}
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0 border border-gold text-gold hover:bg-gold/10 px-7 sm:px-8 py-3.5 text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              Continue by Email
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <Footer navItems={CONTACT_NAV} />
    </div>
  );
}
