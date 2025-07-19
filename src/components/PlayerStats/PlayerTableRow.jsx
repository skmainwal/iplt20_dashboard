import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { PlayerImage, PlayerHeader } from './PlayerStatsComponents';
import { BattingEfficiency, ScoringPattern, BallManagement } from './StatSections';

const TableCell = ({ children, align = "right" }) => (
  <td className={`px-4 py-3 text-${align}`}>{children}</td>
);

const PlayerTableRow = ({ player, index, isExpanded, onToggleExpand }) => {
  const totalBoundaries = parseInt(player.Fours) + parseInt(player.Sixes);
  const boundaryPercentage = ((totalBoundaries / parseInt(player.Balls)) * 100).toFixed(1);
  const dotBallPercentage = parseFloat(player.DBPercent);
  const scoringBallPercentage = (100 - dotBallPercentage).toFixed(1);

  return (
    <>
      <tr 
        className={`border-b hover:bg-gray-50 cursor-pointer transition-colors duration-150 
          ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
        onClick={onToggleExpand}
      >
        <TableCell align="center">{index + 1}</TableCell>
        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            <PlayerImage playerName={player.StrikerName} />
            <div className="flex-1">
              <div className="font-semibold">{player.StrikerName}</div>
              <div className="text-sm text-gray-600">{player.TeamName}</div>
            </div>
            <div className="flex items-center">
              {isExpanded ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
        </td>
        <TableCell>{player.TotalRuns}</TableCell>
        <TableCell>{player.Matches}</TableCell>
        <TableCell>{player.Innings}</TableCell>
        <TableCell>{player.NotOuts}</TableCell>
        <TableCell>{player.HighestScore}</TableCell>
        <TableCell>{player.BattingAverage}</TableCell>
        <TableCell>{player.Balls}</TableCell>
        <TableCell>{player.StrikeRate}</TableCell>
        <TableCell>{player.Centuries}</TableCell>
        <TableCell>{player.FiftyPlusRuns}</TableCell>
        <TableCell>{player.Fours}</TableCell>
        <TableCell>{player.Sixes}</TableCell>
      </tr>
      
      
      {isExpanded && (
        <tr>
          <td colSpan="14" className="px-4 py-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
             
              <PlayerHeader player={player} />

           
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BattingEfficiency 
                  player={player}
                  boundaryPercentage={boundaryPercentage}
                  scoringBallPercentage={scoringBallPercentage}
                />
                <ScoringPattern 
                  player={player}
                  totalBoundaries={totalBoundaries}
                />
                <BallManagement 
                  player={player}
                  scoringBallPercentage={scoringBallPercentage}
                />
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default PlayerTableRow; 