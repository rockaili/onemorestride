"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { CheckoutRequest } from "@/lib/stripe/checkoutRequests";
import { HorseshoeIcon } from "./HorseshoeIcon";

type CheckoutButtonProps = {
  children: ReactNode;
  request: CheckoutRequest;
  variant?: "primary" | "secondary" | "gold" | "olive";
  showAccentIcon?: boolean;
  className?: string;
};

export function CheckoutButton({
  children,
  request,
  variant = "primary",
  showAccentIcon = false,
  className = ""
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      });
      const data = (await response.json()) as { error?: string; url?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout could not be started.");
      }

      window.location.assign(data.url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Checkout could not be started."
      );
      setLoading(false);
    }
  }

  return (
    <span className="checkout-control">
      <button
        className={`button button--${variant} ${className}`.trim()}
        disabled={loading}
        onClick={startCheckout}
        type="button"
      >
        <span>{loading ? "Opening Checkout..." : children}</span>
        {showAccentIcon ? <HorseshoeIcon className="button-horseshoe" size={18} /> : null}
      </button>
      {error ? <span className="checkout-error">{error}</span> : null}
    </span>
  );
}
