"use client";

import React from "react";
import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  label?: string;
  aspect?: string; // e.g. "aspect-4/3", "aspect-16/9", "aspect-3/4", "aspect-square"
  className?: string;
  alt?: string;
  theme?: "dark" | "light";
}

const LABEL_IMAGE_MAP: Record<string, string> = {
  // Signature Collection (Page 11)
  "signature collection bottle & vessel": "/images/the bottle.png",
  "signature collection bottle &amp; vessel": "/images/the bottle.png",
  "vereen notes & bottle": "/images/perfume-bottle.jpg",
  "lumière notes & bottle": "/images/fragrance-alt.jpg",
  "lumiere notes & bottle": "/images/fragrance-alt.jpg",
  "obsidian notes & bottle": "/images/dark-stone.jpg",
  "santalis notes & bottle": "/images/luxury-dark.jpg",
  "clairvoyant notes & bottle": "/images/dark-architecture.jpg",
  "fragrance archives": "/images/hand_writing.png",
  "gold sealed correspondence": "/images/wax-seal.jpg",

  // The House (Page 12)
  "historic house charter desk": "/images/private_maison_desk.png",
  "values & culture book": "/images/journal-dark.jpg",
  "values &amp; culture book": "/images/journal-dark.jpg",
  "grand archway hallway": "/images/the-house-hero.png",

  // Social Proof (Page 13)
  "magnifying glass & ledger desk": "/images/private_maison_desk.png",
  "magnifying glass &amp; ledger desk": "/images/private_maison_desk.png",
  "archival document": "/images/hand_writing.png",
  "window skyline view": "/images/hero-city.jpg",
  "wax seal invitation": "/images/wax-seal.jpg",
  "private maison meeting": "/images/the-house-belonging.png",

  // FAQ (Page 14)
  "faq ledger manuscript desk": "/images/private_maison_desk.png",
  "wax seal": "/images/wax-seal.jpg",
  "bottle hands": "/images/perfume-bottle.jpg",

  // Contact (Page 15)
  "contact & concierge desk": "/images/private_maison_desk.png",
  "contact &amp; concierge desk": "/images/private_maison_desk.png",
  "for collectors": "/images/the bottle.png",
  "for press, partners & gifting": "/images/wax-seal.jpg",
  "for press, partners &amp; gifting": "/images/wax-seal.jpg",
  "whatsapp concierge": "/images/whatsapp_phone.png",
  "email the house": "/images/hand_writing.png",
  "schedule a conversation": "/images/desk_globe.png",
  "response times": "/images/maison-vereen-access.png",

  // Founder & General
  "the founder of maison vereen": "/founder-image-1.png",
  "founder": "/founder-image-1.png",
  "craft archives": "/images/hand_writing.png",
  "institutional vision": "/images/the-house-hero.png",
  "the house difference": "/images/the-house-belonging.png",
  "edition i / 017 / 250": "/images/the bottle.png",
  "founding chapter": "/images/philosophy-hero.png",
  "private acquisition": "/images/maison-vereen-access.png",
  "master artisans": "/images/hand_writing.png",
  "glass vials & formulations": "/images/fragrance-dark.jpg",
  "glass vials &amp; formulations": "/images/fragrance-dark.jpg",
  "resin": "/images/dark-stone.jpg",
  "flowers": "/images/fragrance-alt.jpg",
  "smoke": "/images/dark-architecture.jpg",
  "gold box": "/images/luxury-dark.jpg",
  "wax sealed correspondence": "/images/wax-seal.jpg",
  "leather texture": "/images/journal-dark.jpg",
};

const DEFAULT_IMAGES = [
  "/images/the bottle.png",
  "/images/private_maison_desk.png",
  "/images/philosophy-hero.png",
  "/images/the-house-hero.png",
  "/images/hand_writing.png",
  "/images/desk_globe.png",
  "/images/the-house-belonging.png",
];

function getImageForLabel(label?: string): string {
  if (!label) return DEFAULT_IMAGES[0];
  const normalized = label.toLowerCase().trim();
  if (LABEL_IMAGE_MAP[normalized]) {
    return LABEL_IMAGE_MAP[normalized];
  }
  // Try partial match
  for (const key of Object.keys(LABEL_IMAGE_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return LABEL_IMAGE_MAP[key];
    }
  }
  // Hash label string to deterministically pick a default image
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash << 5) - hash + label.charCodeAt(i);
  }
  return DEFAULT_IMAGES[Math.abs(hash) % DEFAULT_IMAGES.length];
}

export default function ImagePlaceholder({
  src,
  label,
  aspect = "aspect-4/3",
  className = "",
  alt,
}: ImagePlaceholderProps) {
  const finalSrc = src || getImageForLabel(label);
  const imageAlt = alt || label || "Maison Vereen Image";

  return (
    <div
      className={`relative bg-[#0A0A0C] border border-gold/25 overflow-hidden group shadow-2xl ${aspect} ${className}`}
    >
      <Image
        src={finalSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Luxury Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060506]/70 via-transparent to-[#060506]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,5,6,0.35)_100%)] pointer-events-none" />
    </div>
  );
}
