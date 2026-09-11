import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;

if (process.env.NODE_ENV === "development" && process.env.NEXT_DEV_SERVER_ONLY !== "1") {
  initOpenNextCloudflareForDev();
}
