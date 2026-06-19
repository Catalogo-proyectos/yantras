import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Editorial: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in-up').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="editorial" className="editorial-section" ref={sectionRef}>
      <div className="editorial-bg">
        <img
          src="/images/editorial.png"
          alt="Yantras editorial fashion"
          loading="lazy"
        />
      </div>
      <div className="editorial-content">
        <motion.blockquote
          className="editorial-quote"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          No caminamos<span className="gold-gradient-text">,</span><br />
          dejamos <span className="gold-gradient-text">huella</span>.
        </motion.blockquote>

        <motion.div
          className="editorial-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
        />

        <motion.p
          className="editorial-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Yantras — Calzado Exclusivo
        </motion.p>
      </div>
    </section>
  );
};
