import React from 'react';
import Chart from 'react-apexcharts';

// Sample data extracted and transformed from your provided JSON
const sampleData = [
  {
    "end_year": "",
    "intensity": 6,
    "sector": "Energy",
    "topic": "gas",
    "insight": "Annual Energy Outlook",
    "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    "region": "Northern America",
    "start_year": "",
    "impact": "",
    "added": "January, 20 2017 03:51:25",
    "published": "January, 09 2017 00:00:00",
    "country": "United States of America",
    "relevance": 2,
    "pestle": "Industries",
    "source": "EIA",
    "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
    "likelihood": 3
  },
  {
    "end_year": "",
    "intensity": 6,
    "sector": "Energy",
    "topic": "oil",
    "insight": "Annual Energy Outlook",
    "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    "region": "Northern America",
    "start_year": "",
    "impact": "",
    "added": "January, 20 2017 03:51:24",
    "published": "January, 09 2017 00:00:00",
    "country": "United States of America",
    "relevance": 2,
    "pestle": "Industries",
    "source": "EIA",
    "title": "Reference case U.S. crude oil production is projected to recover from recent declines.",
    "likelihood": 3
  },
  {
    "end_year": "",
    "intensity": 6,
    "sector": "Environment",
    "topic": "oil",
    "insight": "WRI Partnership Aims to Foster Supply Chain Transparency, Zero-Deforestation Strategies",
    "url": "http://www.sustainablebrands.com/news_and_views/supply_chain/sustainable_brands/wri_partnership_aims_foster_supply_chain_transparency",
    "region": "Central America",
    "start_year": "",
    "impact": "",
    "added": "January, 20 2017 03:26:40",
    "published": "January, 18 2017 00:00:00",
    "country": "Mexico",
    "relevance": 3,
    "pestle": "Environmental",
    "source": "sustainablebrands.com",
    "title": "Mars, Unilever, Cargill and Mondelēz are already using GFW Commodities to assess deforestation risks in their palm oil, soy and cocoa supply chains across a collective area of land the size of Mexico.",
    "likelihood": 2
  }
];

// Helper function to transform the sample data for pie chart
const transformPieData = (data) => {
  const sectors = {};

  data.forEach(item => {
    if (!sectors[item.sector]) {
      sectors[item.sector] = 0;
    }
    sectors[item.sector] += item.intensity;
  });

  return {
    labels: Object.keys(sectors),
    series: Object.values(sectors)
  };
};

const MyPieChart = () => {
  const transformedData = transformPieData(sampleData);

  const options = {
    series: transformedData.series,
    chart: {
      type: 'pie',
      height: 350
    },
    labels: transformedData.labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    colors: ['#FF4560', '#00E396', '#008FFB'] // Customize colors
  };

  return (
    <div id="chart" style={{ width: '100%', height: '400px' }}>
      <Chart
        options={options}
        series={options.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default MyPieChart;
