import Skeleton from '../common/Skeleton';

export const MatchRowSkeleton = () => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <Skeleton width={96} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <Skeleton variant="circular" width={32} height={32} />
          <div className="flex-1">
            <Skeleton width={128} className="mb-2" />
            <Skeleton width={96} height={12} />
          </div>
          <div className="mx-4"></div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Skeleton width={160} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Skeleton width={80} />
      </td>
    </tr>
  );
};



export const MobileMatchCardSkeleton = () => (
    <div className="bg-white rounded-lg p-4 shadow">
      <div className="flex items-center justify-between mb-4">
        <Skeleton width={96} />
        <Skeleton width={80} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton variant="circular" width={40} height={40} />
          <div>
            <Skeleton width={128} className="mb-2" />
            <Skeleton width={96} height={12} />
          </div>
        </div>
        <div className="mx-4">vs</div>
        <div className="flex items-center space-x-3">
          <div>
            <Skeleton width={128} className="mb-2" />
            <Skeleton width={96} height={12} />
          </div>
          <Skeleton variant="circular" width={40} height={40} />
        </div>
      </div>
    </div>
  );
  

