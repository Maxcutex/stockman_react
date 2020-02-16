import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import CustomButton from '../custom-button/custom-button.component'
import './search_price.styles.scss'



class SearchPrice extends React.Component {
   
    render() { 
        return (  
        <div className='search-container'>
            <div className='search-content'>
                <form onSubmit={this.props.handleSubmit}>
                    <div className='col-sm-3'>Search Price List By Date</div>

                    <div className='col-sm-3'>Date:  
                 
                        <DatePicker
                            selected={this.props.date}
                            onChange={this.props.handleChange}
                            
                            dateFormat="yyyy/MM/dd"
                            />
                        

                    </div>
                    <div className='col-sm-3'><CustomButton type="submit" value="Submit">Get Price List </CustomButton></div>
                </form>
            </div>
           
        </div>);
    }
}
 
export default SearchPrice;
 
