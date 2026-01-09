import { EventoCard } from '../../components';
import type { Evento } from '../../types';
import './Eventos.css';

// Dados dos eventos com os caminhos corretos das imagens
const eventosData: Evento[] = [
  {
    id: 'agonalia',
    img: '/eventos/agonalia.webp',
    title: 'Festejo de Janus (Agonália)',
    date: '04 de Janeiro de 2026',
    desc: 'Rito de começos e transições, bênçãos para portas, caminhos e projetos. Uma celebração para abrir novos ciclos e pedir proteção para os novos empreendimentos.'
  },
  {
    id: 'luzes',
    img: '/eventos/festa-luzes.webp',
    title: 'Festa das Luzes',
    date: '08 de Fevereiro de 2026 (domingo)',
    desc: 'Tempo de clareza e inspiração. Celebração com acendimento de velas e intenções, buscando iluminação interior e sabedoria para o caminho à frente.'
  },
  {
    id: 'flores',
    img: '/eventos/festa-flores.webp',
    title: 'Festa das Flores',
    date: '22 de Março de 2026 (domingo)',
    desc: 'Honra à floração, à beleza e às dádivas de Flora. Uma celebração da primavera, da renovação e da abundância que a natureza nos oferece.'
  },
  {
    id: 'robigalia',
    img: '/eventos/robigalia.webp',
    title: 'Festejo de Robigus (Robigália)',
    date: '26 de Abril de 2026 (domingo)',
    desc: 'Proteção das roças, das sementes e das colheitas contra pragas e intempéries. Rito ancestral de súplica pela proteção dos cultivos e fartura.'
  },
  {
    id: 'fertilidade',
    img: '/eventos/festa-fertilidade.webp',
    title: 'Festa da Fertilidade',
    date: '03 de Maio de 2026 (domingo)',
    desc: 'Celebração do amor, da criação e da abundância. Um rito dedicado à força geradora da vida, à fertilidade da terra e dos seres.'
  },
  {
    id: 'sol',
    img: '/eventos/festa-sol.webp',
    title: 'Festa do Sol',
    date: '21 de Junho de 2026 (domingo)',
    desc: 'Solstício: força vital, coragem e caminho luminoso. Celebração do ápice solar, honrando a luz, a energia e o poder do sol em nossas vidas.'
  },
  {
    id: 'neptunalia',
    img: '/eventos/neptunalia.webp',
    title: 'Neptunália (Festejo das Águas)',
    date: '19 de Julho de 2026 (domingo)',
    desc: 'Bênção das águas, rios, chuvas e fontes. Celebração de gratidão e cuidado com os mananciais, honrando o elemento que sustenta toda vida.'
  },
  {
    id: 'graos',
    img: '/eventos/festa-graos-palha.webp',
    title: 'Festa dos Grãos e da Palha',
    date: '02 de Agosto de 2026 (sábado)',
    desc: 'Primeiras colheitas, gratidão aos alimentos e partilha. Celebração da fartura que vem da terra e do trabalho, honrando os frutos do cultivo.'
  },
  {
    id: 'carnauba',
    img: '/eventos/festa-carnauba.webp',
    title: 'Festa da Carnaúba',
    date: '20 de Setembro de 2026 (domingo)',
    desc: 'Celebração da "árvore da vida" nordestina: sustento, artesanato e resistência. Honra à planta símbolo do Piauí que tanto oferece ao seu povo.'
  },
  {
    id: 'almas',
    img: '/eventos/festa-almas.webp',
    title: 'Festa das Almas',
    date: 'Noite de 31 de Outubro de 2026 (sábado)',
    desc: 'Memória e honra aos ancestrais, silêncio sagrado e oferendas. Uma noite de reverência aos que vieram antes, conectando presente e passado.'
  },
  {
    id: 'vida',
    img: '/eventos/festa-vida.webp',
    title: 'Festa da Vida',
    date: '20 de Dezembro de 2026 (domingo)',
    desc: 'Renovação do ciclo e alegria comunitária. Celebração do renascimento, encerrando um ciclo e preparando o espírito para novos começos.'
  },
  {
    id: 'estadia',
    img: '/eventos/estadia.webp',
    title: 'Visitação e Estadia',
    date: 'Sob agendamento',
    desc: 'A Vila Pagã oferece visitação e estadia mediante agendamento prévio. Venha conhecer este espaço sagrado, participar de vivências e conectar-se com a natureza e a espiritualidade.'
  }
];

const Eventos = () => {
  const eventos = eventosData;

  return (
    <main className="eventos-page">
      {/* Hero */}
      <section className="eventos-hero">
        <div className="eventos-hero-bg"></div>
        <div className="eventos-hero-content">
          <span className="eventos-hero-tag">Calendário Sagrado 2026</span>
          <h1>Eventos & Celebrações</h1>
          <p>
            Participe das festividades que honram os ciclos da natureza,
            os deuses e as tradições ancestrais do politeísmo brasileiro.
          </p>
        </div>
      </section>

      {/* Como Funciona o Calendário */}
      <section id="sobre" className="eventos-about">
        <div className="container">
          <div className="eventos-about-header">
            <div className="eventos-about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h2>Como Funciona o Calendário</h2>
          </div>
          <div className="eventos-about-content">
            <p className="eventos-about-lead">
              O calendário de eventos da Vila Pagã acompanha o <strong>ciclo ritual do Piaganismo</strong> e
              integra influências do mundo rural, da religiosidade popular brasileira e das antigas festas agrárias.
            </p>
            <p>
              Solstícios e equinócios, a bênção das águas, a proteção das plantações, a celebração dos grãos,
              a reverência aos ancestrais e a renovação dos começos. Cada festa tem um <strong>simbolismo específico</strong>,
              explicado no momento do rito, e costuma incluir momentos de preparação, procissão, canto, bênção,
              oferenda ecológica e convivência.
            </p>
          </div>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="eventos-info">
        <div className="container">
          <div className="eventos-info-grid">
            <div className="eventos-info-item">
              <div className="eventos-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Vagas Limitadas</h3>
              <p>Todas as festas possuem capacidade limitada para preservar a experiência.</p>
            </div>
            <div className="eventos-info-item">
              <div className="eventos-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Confirmação Prévia</h3>
              <p>A participação requer confirmação via WhatsApp.</p>
            </div>
            <div className="eventos-info-item">
              <div className="eventos-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>Agendamento</h3>
              <p>Visitação e estadia ocorrem sob agendamento quando indicado.</p>
            </div>
            <div className="eventos-info-item">
              <div className="eventos-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Chegue com Antecedência</h3>
              <p>Vista-se com simplicidade e respeito, siga as orientações do sacerdócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Eventos */}
      <section id="calendario" className="eventos-content">
        <div className="container">
          <div className="eventos-section-header">
            <span>Programação</span>
            <h2>Calendário 2026</h2>
          </div>

          <div className="eventos-grid">
            {eventos.map((evento) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </div>
        </div>
      </section>

      {/* Recomendações */}
      <section id="proximos" className="eventos-tips">
        <div className="container">
          <div className="eventos-tips-content">
            <h2>Recomendações para Visitantes</h2>
            <ul className="eventos-tips-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Leve água, chapéu ou lenço, protetor solar e calçado confortável</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Traje sugerido em branco e/ou verde: calças ou saias longas, camisas com mangas (evite regatas, decotes, minissaias e shorts curtos)</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Respeite as áreas ritualísticas, os templos e os horários de silêncio</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Produção de fotos e vídeos somente nas áreas autorizadas pela administração</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Eventos;
