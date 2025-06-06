import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="relative group">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
          
          {/* Counter box */}
          <div className="relative bg-black/80 border border-cyan-400/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-purple-500" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-purple-500" />
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 font-mono mb-2">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                {unit}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;