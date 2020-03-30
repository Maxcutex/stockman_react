import React from 'react';
import PriceAnalysisTable from '../../components/price-analysis-table/price-analysis-table';
import SidePageOne from '../../components/side-page-one/side-page-one'

const PriceAnalysisPage = () => {
    

    return (<section className='bg-white section-xs-type-1'>
    <div className='shell'>
        <div className='range range-center range-50'>
            <div className='cell-md-9 cell-lg-9'>
            <ul className="breadcrumb-custom-type-1">
                <li><a href="/">Home  </a></li>
                <li> Market </li>
                <li> Price Analysis </li> 
            </ul>
            <div className="post-content">
            <PriceAnalysisTable />
                
                
                <br/>
            </div>
            </div>
            <div className='cell-md-3'>
            <SidePageOne />
            </div>
        </div>
    </div>
</section>
  );
}
 
export default PriceAnalysisPage;