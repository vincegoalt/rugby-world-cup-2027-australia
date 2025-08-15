import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema } from '../../lib/seo';
import { AFFILIATE_URL, TICKET_AFFILIATE_ID } from '../../lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Getting Around Australia - Rugby World Cup 2027 Transport Guide',
  description: 'Complete transport guide for Rugby World Cup 2027 in Australia. Domestic flights, trains, buses, car rental, city transport cards, distances and travel times between host cities.',
  keywords: [
    'australia domestic transport',
    'rugby world cup 2027 transport',
    'australia domestic flights',
    'australia trains buses',
    'city transport australia',
    'travel between cities australia',
    'opal card myki transport',
    'australia car rental'
  ],
  canonical: '/travel/getting-around'
});

const domesticAirlines = [
  {
    name: 'Qantas',
    description: 'Australia\'s flagship carrier with comprehensive domestic network',
    routes: 'All major cities, regional destinations',
    features: ['Frequent flyer program', 'Premium lounges', 'On-time performance'],
    tips: 'Book Qantas Red e-Deal fares for best prices. Frequent flyer benefits include priority boarding and baggage.',
    website: 'qantas.com',
    rugbyWorldCupOffers: 'Special RWC packages with accommodation'
  },
  {
    name: 'Virgin Australia',
    description: 'Full-service airline with modern fleet and good service',
    routes: 'Major cities, key regional routes',
    features: ['Velocity frequent flyer', 'Premium economy', 'In-flight entertainment'],
    tips: 'Getaway and Saverfare tickets offer good value. Velocity points can be earned quickly.',
    website: 'virginaustralia.com',
    rugbyWorldCupOffers: 'RWC fan packages available'
  },
  {
    name: 'Jetstar',
    description: 'Low-cost carrier (Qantas subsidiary) for budget travelers',
    routes: 'Major cities, popular destinations',
    features: ['Starter fares from $49', 'Optional extras', 'Modern fleet'],
    tips: 'Watch for Friday fare sales. Add extras separately to keep costs down.',
    website: 'jetstar.com',
    rugbyWorldCupOffers: 'Budget match day flights'
  },
  {
    name: 'Rex Airlines',
    description: 'Regional specialist now serving major city routes',
    routes: 'Sydney-Melbourne, regional networks',
    features: ['Competitive pricing', 'Regional connectivity', 'Boeing 737 fleet'],
    tips: 'Good alternative for Sydney-Melbourne route. Strong regional network.',
    website: 'rex.com.au',
    rugbyWorldCupOffers: 'Regional city connections'
  }
];

const trainServices = [
  {
    route: 'Sydney to Melbourne',
    service: 'XPT (Express Passenger Train)',
    duration: '10.5 hours overnight',
    frequency: 'Daily',
    price: 'From $65 economy, $180 first class',
    highlights: ['Sleeper berths available', 'Scenic Blue Mountains', 'Central station arrivals'],
    tips: 'Book first class sleeper for comfort. Departs Sydney 8:42pm, arrives Melbourne 7:20am.'
  },
  {
    route: 'Sydney to Brisbane',
    service: 'XPT Northern Tablelands',
    duration: '14 hours overnight',
    frequency: 'Daily',
    price: 'From $85 economy, $220 first class',
    highlights: ['Casino and Grafton stops', 'Coastal scenery', 'Sleeper options'],
    tips: 'Longest domestic train journey. Consider flying for time constraints.'
  },
  {
    route: 'Melbourne to Adelaide',
    service: 'The Overland',
    duration: '10.5 hours',
    frequency: 'Twice weekly',
    price: 'From $89 Red Service, $199 Premium',
    highlights: ['Historic service', 'Grampians views', 'Premium dining'],
    tips: 'Operates Tuesday and Sunday. Book well ahead during RWC.'
  },
  {
    route: 'Adelaide to Perth',
    service: 'The Indian Pacific',
    duration: '26 hours',
    frequency: 'Twice weekly',
    price: 'From $449 Red Service to $2,999 Platinum',
    highlights: ['Crosses Nullarbor Plain', 'All-inclusive dining', 'Luxury experience'],
    tips: 'One of world\'s great train journeys. Book months ahead.'
  }
];

