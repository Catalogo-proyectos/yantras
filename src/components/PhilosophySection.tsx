import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section id="manifesto-section" className="manifesto-v2-section">
      <div className="manifesto-v2-header">
        <span className="manifesto-v2-dot" aria-hidden="true" />
        <span className="manifesto-v2-eyebrow">DROP 01 DISPONIBLE — EDICIONES ESTRICTAMENTE LIMITADAS</span>
        <span className="manifesto-v2-dot" aria-hidden="true" />
      </div>

      <div className="manifesto-v2-divider" />

      <motion.blockquote
        className="manifesto-v2-quote"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
      >
        "El calzado no es una prenda pasajera.{' '}
        <span className="gold-gradient-text">Es la huella de quién sos."</span>
      </motion.blockquote>

      <motion.p
        className="manifesto-v2-paragraph"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        Inspirado en la fuerza y la disciplina urbana, el Drop 01 de Yantras redefine el calzado exclusivo.
        Diseñado y confeccionado bajo los más altos estándares artesanales, cada par está pensado
        para trascender la moda y acompañarte en cada paso que decidas dar.
      </motion.p>
    </section>
  );
}
