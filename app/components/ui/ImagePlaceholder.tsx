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

// ─── Real image files living in /public/ ────────────────────────────────────
const IMG = {
  bottleMain: "/file_00000000a75471f48402160a6ed179fc.png",  // MV bottle on black marble
  bottleEleris: "/file_000000009ffc81f4b13c80251cc456a8.png",  // ELERIS bottle on marble
  bottleCap: "/file_00000000a97471f4be1bee83e5dedea0.png",  // Edition I cap close-up
  certificate: "/file_000000005fc471f495c71bc758a16ffc.png",  // Box + Certificate of Authenticity
  craftDropper: "/file_00000000520071f4915a7351029b1f7b.png",  // Hand dropper / atelier craft
  founderAtelier: "/file_00000000a39471f4b5714dd0617de348.png",  // Founder in MV atelier
  hourglass: "/file_00000000aba081f49f4ebc11da3f8c3d.png",  // Brass hourglass on marble
  privateAcq: "/file_00000000b1e872469e4def4b87dca0c3.png",  // Private Acquisition door plaque
  blackStone: "/file_00000000df2071f4ac2ce7694ace922d.png",  // Black stone with gold veins
  founderPortrait1: "/founder-image-1.png",                     // Founder portrait side profile
  founderPortrait2: "/founder-image-2.png",                     // Founder portrait wider
} as const;

const LABEL_IMAGE_MAP: Record<string, string> = {
  // ── Hero / Bottle ──────────────────────────────────────────────────────────
  "signature collection bottle & vessel": IMG.bottleEleris,
  "signature collection bottle &amp; vessel": IMG.bottleEleris,
  "hero bottle frame": IMG.bottleMain,
  "edition i / 017 / 250": IMG.bottleCap,
  "founder edition bottle frame": IMG.bottleCap,
  "octagon cap frame": IMG.bottleCap,
  "vereen notes & bottle": IMG.bottleEleris,
  "lumière notes & bottle": IMG.bottleMain,
  "lumiere notes & bottle": IMG.bottleMain,
  "obsidian notes & bottle": IMG.blackStone,
  "santalis notes & bottle": IMG.craftDropper,
  "clairvoyant notes & bottle": IMG.bottleCap,
  "for collectors": IMG.bottleMain,
  "bottle hands": IMG.craftDropper,

  // ── Registry / Certificate / Box ──────────────────────────────────────────
  "gold sealed correspondence": IMG.certificate,
  "wax seal invitation": IMG.certificate,
  "wax seal": IMG.certificate,
  "wax sealed correspondence": IMG.certificate,
  "founding chapter": IMG.certificate,
  "for press, partners & gifting": IMG.certificate,
  "for press, partners &amp; gifting": IMG.certificate,

  // ── Craft / Atelier ───────────────────────────────────────────────────────
  "fragrance archives": IMG.craftDropper,
  "archival document": IMG.craftDropper,
  "master artisans": IMG.craftDropper,
  "glass vials & formulations": IMG.craftDropper,
  "glass vials &amp; formulations": IMG.craftDropper,
  "architectural frame": IMG.craftDropper,

  // ── The House / Institutional ─────────────────────────────────────────────
  "historic house charter desk": IMG.hourglass,
  "values & culture book": IMG.privateAcq,
  "values &amp; culture book": IMG.privateAcq,
  "grand archway hallway": IMG.privateAcq,
  "the house difference": IMG.privateAcq,
  "institutional vision": IMG.hourglass,
  "the next century": IMG.hourglass,

  // ── Social Proof ──────────────────────────────────────────────────────────
  "magnifying glass & ledger desk": IMG.founderAtelier,
  "magnifying glass &amp; ledger desk": IMG.founderAtelier,
  "private maison meeting": IMG.founderAtelier,
  "window skyline view": IMG.hourglass,

  // ── FAQ ───────────────────────────────────────────────────────────────────
  "faq ledger manuscript desk": IMG.founderAtelier,

  // ── Contact ───────────────────────────────────────────────────────────────
  "contact & concierge desk": IMG.founderAtelier,
  "contact &amp; concierge desk": IMG.founderAtelier,
  "whatsapp concierge": IMG.founderAtelier,
  "email the house": IMG.craftDropper,
  "schedule a conversation": IMG.hourglass,
  "response times": IMG.privateAcq,

  // ── Access / Private Acquisition ──────────────────────────────────────────
  "private acquisition": IMG.privateAcq,
  "access": IMG.privateAcq,

  // ── Founder ───────────────────────────────────────────────────────────────
  "the founder of maison vereen": IMG.founderPortrait2,
  "founder": IMG.founderPortrait1,
  "founder portrait": IMG.founderPortrait1,

  // ── Dark stone / minerals ─────────────────────────────────────────────────
  "resin": IMG.blackStone,
  "obsidian": IMG.blackStone,
  "dark stone": IMG.blackStone,
  "gold box": IMG.certificate,
  "leather texture": IMG.privateAcq,
  "flowers": IMG.craftDropper,
  "smoke": IMG.bottleCap,
};

const DEFAULT_IMAGES = [
  IMG.bottleMain,
  IMG.bottleEleris,
  IMG.founderAtelier,
  IMG.certificate,
  IMG.craftDropper,
  IMG.hourglass,
  IMG.privateAcq,
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
      <div className="absolute inset-0 bg-linear-to-t from-[#060506]/70 via-transparent to-[#060506]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,5,6,0.35)_100%)] pointer-events-none" />
    </div>
  );
}
