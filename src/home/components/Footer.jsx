import React from "react";
import '../styles/Footer.css';
import { Mail, Phone, Linkedin, Smartphone } from "lucide-react";
export default function Footer(){
    return (
      <footer id="contact-us">
        <div className="footer-container">
          <div className="footer-main-content">
            
            {/* IIITB Section */}
            <div className="footer-iiitb-logo">
              <img
                src="/iiitb-logo-1.png"
                alt="IIIT Bangalore Logo"
                className="footer-iiitb-img"
              />
            </div>

            {/* Synergy Logo Section */}
            <div className="footer-synergy-logo">
              <img
                src="/logo.png"
                alt="Synergy 2025 Logo"
                className="footer-synergy-img"
              />
            </div>

            {/* Contact Icons */}
            <div className="footer-contact">
              <div className="footer-contact-title quicksand-font">GET IN TOUCH</div>
              <div className="footer-contact-icons">
                {['📧', '📱', '💼', '📞'].map((icon, idx) => (
                  <div
                    key={idx}
                    className="footer-contact-icon"
                  >
                    <span className="footer-contact-icon-emoji">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Glow Divider */}
          <div className="footer-bottom">
            <div className="footer-glow-divider" />
            <p className="footer-copyright">© 2025 Synergy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}