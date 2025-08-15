import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateTeamKeywords, generateSportsTeamSchema, generateBreadcrumbSchema } from '../../lib/seo';
import { teams, getTeamBySlug, getTeamsByGroup } from '../../data/teams';
import { getMatchesByTeam } from '../../data/matches';
import { getVenueById } from '../../data/venues';
import { formatDate, formatTime, getOrdinalSuffix, generateTicketUrl } from '../../lib/utils';
import { AFFILIATE_URL, STAGE_NAMES } from '../../lib/constants';

interface TeamPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const team = getTeamBySlug(params.slug);
  
  if (!team) {
    return {
      title: 'Team Not Found',
    };
  }

  const title = `${team.name} Rugby World Cup 2027 - Fixtures, Squad & Tickets`;
  const description = `Complete guide to ${team.name} at Rugby World Cup 2027. View fixtures, squad information, world ranking (#${team.ranking}), and buy official match tickets.`;

  return generateSEOMetadata({
    title,
    description,
    keywords: generateTeamKeywords(team.name),
    canonical: `/teams/${params.slug}`
  });
}

// Mock squad data - in real app this would come from an API or database
const getTeamSquad = (teamId: string) => {
  // This is placeholder data - in production you'd have actual squad information
  return {
    forwards: [
      { name: 'Player 1', position: 'Prop', caps: 45 },
      { name: 'Player 2', position: 'Hooker', caps: 32 },
      { name: 'Player 3', position: 'Lock', caps: 28 },
      { name: 'Player 4', position: 'Flanker', caps: 51 },
      { name: 'Player 5', position: 'Number 8', caps: 39 }
    ],
    backs: [
      { name: 'Player 6', position: 'Scrum-half', caps: 67 },
      { name: 'Player 7', position: 'Fly-half', caps: 43 },
      { name: 'Player 8', position: 'Centre', caps: 29 },
      { name: 'Player 9', position: 'Wing', caps: 34 },
      { name: 'Player 10', position: 'Fullback', caps: 56 }
    ]
  };
};

const getTeamHistory = (teamName: string) => {
  // Mock historical data
  const histories = {
    'New Zealand': {
      worldCupTitles: 3,
      bestResult: 'Champions (2011, 2015)',
      lastAppearance: '2023 - Runners-up',
      keyStats: ['Most successful team in RWC history', '3 World Cup victories', 'Appeared in 6 finals']
    },
    'South Africa': {
      worldCupTitles: 3,
      bestResult: 'Champions (1995, 2007, 2019)',
      lastAppearance: '2023 - Fourth place',
      keyStats: ['3 World Cup victories', 'First host nation winners', 'Strong forward pack tradition']
    },
    'Australia': {
      worldCupTitles: 2,
      bestResult: 'Champions (1991, 1999)',
      lastAppearance: '2023 - Pool stage',
      keyStats: ['2 World Cup victories', 'Host nation advantage', 'Strong attacking rugby style']
    }
  };
  
  return histories[teamName as keyof typeof histories] || {
    worldCupTitles: 0,
    bestResult: 'Quarter-finals',
    lastAppearance: '2023 - Pool stage',
    keyStats: ['Emerging rugby nation', 'Growing international presence', 'Passionate fan base']
  };
};

