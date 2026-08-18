import Image from "next/image";
import { siteAssets } from "@/data/assets";
import { Button } from "./Buttons";
import { CheckoutButton } from "./CheckoutButton";
import { MonthlySupportOptions } from "./CheckoutTierOptions";
import { BrandLineIcon } from "./BrandLineIcons";
import { SectionHeading } from "./SectionHeading";

const ways = [
  {
    title: "Donate",
    copy: "Every donation helps provide essential care and support.",
    icon: "donate",
    action: "donate"
  },
  {
    title: "Give Monthly",
    copy: "Set up recurring support for steady care all year.",
    icon: "calendar-grid",
    action: "monthly"
  },
  {
    title: "Sponsor a Horse",
    copy: "Choose a horse and be part of their journey.",
    icon: "sponsor",
    action: "sponsor",
    href: "/horses"
  },
  {
    title: "Volunteer",
    copy: "Give your time and help make a real difference.",
    icon: "volunteer",
    action: "volunteer",
    href: "/contact"
  }
] as const;

export function WaysToHelp() {
  return (
    <main className="interior-page ways-page">
      <section className="ways-grid" data-reveal="section">
        <div data-reveal="item">
          <SectionHeading title="Ways to Help" eyebrow="Home / Ways to Help" align="left" />
          <div className="ways-list">
            {ways.map((item) => {
              return (
                <article className="way-item" key={item.title} data-reveal="item">
                  <span className="way-icon">
                    <BrandLineIcon variant={item.icon} size={24} />
                  </span>
                  <div className="way-content">
                    <h2>{item.title}</h2>
                    <p>{item.copy}</p>
                    {item.action === "donate" ? (
                      <div className="way-actions">
                        <CheckoutButton
                          request={{ flow: "general_donation" }}
                          variant="gold"
                        >
                          Donate
                        </CheckoutButton>
                      </div>
                    ) : null}
                    {item.action === "monthly" ? (
                      <div className="way-actions">
                        <MonthlySupportOptions
                          tiers={[
                            { tier: "10", amount: 10 },
                            { tier: "25", amount: 25 },
                            { tier: "50", amount: 50 },
                            { tier: "100", amount: 100 }
                          ]}
                        />
                      </div>
                    ) : null}
                    {item.action === "sponsor" ? (
                      <div className="way-actions">
                        <Button href={item.href} variant="gold">
                          Meet The Horses
                        </Button>
                      </div>
                    ) : null}
                    {item.action === "volunteer" ? (
                      <div className="way-actions">
                        <Button href={item.href} variant="secondary">
                          Contact Us
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="ways-photo" data-reveal="item">
          <Image
            src={siteAssets.photos.waysToHelp}
            alt="A One More Stride volunteer beside a white horse"
            fill
            sizes="(max-width: 760px) 100vw, 34vw"
          />
        </div>
      </section>
    </main>
  );
}
