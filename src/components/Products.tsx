import React, { useEffect, useRef } from 'react';

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

export const Products: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-60px' }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe each card
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="coleccion" className="products-section" ref={sectionRef}>
      <div className="container">
        <div ref={headerRef} className="section-header fade-in-up">
          <p className="section-eyebrow">Exclusividad en cada paso</p>
          <h2 className="section-title">Colección</h2>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="product-grid stagger-children">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="product-card fade-in-up"
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-card-image"
                loading="lazy"
                decoding="async"
              />
              <div className="product-card-overlay">
                <div>
                  <div className="product-card-name">{product.name}</div>
                  <div className="product-card-price">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
