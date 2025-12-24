import React from 'react';
import './StepNumber.css';

const StepNumber = ({ number }) => {
  return (
    <div className="step-number">
      {number}
    </div>
  );
};

export default StepNumber;