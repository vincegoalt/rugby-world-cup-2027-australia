import { Metadata } from 'next'
import TicketCTA from '../components/TicketCTA'

export const metadata: Metadata = {
  title: 'Contact Us | Rugby World Cup 2027 Australia',
  description: 'Get in touch with us for information about Rugby World Cup 2027 in Australia. Ticket inquiries, travel assistance, and general questions.',
  openGraph: {
    title: 'Contact - Rugby World Cup 2027 Australia',
    description: 'Contact us for Rugby World Cup 2027 information and assistance',
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with your Rugby World Cup 2027 experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ticket Inquiries</h3>
                <p className="text-gray-600 mb-3">
                  For ticket purchases and availability, visit our trusted partner:
                </p>
                <a
                  href="https://goaltickets.com/collections/rugby-world-cup-2027-tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  GoalTickets.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">General Information</h3>
                <p className="text-gray-600">
                  Email: info@rugbyaustralia2027.com
                </p>
                <p className="text-gray-600">
                  Response time: 24-48 hours
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                <p className="text-gray-600">
                  Email: partnerships@rugbyaustralia2027.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Media Inquiries</h3>
                <p className="text-gray-600">
                  Email: media@rugbyaustralia2027.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Quick Links</h2>
            
            <div className="space-y-4">
              <a href="/faq" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-1">FAQs</h3>
                <p className="text-sm text-gray-600">Find answers to common questions</p>
              </a>

              <a href="/tickets" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-1">Tickets</h3>
                <p className="text-sm text-gray-600">Browse available tickets and packages</p>
              </a>

              <a href="/travel" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-1">Travel Guide</h3>
                <p className="text-sm text-gray-600">Plan your trip to Australia</p>
              </a>

              <a href="/venues" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-1">Venues</h3>
                <p className="text-sm text-gray-600">Explore the tournament stadiums</p>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-12">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-yellow-800">Important Notice</h3>
              <p className="mt-2 text-yellow-700">
                We are an independent guide to Rugby World Cup 2027. For official tournament information, 
                please visit the Rugby World Cup website. Tickets purchased through our partner GoalTickets 
                may earn us a commission.
              </p>
            </div>
          </div>
        </div>

        <TicketCTA />

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select a topic</option>
                <option value="tickets">Ticket Inquiry</option>
                <option value="travel">Travel Information</option>
                <option value="accommodation">Accommodation</option>
                <option value="general">General Question</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="media">Media Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}