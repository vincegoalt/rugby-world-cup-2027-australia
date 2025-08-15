import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata, generateTicketKeywords, generateEventSchema, generateFAQSchema } from '../../lib/seo';
import { matches, getMatchesByStage } from '../../data/matches';
import { getVenueById } from '../../data/venues';
import { formatDate, formatTime, generateTicketUrl, formatCapacity } from '../../lib/utils';
import { AFFILIATE_URL } from '../../lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup 2027 Final Tickets - Premium Seats & VIP Packages',
  description: 'Secure your seats for the Rugby World Cup 2027 Final at Accor Stadium, Sydney. Premium tickets, VIP packages, and hospitality options available. Book the ultimate rugby experience.',
  keywords: generateTicketKeywords('final', [], 'Accor Stadium'),
  canonical: '/tickets/final'
});

const finalTicketCategories = [
  {
    category: 'Platinum',
    price: { min: 850, max: 1500 },
    description: 'Ultimate premium experience with exclusive club access',
    features: [
      'Best seats in the stadium',
      'Premium club access',
      'Complimentary food & beverages',
      'Exclusive merchandise',
      'VIP parking included'
    ]
  },
  {
    category: 'Category A',
    price: { min: 450, max: 850 },
    description: 'Premium seating with excellent views',
    features: [
      'Premium lower tier seating',
      'Excellent field views',
      'Access to premium amenities',
      'Fast-track entry',
      'Official match program'
    ]
  },
  {
    category: 'Category B',
    price: { min: 250, max: 450 },
    description: 'Great seats with fantastic atmosphere',
    features: [
      'Mid-tier seating',
      'Great stadium views',
      'Standard amenities',
      'Match day atmosphere',
      'Commemorative ticket'
    ]
  },
  {
    category: 'Category C',
    price: { min: 125, max: 250 },
    description: 'Affordable tickets with full stadium experience',
    features: [
      'Upper tier seating',
      'Full field view',
      'Stadium atmosphere',
      'Food & beverage available',
      'Historic moment access'
    ]
  },
  {
    category: 'Family Package',
    price: { min: 400, max: 720 },
    description: 'Perfect for families - 2 adults + 2 children',
    features: [
      'Family-friendly seating area',
      'Activity packs for kids',
      'Family photo opportunities',
      'Reduced pricing for children',
      'Create lifelong memories'
    ]
  }
];

const faqs = [
  {
    question: 'When is the Rugby World Cup 2027 Final?',
    answer: 'The Rugby World Cup 2027 Final is scheduled for November 16, 2027, at 7:00 PM local time at Accor Stadium in Sydney.'
  },
  {
    question: 'What makes Final tickets different from other matches?',
    answer: 'Final tickets offer access to the most prestigious match in rugby. Premium categories include exclusive amenities, hospitality options, and once-in-a-lifetime experiences that celebrate the pinnacle of international rugby.'
  },
  {
    question: 'Are VIP and hospitality packages available?',
    answer: 'Yes, we offer various VIP experiences including club seating, hospitality packages with premium dining, and exclusive access to pre and post-match events.'
  },
  {
    question: 'What happens if my team doesn\'t make the Final?',
    answer: 'Final tickets are sold without knowing which teams will compete, making it an exciting neutral venue experience. This is part of the tradition and excitement of rugby\'s biggest match.'
  },
  {
    question: 'Can I resell my Final tickets?',
    answer: 'Official tickets can only be resold through authorized platforms. All tickets are checked for authenticity, and unauthorized resale may result in ticket cancellation.'
  },
  {
    question: 'What time should I arrive for the Final?',
    answer: 'We recommend arriving at least 2 hours before kickoff for the Final. There will be enhanced security, pre-match entertainment, and significant crowd numbers requiring extra time.'
  }
];

