import React, { useEffect, useState } from 'react';
import QuotePageComponent from '../quote-page-component/quotePageComponent';
import QuotePageComponentLower from '../quote-page-component/quotePageComponentLower';
import './quotePageAnalysis.styles.css';
import { stockAnalysisType, REQUEST_STATUSES, IStock } from '../../types';
import { useDataApi } from '../../hooks/useDataApi';
import { getCurrentAnalysis } from '../../API/analysisStock';

const QuotePageAnalysis: React.FC<IStock> = ({ Stock }) => {
    const [
        stockAnalysis,
        setstockAnalysis,
    ] = useState<stockAnalysisType | null>(null);
    const [status, setStatus] = useState<REQUEST_STATUSES>(
        REQUEST_STATUSES.IDLE
    );
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setStatus(REQUEST_STATUSES.LOADING);
        getCurrentAnalysis(Stock)
            .then(data => {
                setstockAnalysis(data);
                setStatus(REQUEST_STATUSES.SUCCESS);
            })
            .catch(error => {
                setStatus(REQUEST_STATUSES.ERROR);
                setError(error.message);
            });
    }, []);

    //   if (status === REQUEST_STATUSES.LOADING) {
    //     return <div>... LOADING ...</div>
    //   }

    return (
        <div>
            <div>
                {status === REQUEST_STATUSES.LOADING ? (
                    <div className="col-xs-12 loading-top">... LOADING ...</div>
                ) : (
                    <table className="col-xs-12">
                        <tbody>
                            <tr>
                                <td className="col-xas">
                                    <span>
                                        {stockAnalysis
                                            ? stockAnalysis.sec_code
                                            : ''}
                                    </span>
                                </td>
                                <td className="col-xas">
                                    <span className="priceValue">{stockAnalysis
                                            ? stockAnalysis.current_price
                                            : ''}</span>
                                    <span className="ngn">NGN</span>
                                </td>
                                <td className="col-xas">
                                    <QuotePageComponent
                                        topText={'OPEN'}
                                        bottomText={
                                            stockAnalysis
                                                ? stockAnalysis.previous_price
                                                : undefined
                                        }
                                    />
                                </td>
                                <td className="col-xas">
                                    <QuotePageComponent
                                        topText={'DAY RANGE'}
                                        bottomText={stockAnalysis
                                            ? stockAnalysis.today_day_range
                                            : undefined}
                                    />
                                </td>
                                <td className="col-xas">
                                    <QuotePageComponent
                                        topText={'52 WEEK RANGE'}
                                        bottomText={stockAnalysis
                                            ? stockAnalysis.today_52_week_range
                                            : undefined}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="col-xas">
                                    <QuotePageComponentLower
                                        mainText={stockAnalysis
                                            ? stockAnalysis.previous_price
                                            : undefined}
                                        lowerText={'Previous Price'}
                                    />
                                </td>
                                <td className="col-xas">
                                    <QuotePageComponentLower
                                        mainText={stockAnalysis
                                            ? stockAnalysis.today_sign  + stockAnalysis.today_change + '%'
                                            : undefined}
                                        lowerText={"Today's Change"}
                                    />
                                </td>
                                <td className="col-xas">
                                    <QuotePageComponentLower
                                        mainText={stockAnalysis
                                            ?  (stockAnalysis.today_volume/1000000).toFixed(2)  + ' M'
                                            : undefined}
                                        lowerText={'Shares traded'}
                                    />
                                </td>
                                <td className="col-xas">
                                    <QuotePageComponentLower
                                        mainText={'-33.44%'}
                                        lowerText={'1 year Change'}
                                    />
                                </td>
                                <td className="col-xas">
                                    <QuotePageComponentLower
                                        mainText={'+1.4%'}
                                        lowerText={'YTD'}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default QuotePageAnalysis;
