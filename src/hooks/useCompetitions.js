import { useState, useEffect } from 'react';
import api from "../utils/api";

const useCompetitions = () => {
    const [mensCompetitions, setMensCompetitions] = useState([]);
    const [womensCompetitions, setWomensCompetitions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("MEN");
    const [selectedCompetition, setSelectedCompetition] = useState(null);
    const [loading, setLoading] = useState({ men: true, women: true });
    const [error, setError] = useState({ men: null, women: null });

    const fetchCompetitions = async(category) => {
        const categoryLower = category.toLowerCase();
        try {
            setLoading((prev) => ({...prev, [categoryLower]: true }));
            setError((prev) => ({...prev, [categoryLower]: null }));

            const response = await api.get(`/api/competitions/${categoryLower}`);

            if (response.data.success) {
                if (categoryLower === "men") {
                    setMensCompetitions(response.data.data);
                    if (selectedCategory === "MEN" && !selectedCompetition) {
                        const defaultCompetition =
                            response.data.data.find((comp) => comp.isLive) ||
                            response.data.data[0];
                        setSelectedCompetition(defaultCompetition);
                    }
                } else {
                    setWomensCompetitions(response.data.data);
                    if (selectedCategory === "WOMEN" && !selectedCompetition) {
                        const defaultCompetition =
                            response.data.data.find((comp) => comp.isLive) ||
                            response.data.data[0];
                        setSelectedCompetition(defaultCompetition);
                    }
                }
            } else {
                throw new Error(`Failed to fetch ${categoryLower}'s competitions`);
            }
        } catch (err) {
            setError((prev) => ({
                ...prev,
                [categoryLower]: err.message || `Failed to fetch ${categoryLower}'s competitions`,
            }));
            console.error(`Error fetching ${categoryLower}'s competitions:`, err);
        } finally {
            setLoading((prev) => ({...prev, [categoryLower]: false }));
        }
    };

    const selectCompetition = (competitionId) => {
        const competitions =
            selectedCategory === "MEN" ? mensCompetitions : womensCompetitions;
        const competition = competitions.find((comp) => comp.id === competitionId);
        if (competition) {
            setSelectedCompetition(competition);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const competitions =
            category === "MEN" ? mensCompetitions : womensCompetitions;
        const defaultCompetition =
            competitions.find((comp) => comp.isLive) || competitions[0];
        setSelectedCompetition(defaultCompetition);
    };

    // Refresh data for a specific category
    const refreshCompetitions = async(category) => {
        await fetchCompetitions(category.toLowerCase());
    };

    // Fetch both men's and women's competitions on mount
    useEffect(() => {
        fetchCompetitions("men");
        // fetchCompetitions('women');
    }, []);

    return {
        mensCompetitions,
        womensCompetitions,
        selectedCategory,
        selectedCompetition,
        selectCompetition,
        handleCategoryChange,
        refreshCompetitions,
        loading,
        error,
        fetchCompetitions,
        setSelectedCategory,
    };
};

export default useCompetitions;