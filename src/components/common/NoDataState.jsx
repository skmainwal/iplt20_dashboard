import React from 'react';

const NoDataState = ({ title = 'No data available', message }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-8 rounded text-center">
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm text-gray-500 mt-1">
        {message}
      </p>
    </div>
  );
};

export default NoDataState; 