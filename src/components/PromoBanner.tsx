import { motion } from 'framer-motion';

export default function PromoBanner() {
  return (
    <section className="promo-section">
      {/* Left: image */}
      <motion.div
        className="promo-img-col"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
      >
        <img
          src="/images/promo_new.png"
          alt="Yantras Drop 02 Preventa"
          className="promo-img"
          loading="lazy"
        />
        {/* Gradient fade to right */}
        <div className="promo-img-fade" aria-hidden="true" />
      </motion.div>

      {/* Right: content */}
      <div className="promo-content">
        <motion.span
          className="promo-eyebrow"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          ACCESO ANTICIPADO
        </motion.span>

        <motion.h2
          className="promo-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          DROP<br />
          <span className="promo-heading-accent">02</span>
        </motion.h2>

        <motion.p
          className="promo-sub"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Solo para miembros del Círculo Yantras.<br />
          Notificación previa al lanzamiento público.
        </motion.p>

        {/* Scarcity indicator */}
        <motion.div
          className="promo-scarcity"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="promo-scarcity-bar">
            <motion.div
              className="promo-scarcity-fill"
              initial={{ width: '0%' }}
              whileInView={{ width: '73%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>
          <span className="promo-scarcity-label">73 de 100 cupos reservados</span>
        </motion.div>

        <motion.a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="promo-cta"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          RESERVAR MI LUGAR
        </motion.a>

        {/* Decorative dot grid */}
        <div className="promo-dot-grid" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="promo-dot" />
          ))}
        </div>
      </div>
    </section>
  );
}
