import React from 'react';
import '../styles/AboutSection.css';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Cyberpunk Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-500 rotate-45 opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-purple-500 opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-green-400 rotate-12 opacity-25"></div>
        
        {/* Glowing Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-15"></div>
      </div>

      {/* Rotating Cube */}
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

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Synergy */}
          <div className="relative">
            {/* Cyberpunk Frame */}
            <div className="absolute -inset-4 border border-cyan-500/30 rounded-lg"></div>
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-500"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-500"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-cyan-500"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-500"></div>
            
            {/* Content */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
              {/* Title with Glitch Effect */}
              <div className="relative mb-8">
                <h3 className="text-4xl font-bold text-center orbitron-font relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    ABOUT SYNERGY
                  </span>
                </h3>
                <div className="absolute inset-0 text-4xl font-bold text-center orbitron-font opacity-20 animate-pulse">
                  <span className="text-purple-500">ABOUT SYNERGY</span>
                </div>
                {/* Underline */}
                <div className="mt-2 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="relative">
                <p className="text-gray-300 text-lg leading-relaxed orbitron-font font-light">
                  <span className="text-cyan-400 font-semibold">Synergy'25</span> is the annual techfest of <span className="text-purple-400 font-semibold">IIIT-Bangalore</span>, bringing together innovation and collaboration in an exciting event. It includes <span className="text-green-400">hackathons</span>, <span className="text-blue-400">coding competitions</span>, and <span className="text-yellow-400">entrepreneurial challenges</span>, giving students a chance to show off their skills and creativity.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed orbitron-font font-light">
                  Attendees can learn from top industry leaders through talks and workshops, gaining useful insights and inspiration. The event celebrates the diverse culture of the institute, bringing together students, professors, researchers, and engineers in a <span className="text-pink-400 font-semibold">creative technical festival</span>.
                </p>
                
                {/* Data Stream Effect */}
                <div className="absolute -right-4 top-0 w-1 h-full">
                  <div className="w-full h-4 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-slate-800/30 rounded border border-cyan-500/20">
                  <div className="text-2xl font-bold text-cyan-400 orbitron-font">50+</div>
                  <div className="text-xs text-gray-400 orbitron-font">EVENTS</div>
                </div>
                <div className="text-center p-3 bg-slate-800/30 rounded border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 orbitron-font">1000+</div>
                  <div className="text-xs text-gray-400 orbitron-font">PARTICIPANTS</div>
                </div>
                <div className="text-center p-3 bg-slate-800/30 rounded border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 orbitron-font">3</div>
                  <div className="text-xs text-gray-400 orbitron-font">DAYS</div>
                </div>
              </div>
            </div>
          </div>

          {/* About IIITB */}
          <div className="relative">
            {/* Cyberpunk Frame */}
            <div className="absolute -inset-4 border border-purple-500/30 rounded-lg"></div>
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-purple-500"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-purple-500"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-purple-500"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>
            
            {/* Content */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
              {/* Title with Glitch Effect */}
              <div className="relative mb-8">
                <h3 className="text-4xl font-bold text-center orbitron-font relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    ABOUT IIITB
                  </span>
                </h3>
                <div className="absolute inset-0 text-4xl font-bold text-center orbitron-font opacity-20 animate-pulse">
                  <span className="text-cyan-500">ABOUT IIITB</span>
                </div>
                {/* Underline */}
                <div className="mt-2 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="relative">
                <p className="text-gray-300 text-lg leading-relaxed orbitron-font font-light">
                  The <span className="text-purple-400 font-semibold">International Institute of Information Technology Bangalore</span>, also referred to as <span className="text-cyan-400 font-semibold">IIIT-B</span>, is a deemed university founded in <span className="text-yellow-400">1998</span> with the goal of advancing innovation, entrepreneurship, and education in <span className="text-green-400">information technology</span>.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed orbitron-font font-light">
                  The Karnataka government and the IT sector jointly sponsor the Institute. It features technical clubs in <span className="text-blue-400">algorithms</span>, <span className="text-pink-400">competitive programming</span>, <span className="text-green-400">development</span>, <span className="text-yellow-400">robotics</span>, and <span className="text-purple-400">entrepreneurship</span>.
                </p>
                
                {/* Data Stream Effect */}
                <div className="absolute -left-4 top-0 w-1 h-full">
                  <div className="w-full h-4 bg-gradient-to-b from-purple-500 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-slate-800/30 rounded border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 orbitron-font">25+</div>
                  <div className="text-xs text-gray-400 orbitron-font">YEARS</div>
                </div>
                <div className="text-center p-3 bg-slate-800/30 rounded border border-cyan-500/20">
                  <div className="text-2xl font-bold text-cyan-400 orbitron-font">10+</div>
                  <div className="text-xs text-gray-400 orbitron-font">CLUBS</div>
                </div>
                <div className="text-center p-3 bg-slate-800/30 rounded border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-400 orbitron-font">2000+</div>
                  <div className="text-xs text-gray-400 orbitron-font">STUDENTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Cyberpunk Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-purple-500/20 rotate-45 opacity-20"></div>
    </section>
  );
};

export default About;