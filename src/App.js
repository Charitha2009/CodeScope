import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import OurWork from './Components/OurWork/OurWork';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar should be displayed on all pages */}
        <Navbar />

        {/* Switch between pages */}
        <Routes>
          {/* Use element instead of component */}
          <Route path="/" element={<HomePage />} />  {/* Home Page */}
          <Route path="/our-work" element={<OurWork />} />  {/* Our Work Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
