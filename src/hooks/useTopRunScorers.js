import { useState, useEffect } from 'react';
import axios from 'axios';

const useTopRunScorers = (competitionId = '148') => {
  const [topRunners, setTopRunners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTopRunScorers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`/api/top-run-scorers/${competitionId}`);
      
      if (response.data.success) {
        setTopRunners(response.data.data);
      } else {
        throw new Error(response.data.message || 'Failed to fetch top run scorers');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data');
      setTopRunners([]);
    } finally {
      setLoading(false);
    }
  };

  // Sort functions
  const sortByRuns = () => {
    const sorted = [...topRunners].sort((a, b) => parseInt(b.TotalRuns) - parseInt(a.TotalRuns));
    setTopRunners(sorted);
  };

  const sortByAverage = () => {
    const sorted = [...topRunners].sort((a, b) => {
      const avgA = parseFloat(a.BattingAverage) || 0;
      const avgB = parseFloat(b.BattingAverage) || 0;
      return avgB - avgA;
    });
    setTopRunners(sorted);
  };

  const sortByStrikeRate = () => {
    const sorted = [...topRunners].sort((a, b) => {
      const srA = parseFloat(a.StrikeRate) || 0;
      const srB = parseFloat(b.StrikeRate) || 0;
      return srB - srA;
    });
    setTopRunners(sorted);
  };

  // Filter function
  const filterByTeam = (teamCode) => {
    if (!teamCode) return topRunners;
    return topRunners.filter(player => player.TeamCode === teamCode);
  };

  useEffect(() => {
    fetchTopRunScorers();
  }, [competitionId]);

  return {
    topRunners,
    loading,
    error,
    sortByRuns,
    sortByAverage,
    sortByStrikeRate,
    filterByTeam,
    refreshData: fetchTopRunScorers
  };
};

export default useTopRunScorers; 