import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Gift, Shield, CreditCard } from 'lucide-react';

export const GiftVoucher: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Map mouse positions to rotations
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  
  // Spring configurations for smooth physical feel
  const springRotateX = useSpring(rotateX, { damping: 25, stiffness: 200 });
  const springRotateY = useSpring(rotateY, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    
    // Normalize values between -0.5 and 0.5
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="gift" className="voucher-section">
      <div className="container" style={{ perspective: 1000 }}>
        <motion.div
          ref={cardRef}
          className="voucher-card gold-border-glow"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Subtle reflection shine */}
          <div className="voucher-card-shine" />

          <div className="voucher-icon-row" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
            <Gift className="voucher-icon" />
            <Shield className="voucher-icon" />
            <CreditCard className="voucher-icon" />
          </div>

          <h3 className="voucher-title gold-gradient-text" style={{ transform: 'translateZ(45px)', margin: '16px 0' }}>
            VIP Gift Voucher
          </h3>
          
          <p className="voucher-text" style={{ transform: 'translateZ(20px)' }}>
            Regala exclusividad. Nuestras tarjetas de regalo permiten a quien las recibe 
            elegir el calzado perfecto de nuestra colección. Disponible en múltiples denominaciones.
          </p>

          <div style={{ transform: 'translateZ(35px)', display: 'inline-block', marginTop: '10px' }}>
            <button className="voucher-cta">
              Obtener Gift Card
            </button>
          </div>

          <div className="voucher-brand" style={{ transform: 'translateZ(25px)', marginTop: '40px' }}>Yantras</div>
        </motion.div>
      </div>
    </section>
  );
};
