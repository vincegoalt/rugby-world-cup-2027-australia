import { Metadata } from 'next'
import Link from 'next/link'
import TicketCTA from '../components/TicketCTA'
import { matches } from '../data/matches'

export const metadata: Metadata = {
  title: 'All Matches | Rugby World Cup 2027 Australia',
  description: 'Complete list of all 48 matches at Rugby World Cup 2027 in Australia. Pool matches, knockout stages, and the final.',
  openGraph: {
    title: 'All Matches - Rugby World Cup 2027',
    description: 'View all 48 matches of Rugby World Cup 2027',
  }
}

export default function MatchesPage() {
  // Group matches by stage
  const poolMatches = matches.filter(m => m.stage === 'pool')
  const round16Matches = matches.filter(m => m.stage === 'round-16')
  const quarterFinals = matches.filter(m => m.stage === 'quarter-final')
  const semiFinals = matches.filter(m => m.stage === 'semi-final')
  const bronzeFinal = matches.filter(m => m.stage === 'bronze-final')
  const final = matches.filter(m => m.stage === 'final')

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-AU', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const formatTime = (date: string) => {
    return new Date(date).toLocaleTimeString('en-AU', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Matches
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            48 matches across 44 days of world-class rugby action
          </p>
        </div>

        <TicketCTA />

        <div className="mt-12 space-y-12">
          {/* Pool Stage */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Pool Stage</h2>
            <p className="text-gray-600 mb-6">40 matches • 4 pools of 5 teams</p>
            <div className="space-y-4">
              {poolMatches.map((match) => (
                <div key={match.id} className="border rounded-lg p-4 hover:border-green-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {match.team1} vs {match.team2}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Pool {match.pool} • {match.venue}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="text-sm text-gray-600">
                        {formatDate(match.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {formatTime(match.date)} AEDT
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <Link
                        href={`/tickets/${match.id}`}
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                      >
                        View Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Round of 16 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Round of 16</h2>
            <p className="text-gray-600 mb-6">8 matches • Top 2 from each pool advance</p>
            <div className="space-y-4">
              {round16Matches.map((match) => (
                <div key={match.id} className="border rounded-lg p-4 hover:border-green-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {match.team1} vs {match.team2}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {match.venue}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="text-sm text-gray-600">
                        {formatDate(match.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {formatTime(match.date)} AEDT
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <Link
                        href={`/tickets/${match.id}`}
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                      >
                        View Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quarter-Finals */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Quarter-Finals</h2>
            <p className="text-gray-600 mb-6">4 matches • The road to glory intensifies</p>
            <div className="space-y-4">
              {quarterFinals.map((match) => (
                <div key={match.id} className="border-2 border-green-200 rounded-lg p-4 hover:border-green-600 transition-colors bg-green-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {match.team1} vs {match.team2}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {match.venue}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="text-sm text-gray-600">
                        {formatDate(match.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {formatTime(match.date)} AEDT
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <Link
                        href={`/tickets/${match.id}`}
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                      >
                        View Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semi-Finals */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Semi-Finals</h2>
            <p className="text-gray-600 mb-6">2 matches • The final four battle it out</p>
            <div className="space-y-4">
              {semiFinals.map((match) => (
                <div key={match.id} className="border-2 rounded-lg p-4 transition-colors" style={{borderColor: '#FACC15', backgroundColor: '#FEFCE8'}}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-lg">
                        {match.team1} vs {match.team2}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {match.venue}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="text-sm text-gray-600">
                        {formatDate(match.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {formatTime(match.date)} AEDT
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <Link
                        href={`/tickets/${match.id}`}
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                      >
                        View Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bronze Final */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Bronze Final</h2>
            <p className="text-gray-600 mb-6">Third place playoff</p>
            <div className="space-y-4">
              {bronzeFinal.map((match) => (
                <div key={match.id} className="border-2 rounded-lg p-4 transition-colors" style={{borderColor: '#D97706', backgroundColor: '#FFF7ED'}}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-lg">
                        {match.team1} vs {match.team2}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {match.venue}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="text-sm text-gray-600">
                        {formatDate(match.date)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {formatTime(match.date)} AEDT
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <Link
                        href={`/tickets/${match.id}`}
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                      >
                        View Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final */}
          <div className="bg-gradient-to-r rounded-xl shadow-xl p-8 border-2" style={{background: 'linear-gradient(to right, #FEF3C7, #FFFBEB)', borderColor: '#EAB308'}}>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#854D0E'}}>The Final</h2>
            <p className="text-gray-700 mb-6">The pinnacle of world rugby</p>
            <div className="space-y-4">
              {final.map((match) => (
                <div key={match.id} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-xl">
                        {match.team1} vs {match.team2}
                      </div>
                      <div className="text-gray-600 mt-2">
                        {match.venue}
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 md:text-right">
                      <div className="font-semibold text-gray-700">
                        {formatDate(match.date)}
                      </div>
                      <div className="text-gray-600">
                        {formatTime(match.date)} AEDT
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 md:ml-4">
                      <Link
                        href={`/tickets/${match.id}`}
                        className="inline-block text-white px-6 py-3 rounded-lg font-bold transition-colors text-lg" style={{backgroundColor: '#CA8A04'}}
                      >
                        View Tickets
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/schedule"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View Full Schedule
          </Link>
        </div>

        <TicketCTA />
      </div>
    </div>
  )
}