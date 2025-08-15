import { SITE_URL } from '../lib/constants'

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay to be respectful to server resources
Crawl-delay: 1

# Allow search engines to access all content
# Rugby World Cup 2027 is a public event and we want maximum visibility

# Optional: Block any admin or private areas if they exist in the future
# Disallow: /admin/
# Disallow: /api/private/

# Allow common crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Allow social media crawlers for better sharing
User-agent: WhatsApp
Allow: /

User-agent: Applebot
Allow: /
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  })
}