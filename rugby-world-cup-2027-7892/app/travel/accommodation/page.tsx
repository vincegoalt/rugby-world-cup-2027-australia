import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema } from '../../lib/seo';
import { AFFILIATE_URL, TICKET_AFFILIATE_ID } from '../../lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Accommodation Guide - Rugby World Cup 2027 Australia',
  description: 'Complete accommodation guide for Rugby World Cup 2027 in Australia. Hotels, hostels, Airbnb, camping, booking tips, prices, best areas to stay, and official RWC packages.',
  keywords: [
    'rugby world cup 2027 accommodation',
    'australia hotels rugby world cup',
    'rugby world cup accommodation packages',
    'best areas stay australia rugby',
    'australia hostels hotels booking',
    'rugby world cup 2027 places stay',
    'australia accommodation booking tips',
    'rugby world cup hotel deals'
  ],
  canonical: '/travel/accommodation'
});

interface AccommodationType {
  type: string;
  description: string;
  priceRange: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
  bookingTips: string[];
  rugbyWorldCupNotes: string;
}

const accommodationTypes: AccommodationType[] = [
  {
    type: 'Luxury Hotels',
    description: 'Premium hotels with full-service amenities, concierge services, and prime locations',
    priceRange: '$300-800+ per night',
    bestFor: ['Business travelers', 'Special occasions', 'Premium experience seekers', 'Group hospitality'],
    pros: [
      'Prime city center locations',
      'Full service amenities (spas, restaurants, gyms)',
      'Concierge services for bookings and recommendations',
      'Room service and housekeeping',
      'Business facilities',
      'Loyalty program benefits'
    ],
    cons: [
      'Most expensive option',
      'Can book out quickly during major events',
      'May have minimum stay requirements',
      'Additional charges for services'
    ],
    bookingTips: [
      'Book 6-12 months ahead for Rugby World Cup',
      'Join hotel loyalty programs for upgrades',
      'Check for package deals including breakfast',
      'Consider booking through hotel directly for best rates',
      'Look for early booking discounts'
    ],
    rugbyWorldCupNotes: 'Many luxury hotels offer official RWC packages with match tickets, transport, and exclusive events'
  },
  {
    type: 'Mid-Range Hotels',
    description: 'Comfortable hotels with good amenities and convenient locations',
    priceRange: '$150-350 per night',
    bestFor: ['Families', 'Business travelers', 'Comfort seekers', 'Central locations'],
    pros: [
      'Good balance of price and comfort',
      'Usually include breakfast',
      'Convenient locations',
      'Professional service',
      'Standard amenities (WiFi, gym, pool)',
      'Meeting facilities available'
    ],
    cons: [
      'May lack premium amenities',
      'Limited room service hours',
      'Smaller rooms than luxury hotels',
      'Can be crowded during events'
    ],
    bookingTips: [
      'Book 3-6 months ahead for best rates',
      'Compare rates on multiple booking sites',
      'Check for corporate or AAA discounts',
      'Look for free breakfast inclusions',
      'Read recent reviews for service quality'
    ],
    rugbyWorldCupNotes: 'Popular choice for rugby fans - good value with comfortable amenities for match days'
  },
  {
    type: 'Boutique Hotels',
    description: 'Unique, character-filled properties with personalized service',
    priceRange: '$120-400 per night',
    bestFor: ['Couples', 'Design enthusiasts', 'Unique experiences', 'Instagram-worthy stays'],
    pros: [
      'Unique character and design',
      'Personalized service',
      'Often locally owned and operated',
      'Unique amenities and experiences',
      'Great for social media',
      'Local neighborhood feel'
    ],
    cons: [
      'Limited room availability',
      'May lack standard hotel amenities',
      'Can be more expensive than chains',
      'Service can be inconsistent'
    ],
    bookingTips: [
      'Book directly with hotel for best experience',
      'Check for package deals with local experiences',
      'Read reviews carefully for service quality',
      'Consider location relative to transport',
      'Ask about special Rugby World Cup arrangements'
    ],
    rugbyWorldCupNotes: 'Perfect for creating memorable experiences - many offer themed decorations and special rugby packages'
  },
  {
    type: 'Hostels',
    description: 'Budget-friendly shared or private accommodation with social atmosphere',
    priceRange: '$25-80 per night (dorms), $60-150 (private rooms)',
    bestFor: ['Budget travelers', 'Solo travelers', 'Young adults', 'Social atmosphere seekers'],
    pros: [
      'Very affordable rates',
      'Great for meeting other travelers',
      'Kitchen facilities available',
      'Central locations',
      'Flexible booking policies',
      'Local knowledge from staff'
    ],
    cons: [
      'Shared facilities and spaces',
      'Can be noisy',
      'Limited privacy',
      'Basic amenities only',
      'Age restrictions at some hostels'
    ],
    bookingTips: [
      'Book private rooms early for Rugby World Cup',
      'Read reviews about cleanliness and safety',
      'Check kitchen and common area facilities',
      'Consider female-only dorms if available',
      'Look for hostels with good security'
    ],
    rugbyWorldCupNotes: 'Great for meeting fellow rugby fans from around the world - many organize group activities and match viewing'
  },
  {
    type: 'Airbnb & Vacation Rentals',
    description: 'Private homes, apartments, or rooms rented directly from owners',
    priceRange: '$50-300+ per night (varies by size and location)',
    bestFor: ['Families', 'Groups', 'Extended stays', 'Local experience seekers'],
    pros: [
      'More space than hotel rooms',
      'Kitchen facilities for cooking',
      'Local neighborhood experience',
      'Can be cost-effective for groups',
      'Unique properties available',
      'Flexible check-in/out'
    ],
    cons: [
      'No daily housekeeping',
      'Quality can vary significantly',
      'Limited customer service',
      'Additional cleaning fees',
      'Host reliability varies'
    ],
    bookingTips: [
      'Read all reviews carefully',
      'Check exact location on map',
      'Understand cancellation policies',
      'Communicate with host before booking',
      'Consider Airbnb Plus for verified quality'
    ],
    rugbyWorldCupNotes: 'Many hosts offer rugby-themed stays and local match viewing recommendations'
  },
  {
    type: 'Camping & Glamping',
    description: 'Outdoor accommodation from basic camping to luxury glamping',
    priceRange: '$20-60 camping sites, $100-300 glamping',
    bestFor: ['Adventure seekers', 'Budget travelers', 'Nature lovers', 'Unique experiences'],
    pros: [
      'Very budget-friendly (camping)',
      'Unique outdoor experience',
      'Often in scenic locations',
      'Great for families with older children',
      'Community atmosphere',
      'Pet-friendly options'
    ],
    cons: [
      'Weather dependent',
      'Limited facilities',
      'Requires camping equipment',
      'May be far from city centers',
      'Shared bathroom facilities'
    ],
    bookingTips: [
      'Check weather forecasts for October/November',
      'Book powered sites for convenience',
      'Bring or rent quality camping gear',
      'Consider cabin upgrades',
      'Check proximity to public transport'
    ],
    rugbyWorldCupNotes: 'Some campgrounds organize group activities and have big screens for match viewing'
  }
];

