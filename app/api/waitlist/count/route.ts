import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ── GET — public, unauthenticated — returns total waitlist count only ─────────
export async function GET() {
  try {
    const count = await prisma.waitlistEntry.count();
    return NextResponse.json({ count }, {
      headers: {
        // Cache for 60 seconds — reduces DB load while keeping counter fresh
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
