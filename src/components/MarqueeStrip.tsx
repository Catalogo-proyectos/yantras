import React from 'react';

export default function MarqueeStrip() {
  const words = ["Exclusividad", "Fuerza", "Estilo", "Poder"];

  return (
    <section className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-item">
          {Array(4).fill(words).flat().map((word, idx) => (
            <React.Fragment key={idx}>
              <span className="marquee-text">{word}</span>
              <span className="marquee-dot"></span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-item">
          {Array(4).fill(words).flat().map((word, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="marquee-text">{word}</span>
              <span className="marquee-dot"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
