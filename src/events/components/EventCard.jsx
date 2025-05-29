import React, { useEffect, useRef, useState } from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event, onClick, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`event-card ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
      style={{
        animationDelay: `${delay}s`,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${event.image})`
      }}
    >
      <div className="event-card-border"></div>
      <div className="event-card-content">
        <div className="event-category" style={{fontFamily:"OrbitronRegular"}}>{event.category.toUpperCase()}</div>
        <h3 className="event-name" style={{fontFamily:"CyberAlert"}}>{event.name}</h3>
        <div className="event-details">
          <div className="event-time" style={{fontFamily:"CyberAlert"}}>{event.time}</div>
          <div className="event-location" style={{fontFamily:"CyberAlert"}}>{event.venue}</div>
        </div>
        <div className="event-hover-info">
          <span style={{fontFamily:"CyberAlert"}}>Click for details</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;