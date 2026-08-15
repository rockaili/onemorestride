import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteAssets } from "@/data/assets";
import { BrandLineIcon } from "./BrandLineIcons";
import { SectionHeading } from "./SectionHeading";

const ways = [
  {
    title: "Donate",
    copy: "Every donation helps provide essential care and support.",
    icon: "heart"
  },
  {
    title: "Sponsor a Horse",
    copy: "Sponsor a horse and be part of their journey.",
    icon: "sponsor"
  },
  {
    title: "Volunteer",
    copy: "Give your time and help make a real difference.",
    icon: "volunteer"
  },
  {
    title: "Visit & Support",
    copy: "Visit, learn, and support our mission in person.",
    icon: "calendar"
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
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.copy}</p>
                  </div>
                  <ArrowRight className="way-arrow" size={18} aria-hidden="true" />
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
