/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security: Server information hide karna professional practice hai
  poweredByHeader: false,
  
  // Performance: Images ke liye optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ledokyptteebmpdyhtjv.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Branding ke liye sizes optimize karna
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimization for faster build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;