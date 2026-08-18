import type Stripe from "stripe";
import type {
  HorseSponsorshipTier,
  MonthlySupportTier
} from "./checkoutRequests";
import { sponsorshipConfig } from "./sponsorships";

const currency = "eur";

type PriceConfig<TTier extends string> = {
  amount: number;
  priceId: string | undefined;
  tier: TTier;
};

export type SponsorshipConfig = {
  horseName: string;
  horseSlug: string;
  tiers: PriceConfig<HorseSponsorshipTier>[];
};

export const generalDonationPriceId = process.env.STRIPE_GENERAL_DONATION_PRICE_ID;

export const monthlySupportConfig: PriceConfig<MonthlySupportTier>[] = [
  {
    tier: "10",
    amount: 10,
    priceId: process.env.STRIPE_MONTHLY_SUPPORT_PRICE_10
  },
  {
    tier: "25",
    amount: 25,
    priceId: process.env.STRIPE_MONTHLY_SUPPORT_PRICE_25
  },
  {
    tier: "50",
    amount: 50,
    priceId: process.env.STRIPE_MONTHLY_SUPPORT_PRICE_50
  },
  {
    tier: "100",
    amount: 100,
    priceId: process.env.STRIPE_MONTHLY_SUPPORT_PRICE_100
  }
];

export function getBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function findMonthlySupportTier(tier: MonthlySupportTier) {
  return monthlySupportConfig.find((item) => item.tier === tier);
}

export function findSponsorshipTier(horseSlug: string, tier: HorseSponsorshipTier) {
  const sponsorship = sponsorshipConfig.find((item) => item.horseSlug === horseSlug);
  const price = sponsorship?.tiers.find((item) => item.tier === tier);

  if (!sponsorship || !price) {
    return undefined;
  }

  return { sponsorship, price };
}

export async function assertDonationPrice(stripe: Stripe, priceId: string) {
  const price = await stripe.prices.retrieve(priceId);

  if (price.currency !== currency || !price.custom_unit_amount) {
    throw new Error("General donation price must be an EUR customer-entered amount Price.");
  }

  if (price.custom_unit_amount.minimum !== 500) {
    throw new Error("General donation price must have a €5 minimum.");
  }
}

export async function assertMonthlyPrice(
  stripe: Stripe,
  priceId: string,
  amount: number
) {
  const price = await stripe.prices.retrieve(priceId);

  if (
    price.currency !== currency ||
    price.unit_amount !== amount * 100 ||
    price.recurring?.interval !== "month"
  ) {
    throw new Error("Monthly support price is not configured as the expected EUR monthly tier.");
  }
}
