import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Advanced Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      ref={containerRef}
      className="hero" 
      style={{ 
        position: 'relative', 
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
      }}
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          y: yBackground,
          scale: scaleImage,
          zIndex: 0
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }} />
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="High Fashion Model" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className="hero-content" 
        style={{ 
          zIndex: 2, 
          y: yText,
          opacity: opacityText,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(60px, 12vw, 150px)', 
              fontWeight: 300, 
              letterSpacing: '8px',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0,
              lineHeight: 0.9
            }}
          >
            YANTRAS
          </motion.h1>
        </div>
        
        <div style={{ overflow: 'hidden' }}>
          <motion.p 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: '18px', 
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#ccc',
              margin: 0
            }}
          >
            Prendas Exclusivas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{ marginTop: '2rem' }}
        >
          <a 
            href="#collections" 
            style={{
              padding: '16px 32px',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.05)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Descubrir
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
