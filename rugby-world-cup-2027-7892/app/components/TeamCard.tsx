import { Team } from '../types';

interface TeamCardProps {
  team: Team;
  className?: string;
  showGroup?: boolean;
}

export default function TeamCard({ 
  team, 
  className = '', 
  showGroup = true 
}: TeamCardProps) {
  const getRankingColor = (ranking: number) => {
    if (ranking <= 5) return 'text-green-600 bg-green-50';
    if (ranking <= 10) return 'text-blue-600 bg-blue-50';
    if (ranking <= 15) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  const getGroupColor = (group: string | null) => {
    if (!group) return 'bg-gray-500';
    switch (group) {
      case 'A': return 'bg-red-500';
      case 'B': return 'bg-blue-500';
      case 'C': return 'bg-green-500';
      case 'D': return 'bg-purple-500';
      case 'E': return 'bg-orange-500';
      case 'F': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}>
      <div className="p-6">
        {/* Header with Group and Ranking */}
        <div className="flex justify-between items-start mb-4">
          {showGroup && team.group && (
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 ${getGroupColor(team.group)} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                {team.group}
              </div>
              <span className="text-xs text-gray-500 font-medium">Group {team.group}</span>
            </div>
          )}
          {showGroup && !team.group && (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 font-medium">Pool draw: Dec 2025</span>
            </div>
          )}
          
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${getRankingColor(team.ranking)}`}>
            #{team.ranking}
          </div>
        </div>

        {/* Team Flag and Name */}
        <div className="text-center mb-4">
          <div className="text-6xl mb-3">{team.flagEmoji}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{team.name}</h3>
          <p className="text-sm text-gray-500">World Ranking #{team.ranking}</p>
          {team.qualification && (
            <p className="text-xs text-blue-600 mt-1">{team.qualification}</p>
          )}
        </div>

        {/* Team Stats or Info */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-rugby-green">
                {team.group || 'TBD'}
              </div>
              <div className="text-xs text-gray-500">Pool</div>
            </div>
            <div>
              <div className="text-lg font-bold text-rugby-green">
                #{team.ranking}
              </div>
              <div className="text-xs text-gray-500">Ranking</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-2">
          <a
            href={`/teams/${team.slug}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-3 rounded text-sm font-medium transition-colors"
          >
            Team Profile
          </a>
          <a
            href={`/schedule/${team.slug}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-3 rounded text-sm font-medium transition-colors"
          >
            Fixtures
          </a>
        </div>
      </div>
    </div>
  );
}