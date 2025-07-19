import React from "react";
import Skeleton from "../common/Skeleton";

// Reusable stat box component
const StatBox = ({ value, label }) => (
  <div className="text-center px-2 sm:px-4 md:px-6 py-2 border-r last:border-r-0 border-gray-700/20">
    <div className="text-base sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
      {value}
    </div>
    <div className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
      {label}
    </div>
  </div>
);

// Skeleton version of StatBox
const StatBoxSkeleton = () => (
  <div className="text-center px-2 sm:px-4 md:px-6 py-2 border-r last:border-r-0 border-gray-700/20">
    <div className="mb-2">
      <Skeleton width={60} height={24} />
    </div>
    <Skeleton width={40} height={16} />
  </div>
);

// Reusable background pattern component
const BackgroundPattern = () => (
  <div className="absolute top-0 right-0 w-1/3 sm:w-1/2 h-full">
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] relative">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-[200px] sm:h-[300px] md:h-[400px] w-[1px] sm:w-[2px] origin-bottom"
            style={{
              transform: `rotate(${i * 10}deg)`,
              background: `linear-gradient(to top, ${
                i < 12 ? "#4CAF50" : i < 24 ? "#FFC107" : "#FF5252"
              }, transparent)`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

// Player image component with responsive sizes
const PlayerImage = ({ name }) => (
  <img
    src={`https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${name}.png`}
    alt={name}
    className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-cover rounded-full"
    onError={(e) => {
      e.target.src =
        "https://assets.iplt20.com/ipl/IPLHeadshot2022/generic.png";
    }}
  />
);

const TopPlayerHighlightSkeleton = () => (
  <div className="relative w-full bg-gradient-to-r from-[#001B3D] to-[#082B4E] rounded-lg overflow-hidden mb-8">
    <BackgroundPattern />

    <div className="relative z-10 flex flex-col md:flex-row p-4 sm:p-6 md:p-8">
      <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-4 md:mb-0">
        <Skeleton variant="circular" width={192} height={192} />
        <div className="text-center md:text-left">
          <div className="mb-2">
            <Skeleton width={240} height={36} />
          </div>
          <Skeleton width={160} height={20} />
        </div>
      </div>

      <div className="w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        <div className="flex justify-start md:justify-end min-w-max">
          <div className="flex divide-x divide-gray-700/20 bg-black/20 rounded-lg">
            {Array.from({ length: 6 }).map((_, index) => (
              <StatBoxSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TopPlayerHighlight = ({ player, isLoading }) => {
  if (isLoading) return <TopPlayerHighlightSkeleton />;
  if (!player) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-[#001B3D] to-[#082B4E] rounded-lg overflow-hidden mb-8">
      <BackgroundPattern />

      <div className="relative z-10 flex flex-col md:flex-row p-4 sm:p-6 md:p-8">
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-4 md:mb-0">
          <PlayerImage name={player.StrikerName} />
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {player.StrikerName}
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-sm sm:text-base text-gray-300">
                {player.TeamName}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          <div className="flex justify-start md:justify-end min-w-max">
            <div className="flex divide-x divide-gray-700/20 bg-black/20 rounded-lg">
              <StatBox value={player.TotalRuns} label="Runs" />
              <StatBox value={player.Matches} label="Matches" />
              <StatBox value={player.BattingAverage} label="Average" />
              <StatBox value={player.StrikeRate} label="Strike Rate" />
              <StatBox value={player.HighestScore} label="Hs. Score" />
              <StatBox
                value={`${player.FiftyPlusRuns}/${player.Centuries}`}
                label="50s/100s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlayerHighlight;
