import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata, generateVenueKeywords } from '../lib/seo';
import { venues, getVenuesByCity } from '../data/venues';
import { getMatchesByVenue } from '../data/matches';
import { formatCapacity } from '../lib/utils';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup 2027 Venues - All 8 Australian Stadiums',
  description: 'Discover all 8 Rugby World Cup 2027 venues across Australia. From Accor Stadium in Sydney to Optus Stadium in Perth, explore stadium information, capacity, and match schedules.',
  keywords: [
    'rugby world cup 2027 venues',
    'australia rugby stadiums',
    'rwc venues',
    'accor stadium',
    'marvel stadium',
    'suncorp stadium',
    'optus stadium',
    'adelaide oval',
    'rugby venues australia',
    'world cup stadiums'
  ],
  canonical: '/venues'
});

export default function VenuesPage() {
  // Group venues by city for better organization
  const venuesByCity = venues.reduce((acc, venue) => {
    if (!acc[venue.city]) {
      acc[venue.city] = [];
    }
    acc[venue.city].push(venue);
    return acc;
  }, {} as Record<string, typeof venues>);

  // Calculate total capacity
  const totalCapacity = venues.reduce((sum, venue) => sum + venue.capacity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rugby World Cup 2027 Venues
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Eight world-class stadiums across seven Australian cities will host the Rugby World Cup 2027. 
              From iconic venues to modern masterpieces, discover where rugby history will be made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#venues-list"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Explore Venues
              </Link>
              <Link 
                href="#venue-stats"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                View Statistics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Statistics */}
      <section id="venue-stats" className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Host Venues</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-sm text-gray-600">Host Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{formatCapacity(totalCapacity)}</div>
              <div className="text-sm text-gray-600">Total Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">52</div>
              <div className="text-sm text-gray-600">Total Matches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Iconic Rugby Venues
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From the largest stadium in the Southern Hemisphere to intimate regional venues, 
              each location offers a unique atmosphere for rugby's greatest tournament.
            </p>
          </div>
          
          {/* Flagship venues */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {venues.filter(v => ['accor-stadium', 'marvel-stadium'].includes(v.id)).map((venue) => {
              const venueMatches = getMatchesByVenue(venue.id);
              const finalMatch = venueMatches.find(match => match.stage === 'final');
              const semiMatch = venueMatches.find(match => match.stage === 'semi-final');
              
              return (
                <div key={venue.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="relative">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-64 object-cover"
                    />
                    {finalMatch && (
                      <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Final Venue
                      </div>
                    )}
                    {semiMatch && !finalMatch && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Semi-Final Venue
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{venue.name}</h3>
                    <div className="text-blue-600 font-semibold mb-4">{venue.city}</div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-600">Capacity</div>
                        <div className="text-xl font-bold text-gray-900">
                          {formatCapacity(venue.capacity)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Matches</div>
                        <div className="text-xl font-bold text-gray-900">
                          {venueMatches.length}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Link 
                        href={`/venues/${venue.slug}`}
                        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Explore {venue.name}
                      </Link>
                      <Link 
                        href={`/tickets?venue=${venue.slug}`}
                        className="block w-full border border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        View Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Venues */}
      <section id="venues-list" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              All Tournament Venues
            </h2>
            <p className="text-lg text-gray-600">
              Eight stadiums across seven Australian cities ready to host the world's best rugby teams
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {venues.map((venue) => {
              const venueMatches = getMatchesByVenue(venue.id);
              const hasKnockoutMatch = venueMatches.some(match => 
                ['quarter-final', 'semi-final', 'bronze-final', 'final'].includes(match.stage)
              );
              
              return (
                <div key={venue.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-48 object-cover"
                    />
                    {hasKnockoutMatch && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        Knockout Venue
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{venue.name}</h3>
                    <div className="text-blue-600 font-semibold mb-4">{venue.city}</div>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span className="font-semibold">{formatCapacity(venue.capacity)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Matches:</span>
                        <span className="font-semibold">{venueMatches.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>City:</span>
                        <span className="font-semibold">{venue.city}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Link 
                        href={`/venues/${venue.slug}`}
                        className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Venue Details
                      </Link>
                      <Link 
                        href={`/guide/${venue.city.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block w-full border border-blue-600 text-blue-600 text-center py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        City Guide
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Venues by City */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Venues by Host City
            </h2>
            <p className="text-lg text-gray-600">
              Explore venues organized by their host cities across Australia
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {Object.entries(venuesByCity).map(([city, cityVenues]) => (
              <div key={city} className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-700 text-white p-4">
                  <h3 className="text-xl font-bold">{city}</h3>
                  <div className="text-blue-200 text-sm">
                    {cityVenues.length} venue{cityVenues.length > 1 ? 's' : ''} • 
                    Total capacity: {formatCapacity(cityVenues.reduce((sum, v) => sum + v.capacity, 0))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {cityVenues.map((venue) => {
                      const venueMatches = getMatchesByVenue(venue.id);
                      return (
                        <div key={venue.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={venue.image} 
                              alt={venue.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-semibold text-gray-900">{venue.name}</div>
                              <div className="text-sm text-gray-600">
                                Capacity: {formatCapacity(venue.capacity)} • {venueMatches.length} matches
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Link 
                              href={`/venues/${venue.slug}`}
                              className="text-xs bg-blue-600 text-white px-3 py-1 rounded font-medium hover:bg-blue-700 transition-colors"
                            >
                              Details
                            </Link>
                            <Link 
                              href={`/tickets?venue=${venue.slug}`}
                              className="text-xs border border-blue-600 text-blue-600 px-3 py-1 rounded font-medium hover:bg-blue-50 transition-colors"
                            >
                              Tickets
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <Link 
                      href={`/guide/${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Explore {city}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              World-Class Facilities
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-4">🏟️</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Modern Stadiums</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art facilities with excellent sightlines, premium amenities, 
                  and cutting-edge technology for the ultimate rugby experience.
                </p>
              </div>
              
              <div>
                <div className="text-5xl mb-4">🚇</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Easy Access</h3>
                <p className="text-gray-600 leading-relaxed">
                  All venues are well-connected by public transport, with dedicated 
                  transport services and ample parking for match days.
                </p>
              </div>
              
              <div>
                <div className="text-5xl mb-4">🍴</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Premium Hospitality</h3>
                <p className="text-gray-600 leading-relaxed">
                  From casual dining to premium hospitality suites, 
                  each venue offers diverse food and beverage options for every fan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience Rugby at Australia's Best Venues
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            From the iconic Accor Stadium to the intimate regional venues, 
            each location offers a unique perspective on rugby's greatest tournament. 
            Plan your venue visits today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tickets"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Buy Venue Tickets
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
  );
}