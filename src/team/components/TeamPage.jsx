import React, { useState } from 'react';
import BackButton from './BackButton';
import SideNavigation from './SideNavigation';
import TeamHeader from './TeamHeader';
import TeamGrid from './TeamGrid';

const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('Organizers');

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#090418] via-[#0A071B] to-[#060620] overflow-hidden text-white font-['CyberAlert'] bg-[url('/image.png')] bg-cover bg-center opacity-90"
    >
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <BackButton />
            <SideNavigation 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <TeamHeader category={activeCategory} />
            <TeamGrid activeCategory={activeCategory} />
          </div>
        </div>
      </div>

      {/* Subtle overlay for aesthetic */}
      <div className="pointer-events-none fixed inset-0 bg-scanlines z-50 opacity-10"></div>
    </div>
  );
};

export default TeamPage;
