import React from 'react';

const ScrollButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg
      ${direction === 'left' ? 'left-0 -ml-4' : 'right-0 -mr-4'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
  >
    {direction === 'left' ? (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

export default ScrollButton; 