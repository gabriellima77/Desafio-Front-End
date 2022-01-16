import React from 'react';
import Canvas from './Canvas';
import ParallaxComponent from './Parallax';
import '../styles/Hero.css';

export default function Hero() {
  const scrollToPricing = () => {
    const y = document.querySelector<HTMLElement>('.pricing')?.offsetTop;
    if (y) {
      window.scrollTo(0, y);
    }
  };

  return (
    <section className="hero-section">
      <Canvas />
      <ParallaxComponent />
      <div className="text-box">
        <h1 className="hero-text">Sua empresa em todos os lugares!</h1>
        <h2 className="hero-text-small">
          Seja encontrado em todos os mapas e listas.
        </h2>
        <button onClick={scrollToPricing} className="action-btn">
          Veja os nossos Planos!
        </button>
      </div>
    </section>
  );
}
