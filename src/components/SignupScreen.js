import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './common/FormInput';
import RadioGroup from './common/RadioGroup';
import Button from './common/Button';
import PageTitle from './common/PageTitle';
import BottomNavigation from './common/BottomNavigation';
import './SignupScreen.css';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    areYouAnAgent: 'yes'
  });

  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const rules = {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    return rules;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number validation - only numbers
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate password
    const passwordRules = validatePassword(formData.password);
    const isPasswordValid = Object.values(passwordRules).every(rule => rule);
    
    if (!isPasswordValid) {
      setErrors({ password: 'Password must meet all requirements' });
      return;
    }

    // Store user data in localStorage for demo purposes
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/profile');
  };

  const agentOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  const passwordRules = validatePassword(formData.password);

  return (
    <div className="screen-container">
      <div className="signup-content">
        <div className="signup-header">
          <PageTitle title="Create your PopX account" />
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-fields">
            <FormInput
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              required
            />

            <FormInput
              label="Phone number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="1234567890"
              required
            />

            <FormInput
              label="Email address"
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="marry@example.com"
              required
            />

            <div className="password-field">
              <FormInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                required
                error={errors.password}
              />
              {formData.password && (
                <div className="password-rules">
                  <div className={`rule ${passwordRules.minLength ? 'valid' : 'invalid'}`}>
                    ✓ At least 8 characters
                  </div>
                  <div className={`rule ${passwordRules.hasUpperCase ? 'valid' : 'invalid'}`}>
                    ✓ One uppercase letter
                  </div>
                  <div className={`rule ${passwordRules.hasLowerCase ? 'valid' : 'invalid'}`}>
                    ✓ One lowercase letter
                  </div>
                  <div className={`rule ${passwordRules.hasNumber ? 'valid' : 'invalid'}`}>
                    ✓ One number
                  </div>
                  <div className={`rule ${passwordRules.hasSpecialChar ? 'valid' : 'invalid'}`}>
                    ✓ One special character
                  </div>
                </div>
              )}
            </div>

            <FormInput
              label="Company name"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
            />

            <RadioGroup
              label="Are you an Agent?"
              name="areYouAnAgent"
              options={agentOptions}
              value={formData.areYouAnAgent}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="button-container">
            <Button type="submit" variant="primary">
              Create Account
            </Button>
          </div>
        </form>
      </div>
      
      <BottomNavigation currentStep={3} totalSteps={4} />
    </div>
  );
};

export default SignupScreen;