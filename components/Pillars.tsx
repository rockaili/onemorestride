import Image from "next/image";
import Link from "next/link";
import { visibleSiteSections } from "@/config/site";
import { siteAssets } from "@/data/assets";
import { BrandLineIcon } from "./BrandLineIcons";

const pillars = [
  {
    title: "Rescue",
    copy: "Laragh takes in horses in need and gives them the care, time and love they deserve.",
    href: "/rescue",
    icon: "rescue",
    showLink: visibleSiteSections.rescue
  },
  {
    title: "Rehabilitate",
    copy: "Through expert care and gentle training, Laragh helps horses heal in body and mind.",
    href: "/rescue",
    icon: "care",
    showLink: visibleSiteSections.rescue
  },
  {
    title: "Train",
    copy: "Building trust and confidence so every horse can thrive in their next chapter.",
    href: "/training",
    icon: "train",
    showLink: visibleSiteSections.training
  }
] as const;

export function Pillars() {
  return (
    <section className="pillars" data-reveal="section">
      <Image
        className="botanical botanical--left"
        src={siteAssets.botanical.left}
        alt=""
        width={164}
        height={172}
        aria-hidden="true"
      />
      <Image
        className="botanical botanical--right"
        src={siteAssets.botanical.right}
        alt=""
        width={91}
        height={167}
        aria-hidden="true"
      />
      <div className="pillar-grid">
        {pillars.map((pillar) => {
          return (
            <article className="pillar" key={pillar.title} data-reveal="item">
              <BrandLineIcon variant={pillar.icon} size={42} />
              <h2>{pillar.title}</h2>
              <p>{pillar.copy}</p>
              {pillar.showLink ? (
                <Link href={pillar.href}>
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
