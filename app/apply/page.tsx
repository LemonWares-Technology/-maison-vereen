// /apply — permanent alias for /access
// The brochure QR code targets maisonvereen.com/apply
// Redirect immediately to the canonical application page at /access

import { redirect } from "next/navigation";

export default function ApplyPage() {
  redirect("/access");
}

export const metadata = {
  title: "Apply — Maison Vereen",
  description: "Ownership Application for Maison Vereen Edition I.",
};
