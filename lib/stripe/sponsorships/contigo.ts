import type { SponsorshipConfig } from "../checkoutConfig";

export const contigoSponsorshipConfig: SponsorshipConfig = {
  horseSlug: "contigo",
  horseName: "Contigo",
  tiers: [
    {
      tier: "15",
      amount: 15,
      priceId: process.env.STRIPE_SPONSORSHIP_CONTIGO_PRICE_15
    },
    {
      tier: "30",
      amount: 30,
      priceId: process.env.STRIPE_SPONSORSHIP_CONTIGO_PRICE_30
    },
    {
      tier: "50",
      amount: 50,
      priceId: process.env.STRIPE_SPONSORSHIP_CONTIGO_PRICE_50
    }
  ]
};
