import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";

// ── POST — public form submission ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, country, occupation, drives, legacy, howHeard } = body;

    if (!name || !email || !country || !occupation || !drives || !legacy) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailLower = email.toLowerCase().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const duplicate = await prisma.application.findFirst({
      where: { email: emailLower },
    });
    if (duplicate) {
      return NextResponse.json(
        { error: "An application with this email already exists." },
        { status: 409 }
      );
    }

    const application = await prisma.application.create({
      data: {
        name: name.trim(),
        email: emailLower,
        country: country.trim(),
        occupation: occupation.trim(),
        drives: drives.trim(),
        legacy: legacy.trim(),
        howHeard: howHeard ?? "Not specified",
        consent: true,
      },
    });

    return NextResponse.json({ ok: true, id: application.id }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/applications]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

// ── GET — admin only, paginated + filtered ────────────────────────────────────
export async function GET(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page   = Math.max(1, Number(searchParams.get("page")  ?? 1));
  const limit  = Math.min(100, Number(searchParams.get("limit") ?? 20));
  const status = searchParams.get("status") ?? undefined;
  const search = searchParams.get("search")?.trim() ?? "";
  const skip   = (page - 1) * limit;

  const where = {
    ...(status ? { status: status as "PENDING" | "REVIEWING" | "APPROVED" | "REJECTED" } : {}),
    ...(search ? {
      OR: [
        { name:       { contains: search, mode: "insensitive" as const } },
        { email:      { contains: search, mode: "insensitive" as const } },
        { country:    { contains: search, mode: "insensitive" as const } },
        { occupation: { contains: search, mode: "insensitive" as const } },
      ],
    } : {}),
  };

  const [items, total] = await Promise.all([
    prisma.application.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      select: {
        id: true, name: true, email: true, country: true,
        occupation: true, status: true, createdAt: true, howHeard: true,
      },
    }),
    prisma.application.count({ where }),
  ]);

  return NextResponse.json({
    applications: items,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
}
