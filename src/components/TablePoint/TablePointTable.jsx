import React from 'react';
import { getTeamLogo } from '../../utils/constants/teams';

const TablePointTable = ({ 
  data,
  loading = true,
  formColors = {
    'W': 'bg-green-500',
    'L': 'bg-red-500',
    'N': 'bg-gray-500',
    'NR': 'bg-gray-500'
  }
}) => {
    // const loading= true

  const renderSkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded"></div></td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </td>
      <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-16 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-16 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-16 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4"><div className="h-4 w-8 bg-gray-200 rounded mx-auto"></div></td>
      <td className="px-6 py-4">
        <div className="flex gap-1 justify-center">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="w-6 h-6 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-[20px] overflow-hidden text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-6 text-left font-[500]">POS</th>
            <th className="px-6 py-6 text-left font-[500]"></th>
            <th className="px-6 py-6 text-left font-[500]">TEAM</th>
            <th className="px-6 py-6 text-center font-[500]"></th>
            <th className="px-6 py-6 text-center font-[500]">P</th>
            <th className="px-6 py-6 text-center font-[500]">W</th>
            <th className="px-6 py-6 text-center font-[500]">L</th>
            <th className="px-6 py-6 text-center font-[500]">NR</th>
            <th className="px-6 py-6 text-center font-[500]">NRR</th>
            <th className="px-6 py-6 text-center font-[500]">FOR</th>
            <th className="px-6 py-6 text-center font-[500]">AGAINST</th>
            <th className="px-6 py-6 text-center font-[500]">PTS</th>
            <th className="px-6 py-6 text-center font-[500]">RECENT FORM</th>
          </tr>
        </thead>
        <tbody className="h-[650px] relative">
          {loading ? (
            // Render multiple skeleton rows while loading
            [...Array(10)].map((_, index) => renderSkeletonRow())
          ) : (
            data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-center">
                  {row.pos}
                </td>
                <td className="px-6 py-4 text-center">
                  {row.movement === 'up' && <span className="text-green-500">▲</span>}
                  {row.movement === 'down' && <span className="text-red-500">▼</span>}
                  {row.movement === 'none' && <span>-</span>}
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  {row.team.logo ? (
                    <img src={row.team.logo} alt={row.team.name} className="w-8 h-8" />
                  ) : (
                    <span className="text-2xl">
                         <img src={getTeamLogo(row.team.name)} alt={row.team.name} className="w-8 h-8" />
                    </span>
                  )}
                  <span title={row.team.fullName}>{row.team.name}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  {row.qualified && (
                    <img 
                      src="https://scores.iplt20.com/ipl/mc/images/qualified.png" 
                      alt="Qualified" 
                      title="Qualified"
                      className="inline-block w-5 h-5"
                    />
                  )}
                </td>
                <td className="px-6 py-4 text-center">{row.p}</td>
                <td className="px-6 py-4 text-center">{row.w}</td>
                <td className="px-6 py-4 text-center">{row.l}</td>
                <td className="px-6 py-4 text-center">{row.nr}</td>
                <td className="px-6 py-4 text-center">{row.nrr.toFixed(3)}</td>
                <td className="px-6 py-4 text-center">{row.for}</td>
                <td className="px-6 py-4 text-center">{row.against}</td>
                <td className="px-6 py-4 text-center font-bold">{row.pts}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-1 justify-center">
                    {[...row.recentForm].reverse().map((result, idx) => (
                      <span
                        key={idx}
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${formColors[result] ? `text-${formColors[result].split('-')[1]}-500 border border-current` : 'text-gray-500 border border-current'}`}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablePointTable; 