import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const DEFAULT_ADMIN_EMAIL = "apply@maisonvereen.com";
const DEFAULT_ADMIN_NAME = "Maison Vereen";
const DEFAULT_ADMIN_PASSWORD = "Admin@123";

export async function GET() {
  try {
    const hash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 12);

    const admin = await prisma.admin.upsert({
      where: { email: DEFAULT_ADMIN_EMAIL },
      update: {
        name: DEFAULT_ADMIN_NAME,
        password: hash,
      },
      create: {
        email: DEFAULT_ADMIN_EMAIL,
        name: DEFAULT_ADMIN_NAME,
        password: hash,
      },
      select: {
        email: true,
        name: true,
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Default admin account is ready.",
      admin,
      credentials: {
        email: DEFAULT_ADMIN_EMAIL,
        password: DEFAULT_ADMIN_PASSWORD,
      },
    });
  } catch (err) {
    console.error("[GET /api/admin/setup]", err);
    return NextResponse.json(
      { ok: false, error: "Failed to provision default admin account." },
      { status: 500 }
    );
  }
}

