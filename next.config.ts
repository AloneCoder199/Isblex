import withPWAInit from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

/** @type {import('next-pwa').PWAConfig} */
const pwaOptions = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: isDev,
  sw: "sw.js",
  scope: "/",
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: "CacheFirst" as const, // Fixed: Added 'as const'
      options: {
        cacheName: "google-fonts-cache",
        expiration: { maxEntries: 4, maxAgeSeconds: 365 * 24 * 60 * 60 },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst" as const, // Fixed: Added 'as const'
      options: {
        cacheName: "images-cache",
        expiration: { maxEntries: 64, maxAgeSeconds: 24 * 60 * 60 },
      },
    },
    {
      urlPattern: /\/_next\/static\/.*/i,
      handler: "CacheFirst" as const, // Fixed: Added 'as const'
      options: {
        cacheName: "next-static-cache",
        expiration: { maxEntries: 32, maxAgeSeconds: 24 * 60 * 60 },
      },
    },
  ],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone" as const, // Fixed: Added 'as const'
  images: {
    remotePatterns: [
      {
        protocol: "https" as const, // Fixed: Added 'as const'
        hostname: "**",
      },
    ],
  },
  experimental: {
    // Turbopack settings Next.js ke latest standards ke mutabiq
  },
};

const withPWA = withPWAInit(pwaOptions);

export default withPWA(nextConfig);
