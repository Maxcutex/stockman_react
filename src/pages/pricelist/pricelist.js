import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCurrentDate} from '../../utils/utils';
import  PriceTable from '../../components/price-table/price-table';
import SidePageOne from '../../components/side-page-one/side-page-one';
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
            firstSearch: false, 
            
         }
    }

    componentDidMount(){
        this.props.fetchPriceList(`${this.state.currentDate}`);
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log('we are here now');
        const formattedDate =  dateFormat(new Date(this.state.dateFull), 'yyyy-mm-dd') 
        // console.log(formattedDate);
        this.props.fetchPriceList(formattedDate);
        this.setState({ firstSearch: true });
        this.setState({ currentDate: formattedDate });
    }
    handleChange = event => {
        //const { value, name } = event.target;
        this.setState({ dateFull: event });
        //this.setState({ currentDate: dateFormat(new Date(event), 'yyyy-mm-dd') });
         

    }
    render(){
        const container = {
            
            paddingTop: '10px', marginLeft:'-10px', fontSize:'12px',
          };
        if (!this.props.priceList || this.props.isLoading) {
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
                                <li> PriceList </li>
                                
                              </ul>
                              <div className="post-content">
                
                                <h4>Price List as at {this.state.currentDate}</h4>
                
                                <br />
                                <SearchPrice date={this.state.dateFull}  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                                <br />
                                <br/>
                                <div className='col-sm-12' style={container}>
                                  {
                                    this.state.firstSearch ? 
                                    this.props.priceList.length ?   <PriceTable priceList={this.props.priceList}/> : <NotFound />
                                    : 'Kindly search for pricelist to view data'
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
PriceListPage.propTypes = {};

const mapStateToProps = state => ({
    priceList: state.pricelist.priceList,
    isLoading: state.pricelist.priceListLoading,
});

export default connect(mapStateToProps, { fetchPriceList })(
    PriceListPage
);