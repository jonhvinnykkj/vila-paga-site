import { useState } from 'react';
import { AtrativoCard } from '../../components';
import type { Atrativo } from '../../types';
import './Atrativos.css';

// Dados dos atrativos
const atrativosData: Atrativo[] = [
  {
    id: 'templo-piaga',
    images: ['/images/templo-piaga.webp'],
    category: 'Templo',
    title: 'Templo Piaga',
    excerpt: 'Formato octogonal que acolhe as grandes celebrações do Paganismo Brasileiro desde 2017.',
    text: 'Inaugurado em maio de 2017, seu formato octogonal acolhe as grandes celebrações do Paganismo Brasileiro. Arquitetura simbólica, cantos e rituais conduzem a uma experiência de reflexão, força ancestral e comunhão.'
  },
  {
    id: 'templo-almas',
    images: ['/images/templo-almas.webp'],
    category: 'Templo',
    title: 'Templo Piaga das Almas',
    excerpt: 'Dedicado à Linha das Almas, reúne mais de 30 estatuetas de almas benditas catalogadas.',
    text: 'Dedicado à Linha das Almas, reúne mais de 30 estatuetas de almas benditas catalogadas pelo Piauí. É um espaço de memória e intercessão, onde a gratidão e a esperança se transformam em devoção viva.'
  },
  {
    id: 'biblioteca',
    images: ['/images/biblioteca.webp', '/images/biblioteca-interno.webp'],
    category: 'Conhecimento',
    title: 'Biblioteca',
    excerpt: 'Acervo valioso sobre folclore, paganismo, religiões, botânica e mitologias.',
    text: 'Inaugurada em setembro de 2024, guarda um acervo valioso sobre folclore, paganismo, religiões, botânica, mitologias e artes populares, além de documentos da própria Vila. Um refúgio para leitores e pesquisadores, onde conhecimento e tradição caminham lado a lado.'
  },
  {
    id: 'galeria-encantados',
    images: ['/images/galeria-encantados.webp'],
    category: 'Espaço Sagrado',
    title: 'Galeria dos Encantados',
    excerpt: 'Dezenas de esculturas de Encantados e divindades autóctones do culto piaga.',
    text: 'Atrás do Templo Piaga, um percurso com dezenas de esculturas de Encantados e divindades autóctones do culto piaga. Arte e devoção se encontram para revelar, em pedra e cor, a cosmovisão da Vila.'
  },
  {
    id: 'casa-salamandra',
    images: ['/images/casa-salamandra.webp', '/images/casa-salamandra2.webp'],
    category: 'Estrutura',
    title: 'Casa Salamandra',
    excerpt: 'Quarto com cama, ventilador e armadores para rede, banheiro no corredor.',
    text: 'É onde ficam os dormitórios que abrigam os visitantes que vêm para a Vila. Quarto com cama, ventilador e armadores para rede, banheiro no corredor. Os corredores da casa são repletos de arte piaga.'
  },
  {
    id: 'bosques',
    images: ['/images/bosque.webp', '/images/bosque2.webp', '/images/bosque-nordico.webp'],
    category: 'Natureza',
    title: '15 Bosques Temáticos',
    excerpt: 'Bosques dedicados às linhas da Corrente Colona ao longo da Via Aurora.',
    text: 'São 15 bosques temáticos ao longo da Via Aurora, dedicados às linhas da Corrente Colona: Ameríndio, Africano, Hindu, Egípcio, Celta, Oriente Médio, Extremo Oriente, Nórdico, Eslavo, Helênico, Romano, Ibérico, Caribe, Inuit e Pacífico. Cada bosque é um portal simbólico, com paisagismo e espaços de contemplação que celebram a pluralidade do sagrado.'
  },
  {
    id: 'bosque-suely',
    images: ['/images/amazonico-suely-cals.webp'],
    category: 'Natureza',
    title: 'Bosque Amazônico Suely Cals',
    excerpt: 'Homenagem à escritora e sacerdotisa, com espécies amazônicas e divindades brasileiras.',
    text: 'Homenagem à escritora e sacerdotisa Suely Cals (in memoriam), reúne espécies amazônicas e representações de divindades brasileiras. Um abrigo de sombra e encantamento, onde a natureza fala com voz de mulher e de floresta.'
  },
  {
    id: 'pracinha',
    images: ['/images/praca-baba-tayando.webp', '/images/baba-tayando.webp'],
    category: 'Natureza',
    title: 'Pracinha Babá Tayandó',
    excerpt: 'Nossa "farmácia viva" com plantas aromáticas e sagradas.',
    text: 'Nossa "farmácia viva": canteiros de plantas aromáticas e sagradas que preservam saberes de cura e bem-viver. Um pequeno oásis de aromas, cuidado e aprendizado comunitário.'
  },
  {
    id: 'sacrarios',
    images: ['/images/sacrario-flora.webp', '/images/sacrario-netuno.webp', '/images/sacrario-robigus.webp'],
    category: 'Espaço Sagrado',
    title: 'Sacrários',
    excerpt: 'Altares dedicados a Flora, Netuno, Pomona, Robigus e Janus.',
    text: 'Ao longo da Vila, altares dedicados a Flora, Netuno, Pomona, Robigus e Janus abençoam caminhos e travessias. São singelos pontos sagrados que convidam a uma pausa, uma prece, um gesto de oferenda.'
  },
  {
    id: 'cantina',
    images: ['/images/cantina.webp', '/images/cantina2.webp'],
    category: 'Estrutura',
    title: 'Cantina Fornax',
    excerpt: 'Gastronomia regional com tempero mágico e caseiro.',
    text: 'Espaço gastronômico da Vila Pagã, onde é possível degustar pratos regionais com um tempero mágico e caseiro. Funciona aos sábados, domingos e feriados.'
  },
  {
    id: 'loja',
    images: ['/images/loja1.webp', '/images/loja2.webp'],
    category: 'Estrutura',
    title: 'Loja',
    excerpt: 'Artefatos, livros, peças rituais e suvenires da Vila Pagã.',
    text: 'Aqui o visitante encontra a lembrança física da Vila e apoia a economia local: artefatos, livros, peças rituais e suvenires. Cada item carrega um pedaço da nossa história e ajuda a manter templos, bosques e projetos culturais.'
  }
];

