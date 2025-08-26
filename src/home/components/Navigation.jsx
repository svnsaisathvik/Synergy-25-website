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
        </div>
      </div>
    </>
  );
};

export default Navbar;