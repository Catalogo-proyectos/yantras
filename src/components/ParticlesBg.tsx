import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  isGold: boolean;
  opacity: number;
}

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    let animationId: number;
    let particles: Particle[] = [];
    let visible = true;
    let inViewport = true; // IntersectionObserver-based visibility
    let lastFrameTime = 0;
    // Mobile: ~20 FPS (50ms) — particles drift so slowly this is imperceptible
    // Desktop: ~30 FPS (33ms)
    const FRAME_INTERVAL = isMobile ? 50 : 33;

    // Cache pre-rendered gold and silver glowing particles offscreen
    const goldGlowCanvas = document.createElement('canvas');
    goldGlowCanvas.width = 32;
    goldGlowCanvas.height = 32;
    const gCtx = goldGlowCanvas.getContext('2d');
    if (gCtx) {
      const grad = gCtx.createRadialGradient(16, 16, 1, 16, 16, 14);
      grad.addColorStop(0, '#FFFDF0'); // bright white-gold center
      grad.addColorStop(0.2, '#C9A84C'); // core gold color
      grad.addColorStop(0.5, 'rgba(201, 168, 76, 0.35)'); // outer soft glow
      grad.addColorStop(1, 'rgba(201, 168, 76, 0)');
      gCtx.fillStyle = grad;
      gCtx.beginPath();
      gCtx.arc(16, 16, 16, 0, Math.PI * 2);
      gCtx.fill();
    }

    const silverGlowCanvas = document.createElement('canvas');
    silverGlowCanvas.width = 16;
    silverGlowCanvas.height = 16;
    const sCtx = silverGlowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(8, 8, 1, 8, 8, 7);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.3, '#EAEAEA');
      grad.addColorStop(1, 'rgba(234, 234, 234, 0)');
      sCtx.fillStyle = grad;
      sCtx.beginPath();
      sCtx.arc(8, 8, 8, 0, Math.PI * 2);
      sCtx.fill();
    }

    const handleVisibility = () => { visible = !document.hidden; };
    document.addEventListener('visibilitychange', handleVisibility);

    const resize = () => {
      // Use logical OR fallback to prevent 0 width/height when container is not fully laid out
      canvas.width  = canvas.parentElement?.clientWidth  || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      // Dynamic count based on height — reduced on mobile for perf
      const baseCount = Math.floor((canvas.height / 1000) * 45);
      const count = isMobile
        ? Math.min(30, Math.max(15, baseCount))  // Cap at 30 on mobile
        : Math.min(180, Math.max(50, baseCount));
      
      for (let i = 0; i < count; i++) {
        const isGold = i < count * 0.3; // 30% gold particles
        particles.push({
          x:       Math.random() * canvas.width,
          y:       Math.random() * canvas.height,
          size:    Math.random() * (isGold ? 2.5 : 1.8) + 1, // original particle sizes
          speedX:  (Math.random() - 0.5) * 0.15,
          speedY:  -(Math.random() * 0.3 + 0.1), // upward drift speed
          isGold,
          opacity: Math.random() * (isGold ? 0.6 : 0.4) + 0.15,
        });
      }
    };

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      if (!visible || !inViewport) return;

      // Frame-skip: only render at ~30 FPS to halve CPU usage
      if (timestamp - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        ctx.globalAlpha = p.opacity;
        
        // Draw pre-rendered glowing template depending on type
        if (p.isGold) {
          // Gold template is 32px (16px radius), scale according to size
          const drawSize = p.size * 3.5; 
          ctx.drawImage(goldGlowCanvas, p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize);
        } else {
          // Silver template is 16px (8px radius)
          const drawSize = p.size * 2;
          ctx.drawImage(silverGlowCanvas, p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize);
        }

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen boundaries
        if (p.y < -15) { 
          p.y = canvas.height + 15; 
          p.x = Math.random() * canvas.width; 
        }
        if (p.x < -15 || p.x > canvas.width + 15) {
          p.speedX = -p.speedX;
        }
      }

      ctx.globalAlpha = 1;
    };

    // Pause canvas when scrolled out of the fixed background container
    let observer: IntersectionObserver | null = null;
    const parent = canvas.parentElement;
    if (parent) {
      observer = new IntersectionObserver(
        ([entry]) => { inViewport = entry.isIntersecting; },
        { threshold: 0 }
      );
      observer.observe(parent);
    }

    resize();
    animationId = requestAnimationFrame(draw);

    window.addEventListener('resize', resize, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
      aria-hidden="true"
    />
  );
}
