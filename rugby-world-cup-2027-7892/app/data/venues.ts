import { Venue } from '../types';

// Official venues for Rugby World Cup 2027
export const venues: Venue[] = [
  {
    id: 'stadium-australia',
    name: 'Stadium Australia',
    slug: 'stadium-australia',
    city: 'Sydney',
    capacity: 83500,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&h=1080&fit=crop',
    description: 'Australia\'s largest stadium and the main venue for Rugby World Cup 2027. Will host the opening match and final.',
    address: 'Edwin Flack Ave, Sydney Olympic Park NSW 2127',
    region: 'NSW',
    postalCode: '2127',
    facilities: [
      'Premium seating areas',
      'Corporate boxes',
      'Multiple food courts',
      'Merchandise stores',
      'Accessible seating',
      'Family areas'
    ],
    transport: {
      train: 'Olympic Park Station (T7 line)',
      bus: 'Multiple bus routes to Olympic Park',
      parking: '15,000+ parking spaces available',
      taxi: 'Dedicated taxi and rideshare zones'
    }
  },
  {
    id: 'lang-park',
    name: 'Lang Park (Suncorp Stadium)',
    slug: 'lang-park',
    city: 'Brisbane',
    capacity: 52500,
    image: 'https://www.austadiums.com/stadiums/photos/suncorp-stadium-2.jpg',
    description: 'Brisbane\'s premier rectangular stadium, known for its incredible atmosphere and passionate rugby fans.',
    address: '40 Castlemaine St, Milton QLD 4064',
    region: 'QLD',
    postalCode: '4064',
    facilities: [
      'State-of-the-art facilities',
      'Premium club lounges',
      'Multiple bars and restaurants',
      'Fan zones',
      'Accessible amenities',
      'Family friendly areas'
    ],
    transport: {
      train: 'Milton Station (5 minute walk)',
      bus: 'Stadium bus loop on event days',
      parking: 'Limited on-site parking',
      taxi: 'Designated pickup/drop-off areas'
    }
  },
  {
    id: 'perth-stadium',
    name: 'Perth Stadium (Optus Stadium)',
    slug: 'perth-stadium',
    city: 'Perth',
    capacity: 60000,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&h=1080&fit=crop',
    description: 'Western Australia\'s state-of-the-art multi-purpose stadium with world-class facilities.',
    address: '333 Victoria Park Dr, Burswood WA 6100',
    region: 'WA',
    postalCode: '6100',
    facilities: [
      'Bronze facade lighting system',
      'Rooftop tours available',
      'Premium hospitality suites',
      'Microbrewery on-site',
      'Kids activity zones',
      'Museum and tours'
    ],
    transport: {
      train: 'Stadium Station on Armadale/Thornlie lines',
      bus: 'Event shuttles from city',
      parking: 'Limited parking - public transport recommended',
      ferry: 'Mends Street Jetty services'
    }
  },
  {
    id: 'adelaide-oval',
    name: 'Adelaide Oval',
    slug: 'adelaide-oval',
    city: 'Adelaide',
    capacity: 53500,
    image: 'https://s.ndtvimg.com/images/entities/300/adelaide-oval-adelaide-1967.png',
    description: 'Historic venue combining heritage architecture with modern facilities, offering spectacular city views.',
    address: 'War Memorial Dr, North Adelaide SA 5006',
    region: 'SA',
    postalCode: '5006',
    facilities: [
      'RoofClimb experience',
      'Oval Hotel integrated venue',
      'Heritage scoreboard',
      'Premium dining options',
      'Interactive museum',
      'Stadium tours'
    ],
    transport: {
      train: 'Adelaide Railway Station (15 min walk)',
      bus: 'Free shuttle from city on match days',
      parking: 'Limited parking in parklands',
      walk: 'Adelaide Oval Bridge from city'
    }
  },
  {
    id: 'melbourne-rectangular',
    name: 'Melbourne Rectangular Stadium',
    slug: 'melbourne-rectangular',
    city: 'Melbourne',
    capacity: 30050,
    image: 'https://assets.architectureanddesign.com.au/AAMI_Park_by_Cox_Architecture_03_0d6d477022.jpg',
    description: 'Purpose-built rectangular stadium with innovative bio-frame design and intimate atmosphere.',
    address: 'Edwin Flack Ave, Melbourne VIC 3000',
    region: 'VIC',
    postalCode: '3000',
    facilities: [
      'Bubble roof design',
      'Elite training facilities',
      'Close proximity seating',
      'LED lighting system',
      'Premium lounges',
      'Covered seating throughout'
    ],
    transport: {
      train: 'Jolimont Station (5 min walk)',
      tram: 'Route 70 and 75 trams',
      parking: 'Limited parking available',
      walk: '10 minutes from CBD'
    }
  },
  {
    id: 'newcastle-stadium',
    name: 'Newcastle International Sports Centre',
    slug: 'newcastle-stadium',
    city: 'Newcastle',
    capacity: 33000,
    image: 'https://www.austadiums.com/stadiums/photos/mcdonald-jones-stadium-aerial.jpg',
    description: 'Regional venue showcasing passionate rugby support in the Hunter region.',
    address: '1 Turton Rd, Broadmeadow NSW 2292',
    region: 'NSW',
    postalCode: '2292',
    facilities: [
      'Recently upgraded facilities',
      'Eastern and Western grandstands',
      'Modern corporate facilities',
      'Family zones',
      'Food and beverage outlets',
      'Merchandise stores'
    ],
    transport: {
      train: 'Broadmeadow Station (10 min walk)',
      bus: 'Event buses from Newcastle CBD',
      parking: 'On-site parking available',
      taxi: 'Designated zones'
    }
  },
  {
    id: 'north-queensland-stadium',
    name: 'North Queensland Stadium',
    slug: 'north-queensland-stadium',
    city: 'Townsville',
    capacity: 25000,
    image: 'https://ndy.com/wp-content/uploads/2021/09/b50017_North-Queensland-Stadium_aka-Queensland-Country-Bank-Stadium-6.jpg',
    description: 'Newest venue for RWC 2027, offering tropical rugby experience in North Queensland.',
    address: '12-68 Stanley St, Townsville QLD 4810',
    region: 'QLD',
    postalCode: '4810',
    facilities: [
      'Climate-controlled design',
      'CBD location',
      'Entertainment precinct',
      'Modern amenities',
      'Tropical design elements',
      'Community spaces'
    ],
    transport: {
      walk: 'CBD location - walking distance',
      bus: 'Multiple CBD bus routes',
      parking: 'City parking options',
      taxi: 'Easy access throughout CBD'
    }
  }
];

// Helper functions
export const getVenueById = (id: string): Venue | undefined => {
  return venues.find(venue => venue.id === id);
};

export const getVenueBySlug = (slug: string): Venue | undefined => {
  return venues.find(venue => venue.slug === slug);
};

export const getVenuesByCity = (city: string): Venue[] => {
  return venues.filter(venue => venue.city.toLowerCase() === city.toLowerCase());
};

export const getLargestVenues = (limit: number = 5): Venue[] => {
  return [...venues].sort((a, b) => b.capacity - a.capacity).slice(0, limit);
};