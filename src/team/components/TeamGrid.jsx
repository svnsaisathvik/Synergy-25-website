import React from 'react';
import TeamMember from './TeamMember';
import teamMembers from '../data/teamData.jsx';

const TeamGrid = ({ activeCategory }) => {
  const members = teamMembers.filter(m => m.category === activeCategory);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, i) => (
        <TeamMember 
          key={member.id} 
          member={member} 
          index={i} 
          activeCategory={activeCategory}  // Add this prop
        />
      ))}
    </div>
  );
};

export default TeamGrid;
