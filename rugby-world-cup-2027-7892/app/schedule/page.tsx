'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { matches } from '../data/matches';
import { teams, getTeamById } from '../data/teams';
import { venues, getVenueById } from '../data/venues';
import { STAGE_NAMES, MATCH_STAGES } from '../lib/constants';
import { formatDate, formatTime, formatMatchDateTime } from '../lib/utils';
import MatchCard from '../components/MatchCard';

interface BreadcrumbProps {
  items: Array<{ name: string; href?: string; }>;
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                {item.name}
              </Link>
            ) : (
              <span className="text-rugby-green text-sm font-medium">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface FilterBarProps {
  filters: {
    stage: string;
    date: string;
    team: string;
    venue: string;
  };
  onFilterChange: (key: string, value: string) => void;
  uniqueDates: string[];
  uniqueVenues: string[];
}

function FilterBar({ filters, onFilterChange, uniqueDates, uniqueVenues }: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Matches</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Stage Filter */}
        <div>
          <label htmlFor="stage-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Stage
          </label>
          <select
            id="stage-filter"
            value={filters.stage}
            onChange={(e) => onFilterChange('stage', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-rugby-green focus:border-rugby-green"
          >
            <option value="">All Stages</option>
            {MATCH_STAGES.map(stage => (
              <option key={stage} value={stage}>
                {STAGE_NAMES[stage]}
              </option>
            ))}
          </select>
        </div>

        {/* Date Filter */}
        <div>
          <label htmlFor="date-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <select
            id="date-filter"
            value={filters.date}
            onChange={(e) => onFilterChange('date', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-rugby-green focus:border-rugby-green"
          >
            <option value="">All Dates</option>
            {uniqueDates.map(date => (
              <option key={date} value={date}>
                {formatDate(date)}
              </option>
            ))}
          </select>
        </div>

        {/* Team Filter */}
        <div>
          <label htmlFor="team-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Team
          </label>
          <select
            id="team-filter"
            value={filters.team}
            onChange={(e) => onFilterChange('team', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-rugby-green focus:border-rugby-green"
          >
            <option value="">All Teams</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>
                {team.flagEmoji} {team.name}
              </option>
            ))}
          </select>
        </div>

        {/* Venue Filter */}
        <div>
          <label htmlFor="venue-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Venue
          </label>
          <select
            id="venue-filter"
            value={filters.venue}
            onChange={(e) => onFilterChange('venue', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-rugby-green focus:border-rugby-green"
          >
            <option value="">All Venues</option>
            {uniqueVenues.map(venueId => {
              const venue = getVenueById(venueId);
              return venue ? (
                <option key={venueId} value={venueId}>
                  {venue.name}
                </option>
              ) : null;
            })}
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => {
            onFilterChange('stage', '');
            onFilterChange('date', '');
            onFilterChange('team', '');
            onFilterChange('venue', '');
          }}
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Clear all filters
        </button>
        
        <div className="text-sm text-gray-600">
          Showing {matches.length} match{matches.length !== 1 ? 'es' : ''}
        </div>
      </div>
    </div>
  );
}

interface MatchListProps {
  matches: typeof matches;
}

function MatchList({ matches: filteredMatches }: MatchListProps) {
  // Group matches by stage
  const matchesByStage = useMemo(() => {
    const grouped: Record<string, typeof matches> = {};
    
    filteredMatches.forEach(match => {
      if (!grouped[match.stage]) {
        grouped[match.stage] = [];
      }
      grouped[match.stage].push(match);
    });

    // Sort matches within each stage by date
    Object.keys(grouped).forEach(stage => {
      grouped[stage].sort((a, b) => {
        if (a.date === b.date) {
          return a.kickoffTime.localeCompare(b.kickoffTime);
        }
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    });

    return grouped;
  }, [filteredMatches]);

  const stageOrder = MATCH_STAGES;

  return (
    <div className="space-y-12">
      {stageOrder.map(stage => {
        const stageMatches = matchesByStage[stage];
        if (!stageMatches || stageMatches.length === 0) return null;

        return (
          <section key={stage} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {STAGE_NAMES[stage]}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stageMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function StatisticsSection() {
  const totalMatches = matches.length;
  const uniqueTeams = new Set([...matches.map(m => m.team1), ...matches.map(m => m.team2)]).size;
  const uniqueVenues = new Set(matches.map(m => m.venue)).size;
  const uniqueCities = new Set(matches.map(m => {
    const venue = getVenueById(m.venue);
    return venue?.city;
  }).filter(Boolean)).size;

  return (
    <section className="bg-gradient-to-r from-rugby-green to-green-700 rounded-xl text-white p-8 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Tournament Overview</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-4xl font-bold text-rugby-gold mb-2">{totalMatches}</div>
          <div className="text-sm text-gray-100">Total Matches</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-rugby-gold mb-2">{uniqueTeams}</div>
          <div className="text-sm text-gray-100">Teams</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-rugby-gold mb-2">{uniqueVenues}</div>
          <div className="text-sm text-gray-100">Venues</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-rugby-gold mb-2">{uniqueCities}</div>
          <div className="text-sm text-gray-100">Host Cities</div>
        </div>
      </div>
    </section>
  );
}

function QuickLinksSection() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/teams"
          className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-rugby-green transition-colors group"
        >
          <div className="w-10 h-10 bg-rugby-green rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-700 transition-colors">
            <svg className="w-5 h-5 text-rugby-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">All Teams</h3>
            <p className="text-sm text-gray-600">View team profiles and stats</p>
          </div>
        </Link>

        <Link
          href="/venues"
          className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-rugby-green transition-colors group"
        >
          <div className="w-10 h-10 bg-rugby-green rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-700 transition-colors">
            <svg className="w-5 h-5 text-rugby-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h5" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">All Venues</h3>
            <p className="text-sm text-gray-600">Explore stadium information</p>
          </div>
        </Link>

        <Link
          href="/guide"
          className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-rugby-green transition-colors group"
        >
          <div className="w-10 h-10 bg-rugby-green rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-700 transition-colors">
            <svg className="w-5 h-5 text-rugby-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Travel Guide</h3>
            <p className="text-sm text-gray-600">Plan your trip to Australia</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

function TicketCTASection() {
  return (
    <section className="bg-gradient-to-r from-rugby-green to-green-700 rounded-xl text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Don't Miss Any Matches
      </h2>
      <p className="text-rugby-gold mb-6 max-w-2xl mx-auto">
        Secure your tickets now for the matches you want to see. Prices increase closer to match dates.
      </p>
      <Link
        href="/tickets"
        className="inline-flex items-center bg-rugby-gold text-rugby-green px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
      >
        Get Your Tickets Now
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </section>
  );
}

export default function SchedulePage() {
  const [filters, setFilters] = useState({
    stage: '',
    date: '',
    team: '',
    venue: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Get unique values for filter dropdowns
  const uniqueDates = useMemo(() => {
    const dates = [...new Set(matches.map(m => m.date))];
    return dates.sort();
  }, []);

  const uniqueVenues = useMemo(() => {
    return [...new Set(matches.map(m => m.venue))];
  }, []);

  // Filter matches based on selected filters
  const filteredMatches = useMemo(() => {
    return matches.filter(match => {
      if (filters.stage && match.stage !== filters.stage) return false;
      if (filters.date && match.date !== filters.date) return false;
      if (filters.team && match.team1 !== filters.team && match.team2 !== filters.team) return false;
      if (filters.venue && match.venue !== filters.venue) return false;
      return true;
    });
  }, [filters]);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Match Schedule' }
  ];

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Rugby World Cup 2027 Australia",
    "description": "Complete match schedule for Rugby World Cup 2027 in Australia. 48 matches across 8 host cities featuring 20 teams competing for rugby's ultimate prize.",
    "startDate": "2027-10-01T19:00:00+10:00",
    "endDate": "2027-11-16T20:00:00+10:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "image": [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&h=1080&fit=crop",
      "https://images.unsplash.com/photo-1574629867924-91d4e6c36a9f?w=1200&h=630&fit=crop",
      "https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=1200&h=900&fit=crop"
    ],
    "location": {
      "@type": "Country",
      "name": "Australia",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "World Rugby",
      "url": "https://www.world.rugby"
    },
    "performer": {
      "@type": "SportsTeam",
      "name": "20 International Rugby Teams"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://rugbyaustralia2027.com/tickets",
      "priceCurrency": "AUD",
      "lowPrice": "25",
      "highPrice": "850",
      "availability": "https://schema.org/PreOrder",
      "validFrom": "2026-01-01T00:00:00+10:00"
    },
    "subEvent": matches.slice(0, 10).map(match => {
      const team1 = getTeamById(match.team1);
      const team2 = getTeamById(match.team2);
      const venue = getVenueById(match.venue);
      
      return {
        "@type": "SportsEvent",
        "name": `${team1?.name || 'TBD'} vs ${team2?.name || 'TBD'}`,
        "description": `Rugby World Cup 2027 ${match.stage.replace('-', ' ')} match between ${team1?.name || 'TBD'} and ${team2?.name || 'TBD'}`,
        "startDate": `${match.date}T${match.kickoffTime}:00+10:00`,
        "endDate": `${match.date}T${match.kickoffTime.split(':')[0]}:${(parseInt(match.kickoffTime.split(':')[1]) + 120) % 60}:00+10:00`,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "performer": [
          {
            "@type": "SportsTeam",
            "name": team1?.name || 'TBD',
            "nationality": team1?.name || 'TBD'
          },
          {
            "@type": "SportsTeam",
            "name": team2?.name || 'TBD',
            "nationality": team2?.name || 'TBD'
          }
        ],
        "location": {
          "@type": "StadiumOrArena",
          "name": venue?.name || 'TBD',
          "address": {
            "@type": "PostalAddress",
            "addressLocality": venue?.city || 'TBD',
            "addressCountry": "AU"
          }
        },
        "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=630&fit=crop",
        "offers": {
          "@type": "Offer",
          "url": `https://rugbyaustralia2027.com/tickets/${match.id}`,
          "priceCurrency": "AUD",
          "price": "25",
          "availability": "https://schema.org/PreOrder"
        }
      };
    })
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-rugby-green via-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rugby World Cup 2027
              <span className="block text-rugby-gold">Match Schedule</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Complete fixture list for all Rugby World Cup 2027 matches across Australia. 
              Filter by stage, date, team, or venue to find the matches you want to see.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Tournament Statistics */}
        <StatisticsSection />

        {/* Quick Links */}
        <QuickLinksSection />

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          uniqueDates={uniqueDates}
          uniqueVenues={uniqueVenues}
        />

        {/* Results Count */}
        {Object.values(filters).some(f => f !== '') && (
          <div className="mb-8">
            <p className="text-lg text-gray-700">
              Showing <span className="font-semibold">{filteredMatches.length}</span> match
              {filteredMatches.length !== 1 ? 'es' : ''} 
              {Object.values(filters).some(f => f !== '') && ' (filtered)'}
            </p>
          </div>
        )}

        {/* Match List */}
        {filteredMatches.length > 0 ? (
          <MatchList matches={filteredMatches} />
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.674-2.64" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to see more matches.
            </p>
            <button
              onClick={() => {
                setFilters({ stage: '', date: '', team: '', venue: '' });
              }}
              className="bg-rugby-green text-rugby-gold px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16">
          <TicketCTASection />
        </div>
      </div>
    </div>
  );
}