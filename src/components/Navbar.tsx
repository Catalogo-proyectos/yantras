import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-links">
        <a href="#men" className="nav-link">Men</a>
        <a href="#women" className="nav-link">Women</a>
      </div>
      
      <div className="nav-brand">Yantras</div>
      
      <div className="nav-links" style={{ gap: '24px' }}>
        <a href="#" className="nav-link"><Search size={20} /></a>
        <a href="#" className="nav-link"><ShoppingBag size={20} /></a>
        <a href="#" className="nav-link"><Menu size={20} /></a>
      </div>
    </nav>
  );
};
