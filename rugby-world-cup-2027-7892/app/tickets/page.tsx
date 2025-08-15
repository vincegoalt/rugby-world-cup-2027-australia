import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { generateMetadata, generateTicketKeywords, generateFAQSchema } from '../lib/seo';
import { matches, getMatchesByStage } from '../data/matches';
import { teams, getTeamById } from '../data/teams';
import { venues, getVenueById } from '../data/venues';
import { formatDate, formatTime, generateTicketUrl } from '../lib/utils';
import { AFFILIATE_URL, SITE_NAME } from '../lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup 2027 Tickets - Official Ticket Prices & Availability',
  description: 'Buy official Rugby World Cup 2027 tickets for Australia. Compare prices for all matches including the final, semi-finals, and pool games. Secure your seats now.',
  keywords: generateTicketKeywords('all matches', ['new zealand', 'south africa', 'france', 'england'], 'all venues'),
  canonical: '/tickets'
});

const ticketCategories = [
  {
    category: 'Category A',
    poolStage: { min: 65, max: 135 },
    knockoutStage: { min: 150, max: 350 },
    final: { min: 450, max: 850 },
    description: 'Premium seating with the best views',
    color: 'from-yellow-400 to-yellow-600',
    icon: '👑'
  },
  {
    category: 'Category B',
    poolStage: { min: 45, max: 85 },
    knockoutStage: { min: 95, max: 185 },
    final: { min: 250, max: 450 },
    description: 'Excellent seats with great stadium views',
    color: 'from-blue-500 to-blue-700',
    icon: '⭐'
  },
  {
    category: 'Category C',
    poolStage: { min: 25, max: 45 },
    knockoutStage: { min: 55, max: 95 },
    final: { min: 125, max: 250 },
    description: 'Good value tickets with stadium atmosphere',
    color: 'from-green-500 to-green-700',
    icon: '🎫'
  },
  {
    category: 'Family Tickets',
    poolStage: { min: 80, max: 160 },
    knockoutStage: { min: 180, max: 320 },
    final: { min: 400, max: 720 },
    description: '2 adults + 2 children packages',
    color: 'from-purple-500 to-purple-700',
    icon: '👨‍👩‍👧‍👦'
  }
];

const ticketTypes = [
  {
    title: 'Individual Match Tickets',
    description: 'Choose specific matches you want to attend',
    icon: '🎯',
    features: ['Flexible choice', 'Single match focus', 'Best for locals'],
    link: '#upcoming-matches'
  },
  {
    title: 'Team Following Packages',
    description: 'Follow your team throughout the tournament',
    icon: '🏉',
    features: ['All team matches', 'Guaranteed seats', 'Fan zone access'],
    link: '/schedule'
  },
  {
    title: 'Venue Packages',
    description: 'All matches at your chosen stadium',
    icon: '🏟️',
    features: ['Multiple matches', 'Same venue', 'Local convenience'],
    link: '/venues'
  },
  {
    title: 'Knockout Stage Packages',
    description: 'Experience the intensity of elimination rounds',
    icon: '🏆',
    features: ['Quarter-finals onwards', 'Premium matches', 'Historic moments'],
    link: '/tickets/semi-finals'
  }
];

const faqs = [
  {
    question: 'When do Rugby World Cup 2027 tickets go on sale?',
    answer: 'Ticket sales for Rugby World Cup 2027 begin in phases. Priority sales for registered fans start in early 2026, followed by general public sales. Sign up for our newsletter to be notified of exact dates.'
  },
  {
    question: 'What are the different ticket categories available?',
    answer: 'Tickets are available in Categories A, B, and C, plus Family packages. Category A offers the best seats and views, while Category C provides affordable options. Family tickets include 2 adult and 2 child tickets.'
  },
  {
    question: 'Can I buy tickets for individual matches?',
    answer: 'Yes, tickets are available for individual pool matches, knockout games, semi-finals, and the final. You can also purchase team-following packages and venue packages for multiple games.'
  },
  {
    question: 'Are there accessible seating options?',
    answer: 'All venues offer accessible seating options for wheelchair users and companions. Accessible tickets must be purchased through the official accessibility booking line.'
  },
  {
    question: 'What is the refund policy for tickets?',
    answer: 'Tickets are generally non-refundable except in specific circumstances such as match cancellation. Travel insurance is recommended when purchasing tickets.'
  },
  {
    question: 'How can I avoid ticket fraud?',
    answer: 'Only purchase tickets from official sources and authorized resellers. Be wary of deals that seem too good to be true. GoalTickets is an authorized partner for Rugby World Cup 2027 tickets.'
  }
];

const jsonLd = generateFAQSchema(faqs);

