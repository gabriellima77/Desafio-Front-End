import React from 'react';
import '../styles/Pricing.css';
import PriceCard from './PriceCard';

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="header-container">
        <h2 className="section-header">Os Nossos Planos</h2>
      </div>
      <div className="princing-container">
        <PriceCard
          type="Start"
          content={['CADASTRO MAPAS E LISTAS', 'ACESSO AO GERENCIADOR']}
          text={undefined}
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
          text={undefined}
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
          text={undefined}
        />
        <PriceCard
          type="Enterprise"
          content={['PLANO CUSTOMIZÁVEL']}
          text="Ideal para rede de empresas com múltiplas unidades de negócios e pontos de vendas."
        />
      </div>
    </section>
  );
}
