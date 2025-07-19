import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/common/Navigation";
import LiveScore from "./components/LiveScore/LiveScore";
import TablePoint from "./components/TablePoint/TablePoint";
import TablePointFilter from "./components/TablePoint/TablePointFilter";
import useCompetitionFilter from "./hooks/useCompetitionFilter";
import MatchSchedulePage from "./pages/MatchSchedulePage";
import TopRunnerPage from "./pages/TopRunnerPage";

// Wrapper component to use hooks
const AppContent = () => {
  const location = useLocation();
  const isTopRunScorersPage = location.pathname === "/top-run-scorers";

  const {
    selectedSeason,
    setSelectedSeason,
    competitionId,
    setCompetitionId,
    selectedCategory,
    setSelectedCategory,
    mensCompetitions,
    womensCompetitions,
  } = useCompetitionFilter();

  const filterProps = {
    selectedSeason,
    setSelectedSeason,
    competitionId,
    setCompetitionId,
    selectedCategory,
    mensCompetitions,
    womensCompetitions,
    selectedCategoryHandler: setSelectedCategory,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Live Score Section */}
          {!isTopRunScorersPage && <LiveScore />}

          {/* Competition Filter */}
          {!isTopRunScorersPage && <TablePointFilter {...filterProps} />}

          <Routes>
            {/* Redirect root to points-table */}
            <Route path="/" element={<Navigate to="/points-table" replace />} />

            {/* Points Table Route */}
            <Route
              path="/points-table"
              element={
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-12">
                    <TablePoint competitionId={competitionId} />
                  </div>
                </div>
              }
            />

            {/* Match Schedule Route */}
            <Route
              path="/match-schedule"
              element={
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-12">
                    <MatchSchedulePage competitionId={competitionId} />
                  </div>
                </div>
              }
            />

            {/* Top Run Scorers Route */}
            <Route
              path="/top-run-scorers"
              element={
                <TopRunnerPage
                  competitionId={competitionId}
                  mensCompetitions={mensCompetitions}
                  setCompetitionId={setCompetitionId}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
