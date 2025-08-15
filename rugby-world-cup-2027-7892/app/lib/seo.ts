import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from './constants';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Generate metadata for dynamic pages with SEO optimization
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  canonical,
  noindex = false
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_AU',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_URL}${ogImage}`]
    },
    alternates: {
      canonical: canonicalUrl
    },
    robots: {
      index: !noindex,
      follow: !noindex
    }
  };
}

/**
 * Generate JSON-LD schema markup for events
 */
export function generateEventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  offers = []
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
    city: string;
  };
  image?: string;
  offers?: Array<{
    price: string;
    currency: string;
    url: string;
    availability: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    location: {
      '@type': 'Place',
      name: location.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.city,
        addressCountry: 'AU'
      }
    },
    image: image ? `${SITE_URL}${image}` : undefined,
    organizer: {
      '@type': 'Organization',
      name: 'World Rugby',
      url: 'https://www.world.rugby/'
    },
    offers: offers.map(offer => ({
      '@type': 'Offer',
      price: offer.price,
      priceCurrency: offer.currency,
      url: offer.url,
      availability: `https://schema.org/${offer.availability}`
    }))
  };
}

/**
 * Generate JSON-LD schema markup for sports teams
 */
export function generateSportsTeamSchema({
  name,
  country,
  logo,
  description
}: {
  name: string;
  country: string;
  logo?: string;
  description?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name,
    sport: 'Rugby Union',
    memberOf: {
      '@type': 'SportsOrganization',
      name: 'World Rugby'
    },
    location: {
      '@type': 'Country',
      name: country
    },
    logo: logo ? `${SITE_URL}${logo}` : undefined,
    description
  };
}

/**
 * Generate JSON-LD schema markup for sports venues
 */
export function generateVenueSchema({
  name,
  address,
  city,
  capacity,
  image
}: {
  name: string;
  address: string;
  city: string;
  capacity: number;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Stadium',
    name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: city,
      addressCountry: 'AU'
    },
    maximumAttendeeCapacity: capacity,
    image: image ? `${SITE_URL}${image}` : undefined
  };
}

/**
 * Generate breadcrumb schema markup
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.url}`
    }))
  };
}

/**
 * Generate FAQ schema markup
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate ticket price comparison keywords
 */
export function generateTicketKeywords(matchType: string, teams?: string[], venue?: string): string[] {
  const baseKeywords = [
    'rugby world cup 2027 tickets',
    'rwc 2027 australia tickets',
    'rugby tickets australia',
    'rugby world cup ticket prices',
    'official rugby tickets',
    'buy rugby world cup tickets'
  ];

  const matchKeywords = [
    `${matchType} tickets`,
    `rugby world cup ${matchType}`,
    `${matchType} ticket prices`
  ];

  const teamKeywords = teams ? teams.flatMap(team => [
    `${team} tickets`,
    `${team} rugby world cup`,
    `watch ${team} rugby`
  ]) : [];

  const venueKeywords = venue ? [
    `${venue} tickets`,
    `rugby at ${venue}`,
    `${venue} rugby world cup`
  ] : [];

  return [...baseKeywords, ...matchKeywords, ...teamKeywords, ...venueKeywords];
}

/**
 * Generate city guide keywords
 */
export function generateCityKeywords(cityName: string): string[] {
  return [
    `${cityName} rugby world cup`,
    `${cityName} travel guide`,
    `things to do ${cityName}`,
    `${cityName} accommodation`,
    `${cityName} attractions`,
    `visit ${cityName} 2027`,
    `${cityName} rugby venues`,
    `${cityName} tourist guide`,
    `rugby world cup cities`,
    `australia rugby cities`
  ];
}

/**
 * Generate team-specific keywords
 */
export function generateTeamKeywords(teamName: string): string[] {
  return [
    `${teamName} rugby world cup 2027`,
    `${teamName} rwc 2027`,
    `${teamName} fixtures`,
    `${teamName} squad`,
    `${teamName} tickets`,
    `${teamName} matches`,
    `watch ${teamName}`,
    `${teamName} rugby team`,
    `${teamName} world cup`,
    `${teamName} australia 2027`
  ];
}

/**
 * Generate venue-specific keywords
 */
export function generateVenueKeywords(venueName: string, city: string): string[] {
  return [
    `${venueName} rugby world cup`,
    `${venueName} tickets`,
    `${venueName} capacity`,
    `${venueName} ${city}`,
    `rugby at ${venueName}`,
    `${venueName} events`,
    `${venueName} seating`,
    `${city} rugby venue`,
    `australia rugby stadiums`,
    `rwc 2027 venues`
  ];
}