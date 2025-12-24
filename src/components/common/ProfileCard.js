import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, email, description, avatar }) => {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        {avatar ? (
          <img src={avatar} alt={name} className="avatar-image" />
        ) : (
          <div className="avatar-placeholder">
            {name ? name.charAt(0).toUpperCase() : 'M'}
          </div>
        )}
      </div>
      <div className="profile-info">
        <h3 className="profile-name">{name || 'Marry Doe'}</h3>
        <p className="profile-email">{email || 'marry@Gmail.Com'}</p>
      </div>
      {description && (
        <p className="profile-description">{description}</p>
      )}
    </div>
  );
};

export default ProfileCard;