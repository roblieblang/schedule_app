import React from 'react';
import './MyChronotype.css';

const ChronoSummary = () => {
  return (
    <div>
      <h2 className="title">My Chronotype</h2>
      <div className="summary">
        <div className="image-wrapper">
          <h3 className="image-title">The Bear</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/523/523444.png" alt="The Bear" />
        </div>
        <hr className="divider" />
        <div className="summary-wrapper">
          <h4 className="summary-title">Summary</h4>
          <p className="summary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChronoSummary;