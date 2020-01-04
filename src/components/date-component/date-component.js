import React from 'react';

import DatePicker from 'react-datepicker'

const DateComponent = ({date}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="yyyy/MM/dd" />
    );
  }
 
export default DateComponent;