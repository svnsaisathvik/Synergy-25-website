import React, { useState, useEffect, useRef } from 'react';
import FeatureCard from './components/FeatureCard';
import FloatingElements from './components/FloatingElements';
import CleanGlitchText from './components/CleanGlitchText';
import CountdownTimer from './components/CountdownTimer';
import Timeline from '../events/components/EventTimeline';
import { Github, Instagram, Linkedin, X } from 'lucide-react';


const SynergyHomepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const festivalDate = "2025-09-15T00:00:00";

  const navigationItems = [
    { name: 'About', path: '#about' },
    { name: 'Events', path: '/events' },
    { name: 'Timeline', path: '#timeline' },
    { name: 'Sponsors', path: '#sponsors' },
    { name: 'FAQs', path: '#faqs' },
    { name: 'Our Team', path: '/teams' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <FloatingElements />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md">
          <div className="flex justify-between items-center p-4 sm:p-6 md:p-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-sm" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "CyberAlert" }}>
                SYNERGY
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.path}
                  className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group text-sm xl:text-base"
                  style={{ fontFamily: "CyberAlert" }}
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 pb-4 space-y-2 bg-gray-900/95 backdrop-blur-md">
              {navigationItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.path}
                  className="block py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300"
                  style={{ fontFamily: "CyberAlert" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-8 text-center">
          {/* Main Title */}
          <div className="mb-8">
            <CleanGlitchText />
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "CyberAlert" }}>
              The Annual Techfest of IIIT Bangalore
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <span className="text-cyan-400 font-semibold" style={{ fontFamily: "CyberAlert" }}>November 15-17, 2025</span>
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-500" />
              <span className="text-gray-400" style={{ fontFamily: "CyberAlert" }}>IIIT Bangalore</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center" style={{ fontFamily: "CyberAlert" }}>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 mr-4" />
              THE WAIT ENDS IN
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-500 ml-4" />
            </h2>
            <CountdownTimer targetDate={festivalDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href = "/events" className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 group overflow-hidden" >
              <span className="relative z-10" style={{ fontFamily: "CyberAlert" }}>Explore Events</span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            
            <button onClick={() => window.location.href = "#timeline"} className="relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 group overflow-hidden">
              <span className="relative z-10" style={{ fontFamily: "CyberAlert" }}>View Timeline</span>
              <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </main>

        {/* Features Section */}
        <section className="px-6 md:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "CyberAlert" }}>
                Experience the Future
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto" style={{ fontFamily: "CyberAlert" }}>
              Three days of hackathons, gaming events, and networking with industry leaders.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon="🎯"
                title="Tech Competitions"
                description="Compete in hackathons, coding challenges, and robotics competitions with exciting prizes."
              />
              <FeatureCard 
                icon="🎮"
                title="Gaming events"
                description="Compete in fun e-games and win exciting prizes"
              />
              <FeatureCard 
                icon="🌐"
                title="Industry Connect"
                description="Network with tech leaders, startups, and potential employers from top companies worldwide."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 md:px-8 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "CyberAlert" }}>
                About Synergy
              </span>
            </h2>
            <div className="text-gray-400" style={{ fontFamily: "CyberAlert" }}>
              [About content placeholder]
            </div>
          </div>
        </section>

        <section id="about-iiitb" className="px-6 md:px-8 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "CyberAlert" }}>
                About IIITB
              </span>
            </h2>
            <div className="text-gray-400" style={{ fontFamily: "CyberAlert" }}>
              [About content placeholder]
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-16 bg-gray-900/20">
            <Timeline />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="px-6 md:px-8 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "CyberAlert" }}>
                Our Sponsors
              </span>
            </h2>
            <div className="text-gray-400" style={{ fontFamily: "CyberAlert" }}>
              [Sponsors content placeholder]
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="px-6 md:px-8 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "CyberAlert" }}>
                Frequently Asked Questions
              </span>
            </h2>
            <div className="text-gray-400" style={{ fontFamily: "CyberAlert" }}>
              [FAQs content placeholder]
            </div>
          </div>
        </section>


        {/* Footer */}
        <section id="contact" className="px-6 md:px-8 py-16 bg-gray-900/20">
          <footer className="border-t border-cyan-400/20 p-6 md:p-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm" style={{ fontFamily: "CyberAlert" }}>
                © 2025 Synergy TechFest. Powered by innovation.
              </div>
              <div className="flex space-x-6">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <X className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </footer>
        </section>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>


      {/* Global Neon Scrollbar Style */}
      <style jsx global>{`
        /* Neon Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00ffff, #a855f7);
          border-radius: 10px;
          box-shadow: 0 0 10px #00ffff, 0 0 20px #a855f7;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #22d3ee, #d946ef);
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #00ffff #000000;
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
      
    </div>
  );
};

export default SynergyHomepage;