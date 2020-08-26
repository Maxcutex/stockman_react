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
                <td className='div-table-col-header'>CLOSE </td>
                <td className='div-table-col-header'>CHANGE</td>
                <td className='div-table-col-header'>%CHANGE</td>
                <td className='div-table-col-header'>TRADE</td>
                <td className='div-table-col-header'>VOLUME</td>
                <td className='div-table-col-header'>VALUE</td>
            </tr>
        )
     }
      renderTableData = () => {
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
          return this.props.priceList.map( ({id, main_sector_name, sub_sector_name, price_list}) => (
            <tr key={id} >
                <td colSpan='11'>
                    <table className='div-inner-table'>
                        <tbody>
                            <tr className='div-table-sub-header'><td colSpan='11' className='td-column'> <strong>Main Sector</strong>: {main_sector_name} <strong>Sub Sector</strong>: {sub_sector_name}</td></tr>
                            {
                                price_list.map(({id, sec_code, price_date, price_close, x_open, x_high, x_low, price, 
                                offer_bid_sign, x_change, num_of_deals, volume, x_value, rpt, source, sync_flag, stock}) => {
                            //const { id, name, age, email } = student //destructuring
                                var format_x_change = parseFloat(x_change).toFixed(2);
                                var gain_loss = '';
                                var change_calc = 0.0
                                var x_pclose_formatted = (Math.round(parseFloat(price_close) * 100) / 100).toFixed(2)
                                var x_close_formatted = parseFloat(price).toFixed(2)
                                if (x_close_formatted >= x_pclose_formatted){
                                    gain_loss = 'gain'

                                } else {
                                    gain_loss = 'loss'
                                }
                                change_calc = parseFloat(x_close_formatted - x_pclose_formatted).toFixed(2);
                                gain_loss = 'div-table-col-close ' + gain_loss;
                                var percent = parseFloat((change_calc/x_pclose_formatted)*  100).toFixed(2);

                                //<tr className='div-table-sub-header'><td> Main Sector: {main_sector_name} Sub Sector: {sub_sector_name}</td></tr>
                                //
                                return(
                                <tr className='alternating' key={id}>
                                    <td className='div-table-col-close1'>{sec_code}</td>
                                    <td className='div-table-col-close'>{ x_pclose_formatted}</td>
                                    <td className='div-table-col-close'>{ parseFloat(x_open).toFixed(2)}</td>
                                    <td className='div-table-col-close'>{parseFloat(x_high).toFixed(2)}</td>
                                    <td className='div-table-col-close'>{parseFloat(x_low).toFixed(2)}</td>
                                    <td className={gain_loss}>{x_close_formatted}</td>
                                    <td className='div-table-col-close'>{change_calc}</td>
                                    <td className='div-table-col-close'>{percent}%</td>
                                    <td className='div-table-col-close'>{num_of_deals}</td>
                                    <td className='div-table-col-close' style={{ textAlign: 'right', paddingRight: '5px'}}>{numberWithCommas(volume)}</td>
                                    <td className='div-table-col-close' style={{ textAlign: 'right', paddingRight: '5px'}}>{numberWithCommas(x_value)}</td>
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