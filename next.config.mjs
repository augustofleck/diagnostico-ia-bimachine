/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://d335luupugsy2.cloudfront.net https://vercel.live https://*.rdstation.com.br",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://d335luupugsy2.cloudfront.net https://vercel.live https://*.rdstation.com.br https://pageview-notify.rdstation.com.br https://popups.rdstation.com.br",
              "frame-src 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
