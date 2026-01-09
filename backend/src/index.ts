import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Dados dos atrativos
const atrativos = [
  {
    id: 'templo-piaga',
    images: ['/images/templo-piaga.jpeg'],
    category: 'Templo',
    title: 'Templo Piaga',
    excerpt: 'Formato octogonal que acolhe as grandes celebrações do Paganismo Brasileiro desde 2017.',
    text: 'Inaugurado em maio de 2017, seu formato octogonal acolhe as grandes celebrações do Paganismo Brasileiro. Arquitetura simbólica, cantos e rituais conduzem a uma experiência de reflexão, força ancestral e comunhão.'
  },
  {
    id: 'templo-almas',
    images: ['/images/templo-almas.jpeg'],
    category: 'Templo',
    title: 'Templo Piaga das Almas',
    excerpt: 'Dedicado à Linha das Almas, reúne mais de 30 estatuetas de almas benditas catalogadas.',
    text: 'Dedicado à Linha das Almas, reúne mais de 30 estatuetas de almas benditas catalogadas pelo Piauí. É um espaço de memória e intercessão, onde a gratidão e a esperança se transformam em devoção viva.'
  },
  {
    id: 'biblioteca',
    images: ['/images/biblioteca.jpeg', '/images/biblioteca-interno.jpeg'],
    category: 'Conhecimento',
    title: 'Biblioteca',
    excerpt: 'Acervo valioso sobre folclore, paganismo, religiões, botânica e mitologias.',
    text: 'Inaugurada em setembro de 2024, guarda um acervo valioso sobre folclore, paganismo, religiões, botânica, mitologias e artes populares, além de documentos da própria Vila. Um refúgio para leitores e pesquisadores, onde conhecimento e tradição caminham lado a lado.'
  },
  {
    id: 'galeria-encantados',
    images: ['/images/galeria-encantados.jpeg'],
    category: 'Espaço Sagrado',
    title: 'Galeria dos Encantados',
    excerpt: 'Dezenas de esculturas de Encantados e divindades autóctones do culto piaga.',
    text: 'Atrás do Templo Piaga, um percurso com dezenas de esculturas de Encantados e divindades autóctones do culto piaga. Arte e devoção se encontram para revelar, em pedra e cor, a cosmovisão da Vila.'
  },
  {
    id: 'casa-salamandra',
    images: ['/images/casa-salamandra.jpeg', '/images/casa-salamandra2.jpeg'],
    category: 'Estrutura',
    title: 'Casa Salamandra',
    excerpt: 'Quarto com cama, ventilador e armadores para rede, banheiro no corredor.',
    text: 'É onde ficam os dormitórios que abrigam os visitantes que vêm para a Vila. Quarto com cama, ventilador e armadores para rede, banheiro no corredor. Os corredores da casa são repletos de arte piaga.'
  },
  {
    id: 'bosques',
    images: ['/images/bosque.jpeg', '/images/bosque2.jpeg', '/images/bosque-nordico.jpeg'],
    category: 'Natureza',
    title: '15 Bosques Temáticos',
    excerpt: 'Bosques dedicados às linhas da Corrente Colona ao longo da Via Aurora.',
    text: 'São 15 bosques temáticos ao longo da Via Aurora, dedicados às linhas da Corrente Colona: Ameríndio, Africano, Hindu, Egípcio, Celta, Oriente Médio, Extremo Oriente, Nórdico, Eslavo, Helênico, Romano, Ibérico, Caribe, Inuit e Pacífico. Cada bosque é um portal simbólico, com paisagismo e espaços de contemplação que celebram a pluralidade do sagrado.'
  },
  {
    id: 'bosque-suely',
    images: ['/images/amazonico%20suely%20cals.jpeg'],
    category: 'Natureza',
    title: 'Bosque Amazônico Suely Cals',
    excerpt: 'Homenagem à escritora e sacerdotisa, com espécies amazônicas e divindades brasileiras.',
    text: 'Homenagem à escritora e sacerdotisa Suely Cals (in memoriam), reúne espécies amazônicas e representações de divindades brasileiras. Um abrigo de sombra e encantamento, onde a natureza fala com voz de mulher e de floresta.'
  },
  {
    id: 'pracinha',
    images: ['/images/praca-baba-tayando.jpeg', '/images/baba-tayand%C3%B3.jpeg'],
    category: 'Natureza',
    title: 'Pracinha Babá Tayandó',
    excerpt: 'Nossa "farmácia viva" com plantas aromáticas e sagradas.',
    text: 'Nossa "farmácia viva": canteiros de plantas aromáticas e sagradas que preservam saberes de cura e bem-viver. Um pequeno oásis de aromas, cuidado e aprendizado comunitário.'
  },
  {
    id: 'sacrarios',
    images: ['/images/sacrario-flora.jpeg', '/images/sacrario-netuno.jpeg', '/images/sacrario-robigus.jpeg'],
    category: 'Espaço Sagrado',
    title: 'Sacrários',
    excerpt: 'Altares dedicados a Flora, Netuno, Pomona, Robigus e Janus.',
    text: 'Ao longo da Vila, altares dedicados a Flora, Netuno, Pomona, Robigus e Janus abençoam caminhos e travessias. São singelos pontos sagrados que convidam a uma pausa, uma prece, um gesto de oferenda.'
  },
  {
    id: 'cantina',
    images: ['/images/cantina.jpeg', '/images/cantina2.jpeg'],
    category: 'Estrutura',
    title: 'Cantina Fornax',
    excerpt: 'Gastronomia regional com tempero mágico e caseiro.',
    text: 'Espaço gastronômico da Vila Pagã, onde é possível degustar pratos regionais com um tempero mágico e caseiro. Funciona aos sábados, domingos e feriados.'
  },
  {
    id: 'loja',
    images: ['/images/loja1.jpeg', '/images/loja2.jpeg'],
    category: 'Estrutura',
    title: 'Loja',
    excerpt: 'Artefatos, livros, peças rituais e suvenires da Vila Pagã.',
    text: 'Aqui o visitante encontra a lembrança física da Vila e apoia a economia local: artefatos, livros, peças rituais e suvenires. Cada item carrega um pedaço da nossa história e ajuda a manter templos, bosques e projetos culturais.'
  }
];

// Dados dos eventos (caminhos correspondem aos arquivos em frontend/public/eventos/)
const eventos = [
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

// Rotas da API
app.get('/api/atrativos', (req, res) => {
  res.json(atrativos);
});

app.get('/api/atrativos/:id', (req, res) => {
  const atrativo = atrativos.find(a => a.id === req.params.id);
  if (atrativo) {
    res.json(atrativo);
  } else {
    res.status(404).json({ error: 'Atrativo não encontrado' });
  }
});

app.get('/api/eventos', (req, res) => {
  res.json(eventos);
});

app.get('/api/eventos/:id', (req, res) => {
  const evento = eventos.find(e => e.id === req.params.id);
  if (evento) {
    res.json(evento);
  } else {
    res.status(404).json({ error: 'Evento não encontrado' });
  }
});

// Rota de contato (WhatsApp)
app.post('/api/contato', (req, res) => {
  const { nome, motivo } = req.body;
  const mensagem = `Olá, me chamo ${nome} e estou entrando em contato pelo site da Vila Pagã. O motivo do meu contato é: ${motivo}`;
  const whatsappUrl = `https://wa.me/5586994160070?text=${encodeURIComponent(mensagem)}`;
  res.json({ whatsappUrl });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
