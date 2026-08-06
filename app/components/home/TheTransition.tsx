"use client";

// Divider between Edition I world and Signature Collection world on the home page
// Blueprint PAGE 1: transition between the two worlds

export default function TheTransition() {
  return (
    <section className="bg-charcoal py-20 md:py-28 relative overflow-hidden border-b border-white/5 flex items-center justify-center text-center">
      <div className="max-w-190 mx-auto px-6 sm:px-8 space-y-8">

        {/* Gold vertical rule — top */}
        <div className="w-px h-16 bg-linear-to-b from-transparent via-gold/30 to-gold/60 mx-auto" />

        {/* Divider statement */}
        <p
          className="body-copy leading-[1.6] max-w-150 mx-auto"
        >
          Membership is one path into the House. The Signature Collection is another — open, permanent, and entirely its own.
        </p>

        {/* Gold vertical rule — bottom */}
        <div className="w-px h-16 bg-linear-to-t from-transparent via-gold/30 to-gold/60 mx-auto" />

      </div>
    </section>
  );
}
