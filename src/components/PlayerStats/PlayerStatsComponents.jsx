import React from 'react';

export const StatCard = ({ title, children, className = "" }) => (
  <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
    <h4 className="font-semibold text-gray-700 mb-3 pb-2 border-b">{title}</h4>
    {children}
  </div>
);

export const StatItem = ({ label, value, percentage = false }) => (
  <div className="flex justify-between items-center py-1.5">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">
      {value}{percentage && '%'}
    </span>
  </div>
);

export const ProgressBar = ({ value, max, color = "bg-blue-500", label }) => (
  <div>
    {label && (
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    )}
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
      <div 
        className={`h-2.5 rounded-full ${color}`} 
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  </div>
);

export const PlayerImage = ({ playerName, size = "small" }) => {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-24 h-24"
  };

  return (
    <img 
      src={`https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${playerName}.png`}
      alt={playerName} 
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  );
};

export const StatBox = ({ value, label, color = "text-gray-800" }) => (
  <div className="text-center p-2 bg-gray-50 rounded">
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export const PlayerHeader = ({ player }) => (
  <div className="flex items-center gap-6 mb-6 p-4 bg-white rounded-lg shadow">
    <PlayerImage playerName={player.StrikerName} size="large" />
    <div>
      <h3 className="text-2xl font-bold">{player.StrikerName}</h3>
      <p className="text-gray-600">{player.TeamName}</p>
      <div className="mt-2 flex gap-4">
        <span className="text-sm">
          <span className="font-semibold">{player.TotalRuns}</span> runs
        </span>
        <span className="text-sm">
          <span className="font-semibold">{player.Matches}</span> matches
        </span>
        <span className="text-sm">
          <span className="font-semibold">{player.BattingAverage}</span> avg
        </span>
      </div>
    </div>
  </div>
); 