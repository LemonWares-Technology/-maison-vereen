import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminShell from "../components/AdminShell";
import EnquiriesTable from "./EnquiriesTable";

interface SearchParams {
  page?: string;
  status?: string;
  search?: string;
}

export default async function FragranceEnquiriesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const sp = await searchParams;
  const page   = Math.max(1, Number(sp.page ?? 1));
  const limit  = 20;
  const status = sp.status as "NEW" | "CONTACTED" | "COMPLETED" | undefined;
  const search = sp.search?.trim() ?? "";
  const skip   = (page - 1) * limit;

  const where = {
    ...(status ? { status } : {}),
    ...(search ? {
      OR: [
        { name:      { contains: search, mode: "insensitive" as const } },
        { email:     { contains: search, mode: "insensitive" as const } },
        { fragrance: { contains: search, mode: "insensitive" as const } },
      ],
    } : {}),
  };

  const [enquiries, total] = await Promise.all([
    prisma.fragranceEnquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.fragranceEnquiry.count({ where }),
  ]);

  return (
    <AdminShell adminName={session.name}>
      <div className="space-y-6 max-w-[1200px]">
        <div>
          <h1 className="font-serif font-light text-[#E8E2D9] text-2xl md:text-3xl">
            Fragrance Enquiries
          </h1>
          <p className="text-[#5A5449] text-xs mt-1">
            {total} total enquir{total !== 1 ? "ies" : "y"} — Signature Collection
          </p>
        </div>

        <EnquiriesTable
          enquiries={JSON.parse(JSON.stringify(enquiries))}
          pagination={{ total, page, limit, pages: Math.ceil(total / limit) }}
          currentSearch={search}
          currentStatus={status ?? ""}
        />
      </div>
    </AdminShell>
  );
}
