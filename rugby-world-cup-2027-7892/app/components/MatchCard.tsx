import { Match, Team, Venue } from '../types';
import { getTeamById } from '../data/teams';
import { venues } from '../data/venues';

interface MatchCardProps {
  match: Match;
  className?: string;
  showVenue?: boolean;
}

export default function MatchCard({ 
  match, 
  className = '', 
  showVenue = true 
}: MatchCardProps) {
  const team1 = match.team1 === 'TBD' ? null : getTeamById(match.team1);
  const team2 = match.team2 === 'TBD' ? null : getTeamById(match.team2);
  const venue = venues.find(v => v.id === match.venue);

  if (!venue) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStageLabel = (stage: string) => {
    switch (stage) {
      case 'pool':
        return 'Pool Stage';
      case 'round-16':
        return 'Round of 16';
      case 'quarter-final':
        return 'Quarter Final';
      case 'semi-final':
        return 'Semi Final';
      case 'bronze-final':
        return 'Bronze Final';
      case 'final':
        return 'Final';
      default:
        return stage;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 ${className}`}>
      {/* Match Stage and Date */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold text-rugby-green bg-rugby-gold px-2 py-1 rounded">
          {getStageLabel(match.stage)}
        </span>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">
            {formatDate(match.date)}
          </div>
          <div className="text-xs text-gray-500">
            {match.kickoffTime}
          </div>
        </div>
      </div>

      {/* Teams or TBD */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        {/* Team 1 */}
        <div className="flex-1 text-center">
          {team1 ? (
            <>
              <div className="text-2xl mb-1">{team1.flagEmoji}</div>
              <div className="text-sm font-semibold text-gray-900">{team1.name}</div>
              <div className="text-xs text-gray-500">#{team1.ranking}</div>
            </>
          ) : (
            <>
              <div className="text-2xl mb-1">🏉</div>
              <div className="text-sm font-semibold text-gray-500">TBD</div>
              <div className="text-xs text-gray-400">Pool draw Dec 2025</div>
            </>
          )}
        </div>

        {/* VS */}
        <div className="text-gray-400 font-bold text-sm">VS</div>

        {/* Team 2 */}
        <div className="flex-1 text-center">
          {team2 ? (
            <>
              <div className="text-2xl mb-1">{team2.flagEmoji}</div>
              <div className="text-sm font-semibold text-gray-900">{team2.name}</div>
              <div className="text-xs text-gray-500">#{team2.ranking}</div>
            </>
          ) : (
            <>
              <div className="text-2xl mb-1">🏉</div>
              <div className="text-sm font-semibold text-gray-500">TBD</div>
              <div className="text-xs text-gray-400">Pool draw Dec 2025</div>
            </>
          )}
        </div>
      </div>

      {/* Special Match Note */}
      {match.note && (
        <div className="bg-rugby-gold bg-opacity-20 rounded p-2 mb-3">
          <p className="text-xs text-center text-rugby-green font-semibold">
            {match.note}
          </p>
        </div>
      )}

      {/* Venue */}
      {showVenue && (
        <div className="border-t pt-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-900">
                {venue.name}
              </div>
              <div className="text-xs text-gray-500">
                {venue.city} • {venue.capacity.toLocaleString()} capacity
              </div>
            </div>
            <a
              href={`/venues/${venue.slug}`}
              className="text-rugby-green hover:text-green-700 text-xs font-medium"
            >
              View venue →
            </a>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-4 flex space-x-2">
        <a
          href={`/tickets/${match.id}`}
          className="flex-1 bg-rugby-green hover:bg-green-700 text-rugby-gold text-center py-2 px-3 rounded text-sm font-medium transition-colors"
        >
          Get Tickets
        </a>
      </div>
    </div>
  );
}