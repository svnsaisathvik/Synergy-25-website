import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className="relative z-50 bg-[#0a0a23] bg-opacity-95 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Synergy 2025 Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="/events" className="text-gray-300 hover:text-pink-400 transition font-semibold text-lg quicksand-font">Events</a>
          <a href="#about" className="text-white hover:text-cyan-400 transition font-medium text-lg quicksand-font">About</a>
          <a href="#faq" className="text-gray-300 hover:text-pink-400 transition font-semibold text-lg quicksand-font">FAQ</a>
          <a href="#contact-us" className="text-gray-300 hover:text-pink-400 transition font-semibold text-lg quicksand-font">Contact Us</a>
          <a href="/teams" className="text-gray-300 hover:text-pink-400 transition font-semibold text-lg quicksand-font">Team</a>
          <a href="/sponsors" className="text-gray-300 hover:text-pink-400 transition font-semibold text-lg quicksand-font">Sponsors</a>
        </div>

        {/* Mobile */}
        <div className="md:hidden text-white">
          <button onClick={toggleSidebar}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0F0B30] text-white transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 pt-20">
          <a href="/events" onClick={toggleSidebar} className="hover:text-pink-400 text-lg quicksand-font">Events</a>
          <a href="#about" onClick={toggleSidebar} className="hover:text-cyan-400 text-lg quicksand-font">About</a>
          <a href="#faq" onClick={toggleSidebar} className="hover:text-pink-400 text-lg quicksand-font">FAQ</a>
          <a href="#contact-us" onClick={toggleSidebar} className="hover:text-pink-400 text-lg quicksand-font">Contact Us</a>
          <a href="/teams" onClick={toggleSidebar} className="hover:text-pink-400 text-lg quicksand-font">Team</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
