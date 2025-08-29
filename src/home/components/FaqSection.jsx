import React, { useState } from "react";
import {
  Satellite,
  DollarSign,
  GraduationCap,
  FileText,
  Handshake,
  Wrench,
} from "lucide-react";
import "../styles/FaqFlip.css";

const faqs = [
  {
    question: "How will I get updates of the events?",
    answer:
      "You can get updates of each event by contacting one of the SPOCS of the event or by following @synergy_iiitb on Instagram.",
    icon: <Satellite className="w-7 h-7 text-cyan-400 drop-shadow-glow" />,
  },
  {
    question: "Do we need to pay for any events?",
    answer: "No, This year all events are free for everyone who registers.",
    icon: <DollarSign className="w-7 h-7 text-green-400 drop-shadow-glow" />,
  },
  {
    question: "Do we need to pay for any workshops/talks?",
    answer:
      "No, This year all workshops & talks are free for everyone who attends.",
    icon: <GraduationCap className="w-7 h-7 text-yellow-400 drop-shadow-glow" />,
  },
  {
    question: "What are the steps to register?",
    answer:
      "Choose your event and fill out the Google Form/Unstop Registration. Note: All IIIT-Bangalore students should register through college email id.",
    icon: <FileText className="w-7 h-7 text-pink-400 drop-shadow-glow" />,
  },
  {
    question: "Are there sponsorship opportunities for businesses or organisations?",
    answer:
      "Yes, there are many. You can mail us at synergy@iiitb.ac.in Or connect on our socials for more details.",
    icon: <Handshake className="w-7 h-7 text-purple-400 drop-shadow-glow" />,
  },
  {
    question: "Are there any Workshop opportunities for businesses or individuals?",
    answer:
      "Yes, there are many. You can mail us at synergy@iiitb.ac.in Or connect on our socials for more details.",
    icon: <Wrench className="w-7 h-7 text-orange-400 drop-shadow-glow" />,
  },
];

export default function FaqSection() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {/* Cyberpunk Background Elements */}
      <div className="cyber-grid"></div>
      <div className="floating-circuits">
        <div className="circuit circuit-1"></div>
        <div className="circuit circuit-2"></div>
        <div className="circuit circuit-3"></div>
      </div>

      <div className="faq-container">
        <div className="faq-header">
          <div className="header-decoration">
            <div className="cyber-bracket left">[</div>
            <h2 className="faq-title">
              <span className="glitch-text" data-text="FAQ">
                FAQ
              </span>
              <span className="subtitle">Frequently Asked Questions</span>
            </h2>
            <div className="cyber-bracket right">]</div>
          </div>
          <div className="header-line"></div>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${flippedIndex === index ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <div className="cyber-frame">
                <div className="frame-corner tl"></div>
                <div className="frame-corner tr"></div>
                <div className="frame-corner bl"></div>
                <div className="frame-corner br"></div>
              </div>

              <div className="flip-inner">
                {/* Front side */}
                <div className="flip-front">
                  <div className="card-content">
                    {/* <div className="question-icon">{faq.icon}</div> */}
                    <div className="question-text">{faq.question}</div>
                    <div className="flip-indicator">→</div>
                  </div>
                  <div className="scan-line"></div>
                </div>

                {/* Back side */}
                <div className="flip-back">
                  <div className="card-content">
                    <div className="answer-text">{faq.answer}</div>
                    <div className="back-indicator">←</div>
                  </div>
                  <div className="data-streams">
                    <div className="stream stream-1"></div>
                    <div className="stream stream-2"></div>
                    <div className="stream stream-3"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
