import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { teams, getTeamBySlug } from '../../data/teams';
import { matches, getMatchesByTeam } from '../../data/matches';
import { venues, getVenueById } from '../../data/venues';
import { generateMetadata as generateSEOMetadata, generateTeamKeywords, generateBreadcrumbSchema, generateSportsTeamSchema, generateFAQSchema } from '../../lib/seo';
import { STAGE_NAMES, AFFILIATE_URL, TICKET_AFFILIATE_ID } from '../../lib/constants';
import { formatDate, formatTime, formatMatchDateTime, isMatchUpcoming } from '../../lib/utils';
import MatchCard from '../../components/MatchCard';

interface TeamSchedulePageProps {
  params: { team: string };
}

export async function generateStaticParams() {
  return teams.map((team) => ({
    team: team.slug,
  }));
}

export async function generateMetadata({ params }: TeamSchedulePageProps): Promise<Metadata> {
  const team = getTeamBySlug(params.team);
  
  if (!team) {
    return {};
  }

  return generateSEOMetadata({
    title: `${team.name} Rugby World Cup 2027 Schedule & Fixtures`,
    description: `Complete fixture list for ${team.name} at Rugby World Cup 2027. View all match dates, venues, kick-off times, and get tickets for ${team.name} matches in Australia.`,
    keywords: generateTeamKeywords(team.name),
    canonical: `/schedule/${team.slug}`
  });
}

interface BreadcrumbProps {
  items: Array<{ name: string; href?: string; }>;
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                {item.name}
              </Link>
            ) : (
              <span className="text-rugby-green text-sm font-medium">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface TeamStatsProps {
  team: typeof teams[0];
  teamMatches: typeof matches;
}

function TeamStats({ team, teamMatches }: TeamStatsProps) {
  const upcomingMatches = teamMatches.filter(match => 
    isMatchUpcoming(match.date, match.kickoffTime)
  );
  
  const uniqueVenues = new Set(teamMatches.map(match => match.venue));
  const uniqueCities = new Set(teamMatches.map(match => {
    const venue = getVenueById(match.venue);
    return venue?.city;
  }).filter(Boolean));

  const poolMatches = teamMatches.filter(match => match.stage === 'pool');
  const knockoutMatches = teamMatches.filter(match => match.stage !== 'pool');

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Overview</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-rugby-green mb-2">{teamMatches.length}</div>
          <div className="text-sm text-gray-600">Total Matches</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-rugby-green mb-2">{upcomingMatches.length}</div>
          <div className="text-sm text-gray-600">Upcoming</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-rugby-green mb-2">{uniqueVenues.size}</div>
          <div className="text-sm text-gray-600">Venues</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-rugby-green mb-2">{uniqueCities.size}</div>
          <div className="text-sm text-gray-600">Cities</div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Pool Stage</h3>
          <p className="text-2xl font-bold text-rugby-green">{poolMatches.length} matches</p>
          <p className="text-sm text-gray-600">Group {team.group} competition</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Knockout Stage</h3>
          <p className="text-2xl font-bold text-rugby-green">{knockoutMatches.length} matches</p>
          <p className="text-sm text-gray-600">Finals pathway</p>
        </div>
      </div>
    </section>
  );
}

interface MatchListByStageProps {
  teamMatches: typeof matches;
  teamName: string;
}

