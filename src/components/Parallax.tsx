import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

export default function ParallaxComponent() {
  useEffect(() => {
    const scene = document.getElementById('scene');
    if (scene) new Parallax(scene);
  }, []);

  return (
    <div className="parallax-wrapper">
      <div className="parallax-hero">
        <div className="parallax-container">
          <div id="scene">
            <div data-depth="0.5" className="layer mountain">
              <img className="bk" src="images/mountain2.jpg" alt="montanha" />
            </div>
            <div data-depth="0.2" className="layer">
              <img
                className="woman"
                src="images/Woman.png"
                alt="mulher observando"
              />
            </div>
            <div data-depth="0.6" className="layer">
              <img className="sun" src="images/moon.png" alt="Lua" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
