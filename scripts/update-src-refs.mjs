// scripts/update-src-refs.mjs
// Updates all .png src references in app/ to .webp for the converted files.
// Skips favicon.png (not converted).

import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join, extname } from "path";

// All PNGs we converted to WebP
const CONVERTED = new Set([
  "file_00000000520071f4915a7351029b1f7b.png",
  "file_000000005fc471f495c71bc758a16ffc.png",
  "file_000000009ffc81f4b13c80251cc456a8.png",
  "file_00000000a39471f4b5714dd0617de348.png",
  "file_00000000a75471f48402160a6ed179fc.png",
  "file_00000000a97471f4be1bee83e5dedea0.png",
  "file_00000000aba081f49f4ebc11da3f8c3d.png",
  "file_00000000b1e872469e4def4b87dca0c3.png",
  "file_00000000df2071f4ac2ce7694ace922d.png",
  "founder-image-1.png",
  "founder-image-2.png",
  "logo.png",
  "application-hero.png",
  "certificate.png",
  "desk_globe.png",
  "founder.png",
  "hand_writing.png",
  "hero-bottle.png",
  "hero-section-image.png",
  "house-section-image.png",
  "maison-vereen-access.png",
  "philosophy-hero.png",
  "private_maison_desk.png",
  "the bottle.png",
  "the-house-belonging.png",
  "the-house-hero.png",
  "the-house-last.png",
  "whatsapp_phone.png",
]);

function walkDir(dir, callback) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next") {
      walkDir(fullPath, callback);
    } else if (entry.isFile()) {
      const ext = extname(entry.name);
      if ([".tsx", ".ts", ".jsx", ".js", ".mjs", ".css"].includes(ext)) {
        callback(fullPath);
      }
    }
  }
}

let totalFiles = 0;
let totalReplacements = 0;

walkDir("app", (filePath) => {
  let content = readFileSync(filePath, "utf8");
  let modified = false;

  for (const pngName of CONVERTED) {
    const webpName = pngName.replace(/\.png$/, ".webp");
    // Match both /filename.png and /images/filename.png patterns
    const patterns = [
      { from: `/${pngName}`, to: `/${webpName}` },
      { from: `/images/${pngName}`, to: `/images/${webpName}` },
    ];
    for (const { from, to } of patterns) {
      if (content.includes(from)) {
        const count = (content.split(from).length - 1);
        content = content.replaceAll(from, to);
        totalReplacements += count;
        modified = true;
      }
    }
  }

  if (modified) {
    writeFileSync(filePath, content, "utf8");
    console.log(`  Updated: ${filePath}`);
    totalFiles++;
  }
});

// Also update the scripts themselves
walkDir("scripts", (filePath) => {
  let content = readFileSync(filePath, "utf8");
  let modified = false;
  for (const pngName of CONVERTED) {
    const webpName = pngName.replace(/\.png$/, ".webp");
    const patterns = [
      { from: `/${pngName}`, to: `/${webpName}` },
      { from: `/images/${pngName}`, to: `/images/${webpName}` },
    ];
    for (const { from, to } of patterns) {
      if (content.includes(from)) {
        content = content.replaceAll(from, to);
        modified = true;
      }
    }
  }
  if (modified) {
    writeFileSync(filePath, content, "utf8");
  }
});

console.log(`\nDone. Updated ${totalFiles} files, ${totalReplacements} references.\n`);
