import React, { useState } from 'react';

const CustomizeForm = ({ onCustomize }) => {
  const [algorithm, setAlgorithm] = useState('');
  const [instance, setInstance] = useState('');
  const [workerNodes, setWorkerNodes] = useState('');
  const [cpusPerWorker, setCpusPerWorker] = useState('');
  const [dataSizeOption, setDataSizeOption] = useState('');

  // Update data size options based on the algorithm
  const getDataSizeOptions = () => {
    switch (algorithm) {
      case 'sorting':
        return ['100MB', '200MB', '500MB'];
      case 'matrix-multiplication':
        return ['100MB', '200MB', '500MB'];
      case 'dijkstra':
        return ['100MB', '250MB', '500MB'];
      default:
        return [];
    }
  };

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
    setDataSizeOption(''); // Reset data size when algorithm changes
  };

  const handleCustomize = (event) => {
    event.preventDefault();
    onCustomize({
      algorithm,
      instance,
      cpusPerWorker,
      dataSizeOption,
    });
  };

  return (
    <form className="form" onSubmit={handleCustomize}>
      <label className="blue-label">Choose Your Algorithm</label>
      <select value={algorithm} onChange={handleAlgorithmChange} required>
        <option value="">Select Algorithm</option>
        <option value="sorting">Sorting Algorithm</option>
        <option value="matrix-multiplication">Matrix Multiplication</option>
        <option value="dijkstra">Dijkstra's Algorithm</option>
      </select>

      {algorithm && (
        <>
          <label className="blue-label">Data Size</label>
          <select value={dataSizeOption} onChange={(e) => setDataSizeOption(e.target.value)} required>
            <option value="">Select Data Size</option>
            {getDataSizeOptions().map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <label className="blue-label">Instance Type</label>
          <select value={instance} onChange={(e) => setInstance(e.target.value)} required>
            <option value="">Select Instance</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <label className="blue-label">Number of CPUs per Worker</label>
          <select value={cpusPerWorker} onChange={(e) => setCpusPerWorker(e.target.value)} required>
            <option value="">Select CPUs</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </>
      )}

      <button type="submit">Customize</button>
    </form>
  );
};

export default CustomizeForm;
