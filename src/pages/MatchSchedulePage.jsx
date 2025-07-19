import React from 'react';
import MatchSchedule from '../components/MatchSchedule/MatchSchedule';

const MatchSchedulePage = ({ competitionId }) => {
  return (
    <MatchSchedule 
      competitionId={competitionId}
    />
  );
};

export default MatchSchedulePage; 