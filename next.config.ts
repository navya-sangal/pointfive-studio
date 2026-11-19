import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/`, which Cloudflare Pages serves as-is.
  output: "export",
  images: {
    // There's no image server on a static host. Photos are pre-sized WebP files in /public/work.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
