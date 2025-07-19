import { useMemo } from 'react';

const usePointsSummary = (tableData) => {
  const pointsSummaryData = useMemo(() => {
    if (!tableData || !Array.isArray(tableData)) {
      return [];
    }

    return tableData.map(team => {
      if (!team) return null;

      const matches = Array.isArray(team.recentForm) ? team.recentForm.map((result, idx) => {
        if (!result) return null;
        return {
          result: result.toUpperCase(),
          score: team.pts || 0,
          opponent: team.against || '-',
          matchNumber: idx + 1
        };
      }).filter(Boolean) : [];

      
      const playoffs = [];
      const pos = team.pos || 0;
      
      if (pos <= 4 && pos > 0) {
        // Top 4 teams qualify for playoffs
        if (pos === 1 || pos === 2) {
          playoffs.push({
            result: 'W',
            score: team.pts || 0,
            opponent: pos === 1 ? '4th' : '3rd',
            stage: 'Q1'
          });
          playoffs.push({
            result: pos === 1 ? 'W' : 'L',
            score: team.pts || 0,
            opponent: pos === 1 ? '2nd' : '1st',
            stage: 'F'
          });
        } else {
          playoffs.push({
            result: 'L',
            score: team.pts || 0,
            opponent: pos === 3 ? '2nd' : '1st',
            stage: 'Q1'
          });
          playoffs.push({
            result: 'W',
            score: team.pts || 0,
            opponent: pos === 3 ? '4th' : '3rd',
            stage: 'E'
          });
          playoffs.push({
            result: pos === 3 ? 'W' : 'L',
            score: team.pts || 0,
            opponent: pos === 3 ? 'W(Q1)' : 'W(E)',
            stage: 'Q2'
          });
        }
      }

      return {
        ...team,
        matches: matches.slice(0, 14), 
        playoffs
      };
    }).filter(Boolean); 
  }, [tableData]);

  return pointsSummaryData;
};

export default usePointsSummary; 