import { Metadata } from 'next'
import TicketCTA from '../components/TicketCTA'

export const metadata: Metadata = {
  title: 'Accessibility | Rugby World Cup 2027 Australia',
  description: 'Accessibility information for Rugby World Cup 2027 venues and services. Ensuring an inclusive experience for all fans.',
  openGraph: {
    title: 'Accessibility - Rugby World Cup 2027',
    description: 'Information for fans with accessibility requirements',
  }
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accessibility Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rugby World Cup 2027 is committed to ensuring an inclusive and accessible experience for all fans
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to making Rugby World Cup 2027 accessible to everyone. All venues have been selected with 
            accessibility in mind, and we're working to ensure that fans with disabilities can fully enjoy the tournament 
            experience. This includes accessible seating, facilities, transport options, and support services.
          </p>
        </div>

        <TicketCTA />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Stadium Accessibility</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Wheelchair accessible seating in all venues</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Companion seating available</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Accessible parking spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Accessible restrooms throughout venues</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Level access or ramps to all areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Elevators where required</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Support Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Audio descriptive commentary available</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Assistance dogs welcome</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Accessible shuttle services</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Trained accessibility staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Large print and Braille programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Hearing loop systems in venues</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Ticket Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Accessible Seating:</strong> All venues offer dedicated wheelchair accessible seating with excellent 
                views of the pitch. These tickets are available at standard prices with a complimentary companion ticket included.
              </p>
              <p>
                <strong>How to Book:</strong> Accessible tickets can be purchased through our partner GoalTickets. Please 
                select "Accessible Seating" when browsing tickets. Early booking is recommended as accessible seating is limited.
              </p>
              <p>
                <strong>Companion Tickets:</strong> Each accessible ticket includes one free companion ticket for a friend, 
                family member, or carer to sit alongside you.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Transport & Parking</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Public Transport:</strong> All venues are accessible via public transport with step-free access at 
                major stations and accessible buses/trams serving match venues.
              </p>
              <p>
                <strong>Accessible Parking:</strong> Designated accessible parking spaces are available at all venues. 
                Parking permits must be displayed. Advance booking is recommended.
              </p>
              <p>
                <strong>Shuttle Services:</strong> Accessible shuttle buses will operate between transport hubs and venues 
                on match days. All shuttles are wheelchair accessible with ramps or lifts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Fan Zones</h2>
            <p className="text-gray-600 mb-4">
              All official fan zones will be fully accessible with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Level access throughout</li>
              <li>Accessible viewing platforms</li>
              <li>Accessible toilet facilities</li>
              <li>Designated quiet areas</li>
              <li>Audio description of big screen content</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Additional Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Visual Impairments</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Audio descriptive commentary</li>
                  <li>• Large print programs</li>
                  <li>• Braille information available</li>
                  <li>• Guide dog facilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hearing Impairments</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Hearing loops installed</li>
                  <li>• Sign language interpreters</li>
                  <li>• Visual alerts for announcements</li>
                  <li>• Written information displays</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobility Requirements</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Step-free access routes</li>
                  <li>• Wheelchair loan service</li>
                  <li>• Accessible seating options</li>
                  <li>• Rest areas throughout venues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Sensory Requirements</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Quiet rooms available</li>
                  <li>• Sensory bags on request</li>
                  <li>• Reduced stimulation areas</li>
                  <li>• Advance venue information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Need Assistance?</h3>
          <p className="text-yellow-700">
            If you have specific accessibility requirements or questions, please contact us before purchasing tickets. 
            Our accessibility team is here to help ensure you have the best possible experience at Rugby World Cup 2027.
          </p>
          <p className="text-yellow-700 mt-2">
            Email: accessibility@rugbyaustralia2027.com<br />
            Phone: Available closer to tournament dates
          </p>
        </div>

        <TicketCTA />
      </div>
    </div>
  )
}