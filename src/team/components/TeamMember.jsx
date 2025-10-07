import React, { useEffect, useState } from 'react';

const TeamMember = ({ member, index, activeCategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset animation when category changes
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150 * index);

    return () => clearTimeout(timer);
  }, [index, activeCategory]); // Add activeCategory as dependency

  return (
    <div
      className={`group relative w-full max-w-[280px] sm:max-w-[290px] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:z-10 animate-float
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5'
        }
        transform transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Neon Border */}
      <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-glow" />

      {/* Subtle Blur Overlay */}
      <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 blur-[1px] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      {/* Container with subtle neon & shadow */}
      <div className="relative rounded-lg border border-cyan-400/30 bg-gradient-to-br from-[#0a0a23]/80 to-[#060620]/80 shadow-cyan-500/20 shadow-lg p-1 group-hover:animate-neon-pulse">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative aspect-[4/5] transition-transform duration-500 group-hover:scale-105">
            {/* Team Member Image with subtle hover pop */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105 group-hover:contrast-110 group-hover:saturate-110 animate-hologram"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060620] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-cyan-500 mix-blend-color-dodge opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-scanlines opacity-20" />
            <div className="absolute inset-0 bg-glitch opacity-0 group-hover:opacity-5 transition-opacity duration-300 group-hover:animate-glitch" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500" />
          </div>

          {/* Member Details */}
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-xl font-bold text-white mb-1 tracking-wide relative group-hover:animate-text-glitch font-['CyberAlert']">
              {member.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500 delay-100" />
            </h3>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-cyan-400 text-sm font-semibold tracking-wider opacity-90 transition-transform duration-500 group-hover:-translate-y-0.5 hover:underline"
            >
              View Profile →
            </a>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300 animate-pulse group-hover:rotate-45" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 animate-flicker group-hover:-rotate-45" />

          {/* Vertical Accent Lines */}
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;