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
        source: "/tours/rio-and-the-green-coast-7-days",
        destination: "/tours/rio",
        permanent: true,
      },
      {
        source: "/tours/bahia-deep-dive-9-days",
        destination: "/tours/bahia",
        permanent: true,
      },
      {
        source: "/tours/amazon-immersion-6-days",
        destination: "/tours/amazon",
        permanent: true,
      },
      {
        source: "/tours/pantanal-wildlife-8-days",
        destination: "/tours/pantanal",
        permanent: true,
      },
      {
        source: "/tours/jalapao-expedition-7-days",
        destination: "/tours/jalapao",
        permanent: true,
      },
      {
        source: "/tours/foz-iguacu-extended-5-days",
        destination: "/tours/foz",
        permanent: true,
      },
      {
        source: "/tours/fernando-de-noronha-7-days",
        destination: "/tours/noronha",
        permanent: true,
      },
      {
        source: "/tours/noronha-escape-5-days",
        destination: "/tours/noronha",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
