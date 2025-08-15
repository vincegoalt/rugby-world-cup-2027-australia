import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata, generateTeamKeywords } from '../lib/seo';
import { teams, getTeamsByGroup } from '../data/teams';
import { getMatchesByTeam } from '../data/matches';
import { sortTeamsByRanking, getOrdinalSuffix } from '../lib/utils';
import { POOL_GROUPS } from '../lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup 2027 Teams - All 24 Participating Nations',
  description: 'Complete guide to all 24 teams competing in Rugby World Cup 2027 Australia - the first ever 24-team Rugby World Cup. View team profiles, world rankings, qualification routes, and ticket information. Pool draw December 2025.',
  keywords: [
    'rugby world cup 2027 teams',
    'rwc teams australia',
    'rugby teams 2027',
    'world cup participants',
    'rugby team rankings',
    'pool groups rugby world cup',
    'all blacks new zealand',
    'springboks south africa',
    'wallabies australia',
    'england rugby team'
  ],
  canonical: '/teams'
});

export default function TeamsPage() {
  const allTeams = teams;
  const topRankedTeams = sortTeamsByRanking(allTeams).slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 via-green-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rugby World Cup 2027 Teams
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Meet the 24 elite rugby nations competing in the first ever 24-team Rugby World Cup. 
              From defending champions to qualified newcomers, discover the teams that will make history in Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#qualification-routes"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                View Qualification Routes
              </Link>
              <Link 
                href="#top-teams"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
              >
                Top Ranked Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24</div>
              <div className="text-sm text-gray-600">Competing Nations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Pool Groups</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-sm text-gray-600">Continents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">54</div>
              <div className="text-sm text-gray-600">Total Matches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ranked Teams */}
      <section id="top-teams" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Top Ranked Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The world's elite rugby nations heading into Rugby World Cup 2027, 
              ranked by their current World Rugby rankings and recent form.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {topRankedTeams.map((team, index) => {
              const teamMatches = getMatchesByTeam(team.id);
              return (
                <div key={team.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className={`p-4 text-center ${index < 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' : 'bg-green-600 text-white'}`}>
                    <div className="text-3xl mb-2">{team.flagEmoji}</div>
                    <div className="text-sm font-semibold opacity-90">
                      {getOrdinalSuffix(team.ranking)} in World
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {team.name}
                    </h3>
                    <div className="text-sm text-gray-600 mb-4">
                      {team.qualification} • Pool TBD
                    </div>
                    
                    <div className="space-y-3">
                      <Link 
                        href={`/teams/${team.slug}`}
                        className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        View Team Profile
                      </Link>
                      <Link 
                        href={`/schedule/${team.slug}`}
                        className="block w-full border border-green-600 text-green-600 text-center py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                      >
                        View Fixtures
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualification Routes */}
      <section id="qualification-routes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Qualification Routes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The 24 teams qualified through various routes for the first ever 24-team Rugby World Cup. 
              Pool groups will be drawn in December 2025, with 6 pools of 4 teams each.
            </p>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
              <p className="text-yellow-800 font-semibold">
                📅 Pool Draw: December 2025 • 6 Pools of 4 Teams
              </p>
            </div>
          </div>
          
          <div className="grid gap-8 max-w-7xl mx-auto">
            {[
              { route: 'Automatic', teams: teams.filter(t => t.qualification?.includes('Automatic') || t.qualification === 'Defending Champions' || t.qualification === 'Host Nation'), color: 'bg-green-700' },
              { route: 'Europe', teams: teams.filter(t => t.qualification?.includes('Europe')), color: 'bg-blue-700' },
              { route: 'Americas', teams: teams.filter(t => t.qualification?.includes('Americas')), color: 'bg-red-700' },
              { route: 'Pacific', teams: teams.filter(t => t.qualification?.includes('Pacific')), color: 'bg-indigo-700' },
              { route: 'Asia', teams: teams.filter(t => t.qualification?.includes('Asia')), color: 'bg-purple-700' },
              { route: 'Africa', teams: teams.filter(t => t.qualification?.includes('Africa')), color: 'bg-orange-700' }
            ].filter(group => group.teams.length > 0).map((qualGroup) => {
              const sortedTeams = sortTeamsByRanking(qualGroup.teams);
              
              return (
                <div key={qualGroup.route} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`${qualGroup.color} text-white p-6`}>
                    <h3 className="text-2xl font-bold text-center">
                      {qualGroup.route} Qualifiers ({sortedTeams.length} teams)
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sortedTeams.map((team, index) => (
                        <div key={team.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="text-xl">{team.flagEmoji}</div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">
                                {team.name}
                              </div>
                              <div className="text-xs text-gray-600">
                                #{team.ranking} • {team.qualification}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-1">
                            <Link 
                              href={`/teams/${team.slug}`}
                              className="text-xs bg-green-600 text-white px-2 py-1 rounded font-medium hover:bg-green-700 transition-colors"
                            >
                              Profile
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Teams Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              All Participating Teams
            </h2>
            <p className="text-lg text-gray-600">
              Complete list of all 24 teams competing in the first ever 24-team Rugby World Cup 2027
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {sortTeamsByRanking(allTeams).map((team) => (
              <Link 
                key={team.id}
                href={`/teams/${team.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 text-center group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  <span style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji"' }}>
                    {team.flagEmoji}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                  {team.name}
                </h3>
                <div className="text-xs text-gray-600">
                  #{team.ranking} • Pool TBD
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Teams to Watch */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Teams to Watch
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Defending Champions</h3>
                <p className="text-gray-600 leading-relaxed">
                  The current Webb Ellis Cup holders will be looking to defend their title 
                  and cement their legacy as one of rugby's greatest teams.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Host Nation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Australia will have home advantage and passionate support as they 
                  look to claim their third Rugby World Cup title on home soil.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Dark Horses</h3>
                <p className="text-gray-600 leading-relaxed">
                  Teams like Japan, Fiji, and Georgia could spring surprises and 
                  potentially upset the established rugby hierarchy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Follow Your Favorite Teams
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Get the latest news, fixtures, and ticket information for all Rugby World Cup 2027 teams. 
            Don't miss a moment of the action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schedule"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              View Full Schedule
            </Link>
            <Link 
              href="/tickets"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors"
            >
              Buy Team Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}