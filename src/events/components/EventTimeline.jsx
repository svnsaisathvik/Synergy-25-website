import React, { useState, useEffect, useRef } from 'react';
import events from "../data/events.json";

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

// The EventPoster component with flip-on-hover functionality for the active card
const EventPoster = ({ event, isActive, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Automatically un-flip the card when it becomes inactive
  useEffect(() => {
    if (!isActive) {
      setIsFlipped(false);
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Only flip the card if it's the active one
    if (isActive) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsFlipped(false);
  };

  return (
    <div
      className="event-poster-wrapper"
      onClick={onClick}
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
              <h3>{event.name}</h3>
              <div className="card-details">
                {event.about && (
                  <div className="detail-item">
                    <div className="detail-icon about-icon"></div>
                    <span>{event.about}</span>
                  </div>
                )}
                <div className="detail-item">
                  <div className="detail-icon time-icon"></div>
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-info">
        <h3>{event.name}</h3>
        {isActive && !isFlipped && (
          <div className="event-time-display">
            <div className="time-divider"></div>
            <div>{event.time}</div>
          </div>
        )}
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
      <div className="scan-lines"></div>

      <div className="timeline-content">
        {/* Title */}
        <div className="timeline-title">
          <h1>EVENT TIMELINE</h1>
          <div className="title-divider"></div>
        </div>

        {/* Day Selector */}
        <div className="day-selector-wrapper">
          <div className="day-selector">
            <div
              className="day-selector-highlight"
              style={{
                width: `calc(${100 / days.length}% - 4px)`,
                left: `calc(${day * (100 / days.length)}% + 6px)`,
              }}
            ></div>
            {days.map((d, index) => (
              <button
                key={d}
                className={`day-button ${day === index ? 'active' : ''}`}
                onClick={() => handleDayClick(index)}
              >
                Day {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="carousel-3d-container">
          {/* Left Arrow */}
          <button
            onClick={() => handleArrowClick('left')}
            className="timeline-nav-arrow left"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrowClick('right')}
            className="timeline-nav-arrow right"
          >
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
                    style={{ transform: `rotateY(${cardAngle}deg) translateZ(var(--carousel-radius))` }}
                  >
                    {/* The HexBackground is now rendered only inside the active card slot, behind the poster */}
                    {isActive && <HexBackground />}
                    <EventPoster
                      event={event}
                      isActive={isActive}
                      onClick={() => handleCardClick(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="nav-dots">
          {currentDayEvents.map((_, index) => (
            <button
              key={index}
              className="dot-button"
              onClick={() => setActiveIndex(index)}
            >
              <div className={`dot-inner ${index === activeIndex ? 'active' : ''}`}></div>
              <div className={`dot-border ${index === activeIndex ? 'active' : ''}`}></div>
            </button>
          ))}
        </div>

        {/* Status Display */}
        <div className="status-display-wrapper">
          <div className="status-display">
            <div className="status-item">
              <div className="status-light online"></div>
              <span>SYSTEM ONLINE</span>
            </div>
            <div className="status-divider"></div>
            <div className="status-item">
              <div className="status-light event"></div>
              <span>EVENT {currentDayEvents.length > 0 ? activeIndex + 1 : 0}/{currentDayEvents.length}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Import Font */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&display=swap');

        /* Main Container */
        .timeline-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
            color: white;
            position: relative;
            font-family: 'Orbitron', monospace;
            overflow: hidden;
            padding: 1rem;
        }

        /* Overlay Effects */
        .scan-lines {
            position: absolute;
            inset: 0;
            z-index: 20; /* Highest layer for screen effect */
            pointer-events: none;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4));
            background-size: 100% 4px;
            animation: flicker 0.15s infinite;
        }

        /* Content Wrapper */
        .timeline-content {
            position: relative;
            z-index: 10;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding: 1.5rem 0;
        }

        /* Title */
        .timeline-title {
            text-align: center;
            margin-bottom: 2rem;
        }
        .timeline-title h1 {
            font-size: clamp(2rem, 6vw, 3.5rem);
            font-weight: 900;
            background: linear-gradient(90deg, #0ff, #f0f, #0ff);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
            text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #f0f, 0 0 40px #f0f;
            margin: 0 0 1rem 0;
            background-size: 200% 100%;
            animation: titleGradientFlow 3s ease-in-out infinite alternate;
        }
        .title-divider {
            width: 150px;
            height: 3px;
            background: linear-gradient(90deg, #0ff, #f0f, #0ff);
            margin: 0 auto;
            border-radius: 2px;
        }

        /* Day Selector */
        .day-selector-wrapper {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
        }
        .day-selector {
            position: relative;
            display: flex;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 9999px;
            padding: 0.25rem;
            border: 1px solid rgba(0, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
        }
        .day-selector-highlight {
            position: absolute;
            height: calc(100% - 8px);
            top: 4px;
            background: linear-gradient(45deg, #0ff, #f0f);
            border-radius: 9999px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        .day-button {
            position: relative;
            z-index: 10;
            padding: 0.5rem 1.5rem;
            font-size: 0.875rem;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            border-radius: 9999px;
            background: transparent;
            border: none;
            cursor: pointer;
            font-family: 'Orbitron', monospace;
            transition: all 0.3s;
        }
        .day-button.active {
            color: #000;
        }

        /* 3D Carousel */
        .carousel-3d-container {
            position: relative;
            width: 100%;
            height: 500px; /* Adjust height as needed */
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .carousel-scene {
            width: 100%;
            height: 100%;
            perspective: 2000px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .carousel-stage {
            width: 240px; /* Width of a card */
            height: 400px; /* Height of a card */
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
            --carousel-radius: 400px; /* Adjust this to change the circle radius */
        }
        .carousel-card-slot {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: transform 0.5s ease, opacity 0.5s ease;
            transform-style: preserve-3d; /* This is crucial for 3D positioning of children */
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .carousel-card-slot:not(.active) {
            cursor: pointer;
        }
        .carousel-card-slot:not(.active) .event-poster-wrapper {
            opacity: 0.6;
        }
        .carousel-card-slot:not(.active):hover .event-poster-wrapper {
            opacity: 0.9;
        }

        /* Navigation Arrows */
        .timeline-nav-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 15; /* Above carousel scene but below main content */
            width: 3rem;
            height: 3rem;
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid #0ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0ff;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
        }
        .timeline-nav-arrow:hover {
            background: rgba(0, 255, 255, 0.2);
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.8);
        }
        .timeline-nav-arrow.left { left: 1rem; }
        .timeline-nav-arrow.right { right: 1rem; }
        .timeline-nav-arrow svg { width: 1.5rem; height: 1.5rem; }

        /* Navigation Dots */
        .nav-dots { display: flex; justify-content: center; gap: 0.75rem; margin-bottom: 2rem; }
        .dot-button { width: 0.875rem; height: 0.875rem; border-radius: 50%; background: transparent; position: relative; cursor: pointer; border: none; padding: 0; }
        .dot-inner { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.3); transition: all 0.3s ease; }
        .dot-inner.active { inset: 0; background: #0ff; box-shadow: 0 0 8px #0ff; }
        .dot-inner:not(.active) { inset: 25%; }
        .dot-border { position: absolute; inset: 0; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 50%; transition: all 0.3s ease; }
        .dot-border.active { border-color: #0ff; transform: scale(1.4); box-shadow: 0 0 12px rgba(0, 255, 255, 0.5); }

        /* Status Display */
        .status-display-wrapper { display: flex; justify-content: center; }
        .status-display { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1.25rem; background: rgba(0, 0, 0, 0.7); border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 9999px; backdrop-filter: blur(10px); font-family: 'Orbitron', monospace; }
        .status-item { display: flex; align-items: center; gap: 0.375rem; font-size: 0.6875rem; font-weight: 600; }
        .status-light { width: 6px; height: 6px; border-radius: 50%; animation: pulse 2s infinite; }
        .status-light.online { background: #0f0; box-shadow: 0 0 8px #0f0; color: #0f0; }
        .status-light.event { background: #0ff; box-shadow: 0 0 8px #0ff; color: #0ff; }
        .status-divider { width: 1px; height: 0.875rem; background: rgba(0, 255, 255, 0.3); }

        /* Event Poster Styling */
        .event-poster-wrapper {
            cursor: pointer;
            position: relative; /* Changed to relative for z-index context */
            z-index: 2; /* Ensure poster is above the hex background */
            width: 240px;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .event-poster-container { position: relative; width: 15rem; height: 20rem; perspective: 1200px; margin: 0 auto; }
        .card-flipper { position: relative; width: 100%; height: 100%; transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); transform-style: preserve-3d; }
        .card-flipper.is-flipped { transform: rotateY(180deg); }
        .card-face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 0.875rem; overflow: hidden; border: 2px solid transparent; }
        .card-front { background: linear-gradient(#000, #000) padding-box, linear-gradient(45deg, #0ff, #f0f, #0ff) border-box; }
        .card-image { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 0.75rem; }
        .card-hover-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%); z-index: 2; opacity: 0; transition: opacity 0.3s ease; border-radius: 0.75rem; }
        .card-hover-overlay.is-hovered { opacity: 1; }
        .card-glow-effect { position: absolute; inset: -3px; background: linear-gradient(45deg, #0ff, #f0f, #0ff); border-radius: 0.875rem; z-index: -1; opacity: 0; filter: blur(12px); transition: opacity 0.4s ease; }
        .card-glow-effect.is-hovered { opacity: 0.7; }
        .card-back { background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 100%); transform: rotateY(180deg); display: flex; flex-direction: column; }
        .card-back-content { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 1.5rem; z-index: 1; text-align: center; }
        .card-back-content h3 { font-size: 1.25rem; font-weight: 700; color: #0ff; text-transform: uppercase; margin-bottom: 1rem; text-shadow: 0 0 8px rgba(0, 255, 255, 0.5); line-height: 1.2; }
        .card-details { font-family: 'Orbitron', monospace; color: #fff; width: 100%; flex: 1; display: flex; flex-direction: column; gap: 0.75rem; }
        .detail-item { display: flex; align-items: flex-start; text-align: left; gap: 0.5rem; padding: 0.375rem 0.5rem; background: rgba(0, 0, 0, 0.3); border-radius: 0.375rem; border: 1px solid rgba(0, 255, 255, 0.1); min-height: 2rem; font-weight: 600; font-size: 0.8rem; line-height: 1.3; }
        .detail-icon { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
        .detail-icon.about-icon { background: linear-gradient(45deg, #ff6b00, #ffa500); box-shadow: 0 0 6px #ffa500; }
        .detail-item .about-icon + span { background: linear-gradient(45deg, #ff6b00, #ffa500); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;}
        .detail-icon.time-icon { background: linear-gradient(45deg, #00ffff, #0080ff); box-shadow: 0 0 6px #00ffff;}
        .detail-item .time-icon + span { background: linear-gradient(45deg, #00ffff, #0080ff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700;}
        .event-info { text-align: center; padding: 0 1rem; margin-top: 1.5rem; }
        .event-info h3 { font-size: 1.125rem; font-weight: 700; color: #fff; text-transform: uppercase; text-shadow: 0 0 8px rgba(0, 255, 255, 0.3); transition: all 0.4s ease; line-height: 1.2; margin: 0; min-height: 1.5rem; }
        .carousel-card-slot.active .event-info h3 { color: #0ff; text-shadow: 0 0 15px rgba(0, 255, 255, 0.8); }
        .event-time-display { margin-top: 0.5rem; font-size: 0.875rem; color: #0ff; font-weight: 600; }
        .time-divider { width: 45px; height: 1.5px; background: linear-gradient(90deg, transparent, #0ff, transparent); margin: 0.5rem auto; }

        /* Hexagonal Animation Styles */
        .socket {
            width: 200px;
            height: 200px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) translateZ(-80px) scale(1.5);
            z-index: 1; /* Behind the poster (z-index: 2) */
            opacity: 0.7;
        }
        .hex-brick { background: #0ff; width: 30px; height: 17px; position: absolute; top: 5px; animation-name: fade00; animation-duration: 2s; animation-iteration-count: infinite; }
        .h2 { transform: rotate(60deg); }
        .h3 { transform: rotate(-60deg); }
        .gel { height: 30px; width: 30px; transition: all 0.3s; position: absolute; top: 50%; left: 50%; }
        .center-gel { margin-left: -15px; margin-top: -15px; animation-name: pulse00; animation-duration: 2s; animation-iteration-count: infinite; }
        .c1 { margin-left: -47px; margin-top: -15px; } .c2 { margin-left: -31px; margin-top: -43px; } .c3 { margin-left: 1px; margin-top: -43px; } .c4 { margin-left: 17px; margin-top: -15px; } .c5 { margin-left: -31px; margin-top: 13px; } .c6 { margin-left: 1px; margin-top: 13px; } .c7 { margin-left: -63px; margin-top: -43px; } .c8 { margin-left: 33px; margin-top: -43px; } .c9 { margin-left: -15px; margin-top: 41px; } .c10 { margin-left: -63px; margin-top: 13px; } .c11 { margin-left: 33px; margin-top: 13px; } .c12 { margin-left: -15px; margin-top: -71px; } .c13 { margin-left: -47px; margin-top: -71px; } .c14 { margin-left: 17px; margin-top: -71px; } .c15 { margin-left: -47px; margin-top: 41px; } .c16 { margin-left: 17px; margin-top: 41px; } .c17 { margin-left: -79px; margin-top: -15px; } .c18 { margin-left: 49px; margin-top: -15px; } .c19 { margin-left: -63px; margin-top: -99px; } .c20 { margin-left: 33px; margin-top: -99px; } .c21 { margin-left: 1px; margin-top: -99px; } .c22 { margin-left: -31px; margin-top: -99px; } .c23 { margin-left: -63px; margin-top: 69px; } .c24 { margin-left: 33px; margin-top: 69px; } .c25 { margin-left: 1px; margin-top: 69px; } .c26 { margin-left: -31px; margin-top: 69px; } .c27 { margin-left: -79px; margin-top: -15px; } .c28 { margin-left: -95px; margin-top: -43px; } .c29 { margin-left: -95px; margin-top: 13px; } .c30 { margin-left: 49px; margin-top: 41px; } .c31 { margin-left: -79px; margin-top: -71px; } .c32 { margin-left: -111px; margin-top: -15px; } .c33 { margin-left: 65px; margin-top: -43px; } .c34 { margin-left: 65px; margin-top: 13px; } .c35 { margin-left: -79px; margin-top: 41px; } .c36 { margin-left: 49px; margin-top: -71px; } .c37 { margin-left: 81px; margin-top: -15px; }
        .r1 { animation-name: pulse00; animation-duration: 2s; animation-iteration-count: infinite; animation-delay: 0.2s; }
        .r2 { animation-name: pulse00; animation-duration: 2s; animation-iteration-count: infinite; animation-delay: 0.4s; }
        .r3 { animation-name: pulse00; animation-duration: 2s; animation-iteration-count: infinite; animation-delay: 0.6s; }
        .r1 > .hex-brick { animation-name: fade00; animation-duration: 2s; animation-iteration-count: infinite; animation-delay: 0.2s; }
        .r2 > .hex-brick { animation-name: fade00; animation-duration: 2s; animation-iteration-count: infinite; animation-delay: 0.4s; }
        .r3 > .hex-brick { animation-name: fade00; animation-duration: 2s; animation-iteration-count: infinite; animation-delay: 0.6s; }

        /* Keyframes */
        @keyframes pulse00 { 0% { transform: scale(1); } 50% { transform: scale(0.01); } 100% { transform: scale(1); } }
        @keyframes fade00 { 0% { background: rgba(0, 255, 255, 0.2); } 50% { background: rgba(255, 0, 255, 0.3); } 100% { background: rgba(0, 255, 255, 0.2); } }
        @keyframes flicker { 0% { opacity: 0.8; } 50% { opacity: 0.6; } 100% { opacity: 0.8; } }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
        @keyframes titleGradientFlow { 0% { background-position: 0% 50%; filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.8)); } 100% { background-position: 100% 50%; filter: drop-shadow(0 0 20px rgba(255, 0, 255, 0.8)); } }

        /* Responsive Design */
        @media (max-width: 768px) {
            .carousel-stage {
                --carousel-radius: 280px; /* Smaller radius for mobile */
            }
            .socket {
                transform: translate(-50%, -50%) translateZ(-60px) scale(1.2);
            }
            .timeline-nav-arrow {
                width: 2.5rem;
                height: 2.5rem;
            }
            .timeline-nav-arrow.left { left: -0.5rem; }
            .timeline-nav-arrow.right { right: -0.5rem; }
        }
      `}</style>
    </div>
  );
};

export default EventTimeline;
