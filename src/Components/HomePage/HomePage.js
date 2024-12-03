import React, { useState } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import CustomizeForm from '../CustomizeForm/CustomizeForm';
import Recommendation from '../Recommendation/Recommendation';
import CodeSnippet from '../CodeSnippet/CodeSnippet';

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
          <div className="left-panel">
            <CustomizeForm onCustomize={handleCustomize} />
          </div>

          <div className="right-panel">
            {!showRecommendation && (
              <p className="info-text">
                Get recommendations for your code based on custom inputs.
              </p>
            )}

            {showRecommendation && (
              <>
                <Recommendation formData={formData} />
                <CodeSnippet algorithm={formData.algorithm} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