const bestAreasToStay = [
  {
    city: 'Sydney',
    areas: [
      {
        name: 'Circular Quay & The Rocks',
        description: 'Premium location near Opera House and Harbour Bridge',
        priceRange: '$$$-$$$$',
        transport: 'Excellent - trains, buses, ferries',
        rugbyAccess: 'Direct train to Olympic Park (30 mins)',
        pros: ['Iconic attractions walking distance', 'Best harbor views', 'Premium dining'],
        cons: ['Most expensive area', 'Very touristy', 'Limited parking']
      },
      {
        name: 'Darling Harbour & Pyrmont',
        description: 'Modern area with convention centers and attractions',
        priceRange: '$$$',
        transport: 'Good - light rail and buses',
        rugbyAccess: 'Light rail to Central, then train to Olympic Park',
        pros: ['Modern hotels', 'Convention facilities', 'Family attractions'],
        cons: ['Can be crowded', 'Less authentic Sydney feel']
      },
      {
        name: 'Olympic Park',
        description: 'Purpose-built accommodation near Accor Stadium',
        priceRange: '$$-$$$',
        transport: 'Limited - mainly train connections',
        rugbyAccess: 'Walking distance to stadium',
        pros: ['Walking to matches', 'Modern facilities', 'Sports atmosphere'],
        cons: ['Limited dining options', 'Less to do outside match days']
      },
      {
        name: 'Bondi & Eastern Beaches',
        description: 'Beach lifestyle with iconic Australian experience',
        priceRange: '$$$',
        transport: 'Good - buses to city',
        rugbyAccess: 'Bus to city, then train to Olympic Park (60+ mins)',
        pros: ['Beach lifestyle', 'Great restaurants', 'Australian culture'],
        cons: ['Long travel to stadium', 'Can be party atmosphere']
      }
    ]
  },
  {
    city: 'Melbourne',
    areas: [
      {
        name: 'CBD & Collins Street',
        description: 'Heart of Melbourne with premium shopping and dining',
        priceRange: '$$$-$$$$',
        transport: 'Excellent - trams, trains, buses',
        rugbyAccess: 'Tram to Marvel Stadium (15 mins)',
        pros: ['Central location', 'Premium dining', 'Shopping', 'Cultural attractions'],
        cons: ['Expensive', 'Busy streets', 'Limited parking']
      },
      {
        name: 'Southbank & Docklands',
        description: 'Modern area along Yarra River with great views',
        priceRange: '$$$',
        transport: 'Good - trams and walking',
        rugbyAccess: 'Walking/tram to Marvel Stadium',
        pros: ['River views', 'Crown Casino nearby', 'Modern hotels'],
        cons: ['Can feel touristy', 'Wind tunnel effect in winter']
      },
      {
        name: 'Fitzroy & Carlton',
        description: 'Hip neighborhoods with local culture and dining',
        priceRange: '$$-$$$',
        transport: 'Good - trams',
        rugbyAccess: 'Tram to city, then to stadium (25 mins)',
        pros: ['Local culture', 'Great food scene', 'Boutique accommodation'],
        cons: ['Further from main attractions', 'Can be noisy at night']
      }
    ]
  },
  {
    city: 'Brisbane',
    areas: [
      {
        name: 'CBD & South Brisbane',
        description: 'City center with access to cultural precinct',
        priceRange: '$$-$$$',
        transport: 'Excellent - trains, buses, ferries',
        rugbyAccess: 'Train to venue stations',
        pros: ['Central location', 'Good transport', 'Business facilities'],
        cons: ['Limited nightlife', 'Can be quiet on weekends']
      },
      {
        name: 'Gold Coast (Surfers Paradise)',
        description: 'Beach resort atmosphere with theme parks nearby',
        priceRange: '$$-$$$$',
        transport: 'Good - light rail and buses',
        rugbyAccess: 'Light rail to Robina for stadium',
        pros: ['Beach lifestyle', 'Resort amenities', 'Entertainment'],
        cons: ['Very touristy', 'Can be expensive', 'Party atmosphere']
      }
    ]
  },
  {
    city: 'Perth',
    areas: [
      {
        name: 'Perth CBD',
        description: 'City center with good transport connections',
        priceRange: '$$-$$$',
        transport: 'Good - trains and buses',
        rugbyAccess: 'Train and bus to stadium',
        pros: ['Central location', 'Business facilities', 'Good transport'],
        cons: ['Limited weekend activity', 'Can be quiet at night']
      },
      {
        name: 'Fremantle',
        description: 'Historic port city with character and charm',
        priceRange: '$$',
        transport: 'Good - train to Perth',
        rugbyAccess: 'Train to Perth, then to stadium',
        pros: ['Historic charm', 'Great food scene', 'Weekend markets'],
        cons: ['Further from city', 'Limited luxury options']
      }
    ]
  }
];