const Atrativos = () => {
  const [filter, setFilter] = useState('todos');
  const atrativos = atrativosData;

  const categories = ['todos', ...new Set(atrativos.map((a) => a.category))];

  const filteredAtrativos =
    filter === 'todos'
      ? atrativos
      : atrativos.filter((a) => a.category === filter);

  return (
    <main className="atrativos-page">
      {/* Hero */}
      <section className="atrativos-hero">
        <div className="atrativos-hero-bg"></div>
        <div className="atrativos-hero-content">
          <span className="atrativos-hero-tag">Espaços Sagrados</span>
          <h1>Atrativos da Vila</h1>
          <p>
            Conheça os templos, bosques, monumentos e estruturas que fazem da
            Vila Pagã um santuário único de preservação das tradições politeístas.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="atrativos-intro">
        <div className="container">
          <div className="atrativos-intro-content">
            <div className="atrativos-intro-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <p>
              Em mais de <strong>100 mil m²</strong> de área, a Vila Pagã abriga dezenas de
              espaços dedicados à espiritualidade, cultura e acolhimento. Cada estrutura
              foi pensada para honrar as tradições e proporcionar experiências únicas de conexão.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Atrativos */}
      <section id="espacos" className="atrativos-content">
        <div className="container">
          <div className="atrativos-section-header">
            <span>Explore</span>
            <h2>Nossos Espaços</h2>
          </div>

          {/* Filtros */}
          <div className="atrativos-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`atrativos-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'todos' ? 'Todos' : cat}
              </button>
            ))}
          </div>

          {filteredAtrativos.length > 0 ? (
            <div className="atrativos-grid">
              {filteredAtrativos.map((atrativo) => (
                <AtrativoCard key={atrativo.id} atrativo={atrativo} />
              ))}
            </div>
          ) : (
            <div className="atrativos-empty">
              <div className="atrativos-empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <p>Nenhum atrativo encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Destaques */}
      <section id="destaques" className="atrativos-highlights">
        <div className="container">
          <div className="atrativos-highlights-grid">
            <div className="atrativos-highlight">
              <div className="atrativos-highlight-number">15</div>
              <span>Bosques Temáticos</span>
            </div>
            <div className="atrativos-highlight">
              <div className="atrativos-highlight-number">30+</div>
              <span>Esculturas Sagradas</span>
            </div>
            <div className="atrativos-highlight">
              <div className="atrativos-highlight-number">100mil</div>
              <span>m² de Área</span>
            </div>
            <div className="atrativos-highlight">
              <div className="atrativos-highlight-number">10+</div>
              <span>Templos e Santuários</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="atrativos-cta">
        <div className="container">
          <div className="atrativos-cta-content">
            <h2>Quer conhecer pessoalmente?</h2>
            <p>Agende sua visita e viva a experiência de caminhar pelos espaços sagrados da Vila Pagã.</p>
            <a href="/visite" className="atrativos-cta-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Planeje sua Visita
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Atrativos;
