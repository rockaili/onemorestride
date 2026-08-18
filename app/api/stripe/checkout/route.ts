import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
  assertDonationPrice,
  assertMonthlyPrice,
  findMonthlySupportTier,
  findSponsorshipTier,
  generalDonationPriceId,
  getBaseUrl
} from "@/lib/stripe/checkoutConfig";
import {
  isHorseSponsorshipTier,
  isMonthlySupportTier,
  type CheckoutRequest
} from "@/lib/stripe/checkoutRequests";

export const runtime = "nodejs";

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Stripe is not configured.");
  }

  return new Stripe(secretKey);
}

function isCheckoutRequest(value: unknown): value is CheckoutRequest {
  if (!value || typeof value !== "object" || !("flow" in value)) {
    return false;
  }

  const request = value as Record<string, unknown>;

  if (request.flow === "general_donation") {
    return true;
  }

  if (request.flow === "monthly_support") {
    return isMonthlySupportTier(request.tier);
  }

  if (request.flow === "horse_sponsorship") {
    return typeof request.horseSlug === "string" && isHorseSponsorshipTier(request.tier);
  }

  return false;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid checkout request." }, { status: 400 });
  }

  if (!isCheckoutRequest(body)) {
    return NextResponse.json({ error: "Invalid checkout request." }, { status: 400 });
  }

  const stripe = getStripe();
  const baseUrl = getBaseUrl();
  const successUrl = `${baseUrl}/support/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${baseUrl}/support/cancel`;

  try {
    if (body.flow === "general_donation") {
      if (!generalDonationPriceId) {
        throw new Error("General donation price is not configured.");
      }

      await assertDonationPrice(stripe, generalDonationPriceId);

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "donate",
        line_items: [
          {
            price: generalDonationPriceId,
            quantity: 1
          }
        ],
        metadata: {
          type: "general_donation"
        },
        payment_intent_data: {
          metadata: {
            type: "general_donation"
          }
        },
        success_url: successUrl,
        cancel_url: cancelUrl
      });

      return NextResponse.json({ url: session.url });
    }

    if (body.flow === "monthly_support") {
      const tier = findMonthlySupportTier(body.tier);

      if (!tier?.priceId) {
        throw new Error("Monthly support price is not configured.");
      }

      await assertMonthlyPrice(stripe, tier.priceId, tier.amount);

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        submit_type: "donate",
        line_items: [
          {
            price: tier.priceId,
            quantity: 1
          }
        ],
        metadata: {
          type: "monthly_support",
          tier: tier.tier
        },
        subscription_data: {
          metadata: {
            type: "monthly_support",
            tier: tier.tier
          }
        },
        success_url: successUrl,
        cancel_url: cancelUrl
      });

      return NextResponse.json({ url: session.url });
    }

    const sponsorshipTier = findSponsorshipTier(body.horseSlug, body.tier);

    if (!sponsorshipTier?.price.priceId) {
      throw new Error("Horse sponsorship price is not configured.");
    }

    await assertMonthlyPrice(
      stripe,
      sponsorshipTier.price.priceId,
      sponsorshipTier.price.amount
    );

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      submit_type: "subscribe",
      line_items: [
        {
          price: sponsorshipTier.price.priceId,
          quantity: 1
        }
      ],
      metadata: {
        type: "horse_sponsorship",
        horse_slug: sponsorshipTier.sponsorship.horseSlug,
        horse_name: sponsorshipTier.sponsorship.horseName,
        tier: sponsorshipTier.price.tier
      },
      subscription_data: {
        metadata: {
          type: "horse_sponsorship",
          horse_slug: sponsorshipTier.sponsorship.horseSlug,
          horse_name: sponsorshipTier.sponsorship.horseName,
          tier: sponsorshipTier.price.tier
        }
      },
      success_url: successUrl,
      cancel_url: cancelUrl
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create checkout.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
