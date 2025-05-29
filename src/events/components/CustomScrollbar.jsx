import React from 'react';
import '../styles/CustomScrollbar.css';

const CustomScrollbar = ({
  progress,
  activeDay,
  onDayClick
}) => {
  return (
    <div className="custom-scrollbar">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ height: `${progress * 100}%` }}
        ></div>
        {[1, 2, 3].map((day) => (
          <div
            key={day}
            className={`day-marker ${activeDay === day ? 'active' : ''}`}
            style={{ top: `${(day - 1) * 33 + 10}%` }}
            onClick={() => onDayClick(day)}
          >
            <div className="marker-content">
              <span className="day-number">DAY {day}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomScrollbar;