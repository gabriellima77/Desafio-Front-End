import React from 'react';
import Canvas from './Canvas';
import ParallaxComponent from './Parallax';

export default function Hero() {
  return (
    <section className="hero-section">
      <Canvas />
      <ParallaxComponent />
    </section>
  );
}
