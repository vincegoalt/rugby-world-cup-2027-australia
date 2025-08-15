import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '../../lib/seo';
import { venues } from '../../data/venues';
import { AFFILIATE_URL } from '../../lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup 2027 Tickets Price Guide - All Categories & Venues',
  description: 'Complete Rugby World Cup 2027 ticket pricing guide. Compare prices across all categories, venues, and match stages. Pool matches from $25, knockout stages from $75, finals from $150.',
  keywords: [
    'rugby world cup 2027 tickets price',
    'rwc 2027 ticket costs',
    'rugby world cup ticket categories',
    'cheapest rugby world cup tickets',
    'rugby world cup final ticket prices',
    'rwc 2027 ticket pricing',
    'rugby world cup ticket comparison',
    'how much are rugby world cup tickets',
    'rugby world cup 2027 ticket packages',
    'rwc ticket price list'
  ],
  canonical: '/tickets/prices'
});

interface TicketCategory {
  name: string;
  description: string;
  priceRange: string;
  benefits: string[];
  bestFor: string;
}

const ticketCategories: TicketCategory[] = [
  {
    name: 'Category 4 - Behind Goals',
    description: 'Entry-level tickets located behind the try lines',
    priceRange: '$25 - $150',
    benefits: ['Most affordable option', 'Great atmosphere', 'Perfect for families', 'Access to all stadium facilities'],
    bestFor: 'Budget-conscious fans and families'
  },
  {
    name: 'Category 3 - Corner Sections',
    description: 'Corner seating with angled views of the pitch',
    priceRange: '$50 - $350',
    benefits: ['Good value for money', 'Decent viewing angles', 'Close to action in corners', 'Mid-range pricing'],
    bestFor: 'Fans seeking balance between price and view'
  },
  {
    name: 'Category 2 - Sideline Upper',
    description: 'Upper tier sideline seats with elevated views',
    priceRange: '$75 - $550',
    benefits: ['Excellent pitch overview', 'Strategic view of play', 'Weather protected areas', 'Good photo opportunities'],
    bestFor: 'Fans who prefer tactical overview'
  },
  {
    name: 'Category 1 - Sideline Lower',
    description: 'Premium lower tier sideline seats at halfway',
    priceRange: '$150 - $950',
    benefits: ['Best viewing experience', 'Closest to action', 'Premium facilities access', 'Potential player interaction'],
    bestFor: 'Serious fans wanting the best experience'
  },
  {
    name: 'Hospitality Packages',
    description: 'All-inclusive premium experiences with catering',
    priceRange: '$500 - $2,500',
    benefits: ['Pre-match entertainment', 'Premium food & beverages', 'Best seats guaranteed', 'VIP parking', 'Meet & greet opportunities'],
    bestFor: 'Corporate entertainment and special occasions'
  }
];

const stagePricing = [
  { stage: 'Pool Matches', cat4: '$25-50', cat3: '$50-100', cat2: '$75-150', cat1: '$150-300', hospitality: '$500-1000' },
  { stage: 'Round of 16', cat4: '$50-75', cat3: '$100-150', cat2: '$150-250', cat1: '$300-450', hospitality: '$750-1250' },
  { stage: 'Quarter-Finals', cat4: '$75-100', cat3: '$150-200', cat2: '$250-350', cat1: '$450-600', hospitality: '$1000-1500' },
  { stage: 'Semi-Finals', cat4: '$100-125', cat3: '$200-300', cat2: '$350-450', cat1: '$600-750', hospitality: '$1250-1750' },
  { stage: 'Bronze Final', cat4: '$75-100', cat3: '$150-200', cat2: '$250-350', cat1: '$450-550', hospitality: '$1000-1250' },
  { stage: 'Final', cat4: '$150-200', cat3: '$350-450', cat2: '$550-750', cat1: '$950-1500', hospitality: '$2000-2500' }
];

const venuePricing = [
  { venue: 'Stadium Australia (Sydney)', capacity: '83,500', poolMatch: '$25-300', knockoutMatch: '$75-750', final: '$150-1500' },
  { venue: 'MCG (Melbourne)', capacity: '100,024', poolMatch: '$25-300', knockoutMatch: '$75-750', final: 'N/A' },
  { venue: 'Suncorp Stadium (Brisbane)', capacity: '52,500', poolMatch: '$25-250', knockoutMatch: '$75-600', final: 'N/A' },
  { venue: 'Optus Stadium (Perth)', capacity: '60,000', poolMatch: '$25-250', knockoutMatch: '$75-600', final: 'N/A' },
  { venue: 'Adelaide Oval', capacity: '53,500', poolMatch: '$25-250', knockoutMatch: '$75-600', final: 'N/A' },
  { venue: 'CBUS Super Stadium (Gold Coast)', capacity: '27,400', poolMatch: '$25-200', knockoutMatch: 'N/A', final: 'N/A' },
  { venue: 'McDonald Jones Stadium (Newcastle)', capacity: '33,000', poolMatch: '$25-200', knockoutMatch: 'N/A', final: 'N/A' },
  { venue: 'Queensland Country Bank Stadium (Townsville)', capacity: '25,000', poolMatch: '$25-200', knockoutMatch: 'N/A', final: 'N/A' }
];

