import React, { useEffect } from 'react';
import '../styles/Error.css';

const Error404 = () => {
  useEffect(() => {
    const chars = "!@#$%^&*()_+=-<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const container = document.querySelector('.falling-code');

    const createFallingChar = () => {
      const char = document.createElement('span');
      char.classList.add('char');
      char.innerText = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + "vw";
      char.style.animationDuration = Math.random() * 3 + 2 + "s";
      container.appendChild(char);

      setTimeout(() => {
        char.remove();
      }, 5000);
    };

    const intervalId = setInterval(createFallingChar, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <body>
      <div className="falling-code"></div>
      <div className="glitch">404</div>
      <div className="message">Oops! Page not found</div>
      <a href="/" className="btn">Go back to home</a>
    </body>
  );
};

export default Error404;