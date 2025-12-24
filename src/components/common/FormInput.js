import React from 'react';
import './FormInput.css';

const FormInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error
}) => {
  return (
    <div className="form-group">
      <div className="input-container">
        <input
          type={type}
          name={name}
          className={`form-input ${error ? 'error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        <label className="floating-label">
          {label}{required && <span className="required-star">*</span>}
        </label>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormInput;