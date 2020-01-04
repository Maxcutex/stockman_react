import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCurrentDate} from '../../utils/utils';
import  PriceTable from '../../components/price-table/price-table';
import  NotFound from '../../components/not-found/not-found';
import  SearchPrice  from '../../components/search-price/search-price';
import { fetchPriceList } from '../../actions/pricelistAction';
import Loader from '../../components/Loader/Loader';
import './pricelist-styles.scss'
import dateFormat from 'dateformat';

class PriceListPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentDate: getCurrentDate('-'),
            dateFull: new Date(`${getCurrentDate('-')}`),
         }
    }

    componentDidMount(){
        this.props.fetchPriceList(`${this.state.currentDate}`);
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('we are here now');
        const formattedDate =  dateFormat(new Date(this.state.dateFull), 'yyyy-mm-dd') 
        console.log(formattedDate);
        this.props.fetchPriceList(formattedDate);
    }
    handleChange = event => {
        //const { value, name } = event.target;
        this.setState({ dateFull: event });
        console.log(event);

    }
    render(){
         
        if (!this.props.priceList || this.props.isLoading) {
            return <Loader />;
        }
        //const formattedDate = new Date(this.state.currentDate).toLocaleDateString();
        return (
            <div>
            <div className='price-page-title-header'>Price List as at {this.state.currentDate}</div>
            <br />
            <SearchPrice date={this.state.dateFull}  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <br />
            {
              this.props.priceList.length ?   <PriceTable priceList={this.props.priceList}/> : <NotFound />
            }
            
            <br/>
            </div>
        );
        }
}
PriceListPage.propTypes = {};

const mapStateToProps = state => ({
    priceList: state.pricelist.priceList,
    isLoading: state.pricelist.priceListLoading,
});

export default connect(mapStateToProps, { fetchPriceList })(
    PriceListPage
);