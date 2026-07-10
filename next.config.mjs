/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "braziloffscript.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/tours/noronha-escape-5-days",
        destination: "/tours/fernando-de-noronha-7-days",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
