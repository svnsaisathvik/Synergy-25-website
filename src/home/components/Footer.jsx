import React from "react";
import "../styles/Footer.css";
import { Mail, Phone, Linkedin, Smartphone } from "lucide-react";

export default function Footer() {
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
              <a
                href="mailto:synergy@iiitb.ac.in"
                className="footer-contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={28} />
              </a>
              <a
                href="tel:+917416226695"
                className="footer-contact-icon"
              >
                <Phone size={28} />
              </a>
              <a
                href="https://www.linkedin.com/company/synergy-iiitbangalore/"
                className="footer-contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Glow Divider */}
        <div className="footer-bottom">
          <div className="footer-glow-divider" />
          <p className="footer-copyright">
            © 2025 Synergy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
