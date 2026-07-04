import { motion } from 'framer-motion';

const panels = [
  {
    image: '/images/product1.png',
    label: 'OBSIDIAN RUNNER',
    sub: 'DROP 01',
  },
  {
    image: '/images/editorial.png',
    label: 'ESTÉTICA DE LA ESPERA',
    sub: 'MANIFIESTO',
  },
  {
    image: '/images/product5.png',
    label: 'CRIMSON EDGE',
    sub: 'DROP 01',
  },
];

export default function GiftSection() {
  return (
    <section className="triptych-section">
      <div className="triptych-header">
        <span className="triptych-eyebrow">ARCHIVO VISUAL</span>
        <h2 className="triptych-title">TRES PIEZAS.<br />UNA IDENTIDAD.</h2>
      </div>

      <div className="triptych-grid">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.label}
            className="triptych-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.14, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="triptych-img-wrap">
              <img
                src={panel.image}
                alt={panel.label}
                className="triptych-img"
                loading="lazy"
              />
              <div className="triptych-overlay" />
            </div>
            <div className="triptych-caption">
              <span className="triptych-caption-sub">{panel.sub}</span>
              <span className="triptych-caption-label">{panel.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="triptych-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <a className="triptych-cta" href="#">EXPLORAR EL CATÁLOGO COMPLETO →</a>
      </motion.div>
    </section>
  );
}
