import { Metadata } from 'next'
import TicketCTA from '../components/TicketCTA'

export const metadata: Metadata = {
  title: 'About Us | Rugby World Cup 2027 Australia Guide',
  description: 'Your comprehensive guide to Rugby World Cup 2027 in Australia. We help fans plan their perfect tournament experience.',
  openGraph: {
    title: 'About - Rugby World Cup 2027 Australia Guide',
    description: 'Your trusted source for Rugby World Cup 2027 information',
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Rugby Australia 2027
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive guide to the Rugby World Cup 2027 in Australia
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are dedicated to providing rugby fans worldwide with comprehensive, accurate, and up-to-date information 
            about Rugby World Cup 2027 in Australia. Our goal is to help you plan the perfect tournament experience, 
            whether you're traveling from overseas or exploring your own backyard.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From ticket information and match schedules to travel guides and accommodation tips, we're here to ensure 
            you don't miss a moment of the action at what promises to be the greatest Rugby World Cup ever hosted.
          </p>
        </div>

        <TicketCTA />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">What We Offer</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Complete match schedules and fixture information</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Detailed venue and stadium guides</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>City travel guides for all host locations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Ticket purchasing assistance through trusted partners</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Accommodation and transport recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Team profiles and tournament analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Australian-based with local knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Comprehensive coverage of all aspects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Regular updates and latest news</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Trusted ticket partner in GoalTickets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Mobile-friendly for on-the-go access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Free to use with no registration required</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclosure</h3>
          <p className="text-yellow-700">
            We are an independent guide and are not affiliated with Rugby World Cup Limited or Rugby Australia. 
            For official tournament information, please visit the Rugby World Cup website. Tickets purchased through 
            our partner GoalTickets may earn us a commission, which helps us maintain this free resource for fans.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions or suggestions? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/faq"
              className="inline-block bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}