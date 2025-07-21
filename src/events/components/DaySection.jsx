import React, { forwardRef } from 'react';
import EventCard from './EventCard';
import '../styles/DaySection.css';
import '../styles/main.css';

const DaySection = forwardRef(
  ({ dayData, onEventClick, isActive }, ref) => {
    return (
      <div 
        ref={ref}
        className={`day-section ${isActive ? 'active' : ''}`}
        id={`day-${dayData.day}`}
      >
        <div className="day-header">
          <div className="day-title">
            <div className="day-number-container">
              <div className="day-number-wrapper">
                <h2 className="day-number gradient-text" style={{fontSize:"5rem"}}>DAY {dayData.day}</h2>
                <div className="day-number-glow"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="events-grid">
          {dayData.list.map((event, index) => (
            <EventCard 
              key={`${dayData.day}-${index}`} 
              event={event} 
              onClick={() => onEventClick(event)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    );
  }
);

DaySection.displayName = 'DaySection';

export default DaySection;