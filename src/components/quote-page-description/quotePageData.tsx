import React from 'react'
import { StockInfoType } from '../../types'
import parse from 'html-react-parser';

export interface Props {
    Stock: StockInfoType
}
 
const QuotePageData: React.FC<Props> = ({Stock}) => {
    return (  <div>
        <h2>{Stock.stock_code} </h2>
        <div></div>
        {parse(`${Stock.description}`)}
        <div>
            Website: {Stock.website} <br />
            Email: {Stock.email}
        </div>
    </div>);
}
 
export default QuotePageData;