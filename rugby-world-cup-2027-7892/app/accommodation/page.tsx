import { Metadata } from 'next'
import Link from 'next/link'
import TicketCTA from '../components/TicketCTA'

export const metadata: Metadata = {
  title: 'Accommodation Guide | Rugby World Cup 2027 Australia',
  description: 'Find the perfect accommodation for Rugby World Cup 2027 in Australia. Hotels, apartments, and hostels in all host cities.',
  openGraph: {
    title: 'Accommodation - Rugby World Cup 2027',
    description: 'Where to stay during Rugby World Cup 2027 in Australia',
  }
}

const cities = [
  { name: 'Sydney', slug: 'sydney', hotels: '500+', avgPrice: '$200-400' },
  { name: 'Melbourne', slug: 'melbourne', hotels: '450+', avgPrice: '$180-350' },
  { name: 'Brisbane', slug: 'brisbane', hotels: '300+', avgPrice: '$160-300' },
  { name: 'Perth', slug: 'perth', hotels: '250+', avgPrice: '$150-280' },
  { name: 'Adelaide', slug: 'adelaide', hotels: '200+', avgPrice: '$140-250' },
  { name: 'Gold Coast', slug: 'gold-coast', hotels: '350+', avgPrice: '$170-320' },
  { name: 'Newcastle', slug: 'newcastle', hotels: '100+', avgPrice: '$130-240' },
  { name: 'Townsville', slug: 'townsville', hotels: '80+', avgPrice: '$120-220' }
]

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accommodation Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect place to stay during Rugby World Cup 2027
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Book Early!</h3>
          <p className="text-yellow-700">
            Accommodation in host cities will be in high demand during the tournament. We recommend booking 
            6-12 months in advance for the best selection and prices.
          </p>
        </div>

        <TicketCTA />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">Hotels</h3>
            <p className="text-gray-600 mb-4">
              Wide range of options from luxury 5-star hotels to budget-friendly chains. Most offer flexible 
              cancellation policies.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Best for: Comfort and convenience</li>
              <li>• Price range: $100-500+ per night</li>
              <li>• Book through: Major booking sites</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">Apartments & Vacation Rentals</h3>
            <p className="text-gray-600 mb-4">
              Self-contained apartments and houses perfect for groups or longer stays. Kitchen facilities help save on dining costs.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Best for: Groups and families</li>
              <li>• Price range: $150-400+ per night</li>
              <li>• Book through: Airbnb, Vrbo</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">Hostels & Budget</h3>
            <p className="text-gray-600 mb-4">
              Affordable accommodation perfect for solo travelers and backpackers. Great for meeting other rugby fans.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Best for: Budget travelers</li>
              <li>• Price range: $30-80 per night</li>
              <li>• Book through: Hostelworld, YHA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Accommodation by City</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/guide/${city.slug}`}
                className="block p-4 border rounded-lg hover:border-green-600 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{city.name}</h3>
                <p className="text-sm text-gray-600">Hotels: {city.hotels}</p>
                <p className="text-sm text-gray-600">Avg price: {city.avgPrice}/night</p>
                <span className="text-green-600 text-sm font-semibold mt-2 inline-block">
                  View Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-green-800 mb-4">Booking Tips</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Book early - prices increase closer to the tournament</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Choose flexible cancellation options when possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Stay near public transport for easy stadium access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Consider suburbs for better value</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Book directly with hotels for potential perks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Check for rugby fan packages and deals</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-green-800 mb-4">Alternative Options</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>House sitting - Free accommodation in exchange for pet/house care</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Home exchanges - Swap homes with locals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>University accommodation - Often available during breaks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Camping/RV parks - Budget option near some cities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Rugby club accommodation - Some clubs offer member stays</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Location Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">City Center</h3>
              <p className="text-gray-600 text-sm">
                Close to attractions, restaurants, and nightlife. Higher prices but convenient for exploring.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Near Stadium</h3>
              <p className="text-gray-600 text-sm">
                Walking distance to matches. Can be noisy on match days but perfect for atmosphere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Suburbs</h3>
              <p className="text-gray-600 text-sm">
                Better value, quieter, authentic local experience. Ensure good transport links.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Planning Your Stay?
          </h2>
          <p className="text-gray-600 mb-6">
            Check out our detailed city guides for specific accommodation recommendations and local tips.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/guide"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              City Guides
            </Link>
            <Link
              href="/travel"
              className="inline-block bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Travel Tips
            </Link>
          </div>
        </div>

        <TicketCTA />
      </div>
    </div>
  )
}