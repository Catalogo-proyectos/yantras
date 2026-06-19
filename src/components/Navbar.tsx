import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav id="main-nav" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-links">
          <a href="#coleccion" className="nav-link">Colección</a>
          <a href="#editorial" className="nav-link">Editorial</a>
        </div>

        <a href="#" className="nav-brand">Yantras</a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div className="nav-links">
            <a href="#gift" className="nav-link">Gift Card</a>
          </div>
          <a href="#coleccion" className="nav-cta">Ver Colección</a>
          <div className="nav-links" style={{ gap: '20px' }}>
            <a href="#" className="nav-link" aria-label="Buscar"><Search size={18} /></a>
            <a href="#" className="nav-link" aria-label="Carrito"><ShoppingBag size={18} /></a>
          </div>
          <button 
            className="nav-hamburger" 
            onClick={() => setMenuOpen(true)} 
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button 
          className="mobile-menu-close" 
          onClick={() => setMenuOpen(false)} 
          aria-label="Cerrar menú"
        >
          <X size={28} />
        </button>
        <a href="#coleccion" className="nav-link" onClick={() => setMenuOpen(false)}>Colección</a>
        <a href="#editorial" className="nav-link" onClick={() => setMenuOpen(false)}>Editorial</a>
        <a href="#gift" className="nav-link" onClick={() => setMenuOpen(false)}>Gift Card</a>
        <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Buscar</a>
        <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Carrito</a>
      </div>
    </>
  );
};
