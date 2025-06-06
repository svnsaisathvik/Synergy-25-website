import React, { useState, useEffect, useRef } from 'react';

const CleanGlitchText = () => {
  const [hasTransitioned, setHasTransitioned] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentText, setCurrentText] = useState("THE OG TECHFEST");
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const [showChannels, setShowChannels] = useState(false);

  useEffect(() => {
    if (!hasTransitioned) {
      const timer = setTimeout(() => {
        startTransition();
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      startPeriodicGlitch();
    }
  }, [hasTransitioned]);

  const startTransition = () => {
    setIsGlitching(true);
    setShowChannels(true);
    
    const duration = 1200;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        // Create glitch offset
        setGlitchOffset({
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 2
        });
        
        // Switch text at 70% progress
        if (progress > 0.7 && currentText === "THE OG TECHFEST") {
          setCurrentText("SYNERGY 2025");
        }
        
        requestAnimationFrame(animate);
      } else {
        // Complete transition
        setIsGlitching(false);
        setShowChannels(false);
        setGlitchOffset({ x: 0, y: 0 });
        setCurrentText("SYNERGY 2025");
        setHasTransitioned(true);
      }
    };
    
    animate();
  };

  const startPeriodicGlitch = () => {
    const interval = setInterval(() => {
      if (Math.random() < 0.2) {
        setShowChannels(true);
        setGlitchOffset({
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 1
        });
        
        setTimeout(() => {
          setShowChannels(false);
          setGlitchOffset({ x: 0, y: 0 });
        }, 100 + Math.random() * 100);
      }
    }, 300);
    
    return () => clearInterval(interval);
  };

  return (
    <div className="relative inline-block">
      {/* Main text */}
      <h1 
        className="text-6xl md:text-7xl lg:text-8xl font-black text-white relative z-20 select-none tracking-tight"
        style={{
          transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          textShadow: isGlitching ? '2px 0 #ff0040, -2px 0 #00ffff' : 'none'
        }}
      >
        {currentText}
      </h1>

      {/* Red channel */}
      {showChannels && (
        <h1 
          className="absolute top-0 left-0 text-6xl md:text-7xl lg:text-8xl font-black text-red-500 select-none tracking-tight z-10"
          style={{
            transform: `translate(${glitchOffset.x + 3}px, ${glitchOffset.y}px)`,
            opacity: 0.8,
            mixBlendMode: 'screen',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          {currentText}
        </h1>
      )}

      {/* Cyan channel */}
      {showChannels && (
        <h1 
          className="absolute top-0 left-0 text-6xl md:text-7xl lg:text-8xl font-black text-cyan-400 select-none tracking-tight z-10"
          style={{
            transform: `translate(${glitchOffset.x - 3}px, ${glitchOffset.y}px)`,
            opacity: 0.8,
            mixBlendMode: 'screen',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          {currentText}
        </h1>
      )}

      {/* Glitch lines */}
      {isGlitching && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-20"
              style={{
                left: `${10 + i * 30}%`,
                top: `${25 + i * 20}%`,
                width: `${40 + Math.random() * 30}%`,
                height: '1px',
                transform: `translateX(${(Math.random() - 0.5) * 10}px)`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CleanGlitchText;
