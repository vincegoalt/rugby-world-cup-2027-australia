export interface Team {
  id: string;
  name: string;
  slug: string;
  group: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | null; // 6 pools for 24 teams, null until draw
  flagEmoji: string;
  ranking: number;
  qualified?: boolean;
  qualification?: string;
  image?: string;
  titles?: number;
  bestPlayers?: string[];
  legends?: string[];
  coach?: string;
  captain?: string;
}

export interface Match {
  id: string;
  date: string;
  team1: string; // Team ID or 'TBD'
  team2: string; // Team ID or 'TBD'
  venue: string; // Venue ID
  stage: 'pool' | 'round-16' | 'quarter-final' | 'semi-final' | 'bronze-final' | 'final';
  kickoffTime: string;
  pool?: string; // Pool A-F, assigned after December 2025 draw
  note?: string; // Additional match information
}

export interface Venue {
  id: string;
  name: string;
  slug: string;
  city: string;
  capacity: number;
  image: string;
  description?: string;
  address?: string;
  region?: string;
  postalCode?: string;
  facilities?: string[];
  transport?: {
    train?: string;
    bus?: string;
    parking?: string;
    taxi?: string;
    tram?: string;
    ferry?: string;
    walk?: string;
  };
}

export interface Attraction {
  name: string;
  description: string;
  category: 'landmark' | 'nature' | 'museum' | 'entertainment' | 'beach' | 'shopping' | 'food' | 'cultural';
}

export interface Climate {
  season: string;
  temperature: {
    avg_high: number;
    avg_low: number;
  };
  rainfall: string;
  description: string;
}

export interface Transport {
  airport: {
    name: string;
    code: string;
    distance: string;
    transport_to_city: string;
  };
  public_transport: string[];
  getting_around: string[];
}

export interface City {
  id: string;
  name: string;
  slug: string;
  description: string;
  detailed_description: string;
  attractions: Attraction[];
  climate: Climate;
  transport: Transport;
  accommodation_areas: string[];
  local_cuisine: {
    specialties: string[];
    dining_districts: string[];
    description: string;
  };
  rugby_culture: {
    history: string;
    venues: string[];
    fan_culture: string;
  };
  fan_zones: string[];
  entertainment_districts: string[];
}

export type Group = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export type MatchStage = 'pool' | 'round-16' | 'quarter-final' | 'semi-final' | 'bronze-final' | 'final';

export type Language = 'en' | 'fr' | 'es' | 'ja';