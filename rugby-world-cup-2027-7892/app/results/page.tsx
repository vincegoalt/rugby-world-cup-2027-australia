import { Metadata } from 'next'
import TicketCTA from '../components/TicketCTA'

export const metadata: Metadata = {
  title: 'Match Results | Rugby World Cup 2027 Australia',
  description: 'Live scores and match results for Rugby World Cup 2027 in Australia. Follow all the action from pool stages to the final.',
  openGraph: {
    title: 'Rugby World Cup 2027 Results',
    description: 'Live scores and match results from Rugby World Cup 2027',
  }
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Match Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow live scores and results throughout Rugby World Cup 2027
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
          <p className="text-yellow-800">
            The tournament begins in October 2027. Results will be updated live during the competition.
          </p>
        </div>

        <TicketCTA />

        <div className="mt-12 space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Latest Results</h2>
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No matches played yet</p>
              <p className="mt-2">Check back during the tournament for live results</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Pool Standings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['A', 'B', 'C', 'D'].map((pool) => (
                <div key={pool} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">Pool {pool}</h3>
                  <div className="text-gray-500 text-center py-8">
                    <p>Standings will be updated once matches begin</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Knockout Stage</h2>
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Knockout stage bracket will appear here</p>
              <p className="mt-2">Following the completion of pool matches</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/schedule"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View Match Schedule
          </a>
        </div>
      </div>
    </div>
  )
}