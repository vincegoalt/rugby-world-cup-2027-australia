import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateTicketKeywords, generateEventSchema, generateBreadcrumbSchema } from '../../lib/seo';
import { matches, getMatchById } from '../../data/matches';
import { getTeamById } from '../../data/teams';
import { getVenueById } from '../../data/venues';
import { formatDate, formatTime, generateTicketUrl, formatCapacity } from '../../lib/utils';
import { AFFILIATE_URL, STAGE_NAMES } from '../../lib/constants';
import { createMatchEventSchema, createBreadcrumbSchema } from '../../lib/structured-data';

interface MatchTicketPageProps {
  params: {
    match: string;
  };
}

export async function generateStaticParams() {
  return matches.map((match) => ({
    match: match.id,
  }));
}

export async function generateMetadata({ params }: MatchTicketPageProps): Promise<Metadata> {
  const match = getMatchById(params.match);
  
  if (!match) {
    return {
      title: 'Match Not Found',
    };
  }

  const team1 = getTeamById(match.team1);
  const team2 = getTeamById(match.team2);
  const venue = getVenueById(match.venue);
  const stageName = STAGE_NAMES[match.stage];
  
  const title = `${team1?.name} vs ${team2?.name} Tickets - ${stageName} ${formatDate(match.date)}`;
  const description = `Buy official tickets for ${team1?.name} vs ${team2?.name} at ${venue?.name}, ${venue?.city}. Secure your seats for this ${stageName.toLowerCase()} match on ${formatDate(match.date)}.`;

  return generateSEOMetadata({
    title,
    description,
    keywords: generateTicketKeywords(stageName.toLowerCase(), [team1?.name || '', team2?.name || ''], venue?.name),
    canonical: `/tickets/${params.match}`
  });
}

const ticketPrices = {
  'pool': {
    categoryA: { min: 65, max: 135 },
    categoryB: { min: 45, max: 85 },
    categoryC: { min: 25, max: 45 },
    family: { min: 80, max: 160 }
  },
  'round-16': {
    categoryA: { min: 120, max: 250 },
    categoryB: { min: 80, max: 150 },
    categoryC: { min: 45, max: 80 },
    family: { min: 150, max: 300 }
  },
  'quarter-final': {
    categoryA: { min: 150, max: 350 },
    categoryB: { min: 95, max: 185 },
    categoryC: { min: 55, max: 95 },
    family: { min: 180, max: 320 }
  },
  'semi-final': {
    categoryA: { min: 200, max: 450 },
    categoryB: { min: 130, max: 250 },
    categoryC: { min: 75, max: 130 },
    family: { min: 250, max: 500 }
  },
  'bronze-final': {
    categoryA: { min: 180, max: 400 },
    categoryB: { min: 120, max: 220 },
    categoryC: { min: 70, max: 120 },
    family: { min: 220, max: 440 }
  },
  'final': {
    categoryA: { min: 450, max: 850 },
    categoryB: { min: 250, max: 450 },
    categoryC: { min: 125, max: 250 },
    family: { min: 400, max: 720 }
  }
};

