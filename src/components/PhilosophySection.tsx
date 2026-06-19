import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-vignette" />
      
      <div className="container">
        <div className="philosophy-container">
          
          <motion.h2 
            className="philosophy-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            No caminamos, dejamos <span className="gold-gradient-text">huella.</span>
          </motion.h2>

          {/* Golden Line that expands when in view */}
          <div className="philosophy-line-wrapper">
            <motion.div 
              className="philosophy-line-active"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>

          <motion.p 
            className="philosophy-sub"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          >
            NUESTRA FILOSOFÍA DE VIDA
          </motion.p>
          
        </div>
      </div>
    </section>
  );
}
