import React from 'react';

const SponsorsPage = () => {

  const titleSponsors = [
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    }
  ];

  const presentingSponsors = [
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    },
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    }
  ];

  const associateSponsors = [
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    },
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    }
  ];

  const partners = [
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    },
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    },
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    },
    {
      logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    },
    {
      logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
    }
    
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Cyberpunk background image with overlay */}
      <div className="fixed inset-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-pink-900/50"></div>
        <img 
          src="https://www.creativefabrica.com/wp-content/uploads/2023/07/18/Cyberpunk-City-Street-Scifi-Wallpaper-Graphics-74866949-1.jpg?w=1920&h=1080&fit=crop" 
          alt="Cyberpunk cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Enhanced glitch overlay with more effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-2/3 right-0 w-1/2 h-0.5 bg-purple-400 opacity-50" style={{animation: 'glitch-flash 5s infinite'}}></div>
        <div className="absolute top-1/3 left-0 w-1/2 h-0.5 bg-yellow-400 opacity-50" style={{animation: 'glitch-flash 5s infinite'}}></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={handleBackClick}
            className="group relative inline-flex items-center px-6 py-3 bg-gray-900/80 border-2 border-cyan-400 text-cyan-400 font-bold tracking-wider transform transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:text-pink-500 hover:shadow-lg hover:shadow-cyan-400/30 backdrop-blur-md overflow-hidden"
            style={{fontFamily:"CyberAlert"}}
          >
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 group-hover:bg-pink-500 transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500 group-hover:bg-yellow-400 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-400 group-hover:bg-purple-500 transition-colors duration-300"></div>
            
            {/* Arrow icon */}
            <div className="relative flex items-center">
              <div className="mr-3 transform group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-4 h-4 relative">
                  <div className="absolute top-1/2 left-0 w-3 h-0.5 bg-current transform -translate-y-1/2"></div>
                  <div className="absolute top-1 left-0 w-2 h-2 border-l-2 border-b-2 border-current transform rotate-45"></div>
                </div>
              </div>
              <span className="relative z-10">BACK</span>
            </div>
            
            {/* Glitch effect lines */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{animation: 'glitch-flash 2s infinite'}}></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-pink-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{animation: 'glitch-flash 3s infinite', animationDelay: '0.5s'}}></div>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse" style={{fontFamily:"CyberAlert"}}>
              SPONSORS
            </span>
            <div className="absolute -top-1 left-0 text-7xl font-black text-cyan-400 opacity-20 blur-sm" style={{fontFamily:"CyberAlert"}}>SPONSORS</div>
          </h1>
          <div className="flex justify-center items-center mb-6">
            <div className="w-20 h-1 bg-cyan-400 mr-2"></div>
            <div className="w-4 h-4 border-2 border-pink-500 rotate-45"></div>
            <div className="w-20 h-1 bg-pink-500 ml-2"></div>
          </div>
        </div>

        {/* Title Sponsors */}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <div className="w-4 h-4 bg-cyan-400 mr-4 animate-ping"></div>
            <h2 className="text-4xl font-bold text-cyan-400 tracking-wider" style={{fontFamily:"CyberAlert"}}>TITLE SPONSORS</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400 to-transparent ml-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {titleSponsors.map((sponsor, index) => (
              <div key={index} className="group relative">
                <div className="bg-gray-900/60 border-2 border-cyan-400 h-40 transform transition-all duration-500 hover:scale-105 hover:border-pink-500 hover:shadow-2xl hover:shadow-cyan-400/30 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-pink-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-purple-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-400"></div>
                  
                  <img src={sponsor.logo} alt="Sponsor" className="w-full h-full object-cover filter brightness-125 contrast-110" />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Presenting Sponsors */}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <div className="w-4 h-4 bg-pink-500 mr-4 animate-ping"></div>
            <h2 className="text-4xl font-bold text-pink-500 tracking-wider" style={{fontFamily:"CyberAlert"}}>PRESENTING SPONSORS</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-pink-500 to-transparent ml-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {presentingSponsors.map((sponsor, index) => (
              <div key={index} className="group relative">
                <div className="bg-gray-900/60 border border-pink-500 h-32 transform transition-all duration-500 hover:scale-110 hover:border-cyan-400 hover:shadow-xl hover:shadow-pink-500/30 backdrop-blur-md relative overflow-hidden">
                  <img src={sponsor.logo} alt="Sponsor" className="w-full h-full object-cover filter brightness-125 contrast-110" />
                  
                  <div className="absolute top-2 right-2 w-2 h-2 bg-pink-500 animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Associate Sponsors*/}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <div className="w-4 h-4 bg-purple-500 mr-4 animate-ping"></div>
            <h2 className="text-4xl font-bold text-purple-500 tracking-wider" style={{fontFamily:"CyberAlert"}}>ASSOCIATE SPONSORS</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent ml-4"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {associateSponsors.map((sponsor, index) => (
              <div key={index} className="group relative">
                <div className="bg-gray-900/60 border border-purple-500 h-28 transform transition-all duration-500 hover:scale-110 hover:border-yellow-400 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-md relative overflow-hidden">
                  <img src={sponsor.logo} alt="Sponsor" className="w-full h-full object-cover filter brightness-125 contrast-110" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-yellow-400 opacity-0 group-hover:opacity-15 blur-md transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners with infinite scroll - Fixed image sizing */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-4 h-4 bg-yellow-400 mr-4 animate-ping"></div>
            <h2 className="text-3xl font-bold text-yellow-400 tracking-wider" style={{fontFamily:"CyberAlert"}}>PARTNERS</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-4"></div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right gap-6" style={{width: 'calc(200% + 100px)'}}>
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div key={index} className="group relative flex-shrink-0">
                  <div className="bg-gray-900/80 border border-yellow-400 w-48 h-32 transform transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-lg hover:shadow-yellow-400/25 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 animate-pulse"></div>
                    <img src={partner.logo} alt="Partner" className="w-full h-full object-cover filter brightness-125" />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`duplicate-${index}`} className="group relative flex-shrink-0">
                  <div className="bg-gray-900/80 border border-yellow-400 w-48 h-32 transform transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-lg hover:shadow-yellow-400/25 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 animate-pulse"></div>
                    <img src={partner.logo} alt="Partner" className="w-full h-full object-cover filter brightness-125" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes glitch-flash {
          0%, 90%, 100% { opacity: 0; }
          5%, 10% { opacity: 0.8; }
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SponsorsPage;