import React from 'react';
import { StatCard, StatItem, ProgressBar, StatBox } from './PlayerStatsComponents';

export const BattingEfficiency = ({ player, boundaryPercentage, scoringBallPercentage }) => (
  <StatCard title="Batting Efficiency">
    <div className="space-y-4">
      <ProgressBar 
        label="Strike Rate"
        value={player.StrikeRate}
        max={200}
        color="bg-green-500"
      />
      <ProgressBar 
        label="Scoring Rate"
        value={scoringBallPercentage}
        max={100}
        color="bg-blue-500"
      />
      <StatItem label="Runs per Scoring Shot" value={player.RPSS} />
      <StatItem label="Boundary %" value={boundaryPercentage} percentage />
    </div>
  </StatCard>
);

export const ScoringPattern = ({ player, totalBoundaries }) => (
  <StatCard title="Scoring Pattern">
    <div className="grid grid-cols-3 gap-2 mb-4">
      <StatBox 
        value={player.Fours}
        label="Fours"
        color="text-blue-600"
      />
      <StatBox 
        value={player.Sixes}
        label="Sixes"
        color="text-purple-600"
      />
      <StatBox 
        value={totalBoundaries}
        label="Total"
        color="text-green-600"
      />
    </div>
    <div className="space-y-2">
      <StatItem label="Singles" value={player.Ones} />
      <StatItem label="Doubles" value={player.Twos} />
      <StatItem label="Triples" value={player.Threes} />
    </div>
  </StatCard>
);

export const BallManagement = ({ player, scoringBallPercentage }) => (
  <StatCard title="Ball Management">
    <div className="space-y-4">
      <ProgressBar 
        label="Dot Balls"
        value={player.DBPercent}
        max={100}
        color="bg-red-500"
      />
      <ProgressBar 
        label="Scoring Balls"
        value={scoringBallPercentage}
        max={100}
        color="bg-green-500"
      />
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <div className="text-center">
          <div className="text-sm text-gray-600">Boundary Frequency</div>
          <div className="text-xl font-bold text-gray-800">
            Every {player.BdryFreq} balls
          </div>
        </div>
      </div>
    </div>
  </StatCard>
); 