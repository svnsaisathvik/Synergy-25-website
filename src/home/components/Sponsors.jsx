import React, { useState, useEffect } from 'react';

const AnimatedSponsors = () => {
  const sponsorCategories = [
    {
      title: "TITLE SPONSORS",
      sponsors: [
        {
          logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
        }
      ]
    },
    {
      title: "PRESENTING SPONSORS",
      sponsors: [
        {
          logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
        },
        {
          logo: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
        },
        {
          logo: "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
        }
      ]
    },
    {
      title: "ASSOCIATE SPONSORS",
      sponsors: [
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
      ]
    },
    {
      title: "PARTNERS",
      sponsors: [
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
      ]
    }
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentCategoryIndex((prevIndex) => 
          (prevIndex + 1) % sponsorCategories.length
        );
        setIsAnimating(false);
      }, 600); // Slightly longer for smooth cyberpunk effect
      
    }, 5000); // 5 seconds for better visibility

    return () => clearInterval(interval);
  }, [sponsorCategories.length]);

  const currentCategory = sponsorCategories[currentCategoryIndex];

  const CyberLine = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );

  return (
    <div className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Enhanced Cyberpunk Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-900/5 to-black"></div>
      
      {/* Cyberpunk Morphing Blobs */}
<div className="absolute inset-0 overflow-hidden opacity-20">
  <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[200px] animate-pulse"></div>
  <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[180px] animate-ping"></div>
  <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[160px] animate-pulse"></div>
</div>

{/* Moving Grid Overlay */}
<div className="absolute inset-0 opacity-[0.07]">
  <div className="w-full h-full bg-[linear-gradient(to_right,#0ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f_1px,transparent_1px)] bg-[size:80px_80px] animate-[gridMove_15s_linear_infinite]"></div>
</div>

{/* Subtle Noise Texture */}
<div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
  style={{
    backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
    backgroundSize: "200px"
  }}
></div>

{/* Aurora Sweep */}
<div className="absolute inset-0">
  <div className="absolute -top-1/3 left-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent rotate-12 animate-[aurora_10s_linear_infinite]"></div>
</div>

<style>
{`
  @keyframes gridMove {
    from { background-position: 0 0; }
    to { background-position: 80px 80px; }
  }

  @keyframes aurora {
    0% { transform: translateX(-50%) rotate(12deg); }
    100% { transform: translateX(50%) rotate(12deg); }
  }
`}
</style>

      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '2.5s', animationDuration: '3s' }}></div>
      </div>
      
      {/* Border Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
      
      {/* Enhanced Grid Lines */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-pink-300/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-300/50 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Digital Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div 
          className={`transition-all duration-600 ${
            isAnimating ? 'opacity-0 transform scale-95 blur-sm' : 'opacity-100 transform scale-100 blur-0'
          }`}
        >
          {/* Cyber Title Section */}
          <div className="text-center mb-16">
            <CyberLine className="mb-6" />
            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 tracking-wider uppercase font-mono relative cyber-alert-font">
                {currentCategory.title}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-xl -z-10 animate-pulse"></div>
              </h2>
              {/* Glitch Effect Lines */}
              <div className="absolute -top-1 -left-1 text-cyan-400 opacity-70 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-wider uppercase animate-pulse cyber-alert-font">
                {currentCategory.title}
              </div>
              {/* <div className="absolute top-1 left-1 text-pink-500 opacity-50 text-5xl md:text-7xl font-bold font-mono tracking-wider uppercase animate-pulse" style={{ animationDelay: '0.1s' }}>
                {currentCategory.title}
              </div> */}
            </div>
            <CyberLine className="mt-6" />
          </div>
          
          {/* Sponsors Grid with Cyberpunk Design */}
          <div className={`grid gap-8 justify-items-center ${
            currentCategory.sponsors.length === 1 
              ? 'grid-cols-1' 
              : currentCategory.sponsors.length <= 3 
              ? 'grid-cols-1 md:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-4 lg:grid-cols-4'
          }`}>
            {currentCategory.sponsors.map((sponsor, index) => (
              <div 
                key={`${currentCategoryIndex}-${index}`}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Outer Glow Container - Always active */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-cyan-500/40 to-pink-500/20 rounded-lg opacity-100 group-hover:opacity-100 transition-all duration-500 animate-pulse blur-lg"></div>
                
                {/* Main Sponsor Container */}
                <div 
                  className={`relative overflow-hidden bg-black/80 backdrop-blur-sm border border-cyan-400/70 group-hover:border-pink-500/80 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] ${
                    currentCategory.sponsors.length === 1 ? 'w-80 h-52' : 'w-56 h-36'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                  }}
                >
                  {/* Cyber Corner Accents - Always visible */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 group-hover:border-pink-500 transition-colors duration-500 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 group-hover:border-pink-500 transition-colors duration-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  
                  {/* Enhanced Swish Light Effects - Much more visible */}
                  <div 
                    className={`absolute inset-0 swish-light-${index + 1} pointer-events-none z-20`}
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(0,255,255,0.9) 45%, rgba(255,255,255,0.8) 50%, rgba(0,255,255,0.9) 55%, transparent 70%)',
                      mixBlendMode: 'screen',
                      width: '120%',
                      height: '120%',
                      left: '-10%',
                      top: '-10%'
                    }}
                  ></div>
                  
                  {/* Secondary Swish with Different Color */}
                  <div 
                    className={`absolute inset-0 swish-reverse-${index + 1} pointer-events-none z-20`}
                    style={{
                      background: 'linear-gradient(-45deg, transparent 30%, rgba(255,20,147,0.8) 45%, rgba(255,255,255,0.6) 50%, rgba(255,20,147,0.8) 55%, transparent 70%)',
                      mixBlendMode: 'screen',
                      width: '120%',
                      height: '120%',
                      left: '-10%',
                      top: '-10%'
                    }}
                  ></div>
                  
                  {/* Additional bright flash effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                      animation: 'scan 1.5s infinite linear',
                      animationDelay: `${index * 0.2}s`,
                      mixBlendMode: 'screen'
                    }}
                  ></div>
                  
                  {/* Logo Container - Full fit */}
                  <div className="relative flex items-center justify-center w-full h-full z-10">
                    <img 
                      src={sponsor.logo}
                      alt={`${currentCategory.title} Logo ${index + 1}`}
                      className="w-full h-full object-cover filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125 transition-all duration-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Inner Border Glow - Always active */}
                  <div className="absolute inset-px bg-gradient-to-br from-cyan-400/20 to-pink-500/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Particles Effect - Always active */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-70 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-pink-500 rounded-full opacity-50 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: `${0.5 + index * 0.2}s` }}></div>
                <div className="absolute top-1/2 -left-3 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: `${1 + index * 0.3}s` }}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cyberpunk Progress Navigation */}
        <div className="flex justify-center items-center mt-20 space-x-8">
          {sponsorCategories.map((_, index) => (
            <button
              key={index}
              className={`relative group transition-all duration-500 ${
                index === currentCategoryIndex ? 'scale-125' : 'scale-100'
              }`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentCategoryIndex(index);
                    setIsAnimating(false);
                  }, 600);
                }
              }}
            >
              {/* Outer Ring */}
              <div className={`w-8 h-8 border-2 ${
                index === currentCategoryIndex 
                  ? 'border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)]' 
                  : 'border-gray-600 group-hover:border-pink-400'
              } transition-all duration-500`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}
              >
                {/* Inner Core */}
                <div className={`w-full h-full ${
                  index === currentCategoryIndex 
                    ? 'bg-gradient-to-br from-cyan-400 to-pink-500 animate-pulse' 
                    : 'bg-gray-700 group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:to-purple-500'
                } transition-all duration-500`}></div>
                
                {/* Scan Line */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 ${
                  index === currentCategoryIndex ? 'opacity-100 animate-pulse' : 'group-hover:opacity-50'
                } transition-opacity duration-500`}></div>
              </div>
              
              {/* Connection Lines */}
              {index < sponsorCategories.length - 1 && (
                <div className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Bottom Cyber Accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      {/* CSS Animations for Swish Effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes swish-main {
            0% { transform: translateX(-150%) translateY(-150%) rotate(45deg); opacity: 0; }
            20% { opacity: 1; }
            50% { transform: translateX(0%) translateY(0%) rotate(45deg); opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(150%) translateY(150%) rotate(45deg); opacity: 0; }
          }
          
          @keyframes swish-reverse {
            0% { transform: translateX(150%) translateY(-150%) rotate(-45deg); opacity: 0; }
            20% { opacity: 0.8; }
            50% { transform: translateX(0%) translateY(0%) rotate(-45deg); opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateX(-150%) translateY(150%) rotate(-45deg); opacity: 0; }
          }
          
          .swish-light-1 { animation: swish-main 3s infinite ease-in-out; animation-delay: 0.3s; }
          .swish-light-2 { animation: swish-main 3s infinite ease-in-out; animation-delay: 0.6s; }
          .swish-light-3 { animation: swish-main 3s infinite ease-in-out; animation-delay: 0.9s; }
          .swish-light-4 { animation: swish-main 3s infinite ease-in-out; animation-delay: 1.2s; }
          .swish-light-5 { animation: swish-main 3s infinite ease-in-out; animation-delay: 1.5s; }
          .swish-light-6 { animation: swish-main 3s infinite ease-in-out; animation-delay: 1.8s; }
          .swish-light-7 { animation: swish-main 3s infinite ease-in-out; animation-delay: 2.1s; }
          .swish-light-8 { animation: swish-main 3s infinite ease-in-out; animation-delay: 2.4s; }
          
          .swish-reverse-1 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 1.0s; }
          .swish-reverse-2 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 1.4s; }
          .swish-reverse-3 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 1.8s; }
          .swish-reverse-4 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 2.2s; }
          .swish-reverse-5 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 2.6s; }
          .swish-reverse-6 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 3.0s; }
          .swish-reverse-7 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 3.4s; }
          .swish-reverse-8 { animation: swish-reverse 4s infinite ease-in-out; animation-delay: 3.8s; }
        `
      }} />
    </div>
  );
};

export default AnimatedSponsors;