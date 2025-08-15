import { MetadataRoute } from 'next'
import { teams, venues, cities, matches } from './data'
import { SITE_URL } from './lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  
  // Static routes with their priorities and change frequencies
  const staticRoutes: MetadataRoute.Sitemap = [
    // Home page - highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // Main navigation pages - high priority
    {
      url: `${baseUrl}/teams`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/venues`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tickets`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/matches`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    
    // Important informational pages
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/accommodation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitality`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // History and informational pages
    {
      url: `${baseUrl}/history`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Travel pages - important for tourists
    {
      url: `${baseUrl}/travel`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/travel/accommodation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/travel/getting-around`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/travel/visa`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/travel/essentials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/travel/from/uk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    
    // Ticket sub-pages - high commercial value
    {
      url: `${baseUrl}/tickets/prices`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tickets/final`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tickets/semi-finals`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    
    // Legal and policy pages
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Dynamic team pages
  const teamRoutes: MetadataRoute.Sitemap = teams.map((team) => ({
    url: `${baseUrl}/teams/${team.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Team schedule pages
  const teamScheduleRoutes: MetadataRoute.Sitemap = teams.map((team) => ({
    url: `${baseUrl}/schedule/${team.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Dynamic venue pages
  const venueRoutes: MetadataRoute.Sitemap = venues.map((venue) => ({
    url: `${baseUrl}/venues/${venue.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic city guide pages
  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/guide/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic match ticket pages
  const matchTicketRoutes: MetadataRoute.Sitemap = matches.map((match) => ({
    url: `${baseUrl}/tickets/${match.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.75,
  }))

  // Combine all routes (English only)
  const allRoutes = [
    ...staticRoutes,
    ...teamRoutes,
    ...teamScheduleRoutes,
    ...venueRoutes,
    ...cityRoutes,
    ...matchTicketRoutes,
  ]

  return allRoutes
}