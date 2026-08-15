import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export default function BlogPage() {
  return (
    <PageShell>
      <main className="interior-page branded-placeholder">
        <SectionHeading title="Blog" />
        <p>
          Updates, stories and educational posts can live here when the first
          articles are ready.
        </p>
      </main>
    </PageShell>
  );
}
