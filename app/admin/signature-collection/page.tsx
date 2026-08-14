import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminShell from "../components/AdminShell";
import CollectionManager from "./CollectionManager";
import { fragranceNumberLabel } from "@/lib/roman";

export default async function SignatureCollectionAdminPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const items = await prisma.signatureFragrance.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <AdminShell adminName={session.name}>
      <div className="space-y-6 max-w-[1200px]">
        <div>
          <h1 className="font-serif font-light text-[#E8E2D9] text-2xl md:text-3xl">
            Signature Collection
          </h1>
          <p className="text-[#EDE8DE] text-xs mt-1">
            Reorder the bottles as they appear on the site. Number I–IV follows
            the hierarchy you set here.
          </p>
        </div>

        <CollectionManager
          initial={items.map((item) => ({
            ...item,
            no: fragranceNumberLabel(item.sortOrder),
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
          }))}
        />
      </div>
    </AdminShell>
  );
}
