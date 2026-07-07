import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

// Detect touch device once at module level
const IS_TOUCH = typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Obsidian Runner', price: 'Gs. 890.000', image: '/images/product1.png' },
  { id: 2, name: 'Shadow Boot', price: 'Gs. 1.250.000', image: '/images/product2.png' },
  { id: 3, name: 'Ivory Phantom', price: 'Gs. 950.000', image: '/images/product3.png' },
  { id: 4, name: 'Void Platform', price: 'Gs. 1.100.000', image: '/images/product4.png' },
  { id: 5, name: 'Crimson Edge', price: 'Gs. 780.000', image: '/images/product5.png' },
  { id: 6, name: 'Noir Essential', price: 'Gs. 680.000', image: '/images/product6.png' },
];

// Memoized to avoid re-renders when parent carousel state changes (drag position, progress)
const CarouselCard = memo<{ product: Product }>(({ product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt effect — only initialized on non-touch devices
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (IS_TOUCH || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    if (IS_TOUCH) return;
    x.set(0);
    y.set(0);
  };

  // On mobile: render plain div without 3D tilt (no springs running)
  const cardStyle = IS_TOUCH
    ? undefined
    : {
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d' as const,
      };

  const CardWrapper = IS_TOUCH ? 'div' : motion.div;

  return (
    <div className="carousel-card-wrapper">
      <CardWrapper
        ref={cardRef}
        className="carousel-card"
        {...(!IS_TOUCH && {
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
          style: cardStyle,
        })}
      >
        <div className="carousel-card-img-container" style={IS_TOUCH ? undefined : { transformStyle: 'preserve-3d' }}>
          <img
            src={product.image}
            alt={product.name}
            className="carousel-card-image"
            loading="lazy"
            decoding="async"
            style={IS_TOUCH ? undefined : {
              transform: 'translateZ(30px)',
            }}
          />
        </div>
        <div className="carousel-card-info" style={IS_TOUCH ? undefined : { transformStyle: 'preserve-3d' }}>
          <div className="carousel-card-name" style={IS_TOUCH ? undefined : { transform: 'translateZ(40px)' }}>
            {product.name}
          </div>
          <div className="carousel-card-meta" style={IS_TOUCH ? undefined : { transform: 'translateZ(35px)' }}>
            <span className="carousel-card-price">{product.price}</span>
            <button className="carousel-card-btn" aria-label={`Ver detalles de ${product.name}`}>
              Ver <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
});

CarouselCard.displayName = 'CarouselCard';

export const ProductCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  // Track progress via ref for arrow button disabled state only
  const progressRef = useRef(0);
  const [, forceUpdate] = useState(0);
  const x = useMotionValue(0);

  // Measure track and container for drag limits
  const updateConstraints = () => {
    if (!containerRef.current || !trackRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const maxScroll = containerWidth - trackWidth;
    setDragConstraints({ left: maxScroll < 0 ? maxScroll : 0, right: 0 });
  };

  useEffect(() => {
    updateConstraints();
    // Re-check after images/content loads to ensure scrollWidth is accurate
    const timeout = setTimeout(updateConstraints, 500);
    window.addEventListener('resize', updateConstraints);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateConstraints);
    };
  }, []);

  // Update progress bar via direct DOM manipulation — avoids React re-renders on every pixel
  useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      if (dragConstraints.left === 0) return;
      const percent = Math.min(Math.max(latest / dragConstraints.left, 0), 1) * 100;
      progressRef.current = percent;
      // Direct DOM update — no setState, no re-render
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${percent}%`;
      }
    });
    return () => unsubscribe();
  }, [dragConstraints.left, x]);

  // Click handler for next/prev arrows
  const slide = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const currentX = x.get();
    const step = 350; // card width (320px) + gap (30px)
    let newX = direction === 'left' ? currentX + step : currentX - step;
    
    // Bounds check
    if (newX > 0) newX = 0;
    if (newX < dragConstraints.left) newX = dragConstraints.left;
    
    // Animate to new position with spring
    animate(x, newX, {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      onComplete: () => forceUpdate(n => n + 1), // Update arrow disabled states after animation
    });
  };

  return (
    <section id="coleccion" className="carousel-section">
      <div className="carousel-container" ref={containerRef}>
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>Exclusividad en cada paso</p>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
              Colección <span className="gold-gradient-text">Exclusiva</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', maxWidth: '400px', fontSize: '14px', lineHeight: '1.6' }}>
            Explora nuestra selecta gama de calzado premium. Diseñados para marcar la diferencia con elegancia y carácter.
          </p>
        </div>

        <div className="carousel-wrapper">
          <motion.div
            ref={trackRef}
            className="carousel-track"
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.15}
            style={{ x }}
          >
            {products.map((product) => (
              <CarouselCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>

        <div className="carousel-controls">
          <div className="carousel-progress-track">
            <div 
              ref={progressBarRef}
              className="carousel-progress-bar" 
              style={{ width: '0%' }} 
            />
          </div>
          
          <div className="carousel-arrows">
            <button 
              className="carousel-arrow" 
              onClick={() => slide('left')}
              disabled={progressRef.current <= 1}
              aria-label="Anterior"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              className="carousel-arrow" 
              onClick={() => slide('right')}
              disabled={progressRef.current >= 99}
              aria-label="Siguiente"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
