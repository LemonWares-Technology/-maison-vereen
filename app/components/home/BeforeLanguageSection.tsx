"use client";

import Image from "next/image";

export default function BeforeLanguageSection() {
  return (
    <section className="relative bg-[#060506] overflow-hidden">
      {/* Right architecture — melts into black */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
        <div className="hidden lg:block bg-[#060506]" />
        <div className="relative min-h-full overflow-hidden opacity-0 lg:opacity-100">
          <Image
            src="/images/dark-architecture.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#060506] from-0% via-[#060506]/88 via-28% to-transparent to-58%" />
          <div className="absolute inset-0 bg-linear-to-t from-[#060506]/60 via-transparent to-[#060506]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,transparent_20%,#060506_88%)]" />
        </div>
      </div>

      <div className="relative z-10 w-[95%] md:w-full max-w-7xl mx-auto py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7 md:space-y-8 max-w-xl">
            <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium block">
              Before Language.
            </span>

            <div className="space-y-6 font-serif text-lg md:text-xl font-medium leading-[1.85] text-[#EDE8DE]">
              <p>
                Before your name is known, before your story is told, before a
                single word has passed between you and a room — something has
                already been decided.
              </p>
              <p>
                Maison Vereen was built for that instant. The one that happens
                before language.
              </p>
              <p>
                This is not a house that asks you to become someone. It
                recognises who has already arrived.
              </p>
              <p>
                Edition I exists for the small number of people who have always
                understood the difference between fitting in and belonging — and
                who have been waiting, without quite knowing it, for something
                built to that standard.
              </p>
              <p>
                Two hundred and fifty bottles. No more will ever be made. What
                follows on this page is not a product description. It is an
                invitation to understand what you would be applying to become
                part of.
              </p>
            </div>
          </div>

          {/* Mobile image */}
          <div className="relative w-full aspect-4/5 overflow-hidden lg:hidden">
            <Image
              src="/images/dark-architecture.jpg"
              alt="Before language — a threshold into the House"
              fill
              className="object-cover object-center"
              sizes="95vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060506] via-transparent to-[#060506]/55" />
            <div className="absolute inset-0 bg-linear-to-r from-[#060506]/70 via-transparent to-[#060506]/70" />
          </div>

          <div className="hidden lg:block min-h-140" aria-hidden />
        </div>
      </div>
    </section>
  );
}
