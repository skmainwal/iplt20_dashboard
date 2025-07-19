import React from 'react';

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <p className="font-medium">Error loading data</p>
      <p className="text-sm">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorState; 