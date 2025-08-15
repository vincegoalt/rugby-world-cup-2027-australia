import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '../lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup History & Records - All-Time Statistics',
  description: 'Complete history of Rugby World Cup from 1987 to 2023. Tournament records, legendary performances, past winners, and statistical milestones ahead of RWC 2027 Australia.',
  keywords: [
    'rugby world cup history',
    'rwc all time records',
    'rugby world cup winners',
    'rugby world cup statistics',
    'rwc past champions',
    'rugby world cup facts',
    'world cup rugby records',
    'rwc historical data',
    'rugby world cup milestones',
    'rugby world cup legends'
  ],
  canonical: '/history'
});

interface WorldCupEdition {
  year: number;
  host: string;
  winner: string;
  runnerUp: string;
  thirdPlace: string;
  topScorer: string;
  points: number;
  attendance: string;
  teams: number;
  flag: string;
}

const worldCupEditions: WorldCupEdition[] = [
  {
    year: 1987,
    host: 'New Zealand & Australia',
    winner: 'New Zealand',
    runnerUp: 'France',
    thirdPlace: 'Wales',
    topScorer: 'Grant Fox (NZ)',
    points: 126,
    attendance: '604,500',
    teams: 16,
    flag: '🇳🇿'
  },
  {
    year: 1991,
    host: 'England',
    winner: 'Australia',
    runnerUp: 'England',
    thirdPlace: 'New Zealand',
    topScorer: 'Ralph Keyes (IRE)',
    points: 68,
    attendance: '1,007,760',
    teams: 16,
    flag: '🇦🇺'
  },
  {
    year: 1995,
    host: 'South Africa',
    winner: 'South Africa',
    runnerUp: 'New Zealand',
    thirdPlace: 'France',
    topScorer: 'Thierry Lacroix (FRA)',
    points: 112,
    attendance: '1,100,000',
    teams: 16,
    flag: '🇿🇦'
  },
  {
    year: 1999,
    host: 'Wales',
    winner: 'Australia',
    runnerUp: 'France',
    thirdPlace: 'South Africa',
    topScorer: 'Gonzalo Quesada (ARG)',
    points: 102,
    attendance: '1,750,000',
    teams: 20,
    flag: '🇦🇺'
  },
  {
    year: 2003,
    host: 'Australia',
    winner: 'England',
    runnerUp: 'Australia',
    thirdPlace: 'New Zealand',
    topScorer: 'Jonny Wilkinson (ENG)',
    points: 113,
    attendance: '1,837,547',
    teams: 20,
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
  },
  {
    year: 2007,
    host: 'France',
    winner: 'South Africa',
    runnerUp: 'England',
    thirdPlace: 'Argentina',
    topScorer: 'Percy Montgomery (SA)',
    points: 105,
    attendance: '2,263,223',
    teams: 20,
    flag: '🇿🇦'
  },
  {
    year: 2011,
    host: 'New Zealand',
    winner: 'New Zealand',
    runnerUp: 'France',
    thirdPlace: 'Australia',
    topScorer: 'Morne Steyn (SA)',
    points: 62,
    attendance: '1,477,294',
    teams: 20,
    flag: '🇳🇿'
  },
  {
    year: 2015,
    host: 'England',
    winner: 'New Zealand',
    runnerUp: 'Australia',
    thirdPlace: 'South Africa',
    topScorer: 'Nicolas Sánchez (ARG)',
    points: 97,
    attendance: '2,477,805',
    teams: 20,
    flag: '🇳🇿'
  },
  {
    year: 2019,
    host: 'Japan',
    winner: 'South Africa',
    runnerUp: 'England',
    thirdPlace: 'New Zealand',
    topScorer: 'Romain Ntamack (FRA)',
    points: 69,
    attendance: '1,698,528',
    teams: 20,
    flag: '🇿🇦'
  },
  {
    year: 2023,
    host: 'France',
    winner: 'South Africa',
    runnerUp: 'New Zealand',
    thirdPlace: 'England',
    topScorer: 'Damian Penaud (FRA)',
    points: 65,
    attendance: '2,600,000',
    teams: 20,
    flag: '🇿🇦'
  }
];

const allTimeRecords = [
  { category: 'Most World Cup Titles', record: 'South Africa', value: '4 (1995, 2007, 2019, 2023)', icon: '🏆' },
  { category: 'Most Finals Appearances', record: 'New Zealand', value: '6 (1987, 1995, 2011, 2015, 2019, 2023)', icon: '🥇' },
  { category: 'Most Points (Career)', record: 'Jonny Wilkinson (ENG)', value: '277 points', icon: '🎯' },
  { category: 'Most Tries (Career)', record: 'Jonah Lomu (NZ)', value: '15 tries', icon: '⚡' },
  { category: 'Most Points (Match)', record: 'Simon Culhane (NZ)', value: '45 vs Japan (1995)', icon: '📊' },
  { category: 'Most Tries (Match)', record: 'Marc Ellis (NZ)', value: '6 vs Japan (1995)', icon: '🔥' },
  { category: 'Biggest Win Margin', record: 'Australia 142-0 Namibia', value: '142 points (2003)', icon: '💪' },
  { category: 'Most Appearances', record: 'Jason Leonard (ENG)', value: '22 matches', icon: '👕' },
  { category: 'Youngest Player', record: 'Vasily Artemyev (RUS)', value: '18 years, 146 days', icon: '👶' },
  { category: 'Oldest Player', record: 'Diego Ormaechea (URU)', value: '40 years, 13 days', icon: '👴' }
];

