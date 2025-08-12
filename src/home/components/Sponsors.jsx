import React, { useState } from 'react';
import '../styles/Sponsors.css';

const Sponsors = ({ sponsors }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState('normal');
  const [direction, setDirection] = useState('normal');

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  return (
    <div className="sponsors-container">
      <h2 className="sponsors-title">
        ✦ OUR SPONSORS ✦
      </h2>

      <div className="sponsors-wrapper">
        {/* Sponsors Marquee */}
        <div 
          className={`sponsors-marquee ${speed} ${direction === 'reverse' ? 'reverse' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {/* Duplicate sponsors array multiple times for seamless loop */}
          {sponsors.concat(sponsors).concat(sponsors).concat(sponsors).map((src, i) => (
            <div key={i} className="sponsor-item">
              {/* glow blur */}
              <div className="sponsor-glow" />
              
              {/* sponsor logo card */}
              <div className="sponsor-card">
                <img
                  src={src}
                  alt={`Sponsor ${(i % sponsors.length) + 1}`}
                  className="sponsor-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Sponsors;