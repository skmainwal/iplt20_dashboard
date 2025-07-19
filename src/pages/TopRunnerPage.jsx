import React, { useState } from 'react';
import PlayerStatsTable from '../components/PlayerStats/PlayerStatsTable';
import PlayerStatsTableSkeleton from '../components/PlayerStats/PlayerStatsTableSkeleton';
import TopPlayerHighlight from '../components/PlayerStats/TopPlayerHighlight';
import TopRunnerFilter from '../components/PlayerStats/TopRunnerFilter';
import ErrorState from '../components/common/ErrorState';
import NoDataState from '../components/common/NoDataState';
import useTopRunScorers from '../hooks/useTopRunScorers';

const TopRunnerPage = (props) => {
    const {competitionId,mensCompetitions,setCompetitionId} = props;
  const { topRunners, loading, error } = useTopRunScorers(competitionId);

  // Filter states
  const [filters, setFilters] = useState({
    season: '2024',
    tournament: 'orange_cap',
    team: 'all',
    player: 'all',
    searchQuery: ''
  });

  // Filter handlers
  const handleFilterChange = (key) => (value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!topRunners?.length && !loading) {
    return <NoDataState message="No player statistics available" />;
  }

  // Get the top player for the highlight section
  const topPlayer = topRunners?.[0];

  // Filter the players based on current filters
  const filteredPlayers = topRunners?.filter(player => {
    const matchesSearch = player.StrikerName.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesTeam = filters.team === 'all' || player.TeamCode === filters.team;
    return matchesSearch && matchesTeam;
  }) || [];

  return (
    <div className="space-y-8">
      {/* Top Player Highlight */}
      <TopPlayerHighlight player={topPlayer} isLoading={loading} />

      {/* Filters */}
      <TopRunnerFilter
        {...filters}
        onSeasonChange={handleFilterChange('season')}
        onTournamentChange={handleFilterChange('tournament')}
        onTeamChange={handleFilterChange('team')}
        onPlayerChange={handleFilterChange('player')}
        onSearchChange={handleFilterChange('searchQuery')}
        {...props}
      />

      {/* Main Stats Table */}
      <div className="bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold p-4 border-b">
          IPL Top Run Scorers
        </h2>
        {loading ? (
          <PlayerStatsTableSkeleton />
        ) : (
          <PlayerStatsTable players={filteredPlayers} />
        )}
      </div>
    </div>
  );
};

export default TopRunnerPage;