const bookingWebsites = [
  {
    name: 'Booking.com',
    description: 'Largest global accommodation platform',
    pros: ['Huge selection', 'Free cancellation options', 'Guest reviews', 'Best price guarantee'],
    cons: ['Can be overwhelming', 'Some fake reviews', 'Booking fees'],
    rugbyWorldCupTip: 'Use filters for "Rugby World Cup friendly" properties'
  },
  {
    name: 'Expedia',
    description: 'Travel package specialist with accommodation',
    pros: ['Package deals available', 'Loyalty program', 'Multi-city bookings'],
    cons: ['Can be more expensive', 'Limited local properties'],
    rugbyWorldCupTip: 'Look for flight + hotel packages for multiple cities'
  },
  {
    name: 'Hotels.com',
    description: 'Hotel specialist with loyalty rewards',
    pros: ['Stay 10 nights, get 1 free', 'Hotels only focus', 'Price matching'],
    cons: ['Limited non-hotel options', 'Loyalty program restrictions'],
    rugbyWorldCupTip: 'Great for chain hotels with consistent service'
  },
  {
    name: 'Airbnb',
    description: 'Private accommodation and unique experiences',
    pros: ['Unique properties', 'Local experiences', 'Good for groups', 'Kitchen facilities'],
    cons: ['Quality varies', 'No daily service', 'Host dependent'],
    rugbyWorldCupTip: 'Search for "Rugby World Cup" in descriptions for themed stays'
  },
  {
    name: 'Hostelworld',
    description: 'Backpacker and budget accommodation specialist',
    pros: ['Best hostel selection', 'Traveler reviews', 'Social atmosphere'],
    cons: ['Limited luxury options', 'Age restrictions at some properties'],
    rugbyWorldCupTip: 'Book private rooms early - hostels popular with young rugby fans'
  },
  {
    name: 'Direct Hotel Bookings',
    description: 'Booking directly with hotel websites',
    pros: ['Best rates often', 'Room upgrades possible', 'Loyalty benefits', 'Direct customer service'],
    cons: ['Must check multiple sites', 'No comparison shopping'],
    rugbyWorldCupTip: 'Call hotels directly for special Rugby World Cup rates'
  }
];

