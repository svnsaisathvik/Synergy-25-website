import React, { useState, useEffect, useRef } from 'react';
import events from "../data/events.json"

const eventData = events.events;

const Timeline = () => {
  const [day, setDay] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Get events for current day
  const currentDayEvents = eventData[day]?.list || [];
  const days = eventData.map((dayData, index) => `day${index + 1}`);

  const handleDayClick = (selectedDay) => {
    setDay(selectedDay);
    setActiveIndex(0);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
    scrollToCard(index);
  };

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = window.innerWidth >= 768 ? 350 : 300;
    const gap = window.innerWidth >= 768 ? 32 : 20;
    const cardWithGap = cardWidth + gap;
    const containerWidth = container.clientWidth;
    const targetScrollLeft = (index * cardWithGap) - (containerWidth / 2) + (cardWidth / 2);
    
    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth'
    });
  };

  // Auto-scroll on mobile swipe
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isScrolling;
    
    const handleScroll = () => {
      clearTimeout(isScrolling);
      
      isScrolling = setTimeout(() => {
        const cardWidth = window.innerWidth >= 768 ? 350 : 300;
        const gap = window.innerWidth >= 768 ? 32 : 20;
        const cardWithGap = cardWidth + gap;
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const centerOffset = containerWidth / 2;
        
        const newActiveIndex = Math.round((scrollLeft + centerOffset - window.innerWidth / 2) / cardWithGap);
        const clampedIndex = Math.max(0, Math.min(currentDayEvents.length - 1, newActiveIndex));
        
        if (clampedIndex !== activeIndex) {
          setActiveIndex(clampedIndex);
        }
      }, 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex, currentDayEvents.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: '300ms' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{ animationDelay: '700ms' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 lg:py-16">
        
        {/* Timeline Title */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: "CyberAlert" }}>
            EVENT TIMELINE
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
        </div>

        {/* Poster Display */}
        <div className="relative mb-8 lg:mb-12">
          {/* Left Scroll Button */}
          <button
            onClick={() => handleCardClick(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-30 group disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ fontFamily: "CyberAlert" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm border-2 border-cyan-400/50 rounded-full flex items-center justify-center text-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-1 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full"></div>
                <svg className="relative z-10 w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
                {/* Circuit pattern */}
                <div className="absolute inset-2 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="15" fill="none" stroke="url(#buttonGradient)" strokeWidth="0.5"/>
                    <circle cx="20" cy="20" r="2" fill="url(#buttonGradient)"/>
                    <defs>
                      <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4"/>
                        <stop offset="100%" stopColor="#9333EA"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => handleCardClick(Math.min(currentDayEvents.length - 1, activeIndex + 1))}
            disabled={activeIndex === currentDayEvents.length - 1}
            className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-30 group disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ fontFamily: "CyberAlert" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm border-2 border-cyan-400/50 rounded-full flex items-center justify-center text-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-1 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full"></div>
                <svg className="relative z-10 w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
                {/* Circuit pattern */}
                <div className="absolute inset-2 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="15" fill="none" stroke="url(#buttonGradient2)" strokeWidth="0.5"/>
                    <circle cx="20" cy="20" r="2" fill="url(#buttonGradient2)"/>
                    <defs>
                      <linearGradient id="buttonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4"/>
                        <stop offset="100%" stopColor="#9333EA"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-5 md:gap-8 overflow-x-auto pb-6 px-4 md:px-8 lg:px-16 scroll-smooth"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {currentDayEvents.map((event, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);

              return (
                <EventPoster
                  key={event.id}
                  event={event}
                  isActive={isActive}
                  distance={distance}
                  onClick={() => handleCardClick(index)}
                />
              );
            })}
          </div>
        </div>

        {/* Day Selection */}
        <div className="flex justify-center mb-6">
          <div className="relative bg-gradient-to-r from-cyan-400/20 to-purple-600/20 p-1 rounded-full border border-cyan-400/30">
            <div className="relative flex items-center bg-black/50 rounded-full backdrop-blur-sm">
              <div
                className="absolute h-10 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 border border-cyan-400/50 rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `calc(${100 / days.length}% - 4px)`,
                  left: `calc(${day * (100 / days.length)}% + 6px)`,
                }}
              />
              {days.map((d, index) => (
                <button
                  key={d}
                  className={`relative z-10 px-8 py-3 text-sm md:text-base font-bold transition-all duration-300 hover:scale-105 ${
                    day === index ? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" : "text-white/70 hover:text-cyan-300"
                  }`}
                  style={{ fontFamily: "CyberAlert" }}
                  onClick={() => handleDayClick(index)}
                >
                  Day {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-6">
          {currentDayEvents.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600 scale-125 shadow-lg shadow-cyan-400/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        {/* <div className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-xs md:text-sm opacity-80" style={{ fontFamily: "SDGlitch" }}>
          {typeof window !== 'undefined' && window.innerWidth >= 768 ? '← Use arrow buttons or scroll horizontally to browse events →' : 'Use arrow buttons or swipe to browse events'}
        </div> */}
      </div>

      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const EventPoster = ({ 
  event, 
  isActive, 
  distance, 
  onClick
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (isActive) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="flex-shrink-0 cursor-pointer transition-all duration-500 group"
      style={{
        scrollSnapAlign: 'center',
        transform: `scale(${isActive ? 1 : distance === 1 ? 0.85 : 0.7})`,
        opacity: isActive ? 1 : distance === 1 ? 0.8 : 0.5,
        zIndex: isActive ? 20 : distance === 1 ? 10 : 0
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center">
        {/* Poster Container with Flip Animation */}
        <div 
          className="relative w-80 md:w-96 h-96 md:h-[500px] mb-4 transition-transform duration-700"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div 
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front of Poster */}
            <div 
              className="absolute inset-0"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-600/50 rounded-2xl p-1 shadow-2xl shadow-cyan-400/20 group-hover:shadow-cyan-400/40 transition-shadow duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  {/* Poster Image */}
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/60 group-hover:to-purple-600/60 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Scan lines effect */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute top-1/4 left-0 right-0 animate-pulse"></div>
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent absolute top-3/4 left-0 right-0 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back of Poster - Event Details */}
            <div 
              className="absolute inset-0"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-600/50 rounded-2xl p-1 shadow-2xl shadow-purple-400/20">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-cyan-900/95 via-blue-900/95 to-black backdrop-blur-sm">
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center text-center">
                    {/* Event Title */}
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 tracking-wide" style={{ fontFamily: "CyberAlert" }}>
                      {event.name}
                    </h3>
                    
                    {/* Event Details */}
                    <div className="space-y-2 text-cyan-300 text-sm md:text-base" style={{ fontFamily: "CyberAlert" }}>
                    {event.about && (
                        <div className="flex justify-center items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">{event.about}</span>
                        </div>
                      )}
                      <div className="flex justify-center items-center gap-2" style={{fontFamily:"CyberAlert"}}>
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse"></div>
                        <span >Time: {event.time}</span>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Circuit Pattern Background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="url(#circuitGradient)" strokeWidth="0.5"/>
                      <circle cx="20" cy="20" r="1.5" fill="url(#circuitGradient)"/>
                      <circle cx="80" cy="20" r="1.5" fill="url(#circuitGradient)"/>
                      <circle cx="20" cy="80" r="1.5" fill="url(#circuitGradient)"/>
                      <circle cx="80" cy="80" r="1.5" fill="url(#circuitGradient)"/>
                      <circle cx="50" cy="50" r="2" fill="url(#circuitGradient)"/>
                      <path d="M20,20 L80,80 M80,20 L20,80" stroke="url(#circuitGradient)" strokeWidth="0.3"/>
                      <defs>
                        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06B6D4"/>
                          <stop offset="100%" stopColor="#9333EA"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active indicator */}
          {isActive && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            </div>
          )}
        </div>

        {/* Event Name */}
        <div className="text-center px-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight tracking-wide" style={{ fontFamily: "CyberAlert" }}>
            {event.name}
          </h3>
          {isActive && !isFlipped && (
            <div className="text-sm bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "SDGlitch" }}>
              {event.time}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;