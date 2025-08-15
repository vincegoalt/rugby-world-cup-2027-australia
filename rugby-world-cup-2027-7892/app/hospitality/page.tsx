import { Metadata } from 'next'
import TicketCTA from '../components/TicketCTA'

export const metadata: Metadata = {
  title: 'Hospitality Packages | Rugby World Cup 2027 Australia',
  description: 'Premium hospitality packages for Rugby World Cup 2027. VIP experiences, corporate entertainment, and exclusive access.',
  openGraph: {
    title: 'Hospitality - Rugby World Cup 2027',
    description: 'Premium experiences and VIP packages for Rugby World Cup 2027',
  }
}

export default function HospitalityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hospitality Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Rugby World Cup 2027 in ultimate style with our premium hospitality packages
          </p>
        </div>

        <div className="bg-gradient-to-r border-2 rounded-xl p-8 mb-8" style={{background: 'linear-gradient(to right, #FEF3C7, #FFFBEB)', borderColor: '#FCD34D'}}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">VIP Experience Awaits</h2>
          <p className="text-gray-700 mb-4">
            Elevate your Rugby World Cup experience with exclusive hospitality packages offering premium seating, 
            gourmet dining, and unparalleled access to the tournament's biggest moments.
          </p>
        </div>

        <TicketCTA />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4" style={{borderTopColor: '#CD7F32'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: '#8B4513'}}>Bronze Package</h3>
            <p className="text-gray-600 mb-4">Perfect for enjoying matches in comfort</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Premium Category 1 seating</li>
              <li>• Pre-match hospitality lounge access</li>
              <li>• Complimentary food and beverages</li>
              <li>• Match program and gift</li>
              <li>• Dedicated entrance</li>
            </ul>
            <p className="text-2xl font-bold text-gray-900">From $800</p>
            <p className="text-sm text-gray-500">per person, per match</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4" style={{borderTopColor: '#C0C0C0'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: '#71706E'}}>Silver Package</h3>
            <p className="text-gray-600 mb-4">Enhanced experience with exclusive perks</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Premium Club seating</li>
              <li>• All-day hospitality suite access</li>
              <li>• Gourmet dining experience</li>
              <li>• Premium bar service</li>
              <li>• Meet & greet opportunities</li>
              <li>• Exclusive merchandise</li>
            </ul>
            <p className="text-2xl font-bold text-gray-900">From $1,500</p>
            <p className="text-sm text-gray-500">per person, per match</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4" style={{borderTopColor: '#FFD700'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: '#B8860B'}}>Gold Package</h3>
            <p className="text-gray-600 mb-4">The ultimate Rugby World Cup experience</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Best seats in the stadium</li>
              <li>• Private suite access</li>
              <li>• Five-star dining by celebrity chefs</li>
              <li>• Champagne and premium spirits</li>
              <li>• Player meet & greets</li>
              <li>• Exclusive stadium tour</li>
              <li>• Luxury transport included</li>
            </ul>
            <p className="text-2xl font-bold text-gray-900">From $3,000</p>
            <p className="text-sm text-gray-500">per person, per match</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Corporate Packages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Private Suites</h3>
              <p className="text-gray-600 mb-4">
                Host clients and partners in your own private suite with panoramic views of the action.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 10-20 person capacity</li>
                <li>• Dedicated host service</li>
                <li>• Customizable catering</li>
                <li>• Branding opportunities</li>
                <li>• Private balcony seating</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Lounge</h3>
              <p className="text-gray-600 mb-4">
                Network with industry leaders in our exclusive business lounges.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Shared premium space</li>
                <li>• Networking opportunities</li>
                <li>• Business facilities</li>
                <li>• All-inclusive catering</li>
                <li>• Reserved seating blocks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Tournament Packages</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="border-b pb-3">
                <strong>Opening Ceremony Special</strong><br />
                Experience the spectacular opening with VIP treatment
              </li>
              <li className="border-b pb-3">
                <strong>Knockout Stage Bundle</strong><br />
                All quarter-finals, semi-finals, and final matches
              </li>
              <li className="border-b pb-3">
                <strong>Team Follower Package</strong><br />
                Follow your team throughout the tournament
              </li>
              <li>
                <strong>Grand Slam Experience</strong><br />
                Access to all 48 matches with ultimate hospitality
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">What's Included</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Match tickets in premium locations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Access to exclusive hospitality areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Gourmet food and beverage service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Official merchandise and gifts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Dedicated customer service team</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Optional accommodation add-ons</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br rounded-xl p-8" style={{background: 'linear-gradient(to bottom right, #F0FDF4, #FFFBEB)'}}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Exclusive Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trophy Photo</h4>
              <p className="text-sm text-gray-600">
                Exclusive photo opportunity with the Webb Ellis Cup
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏉</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Pitch Access</h4>
              <p className="text-sm text-gray-600">
                Pre-match pitch-side experience for Gold package holders
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Legend Hosts</h4>
              <p className="text-sm text-gray-600">
                Rugby legends as special guests and hosts
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Limited Availability</h3>
          <p className="text-yellow-700">
            Hospitality packages are in high demand and limited in number. Early booking is essential to secure 
            your preferred matches and package level. Contact us today to discuss your requirements.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Rugby at its Finest?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our hospitality team to create your perfect Rugby World Cup 2027 experience
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Enquire Now
          </a>
        </div>

        <TicketCTA />
      </div>
    </div>
  )
}