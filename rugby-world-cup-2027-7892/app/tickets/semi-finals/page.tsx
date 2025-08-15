import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata, generateTicketKeywords, generateEventSchema, generateFAQSchema } from '../../lib/seo';
import { getMatchesByStage } from '../../data/matches';
import { getVenueById } from '../../data/venues';
import { formatDate, formatTime, generateTicketUrl, formatCapacity } from '../../lib/utils';
import { AFFILIATE_URL } from '../../lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup 2027 Semi-Final Tickets - Last 4 Teams Standing',
  description: 'Buy Rugby World Cup 2027 Semi-Final tickets. Watch the final four teams battle for a place in the Final across Sydney and Melbourne. Premium seats available.',
  keywords: generateTicketKeywords('semi-finals', [], 'Accor Stadium, Marvel Stadium'),
  canonical: '/tickets/semi-finals'
});

const semiTicketCategories = [
  {
    category: 'Category A',
    price: { min: 200, max: 450 },
    description: 'Premium seating with exceptional views',
    features: [
      'Best seats in lower tiers',
      'Premium stadium amenities',
      'Excellent field visibility',
      'Fast-track stadium entry',
      'Official match program included'
    ]
  },
  {
    category: 'Category B',
    price: { min: 130, max: 250 },
    description: 'Great seats with fantastic atmosphere',
    features: [
      'Mid-tier seating options',
      'Great stadium views',
      'Standard amenities access',
      'Electric semi-final atmosphere',
      'Commemorative ticket stub'
    ]
  },
  {
    category: 'Category C',
    price: { min: 75, max: 130 },
    description: 'Affordable access to semi-final action',
    features: [
      'Upper tier seating',
      'Full field view guaranteed',
      'Incredible crowd atmosphere',
      'Food & beverage options',
      'Budget-friendly option'
    ]
  },
  {
    category: 'Family Package',
    price: { min: 250, max: 500 },
    description: 'Perfect for families - 2 adults + 2 children',
    features: [
      'Family-designated seating',
      'Special children activities',
      'Family photo opportunities',
      'Discounted children pricing',
      'Create unforgettable memories'
    ]
  }
];

const faqs = [
  {
    question: 'When are the Rugby World Cup 2027 Semi-Finals?',
    answer: 'The Semi-Finals are scheduled for November 8th and 9th, 2027. The first semi-final will be at Accor Stadium in Sydney, and the second at Marvel Stadium in Melbourne.'
  },
  {
    question: 'Which teams will play in the Semi-Finals?',
    answer: 'The Semi-Final participants will be the four teams that advance from the Quarter-Finals. Teams are determined based on their performance in the pool stages and knockout rounds.'
  },
  {
    question: 'Can I buy tickets for both Semi-Finals?',
    answer: 'Yes, you can purchase tickets for both semi-final matches. Many fans choose to attend both matches to experience the full drama of Rugby World Cup knockout rugby.'
  },
  {
    question: 'What happens if my preferred team doesn\'t make the Semi-Finals?',
    answer: 'Semi-Final tickets are sold without knowing which specific teams will compete. This adds to the excitement as you\'ll witness the best four teams in the world competing for a place in the Final.'
  },
  {
    question: 'Are there travel packages for Semi-Final matches?',
    answer: 'Yes, various travel packages are available combining accommodation, transport, and match tickets for fans wanting to attend both semi-finals in Sydney and Melbourne.'
  },
  {
    question: 'How intense is the atmosphere at Semi-Final matches?',
    answer: 'Semi-Finals provide some of the most electric atmospheres in sport. With only four teams remaining and everything on the line, the crowd energy and tension are absolutely incredible.'
  }
];

