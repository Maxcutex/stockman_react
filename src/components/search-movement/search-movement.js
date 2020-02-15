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
        return (  
        <div className='search-container'>
            <div className='search-content'>
                <form onSubmit={this.props.handleSubmit}>
                    <div>Get Price Movement of Stock</div>
                    <div>
                    <Select options={ this.props.stocks }  onChange={this.props.handleChange}/>
                    </div>
                    <div>Start Date:  
                 
                        <DatePicker
                            selected={this.props.startDate}
                            onChange={this.props.handleChange}
                            dateFormat="yyyy/MM/dd"
                            />

                    </div>
                    <div>End Date:  
                 
                        <DatePicker
                            selected={this.props.endDate}
                            onChange={this.props.handleChange}
                            dateFormat="yyyy/MM/dd"
                            />

                    </div>
                    <div>
                        <CustomButton type="submit" value="Submit">Get Price Movement </CustomButton>

                    </div>

                </form>
            </div>
           
        </div>);
    }
}
 
export default SearchMovement;
 
