import React, { useState } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import CustomizeForm from '../CustomizeForm/CustomizeForm';
import Recommendation from '../Recommendation/Recommendation';

const HomePage = () => {
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [formData, setFormData] = useState({}); // To store form data

  const handleCustomize = (data) => {
    setFormData(data); // Save the form data from the CustomizeForm component
    setShowRecommendation(true); // Show the recommendation panel
  };

  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        <header className="header">
          <h1>
            Welcome to <span className="highlight">CodeScope</span>!
          </h1>
          <p>Access your personalized code solutions here.</p>
        </header>

        <div className="content">
          <div className="top-panel">
            <CustomizeForm onCustomize={handleCustomize} />
          </div>

          <div className="bottom-panel">
            {!showRecommendation && (
              <p className="info-text">
                Check our observations and recommendations.
              </p>
            )}

            {showRecommendation && (
              <Recommendation formData={formData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
