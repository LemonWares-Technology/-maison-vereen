import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ── GET — public approved applicants list (for the waitlist page display) ─────
// Returns only name (first name + last initial), country, approvalDate, and
// a padded verification number. No email or sensitive data exposed.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.trim() ?? "";
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const limit = Math.min(50, Number(searchParams.get("limit") ?? 20));
  const skip = (page - 1) * limit;

  const where = {
    status: "APPROVED" as const,
    ...(search ? {
      OR: [
        { name:    { contains: search, mode: "insensitive" as const } },
        { country: { contains: search, mode: "insensitive" as const } },
        // verification number search handled client-side after fetch
      ],
    } : {}),
  };

  const [items, total] = await Promise.all([
    prisma.application.findMany({
      where,
      orderBy: { updatedAt: "asc" }, // chronological — first approved first
      skip,
      take: limit,
      select: {
        id:        true,
        name:      true,
        country:   true,
        updatedAt: true, // date of approval (status change)
        createdAt: true,
      },
    }),
    prisma.application.count({ where }),
  ]);

  // Build public-safe records:
  // - Verification number = sequential padded index (position in the founding record)
  // - Name = first name + last initial only (e.g. "Mary A.")
  // - Country displayed as-is
  const baseOffset = skip; // so page 2 continues numbering from where page 1 left off
  const records = items.map((item, idx) => {
    const parts = item.name.trim().split(/\s+/);
    const firstName = parts[0] ?? item.name;
    const lastInitial = parts.length > 1 ? `${parts[parts.length - 1][0]}.` : "";
    const displayName = lastInitial ? `${firstName} ${lastInitial}` : firstName;

    return {
      verificationNumber: String(baseOffset + idx + 1).padStart(6, "0"),
      displayName,
      country: item.country,
      approvedAt: item.updatedAt,
    };
  });

  return NextResponse.json({ records, total, page, pages: Math.ceil(total / limit) });
}
