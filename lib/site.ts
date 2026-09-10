/* ------------------------------------------------------------------ */
/*  Oliveira FILX Imóveis — conteúdo institucional (fonte: filximoveis.com.br) */
/*  Nada é inventado; a copy é reorganizada e elevada, não alterada em sentido. */
/* ------------------------------------------------------------------ */

export const SITE_URL = 'https://filximoveis.vercel.app';

export const BRAND = {
  name: 'Oliveira FILX Imóveis',
  short: 'FILX Imóveis',
  tagline: 'A maior imobiliária de Itanhaém.',
  pilares: 'Confiança, transparência e credibilidade são os pilares do nosso atendimento.',
};

export const WHATSAPP_MAIN = '5513991487111';
export const WHATSAPP_MKT = '5513997118223';

export const CONTACT = {
  phone1: '(13) 3429-4100',
  phone2: '(13) 99148-7111',
  email: 'imobiliariafilx@gmail.com',
  whatsapp: WHATSAPP_MAIN,
  address: {
    line1: 'Avenida Marginal, 11464',
    line2: 'Bairro Gaivota',
    city: 'Itanhaém — SP',
    zip: '11755-014',
  },
  hours: 'Segunda a Sábado, 9h às 17h',
  clientArea: 'https://www.filximoveis.com.br/area',
  social: {
    instagram: 'https://www.instagram.com/oliveirafilximoveis/',
    facebook: 'https://www.facebook.com/FilxImoveisOliveira/',
    youtube: 'https://www.youtube.com/@oliveirafilximoveis',
    tiktok: 'https://www.tiktok.com/@oliveirafilximoveis',
  },
};

export const wa = (phone: string, text: string) =>
  `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;

export const ABOUT = {
  mission:
    'Facilitar o encontro entre sonhos e lares, conectando compradores e vendedores a imóveis que atendam não apenas às necessidades práticas, mas também às aspirações e ao estilo de vida.',
  vision:
    'Ser referência no mercado imobiliário da região por meio da excelência no atendimento, da inovação tecnológica e da atualização constante — mantendo padrões éticos e profissionais.',
  values: [
    { title: 'Integridade', text: 'Fazemos o certo, mesmo quando ninguém está vendo.' },
    { title: 'Ética', text: 'Transparência total em cada negociação.' },
    { title: 'Respeito', text: 'Cada cliente é tratado como único.' },
    { title: 'Confiança', text: 'Relações construídas para durar toda a vida.' },
    { title: 'Excelência', text: 'Padrão elevado do primeiro contato à entrega das chaves.' },
  ],
};

export const REGIONS = [
  { name: 'Itanhaém', tag: 'Sede & litoral sul', href: '/imoveis?cidade=Itanhaém', img: '/imoveis/3315068.jpeg' },
  { name: 'Praia Grande', tag: 'Alto padrão à beira-mar', href: '/imoveis?cidade=Praia%20Grande', img: '/imoveis/2961080.jpg' },
  { name: 'Peruíbe', tag: 'Natureza e tranquilidade', href: '/imoveis?cidade=Peruíbe', img: '/imoveis/3353605.jpeg' },
  { name: 'Mongaguá', tag: 'Praias e valorização', href: '/imoveis?cidade=Mongaguá', img: '/imoveis/2688507.jpg' },
];

export const TIPOS_MENU = [
  { label: 'Casas', tipo: 'Casa' },
  { label: 'Apartamentos', tipo: 'Apartamento' },
  { label: 'Terrenos', tipo: 'Terreno' },
  { label: 'Chácaras', tipo: 'Chácara' },
  { label: 'Sítios', tipo: 'Sítio' },
];

export const SERVICES = [
  {
    icon: 'search',
    title: 'Comprar imóvel',
    text: 'Casas, apartamentos, terrenos e chácaras selecionados no litoral sul de SP.',
    cta: 'Ver imóveis',
    href: '/imoveis',
  },
  {
    icon: 'home',
    title: 'Anunciar seu imóvel',
    text: 'Avaliação profissional e a maior vitrine de Itanhaém para vender mais rápido.',
    cta: 'Anunciar agora',
    href: '/seu-imovel',
  },
  {
    icon: 'calculator',
    title: 'Financiamento',
    text: 'Simule as parcelas e descubra o poder de compra do seu financiamento.',
    cta: 'Simular',
    href: '/#financiamento',
  },
  {
    icon: 'landmark',
    title: 'Correspondente bancário',
    text: 'Aceleramos a aprovação do seu crédito imobiliário com os principais bancos.',
    cta: 'Saiba mais',
    href: '/contato',
  },
];

export const STATS = [
  { value: 'Nº 1', label: 'referência imobiliária em Itanhaém' },
  { value: '4', label: 'cidades do litoral sul atendidas' },
  { value: 'Seg–Sáb', label: 'atendimento humanizado, 9h às 17h' },
  { value: '100%', label: 'confiança, transparência e credibilidade' },
];

export const TESTIMONIALS = [
  {
    name: 'Alexandre Felipe Benvenuto',
    text: 'Foi uma ótima experiência. O corretor Walace Jonas foi super correto e atencioso do início ao fim.',
    corretor: 'Walace Jonas',
  },
  {
    name: 'Katia Guella',
    text: 'Avaliando os serviços, classifico como acima de excelente. A corretora Adriana Souza foi impecável.',
    corretor: 'Adriana Souza',
  },
  {
    name: 'Thiago Gregory',
    text: 'Experiência fenomenal com a FILX. Rafael Augusto, Adailton Santos e Marcelo Almeida fizeram tudo acontecer.',
    corretor: 'Equipe FILX',
  },
  {
    name: 'Doralice Souza de Araujo',
    text: 'Adorei, foi uma ótima experiência! Imobiliária super correta e transparente.',
    corretor: 'Oliveira FILX',
  },
  {
    name: 'Wesliane Aparecida',
    text: 'Atendimento nota mil com Isabele Oliveira, Kyka Morê e Weverton Fortunato. Recomendo demais!',
    corretor: 'Isabele Oliveira',
  },
  {
    name: 'Cristina Gomes',
    text: 'A Adriana foi super atenciosa e cuidou de cada detalhe. Saí realizada com a minha compra.',
    corretor: 'Adriana Souza',
  },
];

/* Equipe (nomes reais mencionados nos depoimentos do site) */
export const TEAM = [
  'Walace Jonas',
  'Rafael Augusto',
  'Adriana Souza',
  'Adailton Santos',
  'Marcelo Almeida',
  'Isabele Oliveira',
  'Weverton Fortunato',
  'Kyka Morê',
];

/* ------------------------------------------------------------------ */
/*  Corretor Mário — landing de tráfego pago (/mario)                  */
/*  WhatsApp = número de marketing da imobiliária (troque se desejar). */
/* ------------------------------------------------------------------ */
export const MARIO = {
  name: 'Mário Oliveira',
  role: 'Consultor Imobiliário — Litoral Sul de SP',
  whatsapp: WHATSAPP_MKT,
  phone: '(13) 99711-8223',
  // Preencha com o CRECI real do corretor. Enquanto vazio, a linha não aparece.
  creci: '',
  bio: 'Especialista em imóveis no litoral sul de São Paulo. Ajudo você a encontrar — sem pressa e sem enrolação — a casa de praia, o apartamento ou o terreno certo para o seu momento.',
  highlights: [
    'Especialista dedicado ao litoral sul de São Paulo',
    'Resposta em minutos, direto no WhatsApp',
    'Acompanho você da primeira visita à escritura',
  ],
};
