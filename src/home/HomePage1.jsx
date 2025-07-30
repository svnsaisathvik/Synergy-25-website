import React, { useState, useEffect } from 'react';
import "./styles/HomePage1.css";
import FaqSection from './components/FaqSection';
import EventTimeline from '../events/components/EventTimeline';
import SpecialEvents from "./components/SpecialEvents";
import AboutSection from "./components/AboutSection";

const SynergyHomepage = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function getTimeRemaining() {
    const targetDate = new Date("2025-11-07T00:00:00");
    const now = new Date();
    const total = targetDate - now;

    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);

    return { days, hours, minutes };
  }

  useEffect(() => {
    // Clean up any lingering styles on component mount
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const countdownTimer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 60000); // Update every minute

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
      window.removeEventListener("scroll", handleScroll);
      // Clean up on unmount
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  const AnimatedBlock = ({ delay, initialX, initialY, finalX, finalY, gradient, size, scrollY, isLoaded }) => {
    const [position, setPosition] = useState({ x: initialX, y: initialY });

    useEffect(() => {
      if (isLoaded) {
        setTimeout(() => {
          setPosition({ x: finalX, y: finalY });
        }, delay);
      }
    }, [isLoaded, delay, finalX, finalY]);

    const translateY = position.y - scrollY * 0.5;
    const translateString = `translate(${position.x}px, ${translateY}px)`;

    return (
      <div
        className={`absolute rounded-lg ${size}`}
        style={{
          background: gradient,
          transform: translateString,
          transition: "transform 1s ease-out",
          boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)",
        }}
      />
    );
  };

  const neonPink = "linear-gradient(135deg, #FF4E9B 0%, #B100E8 100%)";
  const neonCyan = "linear-gradient(135deg, #00F0FF 0%, #008BFF 100%)";
  const neonPurple = "linear-gradient(135deg, #D200FF 0%, #7800FF 100%)";
  const neonOrange = "linear-gradient(135deg, #FF9F1C 0%, #FF3C00 100%)";
  const neonGreen = "linear-gradient(135deg, #00FFAE 0%, #00FFC2 100%)";

  return (
    <div className="homepage-container">
      {/* Load Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        @font-face {
          font-family: 'Anurati';
          src: url('../../public/fonts/Anurati-Regular.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
        
        .anurati-font {
          font-family: 'Anurati', 'Trebuchet MS', 'Arial Black', sans-serif;
          font-weight: normal;
          letter-spacing: 0.1em;
        }
        
        .quicksand-font {
          font-family: 'Quicksand', sans-serif;
        }
        
        .trebuchet-font {
          font-family: 'Trebuchet MS', sans-serif;
        }
        
        .orbitron-font {
          font-family: 'Orbitron', monospace;
        }

        /* Homepage specific styles to prevent layout conflicts */
        .homepage-container {
          min-height: 100vh;
          background: #000;
          color: white;
          width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        .homepage-section {
          position: relative;
          width: 100%;
          z-index: 1;
        }

        .homepage-section-content {
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 bg-[#0a0a23] bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Synergy 2025 Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a
                href="/events"
                className="text-gray-300 hover:text-pink-400 transition duration-200 font-semibold text-lg quicksand-font"
              >
                Events
              </a>
              <a href="#about" className="text-white hover:text-cyan-400 transition duration-200 font-medium text-lg quicksand-font">About</a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-pink-400 transition duration-200 font-semibold text-lg quicksand-font"
              >
                FAQ
              </a>
              <a
                href="#contact-us"
                className="text-gray-300 hover:text-pink-400 transition duration-200 font-semibold text-lg quicksand-font"
              >
                Contact Us
              </a>
              <a
                href="/teams"
                className="text-gray-300 hover:text-pink-400 transition duration-200 font-semibold text-lg quicksand-font"
              >
                Team
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="landing.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Blocks */}
        <div className="absolute inset-0">
          <AnimatedBlock delay={0}   initialX={900} initialY={500} finalX={200} finalY={360} gradient={neonPink}   size="w-16 h-16" scrollY={scrollY} isLoaded={isLoaded} />
          <AnimatedBlock delay={200} initialX={800} initialY={400} finalX={320} finalY={300} gradient={neonCyan}   size="w-20 h-20" scrollY={scrollY} isLoaded={isLoaded} />
          <AnimatedBlock delay={400} initialX={1000} initialY={450} finalX={400} finalY={380} gradient={neonPurple} size="w-18 h-18" scrollY={scrollY} isLoaded={isLoaded} />
          <AnimatedBlock delay={600} initialX={850} initialY={370} finalX={280} finalY={260} gradient={neonOrange} size="w-14 h-14" scrollY={scrollY} isLoaded={isLoaded} />
          <AnimatedBlock delay={800} initialX={1100} initialY={530} finalX={500} finalY={420} gradient={neonGreen}  size="w-16 h-16" scrollY={scrollY} isLoaded={isLoaded} />
        </div>

        {/* Central Logo */}
        <div className="relative z-20 text-center">
          <div className="mb-12">
            <div className="relative inline-block">
              {/* Synergy Text - Always visible */}
              <div className="relative">
                <div className="text-8xl font-bold mb-4 tracking-wider anurati-font">
                  <span className="text-white">SYNERGY</span>
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent anurati-font">
                  2025
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className={`mb-8 transition-all duration-1000 delay-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center items-center space-x-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-slate-600/30">
              
              {/* Days */}
              <div className="text-center">
                <div className="text-sm text-gray-400">Days</div>
                <div className="text-5xl font-bold text-white trebuchet-font">{timeLeft.days}</div>
              </div>

              {/* Hours */}
              <div className="text-center">
                <div className="text-sm text-gray-400">Hours</div>
                <div className="text-5xl font-bold text-white trebuchet-font">{timeLeft.hours.toString().padStart(2, '0')}</div>
              </div>

              {/* Minutes */}
              <div className="text-center">
                <div className="text-sm text-gray-400">Minutes</div>
                <div className="text-5xl font-bold text-white trebuchet-font">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              </div>
            </div>

            <div className="text-4xl font-bold text-white mt-4 trebuchet-font">to go</div>
          </div>
        </div>
      </section>

      {/* Event Timeline Section - Properly isolated */}
      <section className="homepage-section relative w-full bg-black">
        <div className="homepage-section-content w-full" style={{ isolation: 'isolate' }}>
          <EventTimeline/>
        </div>
      </section>

      {/* About Section - Fixed spacing and alignment */}
          <AboutSection/>

      
      {/* Special Events Section - Fixed spacing and alignment */}
          <SpecialEvents/>

      
      {/* FAQ Section - Proper spacing */}
      <section id="faq">
          <FaqSection />
      </section>

      {/* Footer - Fixed spacing */}
      <footer id="contact-us" className="relative w-full bg-[#0a0a23] py-12 border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            
            {/* IIITB Section */}
            <div className="bg-white p-1 rounded-lg shadow-md">
              <img
                src="/IIITB-logo.png"
                alt="IIIT Bangalore Logo"
                className="h-12 w-auto object-contain bg-[#0a0a23]"
              />
            </div>

            {/* Synergy Logo Section */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Synergy 2025 Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Contact Icons */}
            <div>
              <div className="text-white font-semibold mb-3 text-center md:text-left quicksand-font">CONTACT US</div>
              <div className="flex space-x-4">
                {['📧', '📱', '💼', '📞'].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-200 shadow-md"
                  >
                    <span className="text-blue-600 text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Glow Divider */}
          <div className="mt-10">
            <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 rounded-full opacity-60 blur-sm" />
            <p className="text-center text-sm text-gray-400 mt-6">© 2025 Synergy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SynergyHomepage;