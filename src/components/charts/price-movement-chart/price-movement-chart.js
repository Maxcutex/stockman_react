import React from 'react';
import ReactDOM from 'react-dom';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Column2D from 'fusioncharts/fusioncharts.charts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const PriceMovementChart = ({priceMovementList}) => {
    const chartData = priceMovementList.map( price => {
        return {
            'label': price.price_date, 
            'value': price.price
        }
    });
    console.log(chartData);
    const chartConfigs = {
        type: 'column2d', // The chart type
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: 'Price Movement Chart from [] to []',
            //Set the chart subcaption
            subCaption: 'In MMbbl = One Million barrels',
            //Set the x-axis name
            xAxisName: 'Country',
            //Set the y-axis name
            yAxisName: 'Reserves (MMbbl)',
            numberSuffix: 'K',
            //Set the theme for your chart
            theme: 'fusion'
          },
          // Chart Data
          data: chartData
        }
      };

    
    return ( <ReactFC {...chartConfigs} /> );
}
 
export default PriceMovementChart;