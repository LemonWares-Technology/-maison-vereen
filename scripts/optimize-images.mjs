// scripts/optimize-images.mjs
// Compresses heavy PNG/JPG files in /public using sharp.
// Replaces files in-place. Run once from the project root.

import sharp from "sharp";
import { readdirSync, statSync, existsSync, renameSync } from "fs";
import { join, extname, basename } from "path";

const IMAGE_DIRS = [
  "public",
  "public/images",
];

const SUPPORTED_EXTS = [".png", ".jpg", ".jpeg", ".avif"];

// Settings per format
const PNG_QUALITY = 80;       // 0-100, lower = smaller
const JPEG_QUALITY = 80;      // 0-100
const AVIF_QUALITY = 60;      // 0-100

// Skip files smaller than this (already small enough)
const SKIP_BELOW_BYTES = 100_000; // 100 KB

// Files that are logos with transparency - use lossless
const LOSSLESS_NAMES = ["logo.png", "favicon.png"];

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const name = basename(filePath);
  const stat = statSync(filePath);

  if (stat.size < SKIP_BELOW_BYTES) {
    console.log(`  SKIP (small)   ${name}  (${(stat.size / 1024).toFixed(0)} KB)`);
    return;
  }

  const tmpPath = filePath + ".tmp";
  let pipeline = sharp(filePath, { failOn: "none" });

  try {
    if (ext === ".png") {
      const isLossless = LOSSLESS_NAMES.includes(name);
      pipeline = pipeline.png({
        compressionLevel: 9,
        quality: isLossless ? 100 : PNG_QUALITY,
        palette: false,
      });
    } else if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    } else if (ext === ".avif") {
      pipeline = pipeline.avif({ quality: AVIF_QUALITY });
    } else {
      return;
    }

    await pipeline.toFile(tmpPath);

    const newStat = statSync(tmpPath);
    const saved = stat.size - newStat.size;
    const pct = ((saved / stat.size) * 100).toFixed(1);

    if (newStat.size < stat.size) {
      renameSync(tmpPath, filePath);
      console.log(
        `  OK  ${name.padEnd(55)} ${(stat.size / 1024).toFixed(0).padStart(6)} KB -> ${(newStat.size / 1024).toFixed(0).padStart(6)} KB  (-${pct}%)`
      );
    } else {
      import("fs").then(({ unlinkSync }) => { try { unlinkSync(tmpPath); } catch {} });
      console.log(`  SKIP (larger) ${name}  (${(stat.size / 1024).toFixed(0)} KB)`);
    }
  } catch (err) {
    console.error(`  ERROR  ${name}: ${err.message}`);
  }
}

async function main() {
  console.log("\nMaison Vereen - Image Compression\n");
  let total = 0;
  for (const dir of IMAGE_DIRS) {
    if (!existsSync(dir)) continue;
    console.log(`\n[${dir}/]`);
    const files = readdirSync(dir).filter((f) => {
      const ext = extname(f).toLowerCase();
      return SUPPORTED_EXTS.includes(ext);
    });
    for (const f of files) {
      await compressImage(join(dir, f));
      total++;
    }
  }
  console.log(`\nDone. Processed ${total} images.\n`);
}

main().catch(console.error);
