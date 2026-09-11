import Image from "next/image";
import { goFundMeDonationUrl } from "@/config/site";
import { siteAssets } from "@/data/assets";
import { BrandMark } from "./BrandMark";
import { Button } from "./Buttons";
import { HorseshoeDivider } from "./SectionHeading";

export function HomeHero() {
  return (
    <section className="hero" data-reveal="hero">
      <div className="hero-copy" data-reveal="hero-copy">
        <BrandMark size="hero" />
        <h1 aria-label="One More Stride">
          <span className="hero-title-word" aria-hidden="true">
            <span className="hero-title-initial">O</span>ne
          </span>
          <span className="hero-title-word" aria-hidden="true">
            <span className="hero-title-initial">M</span>ore
          </span>
          <span className="hero-title-word" aria-hidden="true">
            <span className="hero-title-initial">S</span>tride
          </span>
        </h1>
        <p className="location">Kildare, Ireland</p>
        <HorseshoeDivider />
        <p className="supporting">Rescue. Rehabilitate. Transform lives.</p>
        <p className="script-line">Every horse deserves one more stride.</p>
        <div className="hero-actions">
          <Button href={goFundMeDonationUrl}>
            Support The Rescue
          </Button>
          <Button href="/horses" variant="secondary">
            Meet The Horses
          </Button>
        </div>
      </div>
      <div className="hero-image" data-reveal="hero-image">
        <Image
          src={siteAssets.photos.hero}
          alt="Laragh standing beside a brown horse"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="torn-paper" aria-hidden="true" />
    </section>
  );
}
