import Image from "next/image";
import { siteAssets } from "@/data/assets";

type BrandMarkProps = {
  size?: "compact" | "hero";
};

export function BrandMark({ size = "compact" }: BrandMarkProps) {
  const isHero = size === "hero";

  return (
    <div
      className={`brand-mark brand-mark--${size}`}
      aria-label="One More Stride"
      data-hero-brand={isHero ? "true" : undefined}
    >
      <Image
        src={isHero ? siteAssets.logo.hero : siteAssets.logo.compact}
        alt="One More Stride horse and woman emblem"
        width={isHero ? 300 : 90}
        height={isHero ? 200 : 60}
        priority={isHero}
      />
    </div>
  );
}
