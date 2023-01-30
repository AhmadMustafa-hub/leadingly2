/** @type {import('next').NextConfig} */
const { withGlobalCss } = require("next-global-css");

const withConfig = withGlobalCss();

const nextConfig = withConfig({
  reactStrictMode: true,
  images: {
    // Next and its built-in can only access images from this list of domains (to protect the app from malicious users)
    // With an image from another domain we can't use Next built-in image optimization API (https://nextjs.org/docs/basic-features/image-optimization#domains)
    loader: "default",
    domains: ["localhost"]
  },
});

module.exports = nextConfig;
