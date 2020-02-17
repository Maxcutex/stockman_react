import React from 'react';
import dateFormat from 'dateformat';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Column2D from 'fusioncharts/fusioncharts.charts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const PriceMovementChart = ({priceMovementList, startDate, endDate}) => {
    const chartData = priceMovementList.map( price => {
        return {
            'label': price.price_date, 
            'value': price.price
        }
    });
    const formattedStartDate =  dateFormat(new Date(startDate), 'mmmm  d, yyyy') 
    const formattedEndDate =  dateFormat(new Date(endDate), 'mmmm  d, yyyy') 
    const chartConfigs = {
        type: 'line', // The chart type
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: `Price Movement Chart from [${formattedStartDate}] to [${formattedEndDate}]`,
            //Set the chart subcaption
            subCaption: 'In Naira with Kobo',
            //Set the x-axis name
            xAxisName: 'Dates',
            //Set the y-axis name
            yAxisName: 'Price (Naira)',
            numberPreffix: 'N',
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