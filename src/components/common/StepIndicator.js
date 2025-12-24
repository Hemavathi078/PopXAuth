import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="step-indicator">
      {currentStep} of {totalSteps}
    </div>
  );
};

export default StepIndicator;