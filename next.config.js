/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/client-in-memory",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
