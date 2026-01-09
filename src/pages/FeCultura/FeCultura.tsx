import './FeCultura.css';

const FeCultura = () => {
  return (
    <main className="fe-cultura-page">
      {/* Hero */}
      <section className="fe-hero">
        <div className="fe-hero-bg"></div>
        <div className="fe-hero-content">
          <span className="fe-hero-tag">Turismo Religioso e Cultural</span>
          <h1>Fé & Cultura</h1>
          <p>
            Onde espiritualidade, memória popular e ecologia se encontram
            em experiências vivas e transformadoras.
          </p>
        </div>
      </section>

      {/* Introdução Principal */}
      <section className="fe-section">
        <div className="container">
          <div className="fe-intro-block">
            <p className="fe-lead">
              A Vila Pagã é um destino singular de turismo religioso e cultural no Brasil, onde
              espiritualidade, memória popular e ecologia se encontram em experiências vivas.
            </p>
            <p>
              Aqui, o visitante não apenas observa: <strong>participa de ritos, aprende, celebra e convive</strong>.
              Por isso, a Vila se consolidou como referência em peregrinação politeísta, educação patrimonial,
              práticas devocionais piagas e valorização do folclore e das artes de tradição.
            </p>
            <p>
              Em um mesmo território, templos, altares de natureza, trilhas ritualísticas e espaços de
              convivência acolhem pessoas de diferentes origens, unidas pelo respeito ao sagrado e pela
              curiosidade cultural.
            </p>
          </div>
        </div>
      </section>

      {/* Calendário Piaga */}
      <section id="calendario" className="fe-section fe-section-alt">
        <div className="container">
          <div className="fe-calendario">
            <div className="fe-calendario-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="fe-calendario-content">
              <h2>O Ritmo do Piaganismo</h2>
              <p>
                O calendário da Vila segue o ritmo do Piaganismo: as estações, as águas, os grãos,
                a fertilidade da terra, a proteção das roças, a passagem dos ancestrais e os novos começos.
              </p>
              <p>
                Cada celebração une <strong>liturgia, música, poesia, oferendas ecológicas, culinária de quintal,
                artesanato e práticas de cuidado com a terra</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turismo Religioso */}
      <section id="turismo-religioso" className="fe-section">
        <div className="container">
          <div className="fe-section-header">
            <span>Experiências</span>
            <h2>Turismo Religioso</h2>
          </div>
          <p className="fe-intro-text">
            Como destino de turismo religioso, a Vila oferece vivências autênticas
            de conexão com o sagrado e a tradição.
          </p>
          <div className="fe-offerings-grid">
            <div className="fe-offering">
              <div className="fe-offering-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                </svg>
              </div>
              <h3>Ritos Abertos</h3>
              <p>Com orientação sacerdotal e linguagem acessível a todos os participantes.</p>
            </div>
            <div className="fe-offering">
              <div className="fe-offering-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21a9 9 0 0 0 9-9c0-3.6-3-6.6-4-9-1 2.4-4 5.4-4 9"/>
                  <path d="M12 21a9 9 0 0 1-9-9c0-3.6 3-6.6 4-9 1 2.4 4 5.4 4 9"/>
                </svg>
              </div>
              <h3>Experiências Imersivas</h3>
              <p>Cantos, procissões, bênçãos, fogueiras e círculos de palavra.</p>
            </div>
            <div className="fe-offering">
              <div className="fe-offering-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h3>Ações Educativas</h3>
              <p>Oficinas, contação de histórias, saberes de roça, simbologia e mitos.</p>
            </div>
            <div className="fe-offering">
              <div className="fe-offering-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                  <circle cx="12" cy="11" r="3"/>
                </svg>
              </div>
              <h3>Arte Popular</h3>
              <p>Estandartes, trançados, altares florais, incensos e cerâmicas.</p>
            </div>
            <div className="fe-offering">
              <div className="fe-offering-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Convivência Comunitária</h3>
              <p>Acolhimento respeitoso e código de conduta pela paz, ecologia e inclusão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Turismo Cultural */}
      <section id="turismo-cultural" className="fe-section fe-section-alt">
        <div className="container">
          <div className="fe-section-header">
            <span>Conhecimento</span>
            <h2>Turismo Cultural</h2>
          </div>
          <div className="fe-cultural-content">
            <p>
              Como destino de turismo cultural, a Vila fortalece a <strong>economia criativa local</strong> e
              a pesquisa de campo sobre mitologias e folclore, promove circulação de artistas e mestres
              de tradição e registra práticas litúrgicas para fins educativos e memoriais.
            </p>
            <p>
              É um <strong>território de aprendizagem</strong>: estudantes, devotos, pesquisadores e curiosos
              convivem, trocam e constroem conhecimento.
            </p>
          </div>
          <div className="fe-cultural-features">
            <div className="fe-cultural-feature">
              <span className="fe-cultural-number">01</span>
              <p>Pesquisa de campo sobre mitologias e folclore</p>
            </div>
            <div className="fe-cultural-feature">
              <span className="fe-cultural-number">02</span>
              <p>Circulação de artistas e mestres de tradição</p>
            </div>
            <div className="fe-cultural-feature">
              <span className="fe-cultural-number">03</span>
              <p>Registro de práticas litúrgicas para fins educativos</p>
            </div>
            <div className="fe-cultural-feature">
              <span className="fe-cultural-number">04</span>
              <p>Fortalecimento da economia criativa local</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiente */}
      <section className="fe-section">
        <div className="container">
          <div className="fe-ambiente">
            <div className="fe-ambiente-content">
              <h2>Ambiente Seguro e Orientado</h2>
              <p>
                O visitante encontra um ambiente seguro e orientado, com <strong>capacidade limitada</strong> para
                preservar a experiência, trilhas mapeadas e programação que valoriza o tempo da natureza.
              </p>
              <p>
                A participação é sempre mediante <strong>agendamento e confirmação</strong>, garantindo acolhimento
                adequado e respeito a cada rito.
              </p>
            </div>
            <div className="fe-ambiente-badges">
              <div className="fe-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span>Ambiente Seguro</span>
              </div>
              <div className="fe-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>Agendamento Prévio</span>
              </div>
              <div className="fe-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Trilhas Mapeadas</span>
              </div>
              <div className="fe-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>Tempo da Natureza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fe-cta">
        <div className="container">
          <div className="fe-cta-content">
            <p className="fe-cta-phrase">
              A Vila Pagã segue sendo um lugar de <strong>fé, beleza e cultura viva</strong>,
              onde as celebrações se tornam vivências transformadoras.
            </p>
            <a href="/visite" className="fe-cta-btn">
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

export default FeCultura;
