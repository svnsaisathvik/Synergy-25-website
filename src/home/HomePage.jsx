import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import FaqSection from './FaqSection';

const SynergyHomepage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 17, hours: 0, minutes: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    // Handle scroll for block movement
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(countdownTimer);
    };
  }, []);

  const AnimatedBlock = ({ delay, initialX, initialY, finalX, finalY, color, gradient, size = 'w-16 h-16', scrollY = 0}) => {
    // const [isLoaded, setIsLoaded] = useState(false);
    
  
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setIsLoaded(true);
    //   }, 50); // small delay to trigger the transition
    //   return () => clearTimeout(timer);
    // }, []);
  
    return (
      <div
    style={{
      transform: `translate(${isLoaded ? finalX : initialX}px, ${isLoaded ? finalY - 100 + scrollY * 0.5 : initialY - 200}px)`,
      transition: `transform 2s ease-out ${delay}ms, opacity 2s ease-out ${delay}ms`,
      background: gradient || color,
      opacity: isLoaded ? 0.8 : 1,
      zIndex: isLoaded ? 5 : 25,
      width: '64px',
      height: '64px',
      borderRadius: '0.5rem',
      position: 'absolute',
    }}
  />
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Load Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
        
        @font-face {
          font-family: 'Anurati';
          src: url('../../public/fonts/Anurati-Regular.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
        
        .anurati-font {
          font-family: 'Anurati', 'Trebuchet MS', 'Arial Black', sans-serif;
          font-weight: normal;
          letter-spacing: 0.1em;
        }
        
        .quicksand-font {
          font-family: 'Quicksand', sans-serif;
        }
        
        .trebuchet-font {
          font-family: 'Trebuchet MS', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 bg-slate-900 bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold anurati-font">S</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent anurati-font">
                SYNERGY'25
              </div>
            </div>
            <div className="flex space-x-8">
              <a
                href="/events"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-lg quicksand-font"
              >
                Events
              </a>
              <a
                href="/teams"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-lg quicksand-font"
              >
                Team
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="background.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Blocks - More casual positioning around the text */}
        <div className="absolute inset-0">
          {/* Casual blocks around SYNERGY text */}
          <AnimatedBlock delay={0} initialX={550} initialY={300} finalX={120} finalY={200} gradient="linear-gradient(140.91deg, #F04C47 32.77%, #3B14FF 93.7%)" size="w-20 h-20" scrollY={scrollY} isLoaded={isLoaded} />
          <AnimatedBlock delay={200} initialX={650} initialY={280} finalX={280} finalY={150} gradient="linear-gradient(180deg, #C8C20C 0%, #0DABAE 100%)" size="w-16 h-18" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={400} initialX={700} initialY={320} finalX={220} finalY={350} gradient="linear-gradient(180deg, #05AEAE 32.69%, #0093D6 100%)" size="w-18 h-16"scrollY={scrollY} isLoaded={isLoaded} />
          <AnimatedBlock delay={600} initialX={600} initialY={250} finalX={350} finalY={180} gradient="linear-gradient(156.96deg, #C61EA2 2.78%, #DE1236 97.22%)" size="w-16 h-20" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={800} initialX={720} initialY={340} finalX={150} finalY={300} gradient="linear-gradient(138.53deg, #59C644 5.11%, #0475AF 94.89%)" size="w-22 h-18" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={1000} initialX={530} initialY={290} finalX={80} finalY={250} gradient="linear-gradient(180deg, #F6A01A 0%, #D32A5D 100%)" size="w-18 h-22" scrollY={scrollY} isLoaded={isLoaded}/>
          
          {/* Casual blocks around 2025 text */}
          <AnimatedBlock delay={300} initialX={640} initialY={400} finalX={950} finalY={200} gradient="linear-gradient(140.91deg, #F04C47 32.77%, #3B14FF 93.7%)" size="w-16 h-16" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={500} initialX={590} initialY={420} finalX={900} finalY={350} gradient="linear-gradient(180deg, #C8C20C 0%, #0DABAE 100%)" size="w-20 h-18" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={700} initialX={680} initialY={380} finalX={1050} finalY={180} gradient="linear-gradient(180deg, #05AEAE 32.69%, #0093D6 100%)" size="w-18 h-20" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={900} initialX={730} initialY={450} finalX={1000} finalY={320} gradient="linear-gradient(156.96deg, #C61EA2 2.78%, #DE1236 97.22%)" size="w-16 h-16" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={1100} initialX={570} initialY={440} finalX={1100} finalY={280} gradient="linear-gradient(138.53deg, #59C644 5.11%, #0475AF 94.89%)" size="w-22 h-18" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={1300} initialX={620} initialY={460} finalX={1150} finalY={400} gradient="linear-gradient(180deg, #F6A01A 0%, #D32A5D 100%)" size="w-18 h-16" scrollY={scrollY} isLoaded={isLoaded}/>

          {/* Additional scattered blocks for ambiance */}
          <AnimatedBlock delay={100} initialX={500} initialY={200} finalX={60} finalY={180} color="#F42565" size="w-14 h-14" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={500} initialX={800} initialY={200} finalX={1200} finalY={160} color="#0261C3" size="w-16 h-16" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={900} initialX={480} initialY={350} finalX={40} finalY={400} gradient="linear-gradient(132.15deg, #2EE7FD 0.42%, #0197DB 57.63%)" size="w-18 h-18" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={1200} initialX={820} initialY={350} finalX={1250} finalY={440} gradient="linear-gradient(180deg, #C8C20C 0%, #0DABAE 100%)" size="w-20 h-20" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={1500} initialX={450} initialY={500} finalX={20} finalY={500} gradient="linear-gradient(156.96deg, #C61EA2 2.78%, #DE1236 97.22%)" size="w-16 h-18" scrollY={scrollY} isLoaded={isLoaded}/>
          <AnimatedBlock delay={1800} initialX={850} initialY={500} finalX={1300} finalY={480} gradient="linear-gradient(180deg, #05AEAE 32.69%, #0093D6 100%)" size="w-18 h-16" scrollY={scrollY} isLoaded={isLoaded}/>
        </div>

        {/* Central Logo */}
        <div className="relative z-20 text-center">
          <div className="mb-12">
            <div className="relative inline-block">
              {/* Synergy Text - Always visible */}
              <div className="relative">
                <div className="text-8xl font-bold mb-4 tracking-wider anurati-font">
                  <span className="text-white">SYNERGY</span>
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent anurati-font">
                  2025
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className={`mb-8 transition-all duration-1000 delay-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center items-center space-x-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-300 trebuchet-font">{timeLeft.days-1}</div>
              </div>
              <div className="text-center">
                <div className="text-8xl font-bold text-white trebuchet-font">{timeLeft.days}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-300 trebuchet-font">{timeLeft.days+1}</div>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mt-4 trebuchet-font">days to go</div>
          </div>
        </div>
      </section>

      {/* Sponsors Section
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 opacity-70">
            <div className="bg-white rounded-lg p-4 h-16 flex items-center justify-center min-w-32">
              <span className="text-gray-800 font-bold quicksand-font">QuillBot</span>
            </div>
            <div className="bg-white rounded-lg p-4 h-16 flex items-center justify-center min-w-32">
              <span className="text-gray-800 font-bold quicksand-font">axure</span>
            </div>
            <div className="bg-white rounded-lg p-4 h-16 flex items-center justify-center min-w-32">
              <span className="text-gray-800 font-bold quicksand-font">nila</span>
            </div>
            <div className="bg-red-600 rounded-lg p-4 h-16 flex items-center justify-center min-w-32">
              <span className="text-white font-bold quicksand-font">balsamiq</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Events Section */}
      <section id="events" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Hexagonal Pattern */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
<div class="socket">
  <div class="gel center-gel">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c1 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c2 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c3 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c4 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c5 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c6 r1">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>

  <div class="gel c7 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>

  <div class="gel c8 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c9 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c10 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c11 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c12 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c13 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c14 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c15 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c16 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c17 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c18 r2">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c19 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c20 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c21 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c22 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c23 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c24 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c25 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c26 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c28 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c29 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c30 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c31 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c32 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c33 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c34 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c35 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c36 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
  <div class="gel c37 r3">
    <div class="hex-brick h1"></div>
    <div class="hex-brick h2"></div>
    <div class="hex-brick h3"></div>
  </div>
</div>

            </div>
            <h2 className="text-5xl font-bold text-white relative z-10 py-8">
              EVENTS
            </h2>
          </div>

          {/* Event Days */}
          <div className="flex justify-center space-x-8 mb-12">
            {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
              <button
                key={day}
                className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-semibold text-lg quicksand-font"
              >
                {day}
              </button>
            ))}
          </div>

          {/* Event Posters Grid */}
          <div className="grid grid-cols-6 gap-4 mb-12">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-red-500 font-bold text-lg mb-2 trebuchet-font">DECEPTIVE</div>
                  <div className="text-white text-sm text-center mb-2 quicksand-font">AI VS REALITY</div>
                  <div className="text-xs text-gray-300 text-center quicksand-font">DEEP FAKE CHALLENGE</div>
                  <div className="flex-1 flex items-end">
                    <div className="text-xs text-gray-400 quicksand-font">REAL-TIME EVENT</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
    

      <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Cube Floating */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10 opacity-80 scale-75 pointer-events-none">
      <div className="cube scale-[2.5]">
  <div className="topD"></div>
  <div>
    <span style={{ "--i": 0 }}></span>
    <span style={{ "--i": 1 }}></span>
    <span style={{ "--i": 2 }}></span>
    <span style={{ "--i": 3 }}></span>
  </div>

  <div className="cube2">
    <div>
      <span style={{ "--i": 0 }}></span>
      <span style={{ "--i": 1 }}></span>
      <span style={{ "--i": 2 }}></span>
      <span style={{ "--i": 3 }}></span>
    </div>

    <div className="cube3">
      <div className="top3"></div>
      <div>
        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
    </div>
  </div>
</div>


      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-16">
          {/* ... your About Synergy and About IIITB blocks ... */}
            <div>
              <h3 className="text-4xl font-bold text-white mb-8 text-center">About Synergy</h3>
              <p className="text-white text-xl leading-relaxed quicksand-font">
                Synergy'25 is the annual techfest of IIIT-Bangalore, bringing together innovation and collaboration in an exciting event. It includes hackathons, coding competitions, and entrepreneurial challenges, giving students a chance to show off their skills and creativity. Attendees can learn from top industry leaders through talks and workshops, gaining useful insights and inspiration. The event also celebrates the diverse culture of the institute, bringing together students, professors, researchers, and engineers in a fun and creative technical festival.
              </p>
            </div>



            <div>
              <h3 className="text-4xl font-bold text-white mb-8 text-center">About IIITB</h3>
              <p className="text-white text-xl leading-relaxed quicksand-font">
                The International Institute of Information Technology Bangalore, also referred to as IIIT-B, is a deemed university that was founded in 1998 with the goal of advancing innovation, entrepreneurship, and education and research in the field of information technology. The Karnataka government and the IT sector jointly sponsor the Institute, which is a registered not-for-profit society. The institute has a lot of technical clubs and committees run by students in the fields of algorithms, competitive programming, development, open-source, robotics, entrepreneurship, and inclusivity in tech.
              </p>
            </div>

        </div>
      </div>
    </section>
      
          {/* FAQ Section */}
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-black text-white">
      <FaqSection />
    </section>

      {/* Footer */}
      <footer className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-lg p-2">
                <span className="text-blue-600 font-bold trebuchet-font">IIITB</span>
              </div>
              <div className="text-white">
                <div className="text-lg font-semibold quicksand-font">International Institute of</div>
                <div className="text-lg font-semibold quicksand-font">Information Technology Bangalore</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold anurati-font">S</span>
              </div>
              <div className="text-white text-2xl font-bold anurati-font">SYNERGY'25</div>
            </div>
            <div>
              <div className="text-white font-semibold mb-2 quicksand-font">CONTACT US</div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600">📱</span>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600">💼</span>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600">📞</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500 text-center">
            <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-50" />
          </div>
        </div>
      </footer>
    </div>
    
  );
  
};


export default SynergyHomepage;