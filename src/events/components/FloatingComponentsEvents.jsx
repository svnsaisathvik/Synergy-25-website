import React, { useRef, useEffect } from "react";

const FloatingComponentsEvents = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let trails = [];

    class Trail {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 2;
        this.alpha = 1;
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.length = Math.random() * 50 + 20;
        this.speed = Math.random() * 2 + 2;
        this.distortion = 0;
      }

      update() {
        this.alpha -= 0.02;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.distortion += 0.1;
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        if (Math.floor(this.distortion) % 2 === 0) {
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(
            this.x + Math.cos(this.angle) * this.length,
            this.y + Math.sin(this.angle) * this.length
          );
        } else {
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.stroke();
        ctx.closePath();
      }
    }

    const createTrail = (x, y) => {
      const colors = ["cyan", "magenta", "blue", "lime", "purple"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      trails.push(new Trail(x, y, color));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      trails.forEach((trail, index) => {
        trail.update();
        trail.draw();
        if (trail.alpha <= 0) {
          trails.splice(index, 1);
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      createTrail(e.clientX, e.clientY);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(() => {
      createTrail(Math.random() * width, Math.random() * height);
    }, 200);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
    />
  );
};

export default FloatingComponentsEvents;
