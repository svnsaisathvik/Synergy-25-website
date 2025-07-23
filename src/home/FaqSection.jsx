import React, { useState } from "react";
import "./FaqFlip.css";

const faqs = [{
    question: "How will I get updates of the events?",
    answer: "You can get updates of each event by contacting one of the SPOCS of the event or by following @synergy_iiitb on Instagram."
}, {
    question: "Do we need to pay for any events?",
    answer: "No, This year all events are free for eveyone who registers."
}, {
    question: "Do we need to pay for any workshops/talks?",
    answer: "No, This year all workshops & talks are free for eveyone who attends."
}, {
    question: "What are the steps to register?",
    answer: "Choose your event and fill out the Google Form/Unstop Registeration. Note: All IIIT-Bangalore students should register through college email id."
}, {
    question: "Are there sponsorship opportunities for businesses or organisations?",
    answer: "Yes, there are many. You can mail us at synergy@iiitb.ac.in Or connect on our socials for more details."
}, {
    question: "Are there any Workshop opportunities for businesses or individuals?",
    answer: "Yes, there are many. You can mail us at synergy@iiitb.ac.in Or connect on our socials for more details."
}
  
];

export default function FaqSection() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent anurati-font drop-shadow-lg">
        Frequently Asked Questions
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-inner">
              <div className="flip-front flex items-center justify-center quicksand-font text-xl">
                {faq.question}
              </div>
              <div className="flip-back flex items-center justify-center quicksand-font text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
