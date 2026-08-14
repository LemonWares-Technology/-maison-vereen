import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";
import { fragranceNumberLabel } from "@/lib/roman";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Ctx) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  const data: {
    name?: string;
    notes?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    published?: boolean;
  } = {};

  if (typeof body.name === "string" && body.name.trim()) data.name = body.name.trim();
  if (typeof body.notes === "string" && body.notes.trim()) data.notes = body.notes.trim();
  if (typeof body.description === "string" && body.description.trim()) {
    data.description = body.description.trim();
  }
  if (typeof body.imageSrc === "string" && body.imageSrc.trim()) {
    data.imageSrc = body.imageSrc.trim();
  }
  if (typeof body.imageAlt === "string") data.imageAlt = body.imageAlt.trim();
  if (typeof body.published === "boolean") data.published = body.published;

  try {
    const updated = await prisma.signatureFragrance.update({
      where: { id },
      data,
    });
    return NextResponse.json({
      fragrance: { ...updated, no: fragranceNumberLabel(updated.sortOrder) },
    });
  } catch {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
}
