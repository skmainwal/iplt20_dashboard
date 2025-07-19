import { useState } from 'react';
import useCompetitions from './useCompetitions';

const useCompetitionFilter = () => {
  const [selectedSeason, setSelectedSeason] = useState('203');
  const [competitionId, setCompetitionId] = useState('203');
  const [selectedCategory, setSelectedCategory] = useState('MEN');

  const {
    mensCompetitions,
    womensCompetitions,
    handleCategoryChange,
    loading,
  } = useCompetitions();

  return {
    selectedSeason,
    setSelectedSeason,
    competitionId,
    setCompetitionId,
    selectedCategory,
    setSelectedCategory,
    mensCompetitions,
    womensCompetitions,
    handleCategoryChange,
    loading
  };
};

export default useCompetitionFilter; 