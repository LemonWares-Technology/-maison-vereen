// scripts/convert-to-webp.mjs
// Converts heavy photographic PNGs to WebP in-place.
// After conversion, updates src references would need to change — but since
// Next.js <Image> serves AVIF/WebP automatically from PNG source at runtime,
// this is mainly for direct <img> or CSS background references.
// This script converts files AND prints any src paths that need updating.

import sharp from "sharp";
import { statSync, renameSync, unlinkSync, existsSync } from "fs";
import { join } from "path";

// These are photographic PNGs — WebP will be dramatically smaller.
// We KEEP the original PNG and write a new .webp alongside it,
// so no src references break.
const HEAVY_PHOTOS = [
  "public/file_00000000520071f4915a7351029b1f7b.webp",
  "public/file_000000005fc471f495c71bc758a16ffc.webp",
  "public/file_000000009ffc81f4b13c80251cc456a8.webp",
  "public/file_00000000a39471f4b5714dd0617de348.webp",
  "public/file_00000000a75471f48402160a6ed179fc.webp",
  "public/file_00000000a97471f4be1bee83e5dedea0.webp",
  "public/file_00000000aba081f49f4ebc11da3f8c3d.webp",
  "public/file_00000000b1e872469e4def4b87dca0c3.webp",
  "public/file_00000000df2071f4ac2ce7694ace922d.webp",
  "public/founder-image-1.webp",
  "public/founder-image-2.webp",
  "public/logo.webp",
  "public/images/application-hero.webp",
  "public/images/certificate.webp",
  "public/images/desk_globe.webp",
  "public/images/founder.webp",
  "public/images/hand_writing.webp",
  "public/images/hero-bottle.webp",
  "public/images/hero-section-image.webp",
  "public/images/house-section-image.webp",
  "public/images/maison-vereen-access.webp",
  "public/images/philosophy-hero.webp",
  "public/images/private_maison_desk.webp",
  "public/images/the bottle.webp",
  "public/images/the-house-belonging.webp",
  "public/images/the-house-hero.webp",
  "public/images/the-house-last.webp",
  "public/images/whatsapp_phone.webp",
];

const WEBP_QUALITY = 82; // Good quality/size balance

async function convertToWebP(pngPath) {
  if (!existsSync(pngPath)) {
    console.log(`  MISSING  ${pngPath}`);
    return;
  }

  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  const origStat = statSync(pngPath);

  try {
    await sharp(pngPath, { failOn: "none" })
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);

    const newStat = statSync(webpPath);
    const saved = origStat.size - newStat.size;
    const pct = ((saved / origStat.size) * 100).toFixed(1);
    const name = pngPath.split("/").pop();

    console.log(
      `  OK  ${name.padEnd(55)} ${(origStat.size / 1024).toFixed(0).padStart(6)} KB -> ${(newStat.size / 1024).toFixed(0).padStart(6)} KB  (-${pct}%)`
    );
  } catch (err) {
    console.error(`  ERROR  ${pngPath}: ${err.message}`);
  }
}

async function main() {
  console.log("\nMaison Vereen - PNG to WebP Conversion\n");
  for (const f of HEAVY_PHOTOS) {
    await convertToWebP(f);
  }
  console.log("\nDone.\n");
  console.log("NOTE: PNG originals are kept. Next.js <Image> serves WebP/AVIF");
  console.log("automatically from any source format — no src changes needed.");
}

main().catch(console.error);
