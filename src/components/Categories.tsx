import React from 'react';
import { motion } from 'framer-motion';

export const Categories = () => {
  return (
    <section id="collections" className="section container" style={{ paddingTop: '150px' }}>
      <div className="grid-2">
        {/* Yantras for Men */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="category-card"
          style={{ height: '70vh' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2070&auto=format&fit=crop" 
            alt="Men's Fashion" 
          />
          <div className="category-overlay">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="category-title"
              style={{ fontWeight: 300, letterSpacing: '2px' }}
            >
              Minimalismo y Poder
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="category-desc"
              style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Yantras for Men
            </motion.p>
          </div>
        </motion.div>

        {/* Yantras for Women */}
        <motion.div 
          initial={{ opacity: 0, y: 150 }} // Staggered entry
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="category-card"
          style={{ height: '70vh', marginTop: '100px' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop" 
            alt="Women's Fashion" 
          />
          <div className="category-overlay">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="category-title"
              style={{ fontWeight: 300, letterSpacing: '2px' }}
            >
              Elegancia Audaz
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="category-desc"
              style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Yantras for Women
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
