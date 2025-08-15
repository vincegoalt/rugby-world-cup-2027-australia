import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateVenueKeywords, generateVenueSchema, generateBreadcrumbSchema } from '../../lib/seo';
import { venues, getVenueBySlug } from '../../data/venues';
import { getMatchesByVenue } from '../../data/matches';
import { getTeamById } from '../../data/teams';
import { formatDate, formatTime, formatCapacity } from '../../lib/utils';
import { STAGE_NAMES } from '../../lib/constants';

interface VenuePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return venues.map((venue) => ({
    slug: venue.slug,
  }));
}

export async function generateMetadata({ params }: VenuePageProps): Promise<Metadata> {
  const venue = getVenueBySlug(params.slug);
  
  if (!venue) {
    return {
      title: 'Venue Not Found',
    };
  }

  const title = `${venue.name} - Rugby World Cup 2027 Venue Guide & Tickets`;
  const description = `Complete guide to ${venue.name} in ${venue.city} for Rugby World Cup 2027. Capacity ${formatCapacity(venue.capacity)}, match schedule, seating info, and ticket prices.`;

  return generateSEOMetadata({
    title,
    description,
    keywords: generateVenueKeywords(venue.name, venue.city),
    canonical: `/venues/${params.slug}`
  });
}

// Mock venue details - in production this would come from a CMS or database
const getVenueDetails = (venueId: string) => {
  const venueDetailsMap: Record<string, any> = {
    'accor-stadium': {
      address: 'Olympic Boulevard, Sydney Olympic Park NSW 2127',
      opened: 1999,
      architect: 'Populous (renovation)',
      features: ['Retractable roof', 'Premium club seating', 'Multiple dining options', 'VIP suites'],
      transport: ['Olympic Park train station (5 min walk)', 'Dedicated bus services', 'P1-P7 parking areas'],
      dining: ['The Club Restaurant', 'Sports Bar & Grill', 'Quick service outlets', 'VIP hospitality'],
      accessibility: 'Full wheelchair access, hearing loops, accessible parking',
      nearbyAttractions: ['Sydney Olympic Park', 'ANZ Stadium Walk of Fame', 'Bicentennial Park'],
      stadiumTours: {
        available: true,
        description: 'Behind-the-scenes access to player facilities, pitch, and premium areas',
        duration: '75 minutes',
        price: 'Adult $35, Child $25, Family $95',
        times: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
        bookingUrl: 'https://www.accorhotelsstadium.com.au/tours',
        includes: ['Player tunnel walk', 'Changing rooms', 'Press conference room', 'Premium club areas']
      },
      seatingGuide: {
        bestViews: {
          premium: 'Level 4 Club Seats - elevated midfield views with hospitality',
          value: 'Level 1 Categories 1-2 - close to action, great atmosphere',
          family: 'Level 2 Family Zone - alcohol-free area with activities'
        },
        sections: {
          'Category 1': { capacity: 15000, price: '$250-400', description: 'Premium lower bowl, best views' },
          'Category 2': { capacity: 18000, price: '$150-280', description: 'Lower bowl sides and corners' },
          'Category 3': { capacity: 20000, price: '$80-180', description: 'Upper level with good views' },
          'Category 4': { capacity: 10000, price: '$45-120', description: 'Upper corners and restricted view' }
        }
      },
      foodAndBeverage: {
        restaurants: [
          { name: 'The Club Restaurant', type: 'Fine Dining', price: '$$$', description: 'Premium pre-match dining with stadium views' },
          { name: 'Stadium Sports Bar', type: 'Casual Dining', price: '$$', description: 'Sports bar with large screens and pub food' }
        ],
        concessions: [
          { item: 'Meat Pies', price: '$8-12', locations: 'All concourse levels' },
          { item: 'Hot Dogs & Burgers', price: '$10-18', locations: 'Main concourses' },
          { item: 'Beer (XXXX, Carlton)', price: '$12-15', locations: 'Licensed areas only' },
          { item: 'Soft Drinks', price: '$5-8', locations: 'All levels' },
          { item: 'Coffee', price: '$5-7', locations: 'Main concourses' }
        ],
        specialties: ['Australian meat pies', 'Gourmet burgers', 'Local craft beer', 'Vegetarian options']
      },
      parking: {
        onsite: {
          available: true,
          spaces: 7500,
          cost: '$25-35 per match',
          zones: ['P1 (Premium) - $35', 'P2-P4 (General) - $30', 'P5-P7 (Economy) - $25'],
          bookingAdvice: 'Pre-book online for guaranteed space and discount'
        },
        nearby: [
          { name: 'Olympic Park Shopping Centre', distance: '800m', cost: '$15', capacity: 2000 },
          { name: 'Bicentennial Park', distance: '1.2km', cost: '$10', capacity: 1500, note: 'Free shuttle on match days' }
        ],
        alternatives: [
          'Train to Olympic Park Station (recommended)',
          'Bus services from city and suburbs',
          'Taxi/rideshare drop-off zones'
        ]
      },
      preMatchEntertainment: {
        fanZone: {
          location: 'Olympic Park Precinct',
          openTime: '3 hours before kick-off',
          features: ['Live music', 'Food trucks', 'Rugby activities', 'Kids zone', 'Merchandise stalls'],
          entry: 'Free with match ticket'
        },
        stadium: {
          openTime: '2 hours before kick-off',
          entertainment: ['Live DJ', 'Player warm-ups viewing', 'Stadium announcements', 'Big screen content'],
          activities: ['Photo opportunities', 'Face painting', 'Rugby skills challenges']
        }
      },
      merchandise: {
        officialStore: {
          location: 'Ground floor main entrance',
          hours: '2 hours before kick-off to 1 hour after match',
          items: ['Team jerseys', 'Rugby World Cup merchandise', 'Stadium souvenirs', 'Scarves & hats']
        },
        concourseStalls: {
          locations: 'All levels',
          items: ['Programs', 'Flags', 'Souvenirs', 'Team merchandise']
        },
        prices: {
          jerseys: '$120-180',
          programs: '$15',
          scarves: '$25-35',
          caps: '$35-45'
        }
      },
      prohibitedItems: [
        'Glass bottles and containers',
        'Alcohol (except purchased inside)',
        'Large bags (over 40cm x 30cm x 20cm)',
        'Professional cameras with detachable lenses',
        'Umbrellas with pointed ends',
        'Flares, fireworks, smoke devices',
        'Musical instruments (except small personal items)',
        'Weapons of any kind',
        'Illegal substances',
        'Outside food and drinks (small snacks allowed)'
      ],
      gateOpeningTimes: {
        general: '2 hours before kick-off',
        premium: '3 hours before kick-off (Club and hospitality)',
        disabled: '2.5 hours before kick-off',
        note: 'Gates close 30 minutes after final whistle',
        recommendedArrival: '1 hour before kick-off for best experience'
      }
    }
  };
  
  return venueDetailsMap[venueId] || {
    address: 'Stadium Address',
    opened: 2000,
    architect: 'Stadium Architect',
    features: ['Modern facilities', 'Premium seating', 'Food & beverage outlets', 'Accessible design'],
    transport: ['Public transport access', 'Parking available', 'Taxi/ride-share zones'],
    dining: ['Stadium restaurants', 'Concession stands', 'Premium hospitality'],
    accessibility: 'Wheelchair accessible seating and facilities',
    nearbyAttractions: ['Local attractions', 'City center', 'Tourist destinations'],
    stadiumTours: {
      available: true,
      description: 'Guided tours of stadium facilities',
      duration: '60 minutes',
      price: 'Adult $25, Child $15',
      times: ['11:00 AM', '1:00 PM', '3:00 PM']
    },
    seatingGuide: {
      bestViews: {
        premium: 'Premium seating with best views',
        value: 'Good value seats with decent views',
        family: 'Family-friendly seating areas'
      },
      sections: {
        'Premium': { capacity: 10000, price: '$200-350', description: 'Best seats in the house' },
        'General': { capacity: 30000, price: '$80-200', description: 'Standard seating' },
        'Economy': { capacity: 10000, price: '$50-120', description: 'Budget-friendly options' }
      }
    },
    foodAndBeverage: {
      restaurants: [{ name: 'Stadium Restaurant', type: 'Casual', price: '$$', description: 'Match day dining' }],
      concessions: [{ item: 'Snacks & Drinks', price: '$5-15', locations: 'All levels' }],
      specialties: ['Local favorites', 'International cuisine']
    },
    parking: {
      onsite: { available: true, spaces: 5000, cost: '$20-30', zones: ['General parking'] },
      alternatives: ['Public transport', 'Taxi/rideshare']
    },
    preMatchEntertainment: {
      fanZone: { location: 'Stadium precinct', openTime: '2 hours before', features: ['Entertainment', 'Food'] },
      stadium: { openTime: '1.5 hours before', entertainment: ['Pre-match activities'] }
    },
    merchandise: {
      officialStore: { location: 'Main entrance', items: ['Jerseys', 'Souvenirs'] },
      prices: { jerseys: '$100-150', programs: '$10' }
    },
    prohibitedItems: ['Glass bottles', 'Large bags', 'Weapons', 'Outside alcohol'],
    gateOpeningTimes: {
      general: '2 hours before kick-off',
      recommendedArrival: '1 hour before kick-off'
    }
  };
};

