import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fragranceNumberLabel } from "@/lib/roman";
import { DEFAULT_SIGNATURE_FRAGRANCES } from "@/lib/signatureFragrances";

export async function GET() {
  try {
    const rows = await prisma.signatureFragrance.findMany({
      where: { published: true },
      orderBy: { sortOrder: "asc" },
    });

    const source =
      rows.length > 0
        ? rows
        : DEFAULT_SIGNATURE_FRAGRANCES.map((item) => ({
            id: item.slug,
            slug: item.slug,
            name: item.name,
            notes: item.notes,
            description: item.description,
            imageSrc: item.imageSrc,
            imageAlt: item.imageAlt,
            sortOrder: item.sortOrder,
          }));

    return NextResponse.json({
      fragrances: source.map((item) => ({
        id: item.slug,
        slug: item.slug,
        no: fragranceNumberLabel(item.sortOrder),
        name: item.name,
        notes: item.notes,
        desc: item.description,
        src: item.imageSrc,
        alt: item.imageAlt,
        sortOrder: item.sortOrder,
      })),
    });
  } catch (err) {
    console.error("[GET /api/signature-fragrances]", err);
    return NextResponse.json({
      fragrances: DEFAULT_SIGNATURE_FRAGRANCES.map((item) => ({
        id: item.slug,
        slug: item.slug,
        no: fragranceNumberLabel(item.sortOrder),
        name: item.name,
        notes: item.notes,
        desc: item.description,
        src: item.imageSrc,
        alt: item.imageAlt,
        sortOrder: item.sortOrder,
      })),
    });
  }
}
