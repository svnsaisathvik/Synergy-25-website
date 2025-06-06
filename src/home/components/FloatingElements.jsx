import React, { useState, useEffect, useRef } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const newElements = [];
    for (let i = 0; i < 40; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() < 0.5 ? '#00ffff' : '#ff0040'
      });
    }
    setElements(newElements);

    const animate = () => {
      setElements(prev => prev.map(el => ({
        ...el,
        y: el.y > 100 ? -5 : el.y + el.speed,
        x: el.x + Math.sin(Date.now() * 0.001 + el.id) * 0.1
      })));
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'float 20s linear infinite'
        }}
      />

      {/* Floating particles */}
      {elements.map(el => (
  <div
    key={el.id}
    className="absolute rounded-full"
    style={{
      left: `${el.x}%`,
      top: `${el.y}%`,
      width: `${el.size}px`,
      height: `${el.size}px`,
      backgroundColor: el.color,
      opacity: el.opacity,
      boxShadow: `
        0 0 ${el.size * 2.5}px ${el.color},
        0 0 ${el.size * 4}px ${el.color},
        0 0 ${el.size * 6}px ${el.color}
      `,
      filter: 'blur(1px) drop-shadow(0 0 6px white)',
    }}
  />
))}


      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20">
        <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>
      
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="w-full h-0.5 bg-gradient-to-l from-purple-500 to-transparent" />
        <div className="absolute right-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent" />
      </div>
    </div>
  );
};

export default FloatingElements;