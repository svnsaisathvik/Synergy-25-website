import React, { useState, useEffect, useRef } from 'react';
import events from "../data/events.json";
import '../styles/EventTimeline.css';

const HexBackground = () => (
  <div className="socket">
    <div className="gel center-gel">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c1 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c2 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c3 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c4 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c5 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c6 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c7 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c8 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c9 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c10 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c11 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c12 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c13 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c14 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c15 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c16 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c17 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c18 r2"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c19 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c20 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c21 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c22 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c23 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c24 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c25 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c26 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c28 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c29 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c30 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c31 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c32 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c33 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c34 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c35 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c36 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c37 r3"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
  </div>
);

// Additional hexagon patterns for enhanced background
const HexBackground2 = () => (
  <div className="socket socket-2">
    <div className="gel center-gel">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c1 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c2 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c3 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c4 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c5 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c6 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
  </div>
);

const HexBackground3 = () => (
  <div className="socket socket-3">
    <div className="gel center-gel">
      <div className="hex-brick h1"></div>
      <div className="hex-brick h2"></div>
      <div className="hex-brick h3"></div>
    </div>
    <div className="gel c1 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c2 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
    <div className="gel c3 r1"><div className="hex-brick h1"></div><div className="hex-brick h2"></div><div className="hex-brick h3"></div></div>
  </div>
);

// The EventPoster component with flip-on-hover functionality for the active card
const EventPoster = ({ event, isActive, onClick, totalEvents }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Automatically un-flip the card when it becomes inactive
  useEffect(() => {
    if (!isActive) {
      setIsFlipped(false);
      setIsHovered(false);
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    if (isActive) {
      setIsHovered(true);
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (isActive) {
      setIsHovered(false);
      setIsFlipped(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  // Determine if we should apply low opacity (if there are more than 3 events)
  const shouldDimNonActive = totalEvents > 3;

  return (
    <div
      className={`event-poster-wrapper ${isActive ? 'active' : ''} ${shouldDimNonActive && !isActive ? 'dimmed' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="event-poster-container">
        <div className={`card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Front of card */}
          <div className="card-face card-front">
            <img src={event.image} alt={event.name} className="card-image" />
            <div className={`card-hover-overlay ${isHovered ? 'is-hovered' : ''}`}></div>
            <div className={`card-glow-effect ${isHovered ? 'is-hovered' : ''}`}></div>
          </div>
          
          {/* Back of card */}
          <div className="card-face card-back">
            <div className="card-back-content">
              <h3 className="card-back-title" style={{fontFamily:"CyberAlert"}}>{event.name}</h3>
              <div className="card-details">
                {event.about && (
                  <div className="detail-item">
                    <div className="detail-icon about-icon"></div>
                    <span className="detail-text" style={{fontFamily:"OrbitronBold"}}>{event.about}</span>
                  </div>
                )}
                <div className="detail-item">
                  <div className="detail-icon time-icon"></div>
                  <span className="detail-text" style={{fontFamily:"OrbitronBold"}}>{event.time}</span>
                </div>
                <div className="event-action-button">
                  <a 
                    href={`/events#${event.id}`}
                    className="go-to-event-btn"
                    style={{fontFamily:"CyberAlert"}}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="btn-text">GO TO EVENT</span>
                    <div className="btn-glow"></div>
                    <div className="btn-border"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

const EventTimeline = () => {
  const [day, setDay] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const eventData = events.events;
  const currentDayEvents = eventData[day]?.list || [];
  const days = eventData.map((_, index) => `day${index + 1}`);
  const angleStep = 360 / (currentDayEvents.length || 1);

  const handleDayClick = (selectedDay) => {
    if (selectedDay === day) return;
    setDay(selectedDay);
    setActiveIndex(0);
  };

  const handleArrowClick = (direction) => {
    if (currentDayEvents.length === 0) return;
    const newActiveIndex = direction === 'left'
      ? (activeIndex - 1 + currentDayEvents.length) % currentDayEvents.length
      : (activeIndex + 1) % currentDayEvents.length;
    setActiveIndex(newActiveIndex);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  // Calculate rotation based on the active index
  const carouselRotation = -activeIndex * angleStep;

  return (
    <div className="timeline-container">
      {/* Cyberpunk Background Effects */}
      <div className="cyberpunk-bg">
        <div className="hex-grid"></div>
        <div className="circuit-lines"></div>
        <div className="data-stream"></div>
      </div>

      <div className="scan-lines"></div>

      <div className="timeline-content">
        {/* Title */}
        <div className="timeline-title-section">
          <div className="timeline-title">
            <h1 data-text="EVENT TIMELINE">EVENT TIMELINE</h1>
            <div className="title-underline"></div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="day-selector-wrapper">
          <div className="day-selector">
            <div
              className="day-selector-highlight"
              style={{
                width: `calc(${100 / days.length}% - 8px)`,
                left: `calc(${day * (100 / days.length)}% + 4px)`,
              }}
            ></div>
            {days.map((d, index) => (
              <button
                key={d}
                className={`day-selector-button ${day === index ? 'active' : ''}`}
                onClick={() => handleDayClick(index)}
              >
                <span className="day-button-text" style={{fontFamily:"CyberAlert"}}>Day {index + 1}</span>
                <div className="day-button-glow"></div>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="carousel-3d-container">
          {/* Left Arrow */}
          <button
            onClick={() => handleArrowClick('left')}
            className="arrow-button left"
          >
            <div className="arrow-glow"></div>
            <div className="arrow-inner-ring"></div>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrowClick('right')}
            className="arrow-button right"
          >
            <div className="arrow-glow"></div>
            <div className="arrow-inner-ring"></div>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="carousel-scene">
            <div
              ref={carouselRef}
              className="carousel-stage"
              style={{ transform: `rotateY(${carouselRotation}deg)` }}
            >
              {currentDayEvents.map((event, index) => {
                const cardAngle = index * angleStep;
                const isActive = index === activeIndex;
                return (
                  <div
                    key={event.id}
                    className={`carousel-card-slot ${isActive ? 'active' : ''}`}
                    style={{ 
                      transform: `rotateY(${cardAngle}deg) translateZ(var(--carousel-radius)) ${isActive ? 'translateZ(100px)' : ''}`,
                      zIndex: isActive ? 1000 : index
                    }}
                  >
                    {/* Hexagon backgrounds only for active card */}
                    {isActive && (
                      <div className="hex-background-container">
                        <HexBackground />
                        <div className="hex-background-layer-2">
                          <HexBackground2 />
                        </div>
                        <div className="hex-background-layer-3">
                          <HexBackground3 />
                        </div>
                      </div>
                    )}
                    
                    <EventPoster
                      event={event}
                      isActive={isActive}
                      totalEvents={currentDayEvents.length}
                      onClick={() => handleCardClick(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="nav-dots-wrapper">
          <div className="nav-dots">
            {currentDayEvents.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="dot-core"></div>
                <div className="dot-ring"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;