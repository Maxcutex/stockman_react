import React, {useState , useEffect} from 'react';
import { getStockManagement, } from '../../API/analysisStock';
import {  REQUEST_STATUSES, IStockManagement, StockManagementType } from '../../types'
const QuotePageMgt : React.FC<IStockManagement> = ({Stock, ManagementType}) =>  {
    const [stockManagement, setStockManagement] = useState<StockManagementType[] | null>(null)
    const [status, setStatus] = useState<REQUEST_STATUSES>(REQUEST_STATUSES.IDLE)
    const [error, setError] = useState<string>('')
    const typeManagement = ManagementType == "management"? "Management": "Board"
    useEffect(() => {
        
        setStatus(REQUEST_STATUSES.LOADING)
        getStockManagement(Stock, ManagementType)
        .then((data) => {
            setStockManagement(data)
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

            {status === REQUEST_STATUSES.SUCCESS && stockManagement ===undefined? (
                <div>No Record Found</div>
            ) : null}

            {status === REQUEST_STATUSES.SUCCESS && stockManagement!==null
                ? (
                    <div>
                        <div>Header</div>
                        <div>
                        <table>
                        <thead>
                        <tr>
                            <th colSpan={2}>{typeManagement}</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                stockManagement.map(
                                    (stock) => {
                                        <tr>
                                            <td>{stock.name}</td>
                                            <td>{stock.position}</td>
                                        </tr>
                                    }
                                )
                            }
                            
                            
                        </tbody>
                    </table>

                        </div>
                    </div>
                )
                : null}
                              
    </div> );
}
 
export default QuotePageMgt;