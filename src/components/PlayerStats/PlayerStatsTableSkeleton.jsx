import React from 'react';
import Skeleton from '../common/Skeleton';

const PlayerStatsTableSkeleton = () => {
  // Generate 10 rows of skeleton data
  const skeletonRows = Array.from({ length: 10 });

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-[#1a2330] text-white text-sm">
            <th className="px-4 py-3 text-left">POS</th>
            <th className="px-4 py-3 text-left">PLAYER</th>
            <th className="px-4 py-3 text-right">RUNS</th>
            <th className="px-4 py-3 text-right">MAT</th>
            <th className="px-4 py-3 text-right">INNS</th>
            <th className="px-4 py-3 text-right">NO</th>
            <th className="px-4 py-3 text-right">HS</th>
            <th className="px-4 py-3 text-right">AVG</th>
            <th className="px-4 py-3 text-right">BF</th>
            <th className="px-4 py-3 text-right">SR</th>
            <th className="px-4 py-3 text-right">100</th>
            <th className="px-4 py-3 text-right">50</th>
            <th className="px-4 py-3 text-right">4S</th>
            <th className="px-4 py-3 text-right">6S</th>
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-3">
                <Skeleton width={20} />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <Skeleton variant="circular" width={32} height={32} className="mr-3" />
                  <div>
                    <Skeleton width={120} className="mb-1" />
                    <Skeleton width={80} height={12} />
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={40} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={40} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={40} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={40} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
              <td className="px-4 py-3 text-right">
                <Skeleton width={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatsTableSkeleton; 