// Dados dos projetos mostrados no Portfolio (cards)
export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
  github: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'WebSites Corporativos',
    description: 'Desenvolvimento de websites profissionais com gestão completa de tráfego pago para maximizar resultados.',
    image: '/trampo-bidel.jpg',
    category: 'website',
    technologies: ['React', 'Node.js', 'Meta Business'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Motion Design 3D',
    description: 'Criação de animações 3D e motion graphics que dão vida às ideias e elevam a comunicação visual.',
    image: '/intro-aniel.mp4',
    category: 'mobile',
    technologies: ['Cinema 4D', 'After Effects', 'Blender'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Dashboards',
    description: 'Painéis administrativos interativos com visualização de dados em tempo real e análises avançadas.',
    image: '/dash-2-Thiago.gif',
    category: 'ecommerce',
    technologies: ['React', 'D3.js', 'Chart.js'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Captura Audiovisual',
    description: 'Sistema profissional para captura, edição e produção de vídeos corporativos e institucionais.',
    image: '/icon-sant.jpg',
    category: 'video',
    technologies: ['After Effects', 'Premiere Pro', 'DaVinci'],
    link: '#',
    github: '#'
  }
];
