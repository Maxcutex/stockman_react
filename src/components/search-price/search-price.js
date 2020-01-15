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
                    <div>Search Price List By Date</div>

                    <div>Date:  
                 
                        <DatePicker
                            selected={this.props.date}
                            onChange={this.props.handleChange}
                            
                            dateFormat="yyyy/MM/dd"
                            />
                        <CustomButton type="submit" value="Submit">Get Price List </CustomButton>

                    </div>
                </form>
            </div>
           
        </div>);
    }
}
 
export default SearchPrice;
 
