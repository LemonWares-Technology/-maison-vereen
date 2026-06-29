import type { Metadata } from "next";

const BASE_URL = "https://maisonvereen.com";

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Maison Vereen`,
      description,
      url,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Maison Vereen`,
      description,
      images: [image],
    },
  };
}
