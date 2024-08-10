import React from 'react';
import Chart from 'react-apexcharts';
import { Spin } from 'antd';
import { useGetDataQuery } from '../redux/api/baseApi';

// Helper function to transform the sample data
const transformSampleData = (data) => {
  const sectors = {};
  const dates = new Set();

  // Transform sample data into chart series
  data.forEach(item => {
    const date = new Date(item.published);
    if (isNaN(date.getTime())) {
      console.warn('Skipping item due to invalid date:', item.published);
      return;
    }

    const dateString = date.toISOString().split('T')[0];
    dates.add(dateString);

    if (!sectors[item.sector]) {
      sectors[item.sector] = { name: item.sector, data: {} };
    }
    sectors[item.sector].data[dateString] = (sectors[item.sector].data[dateString] || 0) + item.relevance;
  });

  const categories = Array.from(dates).sort();
  const series = Object.values(sectors).map(sector => ({
    data: categories.map(date => sector.data[date] || 0)
  }));

  return { categories, series };
};





const MyAreaChart = () => {
  const { data: sampleData, isLoading } = useGetDataQuery();
  
  if (isLoading) {
    return <p></p>;
  }

  // Flatten the data if it is nested
  const flattenedData = sampleData.flat();
  
  // Transform the data for the chart
  const transformedData = transformSampleData(flattenedData);

  const options = {
    series: transformedData.series,
    chart: {
      height: 450,
      type: 'area',
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: transformedData.categories,
      labels: {
        rotate: -45
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#FF4560', '#00E396', '#008FFB'] // Customize colors
  };

  return (
    <div id="chart" style={{ width: '100%', height: '400px' }}>
      <Chart
        options={options}
        series={options.series}
        type="area"
        height={250}
      />
    </div>
  );
};

export default MyAreaChart;
