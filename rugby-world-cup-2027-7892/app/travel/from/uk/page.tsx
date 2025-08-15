import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '../../../lib/seo';
import { AFFILIATE_URL } from '../../../lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'UK to Rugby World Cup 2027 Australia - Complete Travel Guide',
  description: 'Everything UK fans need for Rugby World Cup 2027 in Australia. Direct flights from London, Manchester, Edinburgh. Visa requirements, costs, accommodation, and match tickets for British rugby supporters.',
  keywords: [
    'uk to rugby world cup 2027',
    'british fans rugby world cup australia',
    'london to sydney rugby world cup',
    'england rugby world cup 2027 travel',
    'scotland wales rugby fans australia',
    'uk to australia rugby tickets',
    'british airways rugby world cup',
    'manchester to melbourne rugby',
    'edinburgh to brisbane flights',
    'uk rugby tour packages 2027'
  ],
  canonical: '/travel/from/uk'
});

export default function UKTravelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-red-700 text-white py-16">
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
                  <Link href="/travel" className="hover:text-white">
                    Travel
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-white">From UK</span>
                </li>
              </ol>
            </nav>
            
            <div className="text-center">
              <div className="text-6xl mb-6">🇬🇧 ✈️ 🇦🇺</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                UK to Rugby World Cup 2027
              </h1>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              Complete guide for British rugby fans traveling to Australia. 
              Support England, Scotland, and Wales on their World Cup campaigns down under.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Book Match Tickets
              </a>
              <Link 
                href="#flights"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                View Flight Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">21-24hrs</div>
              <div className="text-sm text-gray-600">Flight Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">£800-2000</div>
              <div className="text-sm text-gray-600">Return Flights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3 Months</div>
              <div className="text-sm text-gray-600">Visa Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">+9-11hrs</div>
              <div className="text-sm text-gray-600">Time Difference</div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Options */}
      <section id="flights" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Flight Routes from UK
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">London Heathrow</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Direct to Sydney</div>
                  <div className="text-sm text-gray-600">Qantas - 22 hours</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Direct to Perth</div>
                  <div className="text-sm text-gray-600">Qantas - 17 hours</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Via Singapore</div>
                  <div className="text-sm text-gray-600">Singapore Airlines - 22 hours total</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Via Dubai</div>
                  <div className="text-sm text-gray-600">Emirates - 22 hours total</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Manchester</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="font-semibold">Via Singapore</div>
                  <div className="text-sm text-gray-600">Singapore Airlines - 23 hours</div>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="font-semibold">Via Dubai</div>
                  <div className="text-sm text-gray-600">Emirates - 23 hours</div>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="font-semibold">Via Doha</div>
                  <div className="text-sm text-gray-600">Qatar Airways - 23 hours</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Edinburgh</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Via Dubai</div>
                  <div className="text-sm text-gray-600">Emirates - 24 hours</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Via Amsterdam</div>
                  <div className="text-sm text-gray-600">KLM - 24 hours</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Via London</div>
                  <div className="text-sm text-gray-600">British Airways - 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Flight Booking Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Book by March 2027 for best prices (6 months ahead)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Consider stopovers in Asia to break the journey</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Perth entry saves 5 hours vs East Coast cities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Premium Economy worth it for 20+ hour flights</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visa Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Visa Requirements for UK Citizens
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">eVisitor Visa (Subclass 651)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <span className="font-semibold">Free of charge</span>
                    <div className="text-sm text-gray-600">No visa fees for UK passport holders</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <span className="font-semibold">3 months stay allowed</span>
                    <div className="text-sm text-gray-600">Perfect for extended rugby tours</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <span className="font-semibold">Apply online</span>
                    <div className="text-sm text-gray-600">Usually approved within 24 hours</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <span className="font-semibold">Multiple entries</span>
                    <div className="text-sm text-gray-600">Valid for 12 months from issue</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Required Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📄</span>
                  <span>Valid UK passport (6+ months validity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📧</span>
                  <span>Email address for visa delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🎫</span>
                  <span>Return flight booking (recommended)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏨</span>
                  <span>Accommodation details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💳</span>
                  <span>Proof of funds (bank statement)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Budget Planning for UK Fans
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-red-700 text-white p-6">
              <h3 className="text-2xl font-bold">Estimated Costs (Per Person)</h3>
              <p className="text-blue-100 mt-2">2-week Rugby World Cup trip from UK</p>
            </div>
            
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3">Item</th>
                    <th className="text-center py-3">Budget</th>
                    <th className="text-center py-3">Mid-Range</th>
                    <th className="text-center py-3">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">Return Flights</td>
                    <td className="text-center">£800-1000</td>
                    <td className="text-center">£1200-1500</td>
                    <td className="text-center">£2000-5000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Accommodation (14 nights)</td>
                    <td className="text-center">£700</td>
                    <td className="text-center">£1400</td>
                    <td className="text-center">£2800+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Match Tickets (3 games)</td>
                    <td className="text-center">£150</td>
                    <td className="text-center">£450</td>
                    <td className="text-center">£1500+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Food & Drinks</td>
                    <td className="text-center">£500</td>
                    <td className="text-center">£700</td>
                    <td className="text-center">£1000+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Local Transport</td>
                    <td className="text-center">£200</td>
                    <td className="text-center">£300</td>
                    <td className="text-center">£500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Activities & Tours</td>
                    <td className="text-center">£150</td>
                    <td className="text-center">£300</td>
                    <td className="text-center">£500+</td>
                  </tr>
                  <tr className="font-bold text-lg">
                    <td className="py-4">Total Estimate</td>
                    <td className="text-center text-blue-600">£2,500</td>
                    <td className="text-center text-blue-600">£4,350</td>
                    <td className="text-center text-blue-600">£9,300+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Home Nations Support */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Supporting Home Nations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-white to-red-600 p-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="font-semibold">World Ranking:</span> #5
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Previous Best:</span> Champions 2003
                </div>
                <Link 
                  href="/teams/england"
                  className="block w-full bg-red-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  View England Fixtures
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-800 to-white p-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="font-semibold">World Ranking:</span> #6
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Previous Best:</span> 4th Place 1991
                </div>
                <Link 
                  href="/teams/scotland"
                  className="block w-full bg-blue-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                >
                  View Scotland Fixtures
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-green-600 p-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                  🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="font-semibold">World Ranking:</span> #8
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Previous Best:</span> 3rd Place 1987
                </div>
                <Link 
                  href="/teams/wales"
                  className="block w-full bg-red-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  View Wales Fixtures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Essential Travel Tips for UK Fans
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Before You Travel</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Apply for eVisitor visa at least 2 weeks before</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Get comprehensive travel insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Book accommodation early (limited availability)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Notify banks of travel to avoid card blocks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Get Australian dollars before departure</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">In Australia</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌞</span>
                  <span className="text-gray-700">October is spring - pack layers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔌</span>
                  <span className="text-gray-700">Type I power adapter needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📱</span>
                  <span className="text-gray-700">Consider local SIM for data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">☀️</span>
                  <span className="text-gray-700">Use high SPF sunscreen (UV strong)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💳</span>
                  <span className="text-gray-700">Tap payments widely accepted</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the British Invasion Down Under
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Thousands of UK fans will make the journey to support our teams. 
            Book early for the best deals on flights, accommodation, and match tickets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Secure Match Tickets
            </a>
            <Link 
              href="/tickets/prices"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              View Ticket Prices
            </Link>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>🏉 Official ticket partner • ✈️ ATOL protected packages available</p>
          </div>
        </div>
      </section>
    </div>
  );
}