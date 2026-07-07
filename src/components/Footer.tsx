import React from 'react';
import { MapPin } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Precalculated at module load — no need to create a new Date on every render
const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">Yantras</div>
            <p className="footer-desc">
              Calzado exclusivo. Creamos identidad con estilo, poder y actitud.
              Elegancia urbana para quienes dejan huella.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-title">Redes Sociales</h4>
            <div className="footer-links">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-link"
              >
                <InstagramIcon size={16} /> @yantraspy
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-link"
              >
                <InstagramIcon size={16} /> @yantrasformen
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-link"
              >
                <InstagramIcon size={16} /> @yantrasforwomen
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-link"
              >
                <TikTokIcon size={16} /> TikTok
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="footer-title">Ubicación</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">
                <MapPin size={16} style={{ flexShrink: 0 }} />
                Ciudad del Este, Paraguay
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {CURRENT_YEAR} Yantras. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Privacidad</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
