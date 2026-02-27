/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/fonts/GlacialIndifference-Regular.otf",
        headers: [
          { key: "Content-Type", value: "font/otf" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/GlacialIndifference-Bold.otf",
        headers: [
          { key: "Content-Type", value: "font/otf" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
