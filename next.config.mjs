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
        source: "/products/desination-reinvention-candice-denise",
        destination: "https://www.noma-collective-bookings.com/products/desination-reinvention-candice-denise",
        permanent: true,
        basePath: false,
      },
      {
        source: "/products/shuffle-dance-edition",
        destination: "https://www.noma-collective-bookings.com/products/shuffle-dance-edition",
        permanent: true,
        basePath: false,
      },
      {
        source: '/SocialImpact',
        destination: 'https://www.noma-collective-bookings.com/SocialImpact',
        permanent: true,
        basePath: false,
      }
    ];
  }
};

export default nextConfig;
