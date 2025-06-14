import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/CustomScrollbar.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CustomScrollbar = ({
  progress = 0,
  activeDay = 1,
  onDayClick,
  // New GSAP-specific props
  triggerElement = ".scroll-content", // Element that triggers the scroll
  startTrigger = "top center",
  endTrigger = "bottom center",
  scrub = true,
  onProgressUpdate, // Callback for progress updates
  onActiveDayChange // Callback for active day changes
}) => {
  const progressBarRef = useRef(null);
  const scrollbarRef = useRef(null);
  const dayMarkersRef = useRef([]);

  useEffect(() => {
    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === 'customScrollbar') {
        trigger.kill();
      }
    });

    // Create main scroll animation for progress bar
    const progressAnimation = gsap.to(progressBarRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        id: 'customScrollbar',
        trigger: triggerElement,
        start: startTrigger,
        end: endTrigger,
        scrub: scrub,
        onUpdate: (self) => {
          const progressValue = self.progress;
          
          // Update progress callback
          if (onProgressUpdate) {
            onProgressUpdate(progressValue);
          }

          // Calculate active day based on progress
          let newActiveDay = 1;
          if (progressValue > 0.33) newActiveDay = 2;
          if (progressValue > 0.66) newActiveDay = 3;

          // Update active day callback
          if (onActiveDayChange && newActiveDay !== activeDay) {
            onActiveDayChange(newActiveDay);
          }

          // Animate day markers based on progress
          dayMarkersRef.current.forEach((marker, index) => {
            const dayProgress = (index + 1) / 3;
            const isActive = progressValue >= dayProgress - 0.16;
            
            if (marker) {
              gsap.to(marker, {
                scale: isActive ? 1.1 : 1,
                opacity: isActive ? 1 : 0.7,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        }
      }
    });

    // Animate day markers on mount
    gsap.fromTo(dayMarkersRef.current, 
      { 
        opacity: 0, 
        scale: 0.8,
        x: -20 
      },
      { 
        opacity: 0.7, 
        scale: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === 'customScrollbar') {
          trigger.kill();
        }
      });
    };
  }, [triggerElement, startTrigger, endTrigger, scrub, onProgressUpdate, onActiveDayChange, activeDay]);

  // Handle day click with smooth scroll animation
  const handleDayClick = (day) => {
    if (onDayClick) {
      onDayClick(day);
    }

    // Animate clicked marker
    const clickedMarker = dayMarkersRef.current[day - 1];
    if (clickedMarker) {
      gsap.to(clickedMarker, {
        scale: 1.2,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }

    // Optional: Scroll to corresponding section
    const targetElement = document.querySelector(`[data-day="${day}"]`) || 
                         document.querySelector(`.day-${day}`) ||
                         document.querySelector(`#day-${day}`);
    
    if (targetElement) {
      gsap.to(window, {
        scrollTo: {
          y: targetElement,
          offsetY: 100
        },
        duration: 1,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <div className="custom-scrollbar" ref={scrollbarRef}>
      <div className="progress-container">
        <div
          ref={progressBarRef}
          className="progress-bar"
          style={{ height: `${progress * 100}%` }}
        ></div>
        {[1, 2, 3].map((day, index) => (
          <div
            key={day}
            ref={el => dayMarkersRef.current[index] = el}
            className={`day-marker ${activeDay === day ? 'active' : ''}`}
            style={{ top: `${(day - 1) * 33 + 10}%` }}
            onClick={() => handleDayClick(day)}
          >
            <div className="marker-content">
              <span className="day-number">DAY {day}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomScrollbar;