/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/demo/playoff',
        destination: 'https://memecoin-playoffs-feat.vercel.app/',
      },
    ];
  },
};

export default nextConfig;

