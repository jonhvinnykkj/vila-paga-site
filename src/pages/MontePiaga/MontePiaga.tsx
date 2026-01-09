import './MontePiaga.css';

const MontePiaga = () => {
  return (
    <main className="monte-page">
      {/* Hero */}
      <section className="monte-hero">
        <div className="monte-hero-bg"></div>
        <div className="monte-hero-content">
          <div className="monte-hero-logo">
            <img src="/images/loetamento.webp" alt="Monte Piaga - Loteamento" />
          </div>
          <span className="monte-hero-tag">Habitar</span>
          <h1>Monte Piaga</h1>
          <p className="monte-hero-subtitle">O Eixo Habitacional da Vila Pagã</p>
          <p className="monte-hero-desc">
            Habitar como ato espiritual, cultural e comunitário
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="monte-intro">
        <div className="container">
          <div className="monte-intro-content">
            <div className="monte-intro-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h2>O primeiro loteamento politeísta do Brasil</h2>
            <p>
              O <strong>Monte Piaga</strong> é o eixo habitacional da Vila Pagã, concebido para
              integrar a presença humana à natureza preservada da Mata dos Cocais, respeitando a
              sacralidade do território, seus ciclos naturais e seus valores espirituais.
            </p>
            <p>
              Mais do que um conjunto de lotes, é uma proposta de <strong>habitar consciente</strong>,
              onde morar é também participar de uma comunidade viva, organizada por princípios de fé,
              convivência, responsabilidade coletiva e desenvolvimento sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="sobre" className="monte-section monte-section-alt">
        <div className="container">
          <div className="monte-section-header">
            <span className="monte-section-tag">Conheça</span>
            <h2>O Monte Piaga em essência</h2>
          </div>
          <div className="monte-video-container">
            <iframe
              src="https://www.youtube.com/embed/Nj4TnYCJpR8?si=cRzMwrq5uEEgU82b"
              title="Monte Piaga - Vila Pagã"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section id="quem-pode" className="monte-section">
        <div className="container">
          <div className="monte-section-header">
            <span className="monte-section-tag">Propósito</span>
            <h2>Um território de convivência e propósito</h2>
            <p className="monte-section-lead">
              O Monte Piaga foi pensado para acolher famílias e indivíduos que compartilham dos
              valores da Vila Pagã e do politeísmo piaga.
            </p>
          </div>

          <div className="monte-pilares-grid">
            <div className="monte-pilar">
              <div className="monte-pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                </svg>
              </div>
              <span>Respeito à natureza e à paisagem original</span>
            </div>
            <div className="monte-pilar">
              <div className="monte-pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span>Convivência comunitária harmoniosa</span>
            </div>
            <div className="monte-pilar">
              <div className="monte-pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                </svg>
              </div>
              <span>Valorização cultural e espiritual</span>
            </div>
            <div className="monte-pilar">
              <div className="monte-pilar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span>Desenvolvimento social e econômico responsável</span>
            </div>
          </div>

          <div className="monte-destaque-box">
            <p>
              O Monte Piaga é um <strong>espaço exclusivo</strong> para <strong>Associados ao Círculo Piaga</strong>,
              alinhados aos valores, princípios e compromissos que regem a Vila Pagã.
            </p>
          </div>
        </div>
      </section>

      {/* Estrutura */}
      <section id="estrutura" className="monte-section monte-section-alt">
        <div className="container">
          <div className="monte-section-header">
            <span className="monte-section-tag">Loteamento</span>
            <h2>Estrutura e características</h2>
          </div>

          <div className="monte-estrutura-grid">
            <div className="monte-estrutura-item">
              <div className="monte-estrutura-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h4>Localização</h4>
              <p>Vila Pagã – Piauí</p>
            </div>
            <div className="monte-estrutura-item">
              <div className="monte-estrutura-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                </svg>
              </div>
              <h4>Inserção ambiental</h4>
              <p>Mata dos Cocais</p>
            </div>
            <div className="monte-estrutura-item">
              <div className="monte-estrutura-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </div>
              <h4>Lotes</h4>
              <p>10×20m | 20×20m</p>
            </div>
            <div className="monte-estrutura-item">
              <div className="monte-estrutura-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Acesso</h4>
              <p>Controlado e seguro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="monte-section">
        <div className="container">
          <div className="monte-section-header">
            <span className="monte-section-tag">Acesso</span>
            <h2>Localização estratégica</h2>
            <p className="monte-section-lead">
              O Monte Piaga está situado em uma região privilegiada
            </p>
          </div>

          <div className="monte-localizacao-grid">
            <div className="monte-localizacao-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Aproximadamente <strong>30 km de Teresina</strong></span>
            </div>
            <div className="monte-localizacao-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Acesso <strong>totalmente asfaltado</strong></span>
            </div>
            <div className="monte-localizacao-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Inserido em <strong>área rural preservada</strong></span>
            </div>
          </div>

          <div className="monte-destaque-box">
            <p>
              Essa localização permite proximidade com o centro urbano sem abrir mão da
              <strong> tranquilidade, do silêncio e do contato direto com a natureza</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Por que habitar */}
      <section className="monte-section monte-section-alt">
        <div className="container">
          <div className="monte-porque">
            <h2>Por que habitar o Monte Piaga?</h2>
            <p className="monte-porque-lead">
              Viver no Monte Piaga é assumir um compromisso:
            </p>

            <div className="monte-compromissos-grid">
              <div className="monte-compromisso-item">
                <div className="monte-compromisso-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                  </svg>
                </div>
                <span>Com a terra</span>
              </div>
              <div className="monte-compromisso-item">
                <div className="monte-compromisso-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <span>Com a comunidade</span>
              </div>
              <div className="monte-compromisso-item">
                <div className="monte-compromisso-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                  </svg>
                </div>
                <span>Com a espiritualidade</span>
              </div>
            </div>

            <p className="monte-porque-desc">
              Cada residência passa a integrar um <strong>organismo coletivo</strong>, onde o
              desenvolvimento individual caminha junto ao fortalecimento da Vila como território vivo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="monte-cta">
        <div className="container">
          <div className="monte-cta-content">
            <div className="monte-cta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h2>Monte Piaga</h2>
            <p className="monte-cta-frase">
              Se a sua essência pede mais: <strong>este é o lugar.</strong>
            </p>
            <a
              href="https://wa.me/5586994160070?text=Olá! Gostaria de saber mais sobre o Monte Piaga."
              target="_blank"
              rel="noopener noreferrer"
              className="monte-cta-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MontePiaga;
