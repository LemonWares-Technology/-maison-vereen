import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { DEFAULT_SIGNATURE_FRAGRANCES } from "../lib/signatureFragrances";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const item of DEFAULT_SIGNATURE_FRAGRANCES) {
    await prisma.signatureFragrance.upsert({
      where: { slug: item.slug },
      update: {},
      create: {
        slug: item.slug,
        name: item.name,
        notes: item.notes,
        description: item.description,
        imageSrc: item.imageSrc,
        imageAlt: item.imageAlt,
        sortOrder: item.sortOrder,
        published: true,
      },
    });
  }

  console.log(
    "Signature Collection seeded:",
    DEFAULT_SIGNATURE_FRAGRANCES.map((item) => `${item.sortOrder}. ${item.name}`).join(", ")
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
