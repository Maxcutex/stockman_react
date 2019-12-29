import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCurrentDate} from '../../utils/utils';
import  PriceTable from '../../components/price-table/price-table';
import  SearchPrice  from '../../components/search-price/search-price';
import { fetchPriceList } from '../../actions/pricelistAction';
import Loader from '../../components/Loader/Loader';

class PriceListPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentDate: getCurrentDate('-'),
         }
    }

    componentDidMount(){
        this.props.fetchPriceList('2011-12-19');
    }

    render(){
         
        if (!this.props.priceList || this.props.isLoading) {
            return <Loader />;
        }
        return (
            <div>
            <h3>Price List as at {this.state.currentDate}</h3>
            <br />
            <SearchPrice date={this.state.currentDate} />
            <br />
            <PriceTable priceList={this.props.priceList}/>
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