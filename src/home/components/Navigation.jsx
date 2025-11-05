import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo p-2 lg:p-0">
            <img
              src="/logo.png"
              alt="Synergy 2025 Logo"
              className="navbar-logo-img"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <a href="/events" className="navbar-link quicksand-font">Events</a>
            <a href="#about" className="navbar-link quicksand-font">About</a>
            <a href="#faq" className="navbar-link quicksand-font">FAQ</a>
            <a href="#contact-us" className="navbar-link quicksand-font">Contact Us</a>
            <a href="/teams" className="navbar-link quicksand-font">Team</a>
            <a href="/sponsors" className="navbar-link quicksand-font">Sponsors</a>
            <a 
              href="https://synergy-loyalty-program.vercel.app/" 
              className="navbar-link quicksand-font font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{
                color: '#fbbf24',
                textShadow: '0 0 10px rgba(251, 191, 36, 0.6), 0 0 20px rgba(251, 191, 36, 0.4)',
                animation: 'textGlow 2s ease-in-out infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 20px rgba(251, 191, 36, 1), 0 0 30px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.6)';
                e.currentTarget.style.animation = 'none';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = '0 0 10px rgba(251, 191, 36, 0.6), 0 0 20px rgba(251, 191, 36, 0.4)';
                e.currentTarget.style.animation = 'textGlow 2s ease-in-out infinite';
              }}
            >
              <div className="flex flex-col items-center gap-0.5">
                <span className="block">Loyalty Program</span>
                <span className="block text-[0.65rem] font-normal opacity-80 tracking-wide">only for IIIT-B students</span>
              </div>
            </a>  
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile p-3">
            <button onClick={toggleSidebar} className="navbar-mobile-button">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`navbar-overlay ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      />

      {/* Mobile Sidebar */}
      <div className={`navbar-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="navbar-sidebar-content">
          <a href="/events" onClick={toggleSidebar} className="navbar-sidebar-link quicksand-font">Events</a>
          <a href="#about" onClick={toggleSidebar} className="navbar-sidebar-link navbar-sidebar-link-about quicksand-font">About</a>
          <a href="#faq" onClick={toggleSidebar} className="navbar-sidebar-link quicksand-font">FAQ</a>
          <a href="#contact-us" onClick={toggleSidebar} className="navbar-sidebar-link quicksand-font">Contact Us</a>
          <a href="/teams" onClick={toggleSidebar} className="navbar-sidebar-link quicksand-font">Team</a>
          <a href="/sponsors" onClick={toggleSidebar} className="navbar-sidebar-link quicksand-font">Sponsors</a>
          <a 
            href="https://synergy-loyalty-program.vercel.app/" 
            onClick={toggleSidebar} 
            className="navbar-sidebar-link quicksand-font font-bold transition-all duration-300 hover:translate-x-2"
            style={{
              color: '#fbbf24',
              textShadow: '0 0 10px rgba(251, 191, 36, 0.6), 0 0 20px rgba(251, 191, 36, 0.4)',
              animation: 'textGlow 2s ease-in-out infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = '0 0 20px rgba(251, 191, 36, 1), 0 0 30px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.6)';
              e.currentTarget.style.animation = 'none';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = '0 0 10px rgba(251, 191, 36, 0.6), 0 0 20px rgba(251, 191, 36, 0.4)';
              e.currentTarget.style.animation = 'textGlow 2s ease-in-out infinite';
            }}
          >
            <div className="flex flex-col items-start gap-0.5">
              <span className="block">Loyalty Program</span>
              <span className="block text-[0.65rem] font-normal opacity-80 tracking-wide">only for IIIT-B students</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};


export default Navbar;
