import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Fingerprint, Settings, QrCode, Cpu, CircuitBoard, GithubIcon } from 'lucide-react';

const CyberpunkHeader = ({ isMobile }) => {
  // Floating tech icons data
  const techIcons = [
    { Icon: Shield, delay: 0, position: { top: '15%', left: '10%' } },
    { Icon: Lightbulb, delay: 0.5, position: { top: '25%', right: '15%' } },
    { Icon: Fingerprint, delay: 1, position: { top: '70%', left: '8%' } },
    { Icon: Settings, delay: 1.5, position: { top: '60%', right: '12%' } },
    { Icon: QrCode, delay: 2, position: { top: '40%', right: '5%' } },
  ];

  return (
    <motion.header 
      className="events-header relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ 
        // Ensure header doesn't interfere with scroll functionality
        zIndex: 1,
        pointerEvents: 'none' // Allow clicks to pass through to scrollbar
      }}
    >
      {/* Animated Circuit Board Background */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
          {/* Animated Circuit Lines */}
          <motion.path
            d="M0,50 L400,50 M0,100 L400,100 M0,150 L400,150 M0,200 L400,200 M0,250 L400,250 M0,300 L400,300 M0,350 L400,350"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M50,0 L50,400 M100,0 L100,400 M150,0 L150,400 M200,0 L200,400 M250,0 L250,400 M300,0 L300,400 M350,0 L350,400"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          
          {/* Animated Circuit Nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + (i % 4) * 100}
              cy={50 + Math.floor(i / 4) * 100}
              r="3"
              fill="url(#nodeGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 1 + i * 0.1, 
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3
              }}
            />
          ))}
          
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Corner Frames (matching poster style) */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Top Left Corner */}
        <motion.div
          className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400"
            animate={{ 
              boxShadow: [
                "0 0 5px #06b6d4",
                "0 0 20px #06b6d4",
                "0 0 5px #06b6d4"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Top Right Corner */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-purple-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400"
            animate={{ 
              boxShadow: [
                "0 0 5px #8b5cf6",
                "0 0 20px #8b5cf6",
                "0 0 5px #8b5cf6"
              ]
            }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Bottom Left Corner */}
        <motion.div
          className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.div
            className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400"
            animate={{ 
              boxShadow: [
                "0 0 5px #06b6d4",
                "0 0 20px #06b6d4",
                "0 0 5px #06b6d4"
              ]
            }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />
        </motion.div>

        {/* Bottom Right Corner */}
        <motion.div
          className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-purple-400"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.div
            className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400"
            animate={{ 
              boxShadow: [
                "0 0 5px #8b5cf6",
                "0 0 20px #8b5cf6",
                "0 0 5px #8b5cf6"
              ]
            }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Floating Tech Icons (inspired by poster) */}
      {techIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-30 pointer-events-none"
          style={{ ...position, zIndex: 3 }}
          initial={{ 
            scale: 0, 
            opacity: 0, 
            rotate: -180,
            y: 20
          }}
          animate={{ 
            scale: 1, 
            opacity: 0.3, 
            rotate: 0,
            y: 0
          }}
          transition={{ 
            delay: delay + 1, 
            duration: 1,
            type: "spring",
            stiffness: 200 
          }}
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon 
              className={`w-${isMobile ? '6' : '8'} h-${isMobile ? '6' : '8'} text-cyan-400`}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))'
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Pulsing Data Streams */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{
              left: `${15 + i * 15}%`,
              height: '100%'
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </div>

      {/* Main Header Content */}
      <motion.div 
        className="header-content relative"
        style={{ 
          zIndex: 4,
          pointerEvents: 'auto' // Only the main content should be clickable
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="logo-container">
          {/* Enhanced Animated Icons */}
          <motion.div 
            className="animated-icons"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5
            }}
          >
            <motion.div
              whileHover={{ 
                rotate: 360, 
                scale: 1.2,
                textShadow: "0 0 20px #06b6d4"
              }}
              animate={{
                y: [-5, 5, -5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CircuitBoard 
                className="icon icon-1" 
                aria-label="Circuit Board Icon"
              />
            </motion.div>
            <motion.div
              whileHover={{ 
                rotate: -360, 
                scale: 1.2,
                textShadow: "0 0 20px #8b5cf6"
              }}
              animate={{
                y: [-5, 5, -5]
              }}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Cpu 
                className="icon icon-2" 
                aria-label="CPU Icon"
              />
            </motion.div>
            <motion.div
              whileHover={{ 
                rotate: 360, 
                scale: 1.2,
                textShadow: "0 0 20px #06b6d4"
              }}
              animate={{
                y: [-5, 5, -5]
              }}
              transition={{
                duration: 3,
                delay: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GithubIcon 
                className="icon icon-3" 
                aria-label="GitHub Icon"
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Glitch Text */}
          <motion.div 
            className="glitch-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.8
            }}
          >
            <motion.h1 
              className="gradient-text font-SDGlitch" 
              data-text="EVENTS" 
              style={{ fontFamily: "CyberAlert" }}
              role="banner"
              whileHover={{
                textShadow: [
                  "0 0 20px #06b6d4",
                  "0 0 40px #06b6d4",
                  "0 0 60px #06b6d4",
                  "0 0 40px #06b6d4",
                  "0 0 20px #06b6d4"
                ]
              }}
              animate={{
                textShadow: [
                  "0 0 10px #06b6d4",
                  "0 0 20px #8b5cf6",
                  "0 0 10px #06b6d4"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              EVENTS
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Energy Pulse Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.header>
  );
};

export default CyberpunkHeader;