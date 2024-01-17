/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGINE_SENDER_ID: process.env.MESSAGINE_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
  // env: {
  //   API_KEY: process.env.API_KEY,
  //   AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  //   PROJECT_ID: process.env.PROJECT_ID,
  //   STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  //   MESSAGINE_SENDER_ID: process.env.MESSAGINE_SENDER_ID,
  //   APP_ID: process.env.APP_ID,
  //   MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  // },
};

module.exports = nextConfig;
