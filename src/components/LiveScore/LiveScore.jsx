import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useLiveScore from '../../hooks/useLiveScore';
import LiveMatchCard from './LiveMatchCard';
import LiveMatchCardSkeleton from './LiveMatchCardSkeleton';
import ScrollButton from './ScrollButton';

const LiveScore = () => {
  const scrollContainerRef = useRef(null);
  const { matches, loading, error } = useLiveScore();

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-xl">
        Error loading matches: {error}
      </div>
    );
  }

  const renderContent = () => {
    if (loading) {
      return Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="min-w-[300px] flex-shrink-0">
          <LiveMatchCardSkeleton />
        </div>
      ));
    }

    if (!matches?.length) {
      return (
        <div className="col-span-full text-center py-8 text-gray-500">
          No matches scheduled
        </div>
      );
    }

    return matches.map((match) => (
      <div key={match.id} className="min-w-[300px] flex-shrink-0">
        <LiveMatchCard match={match} />
      </div>
    ));
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">TATA IPL 2026</h2>
      </div>

      <div className="relative">
        <ScrollButton 
          direction="left" 
          onClick={() => scroll('left')}
          disabled={loading}
        />
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-3 pb-4 px-4 -mx-4 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {renderContent()}
        </div>

        <ScrollButton 
          direction="right" 
          onClick={() => scroll('right')}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default LiveScore;

