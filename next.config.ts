import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES === "true" ? "/ibpe-landing-page" : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/ibpe-landing-page/" : "",
};

export default nextConfig;