function MatchListByStage({ teamMatches, teamName }: MatchListByStageProps) {
  // Group matches by stage
  const matchesByStage = teamMatches.reduce((acc, match) => {
    if (!acc[match.stage]) {
      acc[match.stage] = [];
    }
    acc[match.stage].push(match);
    return acc;
  }, {} as Record<string, typeof matches>);

  // Sort matches within each stage by date
  Object.keys(matchesByStage).forEach(stage => {
    matchesByStage[stage].sort((a, b) => {
      if (a.date === b.date) {
        return a.kickoffTime.localeCompare(b.kickoffTime);
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  });

  const stageOrder = ['pool', 'round-16', 'quarter-final', 'semi-final', 'bronze-final', 'final'];

  return (
    <div className="space-y-8">
      {stageOrder.map(stage => {
        const stageMatches = matchesByStage[stage];
        if (!stageMatches || stageMatches.length === 0) return null;

        return (
          <section key={stage} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {STAGE_NAMES[stage as keyof typeof STAGE_NAMES]}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stageMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

interface VenueInfoProps {
  teamMatches: typeof matches;
  teamName: string;
}

function VenueInfo({ teamMatches, teamName }: VenueInfoProps) {
  const venueGroups = teamMatches.reduce((acc, match) => {
    const venue = getVenueById(match.venue);
    if (venue) {
      if (!acc[venue.id]) {
        acc[venue.id] = {
          venue,
          matches: []
        };
      }
      acc[venue.id].matches.push(match);
    }
    return acc;
  }, {} as Record<string, { venue: typeof venues[0]; matches: typeof matches }>);

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {teamName} Match Venues
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(venueGroups).map(({ venue, matches: venueMatches }) => (
          <div key={venue.id} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{venue.name}</h3>
                <p className="text-gray-600">{venue.city}</p>
                <p className="text-sm text-gray-500">Capacity: {venue.capacity.toLocaleString()}</p>
              </div>
              <span className="bg-rugby-green text-rugby-gold text-sm px-3 py-1 rounded">
                {venueMatches.length} match{venueMatches.length !== 1 ? 'es' : ''}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              {venueMatches.map((match) => (
                <div key={match.id} className="text-sm text-gray-600 flex justify-between">
                  <span>{STAGE_NAMES[match.stage as keyof typeof STAGE_NAMES]}</span>
                  <span>{formatDate(match.date)} at {formatTime(match.kickoffTime)}</span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Link
                href={`/venues/${venue.slug}`}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-3 rounded text-sm font-medium transition-colors"
              >
                Venue Details
              </Link>
              <Link
                href={`/guide/${venue.city.toLowerCase()}`}
                className="flex-1 bg-rugby-green hover:bg-green-700 text-rugby-gold text-center py-2 px-3 rounded text-sm font-medium transition-colors"
              >
                City Guide
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamFAQ({ teamName }: { teamName: string }) {
  const faqs = [
    {
      question: `When are ${teamName}'s matches being played?`,
      answer: `${teamName}'s Rugby World Cup 2027 matches are scheduled throughout the tournament from October to November 2027. Check the fixture list above for exact dates and kick-off times.`
    },
    {
      question: `Where can I buy tickets for ${teamName} matches?`,
      answer: `Tickets for ${teamName} matches are available through our official ticketing partner. Click "Get Tickets" on any match card above to purchase tickets securely.`
    },
    {
      question: `Which venues will ${teamName} play at?`,
      answer: `${teamName} will play at multiple world-class venues across Australia. Each venue offers excellent facilities and transport connections. Check the venue information section above for details.`
    },
    {
      question: `How do I get to ${teamName} matches?`,
      answer: `All match venues are accessible by public transport. We recommend arriving early and using official transport options. Check our travel guides for detailed directions to each venue.`
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-l-4 border-rugby-green pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TicketCTASection({ teamName, teamSlug, upcomingMatches }: { teamName: string; teamSlug: string; upcomingMatches: typeof matches }) {
  const nextMatch = upcomingMatches[0];
  
  return (
    <section className="bg-gradient-to-r from-rugby-green to-green-700 rounded-xl text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Don't Miss {teamName} in Action
      </h2>
      
      {nextMatch && (
        <div className="mb-6">
          <p className="text-rugby-gold mb-2">Next Match:</p>
          <p className="text-xl font-semibold mb-1">
            {formatDate(nextMatch.date)} at {formatTime(nextMatch.kickoffTime)}
          </p>
          <p className="text-gray-100">
            {getVenueById(nextMatch.venue)?.name}, {getVenueById(nextMatch.venue)?.city}
          </p>
        </div>
      )}
      
      <p className="text-rugby-gold mb-6 max-w-2xl mx-auto">
        Secure your tickets now for all {teamName} matches. Prices increase closer to match dates and popular matches sell out quickly.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/tickets"
          className="inline-flex items-center bg-rugby-gold text-rugby-green px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
        >
          Get {teamName} Tickets
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        
        <Link
          href={`/teams/${teamSlug}`}
          className="inline-flex items-center bg-transparent border-2 border-rugby-gold text-rugby-gold px-8 py-3 rounded-lg font-bold text-lg hover:bg-rugby-gold hover:text-rugby-green transition-colors"
        >
          View Team Profile
        </Link>
      </div>
    </section>
  );
}

export default function TeamSchedulePage({ params }: TeamSchedulePageProps) {
  const team = getTeamBySlug(params.team);
  
  if (!team) {
    notFound();
  }

  const teamMatches = getMatchesByTeam(team.id);
  const upcomingMatches = teamMatches.filter(match => 
    isMatchUpcoming(match.date, match.kickoffTime)
  );

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Schedule', url: '/schedule' },
    { name: `${team.name} Fixtures`, url: `/schedule/${team.slug}` }
  ];

  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const teamSchema = generateSportsTeamSchema({
    name: team.name,
    country: team.name, // In a real app, you'd have proper country data
    description: `${team.name} Rugby World Cup 2027 fixtures and team information`
  });
  
  const faqSchema = generateFAQSchema([
    {
      question: `When are ${team.name}'s matches being played?`,
      answer: `${team.name}'s Rugby World Cup 2027 matches are scheduled throughout the tournament from October to November 2027.`
    },
    {
      question: `Where can I buy tickets for ${team.name} matches?`,
      answer: `Tickets for ${team.name} matches are available through our official ticketing partner.`
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([teamSchema, breadcrumbSchema, faqSchema])
        }}
      />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-rugby-green via-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
            <div className="text-8xl md:text-9xl">{team.flagEmoji}</div>
            
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {team.name}
                <span className="block text-rugby-gold text-3xl md:text-4xl mt-2">Rugby World Cup 2027</span>
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mb-6">
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <span className="font-semibold">Group {team.group}</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <span className="font-semibold">World Ranking #{team.ranking}</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <span className="font-semibold">{teamMatches.length} Matches</span>
                </div>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed">
                Follow {team.name} through Rugby World Cup 2027 with complete fixture information, 
                venue details, and ticket links for all matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Team Statistics */}
        <TeamStats team={team} teamMatches={teamMatches} />

        {/* Venue Information */}
        <VenueInfo teamMatches={teamMatches} teamName={team.name} />

        {/* Match Fixtures by Stage */}
        <MatchListByStage teamMatches={teamMatches} teamName={team.name} />

        {/* FAQ Section */}
        <TeamFAQ teamName={team.name} />

        {/* CTA Section */}
        <TicketCTASection teamName={team.name} teamSlug={team.slug} upcomingMatches={upcomingMatches} />
      </div>
    </div>
  );
}