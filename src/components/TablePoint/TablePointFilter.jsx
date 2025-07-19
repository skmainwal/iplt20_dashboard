import React from 'react';
import useCompetitions from '../../hooks/useCompetitions';
import Dropdown from '../common/Dropdown';

const TablePointFilter = ({
  selectedCategoryHandler,
  selectedSeason,
  setSelectedSeason,
  setCompetitionId,
  mensCompetitions,
  womensCompetitions,
  selectedCategory,
  loading = { men: false, women: false },
}) => {

  // Get the appropriate competition list based on selected category
  const competitions = selectedCategory === 'MEN' ? mensCompetitions : womensCompetitions;

  // Handle category change
  const onCategoryChange = (category) => {
    selectedCategoryHandler(category);
    const competitions = category === 'MEN' ? mensCompetitions : womensCompetitions;
    if (competitions && competitions.length > 0) {
      setCompetitionId(competitions[0].id);
    }
  };

  // Handle season change
  const handleSeasonChange = (competitionId) => {
    setSelectedSeason(competitionId);
    setCompetitionId(competitionId);
  };

  const seasonOptions = competitions?.map(competition => ({
    id: competition.id,
    name: `SEASON ${competition.shortName}`
  })) || [];


  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* <Dropdown
        value={selectedCategory}
        onChange={onCategoryChange}
        options={categories}
        placeholder="Select Category"
      /> */}

      <Dropdown
        value={selectedSeason}
        onChange={handleSeasonChange}
        options={seasonOptions}
        disabled={loading[selectedCategory.toLowerCase()]}
        placeholder="Select Season"
      />
    </div>
  );
};

export default TablePointFilter; 