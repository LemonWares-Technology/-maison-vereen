import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";

// ── POST — public fragrance enquiry submission ────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { name, email, fragrance, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !fragrance?.trim()) {
      return NextResponse.json({ error: "Name, email and fragrance are required." }, { status: 400 });
    }

    const emailLower = email.toLowerCase().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const enquiry = await prisma.fragranceEnquiry.create({
      data: {
        name: name.trim(),
        email: emailLower,
        fragrance: fragrance.trim(),
        message: message?.trim() || null,
      },
    });

    return NextResponse.json({ ok: true, id: enquiry.id }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/fragrance-enquiry]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

// ── GET — admin only ──────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const page   = Math.max(1, Number(searchParams.get("page") ?? 1));
  const limit  = Math.min(100, Number(searchParams.get("limit") ?? 20));
  const status = searchParams.get("status") ?? undefined;
  const search = searchParams.get("search")?.trim() ?? "";
  const skip   = (page - 1) * limit;

  const where = {
    ...(status ? { status: status as "NEW" | "CONTACTED" | "COMPLETED" } : {}),
    ...(search ? {
      OR: [
        { name:      { contains: search, mode: "insensitive" as const } },
        { email:     { contains: search, mode: "insensitive" as const } },
        { fragrance: { contains: search, mode: "insensitive" as const } },
      ],
    } : {}),
  };

  const [items, total] = await Promise.all([
    prisma.fragranceEnquiry.findMany({
      where, orderBy: { createdAt: "desc" }, skip, take: limit,
    }),
    prisma.fragranceEnquiry.count({ where }),
  ]);

  return NextResponse.json({ enquiries: items, pagination: { total, page, limit, pages: Math.ceil(total / limit) } });
}
