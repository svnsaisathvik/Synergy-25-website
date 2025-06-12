import React, { useEffect, useRef } from 'react';

const TeamMember = ({ member, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';

    setTimeout(() => {
      el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 150 * index);
  }, [index]);

  return (
    <div
      ref={ref}
      className="group relative rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:z-10 animate-float"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-glow" />
      <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

      <div className="relative bg-gradient-to-br from-[#111133] to-[#060620] rounded-lg p-1 group-hover:animate-neon-pulse">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative aspect-[4/5] transition-transform duration-500 group-hover:scale-105">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110 animate-hologram"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#060620] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-cyan-500 mix-blend-color-dodge opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-scanlines opacity-20" />
            <div className="absolute inset-0 bg-glitch opacity-0 group-hover:opacity-30 transition-opacity duration-300 group-hover:animate-glitch" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500" />
          </div>

          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-xl font-bold text-white mb-1 tracking-wide relative group-hover:animate-text-glitch font-['CyberAlert']">
              {member.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500 delay-100" />
            </h3>
            <p className="text-cyan-400 text-sm font-medium tracking-wider opacity-90 transition-transform duration-500 group-hover:-translate-y-0.5">
              {member.role}
            </p>
          </div>

          <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300 animate-pulse group-hover:rotate-45" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 animate-flicker group-hover:-rotate-45" />

          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
