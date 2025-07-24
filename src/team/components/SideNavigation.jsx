import React from 'react';

const categories = [
  'Organizers',
  'Design',
  'Website',
  'Sponsorship',
  'Marketing & Media'
];

const SideNavigation = ({ activeCategory, setActiveCategory }) => {
  return (
    <nav className="space-y-6 bg-white/5 backdrop-blur-sm p-4 rounded-xl shadow-lg">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`relative block text-xl md:text-2xl font-medium transition-all duration-300 ${
            activeCategory === category 
              ? 'text-cyan-400 translate-x-2' 
              : 'text-gray-300 hover:text-cyan-300 hover:translate-x-1'
          }`}
        >
          <span className="relative z-10">{category}</span>
          {activeCategory === category && (
            <>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-2 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md"></span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-2 h-8 bg-cyan-400 blur-md opacity-70"></span>
            </>
          )}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
            activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </button>
      ))}
    </nav>
  );
};

export default SideNavigation;
