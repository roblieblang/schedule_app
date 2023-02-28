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
          The Bear Chronotype refers to individuals who tend to be naturally active during the night and have a preference for sleeping during the day. People with the Bear Chronotype often have trouble waking up early in the morning and may feel more awake and alert in the evening and at night. They may also find it difficult to adjust to a 9-5 work schedule and may prefer to work a more flexible schedule that accommodates their sleep pattern. Some common traits of the Bear Chronotype include being social and energetic at night, being a night owl, and having a hard time waking up early in the morning. It's important to note that everyone's sleep pattern is unique and that the Bear Chronotype is just one of several chronotypes that describe different patterns of sleep and wakefulness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChronoSummary;