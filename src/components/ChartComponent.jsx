// ChartComponent.js
import React from 'react';
import MyAreaChart from './MyAreaChart';
import MyBarChart from './MyBarChart';
import MyPieChart from './MyPieChart';
import MyPyramidChart from './MyPyramidChart';


const ChartComponent = () => {
  return (
    <div>
      <h1 className='text-start text-3xl mt-12 font-bold ms-4'>Charts Result</h1>
      <div className='grid grid-cols-1'>
        <MyAreaChart />
        <MyPyramidChart />
        <div className='grid lg:grid-cols-2'>
          <MyBarChart />
          <MyPieChart />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
