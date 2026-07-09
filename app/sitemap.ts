import type { MetadataRoute } from "next";
import { articles } from "@/lib/journal";

const BASE_URL = "https://maisonvereen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                           lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    // PAGE 2 — Discover Maison Vereen
    { url: `${BASE_URL}/our-story`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // PAGE 3 — Philosophy
    { url: `${BASE_URL}/philosophy`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // PAGE 4 — The Founder
    { url: `${BASE_URL}/the-founder`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // PAGE 5 — The Maison Vereen Difference
    { url: `${BASE_URL}/the-difference`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // PAGE 6 — The Individual Behind Every Fragrance
    { url: `${BASE_URL}/the-craft`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // PAGE 7 — Edition I: House of 250
    { url: `${BASE_URL}/edition-i`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // PAGE 8+9 — Founding Registry + Live Registry
    { url: `${BASE_URL}/registry`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    // PAGE 10 — Membership & Access
    { url: `${BASE_URL}/membership`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // PAGE 11 — Signature Collection
    { url: `${BASE_URL}/fragrance-library`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // PAGE 12 — The House
    { url: `${BASE_URL}/the-house`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // PAGE 13 — Social Proof
    { url: `${BASE_URL}/social-proof`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    // PAGE 14 — FAQ
    { url: `${BASE_URL}/faq`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // PAGE 15 — Contact
    { url: `${BASE_URL}/contact`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // PAGE 16 — Final Invitation
    { url: `${BASE_URL}/final-invitation`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/access`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/waitlist`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/the-first-250`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/legacy`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/housebook`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/future`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    // /discover excluded — noindex standalone shareable page
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url:             `${BASE_URL}/housebook/${article.slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        0.6,
  }));

  return [...staticPages, ...articlePages];
}
