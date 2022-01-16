import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

export default function Content() {
  useEffect(() => {
    const scene = document.getElementById('scene-2');
    if (scene) new Parallax(scene);
  }, []);

  return (
    <div className="info-container">
      <div className="content-box">
        <p className="info-text">
          HubLocal <span className="strong">impulsiona</span> as suas vendas,{' '}
          <span className="strong">aumenta</span> o fluxo de clientes e ligações
          dos pontos de vendas da sua empresa na internet{' '}
          <span className="strong">em 50 mecanismos de buscas</span> de maneira
          totalmente automatizada.
        </p>
        <p className="info-text">
          Além disso, inserimos, otimizamos e gerenciamos a sua empresa de forma
          única em todos as principais listas, mapas e diretórios da internet
          como Google Maps, Facebook Places, Apple Maps, Bing Maps e mais de 50
          outros sites e aplicativos de buscas por localização.
        </p>
      </div>
      <div className="scene-container">
        <div id="scene-2">
          <div data-depth="0.2" className="layer space">
            <img
              className="space-img"
              src="images/About_img.png"
              alt="espaço"
            />
          </div>
          <div data-depth="0.3" className="layer planet">
            <img
              style={{ width: 110 }}
              className="layer-img"
              src="images/Planet.png"
              alt="planeta"
            />
          </div>
          <div data-depth="0.8" className="layer apple">
            <img
              style={{ width: 60 }}
              className="layer-img"
              src="images/Apple.png"
              alt="apple"
            />
          </div>
          <div data-depth="1" className="layer bing">
            <img
              style={{ width: 115 }}
              className="layer-img"
              src="images/Bing.png"
              alt="bing"
            />
          </div>
          <div data-depth="0.5" className="layer facebook">
            <img
              style={{ width: 110 }}
              className="layer-img"
              src="images/facebook.png"
              alt="facebook"
            />
          </div>
          <div data-depth="0.6" className="layer google">
            <img
              style={{ width: 90 }}
              className="layer-img"
              src="images/Google.png"
              alt="google maps"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
