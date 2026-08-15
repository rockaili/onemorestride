import Image from "next/image";
import { notFound } from "next/navigation";
import { horses } from "@/data/horses";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export function generateStaticParams() {
  return horses.map((horse) => ({ slug: horse.slug }));
}

export default async function HorseDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const horse = horses.find((item) => item.slug === slug);

  if (!horse) {
    notFound();
  }

  return (
    <PageShell>
      <main className="interior-page placeholder-detail">
        <section className="detail-split">
          <div className="detail-photo">
            <Image src={horse.image} alt={`${horse.name} the horse`} fill sizes="420px" />
          </div>
          <div>
            <SectionHeading title={horse.name} align="left" />
            <p className="detail-status">{horse.status}</p>
            <p>{horse.shortDescription}</p>
            <p>
              A fuller profile, care history and adoption notes can be added here
              when One More Stride is ready to publish each horse’s story.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
