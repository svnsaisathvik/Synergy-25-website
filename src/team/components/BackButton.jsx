import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // change to 'next/router' if you're using Next.js

const BackButton = () => {
  const navigate = useNavigate(); // or useRouter() in Next.js

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back"
      className="group flex items-center gap-2 mb-10 font-bold text-xl relative"
    >
      <div className="relative">
        <ChevronLeft className="w-7 h-7 text-cyan-400" />
        <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-40 group-hover:opacity-70 transition duration-300" />
      </div>

      <span className="relative text-cyan-400 text-2xl tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
        Back
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300" />
      </span>
    </button>
  );
};

export default BackButton;
