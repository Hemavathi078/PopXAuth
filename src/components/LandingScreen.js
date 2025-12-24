import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './common/Button';
import PageTitle from './common/PageTitle';
import BottomNavigation from './common/BottomNavigation';
import './LandingScreen.css';

const LandingScreen = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="screen-container landing-screen">
      <div className="landing-content">
        <div className="landing-text">
          <PageTitle 
            title="Welcome to PopX" 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>

        <div className="landing-buttons">
          <Button variant="primary" onClick={handleCreateAccount}>
            Create Account
          </Button>
          <Button variant="secondary" onClick={handleLogin}>
            Already Registered? Login
          </Button>
        </div>
      </div>
      
      <BottomNavigation currentStep={1} totalSteps={4} />
    </div>
  );
};

export default LandingScreen;