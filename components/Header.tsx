"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteAssets } from "@/data/assets";
import { Button } from "./Buttons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rescue", label: "Rescue" },
  { href: "/training", label: "Training" },
  { href: "/horses", label: "Our Horses" },
  { href: "/support", label: "Ways to Help" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
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
          width={86}
          height={86}
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
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary">
        {navItems.map((item) => {
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
        <Button href="/support" accent>
          Donate
        </Button>
      </nav>
    </header>
  );
}