export default function SemiFinalsTicketsPage() {
  const semiMatches = getMatchesByStage('semi-final');
  const venues = semiMatches.map(match => getVenueById(match.venue)).filter(Boolean);

  const eventSchema = generateEventSchema({
    name: 'Rugby World Cup 2027 Semi-Finals',
    description: 'The final four teams battle for a place in the Rugby World Cup 2027 Final',
    startDate: semiMatches[0] ? `${semiMatches[0].date}T${semiMatches[0].kickoffTime}:00+10:00` : '2027-11-08T19:00:00+10:00',
    endDate: semiMatches[1] ? `${semiMatches[1].date}T${semiMatches[1].kickoffTime}:00+10:00` : '2027-11-09T19:00:00+10:00',
    location: {
      name: 'Accor Stadium & Marvel Stadium',
      address: 'Sydney & Melbourne',
      city: 'Sydney & Melbourne'
    },
    offers: semiTicketCategories.map(category => ({
      price: category.price.min.toString(),
      currency: 'AUD',
      url: generateTicketUrl('semi-finals', AFFILIATE_URL),
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
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-800 via-green-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white bg-opacity-20 text-green-100 px-6 py-3 rounded-full text-lg font-semibold mb-6">
                Rugby World Cup 2027 Semi-Finals
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                The Final Four
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-green-100">
                November 8th & 9th, 2027
              </p>
              
              <p className="text-xl mb-8 text-green-100">
                Sydney & Melbourne • Two Cities, Two Epic Battles
              </p>
              
              <p className="text-lg mb-10 text-green-100 max-w-3xl mx-auto leading-relaxed">
                Only four teams remain. Two matches. Two cities. One dream - to reach the Rugby World Cup Final. 
                Experience the most intense matches in rugby as the best teams on Earth battle for glory.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={generateTicketUrl('semi-finals', AFFILIATE_URL)}
                  className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Semi-Final Tickets - From $75
                </a>
                <Link 
                  href="#matches"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors"
                >
                  View Match Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Semi-Final Matches */}
        <section id="matches" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Semi-Final Match Details
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {semiMatches.map((match, index) => {
                const venue = getVenueById(match.venue);
                return (
                  <div key={match.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                      <h3 className="text-2xl font-bold mb-2">
                        Semi-Final {index + 1}
                      </h3>
                      <div className="text-lg">
                        {formatDate(match.date)} • {formatTime(match.kickoffTime)}
                      </div>
                    </div>
                    
                    {venue?.image && (
                      <img 
                        src={venue.image} 
                        alt={venue.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-4 text-green-800">
                        {venue?.name}
                      </h4>
                      
                      <div className="space-y-3 text-gray-600 mb-6">
                        <div className="flex justify-between">
                          <span className="font-medium">Location:</span>
                          <span>{venue?.city}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Capacity:</span>
                          <span>{venue?.capacity ? formatCapacity(venue.capacity) : 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Kickoff:</span>
                          <span>{formatTime(match.kickoffTime)}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Link 
                          href={`/tickets/${match.id}`}
                          className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                          View Match Tickets
                        </Link>
                        <Link 
                          href={`/venues/${venue?.slug}`}
                          className="block w-full border border-green-600 text-green-600 text-center py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                        >
                          Learn About {venue?.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ticket Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Semi-Final Ticket Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your perfect seat for the Semi-Finals. Every ticket guarantees you'll witness 
                some of the most dramatic rugby ever played.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {semiTicketCategories.map((category, index) => (
                <div 
                  key={category.category} 
                  className={`rounded-lg p-6 shadow-lg ${
                    category.category === 'Category A' 
                      ? 'bg-gradient-to-br from-green-600 to-green-700 text-white transform scale-105' 
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className={`text-xl font-bold mb-2 ${
                      category.category === 'Category A' ? '' : 'text-gray-900'
                    }`}>
                      {category.category}
                    </h3>
                    <div className={`text-3xl font-bold mb-4 ${
                      category.category === 'Category A' 
                        ? 'text-yellow-300'
                        : 'text-green-600'
                    }`}>
                      ${category.price.min} - ${category.price.max}
                    </div>
                    <p className={`text-sm ${
                      category.category === 'Category A' 
                        ? 'text-green-100' 
                        : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                  
                  <ul className={`space-y-2 mb-6 text-sm ${
                    category.category === 'Category A' 
                      ? 'text-green-100' 
                      : 'text-gray-700'
                  }`}>
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className={`mr-2 ${
                          category.category === 'Category A' 
                            ? 'text-yellow-300'
                            : 'text-green-500'
                        }`}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={generateTicketUrl('semi-finals', AFFILIATE_URL)}
                    className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                      category.category === 'Category A'
                        ? 'bg-yellow-400 text-green-800 hover:bg-yellow-300'
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

        {/* Why Semi-Finals Are Special */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Why Semi-Finals Are Rugby's Most Dramatic Matches
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Ultimate Intensity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With everything on the line and only one chance to reach the Final, 
                    Semi-Finals deliver the highest intensity rugby you'll ever witness.
                  </p>
                </div>
                
                <div>
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Elite Competition</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Only the world's four best teams make it this far. Every player gives everything 
                    they have for their country and their dreams.
                  </p>
                </div>
                
                <div>
                  <div className="text-5xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">Pure Drama</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No second chances. No tomorrow. Win and play in the Final, 
                    lose and go home. It doesn't get more dramatic than this.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-green-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-center text-green-800">
                  Two Cities, Two Epic Battles
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Sydney - Semi-Final 1</h4>
                    <p className="text-gray-600">
                      Accor Stadium's 83,500 capacity creates an electric atmosphere 
                      in Australia's premier sporting venue.
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Melbourne - Semi-Final 2</h4>
                    <p className="text-gray-600">
                      Marvel Stadium's unique enclosed design amplifies crowd noise, 
                      creating an intense cauldron of rugby passion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Semi-Finals FAQ
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-800 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Experience Rugby's Most Dramatic Moments
              </h2>
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Semi-Finals are where legends are made and dreams are shattered. 
                Be there when history unfolds and witness the passion, drama, and glory of knockout rugby.
              </p>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">🎟️ Semi-Finals Package Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left text-green-100">
                  <div>
                    <div>✓ Official World Cup tickets</div>
                    <div>✓ Both semi-final matches</div>
                    <div>✓ Premium stadium experience</div>
                  </div>
                  <div>
                    <div>✓ Sydney & Melbourne venues</div>
                    <div>✓ Secure online booking</div>
                    <div>✓ Mobile ticket delivery</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={generateTicketUrl('semi-finals', AFFILIATE_URL)}
                  className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Semi-Final Tickets
                </a>
                <Link 
                  href="/tickets/final"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors"
                >
                  View Final Tickets
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}