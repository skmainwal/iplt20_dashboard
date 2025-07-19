const ExpandedRow = ({ match }) => (
  <tr className="bg-gray-50">
    <td colSpan="4" className="px-6 py-4">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-sm mb-2">Match Details</h4>
          {match.toss?.details && (
            <p className="text-sm text-gray-600 mb-2">{match.toss.details}</p>
          )}
          {match.officials && (
            <div className="text-sm text-gray-600">
              <p>Umpires: {match.officials.umpire1}, {match.officials.umpire2}</p>
              <p>Third Umpire: {match.officials.thirdUmpire}</p>
            </div>
          )}
        </div>
        <div>
          {match.result?.mom?.name && (
            <div>
              <h4 className="font-medium text-sm mb-2">Player of the Match</h4>
              <div className="flex items-center">
                {match.result.mom.image && (
                  <img 
                    src={match.result.mom.image} 
                    alt={match.result.mom.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <p className="text-sm font-medium">{match.result.mom.name}</p>
                  <p className="text-xs text-gray-600">
                    {match.result.mom.runs && `${match.result.mom.runs} runs`}
                    {match.result.mom.wickets && ` • ${match.result.mom.wickets} wickets`}
                  </p>
                </div>
              </div>
            </div>
          )}
          {match.scores?.firstInnings?.runRate && (
            <div className="mt-3">
              <h4 className="font-medium text-sm mb-1">Run Rates</h4>
              <p className="text-sm text-gray-600">
                1st Innings: {match.scores.firstInnings.runRate}
                {match.scores.secondInnings?.runRate && ` • 2nd Innings: ${match.scores.secondInnings.runRate}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </td>
  </tr>
);

export default ExpandedRow; 