/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.figma.com", port: "" },
      { protocol: "https", hostname: "images.ctfassets.net", port: "" },
    ],
  },
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/products/:path*",
        destination: "https://www.noma-collective-bookings.com/products/:path*",
        permanent: true,
        basePath: false,
      },
      {
        source: "/SocialImpact",
        destination: "https://www.noma-collective-bookings.com/SocialImpact",
        permanent: true,
        basePath: false,
      },
      {
        source: "/socialimpact",
        destination: "https://www.noma-collective-bookings.com/SocialImpact",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
