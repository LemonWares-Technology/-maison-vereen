"use client";

import Link from "next/link";
import "./globals.css";

/**
 * Root error UI — replaces the root layout when it fails.
 * Must define its own <html> and <body>.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#060506] text-[#E8E2D9] antialiased">
        <header className="w-full border-b border-white/5 bg-black/95">
          <div className="w-[90%] max-w-6xl mx-auto h-20 flex items-center">
            <Link
              href="/"
              className="font-serif text-lg tracking-[0.12em] text-[#E8E2D9] hover:text-gold transition-colors"
            >
              Maison Vereen
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-xl w-full text-center space-y-10 py-24">
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
                <span style={{ color: "#C9A84C" }}>wrong.</span>
              </h1>
              <p
                className="font-light text-[#EDE8DE]"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
              >
                The House encountered an unexpected interruption. Please try
                again in a moment.
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
                className="inline-block border border-white/15 hover:border-gold/50 px-8 py-3.5 text-[#EDE8DE] transition-all duration-500 uppercase font-medium"
                style={{ fontSize: "11px", letterSpacing: "0.28em" }}
              >
                Return to the House
              </Link>
            </div>
          </div>
        </main>

        <footer className="border-t border-white/5 bg-[#040404]">
          <div className="w-[90%] max-w-6xl mx-auto py-7 text-center">
            <span
              className="uppercase tracking-[0.25em] text-[#2A2520] font-medium"
              style={{ fontSize: "9px" }}
            >
              Maison Vereen · Edition I · Lagos
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
