import React from 'react'
import { StockStatistics } from '../../types';
import './quotePageStatistics.styles.css'
import { SectionHeader } from './quotestatistics.styles';
export interface QuotePageValuationStatsProps {
    Statistics: StockStatistics
}
 
const QuotePageValuationStats: React.FC<QuotePageValuationStatsProps> = ({Statistics}) => {
    
    return ( <div>
        <SectionHeader>Key Statistics</SectionHeader>
         <table style={{
             'width': '100%'
         }}>
             <tbody>
                 
            <tr>
                <td>
                    <table className="tableClass">
                        <thead>
                        <tr>
                            <th colSpan={2}>Valuation</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PE Ratio</td>
                                <td>{Statistics.valuation.pe_ratio}</td>
                            </tr>
                            <tr>
                                <td>Net Asset Per Share</td>
                                <td>{Statistics.valuation.net_asset_per_share}</td>
                            </tr>
                            <tr>
                                <td>EPS</td>
                                <td>{Statistics.valuation.eps}</td>
                            </tr>
                            <tr>
                                <td>Dividend Yield</td>
                                <td>{Statistics.valuation.dividend_yield}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                <table className="tableClass">
                        <thead>
                            <tr>
                                <th colSpan={2}>Probability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PAT margin(%)</td>
                                <td>{Statistics.probability.pat_margin}</td>
                            </tr>
                            <tr>
                                <td>ROE(%)</td>
                                <td>{Statistics.probability.roe}</td>
                            </tr>
                            <tr>
                                <td>DPS</td>
                                <td>{Statistics.probability.dps}</td>
                            </tr>
                            <tr>
                                <td>Period</td>
                                <td>{Statistics.probability.period}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>

        </table>
   
    </div> );
}
 
export default QuotePageValuationStats;