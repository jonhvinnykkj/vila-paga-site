import './CirculoPiaga.css';

const CirculoPiaga = () => {
  return (
    <main className="circulo-page">
      {/* Hero */}
      <section className="circulo-hero">
        <div className="circulo-hero-bg"></div>
        <div className="circulo-hero-pattern"></div>
        <div className="circulo-hero-content">
          <div className="circulo-hero-emblem">
            <img src="/images/Eixo Piaga fino.png" alt="Eixo Piaga" />
          </div>
          <span className="circulo-hero-tag">Comunidade de Fé e Estudo</span>
          <h1>Círculo Piaga</h1>
          <p>
            A expressão organizada do Movimento Piaga: uma comunidade de fé,
            estudo e serviço dedicada ao Paganismo Brasileiro.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="circulo-nav">
        <a href="#historia" className="circulo-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 8v4l3 3"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
          <span>História</span>
        </a>
        <a href="#proposito" className="circulo-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
          </svg>
          <span>Propósito</span>
        </a>
        <a href="#piaganismo" className="circulo-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          <span>Piaganismo</span>
        </a>
        <a href="#fundador" className="circulo-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span>Fundador</span>
        </a>
        <a href="#faca-parte" className="circulo-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <line x1="20" y1="8" x2="20" y2="14"/>
            <line x1="23" y1="11" x2="17" y2="11"/>
          </svg>
          <span>Faça Parte</span>
        </a>
      </nav>

      {/* Historia */}
      <section id="historia" className="circulo-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 8v4l3 3"/>
                <circle cx="12" cy="12" r="9"/>
              </svg>
            </div>
            <div>
              <span className="section-label">Origens</span>
              <h2>História</h2>
            </div>
          </div>
          <div className="historia-content">
            <p className="lead">
              O Círculo Piaga é a expressão organizada do Movimento Piaga: uma comunidade de fé,
              estudo e serviço dedicada ao <strong>Paganismo Brasileiro</strong>.
            </p>
            <p>
              Nascido do encontro entre espiritualidade, cultura e identidade, o Círculo congrega
              pessoas que reconhecem a sacralidade da terra, da memória e dos ciclos da natureza.
              A <strong>Vila Pagã</strong>, em José de Freitas (PI), é nosso território sagrado vivo:
              um espaço de celebração, transmissão de saberes e materialização dos ideais piagas
              em templos, bosques e rituais que honram a Natureza e Ancestralidade brasileiras.
            </p>
            <p>
              Somos jornalistas, educadores, pesquisadores, artistas, trabalhadores e guardiões
              da tradição, unidos por uma prática devocional que é, ao mesmo tempo,
              <strong> ancestral e contemporânea</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Proposito */}
      <section id="proposito" className="circulo-section circulo-section-alt">
        <div className="container">
          <div className="section-header section-header-center">
            <div className="section-icon section-icon-large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
            </div>
            <div>
              <span className="section-label">Direção</span>
              <h2>Nosso Propósito</h2>
            </div>
          </div>

          <div className="proposito-grid">
            <div className="proposito-card">
              <div className="proposito-card-icon missao">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Missão</h3>
              <p>
                Cultivar um caminho espiritual politeísta brasileiro que honre a natureza,
                os ancestrais e os deuses, integrando estudo, rito e serviço comunitário.
              </p>
            </div>
            <div className="proposito-card">
              <div className="proposito-card-icon visao">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Visão</h3>
              <p>
                Ser uma referência nacional em espiritualidade pagã enraizada na realidade
                brasileira, formando comunidades que irradiem sabedoria, ética e hospitalidade.
              </p>
            </div>
          </div>

          <div className="valores-section">
            <h3 className="valores-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Valores
            </h3>
            <div className="valores-grid">
              <div className="valor-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                </svg>
                <span>Devoção e reverência ao sagrado</span>
              </div>
              <div className="valor-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span>Conexão comunitária e hospitalidade</span>
              </div>
              <div className="valor-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Ação responsável, serviço e ética</span>
              </div>
              <div className="valor-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                  <circle cx="12" cy="11" r="3"/>
                </svg>
                <span>Ancestralidade viva e oralidade</span>
              </div>
              <div className="valor-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <span>Estudo, pesquisa e criação cultural</span>
              </div>
              <div className="valor-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Ecologia sagrada e sustentabilidade</span>
              </div>
              <div className="valor-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>Diversidade e respeito inter-religioso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brasao */}
      <section className="circulo-section">
        <div className="container">
          <div className="brasao-showcase">
            <div className="brasao-header">
              <div className="brasao-image">
                <img src="/images/Brasão Oficial Círculo Piaga.webp" alt="Brasão do Círculo Piaga" />
              </div>
              <span className="section-label">Identidade</span>
              <h2>O Brasão do Círculo Piaga</h2>
              <p>
                Nosso brasão se inspira na heráldica para sintetizar princípios da
                espiritualidade, cultura e identidade piagas.
              </p>
            </div>

            <div className="brasao-grid">
              <div className="brasao-item">
                <div className="brasao-item-icon folhas">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                    <path d="M12 13V7"/>
                    <path d="M9 10l3-3 3 3"/>
                  </svg>
                </div>
                <h4>Coroa de Folhas</h4>
                <p>Cipó-escada (Bauhinia): integração com a natureza e força que brota do território.</p>
              </div>

              <div className="brasao-item">
                <div className="brasao-item-icon livro">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <path d="M8 7h8M8 11h8M8 15h5"/>
                  </svg>
                </div>
                <h4>Livro</h4>
                <p>Conhecimento, tradição oral e transmissão do saber ancestral.</p>
              </div>

              <div className="brasao-item">
                <div className="brasao-item-icon pentagrama">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <h4>Pentagrama com Folhas</h4>
                <p>A Vila Pagã como materialização das buscas espirituais do Movimento.</p>
              </div>

              <div className="brasao-item">
                <div className="brasao-item-icon palmeiras">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22V8"/>
                    <path d="M5 12c2-2 4-3 7-3s5 1 7 3"/>
                    <path d="M3 8c3-3 6-4 9-4s6 1 9 4"/>
                    <path d="M7 16c2-1 3-2 5-2s3 1 5 2"/>
                  </svg>
                </div>
                <h4>Três Palmeiras</h4>
                <p>Carnaúba, Buriti e Babaçu: a Mata dos Cocais que consagra nosso chão.</p>
              </div>

              <div className="brasao-item">
                <div className="brasao-item-icon rios">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 6c4 0 6 2 10 2s6-2 10-2"/>
                    <path d="M2 12c4 0 6 2 10 2s6-2 10-2"/>
                    <path d="M2 18c4 0 6 2 10 2s6-2 10-2"/>
                  </svg>
                </div>
                <h4>Sete Linhas Onduladas</h4>
                <p>Os rios Poti, Parnaíba, Canindé, Balsas, Longa, Uruçuí-Preto e Gurguéia.</p>
              </div>

              <div className="brasao-item">
                <div className="brasao-item-icon sol">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                </div>
                <h4>Amarelo e Eixo Solar</h4>
                <p>Iluminação, expansão intelectual, prosperidade e força solar.</p>
              </div>
            </div>

            <div className="lema-box lema-box-with-image">
              <div className="lema-image">
                <img src="/images/circulo-piaga.webp" alt="Sacerdotes do Círculo Piaga" />
                <span className="lema-image-caption">Sacerdotes do Círculo Piaga</span>
              </div>
              <div className="lema-content">
                <h4>Devotio, Nexus et Actio</h4>
                <p className="lema-translation">Devoção, Conexão e Ação</p>
                <p className="lema-desc">
                  Princípios que transformam fé em cultura, e cultura em cuidado com a vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Piaganismo */}
      <section id="piaganismo" className="circulo-section circulo-section-alt">
        <div className="container">
          <div className="section-header section-header-center">
            <div className="section-icon section-icon-large piaganismo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
              </svg>
            </div>
            <div>
              <span className="section-label">Religião</span>
              <h2>Paganismo Brasileiro</h2>
            </div>
          </div>

          <div className="piaganismo-intro">
            <h3>O que é o Piaganismo</h3>
            <p className="lead">
              O Piaganismo é uma <strong>religião politeísta de matriz brasileira</strong>.
              Ele reconhece e cultua a multiplicidade do sagrado na natureza, nos deuses e
              nos ancestrais, celebrando os ciclos vitais do território.
            </p>
          </div>

          <div className="pilares-grid">
            <div className="pilar-card">
              <div className="pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                  <path d="M12 13V7"/>
                  <path d="M9 10l3-3 3 3"/>
                </svg>
              </div>
              <p>A natureza é mestra e livro vivo</p>
            </div>
            <div className="pilar-card">
              <div className="pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>A prática é ética, comunitária e ecológica</p>
            </div>
            <div className="pilar-card">
              <div className="pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <p>O conhecimento circula pela oralidade e pesquisa</p>
            </div>
            <div className="pilar-card">
              <div className="pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <p>A Vila Pagã funciona como santuário e escola</p>
            </div>
          </div>

          <div className="eixo-solar-box">
            <div className="eixo-solar-icon">
              <img src="/images/Eixo Piaga fino.png" alt="Eixo Solar - Símbolo do Piaganismo" />
            </div>
            <div className="eixo-solar-content">
              <h3>Eixo Solar: Símbolo do Piaganismo</h3>
              <p>
                O <strong>Eixo Solar</strong> é o signo maior do Piaganismo: um sol com oito braços que
                representa os oito ciclos maiores celebrados ao longo do ano, unindo tempo sagrado
                e tempo comunitário.
              </p>
              <ul>
                <li>Solstícios, equinócios e festivais intermediários</li>
                <li>Unidade na diversidade e coesão nos propósitos nobres</li>
                <li>Alinhamento do indivíduo com a comunidade e os ritmos da terra</li>
              </ul>
              <p className="eixo-frase">
                <em>Paganismo Brasileiro: enraizado no território, dinâmico na cultura, luminoso no Eixo Solar.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section id="fundador" className="circulo-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon fundador">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <span className="section-label">Liderança</span>
              <h2>Fundador</h2>
            </div>
          </div>

          <div className="fundador-content">
            <div className="fundador-profile">
              <div className="fundador-photo">
                <img src="/images/rn-fundador.webp" alt="Dom Rafael Nolêto" />
              </div>
              <div className="fundador-bio">
                <blockquote className="fundador-lema">
                  <svg viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  Servir a Terra, honrar os ancestrais, criar futuro.
                </blockquote>

                <div className="fundador-intro">
                  <p className="lead">
                    <strong>Dom Rafael Nolêto</strong> é um construtor de pontes entre o ancestral e o porvir.
                  </p>
                  <p>
                    Sacerdote da Religião Piaga, pesquisador de religiões e folclorista, ele percorre
                    o Brasil para escutar mestres de ofício, erveiras, saberes populares, guardiões
                    de mitos e devotos, tecendo uma espiritualidade polifônica, brasileira e viva.
                  </p>
                </div>
              </div>
            </div>

            <div className="fundador-destaque">
              <h4>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Fundador da Vila Pagã
              </h4>
              <p>
                Território sagrado e laboratório de cultura viva, Dom Rafael Nolêto inscreveu
                no paisagismo uma liturgia da terra. Cada trilha, jardim e templo evoca um
                princípio, desde a coroa de folhas até o Eixo Solar que organiza os oito ciclos
                maiores do ano.
              </p>
            </div>

            <div className="fundador-roles">
              <div className="role-card">
                <div className="role-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                  </svg>
                </div>
                <h5>Escritor e Comunicador</h5>
                <p>
                  Deu ao Paganismo Brasileiro uma voz clara, pedagógica e bela através de
                  livros, vídeos, cursos e materiais formativos.
                </p>
              </div>
              <div className="role-card">
                <div className="role-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                    <path d="M12 13V7"/>
                    <path d="M9 10l3-3 3 3"/>
                  </svg>
                </div>
                <h5>Artista e Paisagista</h5>
                <p>
                  Vê a estética como via de educação espiritual: beleza, ritmo, símbolo e
                  forma como "didáticas do invisível".
                </p>
              </div>
              <div className="role-card">
                <div className="role-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h5>Financiador e Mentor</h5>
                <p>
                  Ergue estruturas, patrocina iniciativas e forma pessoas com governança,
                  ética e visão de longo prazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faca Parte */}
      <section id="faca-parte" className="circulo-section circulo-section-alt">
        <div className="container">
          <div className="section-header section-header-center">
            <div className="section-icon section-icon-large participar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
            </div>
            <div>
              <span className="section-label">Comunidade</span>
              <h2>Faça Parte</h2>
            </div>
          </div>

          <div className="participar-content">
            <div className="participar-intro">
              <p className="lead">
                Se você tem <strong>25 anos ou mais</strong> e deseja explorar as raízes mágicas
                e ancestrais brasileiras, há um caminho para você.
              </p>
              <p>
                O ingresso no Grupo de Estudos Online e Práticas Sagradas da Religião Piaga
                ocorre por <strong>processo seletivo</strong> para novos membros.
              </p>
            </div>

            <div className="participar-slogan">
              <div className="slogan-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                </svg>
              </div>
              <span>Estude. Pratique. Conecte-se.</span>
            </div>

            <div className="participar-boxes">
              <div className="participar-box requisitos">
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Requisitos
                </h4>
                <ul>
                  <li>Ter 25 anos ou mais</li>
                  <li>Disponibilidade para participação ativa, inclusive presencial</li>
                  <li>Seriedade, compromisso e respeito às diretrizes</li>
                </ul>
              </div>

              <div className="participar-box como">
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Como Participar
                </h4>
                <ol>
                  <li>Entre em contato pelo WhatsApp de D. Rafael Noleto</li>
                  <li>Receba orientações sobre processo seletivo e calendário</li>
                  <li>Em caso de vagas, inicie a trilha de estudos e práticas</li>
                </ol>
              </div>
            </div>

            <div className="participar-cta">
              <p className="cta-frase">Uma nova trilha de sabedoria e magia espera por você.</p>
              <a
                href="https://wa.me/5586994160070?text=Olá! Tenho interesse em fazer parte do Círculo Piaga."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Saiba Mais */}
      <section id="saiba-mais" className="circulo-section">
        <div className="container">
          <div className="saiba-mais-content">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              Leituras Recomendadas
            </h3>
            <p>
              Aprofunde sua jornada com obras e materiais sobre o Paganismo Piaga
              e espiritualidade brasileira.
            </p>
            <div className="leituras-links">
              <a
                href="https://clubedeautores.com.br/livros/autores/rafael-noleto"
                target="_blank"
                rel="noopener noreferrer"
                className="leitura-link"
              >
                <div className="leitura-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div className="leitura-info">
                  <span>Catálogo no Clube de Autores</span>
                  <small>clubedeautores.com.br</small>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="leitura-arrow">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="https://www.amazon.com.br/s?k=paganismo+piaga"
                target="_blank"
                rel="noopener noreferrer"
                className="leitura-link"
              >
                <div className="leitura-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div className="leitura-info">
                  <span>Busca na Amazon (Fé & Cultura)</span>
                  <small>amazon.com.br</small>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="leitura-arrow">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CirculoPiaga;
