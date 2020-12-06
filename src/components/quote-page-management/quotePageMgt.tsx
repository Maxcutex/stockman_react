import React, {useState , useEffect} from 'react';
import { getStockManagement, } from '../../API/analysisStock';
import {StyledCounter} from './quotePageManagement.styles';
import './quotePageCss.css' 
import {  REQUEST_STATUSES, IStockManagement, StockManagementType } from '../../types'
import { TableStyles } from '../common/genericStyles';
import { Table } from '../table/table';
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

      const columns = React.useMemo(
        () => [
          {
            Header: typeManagement,
            columns: [
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'Position',
                accessor: 'position',
              },
            ],
          },
         
        ],
        []
      )
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
                        <div>
                        <TableStyles>
                            <Table columns={columns} data={stockManagement} tableClass="tableClass" />
                        </TableStyles>
                       

                        </div>
                    </div>
                )
                : null}
                              
    </div> );
}
 
export default QuotePageMgt;