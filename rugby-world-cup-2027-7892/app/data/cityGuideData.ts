import { AFFILIATE_URL, TICKET_AFFILIATE_ID } from '../lib/constants';

export interface AccommodationOption {
  name: string;
  type: string;
  priceRange: string;
  features: string[];
  bookingUrl: string;
}

export interface RestaurantOption {
  name: string;
  cuisine: string;
  priceRange: string;
  specialty: string;
}

export interface TransportOption {
  type: string;
  description: string;
  cost: string;
  tips: string[];
}

export interface AttractionOption {
  name: string;
  description: string;
  distance: string;
  duration: string;
}

export interface CityGuideData {
  accommodations: AccommodationOption[];
  restaurants: RestaurantOption[];
  transport: TransportOption[];
  attractions: AttractionOption[];
  fanZones: string[];
  localTips: string[];
  faqs: Array<{question: string; answer: string}>;
  transportMap: {
    description: string;
    mainHubs: string[];
    keyRoutes: string[];
    tipUrl?: string;
  };
}

export const cityGuideData: Record<string, CityGuideData> = {
  'Sydney': {
    accommodations: [
      {
        name: 'Sydney Harbour Luxury Hotels',
        type: 'Luxury',
        priceRange: '$400-800/night',
        features: ['Harbour views', 'Fine dining', 'Spa services', 'Concierge'],
        bookingUrl: AFFILIATE_URL
      },
      {
        name: 'City Center Business Hotels',
        type: 'Business',
        priceRange: '$200-400/night',
        features: ['Central location', 'Conference facilities', 'Gym', 'WiFi'],
        bookingUrl: AFFILIATE_URL
      }
    ],
    restaurants: [
      { name: 'Quay Restaurant', cuisine: 'Modern Australian', priceRange: '$$$', specialty: 'Harbor views & fine dining' },
      { name: 'Fish Market', cuisine: 'Seafood', priceRange: '$$', specialty: 'Fresh local seafood' }
    ],
    attractions: [
      { name: 'Sydney Opera House', description: 'Iconic architectural masterpiece and performing arts venue', distance: '1km from CBD', duration: '2-3 hours' },
      { name: 'Sydney Harbour Bridge', description: 'Historic bridge with climb experiences and stunning views', distance: '1km from CBD', duration: '2-4 hours' },
      { name: 'Bondi Beach', description: 'World-famous beach with surfing and coastal walks', distance: '7km from CBD', duration: 'Half day' },
      { name: 'Taronga Zoo', description: 'Harbor-side zoo with Australian and exotic animals', distance: '12min ferry', duration: '3-4 hours' }
    ],
    transport: [
      {
        type: 'Opal Card',
        description: 'Public transport card for trains, buses, ferries, and light rail',
        cost: '$15 card + pay-as-you-go',
        tips: ['Daily cap applies', 'Works on all Sydney transport']
      }
    ],
    fanZones: [
      'Circular Quay Fan Zone - Live matches, food stalls, entertainment',
      'Olympic Park Fan Zone - Large screens and rugby activities'
    ],
    localTips: [
      'Book harbor cruise dinner for special match evenings',
      'Walk across Sydney Harbour Bridge for iconic photos',
      'Take the ferry to Manly for beach time between matches'
    ],
    faqs: [
      {
        question: 'How do I get from Sydney Airport to Accor Stadium?',
        answer: 'Take the Airport Link train to Central Station, then transfer to the T7 Olympic Park Line direct to Olympic Park Station. The journey takes about 45 minutes and costs around $20 with an Opal card.'
      }
    ],
    transportMap: {
      description: 'Sydney has an integrated public transport network',
      mainHubs: ['Central Station', 'Circular Quay', 'Town Hall'],
      keyRoutes: ['T7 Olympic Park Line to rugby stadium']
    }
  },
  'Melbourne': {
    accommodations: [
      {
        name: 'Collins Street Luxury',
        type: 'Luxury',
        priceRange: '$350-700/night',
        features: ['City center', 'Fine dining', 'Shopping nearby', 'Premium service'],
        bookingUrl: AFFILIATE_URL
      },
      {
        name: 'Southbank Hotels',
        type: 'Business',
        priceRange: '$180-350/night',
        features: ['River views', 'Convention center', 'Restaurants', 'Crown Casino nearby'],
        bookingUrl: AFFILIATE_URL
      }
    ],
    restaurants: [
      { name: 'Attica', cuisine: 'Modern Australian', priceRange: '$$$', specialty: 'Award-winning innovative cuisine' },
      { name: 'Lune Croissanterie', cuisine: 'French Bakery', priceRange: '$', specialty: 'World\'s best croissants' }
    ],
    attractions: [
      { name: 'Federation Square', description: 'Cultural precinct with galleries and events', distance: 'CBD', duration: '2-3 hours' },
      { name: 'Royal Botanic Gardens', description: 'Beautiful gardens with city skyline views', distance: '2km from CBD', duration: '2 hours' },
      { name: 'Melbourne Cricket Ground', description: 'Iconic sports stadium with tours available', distance: '2km from CBD', duration: '2 hours' },
      { name: 'Queen Victoria Market', description: 'Historic market with food and souvenirs', distance: 'CBD', duration: '2-3 hours' }
    ],
    transport: [
      {
        type: 'Myki Card',
        description: 'Melbourne\'s public transport card for trams, trains, and buses',
        cost: '$6 card + pay-as-you-go',
        tips: ['Daily caps apply', 'Free tram zone in CBD']
      }
    ],
    fanZones: [
      'Federation Square Fan Zone - Central location with big screens',
      'Docklands Fan Zone - Near Marvel Stadium with activities'
    ],
    localTips: [
      'Explore famous laneways for street art and coffee',
      'Visit Queen Victoria Market for local produce',
      'Experience Melbourne\'s renowned coffee culture'
    ],
    faqs: [
      {
        question: 'How do I get to Marvel Stadium from Melbourne CBD?',
        answer: 'Take tram route 70 from Flinders Street Station directly to Marvel Stadium. The journey takes about 15 minutes.'
      }
    ],
    transportMap: {
      description: 'Melbourne has the world\'s largest tram network',
      mainHubs: ['Flinders Street Station', 'Southern Cross Station'],
      keyRoutes: ['Tram 70 to Marvel Stadium', 'Free City Circle Tram']
    }
  },
  'Brisbane': {
    accommodations: [
      {
        name: 'South Bank Hotels',
        type: 'Business',
        priceRange: '$200-400/night',
        features: ['River views', 'Near parklands', 'Pool facilities', 'Restaurant'],
        bookingUrl: AFFILIATE_URL
      }
    ],
    restaurants: [
      { name: 'Eagle Street Pier', cuisine: 'Various', priceRange: '$$$', specialty: 'Riverside dining precinct' }
    ],
    attractions: [
      { name: 'South Bank Parklands', description: 'Riverside parklands with beach and cultural venues', distance: '1km from CBD', duration: '3-4 hours' },
      { name: 'Story Bridge', description: 'Iconic bridge with adventure climb experiences', distance: '1km from CBD', duration: '2 hours' },
      { name: 'Lone Pine Koala Sanctuary', description: 'World\'s largest koala sanctuary', distance: '12km from CBD', duration: 'Half day' }
    ],
    transport: [
      {
        type: 'Go Card',
        description: 'Brisbane\'s public transport card',
        cost: '$10 card + pay-as-you-go',
        tips: ['Works on buses, trains, ferries', 'Daily caps apply']
      }
    ],
    fanZones: ['South Bank Parklands Fan Zone'],
    localTips: ['Take the CityHopper ferry - it\'s free!', 'Visit South Bank Parklands between matches'],
    faqs: [],
    transportMap: {
      description: 'Brisbane has trains, buses, and ferries',
      mainHubs: ['Central Station', 'Roma Street'],
      keyRoutes: ['Train to Lang Park via Milton Station']
    }
  },
  'Perth': {
    accommodations: [
      {
        name: 'City Center Hotels',
        type: 'Business',
        priceRange: '$180-350/night',
        features: ['CBD location', 'Business facilities', 'Pool', 'Restaurant'],
        bookingUrl: AFFILIATE_URL
      }
    ],
    restaurants: [
      { name: 'Elizabeth Quay', cuisine: 'Various', priceRange: '$$', specialty: 'Waterfront dining' }
    ],
    attractions: [
      { name: 'Kings Park', description: 'One of the world\'s largest inner city parks', distance: '2km from CBD', duration: '3-4 hours' },
      { name: 'Cottesloe Beach', description: 'Popular beach with cafes and sunset views', distance: '12km from CBD', duration: 'Half day' },
      { name: 'Fremantle', description: 'Historic port city with markets and heritage', distance: '19km from CBD', duration: 'Full day' }
    ],
    transport: [
      {
        type: 'SmartRider',
        description: 'Perth\'s public transport card',
        cost: '$10 card + pay-as-you-go',
        tips: ['Works on all TransPerth services']
      }
    ],
    fanZones: ['Elizabeth Quay Fan Zone'],
    localTips: ['Visit Kings Park for city views', 'Explore Fremantle markets'],
    faqs: [],
    transportMap: {
      description: 'Perth has trains, buses, and ferries',
      mainHubs: ['Perth Station', 'Elizabeth Quay'],
      keyRoutes: ['Train to Optus Stadium']
    }
  },
  'Adelaide': {
    accommodations: [
      {
        name: 'Adelaide CBD Hotels',
        type: 'Business',
        priceRange: '$150-300/night',
        features: ['City center', 'Walking distance to oval', 'Restaurant', 'WiFi'],
        bookingUrl: AFFILIATE_URL
      }
    ],
    restaurants: [
      { name: 'Central Market', cuisine: 'Various', priceRange: '$$', specialty: 'Fresh produce and multicultural food' }
    ],
    attractions: [
      { name: 'Adelaide Oval', description: 'Historic cricket ground with rooftop climb', distance: '2km from CBD', duration: '2-3 hours' },
      { name: 'Glenelg Beach', description: 'Popular beach with shops and restaurants', distance: '11km from CBD', duration: 'Half day' },
      { name: 'Adelaide Botanic Garden', description: 'Beautiful gardens with conservatory', distance: '1km from CBD', duration: '2 hours' }
    ],
    transport: [
      {
        type: 'MetroCard',
        description: 'Adelaide\'s public transport card',
        cost: '$5 card + pay-as-you-go',
        tips: ['Free tram in CBD']
      }
    ],
    fanZones: ['Elder Park Fan Zone'],
    localTips: ['Walk to Adelaide Oval from CBD', 'Visit Barossa Valley wine region'],
    faqs: [],
    transportMap: {
      description: 'Adelaide has trams, buses, and trains',
      mainHubs: ['Adelaide Railway Station'],
      keyRoutes: ['Walk to Adelaide Oval']
    }
  },
  'Newcastle': {
    accommodations: [
      {
        name: 'Newcastle Harbour Hotels',
        type: 'Business',
        priceRange: '$140-250/night',
        features: ['Harbour views', 'Beach nearby', 'Restaurant', 'Pool'],
        bookingUrl: AFFILIATE_URL
      }
    ],
    restaurants: [
      { name: 'Honeysuckle Precinct', cuisine: 'Various', priceRange: '$$', specialty: 'Waterfront dining' }
    ],
    attractions: [
      { name: 'Newcastle Beach', description: 'Popular city beach with ocean baths', distance: '2km from CBD', duration: '2-3 hours' },
      { name: 'Fort Scratchley', description: 'Historic coastal fort with harbor views', distance: '3km from CBD', duration: '2 hours' },
      { name: 'Hunter Valley', description: 'Famous wine region with cellar doors', distance: '45km from CBD', duration: 'Full day' }
    ],
    transport: [
      {
        type: 'Opal Card',
        description: 'Same as Sydney\'s transport card',
        cost: '$15 card + pay-as-you-go',
        tips: ['Works on buses and light rail']
      }
    ],
    fanZones: ['Newcastle Beach Fan Zone'],
    localTips: ['Visit Newcastle Beach', 'Take the Bathers Way coastal walk'],
    faqs: [],
    transportMap: {
      description: 'Newcastle has buses and light rail',
      mainHubs: ['Newcastle Interchange'],
      keyRoutes: ['Bus to McDonald Jones Stadium']
    }
  },
  'Townsville': {
    accommodations: [
      {
        name: 'Waterfront Hotels',
        type: 'Business',
        priceRange: '$130-220/night',
        features: ['Marina views', 'Pool', 'Tropical setting', 'Restaurant'],
        bookingUrl: AFFILIATE_URL
      }
    ],
    restaurants: [
      { name: 'Palmer Street', cuisine: 'Various', priceRange: '$$', specialty: 'Local dining strip' }
    ],
    attractions: [
      { name: 'Magnetic Island', description: 'Tropical island with beaches and wildlife', distance: '20min ferry', duration: 'Full day' },
      { name: 'The Strand', description: 'Beachfront promenade with parks and pools', distance: '2km from CBD', duration: '2-3 hours' },
      { name: 'Reef HQ Aquarium', description: 'Great Barrier Reef aquarium experience', distance: 'CBD', duration: '2-3 hours' }
    ],
    transport: [
      {
        type: 'Sunbus',
        description: 'Local bus service',
        cost: '$2-5 per trip',
        tips: ['Stadium is walking distance from CBD']
      }
    ],
    fanZones: ['The Strand Fan Zone'],
    localTips: ['Visit Magnetic Island', 'Walk along The Strand beachfront'],
    faqs: [],
    transportMap: {
      description: 'Townsville has local buses',
      mainHubs: ['CBD'],
      keyRoutes: ['Walk to North Queensland Stadium']
    }
  }
};

export const getCityData = (cityName: string): CityGuideData => {
  return cityGuideData[cityName] || {
    accommodations: [],
    restaurants: [],
    transport: [],
    attractions: [],
    fanZones: [],
    localTips: [],
    faqs: [],
    transportMap: {
      description: 'Public transport information',
      mainHubs: [],
      keyRoutes: []
    }
  };
};