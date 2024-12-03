// import React from 'react';

// const CustomizeForm = ({ onCustomize }) => {
//   return (
//     <form className="form" onSubmit={onCustomize}>
//       <label className="blue-label">Choose Your Algorithm</label>
//       <select>
//         <option value="sorting">Sorting Algorithm</option>
//         <option value="matrix-multiplication">Matrix Multiplication</option>
//         <option value="dijkstra">Dijkstra's Algorithm</option>
//       </select>

//       <label className="blue-label">Dataset Size</label>
//       <select>
//         <option value="small">Small (Kilobytes to Megabytes)</option>
//         <option value="medium">Medium (Megabytes to Gigabytes)</option>
//         <option value="large">Large (Gigabytes to Terabytes)</option>
//         <option value="very-large">Very Large (Terabytes to Petabytes)</option>
//         <option value="extreme">Extreme (Petabytes to Exabytes)</option>
//       </select>

//       <label className="blue-label">CPU Intensive</label>
//       <select>
//         <option value="moderate">Moderate</option>
//         <option value="high">High</option>
//         <option value="extreme">Extreme</option>
//       </select>

//       <label className="blue-label">Response Time</label>
//       <select>
//         <option value="milliseconds">Milliseconds</option>
//         <option value="seconds">Seconds</option>
//         <option value="minutes">Seconds to Minutes</option>
//         <option value="hours">Hours to Days</option>
//       </select>

//       <label className="blue-label">Latency</label>
//       <select>
//         <option value="ultra-low">Ultra-Low Latency (Nanoseconds to Microseconds)</option>
//         <option value="low">Low Latency (Milliseconds)</option>
//         <option value="moderate">Moderate Latency (100 ms to 1 Second)</option>
//         <option value="high">High Latency (1 Second to 1 Minute)</option>
//         <option value="very-high">Very High Latency (Minutes to Hours or More)</option>
//       </select>

//       <button type="submit">Customize</button>
//     </form>
//   );
// };

// export default CustomizeForm;


import React, { useState } from 'react';

