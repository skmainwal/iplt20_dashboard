import React from 'react';

const LiveMatchCard = ({ match }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-800 animate-pulse';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderTeamScore = (team) => {
    if (!team.score) return null;
    return (
      <div className="text-sm">
        <span className="font-semibold">{team.score}</span>
        {team.overs && <span className="text-gray-600 ml-1">{team.overs}</span>}
        {team.battingStats && (
          <div className="text-xs text-gray-600 mt-0.5 line-clamp-1">{team.battingStats}</div>
        )}
      </div>
    );
  };

  const getTeamNameStyle = (teamColor) => {
    return { color: teamColor };
  };

  return (
    <div className="bg-white rounded-xl shadow-sm h-[280px] flex flex-col hover:shadow-md transition-shadow">
      <div className="p-4 flex-1 flex flex-col">
        {/* Match Header */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm">
            <span className="font-medium">{match.tournament}</span>
            <span className="text-gray-500 mx-2">•</span>
            <span className="text-gray-600">{match.matchNumber}</span>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusStyle(match.status)}`}>
            {match.status === 'live' ? 'LIVE' : match.status.toUpperCase()}
          </span>
        </div>

        {/* Teams */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <img src={match.team1.logo} alt={match.team1.name} className="w-10 h-10 object-contain" />
              <div>
                <div className="font-semibold" style={getTeamNameStyle(match.team1.teamColor)}>
                  {match.team1.name}
                </div>
                {renderTeamScore(match.team1)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <img src={match.team2.logo} alt={match.team2.name} className="w-10 h-10 object-contain" />
              <div>
                <div className="font-semibold" style={getTeamNameStyle(match.team2.teamColor)}>
                  {match.team2.name}
                </div>
                {renderTeamScore(match.team2)}
              </div>
            </div>
          </div>
        </div>

        {/* Match Info */}
        <div className="mt-auto">
          <div className="text-sm text-gray-600 truncate">{match.venue}</div>
          <div className="text-sm font-medium mt-0.5">
            {match.status === 'upcoming' ? (
              <span className="text-blue-600">Starts in {match.startTime}</span>
            ) : (
              <span className="line-clamp-1">{match.matchInfo}</span>
            )}
          </div>
          
          {/* Live Match Additional Info */}
          {match.status === 'live' && (
            <div className="mt-2 space-y-1.5">
              {match.currentBatters && (
                <div className="text-xs">
                  {match.currentBatters.slice(0, 2).map((batter, index) => (
                    <div key={index} className="flex justify-between text-gray-600">
                      <span className="truncate mr-2">{batter.name}</span>
                      <span className="whitespace-nowrap">{batter.runs}({batter.balls})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveMatchCard; 