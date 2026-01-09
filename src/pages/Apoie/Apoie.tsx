import './Apoie.css';

const Apoie = () => {
  return (
    <main className="apoie-page">
      {/* Video Background */}
      <div className="apoie-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/images/apoie-video.mp4" type="video/mp4" />
        </video>
        <div className="apoie-video-overlay"></div>
      </div>

      {/* Hero */}
      <section className="apoie-hero">
        <div className="apoie-hero-content">
          <span className="apoie-hero-tag">Faça Parte desta Jornada</span>
          <h1>Apoie a Vila Pagã</h1>
          <p>
            Tornar-se apoio é participar da preservação de um território cultural vivo.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="apoie-intro">
        <div className="container">
          <div className="apoie-intro-content">
            <div className="apoie-intro-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h2>A Vila Pagã é mais do que um espaço físico</h2>
            <p>
              Ela é um <strong>território de cultura, espiritualidade, natureza e memória viva</strong>,
              erguido e mantido com dedicação, trabalho coletivo e profundo respeito às tradições que representa.
            </p>
            <p>
              Apoiar a Vila Pagã é contribuir para que este espaço continue existindo, crescendo e
              acolhendo de forma íntegra, responsável e coerente com seus valores.
            </p>
          </div>
        </div>
      </section>

      {/* Por que apoiar */}
      <section id="por-que" className="apoie-section apoie-section-alt">
        <div className="container">
          <div className="apoie-section-header">
            <span className="apoie-section-tag">Importância</span>
            <h2>Por que a Vila Pagã precisa de apoio?</h2>
            <p className="apoie-section-lead">
              Manter um território cultural e espiritual ativo exige cuidado contínuo.
              Os apoios recebidos ajudam a sustentar:
            </p>
          </div>

          <div className="apoie-motivos-grid">
            <div className="apoie-motivo">
              <div className="apoie-motivo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                  <path d="M12 13V7"/>
                  <path d="M9 10l3-3 3 3"/>
                </svg>
              </div>
              <span>Preservação ambiental da área</span>
            </div>
            <div className="apoie-motivo">
              <div className="apoie-motivo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span>Manutenção das estruturas e espaços comunitários</span>
            </div>
            <div className="apoie-motivo">
              <div className="apoie-motivo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <span>Realização de eventos culturais, celebrações e encontros</span>
            </div>
            <div className="apoie-motivo">
              <div className="apoie-motivo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <span>Produção de conteúdo educativo, histórico e espiritual</span>
            </div>
            <div className="apoie-motivo">
              <div className="apoie-motivo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <span>Difusão da cultura e da espiritualidade pagã brasileira</span>
            </div>
          </div>

          <div className="apoie-destaque-box">
            <p>
              Cada apoio fortalece a <strong>autonomia da Vila</strong> e garante que suas atividades
              continuem acessíveis, respeitosas e alinhadas à sua missão.
            </p>
          </div>
        </div>
      </section>

      {/* Formas de apoiar */}
      <section id="formas" className="apoie-section">
        <div className="container">
          <div className="apoie-section-header">
            <span className="apoie-section-tag">Contribua</span>
            <h2>Formas de apoiar a Vila Pagã</h2>
            <p className="apoie-section-lead">
              O apoio à Vila Pagã pode ocorrer de diversas maneiras, todas igualmente importantes.
            </p>
          </div>

          <div className="apoie-formas-grid">
            {/* Livros */}
            <div className="apoie-forma-card">
              <div className="apoie-forma-icon livros">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <path d="M8 7h8M8 11h8M8 15h5"/>
                </svg>
              </div>
              <div className="apoie-forma-content">
                <h3>Aquisição de Livros</h3>
                <span className="apoie-forma-tag">Biblioteca da Vila Pagã</span>
                <p>
                  Ao adquirir livros editados pela Biblioteca da Vila Pagã, você contribui para
                  a produção editorial independente, a preservação do conhecimento e o fortalecimento
                  de autores e pesquisadores ligados ao projeto.
                </p>
                <p className="apoie-forma-frase">
                  Cada livro é, ao mesmo tempo, uma obra e um gesto de apoio.
                </p>
                <a
                  href="https://clubedeautores.com.br/livros/autores/rafael-noleto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apoie-forma-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Ver Catálogo
                </a>
              </div>
            </div>

            {/* Visitação */}
            <div className="apoie-forma-card">
              <div className="apoie-forma-icon visitacao">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="apoie-forma-content">
                <h3>Visitação à Comunidade</h3>
                <span className="apoie-forma-tag">Presença Viva</span>
                <p>
                  Visitar a Vila Pagã é uma das formas mais diretas de apoio. A visitação movimenta
                  a economia local, fortalece o vínculo entre visitantes e comunidade, e ajuda a
                  manter o espaço vivo, cuidado e ativo.
                </p>
                <p className="apoie-forma-frase">
                  A presença respeitosa é parte fundamental da experiência da Vila.
                </p>
                <a href="/visite" className="apoie-forma-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Planejar Visita
                </a>
              </div>
            </div>

            {/* Doação */}
            <div className="apoie-forma-card apoie-forma-card-destaque">
              <div className="apoie-forma-icon doacao">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="apoie-forma-content">
                <h3>Apoio Direto e Consciente</h3>
                <span className="apoie-forma-tag">Doação</span>
                <p>
                  Também é possível apoiar a Vila Pagã por meio de contribuições diretas,
                  pontuais ou recorrentes, destinadas à manutenção e aos projetos em andamento.
                </p>
                <p className="apoie-forma-frase">
                  Esse tipo de apoio é um gesto de <strong>confiança, compromisso e corresponsabilidade</strong> com
                  a continuidade do território.
                </p>
                <a href="#doar" className="apoie-forma-btn btn-destaque">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  Fazer Doação
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mais do que apoiar */}
      <section id="fazer-parte" className="apoie-section apoie-section-alt">
        <div className="container">
          <div className="apoie-fazer-parte">
            <h2>Mais do que apoiar, fazer parte</h2>
            <p className="apoie-fazer-parte-lead">
              A Vila Pagã não se sustenta apenas com recursos, mas com pessoas que compreendem
              seu valor cultural, espiritual e simbólico. Apoiar a Vila é:
            </p>

            <div className="apoie-fazer-parte-grid">
              <div className="apoie-fazer-parte-item">
                <div className="apoie-fazer-parte-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span>Proteger um espaço de tradição viva</span>
              </div>
              <div className="apoie-fazer-parte-item">
                <div className="apoie-fazer-parte-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z"/>
                  </svg>
                </div>
                <span>Fortalecer uma proposta cultural genuinamente brasileira</span>
              </div>
              <div className="apoie-fazer-parte-item">
                <div className="apoie-fazer-parte-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <span>Participar da construção de um legado</span>
              </div>
            </div>

            <p className="apoie-fazer-parte-frase">
              Cada gesto de apoio — pequeno ou grande — ajuda a manter este território
              <strong> aberto, vivo e em constante florescimento</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* QR Code / Doação */}
      <section id="doar" className="apoie-section apoie-doacao-section">
        <div className="container">
          <div className="apoie-doacao-box">
            <div className="apoie-doacao-header">
              <h2>Faça sua Doação</h2>
              <p>Escaneie o QR Code ou use a chave PIX para contribuir</p>
            </div>

            <div className="apoie-doacao-content">
              <div className="apoie-qrcode-area">
                <div className="qrcode-frame">
                  <img src="/images/QR-CODE-APOIE.jpeg" alt="QR Code PIX" />
                </div>
              </div>

              <div className="apoie-pix-info">
                <div className="pix-badge">
                  <span>PIX</span>
                </div>
                <div className="pix-dados">
                  <p><strong>Chave:</strong> rafaellugh@gmail.com</p>
                  <p><strong>Nome:</strong> Rafael Nolêto</p>
                  <p className="pix-banco">Nubank</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5586994160070?text=Olá! Gostaria de fazer uma doação para a Vila Pagã."
              target="_blank"
              rel="noopener noreferrer"
              className="apoie-doacao-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Dúvidas? Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Agradecimento */}
      <section className="apoie-agradecimento">
        <div className="container">
          <div className="apoie-agradecimento-content">
            <div className="apoie-agradecimento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                <path d="M12 13V7"/>
                <path d="M9 10l3-3 3 3"/>
              </svg>
            </div>
            <h2>A Vila Pagã agradece!</h2>
            <p>
              Seu apoio é um ato de <strong>presença, respeito e cuidado</strong>.
            </p>
            <p className="apoie-agradecimento-frase">
              Seguimos cultivando, preservando e construindo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Apoie;
