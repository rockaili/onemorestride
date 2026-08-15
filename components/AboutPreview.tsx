import Image from "next/image";
import { siteAssets } from "@/data/assets";
import { Button } from "./Buttons";
import { SectionHeading } from "./SectionHeading";

export function AboutPreview() {
  return (
    <main className="interior-page about-page">
      <section className="about-split" data-reveal="section">
        <div className="about-copy" data-reveal="item">
          <SectionHeading title="About Us" align="left" />
          <p>
            One More Stride is founded on a simple belief: every horse deserves
            kindness, patience and a chance.
          </p>
          <p>
            Based in Kildare, Ireland, we rescue horses in need, provide them
            with expert care and rehabilitation, and help them find brighter
            futures, together.
          </p>
          <Button href="/about" variant="olive">
            Our Story
          </Button>
        </div>
        <div className="about-photo" data-reveal="item">
          <Image
            src={siteAssets.photos.about}
            alt="Black horse standing in a paddock at sunrise"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
          />
        </div>
      </section>
    </main>
  );
}
