import React from 'react';
import Canvas from './Canvas';
import ParallaxComponent from './Parallax';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <Canvas />
      <ParallaxComponent />
      <div className="text-box">
        <h1 className="hero-text">
          Sua empresa em todos os lugares da Internet!
        </h1>
        <h3 className="hero-text-small">Seja encontrado em todos os mapas e listas.</h3>
      </div>
      <div className='bottom-box'>
        
      </div>
    </section>
  );
}
