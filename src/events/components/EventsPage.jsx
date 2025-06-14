import React, { useState, useRef, useEffect, useCallback } from 'react';
import DaySection from './DaySection';
import CustomScrollbar from './CustomScrollbar';
import eventsData from '../data/events.json';
import EventModal from './EventModal';
import FloatingElements from "../../home/components/FloatingElements";
import '../styles/EventsPage.css';
import { CircuitBoard, Cpu, GithubIcon, ArrowLeft, ChevronLeft } from 'lucide-react';

const EventsPage = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  
  const sectionRefs = useRef([null, null, null]);
  const pageRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Handle back navigation
  const handleBack = useCallback(() => {
    // Navigate back or to home page
    window.history.back();
  }, []);

  // Detect if device is mobile
  const checkIfMobile = useCallback(() => {
    const mobile = window.innerWidth <= 768 || 
                  ('ontouchstart' in window) || 
                  (navigator.maxTouchPoints > 0);
    setIsMobile(mobile);
  }, []);

  // Handle window resize
  const handleResize = useCallback(() => {
    checkIfMobile();
    const newWidth = window.innerWidth;
    const newHeight = Math.min(window.innerHeight * 0.4, 400);
    setCanvasSize({ width: newWidth, height: newHeight });
  }, [checkIfMobile]);

  // Optimized matrix effect for mobile
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvasSize.width || window.innerWidth;
    canvas.height = canvasSize.height || Math.min(window.innerHeight * 0.4, 400);

    // Adjust performance based on device type
    const fontSize = isMobile ? 16 : 14;
    const animationSpeed = isMobile ? 80 : 50; // Slower on mobile for better performance
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    const chars = '01';

    ctx.font = `${fontSize}px monospace`;

    const matrix = () => {
      // Lighter effect on mobile to save battery
      ctx.fillStyle = isMobile ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const startAnimation = () => {
      matrix();
      animationFrameRef.current = setTimeout(startAnimation, animationSpeed);
    };

    startAnimation();

    return () => {
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
      }
    };
  }, [isMobile, canvasSize]);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!pageRef.current) return;
    
    const scrollPosition = pageRef.current.scrollTop;
    const scrollHeight = pageRef.current.scrollHeight - pageRef.current.clientHeight;
    const progress = Math.min(scrollPosition / scrollHeight, 1);
    setScrollProgress(progress);
    
    // Update active day based on scroll position
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const { offsetTop } = ref;
        const offset = isMobile ? 100 : 200; // Smaller offset on mobile
        if (scrollPosition >= offsetTop - offset) {
          setActiveDay(index + 1);
        }
      }
    });
  }, [isMobile]);

  // Smooth scroll to day section
  const scrollToDay = useCallback((day) => {
    const ref = sectionRefs.current[day - 1];
    if (ref && pageRef.current) {
      const offset = isMobile ? 20 : 50;
      pageRef.current.scrollTo({
        top: ref.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }, [isMobile]);

  // Modal handlers
  const openEventModal = useCallback((event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    // Prevent body scroll on mobile when modal is open
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }
  }, [isMobile]);

  const closeEventModal = useCallback(() => {
    setIsModalOpen(false);
    // Re-enable body scroll
    if (isMobile) {
      document.body.style.overflow = 'auto';
    }
    setTimeout(() => setSelectedEvent(null), 300);
  }, [isMobile]);

  // Initialize responsive behavior
  useEffect(() => {
    checkIfMobile();
    handleResize();
    
    const throttledResize = (() => {
      let timeoutId = null;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleResize, 150);
      };
    })();

    window.addEventListener('resize', throttledResize);
    window.addEventListener('orientationchange', throttledResize);
    
    return () => {
      window.removeEventListener('resize', throttledResize);
      window.removeEventListener('orientationchange', throttledResize);
    };
  }, [handleResize, checkIfMobile]);

  // Setup scroll listener with throttling
  useEffect(() => {
    const currentPageRef = pageRef.current;
    if (!currentPageRef) return;

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    currentPageRef.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      if (currentPageRef) {
        currentPageRef.removeEventListener('scroll', throttledScroll);
      }
    };
  }, [handleScroll]);

  // Handle touch events for better mobile interaction
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e) => {
      // Store initial touch position for swipe detection if needed
      const touch = e.touches[0];
      if (touch) {
        // Could implement swipe navigation here
      }
    };

    const handleTouchMove = (e) => {
      // Prevent horizontal scrolling on mobile
      if (e.touches.length === 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobile]);

  return (
    <div className="events-page" ref={pageRef}>
      <FloatingElements/>
      
      {/* Cyberpunk Back Button */}
      <button
        onClick={handleBack}
        className={`
          fixed top-4 left-4 z-50
          ${isMobile ? 'w-12 h-12' : 'w-14 h-14'}
          bg-black/80 backdrop-blur-sm
          border-2 border-cyan-400/50
          rounded-lg
          hover:border-cyan-300 hover:bg-cyan-400/10
          active:border-cyan-200 active:bg-cyan-400/20
          transition-all duration-300 ease-out
          group
          shadow-lg shadow-cyan-400/20
          hover:shadow-cyan-400/40
          hover:shadow-lg
          cursor-pointer
          ${isMobile ? 'touch-manipulation' : ''}
          relative
          overflow-hidden
        `}
        aria-label="Go back"
        style={{
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)',
        }}
      >
        {/* Main content container */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {isMobile ? (
            <ChevronLeft 
              className="w-7 h-7 text-cyan-300 group-hover:text-white transition-colors duration-300"
              strokeWidth={2.5}
            />
          ) : (
            <ArrowLeft 
              className="w-7 h-7 text-cyan-300 group-hover:text-white transition-colors duration-300"
              strokeWidth={2}
            />
          )}
        </div>
        
        {/* Glitch effect overlay */}
        <div 
          className="
            absolute inset-0 rounded-lg
            bg-gradient-to-r from-cyan-400/10 to-purple-500/10
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            animate-pulse
            z-10
          "
        />
        
        {/* Scan line effect */}
        <div 
          className="
            absolute inset-0 rounded-lg overflow-hidden
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            z-10
          "
        >
          <div 
            className="
              absolute top-0 left-0 w-full h-0.5
              bg-gradient-to-r from-transparent via-cyan-300 to-transparent
              animate-pulse
            "
          />
        </div>

        {/* Background gradient effect */}
        <div 
          className="
            absolute inset-0 rounded-lg
            bg-gradient-to-r from-cyan-400/20 to-purple-500/20
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            z-0
          "
        />
      </button>

      <header className="events-header">
        {/* <canvas 
          ref={canvasRef} 
          className="matrix-canvas"
          style={{ 
            width: '100%', 
            height: '100%',
            // Optimize rendering on mobile
            imageRendering: isMobile ? 'pixelated' : 'auto'
          }}
        /> */}
        <div className="header-content">
          <div className="logo-container">
            <div className="animated-icons">
              <CircuitBoard 
                className="icon icon-1" 
                aria-label="Circuit Board Icon"
              />
              <Cpu 
                className="icon icon-2" 
                aria-label="CPU Icon"
              />
              <GithubIcon 
                className="icon icon-3" 
                aria-label="GitHub Icon"
              />
            </div>
            <div className="glitch-container">
              <h1 
                className="gradient-text font-SDGlitch" 
                data-text="EVENTS" 
                style={{ fontFamily: "CyberAlert" }}
                role="banner"
              >
                EVENTS
              </h1>
            </div>
          </div>
        </div>
      </header>
      
      <CustomScrollbar 
        progress={scrollProgress} 
        activeDay={activeDay} 
        onDayClick={scrollToDay}
        isMobile={isMobile}
      />
      
      <div className="events-container">
        {eventsData.events.map((dayData, index) => (
          <DaySection 
            id = {dayData.day}
            key={dayData.day}
            ref={(el) => sectionRefs.current[index] = el}
            dayData={dayData}
            onEventClick={openEventModal}
            isActive={activeDay === dayData.day}
            isMobile={isMobile}
          />
        ))}
      </div>

      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          isOpen={isModalOpen} 
          onClose={closeEventModal}
          isMobile={isMobile}
        />
      )}
      
      {/* Add screen effect overlay for enhanced cyberpunk feel */}
      <div className="screen-effect" />
      
      {/* Add scan line effect */}
      <div className="scan-line" />
    </div>
  );
};

export default EventsPage;