export default function VenuePage({ params }: VenuePageProps) {
  const venue = getVenueBySlug(params.slug);
  
  if (!venue) {
    notFound();
  }

  const venueMatches = getMatchesByVenue(venue.id);
  const upcomingMatches = venueMatches.filter(match => 
    new Date(`${match.date}T${match.kickoffTime}:00`) > new Date()
  );
  const details = getVenueDetails(venue.id);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Venues', url: '/venues' },
    { name: venue.name, url: `/venues/${venue.slug}` }
  ];

  const venueSchema = generateVenueSchema({
    name: venue.name,
    address: details.address,
    city: venue.city,
    capacity: venue.capacity,
    image: venue.image
  });

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-green-800 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={venue.image} 
              alt={venue.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/50 to-transparent"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="mb-8">
                <ol className="flex flex-wrap text-sm text-blue-200">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.name} className="flex items-center">
                      {index > 0 && <span className="mx-2">/</span>}
                      {index < breadcrumbs.length - 1 ? (
                        <Link href={crumb.url} className="hover:text-white">
                          {crumb.name}
                        </Link>
                      ) : (
                        <span className="text-white">{crumb.name}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {venue.name}
                </h1>
                <div className="text-xl mb-6 text-blue-100">
                  {venue.city} • Capacity: {formatCapacity(venue.capacity)}
                </div>
                <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
                  Experience Rugby World Cup 2027 at {venue.name}, one of Australia's premier sporting venues. 
                  {venueMatches.length} matches including knockout stage games.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="#matches"
                    className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                  >
                    View Matches
                  </Link>
                  <Link 
                    href="#venue-info"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition-colors"
                  >
                    Venue Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Stats */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{formatCapacity(venue.capacity)}</div>
                <div className="text-sm text-gray-600">Seat Capacity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{venueMatches.length}</div>
                <div className="text-sm text-gray-600">Tournament Matches</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{details.opened}</div>
                <div className="text-sm text-gray-600">Year Opened</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{venue.city}</div>
                <div className="text-sm text-gray-600">Host City</div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Image Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {venue.name} Stadium View
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl h-96">
                <Image 
                  src={venue.image} 
                  alt={`${venue.name} - Rugby World Cup 2027 Venue`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {venue.description || `${venue.name} will host ${venueMatches.length} matches during Rugby World Cup 2027`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Matches at Venue */}
        <section id="matches" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Matches at {venue.name}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {upcomingMatches.map((match) => {
                const team1 = getTeamById(match.team1);
                const team2 = getTeamById(match.team2);
                const stageName = STAGE_NAMES[match.stage];
                
                return (
                  <div key={match.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className={`p-4 ${
                      match.stage === 'final' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black' :
                      match.stage === 'semi-final' ? 'bg-gradient-to-r from-green-600 to-green-700 text-white' :
                      'bg-blue-700 text-white'
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{stageName}</span>
                        <span className="text-sm">From $25</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                          <div className="text-3xl mb-2">{team1?.flagEmoji}</div>
                          <div className="font-semibold">{team1?.name}</div>
                        </div>
                        
                        <div className="text-2xl text-gray-400">vs</div>
                        
                        <div className="text-center">
                          <div className="text-3xl mb-2">{team2?.flagEmoji}</div>
                          <div className="font-semibold">{team2?.name}</div>
                        </div>
                      </div>
                      
                      <div className="text-center text-gray-600 mb-4">
                        <div className="font-medium">{formatDate(match.date)}</div>
                        <div>{formatTime(match.kickoffTime)} • {venue.name}</div>
                      </div>
                      
                      <Link 
                        href={`/tickets/${match.id}`}
                        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Buy Match Tickets
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Venue Information */}
        <section id="venue-info" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Venue Information
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Stadium Details</h3>
                    <div className="space-y-3 text-gray-600">
                      <div>
                        <strong className="text-gray-900">Address:</strong> {details.address}
                      </div>
                      <div>
                        <strong className="text-gray-900">Capacity:</strong> {formatCapacity(venue.capacity)}
                      </div>
                      <div>
                        <strong className="text-gray-900">Opened:</strong> {details.opened}
                      </div>
                      <div>
                        <strong className="text-gray-900">Architect:</strong> {details.architect}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Key Features</h3>
                    <ul className="space-y-2">
                      {details.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="text-blue-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Getting There</h3>
                  <ul className="space-y-2 text-gray-600">
                    {details.transport.map((option: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Dining Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    {details.dining.map((option: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Accessibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {details.accessibility}
                  </p>
                  <div className="mt-4">
                    <Link 
                      href="/accessibility"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn more about accessibility →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stadium Tours */}
        {details.stadiumTours?.available && (
          <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                  Stadium Tours
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-purple-800">Behind the Scenes</h3>
                    <p className="text-gray-600 mb-6">{details.stadiumTours.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="font-bold text-purple-800">Duration</div>
                        <div className="text-purple-600">{details.stadiumTours.duration}</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="font-bold text-purple-800">Price</div>
                        <div className="text-purple-600">{details.stadiumTours.price}</div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-3">Tour Includes:</h4>
                    <ul className="space-y-2 mb-6">
                      {details.stadiumTours.includes?.map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="text-purple-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {details.stadiumTours.bookingUrl && (
                      <a
                        href={details.stadiumTours.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                      >
                        Book Stadium Tour
                      </a>
                    )}
                  </div>
                  
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-blue-800">Tour Times</h3>
                    <p className="text-gray-600 mb-6">Daily tours available (subject to match schedules)</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {details.stadiumTours.times?.map((time: string, index: number) => (
                        <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-semibold text-blue-800">{time}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Tours may be cancelled on match days</li>
                        <li>• Advance booking recommended</li>
                        <li>• Photography restrictions apply in some areas</li>
                        <li>• Comfortable walking shoes recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seating Guide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Seating Guide & Best Views
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">Recommended Seating</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold text-green-800 mb-2">Premium Experience</h4>
                      <p className="text-gray-600 text-sm">{details.seatingGuide?.bestViews?.premium}</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold text-blue-800 mb-2">Best Value</h4>
                      <p className="text-gray-600 text-sm">{details.seatingGuide?.bestViews?.value}</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold text-purple-800 mb-2">Family Friendly</h4>
                      <p className="text-gray-600 text-sm">{details.seatingGuide?.bestViews?.family}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold p-6 border-b border-gray-200 text-blue-800">Seating Sections</h3>
                  <div className="p-6">
                    {Object.entries(details.seatingGuide?.sections || {}).map(([section, info]: [string, any]) => (
                      <div key={section} className="mb-6 last:mb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-900">{section}</h4>
                          <span className="text-green-600 font-semibold">{info.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                        <div className="text-xs text-gray-500">
                          Capacity: {info.capacity?.toLocaleString()} seats
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food & Beverage */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Food & Beverage Options
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-800">Restaurants</h3>
                  {details.foodAndBeverage?.restaurants?.map((restaurant: any, index: number) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{restaurant.name}</h4>
                        <span className="text-orange-600">{restaurant.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-1">{restaurant.type}</p>
                      <p className="text-gray-600 text-sm">{restaurant.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800">Concessions</h3>
                  {details.foodAndBeverage?.concessions?.map((item: any, index: number) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-gray-900">{item.item}</span>
                        <span className="text-blue-600 font-semibold">{item.price}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{item.locations}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">Local Specialties</h3>
                  <ul className="space-y-3">
                    {details.foodAndBeverage?.specialties?.map((specialty: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">🍽️</span>
                        <span className="text-gray-600">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Dining Tips:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Arrive early for restaurant bookings</li>
                      <li>• Cash and card accepted at most outlets</li>
                      <li>• Halal and vegetarian options available</li>
                      <li>• Outside food restrictions apply</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parking & Transport */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Parking & Transport Options
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800">Stadium Parking</h3>
                  
                  {details.parking?.onsite?.available && (
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="font-bold text-blue-800">Total Spaces</div>
                          <div className="text-blue-600">{details.parking.onsite.spaces?.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="font-bold text-blue-800">Match Day Cost</div>
                          <div className="text-blue-600">{details.parking.onsite.cost}</div>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-blue-800 mb-3">Parking Zones:</h4>
                      <ul className="space-y-2 mb-4">
                        {details.parking.onsite.zones?.map((zone: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="text-blue-500 mr-2">🚗</span>
                            {zone}
                          </li>
                        ))}
                      </ul>
                      
                      {details.parking.onsite.bookingAdvice && (
                        <div className="p-3 bg-yellow-100 rounded-lg">
                          <p className="text-yellow-800 text-sm font-semibold">
                            💡 {details.parking.onsite.bookingAdvice}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <h4 className="font-bold text-blue-800 mb-3">Nearby Parking:</h4>
                  <div className="space-y-3">
                    {details.parking?.nearby?.map((lot: any, index: number) => (
                      <div key={index} className="p-3 bg-white rounded-lg">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-gray-900">{lot.name}</span>
                          <span className="text-green-600 font-semibold">{lot.cost}</span>
                        </div>
                        <div className="text-sm text-gray-500">{lot.distance} • {lot.capacity} spaces</div>
                        {lot.note && <div className="text-sm text-blue-600 mt-1">{lot.note}</div>}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">Alternative Transport</h3>
                  
                  <div className="space-y-4">
                    {details.parking?.alternatives?.map((option: string, index: number) => (
                      <div key={index} className="flex items-start p-3 bg-white rounded-lg">
                        <span className="text-green-500 mr-3 mt-1">🚊</span>
                        <span className="text-gray-600">{option}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Recommended:</h4>
                    <p className="text-green-700 text-sm">
                      Public transport is often faster and more convenient on match days. 
                      Trains run frequently and drop you closer to the stadium entrance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Match Entertainment */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Pre-Match Entertainment
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-purple-800">Fan Zone</h3>
                  <p className="text-gray-600 mb-4">
                    Location: {details.preMatchEntertainment?.fanZone?.location}
                  </p>
                  <p className="text-purple-600 font-semibold mb-6">
                    Opens: {details.preMatchEntertainment?.fanZone?.openTime}
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">Features:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {details.preMatchEntertainment?.fanZone?.features?.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-gray-600 text-sm">
                        <span className="text-purple-500 mr-2">🎪</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <p className="text-purple-800 font-semibold text-sm">
                      Entry: {details.preMatchEntertainment?.fanZone?.entry || 'Free with match ticket'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800">Stadium Activities</h3>
                  <p className="text-blue-600 font-semibold mb-6">
                    Stadium opens: {details.preMatchEntertainment?.stadium?.openTime}
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">Entertainment:</h4>
                  <ul className="space-y-2 mb-6">
                    {details.preMatchEntertainment?.stadium?.entertainment?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2 mt-1">🎵</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-bold text-gray-900 mb-3">Activities:</h4>
                  <ul className="space-y-2">
                    {details.preMatchEntertainment?.stadium?.activities?.map((activity: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2 mt-1">🏉</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merchandise & Shopping */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Merchandise & Shopping
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-yellow-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-800">Official Store</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="font-semibold text-gray-900">Location: </span>
                      <span className="text-gray-600">{details.merchandise?.officialStore?.location}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Hours: </span>
                      <span className="text-gray-600">{details.merchandise?.officialStore?.hours}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-yellow-800 mb-3">Available Items:</h4>
                  <ul className="space-y-2">
                    {details.merchandise?.officialStore?.items?.map((item: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-yellow-500 mr-2">🛍️</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">Pricing Guide</h3>
                  
                  <div className="space-y-4">
                    {Object.entries(details.merchandise?.prices || {}).map(([item, price]) => (
                      <div key={item} className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span className="font-semibold text-gray-900 capitalize">{item}</span>
                        <span className="text-green-600 font-bold">{String(price)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Shopping Tips:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Shop early to avoid crowds</li>
                      <li>• Official merchandise available online too</li>
                      <li>• Limited edition items sell out quickly</li>
                      <li>• Card and cash payments accepted</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Concourse Stalls:</strong> {details.merchandise?.concourseStalls?.locations} - 
                      Quick purchases of programs, flags, and souvenirs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Important Match Day Information
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-800">Gate Opening Times</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-red-100 rounded-lg">
                      <div className="font-bold text-red-800 mb-1">General Admission</div>
                      <div className="text-red-700">{details.gateOpeningTimes?.general}</div>
                    </div>
                    
                    {details.gateOpeningTimes?.premium && (
                      <div className="p-4 bg-yellow-100 rounded-lg">
                        <div className="font-bold text-yellow-800 mb-1">Premium/Hospitality</div>
                        <div className="text-yellow-700">{details.gateOpeningTimes.premium}</div>
                      </div>
                    )}
                    
                    {details.gateOpeningTimes?.disabled && (
                      <div className="p-4 bg-blue-100 rounded-lg">
                        <div className="font-bold text-blue-800 mb-1">Accessible Seating</div>
                        <div className="text-blue-700">{details.gateOpeningTimes.disabled}</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💡 Recommended Arrival</h4>
                    <p className="text-green-700">{details.gateOpeningTimes?.recommendedArrival}</p>
                    {details.gateOpeningTimes?.note && (
                      <p className="text-green-600 text-sm mt-2">{details.gateOpeningTimes.note}</p>
                    )}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-800">Prohibited Items</h3>
                  <p className="text-gray-600 mb-6">
                    The following items are not permitted inside the stadium for safety and security reasons:
                  </p>
                  
                  <ul className="space-y-2">
                    {details.prohibitedItems?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-red-500 mr-2 mt-1">❌</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Security Screening</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• All bags subject to search</li>
                      <li>• Metal detector screening</li>
                      <li>• Allow extra time for entry</li>
                      <li>• Security reserves right to refuse entry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Nearby Attractions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {details.nearbyAttractions.map((attraction: string, index: number) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">📍</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{attraction}</h3>
                    <p className="text-gray-600 text-sm">
                      Explore this popular attraction near {venue.name}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  href={`/guide/${venue.city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Complete {venue.city} Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Experience Rugby World Cup 2027 at {venue.name}
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Don't miss the chance to witness world-class rugby at one of Australia's premier venues. 
              {venueMatches.length} exciting matches await, including knockout stage action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tickets"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                Buy {venue.name} Tickets
              </Link>
              <Link 
                href={`/guide/${venue.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
              >
                Plan Your Visit to {venue.city}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}