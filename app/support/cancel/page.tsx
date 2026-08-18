import { Button } from "@/components/Buttons";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export default function SupportCancelPage() {
  return (
    <PageShell>
      <main className="interior-page support-result-page">
        <section className="support-result" data-reveal="section">
          <SectionHeading
            title="Your payment wasn’t completed."
            eyebrow="Support"
            align="left"
          />
          <p>
            No charge has been made. You can return to the support page whenever
            you’re ready.
          </p>
          <Button href="/support" variant="gold">
            Back to Support
          </Button>
        </section>
      </main>
    </PageShell>
  );
}
