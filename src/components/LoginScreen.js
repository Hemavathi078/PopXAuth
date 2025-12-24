import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './common/FormInput';
import Button from './common/Button';
import PageTitle from './common/PageTitle';
import BottomNavigation from './common/BottomNavigation';
import './LoginScreen.css';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple login validation for demo
    if (formData.emailAddress && formData.password) {
      navigate('/profile');
    }
  };

  return (
    <div className="screen-container">
      <div className="form-container">
        <PageTitle 
          title="Signin to your PopX account" 
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email Address"
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="Enter email address"
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
          />

          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
      
      <BottomNavigation currentStep={2} totalSteps={4} />
    </div>
  );
};

export default LoginScreen;