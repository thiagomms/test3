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
    subtitle: 'Desenvolvimento de websites profissionais e modernos que elevam a presença digital das empresas.',
    category: 'Website Corporativo',
    client: 'Diversas Empresas',
    date: '15 de Janeiro, 2024',
    url: 'https://aulink.com.br/portfolio',
    github: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Meta Business', 'Google Ads', 'Analytics'],
    images: [
      '/carro-1.jpg',
      '/trampo2-bidel.jpg',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800'
    ],
    description: `Desenvolvemos websites corporativos que transformam a presença digital das empresas, criando experiências únicas que conectam marcas aos seus públicos de forma efetiva. 
    
    Nossa abordagem combina design moderno, tecnologia de ponta e estratégia digital para criar plataformas que não apenas impressionam visualmente, mas também geram resultados concretos para os negócios. Cada projeto é desenvolvido com foco na identidade única de cada empresa, garantindo que o site seja uma extensão autêntica da marca no ambiente digital.
    
    Além do desenvolvimento, oferecemos gestão completa de tráfego pago, maximizando o retorno sobre investimento através de campanhas otimizadas no Meta Business (Facebook e Instagram Ads), Google Ads e outras plataformas digitais.`,
    
    features: [
      'Design personalizado alinhado com a identidade visual da marca',
      'Arquitetura da informação otimizada para conversão',
      'Painel administrativo intuitivo para gestão de conteúdo',
      'Integração com sistemas e ferramentas corporativas',
      'Otimização avançada para mecanismos de busca (SEO)',
      'Performance otimizada com carregamento ultrarrápido',
      'Design responsivo e adaptativo para todos os dispositivos',
      'Sistema de analytics e métricas detalhadas',
      'Formulários inteligentes para captação de leads',
      'Área de blog/notícias integrada',
      'Certificado SSL e segurança aprimorada',
      'Suporte multilíngue quando necessário',
      'Gestão completa de tráfego pago (Meta Business, Google Ads)',
      'Campanhas otimizadas com foco em conversão',
      'Relatórios detalhados de CPM, CTR e CPC',
      'Remarketing e públicos personalizados',
      'A/B testing para maximizar resultados'
    ],
    
    challenges: `Nosso principal desafio é criar websites que se destaquem em um mercado digital saturado, mantendo o equilíbrio perfeito entre estética moderna e funcionalidade prática. 
    
    Desenvolvemos uma metodologia própria que garante sites rápidos, seguros e otimizados, capazes de competir com grandes players do mercado. Cada projeto exige soluções customizadas para integrar diferentes sistemas corporativos, manter a consistência da marca e garantir uma experiência excepcional em todos os dispositivos e navegadores.
    
    Na gestão de tráfego pago, o desafio é otimizar constantemente as campanhas para reduzir o CPM e aumentar a taxa de cliques (CTR), competindo com grandes anunciantes enquanto mantemos custos acessíveis para nossos clientes. Utilizamos estratégias avançadas de segmentação e otimização em tempo real para garantir o melhor ROI possível.`,
    
    results: [
      'Aumento médio de 150% no tráfego orgânico',
      'Redução de 60% no tempo de carregamento das páginas',
      'Crescimento de 200% na geração de leads qualificados',
      'Melhoria de 180% na taxa de conversão',
      '95% de satisfação dos clientes',
      'ROI positivo em menos de 6 meses',
      '📊 RESULTADOS DE TRÁFEGO PAGO:',
      'CPM médio de R$ 8,50 (50% abaixo do mercado)',
      'CTR médio de 3,8% nas campanhas',
      'Mais de 2 milhões de impressões mensais',
      'CPC médio de R$ 0,45',
      'Taxa de conversão de 4,2% em landing pages',
      'ROAS (Retorno sobre Investimento em Ads) de 5:1'
    ],
    
    testimonial: {
      text: "A AuLink transformou completamente nossa presença digital. O novo site não apenas impressiona visualmente, mas também se tornou uma ferramenta fundamental para o crescimento do nosso negócio. A gestão de tráfego pago superou todas as expectativas - reduzimos nosso CPM em 60% e triplicamos os leads qualificados. A equipe entendeu perfeitamente nossa visão e a traduziu em resultados concretos.",
      author: "Roberto Fernandes",
      role: "Diretor de Marketing - TechCorp Brasil",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    }
  },
  
  '2': {
    title: 'Motion Design 3D',
    subtitle: 'Criação de animações 3D e motion graphics que dão vida às ideias e elevam a comunicação visual.',
    category: 'Animação 3D',
    client: 'Diversas Empresas',
    date: '10 de Março, 2024',
    url: 'https://vimeo.com/aulink',
    github: '#',
    technologies: ['Cinema 4D', 'After Effects', 'Blender', 'Octane Render', 'Redshift'],
    images: [
      '/flyer-3d-aniel-1.mp4',
      '/flyer-3d-aniel-2.mp4',
      '/flyer-3d-aniel-3.mp4'
    ],
    description: `Especialistas em motion design 3D, criamos animações impressionantes que capturam a atenção e comunicam mensagens complexas de forma clara e envolvente. 
    
    Nossa expertise abrange desde vinhetas e aberturas cinematográficas até visualizações arquitetônicas fotorrealistas, passando por animações de produtos e conteúdo publicitário de alto impacto. Cada projeto é desenvolvido com atenção meticulosa aos detalhes, garantindo resultados que superam expectativas e deixam impressões duradouras.`,
    
    features: [
      'Modelagem 3D de alta qualidade com detalhamento fotorrealista',
      'Animações de personagens com rigging avançado',
      'Vinhetas e aberturas cinematográficas',
      'Visualização arquitetônica e de produtos em 360°',
      'Motion graphics para redes sociais e campanhas digitais',
      'Efeitos visuais (VFX) e composição',
      'Simulações físicas realistas (fluidos, partículas, tecidos)',
      'Renderização em alta resolução (4K/8K)',
      'Integração com live-action e chroma key',
      'Animações interativas para web e aplicativos',
      'Realidade aumentada (AR) e experiências imersivas',
      'Loop animations otimizadas para plataformas digitais'
    ],
    
    challenges: `O grande desafio do motion design 3D é equilibrar qualidade visual excepcional com prazos apertados e orçamentos variados. 
    
    Desenvolvemos um pipeline otimizado que nos permite criar animações de qualidade cinematográfica em tempo recorde, utilizando as mais avançadas técnicas de renderização e otimização. Cada projeto exige soluções criativas para traduzir conceitos abstratos em narrativas visuais impactantes, mantendo a fidelidade à marca e garantindo que as animações funcionem perfeitamente em diferentes plataformas e dispositivos.`,
    
    results: [
      'Mais de 300 projetos de animação entregues',
      'Aumento médio de 250% no engajamento visual',
      '15 milhões de visualizações em campanhas animadas',
      'Redução de 40% no tempo de produção com pipeline otimizado',
      '98% de aprovação na primeira apresentação',
      'Prêmios em festivais de design e animação'
    ],
    
    testimonial: {
      text: "As animações 3D da AuLink elevaram completamente o nível das nossas campanhas. A qualidade é cinematográfica e o impacto no público foi imediato. Nunca vimos resultados tão expressivos em engajamento.",
      author: "Juliana Marques",
      role: "Diretora Criativa - Agência Nexus",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100"
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
  },
  
  '4': {
    title: 'Captura AudioVisual',
    subtitle: 'Sistema profissional para captura, edição e produção de vídeos corporativos e institucionais.',
    category: 'Produção Audiovisual',
    client: 'Diversos Clientes',
    date: '30 de Março, 2024',
    url: 'https://vimeo.com/aulink',
    github: '#',
    technologies: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Cinema 4D', 'OBS Studio'],
    images: [
      '/sant.produtora-peedro.fs.mp4',
      '/saint-3.jpg',
      '/mesa-4k.png',      
    ],
    description: `Nossa equipe especializada em produção audiovisual cria conteúdo visual impactante que conta a história da sua marca. 
    
    Desde a concepção até a entrega final, cuidamos de todo o processo de produção, garantindo qualidade cinematográfica e mensagens que ressoam com seu público-alvo.`,
    
    features: [
      'Captação em 4K/8K com equipamentos profissionais',
      'Edição e pós-produção completa',
      'Motion graphics e animações 2D/3D',
      'Correção de cor profissional (color grading)',
      'Mixagem de áudio e trilha sonora',
      'Vídeos institucionais e corporativos',
      'Transmissões ao vivo e webinars',
      'Vídeos para redes sociais otimizados'
    ],
    
    challenges: `O desafio é criar conteúdo que não apenas impressione visualmente, mas que também comunique efetivamente a mensagem da marca, 
    mantendo a atenção do público em um mundo saturado de conteúdo audiovisual.`,
    
    results: [
      'Mais de 500 vídeos produzidos',
      'Aumento médio de 200% no engajamento',
      '98% de satisfação dos clientes',
      'Vídeos com mais de 10M de visualizações totais'
    ],
    
    testimonial: {
      text: "A qualidade da produção audiovisual da AuLink superou todas as nossas expectativas. O vídeo institucional elevou nossa imagem no mercado.",
      author: "Ana Paula Costa",
      role: "Diretora de Marketing da TechCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    }
  }
};
