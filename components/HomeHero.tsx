import Image from "next/image";
import { siteAssets } from "@/data/assets";
import { BrandMark } from "./BrandMark";
import { Button } from "./Buttons";
import { CheckoutButton } from "./CheckoutButton";
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
          <CheckoutButton request={{ flow: "general_donation" }}>
            Support Our Rescue
          </CheckoutButton>
          <Button href="/horses" variant="secondary">
            Meet Our Horses
          </Button>
        </div>
      </div>
      <div className="hero-image" data-reveal="hero-image">
        <Image
          src={siteAssets.photos.hero}
          alt="A woman standing close to a white horse in warm light"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="torn-paper" aria-hidden="true" />
    </section>
  );
}
