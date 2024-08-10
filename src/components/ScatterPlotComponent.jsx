// ScatterPlotComponent.js
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { useGetDataQuery } from '../redux/api/baseApi';
import { Spin } from 'antd';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ScatterPlotComponent = () => {
  // Extract data for the chart
  const { data, isLoading } = useGetDataQuery();
  if (isLoading) {
    return <p></p>;
  }
  
  const scatterData = data.map(item => ({
    x: item.likelihood,
    y: item.relevance,
    r: item.intensity,
  }));

  const chartData = {
    labels: data.map(item => item.topic),
    datasets: [
      {
        label: 'Scatter Plot',
        data: scatterData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Scatter Plot of Likelihood vs Relevance',
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Likelihood',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Relevance',
        },
      },
    },
  };

  return <Scatter data={chartData} options={options} />;
};

export default ScatterPlotComponent;
