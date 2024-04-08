/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.figma.com", port: "" },
      { protocol: "https", hostname: "images.ctfassets.net", port: "" },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
