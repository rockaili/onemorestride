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

No runtime environment variables or secrets are required for the current site. Add environment values later through Cloudflare/Wrangler only when a real integration needs them.

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
