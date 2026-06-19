import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Obsidian Runner', price: 'Gs. 890.000', image: '/images/product1.png' },
  { id: 2, name: 'Shadow Boot', price: 'Gs. 1.250.000', image: '/images/product2.png' },
  { id: 3, name: 'Ivory Phantom', price: 'Gs. 950.000', image: '/images/product3.png' },
  { id: 4, name: 'Void Platform', price: 'Gs. 1.100.000', image: '/images/product4.png' },
];

export default function CollectionGrid() {
  return (
    <section id="collection-section" className="collection-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head-left">
          <p className="section-eyebrow">Selección Editorial</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-display)' }}>
            Colección <span className="gold-gradient-text">Exclusiva</span>
          </h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="collection-grid-container">
          
          {/* Row 1: Product 1 (Large) & Product 2 (Small) */}
          <div className="asymmetric-row">
            <motion.div 
              className="asymmetric-col-large"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="understated-card">
                <div className="understated-img-frame">
                  <img 
                    src={products[0].image} 
                    alt={products[0].name} 
                    className="understated-card-img" 
                    loading="lazy"
                  />
                </div>
                <div className="understated-info">
                  <h3 className="understated-name">{products[0].name}</h3>
                  <span className="understated-price">{products[0].price}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="asymmetric-col-small"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            >
              <div className="understated-card">
                <div className="understated-img-frame">
                  <img 
                    src={products[1].image} 
                    alt={products[1].name} 
                    className="understated-card-img" 
                    loading="lazy"
                  />
                </div>
                <div className="understated-info">
                  <h3 className="understated-name">{products[1].name}</h3>
                  <span className="understated-price">{products[1].price}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Product 3 (Small) & Product 4 (Large) - will reverse automatically in CSS */}
          <div className="asymmetric-row">
            <motion.div 
              className="asymmetric-col-large"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="understated-card">
                <div className="understated-img-frame">
                  <img 
                    src={products[3].image} 
                    alt={products[3].name} 
                    className="understated-card-img" 
                    loading="lazy"
                  />
                </div>
                <div className="understated-info">
                  <h3 className="understated-name">{products[3].name}</h3>
                  <span className="understated-price">{products[3].price}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="asymmetric-col-small"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            >
              <div className="understated-card">
                <div className="understated-img-frame">
                  <img 
                    src={products[2].image} 
                    alt={products[2].name} 
                    className="understated-card-img" 
                    loading="lazy"
                  />
                </div>
                <div className="understated-info">
                  <h3 className="understated-name">{products[2].name}</h3>
                  <span className="understated-price">{products[2].price}</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
