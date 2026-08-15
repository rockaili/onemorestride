import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import { siteAssets } from "@/data/assets";
import { SectionHeading } from "./SectionHeading";

const contactItems = [
  { label: "+353 87 123 4567", icon: Phone },
  { label: "info@onemorestride.ie", icon: Mail },
  { label: "Kildare, Ireland", icon: MapPin }
];

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
                  <span>{item.label}</span>
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
            <span role="img" aria-label="TikTok"><Music2 size={18} /></span>
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
