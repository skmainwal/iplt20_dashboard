const MatchRow = ({ match, isExpanded, onToggle }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };

  return (
    <tr 
      className={`hover:bg-gray-50 cursor-pointer transition-colors ${isExpanded ? 'bg-gray-50' : ''}`}
      onClick={onToggle}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{match.date}</div>
        <div className="text-sm text-gray-500">{match.time} IST</div>
        {match.matchStatus === 'Live' && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(match.matchStatus)}`}>
            {match.matchStatus}
          </span>
        )}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center flex-1">
            <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8 object-contain" />
            <span className="ml-2 text-sm font-medium">{match.homeTeam.name}</span>
            {match.scores?.firstInnings?.summary && (
              <span className="ml-2 text-sm text-gray-500">{match.scores.firstInnings.summary}</span>
            )}
          </div>
          <span className="text-xs text-gray-500">vs</span>
          <div className="flex items-center flex-1 justify-end">
            {match.scores?.secondInnings?.summary && (
              <span className="mr-2 text-sm text-gray-500">{match.scores.secondInnings.summary}</span>
            )}
            <span className="mr-2 text-sm font-medium">{match.awayTeam.name}</span>
            <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8 object-contain" />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{match.venue.name}</div>
        <div className="text-xs text-gray-500">{match.venue.city}</div>
      </td>
      <td className="px-6 py-4">
        {match.result?.comments && (
          <div className="text-sm text-gray-900">{match.result.comments}</div>
        )}
      </td>
    </tr>
  );
};

export default MatchRow; 