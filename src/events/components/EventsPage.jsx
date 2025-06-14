import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DaySection from './DaySection';
import CustomScrollbar from './CustomScrollbar';
import eventsData from '../data/events.json';
import EventModal from './EventModal';
import FloatingElements from "../../home/components/FloatingElements";
import '../styles/EventsPage.css';
import { CircuitBoard, Cpu, GithubIcon, ArrowLeft, ChevronLeft } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

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
  const scrollTriggerRefs = useRef([]);

  // Handle back navigation with GSAP animation
  const handleBack = useCallback(() => {
    // Add a smooth fade out animation before navigation
    gsap.to(pageRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        window.history.back();
      }
    });
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
    
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
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
    const animationSpeed = isMobile ? 80 : 50;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    const chars = '01';

    ctx.font = `${fontSize}px monospace`;

    const matrix = () => {
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

  // GSAP-powered smooth scroll to day section
  const scrollToDay = useCallback((day) => {
    const ref = sectionRefs.current[day - 1];
    if (ref && pageRef.current) {
      const offset = isMobile ? 20 : 50;
      
      // Use GSAP for buttery smooth scrolling
      gsap.to(pageRef.current, {
        scrollTo: {
          y: ref.offsetTop - offset,
          autoKill: false
        },
        duration: isMobile ? 0.8 : 1.2,
        ease: "power2.inOut",
        onUpdate: () => {
          // Update scroll progress during animation
          const scrollPosition = pageRef.current.scrollTop;
          const scrollHeight = pageRef.current.scrollHeight - pageRef.current.clientHeight;
          const progress = Math.min(scrollPosition / scrollHeight, 1);
          setScrollProgress(progress);
        }
      });

      // Add a subtle scale animation to the target section
      gsap.fromTo(ref, 
        { scale: 0.98, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.2)", delay: 0.3 }
      );
    }
  }, [isMobile]);

  // Modal handlers with GSAP animations
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

  // Initialize GSAP ScrollTrigger for each day section
  useEffect(() => {
    // Clear existing ScrollTriggers
    scrollTriggerRefs.current.forEach(trigger => trigger.kill());
    scrollTriggerRefs.current = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        // Create ScrollTrigger for each section
        const trigger = ScrollTrigger.create({
          trigger: ref,
          start: "top 60%",
          end: "bottom 40%",
          scroller: pageRef.current,
          onEnter: () => {
            setActiveDay(index + 1);
            // Add entrance animation
            gsap.fromTo(ref.querySelectorAll('.event-card'), 
              { 
                y: 30, 
                opacity: 0,
                scale: 0.95
              },
              { 
                y: 0, 
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
              }
            );
          },
          onEnterBack: () => {
            setActiveDay(index + 1);
          }
        });

        scrollTriggerRefs.current.push(trigger);

        // Add initial animation for sections
        gsap.set(ref, { opacity: 0, y: 50 });
        gsap.to(ref, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out"
        });
      }
    });

    // Create main scroll progress trigger
    const progressTrigger = ScrollTrigger.create({
      trigger: pageRef.current,
      start: "top top",
      end: "bottom bottom",
      scroller: pageRef.current,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      }
    });

    scrollTriggerRefs.current.push(progressTrigger);

    return () => {
      scrollTriggerRefs.current.forEach(trigger => trigger.kill());
      scrollTriggerRefs.current = [];
    };
  }, [eventsData]);

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

  // Add entrance animation for the entire page
  useEffect(() => {
    // Animate page entrance
    gsap.fromTo(pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animate header elements
    gsap.fromTo('.header-content',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    // Animate floating elements
    gsap.fromTo('.floating-elements',
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.2, delay: 0.5, ease: "back.out(1.7)" }
    );

    // Add continuous floating animation
    gsap.to('.floating-elements', {
      y: "+=20",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

  }, []);

  // Add smooth scroll behavior for better UX
  useEffect(() => {
    // Configure ScrollTrigger defaults
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    // Add smooth scrolling to all internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          gsap.to(pageRef.current, {
            scrollTo: target,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  // Add parallax effect to background elements
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scroller: pageRef.current,
          scrub: true
        }
      });
    });
  }, []);

  return (
    <div className="events-page" ref={pageRef}>
      <FloatingElements/>
      
      {/* Cyberpunk Back Button with enhanced animations */}
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
        onMouseEnter={() => {
          gsap.to(this, { scale: 1.05, duration: 0.3, ease: "back.out(1.7)" });
        }}
        onMouseLeave={() => {
          gsap.to(this, { scale: 1, duration: 0.3, ease: "power2.out" });
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
            id={dayData.day}
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
      <div className="screen-effect parallax-element" />
      
      {/* Add scan line effect */}
      <div className="scan-line parallax-element" />
    </div>
  );
};

export default EventsPage;