const busServices = [
  {
    operator: 'Greyhound Australia',
    description: 'National bus network covering all major routes',
    routes: 'All capital cities, 1,100+ destinations',
    features: ['Reclining seats', 'Air conditioning', 'Rest stops'],
    prices: 'Sydney-Melbourne from $55, Sydney-Brisbane from $89',
    tips: 'Hop-on hop-off passes available. Book online for discounts.',
    website: 'greyhound.com.au'
  },
  {
    operator: 'Premier Motor Service',
    description: 'East coast specialist with comfortable coaches',
    routes: 'Brisbane to Melbourne via Sydney',
    features: ['WiFi on board', 'Extra legroom', 'Frequent services'],
    prices: 'Sydney-Melbourne from $49, Sydney-Brisbane from $79',
    tips: 'Premium service compared to Greyhound. Multiple daily departures.',
    website: 'premierms.com.au'
  },
  {
    operator: 'Firefly Express',
    description: 'Melbourne-Adelaide-Sydney triangle service',
    routes: 'Limited but frequent routes',
    features: ['Modern fleet', 'Competitive prices', 'Direct services'],
    prices: 'Melbourne-Adelaide from $39, Melbourne-Sydney from $69',
    tips: 'Good value alternative to trains and flights.',
    website: 'fireflyexpress.com.au'
  }
];

const carRentalInfo = {
  majorCompanies: [
    'Hertz', 'Avis', 'Budget', 'Thrifty', 'Europcar', 'Enterprise'
  ],
  requirements: [
    'Valid driving license (international permit recommended)',
    'Credit card for security deposit',
    'Minimum age 21 (25 for some premium cars)',
    'Full insurance coverage recommended'
  ],
  costs: {
    economy: '$35-50 per day',
    compact: '$40-60 per day',
    suv: '$70-100 per day',
    premium: '$100-200 per day'
  },
  tips: [
    'Book early for Rugby World Cup - high demand expected',
    'Consider one-way rentals between cities',
    'GPS navigation essential for unfamiliar areas',
    'Fuel is expensive - budget $1.50+ per liter',
    'Parking in city centers can be costly ($5-30/hour)'
  ],
  drivingTips: [
    'Australians drive on the left side of the road',
    'Speed limits strictly enforced with cameras',
    'Zero tolerance for drink driving (0.05% BAC limit)',
    'Seat belts mandatory for all passengers',
    'Mobile phone use while driving is illegal'
  ]
};

