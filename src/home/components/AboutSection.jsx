import React from 'react';
import '../styles/AboutSection.css';

const About = () => {
  return (
    <section id="about">
      {/* Cyberpunk Background Elements */}
      <div className="about-background">
        {/* Grid Pattern */}
        <div className="about-grid-pattern">
          <div className="about-grid"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="about-shape-1"></div>
        <div className="about-shape-2"></div>
        <div className="about-shape-3"></div>
        
        {/* Glowing Lines */}
        <div className="about-glow-line-1"></div>
        <div className="about-glow-line-2"></div>
      </div>

      {/* Rotating Cube */}
      <div className="about-cube-container">
        <div className="cube">
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

      <div className="about-content">
        <div className="about-grid-layout">
          {/* About Synergy */}
          <div className="about-card">
            {/* Cyberpunk Frame */}
            <div className="about-frame"></div>
            <div className="about-corner about-corner-tl"></div>
            <div className="about-corner about-corner-tr"></div>
            <div className="about-corner about-corner-bl"></div>
            <div className="about-corner about-corner-br"></div>
            
            {/* Content */}
            <div className="about-content-box">
              {/* Title with Glitch Effect */}
              <div className="about-title-container">
                <h3 className="about-title">
                  <span className="about-title-gradient-cyan" style={{fontFamily:"CyberAlert"}}>
                    ABOUT SYNERGY
                  </span>
                </h3>
                <div className="about-title-shadow">
                  <span className="about-title-shadow-purple" style={{fontFamily:"CyberAlert"}}>ABOUT SYNERGY</span>
                </div>
                {/* Underline */}
                <div className="about-underline"></div>
              </div>

              {/* Text Content */}
              <div className="about-text-container">
                <p className="about-text">
                  <span className="about-text-highlight-cyan">Synergy'25</span> is the annual techfest of <span className="about-text-highlight-purple">IIIT-Bangalore</span>, bringing together innovation and collaboration in an exciting event. It includes <span className="about-text-highlight-green">hackathons</span>, <span className="about-text-highlight-blue">coding competitions</span>, and <span className="about-text-highlight-yellow">entrepreneurial challenges</span>, giving students a chance to show off their skills and creativity.
                </p>
                <div className="about-text-break"></div>
                <p className="about-text">
                  Attendees can learn from top industry leaders through talks and workshops, gaining useful insights and inspiration. The event celebrates the diverse culture of the institute, bringing together students, professors, researchers, and engineers in a <span className="about-text-highlight-pink">creative technical festival</span>.
                </p>
                
                {/* Data Stream Effect */}
                <div className="about-stream-right">
                  <div className="about-stream-bar"></div>
                </div>
              </div>

              {/* Stats */}
              <div className="about-stats">
                <div className="about-stat-item">
                  <div className="about-stat-number about-stat-number-cyan" style={{fontFamily:"CyberAlert"}}>50+</div>
                  <div className="about-stat-label" style={{fontFamily:"CyberAlert"}}>EVENTS</div>
                </div>
                <div className="about-stat-item about-stat-item-purple">
                  <div className="about-stat-number about-stat-number-purple" style={{fontFamily:"CyberAlert"}}>1000+</div>
                  <div className="about-stat-label" style={{fontFamily:"CyberAlert"}}>PARTICIPANTS</div>
                </div>
                <div className="about-stat-item about-stat-item-green">
                  <div className="about-stat-number about-stat-number-green" style={{fontFamily:"CyberAlert"}}>3</div>
                  <div className="about-stat-label" style={{fontFamily:"CyberAlert"}}>DAYS</div>
                </div>
              </div>
            </div>
          </div>

          {/* About IIITB */}
          <div className="about-card">
            {/* Cyberpunk Frame */}
            <div className="about-frame about-frame-purple"></div>
            <div className="about-corner about-corner-tl about-corner-purple"></div>
            <div className="about-corner about-corner-tr about-corner-purple"></div>
            <div className="about-corner about-corner-bl about-corner-purple"></div>
            <div className="about-corner about-corner-br about-corner-purple"></div>
            
            {/* Content */}
            <div className="about-content-box">
              {/* Title with Glitch Effect */}
              <div className="about-title-container">
                <h3 className="about-title">
                  <span className="about-title-gradient-purple" style={{fontFamily:"CyberAlert"}}>
                    ABOUT IIITB
                  </span>
                </h3>
                <div className="about-title-shadow">
                  <span className="about-title-shadow-cyan" style={{fontFamily:"CyberAlert"}}>ABOUT IIITB</span>
                </div>
                {/* Underline */}
                <div className="about-underline about-underline-purple"></div>
              </div>

              {/* Text Content */}
              <div className="about-text-container">
                <p className="about-text">
                  The <span className="about-text-highlight-purple">International Institute of Information Technology Bangalore</span>, also referred to as <span className="about-text-highlight-cyan">IIIT-B</span>, is a deemed university founded in <span className="about-text-highlight-yellow">1998</span> with the goal of advancing innovation, entrepreneurship, and education in <span className="about-text-highlight-green">information technology</span>.
                </p>
                <div className="about-text-break"></div>
                <p className="about-text">
                  The Karnataka government and the IT sector jointly sponsor the Institute. It features technical clubs in <span className="about-text-highlight-blue">algorithms</span>, <span className="about-text-highlight-pink">competitive programming</span>, <span className="about-text-highlight-green">development</span>, <span className="about-text-highlight-yellow">robotics</span>, and <span className="about-text-highlight-purple">entrepreneurship</span>.
                </p>
                
                {/* Data Stream Effect */}
                <div className="about-stream-left">
                  <div className="about-stream-bar about-stream-bar-purple"></div>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="about-stats">
                <div className="about-stat-item about-stat-item-purple">
                  <div className="about-stat-number about-stat-number-purple" style={{fontFamily:"CyberAlert"}}>25+</div>
                  <div className="about-stat-label" style={{fontFamily:"CyberAlert"}}>YEARS</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-number about-stat-number-cyan" style={{fontFamily:"CyberAlert"}}>10+</div>
                  <div className="about-stat-label" style={{fontFamily:"CyberAlert"}}>CLUBS</div>
                </div>
                <div className="about-stat-item about-stat-item-pink">
                  <div className="about-stat-number about-stat-number-pink" style={{fontFamily:"CyberAlert"}}>2000+</div>
                  <div className="about-stat-label" style={{fontFamily:"CyberAlert"}}>STUDENTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Cyberpunk Elements */}
      <div className="about-bottom-line"></div>
      <div className="about-bottom-shape"></div>
    </section>
  );
};

export default About;