import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const parentWidth = canvas.parentElement?.clientWidth || window.innerWidth;
      const parentHeight = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = parentWidth;
      canvas.height = parentHeight;

      // Scale particle count based on height (35 particles per 1000px height)
      // Capped between 45 and 220 to maintain density and prevent GPU performance drops.
      const calculatedCount = Math.min(220, Math.max(45, Math.floor((parentHeight / 1000) * 35)));
      initParticles(calculatedCount);
    };

    const initParticles = (particleCount: number) => {
      particles = [];
      const goldColor = '#C9A84C';
      
      for (let i = 0; i < particleCount; i++) {
        // 30% golden particles, 70% silver/white particles
        const isGold = i < particleCount * 0.3;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (isGold ? 2.5 : 1.8) + 1,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: -(Math.random() * 0.3 + 0.1), // upward drift
          color: isGold ? goldColor : '#EAEAEA',
          opacity: Math.random() * (isGold ? 0.6 : 0.4) + 0.15,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Soft glow for golden particles
        if (p.color === '#C9A84C') {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#C9A84C';
        }
        
        ctx.fill();
        ctx.restore();

        // Update positions
        p.x += p.speedX;
        p.y += p.speedY;

        // Reset if particles go off-screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10 || p.x > canvas.width + 10) {
          p.speedX = -p.speedX;
        }
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    drawParticles();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}
