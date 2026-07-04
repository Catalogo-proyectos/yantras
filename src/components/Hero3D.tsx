import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

export default function Hero3D() {
  const handleScroll = () => {
    document.getElementById('manifesto-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-3d-container">

      {/* Film grain overlay */}
      <div className="hero-film-grain" aria-hidden="true" />

      {/* Dark vignette overlay */}
      <div className="hero-dark-overlay" aria-hidden="true" />

      {/* Decorative vertical sides */}
      <div className="hero-side hero-left">
        <motion.span className="hero-coord" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 1 }}>
          25°17′S&nbsp;57°38′W
        </motion.span>
        <motion.div
          className="hero-vert-rule"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ originY: 0 } as CSSProperties}
          transition={{ delay: 1.7, duration: 1.3, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>

      <div className="hero-side hero-right">
        <motion.span className="hero-coord" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 1 }}>
          SS&nbsp;—&nbsp;MMXXV
        </motion.span>
        <motion.div
          className="hero-vert-rule"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ originY: 0 } as CSSProperties}
          transition={{ delay: 1.7, duration: 1.3, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>

      {/* Central overlay */}
      <div className="hero-3d-overlay" style={{ pointerEvents: 'none' }}>

        <motion.p
          className="hero-eyebrow-label"
          initial={{ opacity: 0, letterSpacing: '20px' }}
          animate={{ opacity: 0.55, letterSpacing: '10px' }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
        >
          EST. MMXXIV
        </motion.p>

        <div className="hero-title-box">
          <motion.h1
            className="hero-title-main"
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 1.3, ease: [0.23, 1, 0.32, 1] }}
          >
            YANTRAS
          </motion.h1>
        </div>

        <motion.div
          className="hero-sub-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <div className="hero-rule-mini" />
          <p className="hero-title-sub">Calzado Exclusivo</p>
          <div className="hero-rule-mini" />
        </motion.div>

        <motion.button
          onClick={handleScroll}
          className="hero-3d-cta"
          style={{ pointerEvents: 'auto' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          Explorar Colección
        </motion.button>

      </div>

      {/* Bottom vignette */}
      <div className="hero-vignette-bottom" />

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-badge"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
      >
        <motion.div
          className="hero-scroll-bar"
          animate={{ scaleY: [1, 0.25, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="hero-scroll-label">SCROLL</span>
      </motion.div>

    </section>
  );
}