const cityTransport = [
  {
    city: 'Sydney',
    card: 'Opal Card',
    coverage: 'Trains, buses, ferries, light rail',
    cost: 'Adult $15.80 daily cap, $63.20 weekly cap',
    tips: [
      'Buy at stations, shops, or online',
      'Tap on and off for all services',
      'Sunday $2.80 daily cap for all transport',
      'Ferry to Manly Beach popular tourist route'
    ],
    airport: 'Airport Link train $20.48 to city (13 minutes)',
    rugbyVenues: 'Direct train to Olympic Park (Accor Stadium) via T7 line'
  },
  {
    city: 'Melbourne',
    card: 'Myki Card',
    coverage: 'Trains, trams, buses',
    cost: 'Adult $9.20 daily cap Zone 1, $15.40 Zone 1+2',
    tips: [
      'Buy at stations, 7-Eleven, or online',
      'Free tram zone in CBD (City Circle)',
      'Touch on and off required',
      'Extensive tram network throughout city'
    ],
    airport: 'SkyBus $20 to city (20 minutes) or taxi $50-70',
    rugbyVenues: 'Tram Route 70 direct to Marvel Stadium from CBD'
  },
  {
    city: 'Brisbane',
    card: 'Go Card',
    coverage: 'Trains, buses, ferries, light rail',
    cost: 'Adult $9.90 daily cap, paper tickets more expensive',
    tips: [
      'Much cheaper than paper tickets',
      'City Hopper ferry free along Brisbane River',
      'Regional trains to Gold Coast included',
      'Bus network covers all suburbs'
    ],
    airport: 'Airtrain $18 to city (20 minutes)',
    rugbyVenues: 'Direct rail to Coomera (for Gold Coast stadium) and Brisbane venues'
  },
  {
    city: 'Perth',
    card: 'SmartRider',
    coverage: 'Trains, buses, ferries',
    cost: 'Adult $12.80 daily cap, $25.60 weekend cap',
    tips: [
      'Free CAT bus in CBD',
      'Train network covers northern and southern suburbs',
      'Limited Sunday services',
      'Ferry to Rottnest Island extra'
    ],
    airport: 'Connect bus + train $4.90 total, or taxi $40-50',
    rugbyVenues: 'Train to stadium stations with connecting buses'
  },
  {
    city: 'Adelaide',
    card: 'Metrocard',
    coverage: 'Buses, trains, tram',
    cost: 'Adult $10.80 daily cap',
    tips: [
      'Free city connector bus (98C)',
      'Single tram line to Glenelg beach',
      'Comprehensive bus network',
      'Free wifi on many services'
    ],
    airport: 'Jetbus $5.60 to city or taxi $25-35',
    rugbyVenues: 'Train and bus connections to Adelaide Oval'
  },
  {
    city: 'Canberra',
    card: 'MyWay Card',
    coverage: 'Buses, light rail',
    cost: 'Adult $9.60 daily cap',
    tips: [
      'Light rail connects north to south',
      'Extensive bus network',
      'Free red CAT bus in city center',
      'Most attractions accessible by public transport'
    ],
    airport: 'Bus Route 3 or 703 $4.80, taxi $35-45',
    rugbyVenues: 'Bus connections to GIO Stadium'
  },
  {
    city: 'Gold Coast',
    card: 'Go Card (same as Brisbane)',
    coverage: 'Light rail, buses',
    cost: 'Adult $9.90 daily cap',
    tips: [
      'G:link light rail runs along coast',
      'Connects to Brisbane train system',
      'Free shuttle buses in Surfers Paradise',
      'Tourist attractions have dedicated transport'
    ],
    airport: 'Light rail $4.71 to Surfers Paradise (45 minutes)',
    rugbyVenues: 'Light rail to Robina for Cbus Super Stadium'
  }
];

const distancesAndTimes = [
  {
    route: 'Sydney to Melbourne',
    distance: '878 km',
    flight: '1.5 hours (from $79)',
    drive: '8.5-9 hours via Hume Highway',
    train: '10.5 hours overnight XPT',
    bus: '12-13 hours (from $55)'
  },
  {
    route: 'Sydney to Brisbane',
    distance: '909 km',
    flight: '1.5 hours (from $89)',
    drive: '9-10 hours via Pacific Highway',
    train: '14 hours overnight XPT',
    bus: '14-15 hours (from $89)'
  },
  {
    route: 'Melbourne to Adelaide',
    distance: '727 km',
    flight: '1.5 hours (from $99)',
    drive: '8 hours via Western Highway',
    train: '10.5 hours The Overland',
    bus: '10-11 hours (from $69)'
  },
  {
    route: 'Sydney to Perth',
    distance: '3,278 km',
    flight: '5 hours (from $199)',
    drive: '32+ hours (3-4 days recommended)',
    train: 'N/A direct (via Adelaide 41 hours total)',
    bus: '45+ hours (not recommended)'
  },
  {
    route: 'Melbourne to Perth',
    distance: '2,131 km',
    flight: '3.5 hours (from $179)',
    drive: '20+ hours (2-3 days recommended)',
    train: '26 hours The Indian Pacific',
    bus: '28-30 hours'
  },
  {
    route: 'Brisbane to Gold Coast',
    distance: '78 km',
    flight: 'N/A (too short)',
    drive: '1.5 hours via M1 Pacific Motorway',
    train: '1.5 hours Airtrain + G:link',
    bus: '2 hours Greyhound/Translink'
  }
];