export default function TicketPricesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-center">
              <ol className="flex flex-wrap justify-center text-sm text-blue-200">
                <li className="flex items-center">
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/tickets" className="hover:text-white">
                    Tickets
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-white">Prices</span>
                </li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Rugby World Cup 2027 Ticket Prices
              </h1>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              Complete pricing guide for all venues, categories, and match stages. 
              Pool matches starting from just $25 AUD.
            </p>
            <div className="bg-yellow-500 text-black inline-block px-6 py-3 rounded-lg font-bold text-lg mb-4">
              🎫 Official Tickets Available Now - Limited Availability
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a 
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Check Live Prices
              </a>
              <Link 
                href="#categories"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Price Overview */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$25</div>
              <div className="text-sm text-gray-600">Pool Matches From</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$75</div>
              <div className="text-sm text-gray-600">Knockout From</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$150</div>
              <div className="text-sm text-gray-600">Final From</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$500+</div>
              <div className="text-sm text-gray-600">Hospitality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Categories */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Ticket Categories Explained
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-12">
            {ticketCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <div className="text-2xl font-bold text-yellow-400 mt-1">{category.priceRange}</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {category.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="text-blue-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <span className="text-sm font-semibold text-gray-900">Best for: </span>
                    <span className="text-sm text-gray-600">{category.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stadium Diagram */}
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900">
              Typical Stadium Layout
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-inner">
              <div className="border-4 border-green-600 rounded-lg relative" style={{ paddingTop: '60%' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-green-600 text-white px-4 py-2 rounded mb-2">PITCH</div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-3 py-1 rounded text-xs">
                  Cat 1 - Premium
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-3 py-1 rounded text-xs">
                  Cat 1 - Premium
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black px-3 py-1 rounded text-xs">
                  Cat 4
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black px-3 py-1 rounded text-xs">
                  Cat 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price by Stage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Prices by Tournament Stage
          </h2>
          
          <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Stage</th>
                  <th className="px-4 py-4 text-center">Category 4</th>
                  <th className="px-4 py-4 text-center">Category 3</th>
                  <th className="px-4 py-4 text-center">Category 2</th>
                  <th className="px-4 py-4 text-center">Category 1</th>
                  <th className="px-4 py-4 text-center">Hospitality</th>
                </tr>
              </thead>
              <tbody>
                {stagePricing.map((stage, index) => (
                  <tr key={stage.stage} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold">{stage.stage}</td>
                    <td className="px-4 py-3 text-center">{stage.cat4}</td>
                    <td className="px-4 py-3 text-center">{stage.cat3}</td>
                    <td className="px-4 py-3 text-center">{stage.cat2}</td>
                    <td className="px-4 py-3 text-center">{stage.cat1}</td>
                    <td className="px-4 py-3 text-center font-semibold">{stage.hospitality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a 
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Compare Live Ticket Prices
            </a>
          </div>
        </div>
      </section>

      {/* Venue Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Pricing by Venue
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {venuePricing.map((venue) => (
              <div key={venue.venue} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{venue.venue}</h3>
                <div className="text-sm text-gray-600 mb-4">Capacity: {venue.capacity}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">Pool Matches:</span>
                    <span className="font-semibold text-blue-600">{venue.poolMatch}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">Knockout Matches:</span>
                    <span className="font-semibold text-blue-600">{venue.knockoutMatch}</span>
                  </div>
                  {venue.final !== 'N/A' && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Final:</span>
                      <span className="font-bold text-yellow-600">{venue.final}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Saving Tips */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              💰 Money-Saving Tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Best Value Matches</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Pool matches in smaller cities (Newcastle, Townsville)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Weekday pool matches typically 20% cheaper</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Category 4 seats offer great atmosphere at low cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Early morning matches often discounted</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Package Deals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Team follower packages save up to 25%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">City packages for multiple matches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Group bookings (10+) receive discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Early bird offers save 15-20%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  When do tickets go on sale?
                </h3>
                <p className="text-gray-600">
                  General sale begins in early 2026, with priority access for rugby club members and past RWC attendees. 
                  Register now for updates and early access opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Are prices in Australian dollars?
                </h3>
                <p className="text-gray-600">
                  Yes, all prices are in AUD. International buyers will pay the equivalent in their local currency 
                  at the current exchange rate plus any transaction fees.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Can I resell my tickets?
                </h3>
                <p className="text-gray-600">
                  Official resale platforms will be available for face value transfers. Unauthorized resale may result 
                  in ticket cancellation. Always buy from official sources.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  What's included in hospitality packages?
                </h3>
                <p className="text-gray-600">
                  Premium match tickets, pre-match entertainment, gourmet catering, complimentary bar, VIP parking, 
                  official merchandise, and potential player appearances. Packages vary by venue and match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Secure Your Rugby World Cup 2027 Tickets
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Don't miss out on the biggest rugby event in history. Compare prices, choose your matches, 
            and book your tickets today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Buy Tickets Now
            </a>
            <Link 
              href="/schedule"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              View Match Schedule
            </Link>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>💳 Secure payment • 🔒 Official tickets • 🎫 Instant confirmation</p>
          </div>
        </div>
      </section>
    </div>
  );
}