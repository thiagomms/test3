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
    description: 'Plataforma completa de vendas online com sistema de pagamento integrado e gestão de estoque.',
    image: '/trampo-bidel.jpg',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Motion Design 3D',
    description: 'Aplicativo mobile para acompanhamento de exercícios e metas de saúde.',
    image: '/intro-aniel.mp4',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
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
  }
];
