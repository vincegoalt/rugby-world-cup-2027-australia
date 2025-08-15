import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cities } from '../data/cities';
import { venues } from '../data/venues';
import { generateMetadata as createMetadata, generateCityKeywords } from '../lib/seo';
import { getCityImage } from '../lib/images';

export const metadata: Metadata = createMetadata({
  title: 'Rugby World Cup 2027 Travel Guide',
  description: 'Complete travel guide for Rugby World Cup 2027 host cities in Australia. Find accommodation, transport, attractions, and match venues in Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Newcastle, and Townsville.',
  keywords: [
    'rugby world cup 2027 travel guide',
    'australia travel guide',
    'rwc 2027 cities',
    'rugby world cup accommodation',
    'australia tourist attractions',
    'rugby world cup transport',
    'visit australia 2027',
    'rugby cities australia',
    'tournament travel planning'
  ],
  canonical: '/guide'
});

interface CityGuideCardProps {
  city: typeof cities[0];
  venues: typeof venues;
}

function CityGuideCard({ city, venues: allVenues }: CityGuideCardProps) {
  const cityVenues = allVenues.filter(venue => venue.city === city.name);
  const cityImage = getCityImage(city.slug);
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 relative">
        <Image 
          src={cityImage}
          alt={city.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
          <p className="text-rugby-gold text-sm">
            {cityVenues.length} venue{cityVenues.length !== 1 ? 's' : ''} • {city.attractions.length} attractions
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {city.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Top Attractions:</h4>
          <div className="flex flex-wrap gap-2">
            {city.attractions.slice(0, 3).map((attraction, index) => {
              const attractionName = typeof attraction === 'string' ? attraction : attraction.name;
              return (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {attractionName}
                </span>
              );
            })}
            {city.attractions.length > 3 && (
              <span className="text-xs text-rugby-green font-medium">
                +{city.attractions.length - 3} more
              </span>
            )}
          </div>
        </div>

        {cityVenues.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Rugby Venues:</h4>
            <div className="text-sm text-gray-600">
              {cityVenues.map((venue, index) => (
                <span key={venue.id}>
                  {venue.name}
                  {index < cityVenues.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <Link 
          href={`/guide/${city.slug}`}
          className="inline-flex items-center bg-rugby-green text-rugby-gold px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Explore {city.name}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

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

interface FAQItem {
  question: string;
  answer: string;
}

const travelFAQs: FAQItem[] = [
  {
    question: "What are the best ways to travel between Rugby World Cup cities?",
    answer: "Australia has excellent domestic flight connections between all host cities. Major airlines like Qantas, Virgin Australia, and Jetstar offer frequent flights. For ground transport, consider rental cars for flexibility or coach services between nearby cities like Sydney-Newcastle or Brisbane-Gold Coast."
  },
  {
    question: "When should I book accommodation for Rugby World Cup 2027?",
    answer: "Book accommodation as early as possible, ideally 6-12 months before the tournament. Hotels in host cities fill up quickly during major sporting events, and prices increase closer to match dates. Consider staying slightly outside city centers for better availability and rates."
  },
  {
    question: "Do I need a visa to visit Australia for Rugby World Cup 2027?",
    answer: "Most international visitors need a visa to enter Australia. Citizens from many countries can apply for an Electronic Travel Authority (ETA) or eVisitor visa online. Check the Australian Department of Home Affairs website for specific requirements based on your nationality."
  },
  {
    question: "What's the weather like during Rugby World Cup 2027 (October-November)?",
    answer: "October-November is spring in Australia with mild, pleasant weather. Expect temperatures of 15-25°C (59-77°F) in most cities. Sydney, Brisbane, and northern cities will be warmer, while Melbourne and Adelaide may be cooler. Pack layers and a light jacket for evening matches."
  },
  {
    question: "Can I use public transport to reach Rugby World Cup venues?",
    answer: "Yes, all venues are accessible by public transport. Most cities offer special event transport on match days. Purchase a transport card in each city for convenience. Plan to arrive early as services can be crowded before and after matches."
  },
  {
    question: "Are there fan zones and public viewing areas during the tournament?",
    answer: "Yes, each host city will have dedicated fan zones with live match screenings, food vendors, and entertainment. These are free to enter and provide a great atmosphere for fans. Locations will be announced closer to the tournament start date."
  }
];

function FAQSection() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Travel Planning FAQ
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {travelFAQs.map((faq, index) => (
          <div key={index} className="border-l-4 border-rugby-green pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TicketCTASection() {
  return (
    <section className="bg-gradient-to-r from-rugby-green to-green-700 rounded-xl text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Plan Your Rugby World Cup Journey
      </h2>
      <p className="text-rugby-gold mb-6 max-w-2xl mx-auto">
        Secure your tickets now and start planning the ultimate rugby adventure across Australia's most exciting cities.
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

export default function TravelGuidePage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Travel Guide' }
  ];

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": "Rugby World Cup 2027 Australia Travel Guide",
    "description": "Complete travel guide for Rugby World Cup 2027 host cities in Australia",
    "about": {
      "@type": "Event",
      "name": "Rugby World Cup 2027",
      "startDate": "2027-10-01",
      "endDate": "2027-11-16",
      "location": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    "inLanguage": "en-AU"
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
              <span className="block text-rugby-gold">Travel Guide</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Discover Australia's most exciting cities hosting the Rugby World Cup 2027. 
              From Sydney's iconic harbor to Melbourne's cultural laneways, plan your perfect rugby adventure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="font-semibold">7 Host Cities</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="font-semibold">8 World-Class Venues</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="font-semibold">47 Days of Rugby</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Host Cities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each city offers unique experiences, from world-famous attractions to hidden local gems. 
            Click on any city to discover detailed guides for accommodation, transport, dining, and match venues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cities.map((city) => (
            <CityGuideCard key={city.id} city={city} venues={venues} />
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Essential Travel Tips
            </h2>
            <p className="text-xl text-gray-600">
              Make the most of your Rugby World Cup experience with insider knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-rugby-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rugby-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Australia has excellent domestic flight connections. Book early for better prices and consider transport cards for public transport.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Major airlines: Qantas, Virgin Australia, Jetstar</li>
                <li>• Transport cards available in each city</li>
                <li>• Free shuttle services on match days</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-rugby-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rugby-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accommodation</h3>
              <p className="text-gray-600 mb-4">
                Book early for the best selection and prices. Consider location carefully in relation to your match venues.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Book 6-12 months in advance</li>
                <li>• Consider city outskirts for better value</li>
                <li>• Check proximity to public transport</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-rugby-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rugby-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Experience</h3>
              <p className="text-gray-600 mb-4">
                Each city has unique attractions and experiences. Take time to explore beyond just the rugby matches.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Visit iconic landmarks and attractions</li>
                <li>• Experience local food and culture</li>
                <li>• Join fan zones for match atmosphere</li>
              </ul>
            </div>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <TicketCTASection />
      </section>
    </div>
  );
}