const teamRecords = [
  { team: 'South Africa', titles: 4, finals: 4, semifinals: 7, flag: '🇿🇦' },
  { team: 'New Zealand', titles: 3, finals: 6, semifinals: 9, flag: '🇳🇿' },
  { team: 'Australia', titles: 2, finals: 4, semifinals: 7, flag: '🇦🇺' },
  { team: 'England', titles: 1, finals: 4, semifinals: 6, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { team: 'France', titles: 0, finals: 3, semifinals: 7, flag: '🇫🇷' },
  { team: 'Wales', titles: 0, finals: 0, semifinals: 3, flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { team: 'Argentina', titles: 0, finals: 0, semifinals: 2, flag: '🇦🇷' },
  { team: 'Scotland', titles: 0, finals: 0, semifinals: 1, flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' }
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-center">
              <ol className="flex flex-wrap justify-center text-sm text-blue-200">
                <li className="flex items-center">
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-white">RWC History</span>
                </li>
              </ol>
            </nav>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Rugby World Cup History
              </h1>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              Four decades of rugby excellence from 1987 to 2023. Explore the legendary moments, 
              record-breaking performances, and unforgettable matches that shaped rugby history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#champions"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Past Champions
              </Link>
              <Link 
                href="#records"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                All-Time Records
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-sm text-gray-600">Tournaments Held</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-sm text-gray-600">Countries Hosted Finals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Different Winners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2027</div>
              <div className="text-sm text-gray-600">First 24-Team Format</div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Champions */}
      <section id="champions" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Rugby World Cup Champions
          </h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-4 py-4 text-left">Year</th>
                    <th className="px-4 py-4 text-left">Host</th>
                    <th className="px-4 py-4 text-left">Champion</th>
                    <th className="px-4 py-4 text-left">Runner-up</th>
                    <th className="px-4 py-4 text-left">Top Scorer</th>
                    <th className="px-4 py-4 text-left">Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {worldCupEditions.map((edition, index) => (
                    <tr key={edition.year} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-semibold">{edition.year}</td>
                      <td className="px-4 py-3">{edition.host}</td>
                      <td className="px-4 py-3">
                        <span className="font-semibold flex items-center gap-2">
                          {edition.flag} {edition.winner}
                        </span>
                      </td>
                      <td className="px-4 py-3">{edition.runnerUp}</td>
                      <td className="px-4 py-3">
                        <div>
                          <div className="text-sm">{edition.topScorer}</div>
                          <div className="text-xs text-gray-600">{edition.points} pts</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{edition.attendance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* All-Time Records */}
      <section id="records" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            All-Time Rugby World Cup Records
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {allTimeRecords.map((record) => (
              <div key={record.category} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{record.icon}</div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">{record.category}</h3>
                <div className="text-xl font-semibold text-gray-900 mb-1">{record.record}</div>
                <div className="text-sm text-gray-600">{record.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Success Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Most Successful Teams
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Team</th>
                      <th className="px-6 py-4 text-center">Titles</th>
                      <th className="px-6 py-4 text-center">Finals</th>
                      <th className="px-6 py-4 text-center">Semi-finals</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamRecords.map((team, index) => (
                      <tr key={team.team} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold">
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">{team.flag}</span>
                            {team.team}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {team.titles > 0 && (
                            <span className="inline-flex items-center justify-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                              {team.titles}
                            </span>
                          )}
                          {team.titles === 0 && <span className="text-gray-400">-</span>}
                        </td>
                        <td className="px-6 py-4 text-center font-semibold">{team.finals}</td>
                        <td className="px-6 py-4 text-center">{team.semifinals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memorable Moments */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Legendary Rugby World Cup Moments
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🇿🇦</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">1995 - Mandela & The Springboks</h3>
              <p className="text-gray-600">
                Nelson Mandela presenting the Webb Ellis Cup to François Pienaar in a Springbok jersey 
                united a nation and became rugby's most iconic moment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">2003 - Wilkinson's Drop Goal</h3>
              <p className="text-gray-600">
                Jonny Wilkinson's drop goal in extra time secured England's first and only 
                World Cup title in a thrilling final against Australia.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🇳🇿</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">1995 - Jonah Lomu's Dominance</h3>
              <p className="text-gray-600">
                The youngest All Black's devastating runs, particularly against England in the semi-final, 
                revolutionized wing play and made him rugby's first global superstar.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🇯🇵</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">2015 - Japan's Brighton Miracle</h3>
              <p className="text-gray-600">
                Japan's stunning 34-32 victory over South Africa in Brighton is considered 
                the greatest upset in Rugby World Cup history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Rugby World Cup 2027 - A New Era
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Historic Expansion</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    First 24-team tournament (up from 20)
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    New format with Round of 16
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    52 matches across 7 Australian cities
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    More opportunities for emerging nations
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">What's at Stake</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Can South Africa win a record 5th title?
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Will Australia claim glory on home soil?
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Can France finally break their final curse?
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Which nation will create the next miracle?
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/tickets"
                className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                Be Part of History - Get Your 2027 Tickets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience Rugby History in the Making
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Rugby World Cup 2027 in Australia will write the next chapter in rugby's greatest story. 
            Don't miss your chance to witness history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schedule"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              View 2027 Schedule
            </Link>
            <Link 
              href="/teams"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Meet the Teams
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}