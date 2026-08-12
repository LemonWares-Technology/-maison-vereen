import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";
import { SendZeptomail } from "@/lib/zeptomail";
import {
  applicationApprovedEmail,
  applicationDeclinedEmail,
} from "@/lib/emailTemplates";

type Ctx = { params: Promise<{ id: string }> };

async function requireAdmin(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) return null;
  return admin;
}

// ── GET /api/applications/:id ─────────────────────────────────────────────────
export async function GET(req: NextRequest, { params }: Ctx) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await params;
  const app = await prisma.application.findUnique({ where: { id } });
  if (!app) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json(app);
}

// ── PATCH /api/applications/:id — update status / notes ──────────────────────
export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await params;
  const { status, notes } = await req.json();

  const valid = ["PENDING", "REVIEWING", "APPROVED", "REJECTED"];
  if (status && !valid.includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const existing = await prisma.application.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const updated = await prisma.application.update({
    where: { id },
    data: {
      ...(status !== undefined ? { status } : {}),
      ...(notes !== undefined ? { notes } : {}),
    },
  });

  // Batch 2 — applicant outcome email (only on first transition into that status)
  const becameApproved =
    status === "APPROVED" && existing.status !== "APPROVED";
  const becameRejected =
    status === "REJECTED" && existing.status !== "REJECTED";

  if (becameApproved || becameRejected) {
    try {
      if (becameApproved) {
        await SendZeptomail({
          toEmail: updated.email,
          toName: updated.name,
          subject: "Application Approved — Maison Vereen Edition I",
          htmlBody: applicationApprovedEmail(updated.name),
        });
      } else {
        await SendZeptomail({
          toEmail: updated.email,
          toName: updated.name,
          subject: "Application Update — Maison Vereen Edition I",
          htmlBody: applicationDeclinedEmail(updated.name),
        });
      }
    } catch (mailErr) {
      console.error(
        `[PATCH /api/applications/${id}] Failed to send applicant outcome email:`,
        mailErr
      );
    }
  }

  return NextResponse.json(updated);
}

// ── DELETE /api/applications/:id ──────────────────────────────────────────────
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await params;
  await prisma.application.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
