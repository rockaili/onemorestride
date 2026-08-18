import Image from "next/image";
import { siteAssets } from "@/data/assets";
import { CheckoutButton } from "./CheckoutButton";
import { BrandLineIcon } from "./BrandLineIcons";

const items = [
  { title: "Make a Difference", icon: "hoof-ripple" },
  { title: "Donate Today", icon: "hand-heart" },
  { title: "Visit & Volunteer", icon: "schedule-visit" }
] as const;

export function DonationSection() {
  return (
    <section className="donation-band" data-reveal="section">
      <div className="donation-photo" data-reveal="item">
        <Image
          src={siteAssets.photos.donation}
          alt="Brown horse in a stable"
          fill
          sizes="250px"
        />
      </div>
      <div className="donation-copy" data-reveal="item">
        <h2>Help Us Change Their Story</h2>
        <p>
          Your support helps provide vital veterinary care, feed, shelter and a
          safe haven for horses in need.
        </p>
        <CheckoutButton request={{ flow: "general_donation" }} variant="gold">
          Donate Today
        </CheckoutButton>
      </div>
      <div className="donation-actions">
        {items.map((item) => {
          return (
            <div className="donation-action" key={item.title} data-reveal="item">
              <BrandLineIcon variant={item.icon} size={38} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
