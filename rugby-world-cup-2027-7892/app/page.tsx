import Link from 'next/link';
import CountdownTimer from './components/CountdownTimer';
import NewsletterSignup from './components/NewsletterSignup';
import MatchCard from './components/MatchCard';
import { matches } from './data/matches';
import { createEventSchema, createOrganizationSchema } from './lib/structured-data';

export default function Home() {
  // Get first 3 upcoming matches for the homepage
  const featuredMatches = matches.slice(0, 3);

  // Generate structured data for the event
  const eventSchema = createEventSchema();
  const organizationSchema = createOrganizationSchema();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://rugbyaustralia2027.com',
    name: 'Rugby World Cup 2027 Australia',
    description: 'Official guide to Rugby World Cup 2027 in Australia',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://rugbyaustralia2027.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rugby World Cup 2027
              <span className="block mt-2">Australia</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Experience the ultimate rugby tournament as the world's best teams 
              battle it out across Australia's iconic venues from October 1 to November 13, 2027.
            </p>
            
            {/* Countdown Timer */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Tournament begins in:</h2>
              <CountdownTimer />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tickets"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Tickets Now
              </Link>
              <Link
                href="/schedule"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-sm text-gray-600">Teams</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-sm text-gray-600">Host Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">52</div>
              <div className="text-sm text-gray-600">Matches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">44</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Matches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Featured Matches
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't miss these epic showdowns between rugby's greatest nations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/schedule"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Plan Your Rugby Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to make the most of Rugby World Cup 2027
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">🎫</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tickets & Prices</h3>
                <p className="text-gray-600 mb-6">
                  Compare ticket prices and secure your seats from $25
                </p>
                <Link
                  href="/tickets/prices"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-2"
                >
                  View Ticket Prices
                </Link>
                <Link
                  href="/tickets"
                  className="block w-full border border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Buy Tickets
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">🏟️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Venues</h3>
                <p className="text-gray-600 mb-6">
                  Discover Australia's world-class stadiums hosting the tournament
                </p>
                <Link
                  href="/venues"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Venues
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">City Guides</h3>
                <p className="text-gray-600 mb-6">
                  Complete guides to all host cities with travel tips and attractions
                </p>
                <Link
                  href="/guide"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Cities
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">📜</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">RWC History</h3>
                <p className="text-gray-600 mb-6">
                  Explore 40 years of Rugby World Cup records and legends
                </p>
                <Link
                  href="/history"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View History
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Travel Guides</h3>
                <p className="text-gray-600 mb-6">
                  International travel guides for rugby fans worldwide
                </p>
                <Link
                  href="/travel/from/uk"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-2"
                >
                  From UK
                </Link>
                <Link
                  href="/travel"
                  className="block w-full border border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  All Travel Info
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">🏉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teams</h3>
                <p className="text-gray-600 mb-6">
                  All 24 qualified teams with profiles and fixtures
                </p>
                <Link
                  href="/teams"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Teams
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay in the Game
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get exclusive updates, match alerts, and special offers delivered straight to your inbox
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <NewsletterSignup variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Rugby World Cup 2027: The Ultimate Rugby Experience in Australia
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            From October 1 to November 13, 2027, witness rugby's greatest nations compete for ultimate glory 
            across Australia's most iconic stadiums. Don't miss the All Blacks, Springboks, Wallabies, and 
            other rugby powerhouses battle for World Cup glory on Australian soil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tickets"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Get Your Tickets
            </Link>
            <Link 
              href="/guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
