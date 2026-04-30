/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  async headers() {
    // Content-Security-Policy — covers all known external sources used by the site:
    //   • Google Fonts (styles + fonts)
    //   • Supabase (API, storage, realtime WebSocket)
    //   • YouTube / YouTube-nocookie (gallery iframe embeds)
    // NOTE: unsafe-inline is required for Next.js 14 inline styles (framer-motion,
    //       CSS modules). Tighten to nonce-based CSP post-launch if desired.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      [
        "img-src 'self' data: blob:",
        'https://*.supabase.co',
        'https://images.unsplash.com',
        'https://via.placeholder.com',
        'https://*.facebook.com',
        'https://*.fbcdn.net',
      ].join(' '),
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.facebook.com https://www.google.com",
      [
        "connect-src 'self'",
        'https://*.supabase.co',
        'wss://*.supabase.co',
        'https://www.facebook.com',
        'https://*.facebook.com',
      ].join(' '),
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self' https://www.anantasystems.com.au/",
      "upgrade-insecure-requests",
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          // Security: added CSP and HSTS (were absent before this audit)
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Pre-existing headers (X-Frame-Options removed in favor of CSP frame-ancestors)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
