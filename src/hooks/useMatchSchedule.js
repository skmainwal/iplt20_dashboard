import { useState, useEffect } from 'react';
import api from '../utils/api';

const useMatchSchedule = (competitionId) => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMatchSchedule = async() => {
        try {
            setLoading(true);
            const response = await api.get(`/api/match-schedule/${competitionId}`);
            setMatches(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch match schedule');
            console.error('Error fetching match schedule:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (competitionId) {
            fetchMatchSchedule();
        }
    }, [competitionId]);

    return {
        matches,
        loading,
        error,
        retry: fetchMatchSchedule
    };
};

export default useMatchSchedule;