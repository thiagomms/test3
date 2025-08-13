// Dados detalhados dos projetos para a página de detalhes
export interface ProjectDetail {
  title: string;
  subtitle: string;
  category: string;
  client: string;
  date: string;
  url: string;
  github: string;
  technologies: string[];
  images: string[];
  description: string;
  features: string[];
  challenges: string;
  results: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export const projectsDetails: Record<string, ProjectDetail> = {
  '1': {
    title: 'WebSites Corporativos',
    subtitle: 'Plataforma completa de vendas online com sistema de pagamento integrado e gestão de estoque.',
    category: 'E-commerce',
    client: 'ModaStyle Boutique',
    date: '15 de Janeiro, 2024',
    url: 'https://modastyle.com.br',
    github: 'https://github.com/digitalstudio/modastyle',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    images: [
      '/carro-1.jpg',
      '/trampo2-bidel.jpg',
      '/demo-video.mp4', // Adicione seu vídeo aqui
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800'
    ],
    description: `O projeto WebSites Corporativos foi desenvolvido para revolucionar a experiência de compra online da boutique. 
    
    Criamos uma plataforma robusta e elegante que não apenas apresenta os produtos de forma atrativa, mas também oferece uma experiência de usuário excepcional desde a navegação até a finalização da compra.`,
    
    features: [
      'Sistema de pagamento integrado com múltiplas opções',
      'Gestão completa de estoque em tempo real',
      'Painel administrativo avançado',
      'Sistema de avaliações e comentários',
      'Integração com redes sociais',
      'Otimização para SEO',
      'Design responsivo para todos os dispositivos',
      'Sistema de cupons e promoções'
    ],
    
    challenges: `O principal desafio foi integrar múltiplos sistemas de pagamento mantendo a segurança e performance. 
    Desenvolvemos uma arquitetura escalável que suporta alto volume de transações simultâneas.`,
    
    results: [
      'Aumento de 300% nas vendas online',
      'Redução de 40% na taxa de abandono do carrinho',
      'Melhoria de 250% no tempo de carregamento',
      'Crescimento de 180% no tráfego orgânico'
    ],
    
    testimonial: {
      text: "A AuLink superou todas as nossas expectativas. O e-commerce não apenas ficou lindo, mas também trouxe resultados incríveis para nosso negócio.",
      author: "Maria Silva",
      role: "CEO da ModaStyle Boutique",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    }
  },
  
  '2': {
    title: 'Motion Design 3D',
    subtitle: 'Aplicativo mobile para acompanhamento de exercícios e metas de saúde.',
    category: 'Mobile App',
    client: 'FitLife Academy',
    date: '10 de Março, 2024',
    url: 'https://fittracker.app',
    github: 'https://github.com/digitalstudio/fittracker',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
    images: [
      '/flyer-3d-aniel-1.mp4',
      '/flyer-3d-aniel-2.mp4',
      '/flyer-3d-aniel-3.mp4'
    ],
    description: `O FitTracker é mais do que um aplicativo de exercícios - é um personal trainer digital completo. 
    
    Com tecnologia de ponta e design intuitivo, transformamos a jornada fitness dos usuários em uma experiência gamificada e motivadora.`,
    
    features: [
      'Rastreamento de exercícios em tempo real',
      'Planos de treino personalizados',
      'Monitor de calorias e nutrição',
      'Integração com wearables',
      'Sistema de conquistas e gamificação',
      'Comunidade e desafios entre usuários',
      'Relatórios detalhados de progresso',
      'Sincronização em nuvem'
    ],
    
    challenges: `O maior desafio foi criar uma interface intuitiva que funcionasse perfeitamente durante os exercícios, 
    considerando que os usuários estariam em movimento e com as mãos ocupadas.`,
    
    results: [
      '50.000+ downloads nos primeiros 3 meses',
      'Avaliação média de 4.8 estrelas',
      '85% de retenção de usuários após 30 dias',
      'Crescimento de 120% na base de usuários mensais'
    ],
    
    testimonial: {
      text: "O FitTracker transformou a forma como nossos alunos acompanham seus treinos. A interface é perfeita e os resultados são impressionantes.",
      author: "João Santos",
      role: "Diretor da FitLife Academy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    }
  },
  
  '3': {
    title: 'Dashboards Analíticos',
    subtitle: 'Painéis administrativos interativos com visualização de dados em tempo real e análises avançadas.',
    category: 'Dashboard',
    client: 'Diversas Empresas',
    date: '20 de Abril, 2025',
    url: 'https://github.com/thiagomms/DASH-ULTIMATE',
    github: '#',
    technologies: ['React', 'D3.js', 'Chart.js', 'Node.js', 'PostgreSQL', 'Redis'],
    images: [
      '/dash-Thiago-2.png',
      '/dash-3-Thiago.gif',
      '/dash-2-Thiago.gif',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    ],
    description: `Desenvolvemos dashboards personalizados que transformam dados complexos em insights visuais claros e acionáveis. 
    
    Nossas soluções permitem que gestores tomem decisões baseadas em dados reais, com visualizações interativas e atualizações em tempo real.`,
    
    features: [
      'Visualizações interativas com gráficos dinâmicos',
      'Atualização de dados em tempo real',
      'Filtros avançados e drill-down',
      'Exportação de relatórios em múltiplos formatos',
      'Sistema de alertas e notificações',
      'Dashboard responsivo para todos dispositivos',
      'Integração com múltiplas fontes de dados',
      'Controle de acesso por níveis de usuário'
    ],
    
    challenges: `O desafio principal foi criar dashboards que fossem ao mesmo tempo poderosos e intuitivos, 
    capazes de processar grandes volumes de dados sem comprometer a performance e a experiência do usuário.`,
    
    results: [
      'Redução de 70% no tempo de análise de dados',
      'Aumento de 150% na velocidade de tomada de decisão',
      'Economia de 40 horas mensais em geração de relatórios',
      '95% de satisfação dos usuários finais'
    ],
    
    testimonial: {
      text: "Os dashboards da AuLink revolucionaram nossa forma de visualizar dados. Agora conseguimos identificar tendências e oportunidades em tempo real.",
      author: "Carlos Mendes",
      role: "CEO da DataCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  }
};
