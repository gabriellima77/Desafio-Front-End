import React from 'react';
import '../styles/About.css';
import CardItem from './CardItem';
import UseFade from './UseFade';

export default function About() {
  const {isActive} = UseFade('top');

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
          src="images/presenca.jpg"
          text="Verifique a presença da sua empresa nos mapas e listas da internet de forma otimizada."
          alt="Análise de Presença"
          index="01"
          isActive={isActive}
        />
        <CardItem
          src="images/correcao.jpg"
          text="A HubLocal usará as funcionalidades de correção automatizada, mantendo assim as informações do seu negócio sempre completas e atualizadas."
          alt="Correção de Presença"
          index="02"
          isActive={isActive}
        />
        <CardItem
          src="images/manutencao.jpg"
          text="Com as funcionalidades de divulgação da HubLocal, fica fácil divulgar promoções, cupons e campanhas regionais de sua empresa."
          alt="Manutenção de Presença"
          index="03"
          isActive={isActive}
        />
        <CardItem
          src="images/analise.jpg"
          text="Com os relatórios de inteligência de mercado da HubLocal, você irá descubrir quais são as suas melhores fontes de novos clientes."
          alt="Análise de Resultados"
          index="04"
          isActive={isActive}
        />
      </div>
    </section>
  );
}
