import React, { useState, useEffect } from 'react';
import '../styles/SpecialEvents.css';

const SpecialEvents = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Sample special events data with cutout-style images
  const specialEvents = [
    {
      id: 1,
      heading: "Neural.net",
      description: "Push the limits of intelligence and imagination as you race to craft breakthrough AI solutions.",
      image: "/images/special_events/NeuralNet.png",
      accent: "orange"
    },
    {
      id: 2,
      heading: "Deepfake ML Challenge",
      description: "Detect and defeat deepfakes in the ultimate AI showdown—only the sharpest model survives!",
      image: "/images/special_events/Deepfake-ML_model_making_hackathon.png",
      accent: "cyan"
    },
    {
      id: 3,
      heading: "Trivia Verse",
      description: "From milestones to modern breakthroughs — tech trivia reimagined.",
      image: "/images/special_events/TechTrivia.png",
      accent: "blue"
    },
    {
      id: 4,
      heading: "PixelFlow 3.0",
      description: "Get ready to hack into creativity, redefine design systems, and showcase your vision of tomorrow’s digital world.",
      image: "/images/special_events/Pixelflow.png",
      accent: "purple"
    },
    {
      id: 5,
      heading: "Bid & Build",
      description: "Outsmart, outbid, and outbuild your way to startup success. Strategy meets hustle in this ultimate entrepreneurial showdown!",
      image: "/images/special_events/BidNBuild.png",
      accent: "yellow"
    }
  ];

  const currentEvent = specialEvents[currentEventIndex];

  // Auto-advance events every 5 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNextEvent();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentEventIndex, isHovered]);

  const handleNextEvent = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentEventIndex((prev) => (prev + 1) % specialEvents.length);
    }, 800);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  const handleEventChange = (index) => {
    if (index !== currentEventIndex) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentEventIndex(index);
      }, 800);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  };

  const getAccentColor = (accent) => {
  const colors = {
    cyan: { 
      primary: '#06b6d4', 
      secondary: '#0891b2', 
      glow: 'rgba(6, 182, 212, 0.5)',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      tailwind: 'cyan-500'
    },
    purple: { 
      primary: '#a855f7', 
      secondary: '#9333ea', 
      glow: 'rgba(168, 85, 247, 0.5)',
      gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
      tailwind: 'purple-500'
    },
    blue: { 
      primary: '#3b82f6', 
      secondary: '#2563eb', 
      glow: 'rgba(59, 130, 246, 0.5)',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      tailwind: 'blue-500'
    },
    pink: { 
      primary: '#ec4899', 
      secondary: '#db2777', 
      glow: 'rgba(236, 72, 153, 0.5)',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      tailwind: 'pink-500'
    },
    orange: {
      primary: '#f97316',
      secondary: '#ea580c',
      glow: 'rgba(249, 115, 22, 0.5)',
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
      tailwind: 'orange-500'
    },
    yellow: {
      primary: '#eab308',
      secondary: '#ca8a04',
      glow: 'rgba(234, 179, 8, 0.5)',
      gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
      tailwind: 'yellow-500'
    }
  };
  return colors[accent] || colors.cyan;
};


  const accentColors = getAccentColor(currentEvent.accent);

  return (
    <section className="special-events-section">
      
      {/* Cool Background Effects */}
      <div className="cyberpunk-bg">
        {/* Matrix Rain */}
        <div className="matrix-rain"></div>
        
        {/* Circuit Board Pattern */}
        <div className="circuit-pattern"></div>
        
        {/* Floating Hexagons */}
        <div className="hex-background">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="hex-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Digital Grid */}
        <div className="digital-grid"></div>
        
        {/* Scan Lines */}
        <div className="scan-lines-bg"></div>
        
        {/* Particle Stream */}
        <div className="particle-stream">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="stream-particle"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="special-events-container">
        
        {/* Enhanced Cyberpunk Heading */}
        <div className="special-events-title-section">
          <div className="cyberpunk-title-container">
            
            {/* Glitch Background */}
            <div className="glitch-bg"></div>
            
            {/* Main Title */}
            <h2 
              className="cyberpunk-title"
              data-text="SPECIAL EVENTS"
            >
              <span className="title-gradient">
                SPECIAL EVENTS
              </span>
            </h2>
            
            {/* Corner Brackets */}
            <div className="corner-bracket corner-bracket-tl corner-glow"></div>
            <div className="corner-bracket corner-bracket-tr corner-glow"></div>
            <div className="corner-bracket corner-bracket-bl corner-glow"></div>
            <div className="corner-bracket corner-bracket-br corner-glow"></div>
            
            {/* Status Bars */}
            <div className="status-bar status-bar-top"></div>
            <div className="status-bar status-bar-bottom"></div>
          </div>
        </div>
        
        <div 
          className={`special-events-card ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            '--accent-color': accentColors.primary,
            '--accent-glow': accentColors.glow
          }}
        >
          {/* Animated Grid Background */}
          <div className="grid-pattern"></div>
          
          {/* Holographic Scan Lines */}
          <div 
            className={`scan-lines ${isTransitioning ? 'transitioning' : 'normal'} animate-scan`}
            style={{
              background: `linear-gradient(to bottom, transparent, ${accentColors.glow}, transparent)`
            }}
          ></div>
          
          {/* Main Content Container */}
          <div className="content-container">
            
            {/* Desktop Layout */}
            <div className="desktop-layout">
              
              {/* Left Side - Text Content */}
              <div className="text-content">
                
                {/* Event Number */}
                <div className="event-number" style={{ color: accentColors.primary }}>
                  <div 
                    className="event-number-line"
                    style={{ background: accentColors.gradient }}
                  ></div>
                  <span className="cyber-alert-font">
                    EVENT 0{currentEventIndex + 1}
                  </span>
                  <div 
                    className="event-number-line"
                    style={{ background: accentColors.gradient }}
                  ></div>
                </div>
                
                {/* Event Title */}
                <h3 
                  className={`event-title cyber-alert-font flex ${
                    isTransitioning ? 'transitioning' : 'normal'
                  }`}
                >
                  {currentEvent.heading}
                </h3>
                
                {/* Event Description */}
                <p 
                  className={`event-description ${
                    isTransitioning ? 'transitioning' : 'normal'
                  }`}
                  style={{fontFamily: 'Orbitron, monospace'}}
                >
                  {currentEvent.description}
                </p>
              </div>
              
              {/* Right Side - Image */}
              <div className="image-content">
                
                {/* Image Container with Dynamic Border */}
                <div className="image-container">
                  <img 
                    src={currentEvent.image}
                    alt={currentEvent.heading}
                    className={`event-image ${
                      isTransitioning 
                        ? 'transitioning' 
                        : 'normal'
                    } ${isHovered ? 'hovered' : ''}`}
                    style={{ 
                      borderColor: accentColors.primary,
                      boxShadow: isTransitioning 
                        ? `0 0 30px ${accentColors.glow}, 0 0 60px ${accentColors.glow}` 
                        : `0 0 20px ${accentColors.glow}`
                    }}
                  />
                  
                  {/* Corner Accents */}
                  <div 
                    className="image-corner image-corner-tl"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  <div 
                    className="image-corner image-corner-tr"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  <div 
                    className="image-corner image-corner-bl"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  <div 
                    className="image-corner image-corner-br"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  
                  {/* Cyberpunk Glitch Effects */}
                  {isTransitioning && (
                    <>
                      <div className="glitch-overlay glitch-overlay-1"></div>
                      <div className="glitch-overlay glitch-overlay-2"></div>
                    </>
                  )}
                </div>
                
                {/* Floating Particles */}
                <div className="floating-particles">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="floating-particle"
                      style={{
                        backgroundColor: accentColors.primary,
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i * 10)}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + (i * 0.5)}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Layout - Text over Image */}
            <div className="mobile-layout">
              
              {/* Background Image */}
              <div className="mobile-bg-image">
                <img 
                  src={currentEvent.image}
                  alt={currentEvent.heading}
                  className={`mobile-bg-img ${
                    isTransitioning ? 'transitioning' : 'normal'
                  }`}
                />
                
                {/* Dark Overlay for Text Readability */}
                <div className="mobile-overlay"></div>
                
                {/* Cyberpunk Glitch Effects */}
                {isTransitioning && (
                  <>
                    <div className="glitch-overlay glitch-overlay-1"></div>
                    <div className="glitch-overlay glitch-overlay-2"></div>
                  </>
                )}
              </div>
              
              {/* Content Overlay */}
              <div className="mobile-content">
                
                {/* Event Number */}
                <div className="event-number" style={{ color: accentColors.primary }}>
                  <div 
                    className="event-number-line"
                    style={{ background: accentColors.gradient, width: '1.5rem' }}
                  ></div>
                  <span className="cyber-alert-font">
                    EVENT 0{currentEventIndex + 1}
                  </span>
                  <div 
                    className="event-number-line"
                    style={{ background: accentColors.gradient, width: '1.5rem' }}
                  ></div>
                </div>
                
                {/* Event Title */}
                <h3 
                  className={`mobile-event-title cyber-alert-font ${
                    isTransitioning ? 'transitioning' : 'normal'
                  }`}
                >
                  {currentEvent.heading}
                </h3>
                
                {/* Event Description */}
                <p 
                  className={`mobile-event-description ${
                    isTransitioning ? 'transitioning' : 'normal'
                  }`}
                  style={{fontFamily: 'Orbitron, monospace'}}
                >
                  {currentEvent.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="bottom-navigation">
            
            {/* Event Indicators */}
            <div className="event-indicators">
              {specialEvents.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => handleEventChange(index)}
                  className={`event-indicator ${
                    index === currentEventIndex ? 'active' : ''
                  }`}
                  style={{
                    backgroundColor: index === currentEventIndex ? accentColors.primary : '#4b5563',
                    boxShadow: index === currentEventIndex ? `0 0 10px ${accentColors.glow}` : 'none'
                  }}
                />
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="progress-bar-container">
              <div 
                className={`progress-bar ${
                  isTransitioning ? 'transitioning' : 'normal'
                } ${!isHovered && !isTransitioning ? 'auto-progress' : ''}`}
                style={{
                  background: accentColors.gradient
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialEvents;