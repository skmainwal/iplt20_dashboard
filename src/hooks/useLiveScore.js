import { useState, useEffect } from 'react';
import { dummyLiveMatches } from '../data/dummyData';

const useLiveScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        // Simulate API call with dummy data
        setLoading(true);
        // In real implementation, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setMatches(dummyLiveMatches);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();

    // In real implementation, you might want to set up a WebSocket or polling here
    const interval = setInterval(fetchMatches, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    matches,
    loading,
    error
  };
};

export default useLiveScore; 