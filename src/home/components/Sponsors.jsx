import React, { useEffect, useRef } from 'react';

const Sponsors = ({ sponsors }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const content = marqueeRef.current;
    let animationId;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      content.scrollLeft += 0.6;

      if (content.scrollLeft >= content.scrollWidth / 2) {
        content.scrollLeft = 0;
        start = timestamp;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full py-12 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      <h2
        className="text-center text-2xl md:text-4xl font-bold tracking-widest mb-8 neon-text"
        style={{
          fontFamily: "'Cyberway Riders', 'Orbitron', 'Share Tech Mono', monospace",
          color: '#00f0ff',
          textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 20px #00f0ff',
        }}
      >
        ✦ OUR SPONSORS ✦
      </h2>

      <div
        ref={marqueeRef}
        className="flex gap-10 px-4 whitespace-nowrap overflow-hidden relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        {sponsors.concat(sponsors).map((src, i) => (
          <div
            key={i}
            className="flex-none w-40 h-24 relative group transition-transform duration-300 hover:scale-105"
          >
            {/* glow blur */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-400 opacity-10 blur-2xl group-hover:opacity-30 transition-all duration-500" />
            
            {/* sponsor logo card */}
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-purple-700/40 to-blue-700/40 rounded-2xl border border-cyan-400/30 group-hover:border-cyan-200 shadow-md shadow-cyan-500/10 backdrop-blur-xl p-2 flex items-center justify-center">
              <img
                src={src}
                alt={`Sponsor ${i}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
