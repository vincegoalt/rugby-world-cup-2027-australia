# Rugby World Cup 2027 Australia - Project Context

## Event Information
- **Tournament**: Rugby World Cup 2027 in Australia
- **Dates**: October-November 2027
- **Host Cities**: Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Newcastle, Townsville

## Content Categories
- Rugby World Cup 2027 Tickets (with CTAs to goaltickets.com)
- Complete Match Schedule & Fixtures
- Team Profiles (all 20 qualifying nations)
- Venue Guides (all 8-10 stadiums)
- City Travel Guides
- Accommodation Guides
- Transportation Between Cities
- Fan Zones & Events
- Rugby World Cup History
- Qualification Tracker
- Match Predictions & Analysis
- Ticket Buying Guides
- Best Seats at Each Stadium
- Group Stage Analysis
- Knockout Stage Predictions

## Languages
- English
- French
- Spanish
- Japanese

## Locations
All host cities: Adelaide, Brisbane, Melbourne, Newcastle, Perth, Sydney, Townsville

## Affiliate Details
- **Primary Partner**: goaltickets.com
- **Disclosure**: "We are an independent guide. Tickets purchased through our partner GoalTickets may earn us a commission."
- **CTAs**: "Check Ticket Availability", "View Prices on GoalTickets", "Secure Your Seats"

## Development Approach
- SEO-optimized event website generator
- Use Docker for environment consistency
- Deploy to Vercel using Vercel CLI and MCP
- Must build locally successfully (npm run build)
- Comprehensive sitemap.xml with proper priority values

## Image Sourcing Workflow
1. Search for images:
```bash
curl "https://s.jina.ai/?q=rugby+world+cup+stadium" \
  -H "Authorization: Bearer jina_d4df6cc0cfbd4f598a41db31fcd8c8f7eddA1xUf25KgtbThBltyr16zvheN" \
  -H "X-Respond-With: no-content" \
  -H "X-Site: https://unsplash.com"
```

2. Scrape specific page:
```bash
curl "https://r.jina.ai/<replace-with-url-from-s.jina-search>" \
  -H "Authorization: Bearer jina_d4df6cc0cfbd4f598a41db31fcd8c8f7eddA1xUf25KgtbThBltyr16zvheN"
```

## Project Creation Command
```bash
$env:CI="true"; npx create-next-app@14.2.23 rugby-australia-2027 --tailwind --no-src --typescript --app --no-eslint --use-npm
```

## Key Requirements
1. Static generation for all pages
2. ISR for quick rebuilds
3. Mobile-first responsive design
4. Professional color scheme (green/gold for Australia)
5. 500+ SEO-optimized pages
6. Multi-language support
7. Schema markup for Events, FAQs, How-tos
8. Affiliate integration with sticky CTAs
9. Interactive elements and smooth animations
10. TypeScript strict mode