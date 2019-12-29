import React from 'react';
import './price-table.styles.scss'
const PriceTable = ({ priceList }) => {
    return ( 
        <div>
            <div className='div-table'>
                
                <div className='price-table-header price-row div-table-header'>
                    <div className='div-table-col-header'>SYMBOL</div>
                    <div className='div-table-col-header'>PCLOSE</div>
                    <div className='div-table-col-header'>OPEN</div>
                    <div className='div-table-col-header'>HIGH</div>
                    <div className='div-table-col-header'>LOW</div>
                    <div className='div-table-col-header'>CLOSE PRICE</div>
                    <div className='div-table-col-header'>CHANGE</div>
                    <div className='div-table-col-header'>%CHANGE</div>
                    <div className='div-table-col-header'>TRADE</div>
                    <div className='div-table-col-header'>VOLUME</div>
                    <div className='div-table-col-header'>VALUE</div>
                </div>
                
                {
                    
                    priceList.map( ({id, main_sector_name, sub_sector_name, price_list}) => (
                       
                            
                        <div key={id}>   
                        <div className='div-table-sub-header'> Main Sector: {main_sector_name} Sub Sector: {sub_sector_name}</div>
                        {
                            price_list.map(({id, sec_code, price_date, price_close, x_open, x_high, x_low, price, 
                                offer_bid_sign, x_change, num_of_deals, volume, x_value, rpt, source, sync_flag, stock}) => (
                                <div className='div-table-row' key={id}>
                                    <div className='div-table-col'>{sec_code}</div>
                                    <div className='div-table-col'>{price_close}</div>
                                    <div className='div-table-col'>{x_open}</div>
                                    <div className='div-table-col'>{x_high}</div>
                                    <div className='div-table-col'>{x_low}</div>
                                    <div className='div-table-col-close'>{price}</div>
                                    <div className='div-table-col'>{x_change}</div>
                                    <div className='div-table-col'>{x_change}</div>
                                    <div className='div-table-col'>{num_of_deals}</div>
                                    <div className='div-table-col'>{volume}</div>
                                    <div className='div-table-col'>{x_value}</div>
                                </div>
                            ))
                        }
                        </div>
                        
                        
                        
                    ))
                    
                    
                }
               
                 
            </div>
        </div>
     );
}
 
export default PriceTable;