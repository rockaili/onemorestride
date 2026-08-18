export const monthlySupportTiers = ["10", "25", "50", "100"] as const;
export type MonthlySupportTier = (typeof monthlySupportTiers)[number];

export const horseSponsorshipTiers = ["15", "30", "50"] as const;
export type HorseSponsorshipTier = (typeof horseSponsorshipTiers)[number];

export type CheckoutRequest =
  | {
      flow: "general_donation";
    }
  | {
      flow: "monthly_support";
      tier: MonthlySupportTier;
    }
  | {
      flow: "horse_sponsorship";
      horseSlug: string;
      tier: HorseSponsorshipTier;
    };

export function isMonthlySupportTier(value: unknown): value is MonthlySupportTier {
  return typeof value === "string" && monthlySupportTiers.includes(value as MonthlySupportTier);
}

export function isHorseSponsorshipTier(value: unknown): value is HorseSponsorshipTier {
  return (
    typeof value === "string" &&
    horseSponsorshipTiers.includes(value as HorseSponsorshipTier)
  );
}
