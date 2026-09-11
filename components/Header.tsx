"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { goFundMeDonationUrl, visibleSiteSections } from "@/config/site";
import { siteAssets } from "@/data/assets";
import { Button } from "./Buttons";

const navItems = [
  { href: "/", label: "Home", visible: true },
  { href: "/about", label: "About", visible: true },
  { href: "/rescue", label: "Rescue", visible: visibleSiteSections.rescue },
  { href: "/training", label: "Training", visible: visibleSiteSections.training },
  { href: "/horses", label: "The Horses", visible: true },
  { href: "/support", label: "Ways to Help", visible: true },
  { href: "/blog", label: "Blog", visible: visibleSiteSections.blog },
  { href: "/contact", label: "Contact", visible: true }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showHeaderLogo, setShowHeaderLogo] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setShowHeaderLogo(true);
      return;
    }

    const heroBrand = document.querySelector("[data-hero-brand='true']");

    if (!heroBrand) {
      setShowHeaderLogo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeaderLogo(!entry.isIntersecting);
      },
      {
        rootMargin: "-98px 0px 0px 0px",
        threshold: 0
      }
    );

    observer.observe(heroBrand);

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header">
      <Link
        className={`nav-logo ${showHeaderLogo ? "is-visible" : "is-hidden"}`}
        href="/"
        aria-label="One More Stride home"
        aria-hidden={!showHeaderLogo}
        tabIndex={showHeaderLogo ? undefined : -1}
      >
        <Image
          src={siteAssets.logo.compact}
          alt="One More Stride emblem"
          width={90}
          height={60}
          priority
        />
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={open ? "menu-icon menu-icon--close" : "menu-icon"} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary">
        {navItems.filter((item) => item.visible).map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <Button href={goFundMeDonationUrl} showAccentIcon>
          Donate
        </Button>
      </nav>
    </header>
  );
}