export default function TicketsPage() {
  const upcomingMatches = matches.slice(0, 6);
  const finalMatch = matches.find(m => m.stage === 'final');
  const semiMatches = getMatchesByStage('semi-final');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Enhanced Hero Section with Image */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&h=1080&fit=crop"
              alt="Rugby Stadium"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-green-900/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <nav className="flex mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-blue-200 hover:text-white text-sm font-medium">
                    Home
                  </Link>
                </li>
                <li className="inline-flex items-center">
                  <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-yellow-400 text-sm font-medium">Tickets</span>
                </li>
              </ol>
            </nav>
            
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Rugby World Cup 2027
                <span className="block text-yellow-400 text-3xl md:text-4xl mt-2">Official Tickets</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Be part of rugby history in Australia. Compare prices, find the best seats, 
                and secure your tickets for the world's greatest rugby tournament.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">48</div>
                  <div className="text-sm text-blue-100">Matches</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">8</div>
                  <div className="text-sm text-blue-100">Host Cities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">20</div>
                  <div className="text-sm text-blue-100">Teams</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">$25+</div>
                  <div className="text-sm text-blue-100">From</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={AFFILIATE_URL}
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎫 Buy Tickets Now
                </a>
                <Link 
                  href="#ticket-categories"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
                >
                  View Prices
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Choose Your Rugby Experience
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Select the perfect ticket package for your Rugby World Cup 2027 journey
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {ticketTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{type.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={type.link}
                      className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Price Categories */}
        <section id="ticket-categories" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Ticket Categories & Pricing
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from different price categories to match your budget and preferences
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {ticketCategories.map((category) => (
                <div key={category.category} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <div className="p-6">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{category.category}</h3>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-gray-600">Pool Stage</span>
                        <span className="font-semibold text-green-600">
                          ${category.poolStage.min}-${category.poolStage.max}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-gray-600">Knockout</span>
                        <span className="font-semibold text-blue-600">
                          ${category.knockoutStage.min}-${category.knockoutStage.max}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-600">Final</span>
                        <span className="font-bold text-yellow-600">
                          ${category.final.min}-${category.final.max}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                All prices in AUD. Additional booking fees may apply.
              </p>
              <a 
                href={AFFILIATE_URL}
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability on GoalTickets
              </a>
            </div>
          </div>
        </section>

        {/* Featured Matches with Images */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Premium Match Experiences
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Don't miss these iconic Rugby World Cup moments
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Final Match */}
              {finalMatch && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image 
                      src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop"
                      alt="Rugby World Cup Final"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FINAL
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">World Cup Final</h3>
                      <p className="text-sm opacity-90">{formatDate(finalMatch.date)}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      The ultimate showdown at {getVenueById(finalMatch.venue)?.name}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">From</span>
                      <span className="text-2xl font-bold text-yellow-600">$125</span>
                    </div>
                    <Link 
                      href="/tickets/final"
                      className="block w-full bg-yellow-500 text-black text-center py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Get Final Tickets
                    </Link>
                  </div>
                </div>
              )}

              {/* Semi-Finals */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src="https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=800&h=600&fit=crop"
                    alt="Rugby Semi-Finals"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    SEMI-FINALS
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Semi-Finals</h3>
                    <p className="text-sm opacity-90">2 Matches</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Four teams battle for glory across two epic encounters
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">From</span>
                    <span className="text-2xl font-bold text-green-600">$55</span>
                  </div>
                  <Link 
                    href="/tickets/semi-finals"
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                  >
                    View Semi-Final Tickets
                  </Link>
                </div>
              </div>

              {/* Quarter-Finals */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop"
                    alt="Rugby Quarter-Finals"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    QUARTER-FINALS
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Quarter-Finals</h3>
                    <p className="text-sm opacity-90">4 Matches</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    The knockout stage begins with eight teams competing
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">From</span>
                    <span className="text-2xl font-bold text-blue-600">$45</span>
                  </div>
                  <Link 
                    href="#upcoming-matches"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    View Quarter-Final Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Matches Grid */}
        <section id="upcoming-matches" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              All Match Tickets
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Browse all 48 matches and find your perfect rugby experience
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {upcomingMatches.map((match) => {
                const team1 = getTeamById(match.team1);
                const team2 = getTeamById(match.team2);
                const venue = getVenueById(match.venue);
                
                return (
                  <div key={match.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 p-1">
                      <div className="bg-white p-5">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {match.stage.replace('-', ' ')}
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                            From $25
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center flex-1">
                            <div className="text-3xl mb-1">{team1?.flagEmoji}</div>
                            <div className="text-sm font-semibold text-gray-900">{team1?.name}</div>
                          </div>
                          <div className="px-3">
                            <div className="text-gray-400 font-bold">VS</div>
                          </div>
                          <div className="text-center flex-1">
                            <div className="text-3xl mb-1">{team2?.flagEmoji}</div>
                            <div className="text-sm font-semibold text-gray-900">{team2?.name}</div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-3">
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(match.date)}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {formatTime(match.kickoffTime)}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {venue?.name}
                          </div>
                        </div>
                        
                        <Link 
                          href={`/tickets/${match.id}`}
                          className="block w-full bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all mt-4"
                        >
                          View Tickets
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/schedule"
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                View All 48 Matches →
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Everything you need to know about Rugby World Cup 2027 tickets
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <details className="group">
                      <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 group-open:text-blue-600 pr-4">
                          {faq.question}
                        </h3>
                        <svg className="w-5 h-5 text-gray-400 group-open:text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6 -mt-2">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1574629867924-91d4e6c36a9f?w=1920&h=600&fit=crop"
              alt="Rugby fans"
              fill
              className="object-cover opacity-20"
            />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Rugby History?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join millions of fans from around the world for 6 weeks of world-class rugby action. 
              Don't miss your chance to be part of Rugby World Cup 2027 in Australia.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-xs text-blue-100">Secure</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-xs text-blue-100">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-400">Best</div>
                <div className="text-xs text-blue-100">Prices</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-400">Official</div>
                <div className="text-xs text-blue-100">Partner</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={AFFILIATE_URL}
                className="bg-yellow-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors shadow-xl transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎫 Buy Official Tickets Now
              </a>
              <Link 
                href="/schedule"
                className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Full Schedule
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-blue-200">
              We are an independent guide. Tickets purchased through our partner GoalTickets may earn us a commission.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}