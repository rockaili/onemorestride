# Deployment

This project uses Next.js, TypeScript, App Router, Cloudflare Workers, and OpenNext. Do not convert it to static export or Cloudflare Pages.

## Local Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Run the standard Next.js production build:

```bash
npm run build
```

## Cloudflare Build Verification

Verify the Cloudflare Workers/OpenNext bundle:

```bash
npx opennextjs-cloudflare build
```

This should create `.open-next/worker.js` and `.open-next/assets`. Those outputs are generated and should not be committed.

Stripe donations use Stripe-hosted Checkout Sessions created by the server. Use sandbox keys and Price IDs locally, and production values only in production Cloudflare secrets/environment values:

```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_GENERAL_DONATION_PRICE_ID=price_...
STRIPE_MONTHLY_SUPPORT_PRICE_10=price_...
STRIPE_MONTHLY_SUPPORT_PRICE_25=price_...
STRIPE_MONTHLY_SUPPORT_PRICE_50=price_...
STRIPE_MONTHLY_SUPPORT_PRICE_100=price_...
STRIPE_SPONSORSHIP_CONTIGO_PRICE_15=price_...
STRIPE_SPONSORSHIP_CONTIGO_PRICE_30=price_...
STRIPE_SPONSORSHIP_CONTIGO_PRICE_50=price_...
```

The one-off donation Price must be configured in Stripe as EUR, customer-entered amount, with a €5 minimum. Monthly support and sponsorship values must be EUR monthly recurring Prices matching their configured tiers.

Set `STRIPE_SECRET_KEY` with Cloudflare/Wrangler secrets. Do not commit real key values.

Webhook fulfilment is intentionally not implemented yet. Future webhook handling will likely include:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `checkout.session.async_payment_failed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`

Do not treat `/support/success` as authoritative payment confirmation.

## Cloudflare Workers Deployment

Preview the Worker locally:

```bash
npm run preview:cloudflare
```

Deploy to Cloudflare Workers:

```bash
npm run deploy:cloudflare
```

Upload without deploying immediately:

```bash
npm run upload:cloudflare
```

The Worker deployment will report the deployed Worker route in the command output. A temporary `workers.dev` URL comes from the Cloudflare account and Worker name configured through Wrangler.

## GitHub Deployment Workflow

Recommended approach:

1. Push the repository to GitHub.
2. Configure Cloudflare Workers deployment from the repository or run Wrangler deployment from a CI workflow.
3. Use `npm ci`, `npm run build`, and `npx opennextjs-cloudflare build` as verification steps before deployment.
4. Deploy only from the approved production branch once the final domain, content, and assets are ready.

Do not assume the domain is active yet.

## Custom Domain Later

The domain `onemorestride.ie` will later be connected to Cloudflare. Configure both:

- `onemorestride.ie`
- `www.onemorestride.ie`

When attaching the website domain, do not delete existing DNS or mail records unless they are confirmed obsolete.

## Email

PurelyMail setup will later require account-specific DNS records:

- ownership TXT
- MX
- SPF
- DKIM
- optional DMARC

Do not fabricate ownership TXT or DKIM values. Use the exact values from PurelyMail when the account is ready.
