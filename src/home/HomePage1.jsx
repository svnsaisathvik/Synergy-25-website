import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/HomePage1.css";
import FaqSection from './components/FaqSection';
import EventTimeline from '../events/components/EventTimeline';
import SpecialEvents from "./components/SpecialEvents";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const sponsorLogos = [
  "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
  "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
  "https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png",
];

const blockConfigs = {
  desktop: [
    { id: 'd1', finalX: '-25vw', finalY: '-20vh', size: 'size-w-24-h-24', gradient: 'linear-gradient(135deg, #FF4E9B 0%, #B100E8 100%)' },
    { id: 'd2', finalX: '28vw', finalY: '-15vh', size: 'size-w-20-h-20', gradient: 'linear-gradient(135deg, #00F0FF 0%, #008BFF 100%)' },
    { id: 'd3', finalX: '-30vw', finalY: '25vh', size: 'size-w-16-h-16', gradient: 'linear-gradient(135deg, #D200FF 0%, #7800FF 100%)' },
    { id: 'd4', finalX: '32vw', finalY: '20vh', size: 'size-w-28-h-28', gradient: 'linear-gradient(135deg, #FF9F1C 0%, #FF3C00 100%)' },
    { id: 'd5', finalX: '-35vw', finalY: '0vh', size: 'size-w-12-h-12', gradient: 'linear-gradient(135deg, #00FFAE 0%, #00FFC2 100%)' },
    { id: 'd6', finalX: '20vw', finalY: '30vh', size: 'size-w-20-h-20', gradient: 'linear-gradient(135deg, #FF4E9B 0%, #B100E8 100%)' },
  ],
  mobile: [
    { id: 'm1', finalX: '-40vw', finalY: '-20vh', size: 'size-w-16-h-16', gradient: 'linear-gradient(135deg, #FF4E9B 0%, #B100E8 100%)' },
    { id: 'm2', finalX: '42vw', finalY: '-15vh', size: 'size-w-20-h-20', gradient: 'linear-gradient(135deg, #00F0FF 0%, #008BFF 100%)' },
    { id: 'm3', finalX: '-45vw', finalY: '25vh', size: 'size-w-12-h-12', gradient: 'linear-gradient(135deg, #D200FF 0%, #7800FF 100%)' },
    { id: 'm4', finalX: '48vw', finalY: '20vh', size: 'size-w-24-h-24', gradient: 'linear-gradient(135deg, #FF9F1C 0%, #FF3C00 100%)' },
  ]
};

function getTimeRemaining() {
  const targetDate = new Date("2025-11-07T00:00:00");
  const now = new Date();
  const total = targetDate - now;

  if (total <= 0) return { days: 0, hours: 0, minutes: 0 };

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);

  return { days, hours, minutes };
}

const SynergyHomepage = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const timerRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const countdownTimer = setInterval(() => setTimeLeft(getTimeRemaining()), 60000);
    return () => clearInterval(countdownTimer);
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    const createAnimations = (blocks, isDesktop) => {
      gsap.set(blocks, { xPercent: -50, yPercent: -50, left: '50%', top: '50%', scale: isDesktop ? 1.2 : 1.5 });
      gsap.set([titleRef.current, timerRef.current], { opacity: 0, scale: 0.95 });

      const tl = gsap.timeline({
        delay: 0.5,
        onComplete: () => {
          ScrollTrigger.create({
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            animation: gsap.to(blocks, { y: '80vh', ease: 'none' }),
          });
        }
      });
      
      tl.to(blocks, {
        x: () => `random(-25, 25)`,
        y: () => `random(-25, 25)`,
        skewX: () => `random(-20, 20)`,
        opacity: () => `random(0.4, 0.9)`,
        filter: 'blur(3px)',
        duration: 0.01,
        repeat: 2,
        ease: 'power3.inOut',
        stagger: { each: 0.05, from: 'center' },
      })
      .to(blocks, { filter: 'blur(0px)', skewX: 0, duration: 0.2 }, "-=0.1");

      tl.to(blocks, {
          x: (i) => blockConfigs[isDesktop ? 'desktop' : 'mobile'][i].finalX,
          y: (i) => blockConfigs[isDesktop ? 'desktop' : 'mobile'][i].finalY,
          scale: 1,
          opacity: 0.85,
          duration: 1,
          ease: 'power2.out',
          stagger: { each: 0.1, from: 'random' },
        }, ">-0.2")
        .to([titleRef.current, timerRef.current], {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.2,
        }, "<0.5");
    };

    mm.add("(min-width: 768px)", () => {
      createAnimations(blocksRef.current.slice(0, blockConfigs.desktop.length), true);
    });

    mm.add("(max-width: 767px)", () => {
      createAnimations(blocksRef.current.slice(blockConfigs.desktop.length), false);
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="homepage-container">
      <Navbar />

      <section ref={heroRef} className="hero-section">
        <div className="hero-background-container">
          <img src="landing.png" alt="Background" className="hero-background-image" />
          <div className="hero-background-overlay"></div>
        </div>

        <div className="animated-blocks-container">
           {blockConfigs.desktop.map((block, i) => (
             <div key={block.id} ref={el => blocksRef.current[i] = el} className={`animated-block block-desktop ${block.size}`} style={{ background: block.gradient }}/>
           ))}
           {blockConfigs.mobile.map((block, i) => (
             <div key={block.id} ref={el => blocksRef.current[blockConfigs.desktop.length + i] = el} className={`animated-block block-mobile ${block.size}`} style={{ background: block.gradient }} />
           ))}
        </div>

        <div className="hero-content">
          <div ref={titleRef} className="hero-title-container">
              <div className="hero-title-synergy anurati-font">
                SYNERGY
              </div>
              <div className="hero-title-2025 anurati-font">
                2025
              </div>
          </div>

          <div ref={timerRef}>
            <div className="countdown-timer-box">
              <div className="countdown-unit">
                <div className="countdown-number trebuchet-font">{timeLeft.days}</div>
                <div className="countdown-label">DAYS</div>
              </div>
              <div className="countdown-unit">
                <div className="countdown-number trebuchet-font">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="countdown-label">HOURS</div>
              </div>
              <div className="countdown-unit">
                <div className="countdown-number trebuchet-font">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="countdown-label">MINUTES</div>
              </div>
            </div>
            <div className="countdown-togo trebuchet-font">TO GO</div>
          </div>
        </div>
      </section>

      <AboutSection />
      <EventTimeline />
      <SpecialEvents />
       <section id="sponsors">
        <Sponsors sponsors={sponsorLogos} />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <Footer />
    </div>
  );
};

export default SynergyHomepage;