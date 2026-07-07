import { motion } from 'framer-motion';

const panels = [
  {
    id: 1,
    image: '/images/product_black_boots.png',
    badge: 'DROP 01 — EXCLUSIVO',
    name: 'OBSIDIAN WOMAN BOOT',
    subtitle: '"Bota alta de mujer confeccionada en cuero negro premium texturizado."',
    cta: 'EXPLORAR PIEZA',
  },
  {
    id: 2,
    image: '/images/product_white_boots.png',
    badge: 'DROP 01 — NUEVO',
    name: 'IVORY ANKLE BOOT',
    subtitle: '"Bota de cuero blanco tiza con detalles metálicos dorados en el cierre."',
    cta: 'VER DETALLES',
  },
  {
    id: 3,
    image: '/images/product_moccasins.png',
    badge: 'DROP 01 — NUEVO',
    name: 'NOIR HORSEBIT LOAFER',
    subtitle: '"Mocasín clásico de cuero negro italiano con herraje de metal dorado pulido."',
    cta: 'ADQUIRIR PIEZA',
  },
];

export default function CollectionGrid() {
  return (
    <section id="categories-section" className="campaign-section">

      <div className="campaign-top-bar">
        <span className="campaign-season">TEMPORADA INAUGURAL</span>
        <span className="campaign-divider-line" aria-hidden="true" />
        <span className="campaign-tagline">DISTINCIÓN SIN CONCESIONES — DROP 01</span>
      </div>

      <div className="campaign-layout">

        {/* Left large panel */}
        <motion.div
          className="campaign-panel campaign-panel-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="campaign-img-wrap">
            <img src={panels[0].image} alt={panels[0].name} className="campaign-img" loading="lazy" />
          </div>
          <span className="campaign-badge">{panels[0].badge}</span>
          <div className="campaign-caption">
            <span className="campaign-caption-name">{panels[0].name}</span>
            <span className="campaign-caption-sub">{panels[0].subtitle}</span>
            <a className="campaign-caption-link" href="#">{panels[0].cta}</a>
          </div>
        </motion.div>

        {/* Right stacked */}
        <div className="campaign-stack-right">
          {panels.slice(1).map((panel, i) => (
            <motion.div
              key={panel.id}
              className="campaign-panel campaign-panel-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="campaign-img-wrap">
                <img src={panel.image} alt={panel.name} className="campaign-img" loading="lazy" />
              </div>
              <span className="campaign-badge">{panel.badge}</span>
              <div className="campaign-caption">
                <span className="campaign-caption-name">{panel.name}</span>
                <span className="campaign-caption-sub">{panel.subtitle}</span>
                <a className="campaign-caption-link" href="#">{panel.cta}</a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
