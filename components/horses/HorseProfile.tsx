import Image from "next/image";
import { visibleSiteSections } from "@/config/site";
import type { Horse } from "@/data/horses";
import { HorseSponsorshipOptions } from "@/components/CheckoutTierOptions";
import { SectionHeading } from "@/components/SectionHeading";

export function HorseProfile({ horse }: { horse: Horse }) {
  return (
    <section className="detail-split">
      <div className="detail-photo">
        <Image
          src={horse.image}
          alt={`${horse.name} the horse`}
          fill
          sizes="420px"
          style={horse.imagePosition ? { objectPosition: horse.imagePosition } : undefined}
        />
      </div>
      <div>
        <div className="detail-intro">
          <SectionHeading title={horse.name} />
          {visibleSiteSections.stripeDonations ? (
            <div className="detail-sponsorship">
              <h2>Sponsor This Horse</h2>
              <HorseSponsorshipOptions
                horseSlug={horse.slug}
                tiers={[
                  { tier: "15", amount: 15 },
                  { tier: "30", amount: 30 },
                  { tier: "50", amount: 50 }
                ]}
              />
            </div>
          ) : null}
        </div>
        <p className="detail-status">{horse.status}</p>
        <p>{horse.shortDescription}</p>
        <div className="detail-story">
          {horse.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
