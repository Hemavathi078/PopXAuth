import React from 'react';
import './PageTitle.css';

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="page-title-container">
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;