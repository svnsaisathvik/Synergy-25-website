import React, { useState, useRef, useEffect } from 'react';
import DaySection from './DaySection';
import CustomScrollbar from './CustomScrollbar';
import eventsData from '../data/events.json';
import EventModal from './EventModal';
import '../styles/EventsPage.css';
import { CircuitBoard, Cpu, GithubIcon } from 'lucide-react';

const EventsPage = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const sectionRefs = useRef([null, null, null]);
  const pageRef = useRef(null);
  const canvasRef = useRef(null);

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
    const chars = '01';

    ctx.font = `${fontSize}px monospace`;

    const matrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
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

    const interval = setInterval(matrix, 50);

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
        top: ref.offsetTop - 50,
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
      <header className="events-header">
        <canvas ref={canvasRef} className="matrix-canvas"></canvas>
        <div className="header-content">
          <div className="logo-container">
            <div className="animated-icons">
              <CircuitBoard className="icon icon-1" />
              <Cpu className="icon icon-2" />
              <GithubIcon className="icon icon-3" />
            </div>
            <div className="glitch-container">
              <h1 className="glitch font-SDGlitch" data-text="EVENTS" style={{fontFamily:"CyberAlert"}}>EVENTS</h1>
            </div>
          </div>
        </div>
      </header>
      
      <CustomScrollbar 
        progress={scrollProgress} 
        activeDay={activeDay} 
        onDayClick={scrollToDay} 
      />
      
      <div className="events-container">
        {eventsData.events.map((dayData, index) => (
          <DaySection 
            key={dayData.day}
            ref={(el) => sectionRefs.current[index] = el}
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
    </div>
  );
};

export default EventsPage;