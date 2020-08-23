import React, { Component} from 'react';
import './price-table.styles.scss'
class PriceTable  extends Component{
    
     renderTableHeader() {
        return (
            <tr className='price-table-header price-row '>
                <td className='div-table-col-header'>SYMBOL</td>
                <td className='div-table-col-header'>PCLOSE</td>
                <td className='div-table-col-header'>OPEN</td>
                <td className='div-table-col-header'>HIGH</td>
                <td className='div-table-col-header'>LOW</td>
                <td className='div-table-col-header'>CLOSE PRICE</td>
                <td className='div-table-col-header'>CHANGE</td>
                <td className='div-table-col-header'>%CHANGE</td>
                <td className='div-table-col-header'>TRADE</td>
                <td className='div-table-col-header'>VOLUME</td>
                <td className='div-table-col-header'>VALUE</td>
            </tr>
        )
     }
      renderTableData = () => {
          return this.props.priceList.map( ({id, main_sector_name, sub_sector_name, price_list}) => (
            <tr key={id} >
                <td colSpan='11'>
                    <table className='div-inner-table'>
                        <tbody>
                            <tr className='div-table-sub-header'><td colSpan='11' className='td-column'> Main Sector: {main_sector_name} Sub Sector: {sub_sector_name}</td></tr>
                            {
                                price_list.map(({id, sec_code, price_date, price_close, x_open, x_high, x_low, price, 
                                offer_bid_sign, x_change, num_of_deals, volume, x_value, rpt, source, sync_flag, stock}) => {
                            //const { id, name, age, email } = student //destructuring
                            var format_x_change = parseFloat(yourString).toFixed(2);
                                //<tr className='div-table-sub-header'><td> Main Sector: {main_sector_name} Sub Sector: {sub_sector_name}</td></tr>
                                //
                                return(
                                <tr key={id}>
                                    <td className='div-table-col-close1'>{sec_code}</td>
                                    <td className='div-table-col-close1'>{price_close}</td>
                                    <td className='div-table-col-close1'>{x_open}</td>
                                    <td className='div-table-col-close1'>{x_high}</td>
                                    <td className='div-table-col-close1'>{x_low}</td>
                                    <td className='div-table-col-close'>{price}</td>
                                    <td className='div-table-col-close1'>{format_x_change}</td>
                                    <td className='div-table-col-close1'>{format_x_change}</td>
                                    <td className='div-table-col-close1'>{num_of_deals}</td>
                                    <td className='div-table-col-close1'>{volume}</td>
                                    <td className='div-table-col-close1'>{x_value}</td>
                                </tr> 
                                )
                                
                            
                                })
                            }
                        </tbody>
                    </table> 
                </td>
            </tr>
          ))
        
     }
  
    render(){
        const {priceList} = this.props;
        return ( 
            <div>
                <table className='div-table'>
                    <tbody>
                    {this.renderTableHeader()}
                     
                    {this.renderTableData(priceList)}
                   
                   </tbody>
                </table>
            </div>
         );
    }
}
 
export default PriceTable;