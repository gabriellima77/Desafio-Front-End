import React from 'react';

interface cardProps {
  src: string;
  text: string;
  alt: string;
  index: string;
  isActive: boolean;
}

export default function CardItem({
  src,
  alt,
  text,
  index,
  isActive,
}: cardProps) {
  return (
    <div className={`card-item ${isActive ? 'active' : ''}`}>
      <figure className="image-wrapper">
        <p className="number">{index}°</p>
        <img className="card-img" src={src} alt={alt} />
      </figure>
      <div className="container-text">
        <h3 className="card-title">{alt}</h3>
        <p className="text-content">{text}</p>
      </div>
    </div>
  );
}
