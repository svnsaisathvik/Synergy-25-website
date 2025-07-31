import React from "react";

export default function Footer(){
    return (
      <footer id="contact-us" className="relative w-full bg-[#0a0a23] py-12 border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            
            {/* IIITB Section */}
            <div className="bg-white p-1 rounded-lg shadow-md">
              <img
                src="/IIITB-logo.png"
                alt="IIIT Bangalore Logo"
                className="h-12 w-auto object-contain bg-[#0a0a23]"
              />
            </div>

            {/* Synergy Logo Section */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Synergy 2025 Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Contact Icons */}
            <div>
              <div className="text-white font-semibold mb-3 text-center md:text-left quicksand-font">CONTACT US</div>
              <div className="flex space-x-4">
                {['📧', '📱', '💼', '📞'].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-200 shadow-md"
                  >
                    <span className="text-blue-600 text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Glow Divider */}
          <div className="mt-10">
            <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 rounded-full opacity-60 blur-sm" />
            <p className="text-center text-sm text-gray-400 mt-6">© 2025 Synergy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}