"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_NAV = [
  { label: "THE MAISON", href: "/the-house" },
  { label: "EDITION I", href: "/edition-i" },
  { label: "THE CRAFT", href: "/the-craft" },
  { label: "SIGNATURE COLLECTION", href: "/fragrance-library" },
  { label: "JOURNAL", href: "/journal" },
  { label: "REGISTRY", href: "/the-first-250" },
  { label: "CONTACT", href: "/contact" },
];

const HERO_POINTS = [
  "Nothing here was rushed to market.",
  "Raw material, refined by obsession.",
  "Craft is not a department. It is the entire House.",
  "Years, distilled into millilitres.",
  "The hand behind the formula.",
];

const RAW_MATERIALS = [
  {
    name: "RESINS",
    src: "/oud.webp",
    alt: "Rare resins and amber materials",
  },
  {
    name: "WOODS",
    src: "/chemist.webp",
    alt: "Dark woods and amber depth",
  },
  {
    name: "BOTANICALS",
    src: "/oud.webp",
    alt: "Botanical craft materials for the House",
  },
  {
    name: "FLOWERS",
    src: "/chemist.webp",
    alt: "Maison Vereen vessel — floral character",
  },
  {
    name: "SPICES",
    src: "/oud.webp",
    alt: "Maison Vereen bottle detail — spice and warmth",
  },
];

const PROCESS_STEPS = [
  {
    step: "SOURCE",
    text: "Rare materials chosen for character.",
    icon: "leaf" as const,
  },
  {
    step: "STUDY",
    text: "Each material is studied in depth.",
    icon: "study" as const,
  },
  {
    step: "BLEND",
    text: "Ideas are combined with precision.",
    icon: "flask" as const,
  },
  {
    step: "REJECT",
    text: "More ideas are set aside than kept.",
    icon: "reject" as const,
  },
  {
    step: "REBUILD",
    text: "We begin again with new insight.",
    icon: "rebuild" as const,
  },
  {
    step: "AGE",
    text: "Time is allowed to transform the blend.",
    icon: "age" as const,
  },
  {
    step: "EVALUATE",
    text: "Every detail is judged impartially.",
    icon: "evaluate" as const,
  },
  {
    step: "APPROVE",
    text: "Only what meets the standard moves forward.",
    icon: "approve" as const,
  },
  {
    step: "MAISON VEREEN",
    text: "Only then does it carry the House's name.",
    icon: "maison" as const,
  },
];

