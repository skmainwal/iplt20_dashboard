import React from 'react';

const MatchCard = ({ match }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Post':
        return 'bg-blue-100 text-blue-800';
      case 'Live':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreDisplay = (innings) => {
    if (!innings?.summary) return '';
    return (
      <div>
        <p className="text-sm font-semibold">{innings.summary}</p>
        {innings.runRate && (
          <p className="text-xs text-gray-500">RR: {innings.runRate}</p>
        )}
      </div>
    );
  };

  const getMatchResult = () => {
    if (match.matchStatus === 'Post') {
      return (
        <div className="bg-gray-50 rounded-lg p-4 mt-4 space-y-2">
          <p className="text-sm font-semibold text-gray-800">
            {match.result.comments}
          </p>
          {match.result.mom.name && (
            <div className="flex items-center space-x-3">
              {match.result.mom.image && (
                <img 
                  src={match.result.mom.image} 
                  alt={match.result.mom.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div>
                <p className="text-sm font-medium">
                  Player of the Match: {match.result.mom.name}
                </p>
                <p className="text-xs text-gray-600">
                  {match.result.mom.runs && `${match.result.mom.runs} runs`}
                  {match.result.mom.wickets && ` • ${match.result.mom.wickets} wickets`}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
      {/* Match Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(match.matchStatus)}`}>
            {match.matchStatus}
          </span>
          <p className="text-sm text-gray-600">
            {match.matchOrder} • {match.date}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{match.time} IST</p>
          <p className="text-xs text-gray-500">{match.gmtTime}</p>
        </div>
      </div>

      {/* Teams Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center w-2/5">
          <div className="w-16 h-16 flex-shrink-0">
            <img 
              src={match.homeTeam.logo} 
              alt={match.homeTeam.name} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">{match.homeTeam.name}</p>
            {getScoreDisplay(match.scores.firstInnings)}
          </div>
        </div>
        
        <div className="text-center px-4">
          <span className="text-sm font-semibold text-gray-500">VS</span>
        </div>
        
        <div className="flex items-center w-2/5 justify-end">
          <div className="text-right mr-4">
            <p className="font-semibold">{match.awayTeam.name}</p>
            {getScoreDisplay(match.scores.secondInnings)}
          </div>
          <div className="w-16 h-16 flex-shrink-0">
            <img 
              src={match.awayTeam.logo} 
              alt={match.awayTeam.name} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Venue & Toss Details */}
      <div className="text-center space-y-2 mb-4">
        <p className="font-medium text-gray-800">
          {match.venue.name}, {match.venue.city}
        </p>
        {match.toss.details && (
          <p className="text-sm text-gray-600">{match.toss.details}</p>
        )}
      </div>

      {/* Match Result & MOM */}
      {getMatchResult()}

      {/* Officials */}
      {match.officials && (
        <div className="mt-4 pt-4 border-t text-xs text-gray-500">
          <p>Umpires: {match.officials.umpire1}, {match.officials.umpire2}</p>
          <p>Third Umpire: {match.officials.thirdUmpire}</p>
        </div>
      )}
    </div>
  );
};

export default MatchCard; 