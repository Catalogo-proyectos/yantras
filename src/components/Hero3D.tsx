export default function Hero3D() {
  const handleScrollToCollection = () => {
    const element = document.getElementById('collection-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-3d-container">
      {/* Title centered in the hero */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 5,
          width: '100%',
          padding: '0 20px',
          pointerEvents: 'none',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontWeight: 700,
            letterSpacing: '12px',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            textShadow: '0 0 40px rgba(0, 0, 0, 0.85)',
            margin: 0,
          }}
        >
          YANTRAS
        </h1>
      </div>

      {/* CTA */}
      <div
        style={{
          position: 'absolute',
          bottom: '16%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          pointerEvents: 'auto',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <p
          className="hero-title-sub"
          style={{
            marginBottom: '24px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          Calzado Exclusivo
        </p>
        <button onClick={handleScrollToCollection} className="hero-3d-cta">
          Explorar Colección
        </button>
      </div>
    </section>
  );
}
