import React, { useEffect, useState } from 'react';
import ProfileCard from './common/ProfileCard';
import PageTitle from './common/PageTitle';
import BottomNavigation from './common/BottomNavigation';
import './ProfileScreen.css';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const profileDescription = "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonummy Nibh Euismod Ut Laoreet Dolore Magna Aliquam Erat, Sed Diam Voluptua.";

  return (
    <div className="screen-container profile-screen">
      <div className="profile-container">
        <PageTitle title="Account Settings" />
        
        <ProfileCard
          name={userData?.fullName}
          email={userData?.emailAddress}
          description={profileDescription}
        />
      </div>
      
      <BottomNavigation currentStep={4} totalSteps={4} />
    </div>
  );
};

export default ProfileScreen;