import React from 'react';

const Recommendation = ({ formData }) => {
  return (
    <div className="recommendation">
      <h3>Our Recommendation</h3>
      <p>
        Based on your input:
        <ul>
          <li>Algorithm: {formData.algorithm || 'N/A'}</li>
          <li>Data Size: {formData.datasetSize || 'N/A'}</li>
          <li>CPU Intensity: {formData.cpuIntensive || 'N/A'}</li>
          <li>Hardware: {formData.hardware || 'N/A'}</li>
        </ul>
        We recommend using a balanced approach. If you need a balance between cost and
        performance, consider an M3.medium instance for moderate workloads, providing 1 vCPU
        and 3.75 GB of memory.
      </p>
    </div>
  );
};

export default Recommendation;
