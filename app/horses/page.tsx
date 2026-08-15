import { HorseCarousel } from "@/components/HorseCarousel";
import { PageShell } from "@/components/PageShell";

export default function HorsesPage() {
  return (
    <PageShell>
      <main className="interior-page">
        <HorseCarousel />
      </main>
    </PageShell>
  );
}
