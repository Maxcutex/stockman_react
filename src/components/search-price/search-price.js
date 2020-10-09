import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import './search_price.styles.scss'



class SearchPrice extends React.Component {
   
    render() { 
        return (  
        <div className='search-container'>
            <div className='search-content'>
                <form onSubmit={this.props.handleSubmit}>
                    <div className='col-sm-3'>Search Price List By Date</div>

                    <div className='col-sm-8'>
                        <div style={{float:'left', marginRight: '5px'}}>Date:</div>  
                        <div style={{float:'left', marginRight: '5px'}}><DatePicker
                            selected={this.props.date}
                            onChange={this.props.handleChange}
                            
                            dateFormat="yyyy/MM/dd"
                            /></div>
                        <div style={{float:'left', marginRight: '5px;'}}><button type="submit" value="Submit">Get Price List </button></div>
                        

                    </div>
                    <div className='col-sm-3'></div>
                </form>
            </div>
           
        </div>);
    }
}
 
export default SearchPrice;
 
