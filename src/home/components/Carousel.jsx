import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const CardCarousel3D = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const numCards = 6;
  const angleStep = 360 / numCards;
  const translateZ = 300;

  useEffect(() => {
    if (hoverIndex === null) {
      intervalRef.current = setInterval(() => {
        setRotation((prev) => prev - 1);
      }, 50);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [hoverIndex]);

  useEffect(() => {
    const inner = carouselRef.current;
    const cards = inner.children;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const angle = angleStep * i + rotation;

      const isHovered = i === hoverIndex;

      card.style.transform = `
        rotateY(${angle}deg)
        translateZ(${translateZ + (isHovered ? 80 : 0)}px)
        rotateY(${-angle}deg)
      `;

      card.style.transition = isHovered
        ? 'transform 0.3s ease, box-shadow 0.3s ease'
        : 'transform 1s ease';

      card.style.zIndex = isHovered ? 99 : 10;
    }
  }, [rotation, hoverIndex]);

  return (
    <div className="card-carousel">
      <div className="inner-carousel" ref={carouselRef}>
        {[...Array(numCards)].map((_, i) => (
          <div
            key={i}
            className="carousel-card"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h4 className="font-bold text-lg mb-2 trebuchet-font">DECEPTIVE {i + 1}</h4>
            <p className="text-sm mb-4 quicksand-font">
              AI VS REALITY<br />DEEP FAKE CHALLENGE
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block mt-6 text-xs text-white border border-blue-300 rounded-full px-4 py-2 quicksand-font hover:bg-blue-500/20 transition"
            >
              REAL-TIME EVENT
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel3D;
