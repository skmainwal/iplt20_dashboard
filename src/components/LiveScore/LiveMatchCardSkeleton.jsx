import React from 'react';
import Skeleton from '../common/Skeleton';

const LiveMatchCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm h-[280px] flex flex-col hover:shadow-md transition-shadow">
    <div className="p-4 flex-1">
      <div className="flex justify-between items-center mb-3">
        <Skeleton width={150} />
        <Skeleton width={60} height={24} className="rounded-full" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Skeleton variant="circular" width={40} height={40} />
            <div>
              <Skeleton width={100} className="mb-2" />
              <Skeleton width={120} height={16} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Skeleton variant="circular" width={40} height={40} />
            <div>
              <Skeleton width={100} className="mb-2" />
              <Skeleton width={120} height={16} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Skeleton width={200} className="mb-2" />
        <Skeleton width={150} />
      </div>
    </div>
  </div>
);

export default LiveMatchCardSkeleton; 