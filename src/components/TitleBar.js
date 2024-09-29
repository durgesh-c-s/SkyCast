import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TitleBar() {
  return (
    <div className="title-bar">
      <i className="fas fa-cloud-sun title-icon"></i>
      <span className="title-text">Weather App</span>
    </div>
  );
}

export default TitleBar;
