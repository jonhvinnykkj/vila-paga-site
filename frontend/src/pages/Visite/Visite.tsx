import { useState } from 'react';
import './Visite.css';

const Visite = () => {
  const [nome, setNome] = useState('');

  const whatsappLink = `https://wa.me/5586994160070?text=${encodeURIComponent(
    `Olá, me chamo ${nome || '(seu nome)'} e estou entrando em contato pelo site da Vila Pagã. Gostaria de fazer a reserva para `
  )}`;

  return (
    <main className="visite-page">
      {/* Hero */}
      <section className="visite-hero">
        <div className="visite-hero-bg"></div>
        <div className="visite-hero-content">
          <span className="visite-hero-label">Bem-vindo</span>
          <h1>Visite a Vila Pagã</h1>
          <p>Informações completas para planejar sua jornada ao nosso santuário sagrado</p>
        </div>
      </section>

      <section className="visite-content">
        <div className="container">

          {/* Quick Nav */}
          <nav className="visite-nav">
            <a href="#localizacao" className="visite-nav-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                <circle cx="12" cy="11" r="3"/>
              </svg>
              <span>Localização</span>
            </a>
            <a href="#como-chegar" className="visite-nav-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
              </svg>
              <span>Como Chegar</span>
            </a>
            <a href="#taxas" className="visite-nav-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M12 9v6M9 12h6"/>
              </svg>
              <span>Taxas</span>
            </a>
            <a href="#regras" className="visite-nav-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Regras</span>
            </a>
            <a href="#reservas" className="visite-nav-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              <span>Reservas</span>
            </a>
          </nav>

          {/* Localização */}
          <div id="localizacao" className="visite-section">
            <div className="section-header">
              <div className="section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c4-3 8-6 8-11a8 8 0 1 0-16 0c0 5 4 8 8 11z"/>
                  <circle cx="12" cy="11" r="3"/>
                </svg>
              </div>
              <h2>Localização</h2>
            </div>

            <div className="section-content">
              <p className="intro-text">
                A Vila Pagã é aberta para visitação guiada e está em constante melhoria para oferecer mais comodidade a visitantes, caravanas e participantes de eventos. A maior parte das celebrações é aberta ao público, porém a entrada é sempre condicionada a agendamento prévio e à autorização da administração.
              </p>

              <div className="contato-cards">
                <a href="https://wa.me/5586994160070" target="_blank" rel="noopener noreferrer" className="contato-card whatsapp">
                  <div className="contato-card-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="contato-card-info">
                    <span className="contato-card-label">WhatsApp</span>
                    <span className="contato-card-value">(86) 99416-0070</span>
                    <span className="contato-card-desc">Falar com Rafael Nolêto</span>
                  </div>
                </a>

                <a href="mailto:rafaellugh@gmail.com" className="contato-card email">
                  <div className="contato-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  <div className="contato-card-info">
                    <span className="contato-card-label">E-mail</span>
                    <span className="contato-card-value">rafaellugh@gmail.com</span>
                  </div>
                </a>

                <div className="contato-card social">
                  <div className="contato-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </div>
                  <div className="contato-card-info">
                    <span className="contato-card-label">Redes Sociais</span>
                    <span className="contato-card-value">@vilapaga</span>
                    <span className="contato-card-desc">Facebook e Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Como Chegar */}
          <div id="como-chegar" className="visite-section">
            <div className="section-header">
              <div className="section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
                </svg>
              </div>
              <h2>Como Chegar</h2>
            </div>

            <div className="section-content">
              <div className="transporte-grid">
                <div className="transporte-card">
                  <div className="transporte-card-header">
                    <div className="transporte-icon aviao">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                    </div>
                    <h3>De Avião</h3>
                  </div>
                  <ul>
                    <li>Aeroporto de Teresina – Senador Petrônio Portella (THE)</li>
                    <li>Voos nacionais e conexões internacionais via capitais</li>
                    <li>Deslocamento até a Vila: 20–30 minutos</li>
                    <li>Opções: táxi, apps de mobilidade ou transfer privado</li>
                  </ul>
                </div>

                <div className="transporte-card">
                  <div className="transporte-card-header">
                    <div className="transporte-icon onibus">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 6V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/>
                        <rect x="4" y="6" width="16" height="14" rx="2"/>
                        <path d="M4 16h16M8 20v2M16 20v2M8 10h.01M16 10h.01"/>
                      </svg>
                    </div>
                    <h3>De Ônibus</h3>
                  </div>
                  <ul>
                    <li>Terminal Rodoviário de Teresina</li>
                    <li>Linhas interestaduais e intermunicipais</li>
                    <li>Transporte regional para José de Freitas disponível</li>
                    <li>Último trecho exige veículo contratado</li>
                  </ul>
                </div>

                <div className="transporte-card">
                  <div className="transporte-card-header">
                    <div className="transporte-icon carro">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                        <path d="M5 17H3v-6l2-5h10l2 5v6h-2M5 17h10"/>
                        <path d="M3 11h18"/>
                      </svg>
                    </div>
                    <h3>De Carro</h3>
                  </div>
                  <ul>
                    <li>Partindo de Teresina, siga via PI-113</li>
                    <li>Em José de Freitas, busque "Vila Pagã" no GPS</li>
                    <li>Temporada de chuvas (jan–mai): saia com antecedência</li>
                    <li>Veículos altos oferecem mais conforto</li>
                  </ul>
                </div>
              </div>

              <div className="aluguel-box">
                <div className="aluguel-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="4" width="22" height="16" rx="2"/>
                    <path d="M1 10h22"/>
                  </svg>
                  <h4>Aluguel de Carros</h4>
                </div>
                <p>Recomendamos retirar no Aeroporto de Teresina (THE) para maior conveniência.</p>
                <div className="aluguel-links">
                  <a href="https://www.localiza.com" target="_blank" rel="noopener noreferrer">Localiza</a>
                  <a href="https://www.movida.com.br" target="_blank" rel="noopener noreferrer">Movida</a>
                  <a href="https://www.rentcars.com/pt-br" target="_blank" rel="noopener noreferrer">Rentcars</a>
                </div>
              </div>
            </div>
          </div>

          {/* Horários e Taxas */}
          <div id="taxas" className="visite-section">
            <div className="section-header">
              <div className="section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h2>Horários e Taxas</h2>
            </div>

            <div className="section-content">
              <p className="aviso-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                Os agendamentos devem ser feitos com antecedência, para confirmação e liberação da entrada.
              </p>

              <div className="taxas-grid">
                <div className="taxa-card featured">
                  <div className="taxa-card-badge">Popular</div>
                  <div className="taxa-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h3>Visitas Guiadas</h3>
                  <p className="taxa-horario">Sábados, Domingos e Feriados</p>
                  <div className="taxa-preco">
                    <span className="preco-valor">R$ 20</span>
                    <span className="preco-info">por pessoa</span>
                  </div>
                  <p className="taxa-nota">Grupos escolares/ONGs: valor negociável</p>
                </div>

                <div className="taxa-card">
                  <div className="taxa-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3>Acampamento</h3>
                  <p className="taxa-horario">Sábados, Domingos e Feriados</p>
                  <div className="taxa-lista">
                    <div className="taxa-item">
                      <span>Sem barraca</span>
                      <strong>R$ 50/pessoa</strong>
                    </div>
                    <div className="taxa-item">
                      <span>Barraca para 2</span>
                      <strong>R$ 70</strong>
                    </div>
                  </div>
                </div>

                <div className="taxa-card">
                  <div className="taxa-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <h3>Dormitório</h3>
                  <p className="taxa-horario">Sábados, Domingos e Feriados</p>
                  <div className="taxa-preco">
                    <span className="preco-valor">R$ 150</span>
                    <span className="preco-info">fim de semana</span>
                  </div>
                  <p className="taxa-nota">Quarto com cama, ventilador e armadores para rede, banheiro no corredor</p>
                </div>

                <div className="taxa-card">
                  <div className="taxa-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                      <line x1="6" y1="1" x2="6" y2="4"/>
                      <line x1="10" y1="1" x2="10" y2="4"/>
                      <line x1="14" y1="1" x2="14" y2="4"/>
                    </svg>
                  </div>
                  <h3>Cantina Fornax</h3>
                  <p className="taxa-horario">Sábados, Domingos e Feriados</p>
                  <p className="taxa-nota">Consultar cardápio pelo WhatsApp</p>
                  <a href="tel:+5586994160070" className="taxa-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    86 99416-0070
                  </a>
                </div>

                <div className="taxa-card">
                  <div className="taxa-card-icon espiritual">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </div>
                  <h3>Atendimentos Espirituais</h3>
                  <p className="taxa-horario">Somente Sábados (15h–17h)</p>
                  <div className="taxa-lista">
                    <div className="taxa-item">
                      <span>Harmonização e Limpeza</span>
                      <strong className="gratuito">Gratuito</strong>
                    </div>
                    <div className="taxa-item">
                      <span>Cartas/Oráculo</span>
                      <strong>R$ 120</strong>
                    </div>
                  </div>
                  <p className="taxa-obs">Não atuamos com magias de amarração ou separação</p>
                </div>

                <div className="taxa-card pagamento">
                  <div className="taxa-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="1" y="4" width="22" height="16" rx="2"/>
                      <path d="M1 10h22"/>
                    </svg>
                  </div>
                  <h3>Formas de Pagamento</h3>
                  <div className="pagamento-info">
                    <div className="pix-badge">
                      <span>PIX</span>
                    </div>
                    <p>Pagamentos via Pix Nubank</p>
                    <p className="pagamento-parcela">50% na reserva + 50% na saída</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regras */}
          <div id="regras" className="visite-section">
            <div className="section-header">
              <div className="section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2>Regras aos Visitantes</h2>
            </div>

            <div className="section-content">
              <div className="regras-grid">
                <div className="regra-card proibido">
                  <div className="regra-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                    </svg>
                  </div>
                  <span>Armas, bebidas alcoólicas ou drogas ilícitas</span>
                </div>

                <div className="regra-card proibido">
                  <div className="regra-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                    </svg>
                  </div>
                  <span>Fumar nas dependências da Vila</span>
                </div>

                <div className="regra-card proibido">
                  <div className="regra-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                    </svg>
                  </div>
                  <span>Caçar, desmatar ou acender fogo nas matas</span>
                </div>

                <div className="regra-card proibido">
                  <div className="regra-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                    </svg>
                  </div>
                  <span>Caixas de som e perturbações audiovisuais</span>
                </div>

                <div className="regra-card atencao">
                  <div className="regra-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <span>Manter banheiro comunitário limpo após uso</span>
                </div>

                <div className="regra-card atencao">
                  <div className="regra-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <span>Alimentos externos somente com autorização</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dicas */}
          <div className="visite-section dicas-section">
            <div className="section-header">
              <div className="section-icon dicas">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h2>Dicas Rápidas</h2>
            </div>

            <div className="section-content">
              <div className="dicas-grid">
                <div className="dica-card">
                  <div className="dica-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                    </svg>
                  </div>
                  <p>Leve água, chapéu/boné e protetor solar</p>
                </div>

                <div className="dica-card">
                  <div className="dica-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                      <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                  </div>
                  <p>Traga PIX confirmado antes da chegada</p>
                </div>

                <div className="dica-card">
                  <div className="dica-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
                    </svg>
                  </div>
                  <p>Use calçado fechado para trilhas</p>
                </div>

                <div className="dica-card">
                  <div className="dica-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                      <circle cx="12" cy="12" r="4"/>
                    </svg>
                  </div>
                  <p>Em época de chuva, confirme acesso no dia anterior</p>
                </div>

                <div className="dica-card">
                  <div className="dica-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <p>Chegue 10–15 min antes do horário combinado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservas */}
          <div id="reservas" className="visite-section reservas-section">
            <div className="section-header">
              <div className="section-icon reservas">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
                </svg>
              </div>
              <h2>Faça sua Reserva</h2>
            </div>

            <div className="section-content">
              <div className="reserva-box">
                <div className="reserva-info">
                  <p>
                    A Vila Pagã é aberta para visitação guiada e está em constante melhoria para oferecer mais comodidade a visitantes, caravanas e participantes de eventos.
                  </p>
                  <p className="reserva-destaque">
                    A entrada é sempre condicionada a <strong>agendamento prévio</strong> e autorização da administração.
                  </p>
                </div>

                <div className="reserva-form">
                  <div className="form-group">
                    <label htmlFor="nome">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-reserva"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Fazer Reserva pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Visite;
