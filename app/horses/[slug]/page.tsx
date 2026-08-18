import { notFound } from "next/navigation";
import { findHorseBySlug, horses } from "@/data/horses";
import { HorseProfile } from "@/components/horses/HorseProfile";
import { PageShell } from "@/components/PageShell";

export function generateStaticParams() {
  return horses.map((horse) => ({ slug: horse.slug }));
}

export default async function HorseDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const horse = findHorseBySlug(slug);

  if (!horse) {
    notFound();
  }

  return (
    <PageShell>
      <main className="interior-page placeholder-detail">
        <HorseProfile horse={horse} />
      </main>
    </PageShell>
  );
}
