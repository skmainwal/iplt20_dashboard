const MobileMatchCard = ({ match }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-sm font-medium">{match.date}</div>
          <div className="text-xs text-gray-500">{match.time} IST</div>
        </div>
        {match.matchStatus === 'Live' && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(match.matchStatus)}`}>
            {match.matchStatus}
          </span>
        )}
      </div>

      <div className="space-y-3">
        {/* Teams */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8" />
            <div>
              <div className="text-sm font-medium">{match.homeTeam.name}</div>
              {match.scores?.firstInnings?.summary && (
                <div className="text-xs text-gray-500">{match.scores.firstInnings.summary}</div>
              )}
            </div>
          </div>
          <div className="text-xs text-gray-500">vs</div>
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-sm font-medium">{match.awayTeam.name}</div>
              {match.scores?.secondInnings?.summary && (
                <div className="text-xs text-gray-500">{match.scores.secondInnings.summary}</div>
              )}
            </div>
            <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8" />
          </div>
        </div>

        {/* Venue */}
        <div className="text-center">
          <div className="text-sm">{match.venue.name}</div>
          <div className="text-xs text-gray-500">{match.venue.city}</div>
        </div>

        {/* Result & MOM */}
        {(match.result?.comments || match.result?.mom?.name) && (
          <div className="border-t pt-2 mt-2">
            {match.result.comments && (
              <div className="text-sm">{match.result.comments}</div>
            )}
            {match.result.mom?.name && (
              <div className="flex items-center mt-2">
                {match.result.mom.image && (
                  <img 
                    src={match.result.mom.image} 
                    alt={match.result.mom.name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                )}
                <div className="text-xs text-gray-500">
                  MOM: {match.result.mom.name}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMatchCard; 