import React, { useState, useEffect, useRef } from 'react';
import FloatingComponent from "./FloatingComponentsEvents";
import events from "../data/events.json"

const eventData = events.events;

const Timeline = () => {
  const [day, setDay] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Get events for current day
  const currentDayEvents = eventData[day]?.list || [];
  const days = eventData.map((dayData, index) => `day${index + 1}`);

  // Create circular array by duplicating events for seamless scrolling
  const getCircularEvents = () => {
    if (currentDayEvents.length === 0) return [];
    
    // Create multiple copies for smooth circular scrolling
    const copies = 3; // Show 3 copies of the array
    const circularEvents = [];
    
    for (let i = 0; i < copies; i++) {
      currentDayEvents.forEach((event, index) => {
        circularEvents.push({
          ...event,
          circularId: `${event.id}-copy-${i}`,
          originalIndex: index,
          copyIndex: i
        });
      });
    }
    
    return circularEvents;
  };

  const circularEvents = getCircularEvents();
  const originalLength = currentDayEvents.length;
  const middleCopyStartIndex = originalLength; // Start of middle copy

  const handleDayClick = (selectedDay) => {
    setDay(selectedDay);
    setActiveIndex(0);
    // Reset to center copy after day change
    setTimeout(() => {
      if (scrollContainerRef.current) {
        const targetIndex = middleCopyStartIndex;
        scrollToCard(targetIndex, false); // No smooth scroll for reset
        setActiveIndex(0);
      }
    }, 100);
  };

  const handleCardClick = (circularIndex) => {
    const originalIndex = circularIndex % originalLength;
    setActiveIndex(originalIndex);
    scrollToCard(circularIndex);
  };

  const handleArrowClick = (direction) => {
    const newOriginalIndex = direction === 'left' 
      ? (activeIndex - 1 + originalLength) % originalLength
      : (activeIndex + 1) % originalLength;
    
    // Find the closest instance of this card to current scroll position
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = window.innerWidth >= 768 ? 384 : 320;
    const gap = window.innerWidth >= 768 ? 32 : 20;
    const cardWithGap = cardWidth + gap;
    const currentScrollCenter = container.scrollLeft + container.clientWidth / 2;
    const currentCenterIndex = Math.round((currentScrollCenter - cardWidth / 2) / cardWithGap);

    // Find the target card index in the circular array
    let targetCircularIndex;
    if (direction === 'left') {
      targetCircularIndex = currentCenterIndex - 1;
    } else {
      targetCircularIndex = currentCenterIndex + 1;
    }

    setActiveIndex(newOriginalIndex);
    scrollToCard(targetCircularIndex);
  };

  const scrollToCard = (circularIndex, smooth = true) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = window.innerWidth >= 768 ? 384 : 320;
    const gap = window.innerWidth >= 768 ? 32 : 20;
    const cardWithGap = cardWidth + gap;
    const containerWidth = container.clientWidth;
    
    // Calculate scroll position to center the card
    const targetScrollLeft = (circularIndex * cardWithGap) - (containerWidth - cardWidth) / 2;
    
    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  // Initialize scroll position when component mounts or day changes
  useEffect(() => {
    if (circularEvents.length > 0) {
      setTimeout(() => {
        // Start at the middle copy
        const initialIndex = middleCopyStartIndex + activeIndex;
        scrollToCard(initialIndex, false);
      }, 100);
    }
  }, [day]);

  // Handle infinite scroll wraparound
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || originalLength === 0) return;

    const handleScroll = () => {
      const cardWidth = window.innerWidth >= 768 ? 384 : 320;
      const gap = window.innerWidth >= 768 ? 32 : 20;
      const cardWithGap = cardWidth + gap;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const maxScroll = container.scrollWidth - containerWidth;

      // Calculate which card is in center
      const centerPosition = scrollLeft + containerWidth / 2;
      const currentCenterIndex = Math.round((centerPosition - cardWidth / 2) / cardWithGap);
      const clampedIndex = Math.max(0, Math.min(circularEvents.length - 1, currentCenterIndex));
      
      // Update active index based on original index
      const newActiveIndex = clampedIndex % originalLength;
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }

      // Handle wraparound - if we're near the edges, jump to equivalent position
      const threshold = cardWithGap * 2; // 2 cards from edge
      
      if (scrollLeft < threshold) {
        // Near beginning, jump to end of first copy (middle section)
        const newScrollLeft = scrollLeft + (originalLength * cardWithGap);
        container.scrollTo({ left: newScrollLeft, behavior: 'auto' });
      } else if (scrollLeft > maxScroll - threshold) {
        // Near end, jump to beginning of last copy (middle section)
        const newScrollLeft = scrollLeft - (originalLength * cardWithGap);
        container.scrollTo({ left: newScrollLeft, behavior: 'auto' });
      }
    };

    let isScrolling;
    const debouncedHandleScroll = () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(handleScroll, 50);
    };

    container.addEventListener('scroll', debouncedHandleScroll);
    return () => container.removeEventListener('scroll', debouncedHandleScroll);
  }, [activeIndex, originalLength, circularEvents.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <FloatingComponent/>
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
            onClick={() => handleArrowClick('left')}
            className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-30 group"
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
            onClick={() => handleArrowClick('right')}
            className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-30 group"
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
            {circularEvents.map((event, circularIndex) => {
              const originalIndex = event.originalIndex;
              const isActive = originalIndex === activeIndex;
              const distance = Math.min(
                Math.abs(originalIndex - activeIndex),
                originalLength - Math.abs(originalIndex - activeIndex)
              );

              return (
                <EventPoster
                  key={event.circularId}
                  event={event}
                  isActive={isActive}
                  distance={distance}
                  onClick={() => handleCardClick(circularIndex)}
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
              onClick={() => {
                setActiveIndex(index);
                // Find current center and navigate to closest instance of target
                const container = scrollContainerRef.current;
                if (container) {
                  const cardWidth = window.innerWidth >= 768 ? 384 : 320;
                  const gap = window.innerWidth >= 768 ? 32 : 20;
                  const cardWithGap = cardWidth + gap;
                  const currentScrollCenter = container.scrollLeft + container.clientWidth / 2;
                  const currentCenterIndex = Math.round((currentScrollCenter - cardWidth / 2) / cardWithGap);
                  
                  // Find closest copy of target event
                  const targetCircularIndex = middleCopyStartIndex + index;
                  scrollToCard(targetCircularIndex);
                }
              }}
            />
          ))}
        </div>
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