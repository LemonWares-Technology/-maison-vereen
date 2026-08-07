"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * Segment error UI — shown instead of the default Next.js error overlay
 * when a page or nested layout throws during rendering.
 */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#060506] text-[#E8E2D9] flex flex-col">
      <header className="w-full border-b border-white/5 bg-black/95 backdrop-blur-md">
        <div className="w-[90%] md:w-full max-w-6xl mx-auto h-25 md:h-31/25 flex items-center justify-between">
          <Link href="/" className="group shrink-0" aria-label="Maison Vereen — Home">
            <Image
              src="/logo.webp"
              alt="Maison Vereen"
              width={280}
              height={96}
              className="h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 md:hidden"
              priority
            />
            <Image
              src="/logo.webp"
              alt="Maison Vereen"
              width={320}
              height={110}
              className="h-27.5 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-4 h-px bg-gold/30" />
            <span
              className="uppercase tracking-[0.3em] text-[#EDE8DE] font-medium"
              style={{ fontSize: "9px" }}
            >
              Edition I · 250 Bottles
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-14">
        <div className="max-w-160 w-full text-center space-y-10 py-24">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/25" />
            <span
              className="uppercase tracking-[0.4em] text-[#EDE8DE] font-medium"
              style={{ fontSize: "9px" }}
            >
              500
            </span>
            <div className="w-12 h-px bg-gold/25" />
          </div>

          <div className="space-y-5">
            <h1
              className="font-serif font-light text-[#E8E2D9] leading-[1.06]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Something went{" "}
              <em className="not-italic" style={{ color: "#C9A84C" }}>
                wrong.
              </em>
            </h1>
            <p
              className="font-serif font-light text-[#EDE8DE] max-w-md mx-auto"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
            >
              The House encountered an unexpected interruption. Please try again
              in a moment.
            </p>
          </div>

          <div className="w-8 h-px bg-gold/20 mx-auto" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-block bg-gold/90 hover:bg-gold px-8 py-3.5 text-charcoal transition-all duration-500 uppercase font-semibold"
              style={{ fontSize: "11px", letterSpacing: "0.3em" }}
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block border border-white/15 hover:border-gold/50 px-8 py-3.5 text-[#EDE8DE] hover:text-[#E8E2D9] transition-all duration-500 uppercase font-medium"
              style={{ fontSize: "11px", letterSpacing: "0.28em" }}
            >
              Return to the House
            </Link>
          </div>

          <div className="space-y-3">
            <p
              className="uppercase tracking-[0.3em] text-[#3A3530] font-medium"
              style={{ fontSize: "9px" }}
            >
              Or continue elsewhere
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { label: "Edition I", href: "/edition-i" },
                { label: "Apply for Access", href: "/apply" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#EDE8DE] hover:text-gold/70 transition-colors font-light"
                  style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#040404]">
        <div className="w-[90%] md:w-full max-w-6xl mx-auto py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="uppercase tracking-[0.25em] text-[#2A2520] font-medium"
            style={{ fontSize: "9px" }}
          >
            Maison Vereen · Edition I · Lagos
          </span>
          <span
            className="uppercase tracking-[0.15em] text-[#1A1A18] font-light"
            style={{ fontSize: "9px" }}
          >
            © 2025 Maison Vereen
          </span>
        </div>
      </footer>
    </div>
  );
}
