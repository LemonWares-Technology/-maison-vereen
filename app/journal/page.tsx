"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";
import { articles } from "@/lib/journal";

const JOURNAL_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/registry" },
  { label: "CONTACT", href: "/contact" },
];

export default function JournalPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);

  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={JOURNAL_NAV} onOpenApply={openApply} />

      <main className="flex-1">
        {/* ── Hero — melt layout + mobile stacked fix ── */}
        <section className="relative min-h-screen bg-[#060506] overflow-hidden">
          {/* Mobile: image under header, copy on solid dark */}
          <div className="lg:hidden flex flex-col min-h-screen">
            <div className="relative w-full mt-28 h-[42vh] min-h-70 shrink-0 overflow-hidden">
              <Image
                src="/images/application-hero.webp"
                alt="Maison Vereen Journal — the intellectual record of the House"
                fill
                priority
                className="object-cover object-[center_30%]"
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
                <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold font-medium">
                  The Journal
                </span>
                <div className="w-10 h-px bg-gold" />

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
                >
                  The Journal of Maison Vereen
                </h1>

                <p
                  className="font-serif font-light text-gold leading-snug"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
                >
                  is not a blog. It is the house&apos;s intellectual record.
                </p>

                <p className="font-serif text-base font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                  Here, we write about the things we think about — distinction,
                  excellence, craft, identity, and the nature of legacy.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: image melts from the right */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute inset-0 left-[30%] xl:left-[26%]">
              <Image
                src="/images/application-hero.webp"
                alt="Maison Vereen Journal — the intellectual record of the House"
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="70vw"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-26% via-[#060506]/95 via-40% to-transparent to-68%" />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506]/55 via-transparent to-[#060506]/40" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#060506]/45" />
          </div>

          <div className="relative z-10 hidden lg:flex w-[95%] md:w-full max-w-7xl mx-auto pt-40 pb-20 min-h-screen items-center">
            <div className="w-full max-w-lg lg:max-w-xl space-y-6 md:space-y-7">
              <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                The Journal
              </span>
              <div className="w-10 h-px bg-gold" />

              <h1
                className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
              >
                The Journal of Maison Vereen
              </h1>

              <p
                className="font-serif font-light text-gold leading-snug"
                style={{ fontSize: "clamp(1.15rem, 2vw, 1.45rem)" }}
              >
                is not a blog. It is the house&apos;s intellectual record.
              </p>

              <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE] max-w-md">
                Here, we write about the things we think about — which are the
                same things the people this house was built for think about.
                Distinction. Excellence. Craft. The relationship between identity
                and what we choose to own. The African creative moment and what it
                means for luxury. The nature of legacy. The difference between
                success and significance.
              </p>

              <p className="font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]/85 max-w-md">
                These are not lifestyle posts. They are essays. Written with the
                belief that the people who read them are serious thinkers who
                deserve serious content.
              </p>
            </div>
          </div>
        </section>

        {/* ── Articles ── */}
        <section className="bg-[#060506] border-t border-gold/15">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
              {articles.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/journal/${a.slug}`}
                  className="group block bg-[#060506] hover:bg-white/1.5 transition-colors duration-500 anim-fade-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <article>
                    <div className="relative h-56 overflow-hidden bg-[#080808]">
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                        style={{
                          backgroundImage: `url(${a.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: a.imagePos,
                          opacity: 0.48,
                          filter: "brightness(0.52) saturate(0.45) sepia(0.08)",
                        }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#060506]/92 via-[#060506]/25 to-transparent" />
                      <div className="absolute bottom-5 left-6 z-10 flex items-center gap-3">
                        <span
                          className="uppercase tracking-[0.2em] border px-2 py-1"
                          style={{
                            fontSize: "10px",
                            color: "rgba(201,168,76,0.7)",
                            borderColor: "rgba(201,168,76,0.22)",
                          }}
                        >
                          {a.tag}
                        </span>
                        <span
                          className="font-mono text-[#4A4438]"
                          style={{ fontSize: "9px" }}
                        >
                          {a.issue}
                        </span>
                      </div>
                    </div>
                    <div className="px-6 sm:px-7 pt-7 pb-9 space-y-3">
                      <h2
                        className="font-serif font-light text-[#C8C0B4] leading-snug group-hover:text-[#E8E2D9] transition-colors duration-300"
                        style={{ fontSize: "21px" }}
                      >
                        {a.title}
                      </h2>
                      <p
                        className="text-[#EDE8DE] font-light leading-[1.75]"
                        style={{ fontSize: "15px" }}
                      >
                        {a.excerpt}
                      </p>
                      <div className="pt-3 flex items-center justify-between border-t border-white/4">
                        <span
                          className="uppercase tracking-[0.22em] font-medium group-hover:text-gold transition-colors duration-300"
                          style={{
                            fontSize: "11px",
                            color: "rgba(201,168,76,0.45)",
                          }}
                        >
                          Read →
                        </span>
                        <div
                          className="flex items-center gap-3 text-[#3A3530]"
                          style={{ fontSize: "11px" }}
                        >
                          <span>{a.date}</span>
                          <span>·</span>
                          <span>{a.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Registry CTA ── */}
        <section className="border-t border-gold/15 bg-charcoal">
          <div className="w-[95%] md:w-full max-w-7xl mx-auto py-14 md:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <p
              className="font-serif font-light italic text-[#EDE8DE]/55 max-w-125"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
            >
              &ldquo;Continue reading the house&apos;s story. Join the
              Registry.&rdquo;
            </p>
            <button
              type="button"
              onClick={openApply}
              className="shrink-0 inline-block border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#EDE8DE] transition-all duration-500 uppercase font-medium tracking-[0.3em] text-[11px]"
            >
              Apply for Access
            </button>
          </div>
        </section>
      </main>

      <Footer navItems={JOURNAL_NAV} />

      <ApplicationForm
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
