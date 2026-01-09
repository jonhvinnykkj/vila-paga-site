import { useState, useEffect } from 'react';
import { AtrativoCard } from '../../components';
import type { Atrativo } from '../../types';
import './Atrativos.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Atrativos = () => {
  const [atrativos, setAtrativos] = useState<Atrativo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    fetch(`${API_URL}/api/atrativos`)
      .then((res) => res.json())
      .then((data) => {
        setAtrativos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar atrativos:', error);
        setLoading(false);
      });
  }, []);

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

          {loading ? (
            <div className="atrativos-loading">
              <div className="atrativos-loading-spinner"></div>
              <p>Carregando atrativos...</p>
            </div>
          ) : filteredAtrativos.length > 0 ? (
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
