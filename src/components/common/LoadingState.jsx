import React from 'react';

const LoadingState = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500"></div>
      <div className="text-gray-500 font-medium">{message}</div>
    </div>
  );
};

export default LoadingState; 