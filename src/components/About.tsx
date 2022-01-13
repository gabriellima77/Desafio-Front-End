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
          text="Verifique a presença da sua empresa nos mapas e listas da internet de forma otimizada."
          alt="Análise de Presença"
          index="01"
        />
        <CardItem
          src="images/20944035.jpg"
          text="A HubLocal usará as funcionalidades de correção automatizada, mantendo assim as informações do seu negócio sempre completas e atualizadas."
          alt="Correção de Presença"
          index="02"
        />
        <CardItem
          src="images/19198945.jpg"
          text="Com as funcionalidades de divulgação da HubLocal, fica fácil divulgar promoções, cupons e campanhas regionais de sua empresa."
          alt="Manutenção de Presença"
          index="03"
        />
        <CardItem
          src="images/analyze.jpg"
          text="Com os relatórios de inteligência de mercado da HubLocal, você irá descubrir quais são as suas melhores fontes de novos clientes."
          alt="Análise de Resultados"
          index="04"
        />
      </div>
    </section>
  );
}