export default function FinalTicketsPage() {
  const finalMatch = getMatchesByStage('final')[0];
  const venue = finalMatch ? getVenueById(finalMatch.venue) : null;

  const eventSchema = generateEventSchema({
    name: 'Rugby World Cup 2027 Final',
    description: 'The ultimate rugby showdown - the Rugby World Cup 2027 Final at Accor Stadium, Sydney',
    startDate: finalMatch ? `${finalMatch.date}T${finalMatch.kickoffTime}:00+10:00` : '2027-11-16T19:00:00+10:00',
    location: {
      name: venue?.name || 'Accor Stadium',
      address: 'Olympic Boulevard, Sydney Olympic Park',
      city: 'Sydney'
    },
    image: venue?.image || '/images/venues/accor-stadium.jpg',
    offers: finalTicketCategories.map(category => ({
      price: category.price.min.toString(),
      currency: 'AUD',
      url: generateTicketUrl('final', AFFILIATE_URL),
      availability: 'InStock'
    }))
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-black bg-opacity-20 text-yellow-100 px-6 py-3 rounded-full text-lg font-semibold mb-6">
                Rugby World Cup 2027 Final
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                The Ultimate Rugby Experience
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-yellow-100">
                {finalMatch ? formatDate(finalMatch.date) : 'November 16, 2027'} • {finalMatch ? formatTime(finalMatch.kickoffTime) : '7:00 PM'}
              </p>
              
              <p className="text-xl mb-8 text-yellow-100">
                Accor Stadium, Sydney • Capacity: {venue?.capacity ? formatCapacity(venue.capacity) : '83,500'}
              </p>
              
              <p className="text-lg mb-10 text-yellow-100 max-w-3xl mx-auto leading-relaxed">
                Witness rugby history in the making. The Rugby World Cup Final is the pinnacle of international rugby, 
                where legends are born and dreams become reality. Secure your place at Australia's greatest sporting venue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={generateTicketUrl('final', AFFILIATE_URL)}
                  className="bg-white text-yellow-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Final Tickets - From $125
                </a>
                <Link 
                  href="#packages"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-colors"
                >
                  View VIP Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Categories */}
        <section id="packages" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Final Ticket Categories & VIP Experiences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of ticket options, from affordable general admission to luxury VIP experiences. 
                Every seat guarantees you'll witness rugby's greatest moment.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {finalTicketCategories.map((category, index) => (
                <div 
                  key={category.category} 
                  className={`rounded-lg p-8 shadow-lg ${
                    category.category === 'Platinum' 
                      ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white transform scale-105' 
                      : category.category === 'Category A'
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <div className="text-center mb-6">
                    {category.category === 'Platinum' && (
                      <div className="text-2xl mb-2">👑</div>
                    )}
                    <h3 className={`text-2xl font-bold mb-2 ${
                      category.category === 'Platinum' || category.category === 'Category A' 
                        ? '' 
                        : 'text-gray-900'
                    }`}>
                      {category.category}
                    </h3>
                    <div className={`text-4xl font-bold mb-4 ${
                      category.category === 'Platinum' 
                        ? 'text-yellow-300'
                        : category.category === 'Category A'
                        ? 'text-black'
                        : 'text-green-600'
                    }`}>
                      ${category.price.min} - ${category.price.max}
                    </div>
                    <p className={`text-sm ${
                      category.category === 'Platinum' || category.category === 'Category A' 
                        ? 'opacity-90' 
                        : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                  
                  <ul className={`space-y-3 mb-8 text-sm ${
                    category.category === 'Platinum' || category.category === 'Category A' 
                      ? 'text-white opacity-95' 
                      : 'text-gray-700'
                  }`}>
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className={`mr-3 ${
                          category.category === 'Platinum' 
                            ? 'text-yellow-300'
                            : category.category === 'Category A'
                            ? 'text-black'
                            : 'text-green-500'
                        }`}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={generateTicketUrl('final', AFFILIATE_URL)}
                    className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                      category.category === 'Platinum'
                        ? 'bg-yellow-400 text-purple-800 hover:bg-yellow-300'
                        : category.category === 'Category A'
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Select {category.category}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stadium Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Accor Stadium - Rugby's Greatest Stage
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-green-800">
                    Australia's Premier Stadium
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Accor Stadium, located in Sydney Olympic Park, is Australia's largest stadium and 
                      the perfect venue for the Rugby World Cup 2027 Final. With a capacity of 83,500, 
                      it promises an electric atmosphere for rugby's biggest match.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Stadium Features</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 83,500 capacity</li>
                          <li>• World-class facilities</li>
                          <li>• Multiple dining options</li>
                          <li>• Accessible seating</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Getting There</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Olympic Park train station</li>
                          <li>• Multiple bus services</li>
                          <li>• Parking available</li>
                          <li>• Taxi/rideshare zones</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {venue?.image && (
                  <div>
                    <img 
                      src={venue.image} 
                      alt="Accor Stadium"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Final Tickets */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-gray-900">
                Why Rugby World Cup Final Tickets Are Special
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">History in the Making</h3>
                  <p className="text-gray-600">
                    Witness the crowning of rugby's world champions. Only held every four years, 
                    the Final is rugby's most prestigious match.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Once-in-a-Lifetime</h3>
                  <p className="text-gray-600">
                    This is the first Rugby World Cup Final in Australia since 2003. 
                    Don't miss this once-in-a-generation opportunity.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Electric Atmosphere</h3>
                  <p className="text-gray-600">
                    83,500 passionate fans creating an atmosphere that you'll remember forever. 
                    The energy is unmatched in world sport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Final Tickets FAQ
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <details className="group">
                    <summary className="p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 group-open:text-green-700">
                        {faq.question}
                      </h3>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't Miss Rugby's Greatest Moment
              </h2>
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                The Rugby World Cup Final happens only once every four years. When the final whistle blows, 
                you'll either be there experiencing history, or watching it on TV. The choice is yours.
              </p>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4 text-center">🔥 Limited Time Offer</h3>
                <ul className="space-y-2 text-green-100">
                  <li>✓ Official Rugby World Cup tickets</li>
                  <li>✓ Guaranteed seat allocation</li>
                  <li>✓ Secure payment processing</li>
                  <li>✓ Mobile ticket delivery</li>
                  <li>✓ Customer support included</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={generateTicketUrl('final', AFFILIATE_URL)}
                  className="bg-yellow-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Final Tickets Now
                </a>
                <Link 
                  href="/tickets"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-green-800 transition-colors"
                >
                  View All Match Tickets
                </Link>
              </div>
              
              <p className="text-sm text-green-200 mt-6">
                Secure SSL checkout • Instant confirmation • Mobile tickets available
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}