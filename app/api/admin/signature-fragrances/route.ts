import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";
import { fragranceNumberLabel } from "@/lib/roman";

function serialize(item: {
  id: string;
  slug: string;
  name: string;
  notes: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sortOrder: number;
  published: boolean;
  updatedAt: Date;
}) {
  return {
    ...item,
    no: fragranceNumberLabel(item.sortOrder),
  };
}

export async function GET(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const items = await prisma.signatureFragrance.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return NextResponse.json({ fragrances: items.map(serialize) });
}

export async function PATCH(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = await req.json();
  const ids: unknown = body?.ids;

  if (!Array.isArray(ids) || ids.some((id) => typeof id !== "string")) {
    return NextResponse.json({ error: "ids must be a string array." }, { status: 400 });
  }

  const existing = await prisma.signatureFragrance.findMany({
    select: { id: true },
  });
  const existingIds = new Set(existing.map((row) => row.id));
  if (ids.length !== existingIds.size || ids.some((id) => !existingIds.has(id))) {
    return NextResponse.json({ error: "ids must include every fragrance exactly once." }, { status: 400 });
  }

  await prisma.$transaction(
    ids.map((id, index) =>
      prisma.signatureFragrance.update({
        where: { id },
        data: { sortOrder: index + 1 },
      })
    )
  );

  const items = await prisma.signatureFragrance.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return NextResponse.json({ fragrances: items.map(serialize) });
}