export default function TeamPage({ params }: TeamPageProps) {
  const team = getTeamBySlug(params.slug);
  
  if (!team) {
    notFound();
  }

  const teamMatches = getMatchesByTeam(team.id);
  const upcomingMatches = teamMatches.filter(match => 
    new Date(`${match.date}T${match.kickoffTime}:00`) > new Date()
  );
  const poolTeams = team.group ? getTeamsByGroup(team.group).filter(t => t.id !== team.id) : [];
  const squad = getTeamSquad(team.id);
  const history = getTeamHistory(team.name);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Teams', url: '/teams' },
    { name: team.name, url: `/teams/${team.slug}` }
  ];

  const teamSchema = generateSportsTeamSchema({
    name: team.name,
    country: team.name,
    description: `${team.name} national rugby team competing in Rugby World Cup 2027`
  });

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-800 via-green-700 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="mb-8">
                <ol className="flex flex-wrap text-sm text-green-200">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.name} className="flex items-center">
                      {index > 0 && <span className="mx-2">/</span>}
                      {index < breadcrumbs.length - 1 ? (
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
                <div className="text-8xl mb-6">{team.flagEmoji}</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {team.name}
                </h1>
                <div className="text-xl mb-6 text-green-100">
                  World Ranking: {getOrdinalSuffix(team.ranking)} {team.group ? `• Pool ${team.group}` : '• Pool Draw December 2025'}
                </div>
                {team.coach && (
                  <div className="text-lg text-green-200 mb-2">
                    Coach: {team.coach} {team.captain ? `• Captain: ${team.captain}` : ''}
                  </div>
                )}
                <p className="text-lg mb-8 text-green-100 max-w-2xl mx-auto">
                  Follow {team.name}'s journey to Rugby World Cup 2027 glory. 
                  Get fixtures, team news, and secure your tickets to watch them play.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href={`/schedule/${team.slug}`}
                    className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                  >
                    View Fixtures
                  </Link>
                  <Link 
                    href="#tickets"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-800 transition-colors"
                  >
                    Buy Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{getOrdinalSuffix(team.ranking)}</div>
                <div className="text-sm text-gray-600">World Ranking</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{team.titles || 0}</div>
                <div className="text-sm text-gray-600">World Cup Titles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{team.group}</div>
                <div className="text-sm text-gray-600">Pool Group</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{teamMatches.length}</div>
                <div className="text-sm text-gray-600">Tournament Matches</div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Matches */}
        <section id="tickets" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {team.name} Fixtures & Tickets
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {upcomingMatches.map((match) => {
                const opponent = match.team1 === team.id 
                  ? teams.find(t => t.id === match.team2)
                  : teams.find(t => t.id === match.team1);
                const venue = getVenueById(match.venue);
                const stageName = STAGE_NAMES[match.stage];
                
                return (
                  <div key={match.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-green-700 text-white p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{stageName}</span>
                        <span className="text-sm">From $25</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                          <div className="text-3xl mb-2">{team.flagEmoji}</div>
                          <div className="font-semibold">{team.name}</div>
                        </div>
                        
                        <div className="text-2xl text-gray-400">vs</div>
                        
                        <div className="text-center">
                          <div className="text-3xl mb-2">{opponent?.flagEmoji}</div>
                          <div className="font-semibold">{opponent?.name}</div>
                        </div>
                      </div>
                      
                      <div className="text-center text-gray-600 mb-4">
                        <div className="font-medium">{formatDate(match.date)} • {formatTime(match.kickoffTime)}</div>
                        <div className="text-sm">{venue?.name}, {venue?.city}</div>
                      </div>
                      
                      <div className="space-y-2">
                        <Link 
                          href={`/tickets/${match.id}`}
                          className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                          Buy Match Tickets
                        </Link>
                        <Link 
                          href={`/venues/${venue?.slug}`}
                          className="block w-full border border-green-600 text-green-600 text-center py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                        >
                          Venue Information
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team History & Records */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {team.name} World Cup History
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-800">Tournament Record</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">World Cup Titles:</span>
                      <span className="font-semibold">{history.worldCupTitles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Result:</span>
                      <span className="font-semibold">{history.bestResult}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Tournament:</span>
                      <span className="font-semibold">{history.lastAppearance}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-800">Key Facts</h3>
                  <ul className="space-y-2">
                    {history.keyStats.map((stat, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">•</span>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Players & Legends */}
        {(team.bestPlayers || team.legends) && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                  Team Stars & Legends
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {team.bestPlayers && (
                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
                        <span className="text-3xl mr-3">⭐</span>
                        Current Stars
                      </h3>
                      <div className="space-y-3">
                        {team.bestPlayers.map((player, index) => (
                          <div key={index} className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors">
                            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                              {index + 1}
                            </div>
                            <span className="text-gray-900 font-medium">{player}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {team.legends && (
                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <h3 className="text-2xl font-bold mb-6 text-yellow-700 flex items-center">
                        <span className="text-3xl mr-3">🏆</span>
                        All-Time Legends
                      </h3>
                      <div className="space-y-3">
                        {team.legends.map((legend, index) => (
                          <div key={index} className="flex items-center p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                              {index + 1}
                            </div>
                            <span className="text-gray-900 font-medium">{legend}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pool Group */}
        {team.group && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                  Pool {team.group} Opponents
                </h2>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-700 text-white p-4">
                  <h3 className="text-xl font-bold text-center">Pool {team.group}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {poolTeams.map((poolTeam) => (
                      <div key={poolTeam.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{poolTeam.flagEmoji}</div>
                          <div>
                            <div className="font-semibold text-gray-900">{poolTeam.name}</div>
                            <div className="text-sm text-gray-600">
                              World Ranking #{poolTeam.ranking}
                            </div>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/teams/${poolTeam.slug}`}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          View Profile
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <Link 
                      href={`/schedule?group=${team.group}`}
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      View All Pool {team.group} Matches
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Sample Squad Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Squad Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-green-800">Forwards</h3>
                  <div className="space-y-3">
                    {squad.forwards.map((player, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-900">{player.name}</div>
                          <div className="text-sm text-gray-600">{player.position}</div>
                        </div>
                        <div className="text-sm text-gray-500">{player.caps} caps</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-green-800">Backs</h3>
                  <div className="space-y-3">
                    {squad.backs.map((player, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-900">{player.name}</div>
                          <div className="text-sm text-gray-600">{player.position}</div>
                        </div>
                        <div className="text-sm text-gray-500">{player.caps} caps</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-gray-600 mb-4">
                  * Squad information is preliminary and subject to change
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Support {team.name} at Rugby World Cup 2027
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Don't miss your chance to see {team.name} compete for rugby's ultimate prize. 
              Secure your tickets now and be part of their World Cup journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={generateTicketUrl(team.slug, AFFILIATE_URL)}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy {team.name} Tickets
              </a>
              <Link 
                href={`/schedule/${team.slug}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                View Full Fixture List
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}