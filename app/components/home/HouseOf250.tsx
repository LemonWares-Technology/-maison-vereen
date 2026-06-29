"use client";
import Link from "next/link";
import Image from "next/image";

export default function HouseOf250() {
  return (
    <section className="bg-[#050505] border-b border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image / Visual side */}
        <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden bg-[#020202]">
          <Image
            src="/images/maison-vereen-access.png"
            alt="The House of 250"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 hover:scale-100"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#050505]/80" />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center px-6 sm:px-8 md:px-16 py-20 lg:py-32 space-y-12">
          <div className="space-y-6 max-w-[540px]">
            <span className="section-tag">World One — The Prestige Collection</span>
            <h2 className="type-headline">
              The House of 250
            </h2>
            <p className="type-pullquote text-[#C8BFB2]">
              "This fragrance is earned, not simply purchased."
            </p>
            <div className="type-body-sm space-y-4">
              <p>
                This is not a perfume for purchase. It is a position within an exclusive circle — one that must be considered, applied for, and carefully extended.
              </p>
              <p>
                Each release produces precisely 250 numbered bottles. No more. There is no catalogue, no cart, no instant transaction. There is an application, a review, and for those found to be suitable custodians — an invitation.
              </p>
            </div>
          </div>

          <div className="space-y-8 max-w-[540px] pt-8 border-t border-white/10">
            <h3 className="type-caption uppercase tracking-widest text-[#E8E2D9]">The Acquisition Process</h3>
            
            <div className="grid gap-6">
              {[
                { step: "I", title: "Learn the Philosophy", desc: "Understand what it means to become a custodian of a numbered bottle." },
                { step: "II", title: "Submit Your Application", desc: "A considered application allows us to understand who you are." },
                { step: "III", title: "Receive Your Invitation", desc: "Approved applicants receive a private invitation to acquire their bottle." },
                { step: "IV", title: "Become One of the 250", desc: "Your numbered bottle marks your permanent place within the House." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="type-mono text-gold/60 mt-1">{item.step}.</span>
                  <div>
                    <h4 className="type-body-sm text-[#E8E2D9]">{item.title}</h4>
                    <p className="type-caption text-[#5A5449] mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <Link href="/access" className="border border-gold/60 hover:border-gold hover:bg-gold/10 px-8 py-3.5 transition-all duration-500 type-caption uppercase tracking-[0.25em] text-[#E8E2D9] font-medium">
                Apply for Consideration
              </Link>
              <Link href="/waitlist" className="px-4 py-3.5 type-caption uppercase tracking-[0.25em] text-[#8A8178] hover:text-[#E8E2D9] transition-colors font-medium">
                Join the Waiting List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
