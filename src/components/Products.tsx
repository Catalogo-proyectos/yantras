import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Oversized Obsidian Blazer',
    price: '$240.00',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Silk Audacity Dress',
    price: '$185.00',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Minimalist Cargo Pants',
    price: '$130.00',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1994&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Noir Essential Knit',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop'
  }
];

export const Products = () => {
  return (
    <section className="section container">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
        style={{ marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Destacados</h2>
        <p style={{ color: 'var(--color-gray)' }}>Prendas exclusivas seleccionadas para ti.</p>
      </motion.div>

      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="product-card"
          >
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <button className="product-add-btn">Añadir al Carrito</button>
            </div>
            <div className="product-info">
              <div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