const faqs = [
  {
    question: 'What\'s the best way to travel between Rugby World Cup cities?',
    answer: 'For time efficiency, domestic flights are best - most routes under 2 hours. For scenic experience and cost savings, consider trains or buses for shorter routes like Sydney-Melbourne. Book early as demand will be high during the tournament.'
  },
  {
    question: 'Do I need an international driving permit in Australia?',
    answer: 'Most countries\' licenses are accepted for short visits, but an International Driving Permit is recommended for car rentals and insurance purposes. Check with your rental company for specific requirements.'
  },
  {
    question: 'How do city transport cards work in Australia?',
    answer: 'Each city has its own transport card (Opal in Sydney, Myki in Melbourne, etc.). Cards work on all local public transport and offer daily/weekly caps. Buy at stations, convenience stores, or online before you arrive.'
  },
  {
    question: 'Is it worth renting a car for the Rugby World Cup?',
    answer: 'For city-to-city travel and exploring, yes. However, for getting to stadiums and around cities, public transport is often more convenient and cost-effective. Consider your itinerary and group size.'
  },
  {
    question: 'How far in advance should I book domestic flights?',
    answer: 'Book as early as possible - at least 3-6 months ahead for Rugby World Cup. Prices increase closer to match dates, and popular routes may sell out. Consider flexible dates for better prices.'
  },
  {
    question: 'What are the main differences between Australian domestic airlines?',
    answer: 'Qantas and Virgin are full-service with lounges and frequent flyer programs. Jetstar is low-cost but reliable. Rex offers good value on selected routes. All are safe and punctual by international standards.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Travel Guide', url: '/travel' },
  { name: 'Getting Around', url: '/travel/getting-around' }
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
const faqSchema = generateFAQSchema(faqs);

const transportGuideSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Getting Around Australia for Rugby World Cup 2027",
  "description": "Complete guide to domestic transport options in Australia during Rugby World Cup 2027",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose Your Transport Mode",
      "text": "Select between flights (fastest), trains (scenic), buses (budget), or car rental (flexible)"
    },
    {
      "@type": "HowToStep", 
      "name": "Book Transport",
      "text": "Book domestic transport 3-6 months ahead for best prices during Rugby World Cup"
    },
    {
      "@type": "HowToStep",
      "name": "Get City Transport Cards",
      "text": "Buy local transport cards (Opal, Myki, etc.) for convenient city travel"
    }
  ]
};

