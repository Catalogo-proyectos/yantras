import { motion } from 'framer-motion';

const products = [
  { id: 4, name: 'Sienna Suede Loafer', price: 'Gs. 820.000', image: '/images/product_moccasins_alt.png', badge: 'EXCLUSIVO', drop: 'DROP 01' },
  { id: 5, name: 'Alabaster Ankle Boot', price: 'Gs. 1.250.000', image: '/images/product_white_boots.png', badge: 'NUEVO', drop: 'DROP 01' },
  { id: 6, name: 'Obsidian Knee Boot', price: 'Gs. 1.350.000', image: '/images/product_black_boots.png', badge: 'ÚLTIMAS UNIDADES', drop: 'DROP 01' },
];

export default function InfiniteCarousel() {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <div className="featured-title-group">
          <span className="featured-eyebrow">DROP 01 · YANTRAS</span>
          <h2 className="featured-title">CUERO VIVO</h2>
        </div>
        <a className="featured-cta-all" href="#">EXPLORAR TODO EL CATÁLOGO</a>
      </div>

      <div className="featured-grid">
        {products.map((product, i) => (
          <motion.article
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <a className="product-card-img-link" href="#" tabIndex={-1} aria-hidden>
              <div className="product-card-img-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="product-card-badge">{product.badge}</span>
              </div>
            </a>

            <div className="product-card-info">
              <div className="product-card-meta">
                <span className="product-card-drop">{product.drop}</span>
                <span className="product-card-status">{product.badge}</span>
              </div>
              <a className="product-card-name-link" href="#">
                <h3 className="product-card-name">{product.name}</h3>
              </a>
              <p className="product-card-price">{product.price}</p>
              <a className="product-card-cta" href="#">ADQUIRIR PIEZA</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
