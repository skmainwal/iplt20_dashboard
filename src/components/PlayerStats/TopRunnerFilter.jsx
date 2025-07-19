import React from 'react';
import {
  IPL_TEAMS,
  PLACEHOLDER_TEXT,
  SEARCH_INPUT_SIZES,
  SEARCH_INPUT_VARIANTS
} from '../../utils/constants/filterOptions';
import Dropdown from '../common/Dropdown';
import SearchInput from '../common/SearchInput';

const TopRunnerFilter = ({
  season,
  tournament,
  team,
  player,
  searchQuery,
  onSeasonChange,
  onTournamentChange,
  onTeamChange,
  onPlayerChange,
  onSearchChange,
  mensCompetitions,setCompetitionId,competitionId,setSelectedCategory
}) => {
  
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-2">
          <Dropdown
            value={competitionId}
            onChange={setCompetitionId}
            options={mensCompetitions}
            placeholder={PLACEHOLDER_TEXT.SEASON}
            className="w-full"
          />
        </div>

        {/* Tournament Dropdown */}
        {/* <div className="lg:col-span-2">
          <Dropdown
            value={tournament}
            onChange={onTournamentChange}
            options={TOURNAMENTS}
            placeholder={PLACEHOLDER_TEXT.TOURNAMENT}
            className="w-full"
          />
        </div> */}

        {/* Team Dropdown */}
        <div className="lg:col-span-2">
          <Dropdown
            value={team}
            onChange={onTeamChange}
            options={IPL_TEAMS}
            placeholder={PLACEHOLDER_TEXT.TEAM}
            className="w-full"
          />
        </div>

        {/* Player Dropdown */}
        {/* <div className="lg:col-span-2">
          <Dropdown
            value={player}
            onChange={onPlayerChange}
            options={DEFAULT_PLAYERS}
            placeholder={PLACEHOLDER_TEXT.PLAYER}
            className="w-full"
          />
        </div> */}

        {/* Search Input */}
        <div className="lg:col-span-4">
          <SearchInput
            value={searchQuery}
            onChange={onSearchChange}
            placeholder={PLACEHOLDER_TEXT.SEARCH}
            variant={SEARCH_INPUT_VARIANTS.DEFAULT}
            size={SEARCH_INPUT_SIZES.DEFAULT}
            showClearButton
            onClear={() => {
              // Additional clear handling if needed
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopRunnerFilter; 