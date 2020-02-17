import React from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import CustomButton from '../custom-button/custom-button.component'
import './search-movement.styles.scss'
import Select from 'react-select';


class SearchMovement extends React.Component {
   
    render() { 
        // const techCompanies = [
        //     { label: 'Apple', value: 1 },
        //     { label: 'Facebook', value: 2 },
        //     { label: 'Netflix', value: 3 },
        //     { label: 'Tesla', value: 4 },
        //     { label: 'Amazon', value: 5 },
        //     { label: 'Alphabet', value: 6 },
        //   ];
        
            const stocks = this.props.stockList.map( stock => {
                return { 
                    'label':stock.stock_code,
                    'value':stock.id,
                }
            })
            
      
        return (  
        <div className='search-container'>
            <div className='search-content'>
                <form onSubmit={this.props.handleSubmit}>
                    <div className='col-sm-3'>
                        Select Stock
                    <Select options={ stocks }  name='selectedStock' onChange={this.props.handleChange} />
                    </div>
                    <div className='col-sm-3'>Start Date:  
                 
                        <DatePicker 
                            selected={this.props.startDate}
                            onChange={this.props.handleStartChange}
                            dateFormat="yyyy/MM/dd" name='startDate'
                            />

                    </div>
                    <div className='col-sm-3'>End Date:  
                 
                        <DatePicker
                            selected={this.props.endDate}
                            onChange={this.props.handleEndChange}
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
 
