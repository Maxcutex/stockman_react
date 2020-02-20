import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import CustomButton from '../custom-button/custom-button.component'
import './search-movement.styles.scss'
import Select from 'react-select';


class SearchMovement extends React.Component {
   
    render() { 
       
        
            const stocks = this.props.stockList.map( stock => {
                return { 
                    'label':stock.stock_code,
                    'value':stock.id,
                }
            })
            
        const {handleChange}= this.props;
        return (  
        <div className='search-container'>
            <div className='search-content'>
                <form onSubmit={this.props.handleSubmit}>
                    <div className='col-sm-3'>
                        Select Stock
                    <Select options={ stocks }  name='selectedStock' onChange={(e) => handleChange(e, 'stockName')} />
                    </div>
                    <div className='col-sm-3'>Start Date:  
                 
                        <DatePicker 
                            selected={this.props.startDate}
                            onChange={(e) => handleChange(e, 'startDate')}
                            dateFormat="yyyy/MM/dd" name='startDate'
                            />

                    </div>
                    <div className='col-sm-3'>End Date:  
                 
                        <DatePicker
                            selected={this.props.endDate}
                            onChange={(e) => handleChange(e, 'endDate')}
                            dateFormat="yyyy/MM/dd" name='endDate'
                            />

                    </div >
                    <div className='col-sm-3'>
                        <CustomButton type="submit" value="Submit">Get Chart </CustomButton>

                    </div>

                </form>
            </div>
           
        </div>);
    }
}
 
export default SearchMovement;
 
