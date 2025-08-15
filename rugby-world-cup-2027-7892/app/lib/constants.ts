import { Language } from '../types';

// Tournament Configuration
export const TOURNAMENT_START_DATE = '2027-10-01';
export const TOURNAMENT_END_DATE = '2027-11-13';
export const POOL_STAGE_END_DATE = '2027-10-24';
export const KNOCKOUT_STAGE_START_DATE = '2027-10-25';

// Site Configuration
export const SITE_NAME = 'Rugby World Cup 2027 Australia';
export const SITE_DESCRIPTION = 'Official information for the Rugby World Cup 2027 in Australia - the first ever 24-team tournament. Get tickets, match schedules, team information, and venue details for all 7 host cities.';
export const SITE_URL = 'https://rugbyaustralia2027.com';
export const METADATA_BASE = 'https://rugbyaustralia2027.com';

// Affiliate Configuration
export const AFFILIATE_URL = 'https://goaltickets.com/collections/rugby-world-cup-2027-tickets';
export const TICKET_AFFILIATE_ID = 'rwc2027';

// Supported Languages
export const LANGUAGES: Language[] = ['en', 'fr', 'es', 'ja'];
export const DEFAULT_LANGUAGE: Language = 'en';

// Language Names
export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  ja: '日本語'
};

// SEO Configuration
export const DEFAULT_META_TITLE = SITE_NAME;
export const DEFAULT_META_DESCRIPTION = SITE_DESCRIPTION;
export const DEFAULT_OG_IMAGE = '/images/og-image.jpg';

// Match Time Configuration
export const TIMEZONE = 'Australia/Sydney';
export const TIME_FORMAT = 'HH:mm';
export const DATE_FORMAT = 'dd MMM yyyy';
export const DATETIME_FORMAT = 'dd MMM yyyy, HH:mm';

// Pool Groups - 6 pools for 24 teams
export const POOL_GROUPS = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

// Match Stages
export const MATCH_STAGES = [
  'pool',
  'round-16', 
  'quarter-final',
  'semi-final',
  'bronze-final',
  'final'
] as const;

export const STAGE_NAMES: Record<typeof MATCH_STAGES[number], string> = {
  'pool': 'Pool Stage',
  'round-16': 'Round of 16',
  'quarter-final': 'Quarter Finals',
  'semi-final': 'Semi Finals',
  'bronze-final': 'Bronze Final',
  'final': 'Final'
};

// Team Configuration - First 24-team Rugby World Cup
export const TOTAL_TEAMS = 24;
export const TEAMS_PER_GROUP = 4;

// Venue Configuration - 7 host cities
export const TOTAL_VENUES = 7;
export const HOST_CITIES = 7;

// Social Media
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/rugbyworldcup',
  facebook: 'https://facebook.com/rugbyworldcup',
  instagram: 'https://instagram.com/rugbyworldcup',
  youtube: 'https://youtube.com/rugbyworldcup'
};

// API Configuration
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.rugbyworldcup2027.com'
  : 'http://localhost:3000/api';

// Cache Configuration
export const CACHE_DURATION = {
  STATIC: 86400, // 24 hours
  DYNAMIC: 300,  // 5 minutes
  LIVE: 30       // 30 seconds during matches
};

// Image Configuration
export const IMAGE_SIZES = {
  TEAM_FLAG: { width: 32, height: 32 },
  VENUE_THUMBNAIL: { width: 400, height: 225 },
  VENUE_HERO: { width: 1200, height: 675 },
  CITY_THUMBNAIL: { width: 300, height: 200 },
  CITY_HERO: { width: 1200, height: 400 }
};

// Navigation
export const MAIN_NAVIGATION = [
  { href: '/', label: 'Home', translationKey: 'nav.home' },
  { href: '/schedule', label: 'Schedule', translationKey: 'nav.schedule' },
  { href: '/teams', label: 'Teams', translationKey: 'nav.teams' },
  { href: '/venues', label: 'Venues', translationKey: 'nav.venues' },
  { href: '/guide', label: 'Guide', translationKey: 'nav.guide' },
  { href: '/tickets', label: 'Tickets', translationKey: 'nav.tickets' }
];

export const FOOTER_LINKS = {
  tournament: [
    { href: '/about', label: 'About RWC 2027', translationKey: 'footer.about' },
    { href: '/news', label: 'News', translationKey: 'footer.news' },
    { href: '/legacy', label: 'Tournament Legacy', translationKey: 'footer.legacy' }
  ],
  practical: [
    { href: '/travel', label: 'Travel Info', translationKey: 'footer.travel' },
    { href: '/accommodation', label: 'Accommodation', translationKey: 'footer.accommodation' },
    { href: '/transport', label: 'Transport', translationKey: 'footer.transport' }
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy', translationKey: 'footer.privacy' },
    { href: '/terms', label: 'Terms of Service', translationKey: 'footer.terms' },
    { href: '/cookies', label: 'Cookie Policy', translationKey: 'footer.cookies' }
  ]
};

// SEO and Sitemap Configuration
export const SITEMAP_CONFIG = {
  // How often to update the sitemap
  revalidate: 86400, // 24 hours in seconds
  
  // Base change frequencies for different content types
  changeFrequency: {
    static: 'weekly' as const,
    dynamic: 'daily' as const,
    live: 'hourly' as const,
  },
  
  // Priority values for different page types
  priority: {
    home: 1.0,
    mainPages: 0.9,
    teamPages: 0.8,
    venuePages: 0.8,
    cityPages: 0.8,
    matchPages: 0.75,
    multiLanguage: 0.9, // Multiplier for non-default languages
  },
};

// Robots.txt Configuration
export const ROBOTS_CONFIG = {
  crawlDelay: 1, // seconds
  allowedPaths: ['*'],
  disallowedPaths: [], // Add paths like '/admin/', '/api/private/' if needed
};

// Open Graph Configuration
export const OG_CONFIG = {
  defaultImage: {
    url: '/images/og-default.jpg',
    width: 1200,
    height: 630,
    alt: 'Rugby World Cup 2027 Australia',
  },
  twitterCard: 'summary_large_image' as const,
  twitterSite: '@rugbyworldcup',
  twitterCreator: '@rugbyworldcup',
};