const GALLERY = [
  {
    src: "/oud.webp",
    alt: "Hands with dropper and vials in the atelier",
  },
  {
    src: "/chemist.webp",
    alt: "Maison Vereen fragrance vessel",
  },
  {
    src: "/oud.webp",
    alt: "Edition I bottle and founding chapter box",
  },
  {
    src: "/chemist.webp",
    alt: "Maison Vereen gold-foiled box",
  },
  {
    src: "/oud.webp",
    alt: "Private acquisition correspondence",
  },
];

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
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="text-gold/50 shrink-0"
      aria-hidden
    >
      <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIcon({
  type,
}: {
  type: (typeof PROCESS_STEPS)[number]["icon"];
}) {
  if (type === "maison") {
    return (
      <Image
        src="/logo-mark.webp"
        alt=""
        width={28}
        height={24}
        className="w-7 h-auto"
      />
    );
  }

  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.2,
    className: "text-gold",
    "aria-hidden": true as const,
  };

  if (type === "leaf") {
    return (
      <svg {...common}>
        <path
          d="M14 24c0-10 8-14 10-18-6 1-14 5-16 14 2-1 4-1 6 0-1 2-2 3-4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "study") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="6.5" />
        <path d="M17 17l5.5 5.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "flask") {
    return (
      <svg {...common}>
        <path
          d="M11 4h6M12 4v7L7 22a2 2 0 001.8 3h10.4A2 2 0 0021 22L16 11V4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "reject") {
    return (
      <svg {...common}>
        <circle cx="14" cy="14" r="9" />
        <path d="M10 10l8 8M18 10l-8 8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "rebuild") {
    return (
      <svg {...common}>
        <path
          d="M20 9.5A7 7 0 107 17.5M20 9.5V5M20 9.5h-4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "age") {
    return (
      <svg {...common}>
        <path
          d="M9 5h10M9 23h10M10 5l4 7-4 7h8l-4-7 4-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "evaluate") {
    return (
      <svg {...common}>
        <path
          d="M3.5 14S8 7 14 7s10.5 7 10.5 7-4.5 7-10.5 7S3.5 14 3.5 14z"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="14" cy="14" r="9" />
      <path
        d="M9 14.5l3 3 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TheCraftPage() {
  return (
    <div className="min-h-screen bg-[#060506] text-[#EDE8DE] flex flex-col">
      <Header navItems={PAGE_NAV} />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative bg-[#060506] pt-36 md:pt-40 pb-16 md:pb-24">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="space-y-7 md:space-y-8 max-w-xl">
                <div className="space-y-3">
                  <div className="w-10 h-px bg-gold" />
                  <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium">
                    The Individual Behind Every Fragrance
                  </span>
                </div>

                <h1
                  className="font-serif font-light text-[#F2EDE4] leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.15rem, 4.6vw, 3.5rem)" }}
                >
                  Every Bottle Carries a Person&apos;s Patience.
                </h1>

                <ul className="space-y-3.5">
                  {HERO_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-serif text-base md:text-lg font-light leading-snug text-gold"
                    >
                      <span
                        className="mt-[0.7em] w-4 h-px bg-gold shrink-0"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-serif text-base md:text-lg font-light leading-[1.8] text-[#EDE8DE] max-w-md">
                  A finished fragrance from Maison Vereen represents years of
                  refinement — sourcing, testing, rejecting, and beginning
                  again, until the formula deserved the House&apos;s name.
                </p>

                <Link
                  href="/edition-i"
                  className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors"
                >
                  Discover Edition I in Full
                  <ArrowIcon />
                </Link>
              </div>

              <div className="relative w-full aspect-3/4 max-w-md lg:max-w-none mx-auto lg:mx-0 overflow-hidden">
                <Image
                  src="/oud.webp"
                  alt="Master perfumer at work with glass dropper"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/20 to-[#060506]/55" />
                <div className="absolute inset-0 bg-linear-to-r from-[#060506]/60 via-transparent to-[#060506]/60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#060506_90%)]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Process Behind Perfection ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 max-w-xl">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium block">
                  The Process Behind Perfection
                </span>
                <h2
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.35rem)" }}
                >
                  Behind every Maison Vereen fragrance is a process most houses
                  no longer have the patience for.
                </h2>
                <div className="space-y-5 font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  <p>
                    It begins with sourcing — rare African materials selected
                    not for cost efficiency but for character, often requiring
                    relationships with growers and harvesters built over years
                    rather than transactions completed in weeks.
                  </p>
                  <p>
                    From there, development is slow and frequently unforgiving.
                    Formulas are tested, set aside, revisited months later with
                    fresh judgment, and rejected as often as they are advanced.
                    Refinement continues until the master perfumer judges a
                    formulation worthy of the House&apos;s name — a standard
                    that has no lower tier, and no exceptions for deadlines.
                  </p>
                  <p>
                    This page exists to honour that process, and the discipline
                    of the people who carry it out, long before any visitor ever
                    encounters the finished bottle.
                  </p>
                </div>
              </div>

              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src="/chemist.webp"
                  alt="Perfumer formula notebook and vials"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 95vw, 45vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-[#060506]/20 to-[#060506]/55" />
                <div className="absolute inset-0 bg-linear-to-r from-[#060506]/60 via-transparent to-[#060506]/60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#060506_90%)]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Raw Materials (cream) ── */}
        <section className="relative bg-[#EDE8DE] text-[#2C2823] py-16 md:py-24">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-12 md:space-y-14">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-sans text-xs sm:text-sm uppercase tracking-[0.32em] text-[#2C2823] font-medium">
                Raw Materials
              </h2>
              <p className="font-serif font-bold text-base md:text-lg leading-[1.85] text-[#2C2823]/85">
                Maison Vereen sources materials others overlook — rare resins,
                woods, and botanicals drawn from across the African continent,
                selected for the particular depth and character they bring
                rather than for ease of supply.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
              {RAW_MATERIALS.map((mat) => (
                <div key={mat.name} className="space-y-3 text-center">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={mat.src}
                      alt={mat.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    />
                  </div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#2C2823] font-medium block">
                    {mat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process steps ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-12 md:space-y-14">
            <h2 className="font-sans text-xs sm:text-sm uppercase tracking-[0.28em] text-gold font-medium text-center">
              The Process — Unhurried by Design
            </h2>

            <div className="overflow-x-auto pb-2 -mx-1 px-1">
              <div className="flex items-start min-w-max lg:min-w-0 lg:w-full gap-0">
                {PROCESS_STEPS.map((item, idx) => (
                  <div
                    key={item.step}
                    className="flex items-start shrink-0 lg:shrink lg:flex-1"
                  >
                    <div className="flex flex-col items-center text-center gap-3 w-36 sm:w-40 lg:w-full px-2">
                      <StepIcon type={item.icon} />
                      <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-gold font-medium">
                        {item.step}
                      </span>
                      <p className="font-serif text-sm font-light leading-snug text-[#EDE8DE]">
                        {item.text}
                      </p>
                    </div>
                    {idx < PROCESS_STEPS.length - 1 ? (
                      <div className="flex items-center pt-3 px-0.5">
                        <StepChevron />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Development & Refinement ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto space-y-10 md:space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 max-w-xl">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium block">
                  Development &amp; Refinement
                </span>
                <h2
                  className="font-serif font-light text-[#F2EDE4] leading-snug"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.35rem)" }}
                >
                  A single formula may pass through dozens of trials before
                  approval.
                </h2>
                <div className="space-y-5 font-serif text-base md:text-lg font-light leading-[1.85] text-[#EDE8DE]">
                  <p>
                    Patience is treated as a material in its own right — as
                    essential to the finished work as any oil or absolute in the
                    formula.
                  </p>
                  <p>
                    We would rather wait years for a fragrance that will last
                    for generations than release something the House cannot
                    stand behind for a century.
                  </p>
                </div>
              </div>

              <div className="relative w-full aspect-16/10 overflow-hidden">
                <Image
                  src="/oud.webp"
                  alt="Glass vials and formulations in the atelier"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 95vw, 45vw"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {GALLERY.map((img) => (
                <div
                  key={img.src + img.alt}
                  className="relative aspect-square overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTAs ── */}
        <section className="relative bg-[#060506] py-16 md:py-24 border-t border-gold/20">
          <div className="w-[95%] md:w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
              <h3
                className="font-serif font-light text-[#F2EDE4] leading-snug"
                style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)" }}
              >
                Understanding the craft makes one number mean something it did
                not before —{" "}
                <span className="text-gold">250.</span>
              </h3>

              <div className="space-y-4 lg:border-l lg:border-gold/25 lg:pl-10">
                <Link
                  href="/edition-i"
                  className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-[#060506] px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors w-full sm:w-auto"
                >
                  Discover Edition I in Full
                  <ArrowIcon />
                </Link>
                <p className="font-serif text-sm md:text-base font-light leading-relaxed text-[#EDE8DE]/85">
                  Return to Edition I with full appreciation for the craft
                  behind it.
                </p>
              </div>

              <div className="space-y-4 lg:border-l lg:border-gold/25 lg:pl-10">
                <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-3 border border-gold text-gold hover:bg-gold/10 px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors w-full sm:w-auto"
              >
                Apply for a Position
                  <ArrowIcon />
              </Link>
                <p className="font-serif text-sm md:text-base font-light leading-relaxed text-[#EDE8DE]/85">
                  For those who want to be part of something built to last.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={PAGE_NAV} />
    </div>
  );
}
