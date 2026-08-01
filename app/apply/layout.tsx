import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply — Maison Vereen",
  description:
    "Apply to the Maison Vereen Founding Registry for Edition I — The House of 250.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
