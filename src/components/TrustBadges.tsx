import { motion } from 'framer-motion';

const badges = [
  {
    title: 'ENVÍOS DE COMPROMISO',
    desc: 'Despachos discretos y rápidos a todo el territorio nacional.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'HERENCIA DURADERA',
    desc: 'Piezas de cuero artesanal hechas para perdurar y envejecer con estilo.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'SOPORTE PREMIUM',
    desc: 'Gestión ágil para cambios y consultas de talle sin complicaciones.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.title}
            className="trust-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="trust-icon">{badge.icon}</div>
            <h3 className="trust-title">{badge.title}</h3>
            <p className="trust-desc">{badge.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
