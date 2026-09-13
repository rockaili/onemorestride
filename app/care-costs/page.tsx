import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { transparencyBills } from "@/data/bills";

export const metadata: Metadata = {
  title: "Care Costs | One More Stride",
  description:
    "Recent care bills shared by One More Stride so supporters can see what donations help cover."
};

export default function CareCostsPage() {
  const total = transparencyBills.reduce((sum, bill) => {
    const amount = Number(bill.amount.replace(/[^0-9.]/g, ""));
    return sum + (Number.isFinite(amount) ? amount : 0);
  }, 0);

  return (
    <PageShell>
      <main className="interior-page transparency-page">
        <section className="transparency-hero" data-reveal="section">
          <div className="transparency-hero__copy" data-reveal="item">
            <SectionHeading title="Care Costs" eyebrow="Home / Care Costs" align="left" />
            <p>
              Donations help cover real care costs for the horses. This page shares
              selected recent bills in plain language, with sensitive personal address
              details blurred where needed.
            </p>
          </div>
          <div className="transparency-summary" data-reveal="item" aria-label="Bills summary">
            <div>
              <span>Recent bills shared</span>
              <strong>{transparencyBills.length}</strong>
            </div>
            <div>
              <span>Total shown</span>
              <strong>
                {new Intl.NumberFormat("en-IE", {
                  style: "currency",
                  currency: "EUR"
                }).format(total)}
              </strong>
            </div>
          </div>
        </section>

        <section className="bill-ledger" aria-label="Recent care bills">
          {transparencyBills.map((bill) => {
            return (
              <article className="bill-record" key={`${bill.date}-${bill.title}`} data-reveal="item">
                <div className="bill-record__previews">
                  {bill.images.map((image) => (
                    <Link
                      className="bill-record__preview"
                      href={image.src}
                      key={image.src}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 760px) 45vw, 180px"
                      />
                    </Link>
                  ))}
                </div>
                <div className="bill-record__content">
                  <div className="bill-record__meta">
                    <span>{bill.date}</span>
                    <span>{bill.category}</span>
                    <span>{bill.horses}</span>
                  </div>
                  <h2>{bill.title}</h2>
                  <p>{bill.description}</p>
                  <div className="bill-record__links">
                    {bill.images.map((image) => (
                      <Link
                        className="bill-record__link"
                        href={image.src}
                        key={image.src}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {image.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <strong className="bill-record__amount">{bill.amount}</strong>
              </article>
            );
          })}
        </section>
      </main>
    </PageShell>
  );
}
