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
      
      {/* Image Section with Lazy Loading */}
      <div 
        ref={imageRef}
        className="event-image"
        style={{
          backgroundImage: imageLoaded ? `url(${event.image})` : 'none'
        }}
      >
        {/* Category moved to be over the image */}
        <div className="event-category" style={{fontFamily:"OrbitronRegular"}}>{event.category.toUpperCase()}</div>
      </div>
      
      {/* Content Section */}
      <div className="event-card-content">
        {/* Blurred background image with Lazy Loading */}
        <div 
          className="event-content-bg"
          style={{
            backgroundImage: imageLoaded ? `url(${event.image})` : 'none'
          }}
        ></div>
        
        {/* Retro animated background elements */}
        <div className="retro-animations">
          <div className="grid-lines"></div>
          <div className="scanning-line"></div>
          <div className="floating-squares">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="neon-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="retro-circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        
        {/* Content overlay */}
        <div className="event-content-overlay">
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
    </div>
  );
};

export default EventCard;