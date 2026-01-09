import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>Vila Pagã</h1>
          <p className="hero-tagline">
            Tradição, Natureza, Cultura e Espiritualidade
          </p>
          <div className="hero-actions">
            <a href="#historia" className="btn-primary">Conheça Nossa História</a>
            <Link to="/visite" className="btn-outline">Agende sua Visita</Link>
          </div>
        </div>
      </section>

      {/* História */}
      <section id="historia" className="section">
        <div className="container">
          <div className="section-title">
            <span>Sobre Nós</span>
            <h2>Nossa História</h2>
          </div>

          <div className="historia-content">
            <p className="lead">
              Em 2012, em Teresina, D. Rafael Nolêto reuniu jovens simpatizantes do paganismo para apresentar o projeto que daria origem à Vila Pagã.
            </p>
            <p>
              Após buscas em municípios da região metropolitana de Teresina, o terreno atual foi oficialmente adquirido em agosto de 2013, na zona rural do município de José de Freitas, interior do Piauí, no Nordeste brasileiro. Desde então, a Vila se consolidou como o maior complexo mundial de preservação das tradições politeístas e como centro de referência na conexão com o paganismo brasileiro.
            </p>
            <p>
              A Vila Pagã é uma comunidade formada por seguidores do politeísmo brasileiro (Piaganismo), religião neopagã genuinamente nacional. Em mais de <strong>100 mil m²</strong> de área, configura-se como um complexo cultural, religioso, habitacional e turístico.
            </p>
            <p>
              Em 2014, a Vila realizou sua primeira celebração aberta ao público, marco que inaugurou um calendário permanente de ritos, encontros e experiências educativas. Desde então, o espaço tem ampliado suas frentes de atuação, recebendo visitantes, pesquisadores e praticantes de diferentes regiões do Brasil e do exterior.
            </p>
          </div>
        </div>
      </section>

      {/* Frentes de Atuação */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span>O Que Fazemos</span>
            <h2>Frentes de Atuação</h2>
          </div>

          <div className="frentes-list">
            <div className="frente-item">
              <div className="frente-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="frente-info">
                <h3>Preservação e Cultura</h3>
                <p>Salvaguarda de práticas, cantos, mitos e artes do universo pagão, com ênfase nas tradições brasileiras.</p>
              </div>
            </div>
            <div className="frente-item">
              <div className="frente-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                </svg>
              </div>
              <div className="frente-info">
                <h3>Espiritualidade e Rito</h3>
                <p>Celebrações sazonais, cerimônias e experiências formativas ancoradas nos princípios do Piaganismo.</p>
              </div>
            </div>
            <div className="frente-item">
              <div className="frente-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <path d="M8 7h8M8 11h8M8 15h5"/>
                </svg>
              </div>
              <div className="frente-info">
                <h3>Pesquisa e Educação</h3>
                <p>Estímulo a estudos em folclore, mitologias, história das religiões e espiritualidade politeísta.</p>
              </div>
            </div>
            <div className="frente-item">
              <div className="frente-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="frente-info">
                <h3>Turismo e Acolhimento</h3>
                <p>Visitas guiadas, imersões temáticas e roteiros culturais que integram natureza, patrimônio e devoção.</p>
              </div>
            </div>
            <div className="frente-item">
              <div className="frente-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                  <circle cx="12" cy="11" r="3"/>
                </svg>
              </div>
              <div className="frente-info">
                <h3>Comunidade e Sustentabilidade</h3>
                <p>Construção coletiva do espaço, convivência solidária e cuidado com o território.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Nossos Princípios</span>
            <h2>Missão, Visão e Valores</h2>
          </div>

          <div className="mvv-grid">
            <div className="mvv-card">
              <h3>Missão</h3>
              <p>
                Promover a integração dos povos politeístas e salvaguardar a tradição autóctone do Piaganismo (Paganismo Brasileiro), cultivando a espiritualidade, a ecologia e a integração social. Fortalecer o desenvolvimento humano e comunitário por meio da educação, do empreendedorismo responsável e da gestão sustentável do território, fazendo da Vila Pagã um complexo cultural, religioso, habitacional e turístico vivo, acolhedor e inspirador.
              </p>
            </div>
            <div className="mvv-card">
              <h3>Visão</h3>
              <p>
                Consolidar a Vila Pagã como referência mundial do politeísmo e do Piaganismo, aliando preservação cultural, autossustentabilidade e inovação comunitária.
              </p>
            </div>
            <div className="mvv-card valores">
              <h3>Valores</h3>
              <ul>
                <li>Ancestralidade viva</li>
                <li>Natureza sagrada</li>
                <li>Hospitalidade</li>
                <li>Empreendedorismo responsável</li>
                <li>Economia solidária</li>
                <li>Ética e transparência</li>
                <li>Educação e pesquisa</li>
                <li>Arte e ofício</li>
                <li>Sustentabilidade</li>
                <li>Serviço ao sagrado e ao comum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeira */}
      <section className="section section-alt" id="bandeira">
        <div className="container">
          <div className="section-title">
            <span>Nosso Símbolo</span>
            <h2>A Bandeira da Vila</h2>
          </div>

          <p className="bandeira-intro">
            A bandeira da Vila Pagã sintetiza, em símbolos simples e ancestrais, a vocação da nossa terra: acolher a diversidade pagã, celebrar o conhecimento, honrar os deuses e viver em harmonia com a natureza.
          </p>

          <div className="bandeira-showcase">
            {/* Símbolos superiores */}
            <div className="bandeira-simbolo top-left">
              <div className="bandeira-simbolo-icon folhas">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                </svg>
              </div>
              <h4>Folhas e Coroa de Louros</h4>
              <p>Vários caminhos no culto politeísta unidos pelo respeito à natureza, deuses e comunidade.</p>
            </div>

            <div className="bandeira-simbolo top-right">
              <div className="bandeira-simbolo-icon pentagrama">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h4>O Pentagrama</h4>
              <p>A pessoa humana ligada ao divino, os quatro elementos em paz com o espírito.</p>
            </div>

            {/* Bandeira central */}
            <div className="bandeira-center">
              <img src="/images/bandeira.jpeg" alt="Bandeira da Vila Pagã" loading="lazy" />
            </div>

            {/* Símbolos inferiores */}
            <div className="bandeira-simbolo bottom-left">
              <div className="bandeira-simbolo-icon verde"></div>
              <h4>A Cor Verde</h4>
              <p>Nossa conexão com a natureza, a vida, o crescimento e a fertilidade da terra.</p>
            </div>

            <div className="bandeira-simbolo bottom-right">
              <div className="bandeira-simbolo-icon branco"></div>
              <h4>A Cor Branca</h4>
              <p>A oportunidade de escrever uma nova história, com fé, trabalho, paz e hospitalidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Tour Virtual</span>
            <h2>Conheça a Vila Pagã</h2>
          </div>

          <div className="video-section">
            <p className="video-intro">
              Faça um passeio virtual pela Vila Pagã e descubra como funciona o maior complexo mundial de preservação das tradições politeístas. Conheça nossos templos, jardins sagrados, espaços de convivência e toda a estrutura que acolhe visitantes e praticantes de todo o Brasil.
            </p>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/aLnREPFzK_Q?si=TuYm5nyv71do3SIU"
                title="Como funciona a Vila Pagã"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Venha Conhecer a Vila Pagã</h2>
          <p>Agende sua visita e viva uma experiência única de conexão com a natureza, a espiritualidade e as tradições ancestrais.</p>
          <div className="cta-actions">
            <Link to="/eventos" className="btn-primary">Ver Eventos</Link>
            <Link to="/visite" className="btn-outline">Planeje sua Visita</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