const rwcPackages = [
  {
    provider: 'Official Rugby World Cup Travel',
    description: 'Official tournament packages with guaranteed tickets',
    includes: ['Match tickets', 'Accommodation', 'Airport transfers', 'Some meals'],
    priceRange: '$2,000-10,000+ per person',
    pros: [
      'Guaranteed match tickets',
      'Official tournament experiences',
      'Group activities with other fans',
      'Hassle-free planning'
    ],
    cons: [
      'Most expensive option',
      'Limited flexibility',
      'Predetermined itineraries',
      'May include less desirable matches'
    ],
    bestFor: ['First-time visitors', 'Premium experiences', 'Guaranteed tickets', 'Group travel'],
    bookingTip: 'Book early for best match selections and accommodation'
  },
  {
    provider: 'Authorized Travel Agents',
    description: 'Licensed agents with official RWC allocations',
    includes: ['Match tickets', 'Accommodation', 'Optional extras'],
    priceRange: '$1,500-8,000+ per person',
    pros: [
      'More flexibility than official packages',
      'Expert local knowledge',
      'Customizable itineraries',
      'Support during travel'
    ],
    cons: [
      'Still expensive',
      'Agent fees apply',
      'Limited ticket guarantees',
      'Quality varies by agent'
    ],
    bestFor: ['Custom itineraries', 'Multiple cities', 'Specific match preferences'],
    bookingTip: 'Verify agent authorization with Rugby World Cup 2027'
  },
  {
    provider: 'Hotel Rugby Packages',
    description: 'Hotels offering their own rugby-themed packages',
    includes: ['Accommodation', 'Sometimes tickets', 'Rugby-themed amenities'],
    priceRange: '$200-1,000+ per night',
    pros: [
      'More affordable than official packages',
      'Rugby atmosphere',
      'Central locations',
      'Additional hotel amenities'
    ],
    cons: [
      'No ticket guarantees',
      'Quality varies significantly',
      'May not include transportation',
      'Limited to single properties'
    ],
    bestFor: ['Budget-conscious fans', 'Flexible dates', 'Independent travelers'],
    bookingTip: 'Read all inclusions carefully - "rugby package" doesn\'t always mean tickets'
  }
];

const budgetTips = [
  'Book accommodation 6-12 months in advance for best prices',
  'Consider staying slightly outside city centers with good transport links',
  'Look for properties with kitchen facilities to save on dining costs',
  'Book directly with hotels for potential upgrades and better cancellation terms',
  'Use loyalty programs and credit card points for discounts',
  'Consider apartment rentals for groups of 4+ people',
  'Check for early booking discounts and package deals',
  'Be flexible with dates - arriving/departing mid-week often cheaper',
  'Compare total costs including taxes and fees, not just base rates',
  'Consider camping or glamping for unique budget-friendly experiences'
];

