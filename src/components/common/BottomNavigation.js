import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNavigation.css';

const BottomNavigation = ({ currentStep, totalSteps }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePrevious = () => {
    if (location.pathname === '/login') {
      navigate('/');
    } else if (location.pathname === '/signup') {
      navigate('/login');
    } else if (location.pathname === '/profile') {
      navigate('/signup');
    }
  };

  const handleNext = () => {
    if (location.pathname === '/') {
      navigate('/login');
    } else if (location.pathname === '/login') {
      navigate('/signup');
    } else if (location.pathname === '/signup') {
      navigate('/profile');
    }
  };

  return (
    <div className="bottom-navigation">
      <button className="nav-button home-button" onClick={handleHomeClick}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </button>
      
      <div className="nav-center">
        <button className="nav-button prev-button" onClick={handlePrevious}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <span className="step-text">{currentStep} of {totalSteps}</span>
        
        <button className="nav-button next-button" onClick={handleNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>
      
      <div className="nav-spacer"></div>
    </div>
  );
};

export default BottomNavigation;