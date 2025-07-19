import React, { useState } from 'react';
import useMatchSchedule from '../../hooks/useMatchSchedule';
import ErrorState from '../common/ErrorState';
import ExpandedRow from './ExpandedRow';
import MatchRow from './MatchRow';
import { MatchRowSkeleton, MobileMatchCardSkeleton } from './MatchRowSkeleton';
import MobileMatchCard from './MobileMatchCard';
import TableHeader from './TableHeader';

const MatchSchedule = ({ competitionId }) => {
  const [expandedRows, setExpandedRows] = useState(new Set());
  const { 
    matches, 
    loading, 
    error,
    retry
  } = useMatchSchedule(competitionId);

  const toggleRow = (matchId) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(matchId)) {
      newExpandedRows.delete(matchId);
    } else {
      newExpandedRows.add(matchId);
    }
    setExpandedRows(newExpandedRows);
  };

  const renderContent = () => {
    return (
      <>
        {/* Table for tablet and desktop */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden border border-gray-200">
            <TableHeader />
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                Array.from({ length: 10 }).map((_, index) => (
                  <MatchRowSkeleton key={index} />
                ))
              ) : error ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4">
                    <ErrorState
                      message="Error loading matches"
                      description={error}
                      actionText="Retry"
                      onAction={retry}
                    />
                  </td>
                </tr>
              ) : !matches?.length ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4">
                    <div className="text-center p-8 text-gray-500 min-h-[200px] flex items-center justify-center">
                      No matches scheduled
                    </div>
                  </td>
                </tr>
              ) : (
                matches.map((match) => (
                  <React.Fragment key={match.id}>
                    <MatchRow 
                      match={match}
                      isExpanded={expandedRows.has(match.id)}
                      onToggle={() => toggleRow(match.id)}
                    />
                    {expandedRows.has(match.id) && (
                      <ExpandedRow match={match} />
                    )}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="sm:hidden space-y-4">
          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <MobileMatchCardSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <div className="bg-white rounded-lg p-4 shadow">
              <ErrorState
                message="Error loading matches"
                description={error}
                actionText="Retry"
                onAction={retry}
              />
            </div>
          ) : (
            matches?.map((match) => (
              <MobileMatchCard key={match.id} match={match} />
            ))
          )}
        </div>
      </>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Match Schedule
      </h2>
      
      {renderContent()}
    </div>
  );
};

export default MatchSchedule; 