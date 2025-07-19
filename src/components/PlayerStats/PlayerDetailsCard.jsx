import React from 'react';

const PlayerDetailsCard = ({ player }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-2">{player.StrikerName} - Detailed Stats</h3>
      <div className="space-y-2 text-sm">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="font-semibold text-gray-600">Boundary Stats</p>
            <p>Frequency: {player.BdryFreq}</p>
            <p>Percentage: {player.BdryPercent}%</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Dot Ball Stats</p>
            <p>Percentage: {player.DBPercent}%</p>
            <p>Count: {player.Dotballs}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="font-semibold text-gray-600 mb-2">Scoring Distribution</p>
          <div className="grid grid-cols-5 gap-2 text-center">
            <div className="bg-gray-50 p-2 rounded">
              <p className="font-semibold">1s</p>
              <p>{player.Ones}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="font-semibold">2s</p>
              <p>{player.Twos}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="font-semibold">3s</p>
              <p>{player.Threes}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="font-semibold">4s</p>
              <p>{player.Fours}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="font-semibold">6s</p>
              <p>{player.Sixes}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-600 mb-2">Additional Stats</p>
          <div className="grid grid-cols-2 gap-2">
            <p>Scoring Balls: {player.ScoringBalls}</p>
            <p>Total Balls: {player.Balls}</p>
            <p>Extras: {player.Extras}</p>
            <p>RPSS: {player.RPSS}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsCard; 