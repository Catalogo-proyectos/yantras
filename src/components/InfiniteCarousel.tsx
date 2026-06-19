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
  { id: 5, name: 'Crimson Edge', price: 'Gs. 780.000', image: '/images/product5.png' },
  { id: 6, name: 'Noir Essential', price: 'Gs. 680.000', image: '/images/product6.png' },
];

export default function InfiniteCarousel() {
  return (
    <section className="infinite-carousel-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '20px' }}>
          <p className="section-eyebrow">Catálogo Completo</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-display)' }}>
            Línea <span className="gold-gradient-text">Temporal</span>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="infinite-carousel-container" aria-hidden="true">
        {/* First Group */}
        <div className="carousel-group">
          {products.map((product) => (
            <div key={`g1-${product.id}`} className="carousel-product-card">
              <div className="carousel-product-frame">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="carousel-product-img" 
                  loading="lazy"
                />
              </div>
              <div className="carousel-product-info">
                <span className="carousel-product-name">{product.name}</span>
                <span className="carousel-product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Group (Duplicate for Infinite Loop) */}
        <div className="carousel-group">
          {products.map((product) => (
            <div key={`g2-${product.id}`} className="carousel-product-card">
              <div className="carousel-product-frame">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="carousel-product-img" 
                  loading="lazy"
                />
              </div>
              <div className="carousel-product-info">
                <span className="carousel-product-name">{product.name}</span>
                <span className="carousel-product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
