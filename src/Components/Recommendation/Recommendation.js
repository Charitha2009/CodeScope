// Recommendation.js
import React from 'react';
import { getAnalysisData } from './AnalysisData'; // Import the analysis data logic
import PieChart from './PieChart'; // Import the PieChart component

const Recommendation = ({ formData }) => {
  const analysisText = getAnalysisData(formData);

  const chartConfigs = [
    {
      title: "Execution Time",
      data: analysisText.chartData.executionTime,
      colors: ['#FF9999', '#FFCCCC'],
    },
    {
      title: "CPU Utilization",
      data: analysisText.chartData.cpuUtilization,
      colors: ['#99CCFF', '#CCE5FF'],
    },
    {
      title: "Throughput",
      data: analysisText.chartData.throughput,
      colors: ['#FFDD99', '#FFE5CC'],
    },
    {
      title: "Data Rate",
      data: analysisText.chartData.dataRate,
      colors: ['#99FF99', '#CCFFCC'],
    },
  ];

  return (
    <div className="recommendation">
      <h3>Analysis</h3>
      <ul>
        <li><b>Algorithm:</b> {formData.algorithm || "N/A"}</li>
        <li><b>Data Size:</b> {formData.dataSizeOption || "N/A"}</li>
        <li><b>Number of CPUs:</b> {formData.cpusPerWorker || "N/A"}</li>
        <li><b>Instance Type:</b> {formData.instance || "N/A"}</li>
      </ul>

      <h4>1. Execution Time</h4>
      <p>{analysisText.executionTime}</p>
      <PieChart 
        title="Execution Time" 
        data={chartConfigs[0].data} 
        colors={chartConfigs[0].colors} 
      />

      <h4>2. CPU Utilization</h4>
      <p>{analysisText.cpuUtilization}</p>
      <PieChart 
        title="CPU Utilization" 
        data={chartConfigs[1].data} 
        colors={chartConfigs[1].colors} 
      />

      <h4>3. Throughput</h4>
      <p>{analysisText.throughput}</p>
      <PieChart 
        title="Throughput" 
        data={chartConfigs[2].data} 
        colors={chartConfigs[2].colors} 
      />

      <h4>4. Data Rate</h4>
      <p>{analysisText.dataRate}</p>
      <PieChart 
        title="Data Rate" 
        data={chartConfigs[3].data} 
        colors={chartConfigs[3].colors} 
      />

      <h4>Our Observations</h4>
      <p>{analysisText.recommendations}</p>
    </div>
  );
};

export default Recommendation;
