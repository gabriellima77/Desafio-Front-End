import React, { useEffect } from 'react';
import '../styles/Parallax.css';
import Parallax from 'parallax-js';

export default function ParallaxComponent() {
  useEffect(() => {
    const scene = document.getElementById('scene');
    if (scene) new Parallax(scene);
  });

  return (   
    <div className="parallax-wrapper">
      <div className="parallax-hero">
        <div className="parallax-container">
          <div id="scene">
            <div data-depth="0.5" className="layer mountain">
              <img className="bk" src="images/mountain.jpg" alt="montanha" />
            </div>
            <div data-depth="0.1" className="layer">
              <img
                className="woman"
                src="images/Woman.png"
                alt="mulher observando"
              />
            </div>
            <div data-depth="0.6" className="layer">
              <img className="moon" src="images/moon.png" alt="Lua" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
