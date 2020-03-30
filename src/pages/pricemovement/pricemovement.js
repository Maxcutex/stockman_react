import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCurrentDate} from '../../utils/utils';
import SidePageOne from '../../components/side-page-one/side-page-one';

import  SearchMovement from '../../components/search-movement/search-movement';
import  PriceMovementChart from '../../components/charts/price-movement-chart/price-movement-chart';
import { fetchAllStockList, fetchPriceMovement } from '../../actions/stockAction';
import Loader from '../../components/Loader/Loader';
import './pricemovement-styles.scss'
import dateFormat from 'dateformat';

class PriceMovementPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentDate: getCurrentDate('-'),
            startDate: new Date(`${getCurrentDate('-')}`),
            endDate: new Date(`${getCurrentDate('-')}`),
            selectedStock: 0, isPriceMovementSubmitted: false,
         }
    }

    componentDidMount(){
        this.props.fetchAllStockList();
    }
    

    handleSubmit = async event => {
        event.preventDefault();
        const {selectedStock, startDate, endDate} = this.state;
        const formattedStartDate =  dateFormat(new Date(startDate), 'yyyy-mm-dd') 
        const formattedEndDate =  dateFormat(new Date(endDate), 'yyyy-mm-dd') 
        await this.props.fetchPriceMovement(selectedStock, formattedStartDate, formattedEndDate);
        
        this.setState( {isPriceMovementSubmitted: !this.props.priceMovementLoading } );
    }
    
    handleChange = (e, element) => {
        switch (element) {
            case 'startDate':
                this.setState({ startDate: e });
                break;
            case 'endDate':
                this.setState({ endDate: e });
                break;
            case 'stockName':
                this.setState({ selectedStock: e.value});
                break;
            default:
                break;
        }
    }
    render(){
         
        if (!this.props.stockList || this.props.stocksLoading) {
            return <Loader />;
        }
        
        //const formattedDate = new Date(this.state.currentDate).toLocaleDateString();
        return (
            
            <div>
            <section className='bg-white section-xs-type-1'>
                <div className='shell'>
                    <div className='range range-center range-50'>
                        <div className='cell-md-9 cell-lg-9'>
                          <ul className="breadcrumb-custom-type-1">
                            <li><a href="/">Home  </a></li>
                            <li> Stock Price Analysis </li>
                            
                          </ul>
                          <div className="post-content">
            
                            <h4>Stock Price Analysis</h4>
            
                            {
                                this.props.stockList.length ? 
                                <SearchMovement 
                                stockList={this.props.stockList} 
                                startDate={this.state.startDate} 
                                endDate={this.state.endDate} 
                                handleChange={this.handleChange}  
                                handleSubmit={this.handleSubmit} />
                                : ''
                            }
                            <br />
                            <div className='col-sm-12'>
                              {
                                this.state.isPriceMovementSubmitted ? 
                                 this.props.priceMovementList.length ?  
                                  <PriceMovementChart startDate={this.state.startDate} 
                                  endDate={this.state.endDate}  priceMovementList={this.props.priceMovementList}/> : ''
                                 : ''
                              }
                            </div>
                            
                            
                            <br/>
                          </div>
                        </div>
                        <div className='cell-md-3'>
                          <SidePageOne />
                        </div>
                    </div>
                </div>
                
            </section>
        
        </div>
        );
        }
}
PriceMovementPage.propTypes = {};

const mapStateToProps = state => ({
    stockList: state.stockList.stockList,
    stocksLoading: state.stockList.stocksLoading,
    priceMovementList: state.priceMovementList.priceMovementList,
    priceMovementLoading: state.priceMovementList.priceMovementLoading,
});

export default connect(mapStateToProps, { fetchPriceMovement,fetchAllStockList })(
    PriceMovementPage
);