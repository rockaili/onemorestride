import { CheckoutButton } from "./CheckoutButton";
import type {
  HorseSponsorshipTier,
  MonthlySupportTier
} from "@/lib/stripe/checkoutRequests";

type TierOption<TTier extends string> = {
  amount: number;
  tier: TTier;
};

export function MonthlySupportOptions({
  tiers
}: {
  tiers: TierOption<MonthlySupportTier>[];
}) {
  return (
    <div className="tier-options" aria-label="Monthly support tiers">
      {tiers.map((tier) => {
        return (
          <CheckoutButton
            className="tier-button"
            key={tier.tier}
            request={{ flow: "monthly_support", tier: tier.tier }}
            variant="secondary"
          >
            €{tier.amount}/mo
          </CheckoutButton>
        );
      })}
    </div>
  );
}

export function HorseSponsorshipOptions({
  horseSlug,
  tiers
}: {
  horseSlug: string;
  tiers: TierOption<HorseSponsorshipTier>[];
}) {
  return (
    <div className="tier-options" aria-label="Horse sponsorship tiers">
      {tiers.map((tier) => {
        return (
          <CheckoutButton
            className="tier-button"
            key={tier.tier}
            request={{ flow: "horse_sponsorship", horseSlug, tier: tier.tier }}
            variant="gold"
          >
            €{tier.amount}/mo
          </CheckoutButton>
        );
      })}
    </div>
  );
}
