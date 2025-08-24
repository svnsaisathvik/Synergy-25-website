import React, { useEffect, useRef, useState } from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event, onClick, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageLoaded(true);
          imageObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (cardRef.current) {
      cardObserver.observe(cardRef.current);
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (cardRef.current) {
        cardObserver.unobserve(cardRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`event-card ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      <div className="event-card-border"></div>
      
      {/* Event Poster Section */}
      <div className="event-poster-section">
        <div 
          ref={imageRef}
          className="event-image"
          style={{
            backgroundImage: imageLoaded ? `url(${event.image})` : 'none'
          }}
        ></div>
        <div className="event-category" style={{fontFamily:"OrbitronRegular"}}>
          {event.category.toUpperCase()}
        </div>
        {event.iiitb_exclusive && (
          <div className="event-iiitb-exclusive" style={{fontFamily:"OrbitronRegular"}}>
            IIITB EXCLUSIVE
          </div>
        )}
      </div>
      
      {/* Event Details Section */}
      <div className="event-details-section">
        <h3 className="event-name gradient-text" style={{fontFamily:"CyberAlert"}}>
          {event.name}
        </h3>
        <div className="event-details">
          <div className="event-time" style={{fontFamily:"CyberAlert"}}>
            {event.time}
          </div>
          <div className="event-location" style={{fontFamily:"CyberAlert"}}>
            {event.venue}
          </div>
        </div>
      </div>

      <div className="event-hover-info">
        <span style={{fontFamily:"CyberAlert"}}>Click for details</span>
      </div>
    </div>
  );
};

export default EventCard;