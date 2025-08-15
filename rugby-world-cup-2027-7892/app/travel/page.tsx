import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema } from '../lib/seo';
import { AFFILIATE_URL, TICKET_AFFILIATE_ID } from '../lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Travel to Australia - Rugby World Cup 2027 Complete Guide',
  description: 'Complete travel guide for Rugby World Cup 2027 in Australia. Visa requirements, flights, accommodation, transport, currency, health tips, and cultural information for international visitors.',
  keywords: [
    'rugby world cup 2027 travel',
    'australia travel guide',
    'rugby world cup australia visa',
    'australia flights accommodation',
    'rugby world cup travel tips',
    'australia currency health safety',
    'rugby world cup transport',
    'australia october november weather'
  ],
  canonical: '/travel'
});

interface TravelTopic {
  title: string;
  description: string;
  href: string;
  icon: string;
  highlights: string[];
}

const travelTopics: TravelTopic[] = [
  {
    title: 'Getting Around',
    description: 'Domestic flights, trains, buses, and city transport options across Australia',
    href: '/travel/getting-around',
    icon: '🚗',
    highlights: ['Domestic airlines', 'Train services', 'City transport cards', 'Travel distances']
  },
  {
    title: 'Accommodation',
    description: 'Hotels, hostels, Airbnb, and Rugby World Cup accommodation packages',
    href: '/travel/accommodation',
    icon: '🏨',
    highlights: ['Booking tips', 'Price ranges', 'Best areas to stay', 'RWC packages']
  },
  {
    title: 'Visa Requirements',
    description: 'Entry requirements, ETA, visitor visas, and application processes',
    href: '/travel/visa',
    icon: '📋',
    highlights: ['ETA eligibility', 'Visitor visa guide', 'Application timeline', 'Required documents']
  },
  {
    title: 'Travel Essentials',
    description: 'What to pack, power outlets, currency, emergency numbers, and travel insurance',
    href: '/travel/essentials',
    icon: '🎒',
    highlights: ['October weather guide', 'Power adapters', 'Emergency services', 'Travel insurance']
  }
];

const airportInfo = [
  {
    city: 'Sydney',
    airport: 'Kingsford Smith Airport (SYD)',
    description: 'Australia\'s busiest airport with direct flights from 60+ international destinations',
    transport: 'Airport Link train to city (13 minutes, $20)',
    airlines: 'Qantas, Virgin Australia, Jetstar, Emirates, Singapore Airlines'
  },
  {
    city: 'Melbourne',
    airport: 'Melbourne Airport (MEL)',
    description: 'Major gateway to southern Australia with excellent international connections',
    transport: 'SkyBus to city (20 minutes, $20) or taxi ($50-70)',
    airlines: 'Qantas, Virgin Australia, Emirates, Thai Airways, United'
  },
  {
    city: 'Brisbane',
    airport: 'Brisbane Airport (BNE)',
    description: 'Gateway to Queensland with direct flights from Asia, US, and Europe',
    transport: 'Airtrain to city (20 minutes, $18) or taxi ($50-60)',
    airlines: 'Qantas, Virgin Australia, Singapore Airlines, Emirates'
  },
  {
    city: 'Perth',
    airport: 'Perth Airport (PER)',
    description: 'Western Australia\'s main airport with growing international network',
    transport: 'Airport Connect bus or taxi ($40-50) to city',
    airlines: 'Qantas, Virgin Australia, Singapore Airlines, Emirates'
  }
];

const visaCountries = {
  eTA: [
    'United States', 'Canada', 'United Kingdom', 'Ireland', 'Japan', 'South Korea',
    'Malaysia', 'Singapore', 'Hong Kong', 'Taiwan', 'Brunei', 'Chile',
    'European Union countries', 'Norway', 'Switzerland', 'Iceland'
  ],
  visaFree: [
    'New Zealand (automatically granted on arrival)',
    'Norfolk Island residents'
  ],
  visitorVisa: [
    'All other countries not eligible for ETA or visa-free entry'
  ]
};

