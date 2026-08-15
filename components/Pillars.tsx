import Image from "next/image";
import Link from "next/link";
import { siteAssets } from "@/data/assets";
import { BrandLineIcon } from "./BrandLineIcons";

const pillars = [
  {
    title: "Rescue",
    copy: "We take in horses in need and give them the care, time and love they deserve.",
    href: "/rescue",
    icon: "rescue"
  },
  {
    title: "Rehabilitate",
    copy: "Through expert care and gentle training, we help horses heal in body and mind.",
    href: "/rescue",
    icon: "care"
  },
  {
    title: "Train",
    copy: "Building trust and confidence so every horse can thrive in their next chapter.",
    href: "/training",
    icon: "train"
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
              <Link href={pillar.href}>
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
