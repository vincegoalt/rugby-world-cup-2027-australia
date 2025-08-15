import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug } from '../../data/cities';
import { getVenuesByCity } from '../../data/venues';
import { getCityData } from '../../data/cityGuideData';
import { generateMetadata as generateSEOMetadata, generateCityKeywords } from '../../lib/seo';
import { getCityImage, getVenueImage } from '../../lib/images';

interface CityPageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  
  if (!city) {
    return {};
  }
  
  return generateSEOMetadata({
    title: `${city.name} Travel Guide - Rugby World Cup 2027`,
    description: `Complete ${city.name} travel guide for Rugby World Cup 2027. Find hotels, attractions, restaurants, transport, and match venues.`,
    keywords: generateCityKeywords(city.name),
    canonical: `/guide/${city.slug}`
  });
}

export default function CityGuidePage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city);
  
  if (!city) {
    notFound();
  }

  const cityVenues = getVenuesByCity(city.name);
  const cityData = getCityData(city.name);

  const cityImage = getCityImage(city.slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with City Image */}
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-green-800 text-white py-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src={cityImage} 
            alt={city.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/70 to-green-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-blue-200 hover:text-white text-sm font-medium">
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/guide" className="text-blue-200 hover:text-white text-sm font-medium">
                  City Guides
                </Link>
              </li>
              <li className="inline-flex items-center">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-400 text-sm font-medium">
                  {city.name}
                </span>
              </li>
            </ol>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {city.name}
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">Rugby World Cup 2027 Host City</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {city.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tickets"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Match Tickets
              </Link>
              <Link
                href="#attractions"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Explore City
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* City Quick Stats */}
        <section className="py-12 bg-white border-b mb-8 rounded-lg shadow-lg">
          <div className="px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{cityVenues.length}</div>
                <div className="text-sm text-gray-600">Rugby Venues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.attractions.length}</div>
                <div className="text-sm text-gray-600">Top Attractions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.restaurants.length}</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.accommodations.length}</div>
                <div className="text-sm text-gray-600">Hotels</div>
              </div>
            </div>
          </div>
        </section>

        {/* Venues */}
        {cityVenues.length > 0 && (
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Rugby World Cup Venues in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cityVenues.map((venue) => {
                const venueImage = getVenueImage(venue.slug);
                return (
                  <div key={venue.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image 
                        src={venueImage} 
                        alt={venue.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        RWC 2027 Venue
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{venue.name}</h3>
                      <div className="text-blue-600 font-semibold mb-4">Capacity: {venue.capacity.toLocaleString()}</div>
                      {venue.description && (
                        <p className="text-gray-600 mb-4">{venue.description}</p>
                      )}
                      <div className="space-y-2">
                        <Link
                          href={`/venues/${venue.slug}`}
                          className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Venue Details
                        </Link>
                        <Link
                          href={`/tickets?venue=${venue.slug}`}
                          className="block w-full border border-blue-600 text-blue-600 text-center py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                          Get Tickets
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Top Attractions with Images */}
        {cityData.attractions.length > 0 && (
          <section id="attractions" className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Top Attractions in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image 
                      src={`https://images.unsplash.com/photo-${[
                        '1506973035872-a4ec16b8e8d9', // Sydney Opera House style
                        '1523482580672-f109ba8cb9be', // Landmark
                        '1514395462725-fb4566210144', // City view
                        '1494233882247-1654b72f7e4f', // Tourist attraction
                        '1560969184-10fe8659e19b', // Museum
                        '1506905925191-d78c8a6d7535'  // Beach/harbor
                      ][index % 6]}?w=800&h=600&fit=crop`} 
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                      Must See
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{attraction.name}</h3>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-600 font-semibold">{attraction.distance}</span>
                      <span className="text-gray-500">{attraction.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Accommodation */}
        {cityData.accommodations.length > 0 && (
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Where to Stay in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.accommodations.map((accommodation, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image 
                      src={`https://images.unsplash.com/photo-${[
                        '1551882547-ff40c63fe5fa', // Hotel room
                        '1566073771-7381a3eb8037', // Hotel exterior
                        '1455587734955-8a913a118864', // Hotel lobby
                        '1522708323590-d24dbb6b0267', // Apartment
                        '1571003530729-054574c3f3da', // Hotel suite
                        '1512918728675-ed5a9ecdebfd'  // Hotel interior
                      ][index % 6]}?w=800&h=600&fit=crop`} 
                      alt={accommodation.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                      {accommodation.priceRange}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{accommodation.name}</h3>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      {accommodation.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                    <a 
                      href={accommodation.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Check Availability
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Transport */}
        {cityData.transport.length > 0 && (
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Getting Around {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cityData.transport.map((option, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{option.type}</h3>
                    <span className="text-blue-600 font-semibold">{option.cost}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  {option.tips.length > 0 && (
                    <ul className="text-sm text-gray-600 space-y-1">
                      {option.tips.map((tip, idx) => (
                        <li key={idx}>✓ {tip}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Attractions */}
        {city.attractions && city.attractions.length > 0 && (
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Must-Visit Attractions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.attractions.map((attraction, index) => {
                const name = typeof attraction === 'string' ? attraction : attraction.name;
                const description = typeof attraction === 'string' ? null : attraction.description;
                
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">{name}</h3>
                    {description && (
                      <p className="text-sm text-gray-600 mt-1">{description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Restaurants with Images */}
        {cityData.restaurants.length > 0 && (
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Where to Eat in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image 
                      src={`https://images.unsplash.com/photo-${[
                        '1414235077428-338989a2e8c0', // Restaurant interior
                        '1552566626-52fd8b79c0c6', // Dining
                        '1517248135467-4c7167401e02', // Restaurant exterior
                        '1550966871-7831734289a0', // Cafe
                        '1555396273-eb8e31ff0b3c', // Restaurant food
                        '1466978913421-44090aa199ed'  // Bar/restaurant
                      ][index % 6]}?w=800&h=600&fit=crop`} 
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {restaurant.priceRange}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{restaurant.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{restaurant.cuisine}</p>
                    <p className="text-gray-600 text-sm">{restaurant.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Fan Zones */}
        {cityData.fanZones.length > 0 && (
          <section className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Official Fan Zones
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cityData.fanZones.map((fanZone, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🏉</div>
                    <p className="text-gray-700">{fanZone}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Local Tips */}
        {cityData.localTips.length > 0 && (
          <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-green-800 text-white rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">
              Local Insider Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cityData.localTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <p className="text-blue-100">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {cityData.faqs.length > 0 && (
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {cityData.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-blue-800 rounded-lg text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Rugby in {city.name}?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Secure your tickets now and enjoy world-class rugby in one of Australia's most exciting cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tickets"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Get Tickets Now
            </Link>
            <Link
              href="/schedule"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}