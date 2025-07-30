import React, { useState, useEffect } from 'react';

const SpecialEvents = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Sample special events data with cutout-style images
  const specialEvents = [
    {
      id: 1,
      heading: "AI & Machine Learning Summit",
      description: "Dive deep into the future of artificial intelligence with industry experts and cutting-edge workshops. Experience hands-on demos, network with AI pioneers, and discover breakthrough technologies that will shape tomorrow.",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00395817-cwnnyuflce-landscape.jpg", // Robot/AI themed
      accent: "cyan"
    },
    {
      id: 2,
      heading: "Cybersecurity Championship",
      description: "Test your skills in ethical hacking, penetration testing, and digital forensics competitions. Join elite hackers in real-world simulations and prove your cybersecurity expertise in our advanced challenge arena.",
      image: "https://cdn.prod.website-files.com/63a71c562e3ccbc6f6a40f0f/67b98625472de816d0951c58_65bcbb02d38aec8f6ce1f1ab_L%2526D_Cyber%2526ITSecurity_Hero.png", // Hacker/cyber themed
      accent: "purple"
    },
    {
      id: 3,
      heading: "Quantum Computing Workshop",
      description: "Explore the revolutionary world of quantum computing and its applications. Learn from quantum researchers and experience the power of quantum algorithms in solving complex computational problems.",
      image: "https://cdn.mos.cms.futurecdn.net/CBcmkyZ8v4tAc8PSDcEgvM.jpg", // Tech/quantum themed
      accent: "blue"
    },
    {
      id: 4,
      heading: "Neural Interface Demo",
      description: "Witness the future of human-computer interaction through brain-computer interfaces. Experience cutting-edge neurotechnology and see how thoughts can control digital environments in real-time.",
      image: "src/team/assets/Organisers/sathvik.jpg", // Person/neural themed
      accent: "pink"
    }
  ];

  const currentEvent = specialEvents[currentEventIndex];

  // Auto-advance events every 5 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNextEvent();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentEventIndex, isHovered]);

  const handleNextEvent = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentEventIndex((prev) => (prev + 1) % specialEvents.length);
    }, 800);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  const handleEventChange = (index) => {
    if (index !== currentEventIndex) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentEventIndex(index);
      }, 800);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }
  };

  const getAccentColor = (accent) => {
    const colors = {
      cyan: { 
        primary: '#06b6d4', 
        secondary: '#0891b2', 
        glow: 'rgba(6, 182, 212, 0.5)',
        gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        tailwind: 'cyan-500'
      },
      purple: { 
        primary: '#a855f7', 
        secondary: '#9333ea', 
        glow: 'rgba(168, 85, 247, 0.5)',
        gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
        tailwind: 'purple-500'
      },
      blue: { 
        primary: '#3b82f6', 
        secondary: '#2563eb', 
        glow: 'rgba(59, 130, 246, 0.5)',
        gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        tailwind: 'blue-500'
      },
      pink: { 
        primary: '#ec4899', 
        secondary: '#db2777', 
        glow: 'rgba(236, 72, 153, 0.5)',
        gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
        tailwind: 'pink-500'
      }
    };
    return colors[accent] || colors.cyan;
  };

  const accentColors = getAccentColor(currentEvent.accent);

  return (
    <section className="px-6 md:px-8 py-16 bg-gray-900/10 overflow-hidden relative">
      
      {/* Cool Background Effects */}
      <div className="absolute inset-0 cyberpunk-bg">
        {/* Matrix Rain */}
        <div className="matrix-rain"></div>
        
        {/* Circuit Board Pattern */}
        <div className="circuit-pattern"></div>
        
        {/* Floating Hexagons */}
        <div className="hex-background">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="hex-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Digital Grid */}
        <div className="digital-grid"></div>
        
        {/* Scan Lines */}
        <div className="scan-lines-bg"></div>
        
        {/* Particle Stream */}
        <div className="particle-stream">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="stream-particle"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Enhanced Cyberpunk Heading */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative cyberpunk-title-container">
            
            {/* Glitch Background */}
            <div className="glitch-bg"></div>
            
            {/* Main Title */}
            <h2 
              className="text-3xl md:text-4xl font-bold cyberpunk-title relative z-10"
              style={{ fontFamily: "Orbitron, monospace" }}
              data-text="SPECIAL EVENTS"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SPECIAL EVENTS
              </span>
            </h2>
            
            {/* Corner Brackets */}
            <div className="absolute -top-4 -left-8 w-8 h-8 border-t-2 border-l-2 border-cyan-400 corner-glow animate-pulse"></div>
            <div className="absolute -top-4 -right-8 w-8 h-8 border-t-2 border-r-2 border-purple-500 corner-glow animate-pulse"></div>
            <div className="absolute -bottom-4 -left-8 w-8 h-8 border-b-2 border-l-2 border-purple-500 corner-glow animate-pulse"></div>
            <div className="absolute -bottom-4 -right-8 w-8 h-8 border-b-2 border-r-2 border-cyan-400 corner-glow animate-pulse"></div>
            
            {/* Status Bars */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 status-bar"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 status-bar"></div>
            
            {/* System Status */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-xs font-mono text-cyan-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>[SYSTEM_ACTIVE]</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div 
          className={`relative min-h-[500px] md:min-h-[600px] rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
            isHovered ? 'neon-border' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            '--accent-color': accentColors.primary,
            '--accent-glow': accentColors.glow
          }}
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid-pattern w-full h-full"></div>
          </div>
          
          {/* Holographic Scan Lines */}
          <div 
            className={`absolute inset-0 animate-scan ${isTransitioning ? 'opacity-100' : 'opacity-30'}`}
            style={{
              background: `linear-gradient(to bottom, transparent, ${accentColors.glow}, transparent)`
            }}
          ></div>
          
          {/* Main Content Container */}
          <div className="relative h-full">
            
            {/* Desktop Layout */}
            <div className="hidden lg:flex h-full items-center">
              
              {/* Left Side - Text Content */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 space-y-6">
                
                {/* Event Number */}
                <div className="inline-flex items-center space-x-2 text-sm font-bold tracking-wider" style={{ color: accentColors.primary }}>
                  <div 
                    className="w-8 h-0.5"
                    style={{ background: accentColors.gradient }}
                  ></div>
                  <span style={{ fontFamily: "CyberAlert" }}>
                    EVENT 0{currentEventIndex + 1}
                  </span>
                  <div 
                    className="w-8 h-0.5"
                    style={{ background: accentColors.gradient }}
                  ></div>
                </div>
                
                {/* Event Title */}
                <h3 
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${
                    isTransitioning ? 'opacity-0 transform translate-x-10 scale-95' : 'opacity-100 transform translate-x-0 scale-100'
                  }`}
                  style={{ fontFamily: "CyberAlert" }}
                >
                  {currentEvent.heading}
                </h3>
                
                {/* Event Description */}
                <p 
                  className={`text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
                    isTransitioning ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'
                  }`}
                  style={{ fontFamily: "CyberAlert" }}
                >
                  {currentEvent.description}
                </p>
              </div>
              
              {/* Right Side - Image */}
              <div className="flex-1 relative h-full min-h-[600px] flex items-center justify-center p-8">
                
                {/* Image Container with Dynamic Border */}
                <div className="relative">
                  <img 
                    src={currentEvent.image}
                    alt={currentEvent.heading}
                    className={`max-w-full max-h-96 w-auto h-auto object-contain filter drop-shadow-2xl transition-all duration-1000 rounded-2xl ${
                      isTransitioning 
                        ? 'opacity-0 transform scale-110 rotate-3 brightness-150 contrast-200 hue-rotate-90' 
                        : 'opacity-100 transform scale-100 rotate-0 brightness-100 contrast-100 hue-rotate-0'
                    } ${isHovered ? 'scale-105 brightness-110' : ''}`}
                    style={{ 
                      border: `2px solid ${accentColors.primary}`,
                      boxShadow: isTransitioning 
                        ? `0 0 30px ${accentColors.glow}, 0 0 60px ${accentColors.glow}` 
                        : `0 0 20px ${accentColors.glow}`,
                      filter: isTransitioning 
                        ? `drop-shadow(0 0 30px ${accentColors.glow}) contrast(200%) brightness(150%) hue-rotate(90deg)` 
                        : `drop-shadow(0 0 20px ${accentColors.glow})`
                    }}
                  />
                  
                  {/* Corner Accents */}
                  <div 
                    className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  <div 
                    className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 rounded-tr-lg"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  <div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 rounded-bl-lg"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  <div 
                    className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 rounded-br-lg"
                    style={{ borderColor: accentColors.primary }}
                  ></div>
                  
                  {/* Cyberpunk Glitch Effects */}
                  {isTransitioning && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 animate-pulse mix-blend-screen rounded-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-l from-pink-400/20 to-blue-500/20 animate-ping mix-blend-screen rounded-2xl"></div>
                    </>
                  )}
                </div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-float opacity-60"
                      style={{
                        backgroundColor: accentColors.primary,
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i * 10)}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + (i * 0.5)}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Layout - Text over Image */}
            <div className="lg:hidden relative min-h-[500px] flex items-center justify-center">
              
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img 
                  src={currentEvent.image}
                  alt={currentEvent.heading}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    isTransitioning 
                      ? 'opacity-50 transform scale-110 brightness-150 contrast-200 hue-rotate-90' 
                      : 'opacity-30 transform scale-100 brightness-100 contrast-100 hue-rotate-0'
                  }`}
                />
                
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
                
                {/* Cyberpunk Glitch Effects */}
                {isTransitioning && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 animate-pulse mix-blend-screen"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-pink-400/30 to-blue-500/30 animate-ping mix-blend-screen"></div>
                  </>
                )}
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 p-6 md:p-8 text-center space-y-4">
                
                {/* Event Number */}
                <div className="inline-flex items-center space-x-2 text-sm font-bold tracking-wider" style={{ color: accentColors.primary }}>
                  <div 
                    className="w-6 h-0.5"
                    style={{ background: accentColors.gradient }}
                  ></div>
                  <span style={{ fontFamily: "CyberAlert" }}>
                    EVENT 0{currentEventIndex + 1}
                  </span>
                  <div 
                    className="w-6 h-0.5"
                    style={{ background: accentColors.gradient }}
                  ></div>
                </div>
                
                {/* Event Title */}
                <h3 
                  className={`text-2xl md:text-3xl font-bold text-white leading-tight transition-all duration-1000 ${
                    isTransitioning ? 'opacity-0 transform translate-y-10 scale-95' : 'opacity-100 transform translate-y-0 scale-100'
                  }`}
                  style={{ fontFamily: "CyberAlert" }}
                >
                  {currentEvent.heading}
                </h3>
                
                {/* Event Description */}
                <p 
                  className={`text-gray-200 text-base md:text-lg leading-relaxed max-w-md mx-auto transition-all duration-1000 delay-200 ${
                    isTransitioning ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
                  }`}
                  style={{ fontFamily: "CyberAlert" }}
                >
                  {currentEvent.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
            
            {/* Event Indicators */}
            <div className="flex space-x-3">
              {specialEvents.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => handleEventChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentEventIndex 
                      ? 'animate-pulse' 
                      : 'hover:bg-gray-500'
                  }`}
                  style={{
                    backgroundColor: index === currentEventIndex ? accentColors.primary : '#4b5563',
                    boxShadow: index === currentEventIndex ? `0 0 10px ${accentColors.glow}` : 'none'
                  }}
                />
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  isTransitioning ? 'w-full' : 'w-0'
                }`}
                style={{
                  background: accentColors.gradient,
                  animation: !isHovered && !isTransitioning ? 'progress 5s linear infinite' : 'none'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        /* Background Effects */
        .cyberpunk-bg {
          background: radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 50% 90%, rgba(236, 72, 153, 0.02) 0%, transparent 50%);
        }
        
        .matrix-rain {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(0, 255, 255, 0.4), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(138, 43, 226, 0.3), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(236, 72, 153, 0.3), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(59, 130, 246, 0.2), transparent);
          background-repeat: repeat;
          background-size: 150px 150px;
          animation: matrix-fall 20s linear infinite;
          opacity: 0.15;
        }
        
        .circuit-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%),
            linear-gradient(0deg, transparent 24%, rgba(138, 43, 226, 0.1) 25%, rgba(138, 43, 226, 0.1) 26%, transparent 27%);
          background-size: 100px 100px;
          animation: circuit-drift 30s linear infinite;
          opacity: 0.08;
        }
        
        .hex-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        
        .hex-particle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: rgba(0, 255, 255, 0.3);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: hex-float 10s ease-in-out infinite;
        }
        
        .digital-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: grid-pulse 15s ease-in-out infinite;
          opacity: 0.2;
        }
        
        .scan-lines-bg {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.02) 2px,
            rgba(0, 255, 255, 0.02) 4px
          );
          animation: scan-move 3s linear infinite;
        }
        
        .particle-stream {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        
        .stream-particle {
          position: absolute;
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.8), transparent);
          animation: stream-flow 4s linear infinite;
        }
        
        /* Enhanced Title Styles */
        .cyberpunk-title-container {
          position: relative;
          padding: 20px 40px;
        }
        
        .glitch-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(0, 255, 255, 0.05), rgba(138, 43, 226, 0.05));
          animation: glitch-bg 3s ease-in-out infinite;
          border-radius: 8px;
        }
        
        .cyberpunk-title {
          position: relative;
          text-shadow: 
            0 0 5px rgba(0, 255, 255, 0.5),
            0 0 10px rgba(138, 43, 226, 0.3),
            0 0 15px rgba(236, 72, 153, 0.2),
            0 0 20px rgba(59, 130, 246, 0.1);
          animation: title-glow 2s ease-in-out infinite alternate;
        }
        
        .cyberpunk-title::before,
        .cyberpunk-title::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          font-family: "Orbitron, monospace";
        }
        
        .cyberpunk-title::before {
          background: linear-gradient(90deg, #ff0080, #ff0080);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -1;
          animation: glitch-1 2s infinite linear alternate-reverse;
        }
        
        .cyberpunk-title::after {
          background: linear-gradient(90deg, #00f0ff, #00f0ff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -2;
          animation: glitch-2 3s infinite linear alternate-reverse;
        }
        
        .corner-glow {
          box-shadow: 0 0 10px currentColor;
        }
        
        .status-bar {
          animation: status-pulse 2s ease-in-out infinite;
          box-shadow: 0 0 10px currentColor;
        }
        
        /* Existing styles */
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        .neon-border {
          border-color: var(--accent-color) !important;
          box-shadow: 
            0 0 10px var(--accent-glow),
            0 0 20px var(--accent-glow),
            0 0 30px var(--accent-glow),
            inset 0 0 10px var(--accent-glow);
        }
        
        /* Animations */
        @keyframes matrix-fall {
          0% { transform: translateY(-150px); }
          100% { transform: translateY(calc(100vh + 150px)); }
        }
        
        @keyframes circuit-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
        
        @keyframes hex-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes scan-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        @keyframes stream-flow {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes glitch-bg {
          0%, 100% { transform: translate(0); filter: hue-rotate(0deg); }
          20% { transform: translate(-1px, 1px); filter: hue-rotate(90deg); }
          40% { transform: translate(-1px, -1px); filter: hue-rotate(180deg); }
          60% { transform: translate(1px, 1px); filter: hue-rotate(270deg); }
          80% { transform: translate(1px, -1px); filter: hue-rotate(360deg); }
        }
        
        @keyframes title-glow {
          0% { 
            text-shadow: 
              0 0 5px rgba(0, 255, 255, 0.5),
              0 0 10px rgba(138, 43, 226, 0.3),
              0 0 15px rgba(236, 72, 153, 0.2);
          }
          100% { 
            text-shadow: 
              0 0 10px rgba(0, 255, 255, 0.8),
              0 0 20px rgba(138, 43, 226, 0.6),
              0 0 30px rgba(236, 72, 153, 0.4),
              0 0 40px rgba(59, 130, 246, 0.2);
          }
        }
        
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 60% 0); }
          20% { clip-path: inset(15% 0 70% 0); }
          40% { clip-path: inset(10% 0 80% 0); }
          60% { clip-path: inset(30% 0 50% 0); }
          80% { clip-path: inset(40% 0 40% 0); }
          100% { clip-path: inset(50% 0 30% 0); }
        }
        
        @keyframes glitch-2 {
          0% { clip-path: inset(60% 0 20% 0); }
          20% { clip-path: inset(70% 0 15% 0); }
          40% { clip-path: inset(80% 0 10% 0); }
          60% { clip-path: inset(50% 0 30% 0); }
          80% { clip-path: inset(40% 0 40% 0); }
          100% { clip-path: inset(30% 0 50% 0); }
        }
        
        @keyframes status-pulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default SpecialEvents;