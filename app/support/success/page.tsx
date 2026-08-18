import { Button } from "@/components/Buttons";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export default function SupportSuccessPage() {
  return (
    <PageShell>
      <main className="interior-page support-result-page">
        <section className="support-result" data-reveal="section">
          <SectionHeading
            title="Thank you for supporting One More Stride."
            eyebrow="Support"
            align="left"
          />
          <p>
            Your support helps us provide care, rehabilitation and a safer future
            for horses in need.
          </p>
          <p>
            We’ll confirm everything through Stripe before treating the payment as
            complete.
          </p>
          <Button href="/support" variant="gold">
            Back to Support
          </Button>
        </section>
      </main>
    </PageShell>
  );
}
