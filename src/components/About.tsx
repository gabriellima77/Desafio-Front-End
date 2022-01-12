import React from 'react';
import '../styles/About.css';
import CardItem from './CardItem';

export default function About() {
  return (
    <section className="about">
      <div className="header-container">
        <h2 className="section-header">
          Uma maquina que nunca para de trabalhar
        </h2>
        <p className="header-smaller">...mas como funciona?</p>
      </div>

      <div className="cards-container">
        <CardItem
          src="images/66260.jpg"
          text="Testando"
          alt="Análise de Presença"
          index="01"
        />
        <CardItem
          src="images/20944035.jpg"
          text="Testando"
          alt="Correção de Presença"
          index="02"
        />
        <CardItem
          src="images/19198945.jpg"
          text="Testando"
          alt="Manutenção de Presença"
          index="03"
        />
        <CardItem
          src="images/analyze.jpg"
          text="Testando"
          alt="Análise de Resultados"
          index="04"
        />
      </div>
    </section>
  );
}
