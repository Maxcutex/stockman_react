import React, { useEffect, useState }  from 'react'
import './quotePageStatistics.styles.css'
import {   REQUEST_STATUSES, IStock, StockInfoTypeWithPrice } from '../../types'
import { getCompetitors } from '../../API/analysisStock';
import { SectionHeader } from './quotestatistics.styles';

 
const QuotePageKeyCompetitors: React.FC<IStock> = ({Stock}) => {
    const [
        stockInfo,
        setStockInfo,
    ] = useState<StockInfoTypeWithPrice[]>([]);
    const [status, setStatus] = useState<REQUEST_STATUSES>(
        REQUEST_STATUSES.IDLE
    );
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setStatus(REQUEST_STATUSES.LOADING);
        getCompetitors(Stock)
            .then(data => {
                setStockInfo(data);
                setStatus(REQUEST_STATUSES.SUCCESS);
            })
            .catch(error => {
                setStatus(REQUEST_STATUSES.ERROR);
                setError(error.message);
            });
    }, []);

      if (status === REQUEST_STATUSES.LOADING) {
        return <div>... LOADING ...</div>
      }

       if (status === REQUEST_STATUSES.ERROR) {
        return <div>Oops! There was an Error. Try refreshing the page</div>
      }

      if (status === REQUEST_STATUSES.SUCCESS && (stockInfo ===[] || stockInfo.length==0)) {
        return <div> No Record Found</div>
      }

      if (status === REQUEST_STATUSES.SUCCESS) {
        return ( 
            <div>
                <SectionHeader>Key Competitors</SectionHeader>
                <div>
                    <table className="tableClass">
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>%Change</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            stockInfo.map(stock=>(
                                <tr key={stock.stock_code}>
                                    <td>{stock.stock_code}</td>
                                    <td>{stock.price}</td>
                                    <td>{stock.change_data}</td>
                                    <td>{stock.market_data}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                        
                    </table>
                </div>
            </div>
         );
      }

      return null
    
}
 
export default QuotePageKeyCompetitors;