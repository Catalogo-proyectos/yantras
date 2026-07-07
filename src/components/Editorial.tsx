import { motion } from 'framer-motion';

const pillars = [
  { heading: 'Cuero Vivo', body: 'Materiales seleccionados con obsesión en cada pieza.' },
  { heading: 'Edición Numerada', body: 'Cada par lleva su número. La escasez es intencional.' },
  { heading: 'Herencia Permanente', body: 'Diseñado para durar décadas, no temporadas.' },
];

export default function Editorial() {
  return (
    <section className="editorial-split-section">

      <motion.div
        className="editorial-img-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <img src="/images/editorial_new.png" alt="Yantras Editorial" className="editorial-img" loading="lazy" decoding="async" />
        <span className="editorial-img-label">DROP 01 // EDICIONES EXCLUSIVAS DE CUERO</span>
      </motion.div>

      <motion.div
        className="editorial-content-col"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="editorial-eyebrow">NUESTRO COMPROMISO</span>
        <h2 className="editorial-title">La estética<br />de la espera.</h2>
        <p className="editorial-text">
          Operamos bajo el principio de la escasez consciente. No fabricamos en masa;
          rescatamos la mística del diseño urbano mediante piezas numeradas de cuero artesanal.
          Cada par cuenta el origen de una identidad, diseñado para durar generaciones.
        </p>
        <a className="editorial-cta" href="#">CONOCER NUESTRO ORIGEN →</a>
        <div className="editorial-pillars">
          {pillars.map((p, i) => (
            <motion.div
              key={p.heading}
              className="editorial-pillar"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="editorial-pillar-heading">{p.heading}</span>
              <span className="editorial-pillar-body">{p.body}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
