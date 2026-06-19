import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <section ref={containerRef} className="hero" id="hero">
      {/* Luxury Geometric Wireframes */}
      <div className="hero-grid-lines">
        <div className="line-v line-v-1" />
        <div className="line-v line-v-2" />
        <div className="line-h line-h-1" />
        <div className="line-h line-h-2" />
      </div>

      {/* Parallax Background */}
      <motion.div
        className="hero-bg-wrapper"
        style={{ y: yBg }}
      >
        <img
          src="/images/hero.png"
          alt="Yantras — Dark luxury fashion editorial"
          className="hero-bg-image"
          loading="eager"
        />
        <div className="hero-gradient-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="hero-content"
        style={{ opacity: opacityContent, scale: scaleContent }}
      >
        {/* Staggered Editorial Tagline */}
        <h1 className="hero-tagline-staggered">
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              className="word-left"
              initial={{ y: '105%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            >
              Fuerza<span className="gold-gradient-text">.</span>
            </motion.span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              className="word-right gold-gradient-text"
              initial={{ y: '105%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
            >
              Estilo.
            </motion.span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.span
              className="word-center"
              initial={{ y: '105%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
            >
              Poder<span className="gold-gradient-text">.</span>
            </motion.span>
          </div>
        </h1>

        <div style={{ overflow: 'hidden' }}>
          <motion.p
            className="hero-subtitle"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
          >
            Calzado Exclusivo
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 1.0 }}
        >
          <a href="#coleccion" className="hero-cta">
            Descubrir Colección
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
