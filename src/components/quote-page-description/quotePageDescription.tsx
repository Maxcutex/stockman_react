import React, {useState , useEffect} from 'react';
import { getStockInfo } from '../../API/analysisStock';
import {  REQUEST_STATUSES, IStock, StockInfoType } from '../../types'
import QuotePageData from './quotePageData';
const QuotePageDescription: React.FC<IStock> = ({Stock}) => {

    const [stockDetails, setStockDetails] = useState<StockInfoType | null>(null)
    const [status, setStatus] = useState<REQUEST_STATUSES>(REQUEST_STATUSES.IDLE)
    const [error, setError] = useState<string>('')
    
    useEffect(() => {
        
        setStatus(REQUEST_STATUSES.LOADING)
        getStockInfo(Stock)
        .then((data) => {
            setStockDetails(data)
            setStatus(REQUEST_STATUSES.SUCCESS)
        })
        .catch((error) => {
            setStatus(REQUEST_STATUSES.ERROR)
            setError(error.message)
        })
    
      }, [])
    return ( <div>
            {status === REQUEST_STATUSES.LOADING ? <div> Loading ...</div> : null}
            {status === REQUEST_STATUSES.ERROR ? (
                <div>Oops! There was an Error. Try refreshing the page</div>
            ) : null}

            {status === REQUEST_STATUSES.SUCCESS && stockDetails ===undefined? (
                <div>No Record Found</div>
            ) : null}

            {status === REQUEST_STATUSES.SUCCESS && stockDetails!==null
                ? (
                    <QuotePageData   Stock={stockDetails}  />
                )
                : null}
                              
    </div> );
}
 
export default QuotePageDescription;