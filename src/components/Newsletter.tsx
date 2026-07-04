import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="newsletter-section">
      <motion.div
        className="newsletter-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="newsletter-content">
          <span className="newsletter-eyebrow">ACCESO EXCLUSIVO</span>
          <h2 className="newsletter-title">EL CÍRCULO YANTRAS</h2>
          <p className="newsletter-desc">
            Recibí notificaciones prioritarias e invitaciones a lanzamientos privados
            de nuestros drops numerados de edición limitada.
          </p>
        </div>
        <form
          className="newsletter-form"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">SUSCRIBIRSE</button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
