import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export default function RescuePage() {
  return (
    <PageShell>
      <main className="interior-page branded-placeholder">
        <SectionHeading title="Rescue" />
        <p>
          This page is ready for One More Stride’s rescue process, intake notes
          and current needs.
        </p>
      </main>
    </PageShell>
  );
}
