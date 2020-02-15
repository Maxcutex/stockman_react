import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCurrentDate} from '../../utils/utils';
import  PriceTable from '../../components/price-table/price-table';
import  NotFound from '../../components/not-found/not-found';
import  SearchMovement from '../../components/search-movement/search-movement';
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
            selectedStockId: null
         }
    }

    componentDidMount(){
        this.props.fetchAllStockList(`${this.state.currentDate}`);
    }
    

    handleSubmit = event => {
        event.preventDefault();
        const {selectedStockId, startDate, endDate} = this.state;
        this.props.fetchPriceMovement(selectedStockId, startDate, endDate);
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ dateFull: event });

    }
    render(){
         
        if (!this.props.stockList || this.props.stocksLoading) {
            return <Loader />;
        }
        //const formattedDate = new Date(this.state.currentDate).toLocaleDateString();
        return (
            <div>
            <div className='price-movement-page-title-header'>Stock Price Movement</div>
            <br />
            <SearchMovement startDate={this.state.startDate} endDate={this.state.endDate} handleChange={this.handleChange}  handleSubmit={this.handleSubmit} />
            <br />
            {
            //   this.props.priceList.length ?   <PriceTable priceList={this.props.priceList}/> : <NotFound />
            }
            
            <br/>
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