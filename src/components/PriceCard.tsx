import React from 'react';

interface cardProps {
  type: string;
  content: Array<string>;
  text?: string;
  isActive: boolean;
}

export default function PriceCard({
  type,
  content,
  text,
  isActive,
}: cardProps) {
  const createContent = (text: string, key: number) => (
    <p key={key} className="price-content">
      <i style={{ color: '#00da91' }} className="fas fa-check"></i>
      {text}
    </p>
  );

  return (
    <div className={`plan-container ${isActive ? 'active' : ''}`}>
      <div className={`price-card ${text ? 'white' : ''}`}>
        <div className="price-type">
          <img className="price-logo" src="logo192.png" alt="Logo HubLocal" />
          <span className="logo-text">Hub</span>
          {type}
        </div>
        <div className="content-container">
          {content.map((text, index) => createContent(text, index))}
        </div>
        {text ? <div className="text-container">{text}</div> : null}
      </div>
      <a
        href="http://hublocal.com.br/planos/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
        className={`price-btn ${text ? 'green' : ''}`}
        target="_blank"
        rel="noreferrer"
      >
        Consultar Preço
      </a>
    </div>
  );
}
