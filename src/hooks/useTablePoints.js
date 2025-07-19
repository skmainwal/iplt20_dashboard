import { useState, useEffect, useMemo, useCallback } from 'react';
const DEFAULT_TEAM = {
  pos: 0,
  movement: 'none',
  team: {
    name: '-',
    logo: '',
    fullName: '-'
  },
  qualified: false,
  p: 0,
  w: 0,
  l: 0,
  nr: 0,
  nrr: 0,
  for: '-',
  against: '-',
  pts: 0,
  recentForm: []
};

const useTablePoints = (competitionId) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noData, setNoData] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setNoData(false);
      
      const response = await fetch(`/api/standings/${competitionId}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to fetch standings (${response.status}): ${errorText || 'No additional error information'}`
        );
      }
      
      const data = await response.json();

      if (!data || !data.points || !Array.isArray(data.points)) {
        setNoData(true);
        setTableData([]);
        return;
      }

      if (data.points.length === 0) {
        setNoData(true);
        setTableData([]);
        return;
      }

      // Transform the data to match our table structure
      const transformedData = data.points.map((team, index) => {
        try {
          return {
            pos: parseInt(team.OrderNo) || index + 1,
            movement: team.Status === 'UP' ? 'up' : team.Status === 'DOWN' ? 'down' : 'none',
            team: {
              name: team.TeamCode || 'Team ' + (index + 1),
              logo: team.TeamLogo || '',
              fullName: team.TeamName || 'Team ' + (index + 1)
            },
            qualified: team.IsQualified === "1",
            p: parseInt(team.Matches) || 0,
            w: parseInt(team.Wins) || 0,
            l: parseInt(team.Loss) || 0,
            nr: parseInt(team.NoResult) || 0,
            nrr: parseFloat(team.NetRunRate) || 0,
            for: team.ForTeams || '-',
            against: team.AgainstTeam || '-',
            pts: parseInt(team.Points) || 0,
            recentForm: team.Performance ? (
              team.Performance.includes(',') ? 
                team.Performance.split(',').filter(Boolean) :
                Array.from(team.Performance)
            ) : []
          };
        } catch (err) {
          console.error(`Error transforming team data at index ${index}:`, err);
          return {
            ...DEFAULT_TEAM,
            pos: index + 1,
            team: {
              ...DEFAULT_TEAM.team,
              name: `Team ${index + 1}`,
              fullName: `Team ${index + 1}`
            }
          };
        }
      });

      setTableData(transformedData);
      setNoData(false);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'Failed to fetch table data');
      setTableData([]);
      setNoData(true);
    } finally {
      setLoading(false);
    }
  }, [competitionId]);

  useEffect(() => {
    fetchData();
  }, [competitionId]);

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    return tableData;
  }, [tableData]);

  const sortedData = useMemo(() => {
    if (!filteredData.length) return [];
    
    try {
      return [...filteredData].sort((a, b) => {
        if (b.pts !== a.pts) {
          return b.pts - a.pts;
        }
        return b.nrr - a.nrr;
      });
    } catch (err) {
      console.error('Error sorting data:', err);
      return filteredData;
    }
  }, [filteredData]);

  return {
    tableData: sortedData,
    loading,
    error,
    noData,
    competitionId,
    fetchData,
    hasData: sortedData.length > 0,
    retry: fetchData
  };
};

export default useTablePoints; 