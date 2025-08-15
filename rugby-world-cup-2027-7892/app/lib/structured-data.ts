// Structured data helpers for Rugby World Cup 2027

export const createEventSchema = (params?: {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  image?: string | string[];
}) => {
  const baseUrl = 'https://rugbyaustralia2027.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: params?.name || 'Rugby World Cup 2027',
    description: params?.description || 'The Rugby World Cup 2027 in Australia features 20 teams competing across 8 host cities from October to November 2027. Get tickets, schedules, team information and travel guides.',
    startDate: params?.startDate || '2027-10-01T19:00:00+11:00',
    endDate: params?.endDate || '2027-11-13T21:00:00+11:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: params?.image || [
      `${baseUrl}/images/rugby-world-cup-2027-hero.jpg`,
      `${baseUrl}/images/rugby-world-cup-2027-banner.jpg`,
      `${baseUrl}/images/rugby-world-cup-2027-logo.jpg`
    ],
    url: params?.url || baseUrl,
    location: [
      {
        '@type': 'Place',
        name: 'Stadium Australia',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Edwin Flack Ave',
          addressLocality: 'Sydney Olympic Park',
          addressRegion: 'NSW',
          postalCode: '2127',
          addressCountry: 'AU'
        }
      },
      {
        '@type': 'Place',
        name: 'Melbourne Cricket Ground',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Brunton Ave',
          addressLocality: 'Richmond',
          addressRegion: 'VIC',
          postalCode: '3002',
          addressCountry: 'AU'
        }
      },
      {
        '@type': 'Place',
        name: 'Lang Park (Suncorp Stadium)',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '40 Castlemaine St',
          addressLocality: 'Milton',
          addressRegion: 'QLD',
          postalCode: '4064',
          addressCountry: 'AU'
        }
      },
      {
        '@type': 'Place',
        name: 'Perth Stadium',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '333 Victoria Park Dr',
          addressLocality: 'Burswood',
          addressRegion: 'WA',
          postalCode: '6100',
          addressCountry: 'AU'
        }
      },
      {
        '@type': 'Place',
        name: 'Adelaide Oval',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'War Memorial Dr',
          addressLocality: 'North Adelaide',
          addressRegion: 'SA',
          postalCode: '5006',
          addressCountry: 'AU'
        }
      },
      {
        '@type': 'Place',
        name: 'Newcastle Stadium',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1 Rugby Rd',
          addressLocality: 'New Lambton',
          addressRegion: 'NSW',
          postalCode: '2305',
          addressCountry: 'AU'
        }
      },
      {
        '@type': 'Place',
        name: 'North Queensland Stadium',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '22 Railway Ave',
          addressLocality: 'Railway Estate',
          addressRegion: 'QLD',
          postalCode: '4810',
          addressCountry: 'AU'
        }
      }
    ],
    organizer: {
      '@type': 'Organization',
      name: 'World Rugby',
      url: 'https://www.world.rugby/',
      logo: 'https://www.world.rugby/img/world-rugby-logo.png'
    },
    performer: [
      {
        '@type': 'SportsTeam',
        name: 'New Zealand All Blacks'
      },
      {
        '@type': 'SportsTeam',
        name: 'South Africa Springboks'
      },
      {
        '@type': 'SportsTeam',
        name: 'France'
      },
      {
        '@type': 'SportsTeam',
        name: 'Ireland'
      },
      {
        '@type': 'SportsTeam',
        name: 'Australia Wallabies'
      },
      {
        '@type': 'SportsTeam',
        name: 'England'
      },
      {
        '@type': 'SportsTeam',
        name: 'Wales'
      },
      {
        '@type': 'SportsTeam',
        name: 'Argentina'
      },
      {
        '@type': 'SportsTeam',
        name: 'Scotland'
      },
      {
        '@type': 'SportsTeam',
        name: 'Japan'
      },
      {
        '@type': 'SportsTeam',
        name: 'Italy'
      },
      {
        '@type': 'SportsTeam',
        name: 'Fiji'
      },
      {
        '@type': 'SportsTeam',
        name: 'Samoa'
      },
      {
        '@type': 'SportsTeam',
        name: 'Tonga'
      },
      {
        '@type': 'SportsTeam',
        name: 'Georgia'
      },
      {
        '@type': 'SportsTeam',
        name: 'Portugal'
      },
      {
        '@type': 'SportsTeam',
        name: 'Uruguay'
      },
      {
        '@type': 'SportsTeam',
        name: 'Spain'
      },
      {
        '@type': 'SportsTeam',
        name: 'Romania'
      },
      {
        '@type': 'SportsTeam',
        name: 'USA'
      }
    ],
    offers: {
      '@type': 'AggregateOffer',
      url: `${baseUrl}/tickets`,
      priceCurrency: 'AUD',
      lowPrice: '50',
      highPrice: '1500',
      availability: 'https://schema.org/PreOrder',
      availabilityStarts: '2026-09-01T10:00:00+10:00',
      validFrom: '2026-09-01T10:00:00+10:00',
      seller: {
        '@type': 'Organization',
        name: 'GoalTickets',
        url: 'https://goaltickets.com/collections/rugby-world-cup-2027-tickets'
      }
    }
  };
};