export default function GettingAroundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([transportGuideSchema, breadcrumbSchema, faqSchema])
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
              Getting Around Australia
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">
                Transport Guide for Rugby World Cup 2027
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete guide to domestic flights, trains, buses, car rental, and city transport 
              across Australia's Rugby World Cup host cities.
            </p>
          </div>
        </div>
      </section>

      {/* Domestic Airlines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Domestic Flight Options
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Flying is the fastest way to travel between Australian cities during Rugby World Cup 2027
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {domesticAirlines.map((airline, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">{airline.name}</h3>
                  <p className="text-gray-600 mb-4">{airline.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">Routes:</h4>
                      <p className="text-gray-600 text-sm">{airline.routes}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {airline.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Travel Tips:</h4>
                      <p className="text-blue-700 text-sm mt-1">{airline.tips}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Rugby World Cup:</h4>
                      <p className="text-green-700 text-sm mt-1">{airline.rugbyWorldCupOffers}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href={`https://${airline.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Visit {airline.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Train Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Train Services Between Cities
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Experience Australia's scenic landscapes with comfortable long-distance train travel
            </p>
            
            <div className="space-y-6">
              {trainServices.map((train, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-green-800">{train.route}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">{train.service}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-semibold">Duration:</span>
                          <span className="text-green-600">{train.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Frequency:</span>
                          <span className="text-green-600">{train.frequency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Price:</span>
                          <span className="text-green-600">{train.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Journey Highlights:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {train.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800">Travel Tips:</h4>
                      <p className="text-yellow-700 text-sm mt-1">{train.tips}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bus Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Long-Distance Bus Services
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Budget-friendly options for traveling between Australian cities
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {busServices.map((bus, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-800">{bus.operator}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{bus.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="font-semibold text-gray-900">Routes:</span>
                      <p className="text-gray-600 text-sm">{bus.routes}</p>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-900">Features:</span>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {bus.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-purple-500 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-900">Sample Prices:</span>
                      <p className="text-purple-600 text-sm">{bus.prices}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-lg mb-4">
                    <p className="text-purple-800 text-sm"><strong>Tip:</strong> {bus.tips}</p>
                  </div>
                  
                  <a
                    href={`https://${bus.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Car Rental Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Car Rental Information
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800">Rental Requirements & Costs</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Major Rental Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {carRentalInfo.majorCompanies.map((company, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-1">
                      {carRentalInfo.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-600 text-sm">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Daily Rates:</h4>
                    <div className="space-y-2">
                      {Object.entries(carRentalInfo.costs).map(([type, cost]) => (
                        <div key={type} className="flex justify-between text-sm">
                          <span className="capitalize font-medium">{type}:</span>
                          <span className="text-blue-600">{cost}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-800">Rental Tips</h3>
                  <ul className="space-y-2">
                    {carRentalInfo.tips.map((tip, index) => (
                      <li key={index} className="flex items-start text-gray-600 text-sm">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Driving in Australia</h3>
                  <ul className="space-y-2">
                    {carRentalInfo.drivingTips.map((tip, index) => (
                      <li key={index} className="flex items-start text-gray-600 text-sm">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Transport Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              City Transport Cards & Systems
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Each Australian city has its own public transport system and payment card
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {cityTransport.map((city, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">{city.city}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-bold text-blue-800">{city.card}</h4>
                      <p className="text-blue-700 text-sm mt-1">{city.coverage}</p>
                      <p className="text-blue-600 font-semibold mt-2">{city.cost}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tips:</h4>
                      <ul className="space-y-1">
                        {city.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Airport Connection:</h4>
                      <p className="text-green-700 text-sm mt-1">{city.airport}</p>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800">Rugby Venues:</h4>
                      <p className="text-yellow-700 text-sm mt-1">{city.rugbyVenues}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distance and Travel Times */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Distances and Travel Times Between Host Cities
            </h2>
            
            <div className="space-y-6">
              {distancesAndTimes.map((route, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">{route.route}</h3>
                  <p className="text-center text-gray-600 mb-6">Distance: <strong>{route.distance}</strong></p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">✈️ Flight</h4>
                      <p className="text-blue-600 font-semibold">{route.flight}</p>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">🚗 Drive</h4>
                      <p className="text-green-600 font-semibold">{route.drive}</p>
                    </div>
                    
                    {route.train !== 'N/A direct (via Adelaide 41 hours total)' && route.train !== 'N/A (too short)' ? (
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-bold text-purple-800 mb-2">🚄 Train</h4>
                        <p className="text-purple-600 font-semibold">{route.train}</p>
                      </div>
                    ) : (
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-600 mb-2">🚄 Train</h4>
                        <p className="text-gray-500 text-sm">{route.train}</p>
                      </div>
                    )}
                    
                    {route.bus !== '45+ hours (not recommended)' && route.bus !== 'N/A (too short)' ? (
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-bold text-orange-800 mb-2">🚌 Bus</h4>
                        <p className="text-orange-600 font-semibold">{route.bus}</p>
                      </div>
                    ) : (
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-600 mb-2">🚌 Bus</h4>
                        <p className="text-gray-500 text-sm">{route.bus}</p>
                      </div>
                    )}
                  </div>
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
              Transport FAQs
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
            Start Planning Your Australian Journey
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Book your transport early for the best prices during Rugby World Cup 2027. 
            From quick flights to scenic train journeys, Australia has options for every traveler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/travel/accommodation"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Find Accommodation
            </Link>
            <Link
              href="/tickets"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Get Rugby Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}