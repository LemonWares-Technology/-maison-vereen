// /journal/[slug] → redirect to /housebook/[slug]
import { redirect } from "next/navigation";

export default async function JournalSlugRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  redirect(`/housebook/${resolvedParams.slug}`);
}
