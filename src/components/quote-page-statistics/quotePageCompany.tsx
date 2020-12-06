import * as React from 'react';
import { StockStatistics } from '../../types';
export interface QuotePageCompanyStatisticsProps {
    Statistic: StockStatistics 
}
 
const QuotePageCompanyStatistics: React.FC<QuotePageCompanyStatisticsProps> = ({Statistic}) => {
    return ( <div>
        <table  style={{
             'width': '100%'
         }}>
            <tbody>
            <tr>
                <td>
                    <table className="tableClass">
                        <thead>
                         <tr>
                            <th colSpan={2}>Company Statistics</th>
                        </tr>   
                        </thead>
                        
                        <tbody>
                        <tr>
                            <td>Registrars</td>
                            <td> {Statistic.company_statistics.registrars} </td>
                        </tr>
                        <tr>
                            <td>Listing Date:</td>
                            <td> {Statistic.company_statistics.listing_date}  </td>
                        </tr>
                        <tr>
                            <td>Year End</td>
                            <td> {Statistic.company_statistics.year_end}  </td>
                        </tr>
                        <tr>
                            <td>Share Outstanding</td>
                            <td> {Statistic.company_statistics.share_outstanding        }  </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                <table className="tableClass">
                        
                       <thead>
                            <tr>
                                <th colSpan={2}>KPI</th>
                            </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <td>Turnover Growth (%)</td>
                                <td>{Statistic.kpi.turnover_growth} </td>
                            </tr>
                            <tr>
                                <td>PAT Growth (%)</td>
                                <td>{Statistic.kpi.pat_growth} </td>

                            </tr>
                            <tr>
                                <td>Net Assets Growth (%)</td>
                                <td>{Statistic.kpi.net_assets_growth} </td>

                            </tr>
                            <tr>
                                <td>Assets Growth (%)</td>
                                <td>{Statistic.kpi.assets_growth} </td>

                            </tr>
                       </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    </div> );
}
 
export default QuotePageCompanyStatistics;