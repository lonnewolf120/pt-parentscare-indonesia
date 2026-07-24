/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // NOTE: optimization is intentionally disabled; re-enabling changes
    // Vercel image-optimization billing, so it is a deployment decision.
    unoptimized: true,
  },
  // Enable compression
  compress: true,
  // Generate ETags for better caching
  generateEtags: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Canonical policy URLs. Kept here (not only in vercel.json) so the
  // redirects also apply to `next start` and any non-Vercel host.
  async redirects() {
    return [
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/terms', destination: '/terms-of-service', permanent: true },
      { source: '/tos', destination: '/terms-of-service', permanent: true },
    ]
  },
  // Custom headers for SEO and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
