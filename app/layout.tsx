import type { Metadata, Viewport } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://maisonvereen.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Maison Vereen | A New Chapter in African Luxury",
    template: "%s | Maison Vereen",
  },
  description:
    "Maison Vereen is Africa's first serious luxury fragrance house. Edition I — 250 numbered bottles, the founding expression. By application only.",

  keywords: [
    "Maison Vereen",
    "African luxury house",
    "limited edition fragrance Africa",
    "luxury identity house Nigeria",
    "Edition I fragrance",
    "African luxury perfume",
    "luxury fragrance Lagos",
    "founding fragrance collection",
    "numbered edition fragrance",
  ],

  authors: [{ name: "Maison Vereen", url: BASE_URL }],
  creator: "Maison Vereen",
  publisher: "Maison Vereen",

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Maison Vereen",
    title: "Maison Vereen | A New Chapter in African Luxury",
    description:
      "Africa's first serious luxury fragrance house. Edition I — 250 numbered bottles worldwide. Access by application only.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Maison Vereen — A House of Distinction. Africa's First.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maison Vereen | A New Chapter in African Luxury",
    description:
      "Africa's first serious luxury fragrance house. Edition I — 250 numbered bottles worldwide.",
    images: ["/logo.png"],
    creator: "@maisonvereen",
  },

  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maison Vereen",
    url: BASE_URL,
    logo: `${BASE_URL}/maison-vereen-logo-dark.png`,
    description: "Africa's first serious luxury fragrance house. Edition I — 250 numbered bottles, the founding expression.",
    foundingDate: "2024",
    foundingLocation: { "@type": "Place", name: "Lagos, Nigeria" },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@maisonvereen.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://instagram.com/maisonvereen",
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${cormorantGaramond.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-charcoal text-[#E8E2D9] antialiased">
        {children}
      </body>
    </html>
  );
}
