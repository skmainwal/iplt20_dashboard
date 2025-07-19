import React from 'react';

const PlayerStats = ({ orangeCap, purpleCap }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Orange Cap Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 text-orange-500">Orange Cap</h2>
        <div className="space-y-4">
          {orangeCap.map((player) => (
            <div key={player.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <img src={player.photo} alt={player.name} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{player.name}</p>
                  <p className="text-sm text-gray-600">{player.team}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-orange-500">{player.runs} runs</p>
                <p className="text-sm text-gray-600">{player.matches} matches</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Purple Cap Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 text-purple-500">Purple Cap</h2>
        <div className="space-y-4">
          {purpleCap.map((player) => (
            <div key={player.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <img src={player.photo} alt={player.name} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{player.name}</p>
                  <p className="text-sm text-gray-600">{player.team}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-500">{player.wickets} wickets</p>
                <p className="text-sm text-gray-600">{player.matches} matches</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStats; 