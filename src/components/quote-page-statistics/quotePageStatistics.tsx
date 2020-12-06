import React, { useEffect, useState }  from 'react';
import { getStockStatistics } from '../../API/analysisStock';
import {   REQUEST_STATUSES, IStock, StockStatistics } from '../../types'
import QuotePageCompanyStatistics from './quotePageCompany';
import QuotePageKeyCompetitors from './quotePageKeyCompetitors';
import './quotePageStatistics.styles.css'
import QuotePageValuationStats from './quotePageValuation';


const QuotePageStatistics: React.FC<IStock> = ({Stock}) => {

    const [
        stockStatistics,
        setStockStatistics,
    ] = useState<StockStatistics | null>(null);
    const [status, setStatus] = useState<REQUEST_STATUSES>(
        REQUEST_STATUSES.IDLE
    );
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setStatus(REQUEST_STATUSES.LOADING);
        getStockStatistics(Stock)
            .then(data => {
                setStockStatistics(data);
                setStatus(REQUEST_STATUSES.SUCCESS);
            })
            .catch(error => {
                setStatus(REQUEST_STATUSES.ERROR);
                setError(error.message);
            });
    }, []);
    return ( <div className="statisticsFont">

<div>
    <div className="valuationContainer">
        {status === REQUEST_STATUSES.LOADING ? <div> Loading ...</div> : null}
        {status === REQUEST_STATUSES.ERROR ? (
            <div>Oops! There was an Error. Try refreshing the page</div>
        ) : null}

        {status === REQUEST_STATUSES.SUCCESS && stockStatistics ===undefined? (
            <div>No Record Found</div>
        ) : null}

        {status === REQUEST_STATUSES.SUCCESS && stockStatistics!==null
            ? (
                <div>
                    <QuotePageValuationStats   Statistics={stockStatistics}/>
                    <br /><br />
                    <QuotePageCompanyStatistics Statistic={stockStatistics} />
                </div>
                
            )
            : null}

     </div>
    <div className ="keyCompetitorsContainer">
            <QuotePageKeyCompetitors Stock={Stock} />
    </div>
    
    
</div>
    </div> );
}
 
export default QuotePageStatistics;