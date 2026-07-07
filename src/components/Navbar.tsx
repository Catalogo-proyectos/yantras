import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      // Only trigger a re-render when the state actually changes
      setScrolled(prev => prev === isScrolled ? prev : isScrolled);
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
          <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Colección</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Editorial</a>
        </div>

        <a href="#" onClick={(e) => e.preventDefault()} className="nav-brand">Yantras</a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div className="nav-links">
            <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Gift Card</a>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="nav-cta">Ver Colección</a>
          <div className="nav-links" style={{ gap: '20px' }}>
            <a href="#" onClick={(e) => e.preventDefault()} className="nav-link" aria-label="Buscar"><Search size={18} /></a>
            <a href="#" onClick={(e) => e.preventDefault()} className="nav-link" aria-label="Carrito"><ShoppingBag size={18} /></a>
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
        <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); }} className="nav-link">Colección</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); }} className="nav-link">Editorial</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); }} className="nav-link">Gift Card</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); }} className="nav-link">Buscar</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); }} className="nav-link">Carrito</a>
      </div>
    </>
  );
};
