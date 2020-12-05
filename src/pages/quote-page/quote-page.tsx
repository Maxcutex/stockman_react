// import React from 'react';
// import { connect } from 'react-redux';
// import parse from 'html-react-parser';
// import { fetchNewsById } from '../../actions/newsSingleAction';
// import SidePageOne from '../../components/side-page-one/side-page-one';
// import Loader from '../../components/Loader/Loader';
import React, { useState, useEffect} from 'react';
import { config } from '../../config';
import axios from 'axios';
import SidePageOne from '../../components/side-page-one/side-page-one';
import parse from 'html-react-parser';
import QuotePageAnalysis from '../../components/quote-page-analysis/quotePageAnalysis';
import QuotePageChart from '../../components/quote-page-chart/quotePageChart';
import QuotePageStatistics from '../../components/quote-page-statistics/quotePageStatistics';
import QuotePageDescription from '../../components/quote-page-description/quotePageDescription';
import { match } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';
import { TParams } from '../../types';
import QuotePageManagement from '../../components/quote-page-management/quotePageManagement';
const initialState = {
    quote: null
}
type QuotePageProps = RouteComponentProps<TParams>;


const QuotePage: React.FC<QuotePageProps> = ({match}) => {
    const {stock_code} = match.params;
   
    return (  
        <section className='bg-white section-xs-type-1'>
            <div className='shell'>
                <div className='range range-center range-50'>
                    <div className='cell-md-9 cell-lg-9'>
                        <ul className="breadcrumb-custom-type-1">
                            <li><a href="/">Home  </a></li>
                            <li> Quote </li>
                            <li> {stock_code} </li> 
                        </ul>
                        <div className="post-content">
                            <QuotePageAnalysis Stock={stock_code}/>
                            <div style={{clear: "both"}}></div>
                            <QuotePageChart Stock={stock_code}/>
                            <div style={{clear: "both"}}></div>
                            <QuotePageStatistics Stock={stock_code}/>
                            <div style={{clear: "both"}}></div>
                            <QuotePageDescription Stock={stock_code}/>
                            <div style={{clear: "both"}}></div>
                            <QuotePageManagement Stock={stock_code}/>
                            <br/>
                        </div>
                    </div>
                    <div className='cell-md-3'>
                        <SidePageOne />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default withRouter(QuotePage);