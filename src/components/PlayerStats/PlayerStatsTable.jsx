import React, { useState } from 'react';
import PlayerTableRow from './PlayerTableRow';

const PlayerStatsTable = ({ players }) => {
  const [expandedPlayerId, setExpandedPlayerId] = useState(null);

  const handleToggleExpand = (playerId) => {
    setExpandedPlayerId(expandedPlayerId === playerId ? null : playerId);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-[#1a2330] text-white text-sm">
            <th className="px-4 py-3 text-left">POS</th>
            <th className="px-4 py-3 text-left">PLAYER</th>
            <th className="px-4 py-3 text-right">RUNS</th>
            <th className="px-4 py-3 text-right">MAT</th>
            <th className="px-4 py-3 text-right">INNS</th>
            <th className="px-4 py-3 text-right">NO</th>
            <th className="px-4 py-3 text-right">HS</th>
            <th className="px-4 py-3 text-right">AVG</th>
            <th className="px-4 py-3 text-right">BF</th>
            <th className="px-4 py-3 text-right">SR</th>
            <th className="px-4 py-3 text-right">100</th>
            <th className="px-4 py-3 text-right">50</th>
            <th className="px-4 py-3 text-right">4S</th>
            <th className="px-4 py-3 text-right">6S</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <PlayerTableRow 
              key={player.StrikerID} 
              player={player} 
              index={index}
              isExpanded={expandedPlayerId === player.StrikerID}
              onToggleExpand={() => handleToggleExpand(player.StrikerID)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatsTable; 