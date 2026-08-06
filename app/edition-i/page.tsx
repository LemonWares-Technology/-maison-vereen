"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

const PILLARS = [
  {
    no: "01",
    title: "Number Assignment",
    body: "Bottles are numbered in the order of acceptance into the Founding Registry — not purchase. Your number reflects when the House recognised your place.",
  },
  {
    no: "02",
    title: "Authentication",
    body: "Each bottle is individually recorded and accompanied by a signed certificate of authenticity. Its place in the edition is documented for life.",
  },
  {
    no: "03",
    title: "Ownership Experience",
    body: "You are not simply a buyer. You are a founding member. The House maintains your record and honours your place in its founding chapter.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="28"
      height="10"
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

export default function EditionIPage() {

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── 01 Hero — dark text left, bottle right melting into black ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: bottle lower under header, copy on solid dark */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/edition1perfumebottle.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_28%]"
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
                  <span className="font-serif text-lg text-gold">01</span>
                  <div className="h-px w-6 sm:w-8 bg-gold shrink-0" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-semibold">
                    Edition I: House of 250
                  </span>
                </div>

                <h1
                  className="font-serif font-light text-gold leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.1rem, 5vw, 4rem)" }}
                >
                  Two Hundred and Fifty.
                  <br />
                  No More, Ever.
                </h1>

                <p className="body-copy max-w-md">
                  Edition I is Maison Vereen&apos;s founding chapter.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: bottle on right, melts into black on left */}
          <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
            <div className="bg-[#060506]" />
            <div className="relative overflow-hidden">
              <Image
                src="/edition1perfumebottle.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="55vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-60%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/35" />
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-6 md:space-y-7">
              <div className="flex items-center gap-3">
                  <span className="font-serif text-lg md:text-xl text-gold">01</span>
                  <div className="h-px w-6 sm:w-8 bg-gold shrink-0" />
                  <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-semibold">
                    Edition I: House of 250
                  </span>
                </div>

              <h1
                className="font-serif font-light text-gold leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                Two Hundred and Fifty.
                <br />
                No More, Ever.
              </h1>

              <p className="body-copy max-w-md">
                Edition I is Maison Vereen&apos;s founding chapter.
              </p>
            </div>
          </div>
        </section>

        {/* ── 02 Introduction (cream) ── */}
        <section className="relative bg-[#EDE8DE] text-[#2C2823] py-20 md:py-28 overflow-hidden">
          <div className="absolute left-[-4%] top-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none hidden md:block">
            {/* <Image
              src="/logo-mark.webp"
              alt=""
              width={420}
              height={340}
              className="w-72 lg:w-96 h-auto brightness-0"
            /> */}
          </div>

          <div className="relative w-[95%] md:w-full max-w-3xl mx-auto space-y-10">
            <span className="font-serif text-lg md:text-xl text-gold-dark block text-center">
              02
            </span>

            <div className="space-y-8 body-copy-on-cream">
              <p>
                Edition I exists once. When the two hundred and fiftieth bottle
                is placed into a collector&apos;s hands, the edition closes
                permanently — not paused, not revisited in a future
                &ldquo;anniversary&rdquo; release, but closed, in the way a
                first edition of any serious work closes the moment its print
                run ends.
              </p>
              <p>
                Each bottle carries an individual number, assigned in the
                sequence of acceptance into the Founding Registry, and a
                certificate of authenticity that documents its place within the
                two hundred and fifty. Ownership of an Edition I bottle is, in
                effect, ownership of a numbered position in the House&apos;s own
                founding history.
              </p>
              <p>
                This page exists to answer, in full, the questions a serious
                collector will naturally ask: why this number, how authentication
                works, what ownership actually entails, and why the House will
                never be persuaded to extend the edition under any circumstance.
              </p>
            </div>
          </div>
        </section>

        {/* ── 03 Numbering Philosophy — box/certificate left melting into black ── */}
        <section className="relative bg-[#060506] overflow-hidden">
          {/* Desktop: full-bleed left image with right-edge melt */}
          <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2 pointer-events-none">
            <div className="relative overflow-hidden">
              <Image
                src="/certifcicateofauthenticity.webp"
                alt=""
                fill
                className="object-cover object-center"
                sizes="55vw"
              />
              <div className="absolute inset-0 bg-linear-to-l from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-60%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/35" />
            </div>
            <div className="bg-[#060506]" />
          </div>

          <div className="relative z-10 w-[95%] md:w-full max-w-6xl mx-auto py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Mobile image — edges melt into black */}
              <div className="relative w-full aspect-4/3 overflow-hidden lg:hidden order-2">
                <Image
                  src="/certifcicateofauthenticity.webp"
                  alt="Edition I box and certificate — Maison Vereen"
                  fill
                  className="object-cover object-center"
                  sizes="95vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/60" />
                <div className="absolute inset-0 bg-linear-to-r from-[#060506]/70 via-transparent to-[#060506]/70" />
              </div>

              <div className="hidden lg:block min-h-120" aria-hidden />

              <div className="space-y-6 max-w-xl lg:ml-auto order-1">
                <span className="font-serif text-lg md:text-xl text-gold block">
                  03
                </span>
                <h2
                  className="font-serif font-light text-gold leading-snug"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  Numbering Philosophy
                </h2>
                <p className="body-copy">
                  Numbers are assigned in the order applicants are formally
                  accepted into the Founding Registry — meaning a bottle&apos;s
                  number reflects not when it was purchased, but when its owner
                  was recognised by the House. Early conviction is rewarded with
                  early numbering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Certificate & Ownership ── */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-80 md:min-h-105 lg:min-h-140 bg-[#060506]">
              <Image
                src="/images/certificate.webp"
                alt="Certificate of Authenticity with Edition I bottle and wax seal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#060506]/20" />
            </div>

            <div className="bg-[#EDE8DE] text-[#2C2823] flex items-center">
              <div className="w-full px-8 sm:px-12 md:px-14 lg:px-16 py-16 md:py-20 space-y-6 max-w-xl">
                <span className="font-serif text-lg md:text-xl text-gold block">
                  04
                </span>
                <h2
                  className="font-serif font-light text-[#2C2823] leading-snug"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  Certificate of Authenticity &amp; Ownership Experience
                </h2>
                <p className="body-copy-on-cream">
                  Every Edition I bottle is accompanied by a signed certificate
                  of authenticity, recording its number, its owner&apos;s name,
                  and its place within the two hundred and fifty.
                </p>
                <p className="body-copy-on-cream">
                  Ownership includes private correspondence from the House at
                  the time of acquisition and continued recognition as a founding
                  member for as long as the House exists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Three pillars ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/15">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-10 md:space-y-14">
            <span className="font-serif text-lg md:text-xl text-gold block text-center">
              05
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {PILLARS.map((pillar) => (
                <article
                  key={pillar.no}
                  className="flex flex-col gap-4 border border-[#EDE8DE]/12 bg-[#0C0B0A] px-6 py-8 sm:px-7 sm:py-9 md:px-8 md:py-10"
                >
                  <span className="font-serif text-xl md:text-2xl text-gold font-light">
                    {pillar.no}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-[#EDE8DE] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[13px] sm:text-[14px] font-normal leading-[1.7] text-body-muted">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 Big 250 ── */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <Image
            src="/images/certificate.webp"
            alt=""
            fill
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#060506]/70" />

          <div className="relative w-[95%] md:w-full max-w-6xl mx-auto text-center space-y-6">
            <span className="font-serif text-lg md:text-xl text-gold block">
              06
            </span>
            <span
              className="font-serif text-gold font-light leading-none block"
              style={{ fontSize: "clamp(5rem, 18vw, 12rem)" }}
            >
              250
            </span>
            <p className="font-sans text-sm md:text-base uppercase tracking-[0.35em] text-[#EDE8DE] font-medium">
              Worldwide. Never Repeated. Permanent.
            </p>
          </div>
        </section>

        {/* ── 07 History statement (cream) ── */}
        <section className="relative bg-[#EDE8DE] text-[#2C2823] py-20 md:py-28 overflow-hidden">
          <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none hidden md:block">
            <Image
              src="/logo-mark.webp"
              alt=""
              width={360}
              height={290}
              className="w-64 lg:w-80 h-auto brightness-0"
            />
          </div>

          <div className="relative w-[95%] md:w-full max-w-3xl mx-auto text-center space-y-6">
            <span className="font-serif text-lg md:text-xl text-gold-dark block">
              07
            </span>
            <h2
              className="font-serif font-light text-[#2C2823] leading-snug"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              History does not get a reprint.
            </h2>
            <p className="body-copy-on-cream w-full uppercase tracking-widest max-w-3xl mx-auto">
              Maison Vereen will never reproduce Edition I under any
              circumstance.
            </p>
          </div>
        </section>

        {/* ── 08 CTAs ── */}
        <section className="relative bg-[#060506] py-16 md:py-24">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-10">
            <span className="font-serif text-lg md:text-xl text-gold block text-center">
              08
            </span>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 sm:gap-8">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0 bg-gold hover:bg-gold-light text-[#060506] px-7 sm:px-8 py-3.5 text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-colors"
              >
                Apply to the Founding Registry
                <ArrowIcon />
              </Link>
              <Link
                href="/registry"
                className="inline-flex border hover:text-gold border-gold items-center justify-center gap-3 whitespace-nowrap shrink-0  px-7 sm:px-8 py-3.5 text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-colors"
              >
                Understand the Founding Registry
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
