import React from 'react';

const NeonTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-1 px-4">
      <div className="flex flex-col sm:flex-row sm:space-x-8 items-center justify-center w-full">
        <h1
          className="font-[neon] text-[12vw] sm:text-[8vw] leading-none text-[#FB42D4] mt-4 sm:mt-7 text-center"
          style={{
            textShadow: '0 0 3vw #F40AD5',
            animation: 'cyber 2.2s ease-in infinite'
          }}
        >
          SYNERGY
        </h1>
        <h1
          className="font-[neon] text-[14vw] sm:text-[10vw] leading-none text-[#42FDEB] mt-2 sm:mt-0 text-center"
          style={{
            textShadow: '0 0 3vw #23F6EF',
            animation: 'zone 3.2s ease-out infinite'
          }}
        >
          2025
        </h1>
      </div>

      <style jsx>{`
        @keyframes cyber {
          0%, 100% {
            text-shadow: 0 0 .5vw #FA0AC1, 0 0 2vw #FA0AC1, 0 0 6vw #FA0AC1, 0 0 6vw #FA0AC1, 0 0 .2vw #FE0BB8, .5vw .5vw .1vw #800964;
            color: #FE0BB8;
          }
          50% {
            text-shadow: 0 0 .5vw #800C5B, 0 0 1vw #800C5B, 0 0 4vw #800C5B, 0 0 4vw #800C5B, 0 0 .2vw #800C5B, .5vw .5vw .1vw #40043A;
            color: #800964;
          }
        }
        @keyframes zone {
          0%, 100% {
            text-shadow: 0 0 .5vw #10E19F, 0 0 2vw #10E19F, 0 0 6vw #10E19F, 0 0 6vw #10E19F, 0 0 .2vw #8BFEFD, .5vw .5vw .1vw #148270;
            color: #28E7DE;
          }
          50% {
            text-shadow: 0 0 .5vw #088140, 0 0 1vw #088140, 0 0 4vw #088140, 0 0 4vw #088140, 0 0 .2vw #088140, .5vw .5vw .1vw #0A4930;
            color: #148C6B;
          }
        }
      `}</style>
    </div>
  );
};

export default NeonTitle;