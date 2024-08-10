import React from 'react';
import Chart from 'react-apexcharts';
import { Spin } from 'antd';
import { useGetDataQuery } from '../redux/api/baseApi';

// Helper function to transform the sample data
const transformData = (data) => {
  const sectors = {};

  // Aggregate relevance values by sector
  data.forEach(item => {
    if (item.sector) { // Ensure sector is defined
      if (!sectors[item.sector]) {
        sectors[item.sector] = 0;
      }
      sectors[item.sector] += item.relevance; // Sum relevance for each sector
    }
  });

  // Prepare data for chart
  const categories = Object.keys(sectors);
  const seriesData = Object.values(sectors);

  return { categories, seriesData };
};

const MyBarChart = () => {
  const { data: sampleData, isLoading } = useGetDataQuery();

  if (isLoading) {
    return <p></p>;
  }

  // Flatten the data if it is nested
  const flattenedData = sampleData.flat();
  
  // Transform the data for the chart
  const transformedData = transformData(flattenedData);

  const options = {
    series: [{
      name: 'Total Relevance',
      data: transformedData.seriesData
    }],
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      }
    },
    xaxis: {
      categories: transformedData.categories,
      title: {
        text: 'Sectors'
      }
    },
    yaxis: {
      title: {
        text: 'Total Relevance'
      }
    },
    title: {
      text: 'Relevance by Sector',
      align: 'center'
    },
    colors: ['#00E396'] 
  };

  return (
    <div id="chart" style={{ width: '100%', height: '400px' }}>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default MyBarChart;
