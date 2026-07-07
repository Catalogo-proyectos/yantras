import { useState, memo } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  { id: 1, name: 'Obsidian Woman Boot', price: 'Gs. 1.350.000',  image: '/images/product_black_boots.png', edition: '01/30', badge: 'DROP 01' },
  { id: 2, name: 'Ivory Ankle Boot',     price: 'Gs. 1.250.000', image: '/images/product_white_boots.png', edition: '02/30', badge: 'NUEVO' },
  { id: 3, name: 'Noir Horsebit Loafer',   price: 'Gs. 850.000',  image: '/images/product_moccasins.png', edition: '03/30', badge: 'EXCLUSIVO' },
  { id: 4, name: 'Sienna Suede Loafer',   price: 'Gs. 820.000', image: '/images/product_moccasins_alt.png', edition: '04/30', badge: 'ÚLTIMAS' },
];

function WishlistIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

const BestsellerCard = memo(function BestsellerCard({ item, index }: { item: typeof ITEMS[0]; index: number }) {
  const [wished, setWished] = useState(false);

  return (
    <motion.article
      className="bs-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="bs-card-img-wrap">
        <img src={item.image} alt={item.name} className="bs-card-img" loading="lazy" decoding="async" />

        {/* Hover overlay */}
        <div className="bs-card-overlay" aria-hidden="true" />

        {/* Edition number */}
        <span className="bs-edition">{item.edition}</span>

        {/* Wishlist */}
        <button
          className={`bs-wish ${wished ? 'bs-wish--active' : ''}`}
          onClick={() => setWished(w => !w)}
          aria-label="Añadir a favoritos"
        >
          <WishlistIcon active={wished} />
        </button>

        {/* Badge */}
        <span className="bs-badge">{item.badge}</span>
      </div>

      <div className="bs-card-info">
        <h3 className="bs-card-name">{item.name}</h3>
        <span className="bs-card-price">{item.price}</span>
      </div>
    </motion.article>
  );
});

export default function BestsellersRow() {
  return (
    <section className="bs-section">
      {/* Left column */}
      <motion.div
        className="bs-left"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="bs-eyebrow">DROP 01</span>
        <h2 className="bs-heading">
          NUESTROS<br />
          <em className="bs-heading-gold">ELEGIDOS.</em>
        </h2>
        <p className="bs-left-sub">Piezas numeradas.<br />Disponibilidad limitada.</p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="bs-view-all"
        >
          VER COLECCIÓN
        </a>
      </motion.div>

      {/* Right: 4 cards */}
      <div className="bs-grid">
        {ITEMS.map((item, i) => (
          <BestsellerCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
