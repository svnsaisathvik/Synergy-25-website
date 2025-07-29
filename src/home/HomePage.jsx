import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import FaqSection from './FaqSection';

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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Load Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
        
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
        {/* Optional: text beside logo */}
        {/* <span className="text-2xl font-bold text-white anurati-font">SYNERGY'25</span> */}
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

        {/* Animated Blocks - More casual positioning around the text */}
        <div className="absolute inset-0">
          {/* Casual blocks around SYNERGY text */}
         
          {/* Casual blocks around 2025 text */}
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

</div>

          {/* Countdown Timer */}
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
      </section>
      {/* Events Section */}
      <section id="events" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Hexagonal Pattern */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
<div class="socket">
  <div class="gel center-gel">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c1 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c2 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c3 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c4 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c5 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c6 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>

  <div class="gel c7 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>

  <div class="gel c8 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c9 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c10 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c11 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c12 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c13 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c14 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c15 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c16 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c17 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c18 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c19 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c20 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c21 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c22 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c23 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c24 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c25 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c26 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c28 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c29 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c30 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c31 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c32 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c33 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c34 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c35 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c36 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c37 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
</div>

            </div>
            <h2 className="text-5xl font-bold text-white relative z-10 py-8">
              EVENTS
            </h2>
          </div>

          {/* Event Days */}
          <div className="flex justify-center space-x-8 mb-12">
            {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
              <button
                key={day}
                className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-semibold text-lg quicksand-font"
              >
                {day}
              </button>
            ))}
          </div>

          {/* Event Posters Grid */}
          <div className="grid grid-cols-6 gap-4 mb-12">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-red-500 font-bold text-lg mb-2 trebuchet-font">DECEPTIVE</div>
                  <div className="text-white text-sm text-center mb-2 quicksand-font">AI VS REALITY</div>
                  <div className="text-xs text-gray-300 text-center quicksand-font">DEEP FAKE CHALLENGE</div>
                  <div className="flex-1 flex items-end">
                    <div className="text-xs text-gray-400 quicksand-font">REAL-TIME EVENT</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* About Section */}
<section id="about" className="py-24 bg-[#0a0a23] relative overflow-hidden text-white">
  {/* Cube Background */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0 opacity-20 scale-[1.8] pointer-events-none">
    <div className="cube scale-[2.5]">
      <div className="topD"></div>
      <div>
        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
      <div className="cube2">
        <div>
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="cube3">
          <div className="top3"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h3 className="text-4xl font-bold mb-6 text-center neon-text">About Synergy</h3>
        <p className="text-xl leading-relaxed quicksand-font text-gray-300">
          Synergy'25 is the annual techfest of IIIT-Bangalore, bringing together innovation and collaboration in an exciting event. It includes hackathons, coding competitions, and entrepreneurial challenges, giving students a chance to show off their skills and creativity. Attendees can learn from top industry leaders through talks and workshops, gaining useful insights and inspiration. The event also celebrates the diverse culture of the institute, bringing together students, professors, researchers, and engineers in a fun and creative technical festival.
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold mb-6 text-center neon-text">About IIITB</h3>
        <p className="text-xl leading-relaxed quicksand-font text-gray-300">
          The International Institute of Information Technology Bangalore, also referred to as IIIT-B, is a deemed university that was founded in 1998 with the goal of advancing innovation, entrepreneurship, and education and research in the field of information technology. The Karnataka government and the IT sector jointly sponsor the Institute, which is a registered not-for-profit society. The institute has a lot of technical clubs and committees run by students in the fields of algorithms, competitive programming, development, open-source, robotics, entrepreneurship, and inclusivity in tech.
        </p>
      </div>
    </div>
  </div>
</section>

      
          {/* FAQ Section */}
    <section  id="faq" className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-black text-white">
      <FaqSection />
    </section>

      {/* Footer */}
<footer  id = "contact-us"className="bg-[#0a0a23] py-12 border-t border-purple-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
      
      {/* IIITB Section */}
     <div className="bg-white p-1 rounded-lg shadow-md">
        <img
  src="/IIITB-logo.png"
  alt="IIIT Bangalore Logo"
  className="h-12 w-auto object-contain bg-[#0a0a23] "
/>

      </div>

      {/* Synergy Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="Synergy 2025 Logo"
          className="h-10 w-auto object-contain"
        />
        {/* Optional: keep text if needed */}
        {/* <div className="text-white text-2xl font-bold anurati-font">SYNERGY'25</div> */}
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