import React, { useEffect, useRef } from 'react';
import './style.css';

function StarCanvas() {
  const canvasRef = useRef(null);
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const calculateParticleCount = () => {
      return Math.floor((canvas.width * canvas.height) / 6000);
    };

    let particleCount = calculateParticleCount();

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() / 5 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.reset();
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
          this.fadingOut = true;
        }

        if (this.fadingOut) {
          this.opacity -= 0.008;
          if (this.opacity <= 0) {
            this.reset();
          }
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${
          this.opacity
        })`;
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = calculateParticleCount();
      initParticles();
    };

    window.addEventListener('resize', onResize);

    initParticles();
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" />;
}

export default StarCanvas;
