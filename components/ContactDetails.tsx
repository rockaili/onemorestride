import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteAssets } from "@/data/assets";
import { SectionHeading } from "./SectionHeading";

const contactItems = [
  { label: "+353 87 123 4567", icon: Phone },
  { label: "info@onemorestride.ie", href: "mailto:info@onemorestride.ie", icon: Mail },
  { label: "Kildare, Ireland", icon: MapPin }
];

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="M14.2 4.2v9.4a4.4 4.4 0 1 1-3.9-4.4v2.9a1.6 1.6 0 1 0 1.1 1.5V2.8h2.8c.4 2.4 1.8 3.8 4.3 4.2v2.9a7.3 7.3 0 0 1-4.3-1.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function ContactDetails() {
  return (
    <main className="interior-page contact-page">
      <section className="contact-panel" data-reveal="section">
        <div data-reveal="item">
          <SectionHeading title="Contact Us" eyebrow="Home / Contact" align="left" />
          <p className="contact-note">We’d love to hear from you.</p>
          <ul className="contact-list">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <Icon size={18} aria-hidden="true" />
                  {"href" in item ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                </li>
              );
            })}
          </ul>
          <h2>Follow Us</h2>
          <div className="socials" aria-label="Social profiles">
            <a
              href="https://www.facebook.com/onemorestride"
              aria-label="One More Stride on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/onemorestride.ie"
              aria-label="One More Stride on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@onemorestride.ie"
              aria-label="One More Stride on TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>
        <Image
          className="contact-botanical"
          src={siteAssets.botanical.contact}
          alt=""
          width={66}
          height={205}
          aria-hidden="true"
        />
      </section>
    </main>
  );
}
