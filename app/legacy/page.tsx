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

// Page 15 — LEGACY (exact copy from document)

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── OPENING — melt hero + mobile stacked fix ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: image under header, copy on solid dark */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/images/desk_globe.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_20%]"
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

            <div className="relative z-10 flex-1 bg-[#060506] w-[90%] mx-auto pt-2 pb-14">
              <div className="w-full max-w-lg space-y-6">
                <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium">
                  Legacy
                </span>
                {/* <div className="w-10 h-px bg-gold" /> */}
                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.06] tracking-tight"
                  style={{ fontSize: "clamp(2.1rem, 5vw, 4.2rem)" }}
                >
                  What makes it endure is not{" "}
                  <span className="text-gold">the intention.</span>
                </h1>
                <p className="body-copy max-w-md">
                  Every institution that endures was once only an intention. What
                  makes it endure is not the intention. It is the seriousness of
                  the people who carried it forward.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: image on right, melts into black on left */}
          <div className="absolute inset-0 hidden lg:grid grid-cols-2 pointer-events-none">
            <div className="bg-[#060506]" />
            <div className="relative overflow-hidden">
              <Image
                src="/images/desk_globe.webp"
                alt=""
                fill
                priority
                className="object-cover object-[center_12%]"
                sizes="55vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/85 via-25% to-transparent to-55%" />
              <div className="absolute inset-0 bg-linear-to-t from-[#060506]/50 via-transparent to-[#060506]/30" />
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex w-[90%] md:w-full max-w-6xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-8">
              <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                Legacy
              </span>
              {/* <div className="w-10 h-px bg-gold" /> */}
              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.06] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
              >
                What makes it endure is not{" "}
                <span className="text-gold">the intention.</span>
              </h1>
              <p
                className="body-copy max-w-md"
              >
                Every institution that endures was once only an intention. What
                makes it endure is not the intention. It is the seriousness of
                the people who carried it forward.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE ARE BUILDING ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[55vh]">
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-130 space-y-8">
                  <span className="section-tag">What We Are Building</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
                  >
                    Not a brand.{" "}
                    <em className="not-italic text-gold">
                      A permanent contribution.
                    </em>
                  </h2>
                  <p
                    className="text-body-muted font-light leading-[1.85]"
                    style={{ fontSize: "17px" }}
                  >
                    The greatest luxury houses in the world are not remembered
                    because they were profitable. They are remembered because they
                    were serious. Because the people who built them were building
                    for something beyond the commercial moment. Because they
                    refused to compromise the things that mattered most, even when
                    compromise would have been easier and more profitable.
                  </p>
                  <p
                    className="text-body-muted font-light leading-[1.85]"
                    style={{ fontSize: "17px" }}
                  >
                    Maison Vereen is being built in that spirit. Not because we
                    have earned the comparison yet. Because we have made the
                    commitment. And commitment, held over decades, is what
                    produces the thing you eventually call an institution.
                  </p>
                </div>
              </div>
              <div className="relative min-h-90 lg:min-h-0 overflow-hidden bg-[#060608]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(/images/desk_globe.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center 8%",
                    opacity: 0.5,
                    filter: "brightness(0.58) saturate(0.38)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0D0D0D]/55" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/92 via-[#060608]/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT THIS HOUSE WILL MEAN ── */}
        <section className="border-b border-white/5">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto py-20 md:py-28 space-y-12">
            <div className="space-y-4 max-w-170">
              <span className="section-tag">What This House Will Mean</span>
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
              >
                In ten years. In twenty.{" "}
                <em className="not-italic text-gold">In fifty.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {[
                {
                  label: "In ten years",
                  body: "Maison Vereen will have produced multiple editions, each one a chapter in a growing mythology. The secondary market for Edition I will have told its own story. The Archive will be open. The house will be known — not everywhere, but in the rooms where the people this house was built for gather.",
                },
                {
                  label: "In twenty years",
                  body: "Maison Vereen will be the reference point for what African luxury looks like when it is built seriously. When historians write about the emergence of African luxury in the global market, they will have dates to cite. Maison Vereen Edition I will be one of them.",
                },
                {
                  label: "In fifty years",
                  body: "Maison Vereen will be older than most of the people reading this page right now. It will have produced more editions than anyone can count today. The 250 people who own Edition I will be in its founding record — permanently, irrevocably, as the individuals who were there first.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group bg-[#0D0D0D] px-8 py-10 space-y-6 hover:bg-white/2 transition-colors duration-300 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="section-tag block">{item.label}</span>
                  <p
                    className="text-[#6A6258] font-light leading-[1.85]"
                    style={{ fontSize: "16px" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY BEGINNINGS MATTER ── */}
        <section className="border-b border-white/5 bg-[#0D0D0D]">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">
              <div className="relative min-h-80 lg:min-h-0 overflow-hidden bg-[#060608]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(/images/desk_globe.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center 55%",
                    opacity: 0.45,
                    filter: "brightness(0.55) saturate(0.35)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0D0D0D]/60" />
                <div className="absolute inset-0 bg-linear-to-t from-[#060608]/88 via-[#060608]/20 to-transparent" />
              </div>
              <div className="flex items-center px-6 sm:px-8 md:px-14 py-20 md:py-28">
                <div className="max-w-130 space-y-8">
                  <span className="section-tag">Why Beginnings Matter</span>
                  <h2
                    className="font-serif font-light text-[#E8E2D9] leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
                  >
                    History does not remember the people who arrived{" "}
                    <em className="not-italic text-gold">
                      when everyone else did.
                    </em>
                  </h2>
                  <p
                    className="text-body-muted font-light leading-[1.85]"
                    style={{ fontSize: "17px" }}
                  >
                    The founding owners of the great houses — Hermès, Rolex,
                    Chanel, Patek Philippe — were not celebrated in their moment.
                    They were simply people with the judgment to recognize
                    something extraordinary before the world caught up. That is
                    all. No special knowledge. No particular access. Just the
                    ability to see something serious and respond to it seriously.
                  </p>
                  <p
                    className="text-body-muted font-light leading-[1.85]"
                    style={{ fontSize: "17px" }}
                  >
                    The founding owners of Maison Vereen are in the same
                    position. The house is being built. The beginning is now. The
                    question is not whether Maison Vereen will become something
                    significant. The question is whether you will have been part
                    of it from the beginning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING STATEMENT + CTA ── */}
        <section className="border-b border-white/5">
          <div className="w-[90%] md:w-full max-w-6xl mx-auto py-24 md:py-36">
            <div className="max-w-170 mx-auto text-center space-y-12">
              {/* <div className="w-8 h-px bg-gold/40 mx-auto" /> */}
              <p
                className="font-serif text-body-muted text-base font-light"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)" }}
              >
                We are building the house we always needed. We are building it
                with the seriousness it deserves. We are building it for the
                individuals who were always worthy of it. And we are building it
                to last.
              </p>
              {/* <div className="w-8 h-px bg-gold/40 mx-auto" /> */}
              <Link
                href="/apply"
                className="inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-12 py-4 text-[#E8E2D9] transition-all duration-500 uppercase font-medium tracking-[0.3em] text-[11px]"
              >
                Join the House. Begin the Story.
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
