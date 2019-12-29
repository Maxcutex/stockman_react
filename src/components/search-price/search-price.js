import React from 'react';
import DatePicker from 'react-date-picker';


class SearchPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: props.date,
         }
    }
    onChange = date => this.setState({ date })
    render() { 
        return (  
        <div>
            <div>Search Price List By Date</div>
            <div>
                <div>Date: <DatePicker
                                    onChange={this.onChange}
                                    value={this.state.date}
                                    /> 
                </div>
            </div>
            
        </div>);
    }
}
 
export default SearchPrice;
 