const weatherInfo = {
  october: {
    temperature: '15-25°C (59-77°F)',
    conditions: 'Spring weather, mild and pleasant',
    rainfall: 'Moderate, occasional showers',
    tips: 'Pack layers, light jacket for evenings'
  },
  november: {
    temperature: '18-28°C (64-82°F)',
    conditions: 'Warm spring weather, ideal for outdoor activities',
    rainfall: 'Low to moderate, mostly sunny days',
    tips: 'Light clothing, sunscreen essential'
  }
};

const currencyInfo = {
  currency: 'Australian Dollar (AUD)',
  cards: 'Credit and debit cards widely accepted',
  cash: 'ATMs available everywhere, some venues cash-only',
  tipping: 'Not mandatory but 10% appreciated for good service',
  costs: 'Budget: $100-150/day, Mid-range: $200-350/day, Luxury: $500+/day'
};

const healthSafety = [
  {
    topic: 'Medical System',
    info: 'World-class healthcare system. Emergency services free for urgent care.',
    action: 'Get travel insurance, note emergency number 000'
  },
  {
    topic: 'Vaccinations',
    info: 'No special vaccinations required for most countries.',
    action: 'Check with your doctor about routine vaccinations'
  },
  {
    topic: 'Sun Safety',
    info: 'Strong UV radiation, especially October-November.',
    action: 'Use SPF 30+ sunscreen, wear hat and sunglasses'
  },
  {
    topic: 'Wildlife',
    info: 'Most dangerous animals are not encountered in cities.',
    action: 'Follow local advice, don\'t touch unknown animals'
  },
  {
    topic: 'Emergency Services',
    info: 'Police, Fire, Ambulance: 000 (free from any phone)',
    action: 'Save number in phone, works from mobile anywhere'
  }
];

const communication = [
  {
    service: 'SIM Cards',
    providers: 'Telstra, Optus, Vodafone',
    cost: '$30-50 for tourist plans',
    coverage: 'Excellent in cities, variable in remote areas',
    tip: 'Buy at airport or major retailers like Woolworths'
  },
  {
    service: 'WiFi',
    providers: 'Available at most hotels, cafes, and public spaces',
    cost: 'Usually free with purchase or accommodation',
    coverage: 'Excellent in urban areas',
    tip: 'Download offline maps before traveling to remote areas'
  },
  {
    service: 'International Roaming',
    providers: 'Check with your home carrier',
    cost: 'Can be expensive ($10-20/day)',
    coverage: 'Good but costly',
    tip: 'Consider local SIM or WiFi instead'
  }
];

const cultureEtiquette = [
  'Australians are generally informal and friendly - first names are common',
  'Queuing (lining up) is important - always wait your turn',
  'Tipping is not mandatory but 10% is appreciated for good service',
  'Drink driving is heavily penalized - use public transport or taxis',
  'Smoking is banned in all indoor venues and many outdoor areas',
  'BYO (Bring Your Own) alcohol is common at some restaurants',
  'Casual dress is acceptable in most venues except fine dining',
  'Australians use British English spelling and some unique terms',
  'Sports are a major conversation topic - rugby, AFL, cricket',
  'Environmental consciousness is important - use recycling bins'
];

