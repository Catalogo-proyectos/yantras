import { motion } from 'framer-motion';

export default function GiftSection() {
  return (
    <section className="gift-section">
      <div className="container">
        
        <motion.div 
          className="gift-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Content Column */}
          <div className="gift-content-col">
            <h2 className="gift-title" style={{ fontFamily: 'var(--font-display)' }}>
              Tarjeta <span className="gold-gradient-text">de Regalo</span>
            </h2>
            <p className="gift-text">
              Regala distinción y poder. El obsequio perfecto para quienes aprecian el diseño atemporal, el calzado artesanal de alta costura y la fuerza en cada detalle.
            </p>
            <button className="gift-cta">
              Adquirir Voucher
            </button>
          </div>

          {/* Graphics Column */}
          <div className="gift-graphics-col">
            <div className="gift-lines-accent">
              <div className="gift-lines-accent-inner" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
