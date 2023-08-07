/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "ui-avatars.com",
      "image.api.org",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
