import React, { useState, useEffect, useRef, useCallback } from 'react';
import events from "../data/events.json";

const EventTimeline = () => {
  const [day, setDay] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const scrollContainerRef = useRef(null);
  const timelineRef = useRef(null);
  const isInitialScrollDone = useRef(false);
  const eventData = events.events;
  const currentDayEvents = eventData[day]?.list || [];
  const days = eventData.map((_, index) => `day${index + 1}`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentTimelineRef = timelineRef.current;
    if (currentTimelineRef) {
      observer.observe(currentTimelineRef);
    }

    return () => {
      if (currentTimelineRef) {
        observer.unobserve(currentTimelineRef);
      }
    };
  }, []);

  const getCircularEvents = useCallback(() => {
    if (currentDayEvents.length === 0) return [];
    const copies = 3;
    const circularEvents = [];
    for (let i = 0; i < copies; i++) {
      currentDayEvents.forEach((event, index) => {
        circularEvents.push({
          ...event,
          circularId: `${event.id}-copy-${i}`,
          originalIndex: index,
        });
      });
    }
    return circularEvents;
  }, [currentDayEvents]);

  const circularEvents = getCircularEvents();
  const originalLength = currentDayEvents.length;
  const middleCopyStartIndex = originalLength;

  const scrollToCard = useCallback((circularIndex, smooth = true) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardElement = container.children[circularIndex];
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, []);

  const handleDayClick = (selectedDay) => {
    if (selectedDay === day) return;
    setDay(selectedDay);
    setActiveIndex(0);
  };

  const handleCardClick = (circularIndex) => {
    const originalIndex = circularIndex % originalLength;
    setActiveIndex(originalIndex);
  };

  const handleArrowClick = (direction) => {
    if (originalLength === 0) return;
    let newActiveIndex = activeIndex;
    if (direction === 'left') {
      newActiveIndex = (activeIndex - 1 + originalLength) % originalLength;
    } else {
      newActiveIndex = (activeIndex + 1) % originalLength;
    }
    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    if (isInView && originalLength > 0 && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetCircularIndex = middleCopyStartIndex + activeIndex;
      const cardElement = container.children[targetCircularIndex];

      if (cardElement) {
        if (!isInitialScrollDone.current) {
          isInitialScrollDone.current = true;
          const containerWidth = container.offsetWidth;
          const cardWidth = cardElement.offsetWidth;
          const cardOffsetLeft = cardElement.offsetLeft;
          const scrollLeft = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);
          container.scrollLeft = scrollLeft;
        } else {
          scrollToCard(targetCircularIndex, true);
        }
      }
    }
  }, [activeIndex, day, originalLength, middleCopyStartIndex, scrollToCard, isInView]);


  return (
    <div ref={timelineRef} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      color: 'white',
      position: 'relative',
      fontFamily: "'Orbitron', monospace",
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(30deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%),
            linear-gradient(-30deg, transparent 24%, rgba(255, 0, 255, 0.1) 25%, rgba(255, 0, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, 0.1) 75%, rgba(255, 0, 255, 0.1) 76%, transparent 77%)
          `,
          backgroundSize: '50px 86.6px',
          animation: 'hexFlow 20s linear infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.2) 0%, transparent 50%)
          `,
          animation: 'circuitPulse 3s ease-in-out infinite alternate'
        }}></div>
      </div>

      {/* Scan Lines Effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4))',
        backgroundSize: '100% 4px',
        animation: 'flicker 0.15s infinite',
        pointerEvents: 'none',
        zIndex: 5
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.5rem'
      }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 900,
            background: 'linear-gradient(90deg, #0ff, #f0f, #0ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            textTransform: 'uppercase',
            position: 'relative',
            textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #f0f, 0 0 40px #f0f',
            fontFamily: "'Orbitron', monospace",
            margin: 0,
            marginBottom: '1rem',
            backgroundSize: '200% 100%',
            animation: 'titleGradientFlow 3s ease-in-out infinite alternate'
          }}>
            EVENT TIMELINE
          </h1>
          <div style={{
            width: '150px',
            height: '3px',
            background: 'linear-gradient(90deg, #0ff, #f0f, #0ff)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Day Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            background: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '9999px',
            padding: '0.25rem',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)'
          }}>
            <div style={{
              position: 'absolute',
              height: 'calc(100% - 8px)',
              top: '4px',
              width: `calc(${100 / days.length}% - 4px)`,
              left: `calc(${day * (100 / days.length)}% + 6px)`,
              background: 'linear-gradient(45deg, #0ff, #f0f)',
              borderRadius: '9999px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}></div>
            {days.map((d, index) => (
              <button
                key={d}
                style={{
                  position: 'relative',
                  zIndex: 10,
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: day === index ? '#000' : '#fff',
                  textTransform: 'uppercase',
                  borderRadius: '9999px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Orbitron', monospace",
                  transition: 'all 0.3s'
                }}
                onClick={() => handleDayClick(index)}
              >
                Day {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation and Events */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          {/* Left Arrow */}
          <button 
            onClick={() => handleArrowClick('left')}
            className="timeline-nav-arrow timeline-nav-arrow-left"
            style={{
              position: 'absolute',
              top: '50%',
              left: '1rem',
              transform: 'translateY(-50%)',
              zIndex: 40,
              width: '3rem',
              height: '3rem',
              background: 'rgba(0, 0, 0, 0.9)',
              border: '2px solid #0ff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0ff',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
            }}
          >
            <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => handleArrowClick('right')}
            className="timeline-nav-arrow timeline-nav-arrow-right"
            style={{
              position: 'absolute',
              top: '50%',
              right: '1rem',
              transform: 'translateY(-50%)',
              zIndex: 40,
              width: '3rem',
              height: '3rem',
              background: 'rgba(0, 0, 0, 0.9)',
              border: '2px solid #0ff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0ff',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
            }}
          >
            <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Events Container */}
          <div 
            ref={scrollContainerRef}
            className="timeline-scroll-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              overflowX: 'auto',
              overflowY: 'visible',
              padding: '4rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              position: 'relative',
              scrollSnapType: 'x mandatory',
              justifyContent: 'flex-start'
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
                <a href={"/events#"+event.id}>
                <EventPoster
                  key={event.circularId}
                  event={event}
                  isActive={isActive}
                  distance={distance}
                  onClick={() => handleCardClick(circularIndex)}
                />
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          {currentDayEvents.map((_, index) => (
            <button
              key={index}
              style={{
                width: '0.875rem',
                height: '0.875rem',
                borderRadius: '50%',
                background: 'transparent',
                position: 'relative',
                cursor: 'pointer',
                border: 'none',
                padding: 0
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div style={{
                position: 'absolute',
                inset: index === activeIndex ? 0 : '25%',
                borderRadius: '50%',
                background: index === activeIndex ? '#0ff' : 'rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: index === activeIndex ? '0 0 8px #0ff' : 'none'
              }}></div>
              <div style={{
                position: 'absolute',
                inset: 0,
                border: `1px solid ${index === activeIndex ? '#0ff' : 'rgba(255, 255, 255, 0.2)'}`,
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                transform: index === activeIndex ? 'scale(1.4)' : 'scale(1)',
                boxShadow: index === activeIndex ? '0 0 12px rgba(0, 255, 255, 0.5)' : 'none'
              }}></div>
            </button>
          ))}
        </div>

        {/* Status Display */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 1.25rem',
            background: 'rgba(0, 0, 0, 0.7)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            borderRadius: '9999px',
            backdropFilter: 'blur(10px)',
            fontFamily: "'Orbitron', monospace"
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#0f0',
                boxShadow: '0 0 8px #0f0',
                animation: 'pulse 2s infinite'
              }}></div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#0f0' }}>SYSTEM ONLINE</span>
            </div>
            <div style={{ width: '1px', height: '0.875rem', background: 'rgba(0, 255, 255, 0.3)' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#0ff',
                boxShadow: '0 0 8px #0ff',
                animation: 'pulse 2s infinite'
              }}></div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#0ff' }}>
                EVENT {activeIndex + 1}/{originalLength}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        @keyframes hexFlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-86.6px); }
        }
        
        @keyframes circuitPulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
        
        @keyframes flicker {
          0% { opacity: 0.8; }
          50% { opacity: 0.6; }
          100% { opacity: 0.8; }
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        @keyframes titleGradientFlow {
          0% { 
            background-position: 0% 50%;
            filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.8));
          }
          100% { 
            background-position: 100% 50%;
            filter: drop-shadow(0 0 20px rgba(255, 0, 255, 0.8));
          }
        }

        @media (max-width: 768px) {
            .timeline-nav-arrow {
                top: 0;
                transform: translateY(0);
                width: 2.5rem;
                height: 2.5rem;
            }
            .timeline-nav-arrow-left {
                left: 1rem;
            }
            .timeline-nav-arrow-right {
                right: 1rem;
            }
            .timeline-scroll-container {
                padding: 5rem 1rem 4rem 1rem !important;
            }
        }
      `}</style>
    </div>
  );
};

const EventPoster = ({ event, isActive, distance, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setIsFlipped(false);
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isActive) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsFlipped(false);
  };
  
  const scale = isActive ? 1.15 : distance === 1 ? 0.9 : 0.75;
  const opacity = isActive ? 1 : distance === 1 ? 0.7 : 0.4;
  const zIndex = isActive ? 30 : distance === 1 ? 20 : 10;

  return (
    <div
      style={{
        flexShrink: 0,
        cursor: 'pointer',
        position: 'relative',
        width: '240px',
        scrollSnapAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        transform: `scale(${scale}) ${isActive ? 'translateY(-10px)' : ''}`,
        opacity,
        zIndex,
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          position: 'relative',
          width: '15rem',
          height: '20rem',
          perspective: '1200px',
          margin: '0 auto'
        }}>
          {isActive && (
            <div style={{
              position: 'absolute',
              inset: '-15px',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '1.25rem',
              zIndex: -1,
              animation: 'activePulse 2s ease-in-out infinite',
              boxShadow: '0 0 25px rgba(0, 255, 255, 0.2)'
            }}></div>
          )}
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}>
            {/* Front of card */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              borderRadius: '0.875rem',
              overflow: 'hidden',
              border: '2px solid transparent',
              background: 'linear-gradient(#000, #000) padding-box, linear-gradient(45deg, #0ff, #f0f, #0ff) border-box'
            }}>
              <img 
                src={event.image} 
                alt={event.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '0.75rem'
                }}
              />
              
              {/* Hover overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)',
                zIndex: 2,
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                borderRadius: '0.75rem'
              }}></div>
              
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                inset: '-3px',
                background: 'linear-gradient(45deg, #0ff, #f0f, #0ff)',
                borderRadius: '0.875rem',
                zIndex: -1,
                opacity: isHovered ? 0.7 : 0,
                filter: 'blur(12px)',
                transition: 'opacity 0.4s ease'
              }}></div>
            </div>

            {/* Back of card */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              borderRadius: '0.875rem',
              overflow: 'hidden',
              border: '2px solid transparent',
              background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a3a 100%)',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '1.5rem',
                zIndex: 1,
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0ff',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  textShadow: '0 0 8px rgba(0, 255, 255, 0.5)',
                  fontFamily: "'Orbitron', monospace",
                  lineHeight: 1.2,
                  wordWrap: 'break-word'
                }}>
                  {event.name}
                </h3>
                
                <div style={{
                  fontFamily: "'Orbitron', monospace",
                  color: '#fff',
                  width: '100%',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {event.about && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.375rem',
                      padding: '0.375rem 0.5rem',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '0.375rem',
                      border: '1px solid rgba(0, 255, 255, 0.1)',
                      minHeight: '2rem'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #ff6b00, #ffa500)',
                        flexShrink: 0
                      }}></div>
                      <span style={{
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        textAlign: 'center',
                        lineHeight: 1.3,
                        flex: 1,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        background: 'linear-gradient(45deg, #ff6b00, #ffa500)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: '#ffa500'
                      }}>
                        {event.about}
                      </span>
                    </div>
                  )}
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.375rem',
                    padding: '0.375rem 0.5rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '0.375rem',
                    border: '1px solid rgba(0, 255, 255, 0.1)',
                    minHeight: '2rem'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #00ffff, #0080ff)',
                      flexShrink: 0
                    }}></div>
                    <span style={{
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      textAlign: 'center',
                      lineHeight: 1.3,
                      flex: 1,
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}>
                      Time: {event.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isActive && (
            <div style={{
              position: 'absolute',
              top: '-1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10
            }}>
              <div style={{
                width: '1rem',
                height: '1rem',
                background: '#0ff',
                borderRadius: '50%',
                position: 'relative',
                animation: 'activePulse 1.5s infinite',
                boxShadow: '0 0 15px #0ff'
              }}></div>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', marginTop: '1.5rem' }}>
          <h3 style={{
            fontSize: isActive ? '1.125rem' : '1rem',
            fontWeight: 700,
            color: isActive ? '#0ff' : '#fff',
            textTransform: 'uppercase',
            textShadow: isActive ? '0 0 15px rgba(0, 255, 255, 0.8)' : '0 0 8px rgba(0, 255, 255, 0.3)',
            transition: 'all 0.4s ease',
            fontFamily: "'Orbitron', monospace",
            lineHeight: 1.2,
            textAlign: 'center',
            margin: 0,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '240px',
            minHeight: '1.5rem'
          }}>
            {event.name}
          </h3>
          
          {isActive && !isFlipped && (
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{
                width: '45px',
                height: '1.5px',
                background: 'linear-gradient(90deg, transparent, #0ff, transparent)',
                margin: '0.5rem auto'
              }}></div>
              <div style={{
                fontSize: '0.875rem',
                color: '#0ff',
                fontFamily: "'Orbitron', monospace",
                fontWeight: 600,
                textAlign: 'center',
                margin: 0
              }}>
                {event.time}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes activePulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.02); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default EventTimeline;