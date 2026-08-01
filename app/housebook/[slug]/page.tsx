// /housebook/[slug] → redirect to /journal/[slug]
import { redirect } from "next/navigation";

export default async function HousebookSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  redirect(`/journal/${resolvedParams.slug}`);
}