const CustomizeForm = ({ onCustomize }) => {
  const [algorithm, setAlgorithm] = useState('');
  const [datasetSize, setDatasetSize] = useState('');
  const [dataDistribution, setDataDistribution] = useState('');
  const [cpuIntensive, setCpuIntensive] = useState('');
  const [dataType, setDataType] = useState('');
  const [parallelDistribution, setParallelDistribution] = useState('');
  const [memoryConstraints, setMemoryConstraints] = useState(false);
  
  const [sparsity, setSparsity] = useState('');
  const [hardware, setHardware] = useState('');
  const [batchProcessing, setBatchProcessing] = useState(false);
  const [tensorOperations, setTensorOperations] = useState(false);
  
  const [graphType, setGraphType] = useState('');
  const [priorityQueue, setPriorityQueue] = useState('');
  const [memoryEfficiency, setMemoryEfficiency] = useState(false);

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };

  const handleCustomize = (event) => {
    event.preventDefault();
    onCustomize({
      algorithm,
      datasetSize,
      dataDistribution,
      cpuIntensive,
      dataType,
      parallelDistribution,
      memoryConstraints,
      sparsity,
      hardware,
      batchProcessing,
      tensorOperations,
      graphType,
      priorityQueue,
      memoryEfficiency
    });
  };

  return (
    <form className="form" onSubmit={handleCustomize}>
      <label className="blue-label">Choose Your Algorithm</label>
      <select value={algorithm} onChange={handleAlgorithmChange}>
        <option value="">Select Algorithm</option>
        <option value="sorting">Sorting Algorithm</option>
        <option value="matrix-multiplication">Matrix Multiplication</option>
        <option value="dijkstra">Dijkstra's Algorithm</option>
      </select>

      {/* Sorting Algorithm Questions */}
      {algorithm === 'sorting' && (
        <>
          <label className="blue-label">Data Size</label>
          <select value={datasetSize} onChange={(e) => setDatasetSize(e.target.value)}>
            <option value="">Select Data Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="very-large">Very Large</option>
          </select>

          <label className="blue-label">Data Distribution</label>
          <select value={dataDistribution} onChange={(e) => setDataDistribution(e.target.value)}>
            <option value="">Select Data Distribution</option>
            <option value="nearly-sorted">Nearly Sorted Data</option>
            <option value="random">Random Data</option>
            <option value="highly-disordered">Highly Disordered Data</option>
            <option value="duplicates">Data with Many Duplicate Values</option>
          </select>

          <label className="blue-label">CPU Intensity</label>
          <select value={cpuIntensive} onChange={(e) => setCpuIntensive(e.target.value)}>
            <option value="">Select CPU Intensity</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
            <option value="extreme">Extreme</option>
          </select>

          <label className="blue-label">Type of Data</label>
          <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
            <option value="">Select Data Type</option>
            <option value="integers">Integers</option>
            <option value="floats">Floats</option>
            <option value="strings">Strings</option>
          </select>

          <label className="blue-label">Parallel Distribution</label>
          <select value={parallelDistribution} onChange={(e) => setParallelDistribution(e.target.value)}>
            <option value="">Select Parallel Distribution</option>
            <option value="none">None</option>
            <option value="parallel">Parallel</option>
            <option value="distributed">Distributed</option>
          </select>

          <label className="blue-label">Memory Constraints</label>
          <select value={memoryEfficiency} onChange={(e) => setMemoryEfficiency(e.target.value)}>
            <option value="">Select Memory Efficiency</option>
            <option value="very-efficient">Very Efficient</option>
            <option value="efficient">Efficient</option>
            <option value="moderate">Moderate</option>
          </select>
        </>
      )}

      {/* Matrix Multiplication Questions */}
      {algorithm === 'matrix-multiplication' && (
        <>
          <label className="blue-label">Data Size</label>
          <select value={datasetSize} onChange={(e) => setDatasetSize(e.target.value)}>
            <option value="">Select Data Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="very-large">Very Large</option>
          </select>

          <label className="blue-label">Sparsity</label>
          <select value={sparsity} onChange={(e) => setSparsity(e.target.value)}>
            <option value="">Select Sparsity</option>
            <option value="sparse">Sparse</option>
            <option value="dense">Dense</option>
          </select>

          <label className="blue-label">Hardware</label>
          <select value={hardware} onChange={(e) => setHardware(e.target.value)}>
            <option value="">Select Hardware</option>
            <option value="cpu">CPU</option>
            <option value="gpu">GPU</option>
            <option value="distributed">Distributed Systems</option>
          </select>
        </>
      )}

      {/* Dijkstra's Algorithm Questions */}
      {algorithm === 'dijkstra' && (
        <>
          <label className="blue-label">Graph Type</label>
          <select value={graphType} onChange={(e) => setGraphType(e.target.value)}>
            <option value="">Select Graph Type</option>
            <option value="single-source-single-destination">Single Source, Single Destination</option>
            <option value="single-source-all-destination">Single Source, All Destinations</option>
          </select>

          <label className="blue-label">Data Size</label>
          <select value={datasetSize} onChange={(e) => setDatasetSize(e.target.value)}>
            <option value="">Select Data Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="very-large">Very Large</option>
          </select>

          <label className="blue-label">Priority Queue</label>
          <select value={priorityQueue} onChange={(e) => setPriorityQueue(e.target.value)}>
            <option value="">Select Priority Queue</option>
            <option value="binary-heap">Binary Heap</option>
            <option value="fibonacci-heap">Fibonacci Heap</option>
            <option value="bucket-based-queue">Bucket-Based Queue</option>
          </select>

          <label className="blue-label">Memory Efficiency</label>
          <select value={memoryEfficiency} onChange={(e) => setMemoryEfficiency(e.target.value)}>
            <option value="">Select Memory Efficiency</option>
            <option value="very-efficient">Very Efficient</option>
            <option value="efficient">Efficient</option>
            <option value="moderate">Moderate</option>
          </select>
        </>
      )}

      <button type="submit">Customize</button>
    </form>
  );
};

export default CustomizeForm;