const faqs = [
  {
    question: 'How far in advance should I book accommodation for Rugby World Cup 2027?',
    answer: 'Book as early as possible - ideally 6-12 months in advance. Popular properties near stadiums will fill up quickly. Official packages go on sale first, followed by general accommodation. The closer to match dates, the higher the prices and lower the availability.'
  },
  {
    question: 'What are the best areas to stay in each host city?',
    answer: 'In Sydney: Circular Quay for luxury, Olympic Park for convenience. In Melbourne: CBD for central access, Southbank for modern amenities. In Brisbane: CBD for business travelers, Gold Coast for beach lifestyle. Choose based on your budget, transport preferences, and desired atmosphere.'
  },
  {
    question: 'Are Rugby World Cup accommodation packages worth it?',
    answer: 'Official packages guarantee match tickets but are expensive. They\'re worth it if you want hassle-free planning and guaranteed access to popular matches. For independent travelers who already have tickets, booking separately often offers more flexibility and can be cheaper.'
  },
  {
    question: 'What should I budget for accommodation during the Rugby World Cup?',
    answer: 'Budget travelers: $50-100/night (hostels/camping), Mid-range: $150-350/night (hotels), Luxury: $400-800+/night. Expect prices 50-100% higher than normal during the tournament, especially on match days and in host cities.'
  },
  {
    question: 'Can I find accommodation without booking packages?',
    answer: 'Yes, but book early. Many hotels reserve blocks for official packages but release unsold rooms closer to dates. Use multiple booking platforms, check directly with hotels, and consider alternative accommodation like Airbnb or staying in nearby suburbs with good transport links.'
  },
  {
    question: 'What amenities should I look for in Rugby World Cup accommodation?',
    answer: 'Prioritize location with good transport links to stadiums, reliable WiFi for ticket/transport apps, air conditioning (spring weather can be warm), and flexible check-in/out for match schedules. Kitchen facilities help save money, and concierge services can assist with local recommendations.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Travel Guide', url: '/travel' },
  { name: 'Accommodation', url: '/travel/accommodation' }
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
const faqSchema = generateFAQSchema(faqs);

const accommodationGuideSchema = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": "Rugby World Cup 2027 Australia Accommodation Guide",
  "description": "Complete accommodation guide for Rugby World Cup 2027 in Australia covering hotels, hostels, packages and booking tips",
  "about": {
    "@type": "Event",
    "name": "Rugby World Cup 2027",
    "location": {
      "@type": "Country",
      "name": "Australia"
    }
  }
};

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([accommodationGuideSchema, breadcrumbSchema, faqSchema])
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
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

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accommodation Guide
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">
                Rugby World Cup 2027 Australia
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              From luxury hotels to budget hostels, find the perfect place to stay during 
              Rugby World Cup 2027. Complete guide with booking tips, best areas, and official packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Search Hotels Now
              </a>
              <Link
                href="#accommodation-types"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Explore Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section id="accommodation-types" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Types of Accommodation
            </h2>
            
            <div className="space-y-8">
              {accommodationTypes.map((type, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-800">{type.type}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div className="text-lg font-semibold text-green-600 mb-4">{type.priceRange}</div>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.bestFor.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Pros:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Cons:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-red-500 mr-2 mt-1">-</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Booking Tips:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          {type.bookingTips.map((tip, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Rugby World Cup Notes:</h4>
                        <p className="text-sm text-yellow-700">{type.rugbyWorldCupNotes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Areas to Stay */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Best Areas to Stay in Each Host City
            </h2>
            
            <div className="space-y-12">
              {bestAreasToStay.map((city, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-8 text-blue-800 text-center">{city.city}</h3>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    {city.areas.map((area, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-bold text-gray-900">{area.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            area.priceRange === '$$$$' ? 'bg-red-100 text-red-800' :
                            area.priceRange === '$$$-$$$$' ? 'bg-orange-100 text-orange-800' :
                            area.priceRange === '$$$' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {area.priceRange}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                        
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-semibold">Transport:</span> {area.transport}
                          </div>
                          <div>
                            <span className="font-semibold">Rugby Access:</span> {area.rugbyAccess}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                              <span className="font-semibold text-green-800">Pros:</span>
                              <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                {area.pros.map((pro, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-green-500 mr-1">+</span>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <span className="font-semibold text-red-800">Cons:</span>
                              <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                {area.cons.map((con, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-red-500 mr-1">-</span>
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Websites */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Best Booking Websites & Platforms
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {bookingWebsites.map((site, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">{site.name}</h3>
                  <p className="text-gray-600 mb-6">{site.description}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {site.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Disadvantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {site.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Rugby World Cup Tip:</h4>
                    <p className="text-yellow-700 text-sm mt-1">{site.rugbyWorldCupTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rugby World Cup Packages */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Rugby World Cup Accommodation Packages
            </h2>
            
            <div className="space-y-8">
              {rwcPackages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">{pkg.provider}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="grid lg:grid-cols-4 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <span className="font-semibold text-green-600">{pkg.priceRange}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Pros:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3">Cons:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="p-4 bg-blue-50 rounded-lg mb-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Best For:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          {pkg.bestFor.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-800"><strong>Tip:</strong> {pkg.bookingTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tips */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Money-Saving Accommodation Tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {budgetTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1 text-lg">💰</span>
                  <p className="text-green-100">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Accommodation FAQs
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book Your Rugby World Cup Stay?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Don't wait - the best accommodations fill up fast during major sporting events. 
            Start your search now for the best selection and prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Search Hotels Now
            </a>
            <Link
              href="/travel/getting-around"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Plan Your Transport
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}