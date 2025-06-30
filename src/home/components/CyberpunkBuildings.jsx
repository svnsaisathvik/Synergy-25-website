import React, { useEffect, useRef } from 'react';

const CyberpunkBuildings = () => {
  const layerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      layerRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = 0.3 + index * 0.2;
          ref.style.transform = `translateY(${scrollY * -speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[100vh] z-0 pointer-events-none overflow-hidden">
      <img
        ref={(el) => (layerRefs.current[0] = el)}
        src="src/home/assets/urban-building-skyline-panoramic-night.png"
        className="absolute bottom-0 w-full object-cover"
        style={{ zIndex: 1 }}
        alt="building layer 1"
      />
      <img
        ref={(el) => (layerRefs.current[1] = el)}
        src="/buildings/building2.svg"
        className="absolute bottom-0 w-full object-cover"
        style={{ zIndex: 2 }}
        alt="building layer 2"
      />
      <img
        ref={(el) => (layerRefs.current[2] = el)}
        src="/buildings/building3.svg"
        className="absolute bottom-0 w-full object-cover"
        style={{ zIndex: 3 }}
        alt="building layer 3"
      />
    </div>
  );
};

export default CyberpunkBuildings;
