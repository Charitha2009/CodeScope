// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ title, data, colors }) => {
  const chartData = {
    labels: ['Used', 'Unused'],
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const label = context.label;
            return `${label}: ${value}%`; // Show "Used" or "Unused" with percentage
          },
        },
      },
      legend: {
        display: false, // Hides the legend for smaller charts
      },
    },
  };

  return (
    <div className="chart-item" style={{ width: '200px', height: '200px' }}>
      <h4>{title}</h4>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
