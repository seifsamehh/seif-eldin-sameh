/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});
module.exports = withPWA({
  // next.js config
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    appDir: true,
  },
});
