import React from 'react';
import '../styles/Pricing.css';
import PriceCard from './PriceCard';
import UseFade from './UseFade';

export default function Pricing() {
  const { isActive } = UseFade('left');

  return (
    <section className="pricing">
      <div className="header-container">
        <h2 className="section-header">Os Nossos Planos</h2>
      </div>
      <div className="princing-container">
        <PriceCard
          type="Start"
          content={['CADASTRO MAPAS E LISTAS', 'ACESSO AO GERENCIADOR']}
          isActive={isActive}
        />
        <PriceCard
          type="Standard"
          content={[
            'TUDO DO PLANO START',
            'OPERADOR DE SUPORTE',
            'ATUALIZAÇÃO SEMANAL',
            'PUBLICAÇÃO DE CONTEÚDOS',
            'GESTÃO DE AVALIAÇÕES',
          ]}
          isActive={isActive}
        />
        <PriceCard
          type="Premium"
          content={[
            'TUDO DO PLANO STANTARD',
            'REGISTRO DE CHAMADAS',
            'GRAVAÇÃO DE LIGAÇÕES',
            'ALERTAS DE LIGAÇÕES PERDIDAS',
            'REGISTRO DE ROTAS',
            'MAPA DE ORIGEM DE ROTAS',
            'BUSINESS INTELLIGENCE',
          ]}
          isActive={isActive}
        />
        <PriceCard
          type="Enterprise"
          content={['PLANO CUSTOMIZÁVEL']}
          text="Ideal para rede de empresas com múltiplas unidades de negócios e pontos de vendas."
          isActive={isActive}
        />
      </div>
    </section>
  );
}