const faqs = [
  {
    question: 'What documents do I need to enter Australia?',
    answer: 'A valid passport with at least 6 months validity, and either an ETA (for eligible countries) or visitor visa. Some nationalities can apply for ETA online within 15 minutes.'
  },
  {
    question: 'What\'s the weather like during the Rugby World Cup?',
    answer: 'October-November is spring in Australia with mild to warm temperatures (15-28°C). Perfect weather for rugby! Pack layers as temperatures can vary between cities and times of day.'
  },
  {
    question: 'How expensive is Australia for tourists?',
    answer: 'Australia is comparable to other developed countries. Budget travelers can manage on $100-150/day, while mid-range travelers should budget $200-350/day including accommodation, food, and transport.'
  },
  {
    question: 'Do I need travel insurance for Australia?',
    answer: 'While not mandatory, travel insurance is highly recommended. Australia has excellent healthcare but it can be expensive for visitors. Insurance covers medical emergencies, trip cancellation, and luggage loss.'
  },
  {
    question: 'What power outlet type does Australia use?',
    answer: 'Australia uses Type I outlets (three flat pins in a triangular pattern) with 230V/50Hz power. Most countries will need a power adapter, available at airports and electronics stores.'
  },
  {
    question: 'Is it safe to travel around Australia?',
    answer: 'Australia is one of the world\'s safest countries for tourists. Cities are very safe, crime rates are low, and emergency services are excellent. Standard travel precautions apply.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Travel Guide', url: '/travel' }
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
const faqSchema = generateFAQSchema(faqs);

const travelGuideSchema = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": "Rugby World Cup 2027 Australia Travel Guide",
  "description": "Complete travel guide for visiting Australia during Rugby World Cup 2027",
  "about": {
    "@type": "Event",
    "name": "Rugby World Cup 2027",
    "location": {
      "@type": "Country",
      "name": "Australia"
    }
  },
  "provider": {
    "@type": "Organization",
    "name": "Rugby World Cup 2027 Australia"
  }
};

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([travelGuideSchema, breadcrumbSchema, faqSchema])
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
              Travel to Australia
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">
                Rugby World Cup 2027 Complete Guide
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about traveling to Australia for Rugby World Cup 2027. 
              From visa requirements and flights to local culture and travel tips - we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#getting-started"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Start Planning
              </Link>
              <Link
                href="/travel/visa"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Check Visa Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section id="getting-started" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Travel Planning Topics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {travelTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {topic.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Getting to Australia */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Getting to Australia
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800">Major International Airports</h3>
                <div className="space-y-6">
                  {airportInfo.map((airport, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-bold text-lg text-gray-900">{airport.city}</h4>
                      <h5 className="font-semibold text-blue-600 mb-2">{airport.airport}</h5>
                      <p className="text-gray-600 mb-2">{airport.description}</p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div><strong>To City:</strong> {airport.transport}</div>
                        <div><strong>Airlines:</strong> {airport.airlines}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800">Flight Booking Tips</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">✈️</div>
                    <div>
                      <h4 className="font-semibold">Book Early</h4>
                      <p className="text-gray-600 text-sm">International flights fill up quickly during Rugby World Cup. Book 6-8 months ahead for best prices.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">📅</div>
                    <div>
                      <h4 className="font-semibold">Flexible Dates</h4>
                      <p className="text-gray-600 text-sm">Arriving a few days before or after peak match days can save hundreds of dollars.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">🏙️</div>
                    <div>
                      <h4 className="font-semibold">Multi-City Options</h4>
                      <p className="text-gray-600 text-sm">Consider flying into one city and out of another to see more of Australia.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">💺</div>
                    <div>
                      <h4 className="font-semibold">Seat Selection</h4>
                      <p className="text-gray-600 text-sm">Long-haul flights to Australia benefit from advance seat selection and meal preferences.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Pro Tip:</strong> Many airlines offer Rugby World Cup packages with accommodation and ground transport included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Visa Requirements by Country
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800">
                  Electronic Travel Authority (ETA)
                </h3>
                <p className="text-gray-600 mb-4">
                  Quick online application, usually approved within minutes. Valid for multiple visits up to 3 months each.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Cost:</strong> AUD $20 • <strong>Processing:</strong> Usually instant
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Eligible countries include:</strong>
                  <ul className="mt-2 space-y-1">
                    {visaCountries.eTA.slice(0, 8).map((country, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">•</span>
                        {country}
                      </li>
                    ))}
                    <li className="text-blue-600 mt-2">
                      <Link href="/travel/visa">+ See full list →</Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  Visitor Visa (Subclass 600)
                </h3>
                <p className="text-gray-600 mb-4">
                  Required for countries not eligible for ETA. Allows stays up to 3, 6, or 12 months depending on purpose.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Cost:</strong> From AUD $150 • <strong>Processing:</strong> 15-30 days
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Required for most countries including:</strong>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      India, China, Russia
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      Most African countries
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      Most South American countries
                    </li>
                    <li className="text-blue-600 mt-2">
                      <Link href="/travel/visa">Check full requirements →</Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Visa-Free Entry
                </h3>
                <p className="text-gray-600 mb-4">
                  Limited to New Zealand citizens who receive automatic visa on arrival.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Cost:</strong> Free • <strong>Processing:</strong> On arrival
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Eligible:</strong>
                  <ul className="mt-2 space-y-1">
                    {visaCountries.visaFree.map((country, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-gray-500 mr-2">•</span>
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Important Visa Notes</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• All visas require a passport valid for at least 6 months from arrival</li>
                <li>• Apply for visas well in advance - processing times may be longer during Rugby World Cup</li>
                <li>• Health insurance is recommended but not mandatory for most visa types</li>
                <li>• Working Holiday visas available for eligible countries (ages 18-30)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Information */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Weather During Rugby World Cup
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              October-November is spring in Australia - perfect rugby weather!
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="text-3xl mr-3">🌸</span>
                  October Weather
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Temperature:</span>
                    <span className="text-blue-600">{weatherInfo.october.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Conditions:</span>
                    <span className="text-blue-600">{weatherInfo.october.conditions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Rainfall:</span>
                    <span className="text-blue-600">{weatherInfo.october.rainfall}</span>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <strong className="text-blue-800">What to Pack:</strong>
                    <p className="text-blue-700 mt-1">{weatherInfo.october.tips}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
                  <span className="text-3xl mr-3">☀️</span>
                  November Weather
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Temperature:</span>
                    <span className="text-green-600">{weatherInfo.november.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Conditions:</span>
                    <span className="text-green-600">{weatherInfo.november.conditions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Rainfall:</span>
                    <span className="text-green-600">{weatherInfo.november.rainfall}</span>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <strong className="text-green-800">What to Pack:</strong>
                    <p className="text-green-700 mt-1">{weatherInfo.november.tips}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Regional Variations</h4>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold text-blue-800 mb-2">Northern Cities (Brisbane, Gold Coast)</h5>
                  <p className="text-gray-600">Warmer and more humid. 20-30°C. Light rain possible.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-800 mb-2">Southern Cities (Melbourne, Adelaide)</h5>
                  <p className="text-gray-600">Cooler spring weather. 15-25°C. More variable conditions.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-800 mb-2">Western Australia (Perth)</h5>
                  <p className="text-gray-600">Dry heat. 18-28°C. Minimal rainfall expected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currency and Costs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Currency and Costs
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="text-3xl mr-3">💰</span>
                  Currency Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Currency:</h4>
                    <p className="text-gray-600">{currencyInfo.currency}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cards:</h4>
                    <p className="text-gray-600">{currencyInfo.cards}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cash:</h4>
                    <p className="text-gray-600">{currencyInfo.cash}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tipping:</h4>
                    <p className="text-gray-600">{currencyInfo.tipping}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Daily Budget Guide
                </h3>
                <div className="space-y-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Budget Travel</h4>
                    <p className="text-green-700">$100-150 AUD/day</p>
                    <p className="text-sm text-green-600">Hostels, public transport, casual dining</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Mid-Range</h4>
                    <p className="text-blue-700">$200-350 AUD/day</p>
                    <p className="text-sm text-blue-600">Hotels, mix of transport, restaurant dining</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Luxury</h4>
                    <p className="text-purple-700">$500+ AUD/day</p>
                    <p className="text-sm text-purple-600">Premium hotels, fine dining, private transport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health and Safety */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Health and Safety
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {healthSafety.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">{item.topic}</h3>
                  <p className="text-gray-600 mb-4">{item.info}</p>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800"><strong>Action:</strong> {item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Communication and Connectivity
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {communication.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">{item.service}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold">Providers:</span>
                      <p className="text-gray-600">{item.providers}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Cost:</span>
                      <p className="text-gray-600">{item.cost}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Coverage:</span>
                      <p className="text-gray-600">{item.coverage}</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-yellow-800"><strong>Tip:</strong> {item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Australian Culture and Etiquette */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Australian Culture and Etiquette
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {cultureEtiquette.slice(0, 5).map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">🇦🇺</span>
                    <p className="text-blue-100">{tip}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {cultureEtiquette.slice(5).map((tip, index) => (
                  <div key={index + 5} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">🇦🇺</span>
                    <p className="text-blue-100">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
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
      <section className="py-16 bg-gradient-to-r from-green-800 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Plan Your Rugby World Cup Journey?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Start with the essentials - check your visa requirements, book your flights, 
            and explore our detailed travel guides for each aspect of your trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/travel/visa"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Check Visa Requirements
            </Link>
            <Link
              href="/travel/accommodation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Find Accommodation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}