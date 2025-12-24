import React from 'react';
import './RadioGroup.css';

const RadioGroup = ({ 
  label, 
  name, 
  options, 
  value, 
  onChange, 
  required = false 
}) => {
  return (
    <div className="form-group">
      <label className="radio-group-label">
        {label}{required && <span className="required-star">*</span>}
      </label>
      <div className="radio-group">
        {options.map((option) => (
          <div key={option.value} className="radio-option">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label htmlFor={`${name}-${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;