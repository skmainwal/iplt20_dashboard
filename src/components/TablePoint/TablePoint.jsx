import React from 'react';
import useTablePoints from '../../hooks/useTablePoints';
import usePointsSummary from '../../hooks/usePointsSummary';
import TablePointTable from './TablePointTable';
import PointsSummaryTable from './PointsSummaryTable';
import ErrorState from '../common/ErrorState';
import NoDataState from '../common/NoDataState';

const TablePoint = ({ competitionId }) => {
    const {
        tableData,
        loading,
        error,
        noData,
        retry
    } = useTablePoints(competitionId);

    const pointsSummaryData = usePointsSummary(tableData);

    const renderContent = () => {
        if (error) {
            return ( <
                ErrorState message = { error }
                onRetry = { retry }
                />
            );
        }

        if (noData && !loading) {
            return ( <
                NoDataState message = "There are no standings available for the selected competition." /
                >
            );
        }

        return ( <
            div className = "space-y-8" >
            <
            TablePointTable data = { tableData }
            loading = { loading }
            noData = { noData }
            /> {
                /* <PointsSummaryTable 
                          data={pointsSummaryData}
                        /> */
            } <
            /div>
        );
    };

    return ( <
        div className = "w-full" > { renderContent() } <
        /div>
    );
};

export default TablePoint;