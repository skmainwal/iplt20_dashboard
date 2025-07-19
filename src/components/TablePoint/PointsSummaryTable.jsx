import React from 'react';
import { getTeamLogo } from '../../utils/constants/teams';

const PointsSummaryTable = ({ data = [] }) => {
  // Define result colors
  const resultColors = {
    'W': 'bg-green-100 text-green-800',
    'L': 'bg-red-100 text-red-800',
    'T': 'bg-yellow-100 text-yellow-800',
    'NR': 'bg-purple-100 text-purple-800'
  };

  // Generate column headers for group matches
  const groupMatchColumns = Array.from({ length: 14 }, (_, i) => i + 1);
  const playoffColumns = ['Q1', 'E', 'Q2', 'F'];

  const renderMatchCell = (match) => {
    if (!match) return <div className="h-12"></div>;

    const resultClass = resultColors[match.result] || 'bg-gray-100 text-gray-800';
    return (
      <div className={`text-xs ${resultClass} rounded p-1 h-12 flex flex-col justify-center`}>
        <div className="font-medium">{match.score || 0}</div>
        <div className="text-[10px]">vs {match.opponent || '-'}</div>
      </div>
    );
  };

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="w-full p-4 text-center text-gray-500">
        No points summary data available
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-green-100 rounded"></div>
          <span className="text-sm">Win</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-red-100 rounded"></div>
          <span className="text-sm">Loss</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-yellow-100 rounded"></div>
          <span className="text-sm">Tie</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-purple-100 rounded"></div>
          <span className="text-sm">No Result</span>
        </div>
      </div>

      <table className="min-w-full border-collapse bg-white">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-3 text-left">Team</th>
            <th colSpan={groupMatchColumns.length} className="text-center border-l">Group Matches</th>
            <th colSpan={playoffColumns.length} className="text-center border-l">Playoffs</th>
          </tr>
          <tr className="border-b text-sm">
            <th className="py-2 px-3"></th>
            {groupMatchColumns.map(num => (
              <th key={`match-${num}`} className="py-2 px-2 text-center border-l">{num}</th>
            ))}
            {playoffColumns.map(stage => (
              <th key={`playoff-${stage}`} className="py-2 px-2 text-center border-l">{stage}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((team, index) => {
            if (!team || !team.team) return null;
            
            return (
              <tr key={team.team.name || index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <img 
                      src={getTeamLogo(team.team.name)} 
                      alt={team.team.name} 
                      className="w-8 h-8"
                    />
                    <span className="font-medium">{team.team.name}</span>
                  </div>
                </td>
                {groupMatchColumns.map(num => (
                  <td key={`${team.team.name}-match-${num}`} className="py-2 px-2 border-l">
                    {renderMatchCell(team.matches?.[num - 1])}
                  </td>
                ))}
                {playoffColumns.map((stage, stageIndex) => (
                  <td key={`${team.team.name}-playoff-${stage}`} className="py-2 px-2 border-l">
                    {renderMatchCell(team.playoffs?.[stageIndex])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PointsSummaryTable; 