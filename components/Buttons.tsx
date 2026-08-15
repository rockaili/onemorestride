import Link from "next/link";
import type { ReactNode } from "react";
import { HorseshoeIcon } from "./HorseshoeIcon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold" | "olive";
  accent?: boolean;
  showAccentIcon?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  accent = false,
  showAccentIcon = accent
}: ButtonProps) {
  return (
    <Link className={`button button--${variant}`} href={href}>
      <span>{children}</span>
      {showAccentIcon ? <HorseshoeIcon className="button-horseshoe" size={18} /> : null}
    </Link>
  );
}
