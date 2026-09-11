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
            Your support helps Laragh provide care, rehabilitation and a safer future
            for horses in need.
          </p>
          <p>
            Stripe will confirm everything before the payment is treated as
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