export default function MatchTicketPage({ params }: MatchTicketPageProps) {
  const match = getMatchById(params.match);
  
  if (!match) {
    notFound();
  }

  const team1 = getTeamById(match.team1);
  const team2 = getTeamById(match.team2);
  const venue = getVenueById(match.venue);
  const stageName = STAGE_NAMES[match.stage];
  const prices = ticketPrices[match.stage];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tickets', url: '/tickets' },
    { name: `${team1?.name} vs ${team2?.name}` }
  ];

  const matchSchema = createMatchEventSchema({
    id: match.id,
    team1: team1?.name || match.team1,
    team2: team2?.name || match.team2,
    date: match.date,
    venue: match.venue,
    stage: stageName,
    venueName: venue?.name,
    venueAddress: venue ? {
      street: venue.address || '1 Stadium Way',
      city: venue.city,
      region: venue.region || 'NSW',
      postalCode: venue.postalCode || '2000'
    } : undefined
  });
  
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs);

  const faqs = [
    {
      question: `When is the ${team1?.name} vs ${team2?.name} match?`,
      answer: `The match is scheduled for ${formatDate(match.date)} at ${formatTime(match.kickoffTime)} local time at ${venue?.name} in ${venue?.city}.`
    },
    {
      question: 'What ticket categories are available?',
      answer: 'Tickets are available in Category A (premium seating), Category B (excellent views), Category C (good value), and Family packages (2 adults + 2 children).'
    },
    {
      question: 'How do I get to the venue?',
      answer: `${venue?.name} is located in ${venue?.city}. Public transport options and parking information will be provided with your ticket confirmation.`
    },
    {
      question: 'What time should I arrive at the stadium?',
      answer: 'We recommend arriving at least 90 minutes before kickoff to allow time for security checks and to soak up the pre-match atmosphere.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(matchSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="bg-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="mb-8">
                <ol className="flex flex-wrap text-sm text-green-200">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.name} className="flex items-center">
                      {index > 0 && <span className="mx-2">/</span>}
                      {index < breadcrumbs.length - 1 && crumb.url ? (
                        <Link href={crumb.url} className="hover:text-white">
                          {crumb.name}
                        </Link>
                      ) : (
                        <span className="text-white">{crumb.name}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="text-center">
                <div className="inline-block bg-green-700 text-green-100 px-4 py-2 rounded-full text-sm mb-4">
                  {stageName}
                </div>
                
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-2">{team1?.flagEmoji}</div>
                    <h1 className="text-2xl font-bold">{team1?.name}</h1>
                    <div className="text-green-200">#{team1?.ranking} in world</div>
                  </div>
                  
                  <div className="text-4xl text-green-300">vs</div>
                  
                  <div className="text-center">
                    <div className="text-6xl mb-2">{team2?.flagEmoji}</div>
                    <h1 className="text-2xl font-bold">{team2?.name}</h1>
                    <div className="text-green-200">#{team2?.ranking} in world</div>
                  </div>
                </div>
                
                <div className="text-xl mb-8">
                  <div>{formatDate(match.date)} at {formatTime(match.kickoffTime)}</div>
                  <div className="text-green-200">{venue?.name}, {venue?.city}</div>
                  <div className="text-green-200">Capacity: {venue?.capacity ? formatCapacity(venue.capacity) : 'N/A'}</div>
                </div>
                
                <a 
                  href={generateTicketUrl(match.id, AFFILIATE_URL)}
                  className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Tickets Now - From ${prices.categoryC.min}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Ticket Categories & Prices
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-6 text-black">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Category A</h3>
                  <div className="text-3xl font-bold mb-2">
                    ${prices.categoryA.min} - ${prices.categoryA.max}
                  </div>
                  <p className="text-sm mb-4 opacity-90">
                    Premium seating with the best views of the action
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Closest to the field</li>
                    <li>• Premium amenities</li>
                    <li>• Best stadium experience</li>
                  </ul>
                  <a 
                    href={generateTicketUrl(match.id, AFFILIATE_URL)}
                    className="block w-full bg-black text-white text-center py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Select Category A
                  </a>
                </div>
              </div>
              
              <div className="bg-white border-2 border-green-500 rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Category B</h3>
                  <div className="text-3xl font-bold mb-2 text-green-600">
                    ${prices.categoryB.min} - ${prices.categoryB.max}
                  </div>
                  <p className="text-sm mb-4 text-gray-600">
                    Excellent seats with great stadium views
                  </p>
                  <ul className="text-sm space-y-1 mb-4 text-gray-600">
                    <li>• Great field views</li>
                    <li>• Good stadium amenities</li>
                    <li>• Excellent atmosphere</li>
                  </ul>
                  <a 
                    href={generateTicketUrl(match.id, AFFILIATE_URL)}
                    className="block w-full bg-green-600 text-white text-center py-2 rounded font-semibold hover:bg-green-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Select Category B
                  </a>
                </div>
              </div>
              
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Category C</h3>
                  <div className="text-3xl font-bold mb-2 text-blue-600">
                    ${prices.categoryC.min} - ${prices.categoryC.max}
                  </div>
                  <p className="text-sm mb-4 text-gray-600">
                    Good value tickets with stadium atmosphere
                  </p>
                  <ul className="text-sm space-y-1 mb-4 text-gray-600">
                    <li>• Good stadium views</li>
                    <li>• Affordable pricing</li>
                    <li>• Great atmosphere</li>
                  </ul>
                  <a 
                    href={generateTicketUrl(match.id, AFFILIATE_URL)}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Select Category C
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-6 text-white">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Family Package</h3>
                  <div className="text-3xl font-bold mb-2">
                    ${prices.family.min} - ${prices.family.max}
                  </div>
                  <p className="text-sm mb-4 opacity-90">
                    Perfect for families - 2 adults + 2 children
                  </p>
                  <ul className="text-sm space-y-1 mb-4 opacity-90">
                    <li>• Family-friendly seating</li>
                    <li>• Great value package</li>
                    <li>• Create memories together</li>
                  </ul>
                  <a 
                    href={generateTicketUrl(match.id, AFFILIATE_URL)}
                    className="block w-full bg-white text-purple-700 text-center py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Select Family Package
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Venue Information
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  {venue?.image && (
                    <div className="md:w-1/2">
                      <img 
                        src={venue.image} 
                        alt={venue.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold mb-4 text-green-800">{venue?.name}</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <strong className="text-gray-900">Location:</strong> {venue?.city}
                      </div>
                      <div>
                        <strong className="text-gray-900">Capacity:</strong> {venue?.capacity ? formatCapacity(venue.capacity) : 'N/A'}
                      </div>
                      <div>
                        <strong className="text-gray-900">Match Date:</strong> {formatDate(match.date)}
                      </div>
                      <div>
                        <strong className="text-gray-900">Kickoff Time:</strong> {formatTime(match.kickoffTime)}
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link 
                        href={`/venues/${venue?.slug}`}
                        className="inline-block text-green-600 hover:text-green-800 font-semibold"
                      >
                        Learn more about {venue?.name} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Match Information & FAQ
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
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Secure Your Seats for {team1?.name} vs {team2?.name}
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Don't miss this incredible {stageName.toLowerCase()} match. 
              Tickets are selling fast - book now to guarantee your spot at the Rugby World Cup 2027.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={generateTicketUrl(match.id, AFFILIATE_URL)}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Tickets Now
              </a>
              <Link 
                href="/tickets"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                View All Tickets
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}