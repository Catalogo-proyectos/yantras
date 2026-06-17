import React from 'react';
import { MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">YANTRAS</div>
            <p className="footer-desc">
              Prendas exclusivas. Creamos identidad con minimalismo, estilo y poder.
              Elegancia con un toque audaz para mujeres y hombres.
            </p>
          </div>
          
          <div>
            <h4 className="footer-title">Redes Sociales</h4>
            <div className="footer-links">
              <a href="https://www.instagram.com/yantraspy" target="_blank" rel="noreferrer" className="footer-link flex items-center" style={{ display: 'flex', gap: '8px' }}>
                <InstagramIcon /> @yantraspy
              </a>
              <a href="https://www.instagram.com/yantrasformen" target="_blank" rel="noreferrer" className="footer-link flex items-center" style={{ display: 'flex', gap: '8px' }}>
                <InstagramIcon /> @yantrasformen
              </a>
              <a href="https://www.instagram.com/yantrasforwomen" target="_blank" rel="noreferrer" className="footer-link flex items-center" style={{ display: 'flex', gap: '8px' }}>
                <InstagramIcon /> @yantrasforwomen
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Ubicación</h4>
            <div className="footer-links">
              <a href="#" className="footer-link" style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={18} style={{ flexShrink: 0 }} /> 
                Ciudad del Este - Shopping Mirage, Paraguay
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yantras. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" className="footer-link">Privacidad</a>
            <a href="#" className="footer-link">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