export const createMatchEventSchema = (match: {
  id: string;
  team1: string;
  team2: string;
  date: string;
  venue: string;
  stage: string;
  venueName?: string;
  venueAddress?: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
  };
}) => {
  const baseUrl = 'https://rugbyaustralia2027.com';
  const matchDate = new Date(match.date);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${match.team1} vs ${match.team2} - Rugby World Cup 2027`,
    description: `Rugby World Cup 2027 ${match.stage} match between ${match.team1} and ${match.team2} at ${match.venueName || match.venue}`,
    startDate: matchDate.toISOString(),
    endDate: new Date(matchDate.getTime() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours later
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: [
      `${baseUrl}/images/matches/${match.id}.jpg`,
      `${baseUrl}/images/rugby-world-cup-2027-logo.jpg`
    ],
    url: `${baseUrl}/tickets/${match.id}`,
    location: {
      '@type': 'Place',
      name: match.venueName || match.venue,
      address: match.venueAddress ? {
        '@type': 'PostalAddress',
        streetAddress: match.venueAddress.street,
        addressLocality: match.venueAddress.city,
        addressRegion: match.venueAddress.region,
        postalCode: match.venueAddress.postalCode,
        addressCountry: 'AU'
      } : {
        '@type': 'PostalAddress',
        addressCountry: 'AU'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'World Rugby',
      url: 'https://www.world.rugby/'
    },
    performer: [
      {
        '@type': 'SportsTeam',
        name: match.team1
      },
      {
        '@type': 'SportsTeam',
        name: match.team2
      }
    ],
    offers: {
      '@type': 'AggregateOffer',
      url: `${baseUrl}/tickets/${match.id}`,
      priceCurrency: 'AUD',
      lowPrice: match.stage === 'final' ? '300' : match.stage.includes('semi') ? '150' : '50',
      highPrice: match.stage === 'final' ? '1500' : match.stage.includes('semi') ? '800' : '500',
      availability: 'https://schema.org/PreOrder',
      availabilityStarts: '2026-09-01T10:00:00+10:00',
      validFrom: '2026-09-01T10:00:00+10:00',
      seller: {
        '@type': 'Organization',
        name: 'GoalTickets',
        url: 'https://goaltickets.com/collections/rugby-world-cup-2027-tickets'
      }
    }
  };
};

export const createBreadcrumbSchema = (items: Array<{ name: string; url?: string }>) => {
  const baseUrl = 'https://rugbyaustralia2027.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${baseUrl}${item.url}` : undefined
    }))
  };
};

export const createOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rugby Australia 2027',
    url: 'https://rugbyaustralia2027.com',
    logo: 'https://rugbyaustralia2027.com/images/logo.png',
    description: 'Your comprehensive guide to Rugby World Cup 2027 in Australia',
    sameAs: [
      'https://www.facebook.com/rugbyaustralia2027',
      'https://twitter.com/rugbyaus2027',
      'https://www.instagram.com/rugbyaustralia2027'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61-2-9999-9999',
      contactType: 'customer service',
      email: 'info@rugbyaustralia2027.com',
      availableLanguage: ['English']
    }
  };
};

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
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
};