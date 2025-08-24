import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DaySection from './DaySection';
import CustomScrollbar from './CustomScrollbar';
import { events } from '../data/events.json';
import EventModal from './EventModal';
import '../styles/EventsPage.css';
import { ArrowLeft } from 'lucide-react';
import '../styles/main.css';

const EventsPage = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const sectionRefs = useRef([]);
  const pageRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400; // Header height

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    ctx.font = `${fontSize}px monospace`;

    const matrix = () => {
      ctx.fillStyle = 'rgba(7, 2, 21, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00d4ff';
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

    const interval = setInterval(matrix, 100);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    const id = location.hash.substring(1);
    if(id!=null){
      const day1 = events[0].list;
      const day2 = events[1].list;
      const day3 = events[2].list;
      const days = [...day1,...day2,...day3];
      const event = days.find((e)=>e.id==id);

      if(event!=null){
        openEventModal(event);
      }
    }
  },[location])

  const handleScroll = () => {
    if (pageRef.current) {
      const scrollPosition = pageRef.current.scrollTop;
      const scrollHeight = pageRef.current.scrollHeight - pageRef.current.clientHeight;
      const progress = scrollPosition / scrollHeight;
      setScrollProgress(progress);
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop } = ref;
          if (scrollPosition >= offsetTop - 200) {
            setActiveDay(index + 1);
          }
        }
      });
    }
  };

  const scrollToDay = (day) => {
    const ref = sectionRefs.current[day - 1];
    if (ref) {
      pageRef.current?.scrollTo({
        top: ref.offsetTop - 150,
        behavior: 'smooth'
      });
    }
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const handleBackClick = () => {
    // Navigate back to home or previous page
    window.history.back();
  };

  useEffect(() => {
    const currentPageRef = pageRef.current;
    if (currentPageRef) {
      currentPageRef.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (currentPageRef) {
        currentPageRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="events-page" ref={pageRef}>
      {/* Smaller Cyberpunk Back Button */}
      <a href="/" className="cyber-back-button">
        <div className="back-button-frame">
          <div className="frame-corner top-left"></div>
          <div className="frame-corner top-right"></div>
          <div className="frame-corner bottom-left"></div>
          <div className="frame-corner bottom-right"></div>
        </div>
        <ArrowLeft className="back-icon" />
        <span className="back-text">BACK</span>
        <div className="button-glow-effect"></div>
      </a>

      {/* Events Header with Matrix Background */}
      <header className="events-header">
        <canvas ref={canvasRef} className="matrix-canvas"></canvas>
        <div className="header-content">
          <h1 className="events-title cyber-glitch gradient-text" data-text="EVENTS" style={{fontFamily:"CyberAlert",fontSize:"l"}}>
            EVENTS
          </h1>
        </div>
      </header>
      
      <CustomScrollbar 
        progress={scrollProgress} 
        activeDay={activeDay} 
        onDayClick={scrollToDay} 
      />
      
      <div className="events-container">
        {events.map((dayData, index) => (
          <DaySection 
            key={dayData.day}
            ref={el => {
              sectionRefs.current[index] = el;
            }}
            dayData={dayData}
            onEventClick={openEventModal}
            isActive={activeDay === dayData.day}
          />
        ))}
      </div>
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          isOpen={isModalOpen} 
          onClose={closeEventModal} 
        />
      )}

      {/* Scan line effect */}
      <div className="scan-line"></div>
    </div>
  );
};

export default EventsPage;