import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce ModaStyle',
      description: 'Plataforma completa de vendas online com sistema de pagamento integrado e gestão de estoque.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      category: 'ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'App FitTracker',
      description: 'Aplicativo mobile para acompanhamento de exercícios e metas de saúde.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Site Corporativo TechCorp',
      description: 'Website institucional responsivo com sistema de gerenciamento de conteúdo.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      category: 'website',
      technologies: ['Next.js', 'Tailwind', 'Strapi'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Dashboard Analytics Pro',
      description: 'Painel administrativo avançado com relatórios em tempo real e visualização de dados.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      category: 'dashboard',
      technologies: ['Vue.js', 'Chart.js', 'Laravel'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Loja Virtual GreenLife',
      description: 'E-commerce sustentável com sistema de marketplace e programa de fidelidade.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500',
      category: 'ecommerce',
      technologies: ['Shopify', 'React', 'GraphQL'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Portfolio Criativo',
      description: 'Site portfólio para artista digital com galeria interativa e animações personalizadas.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
      category: 'website',
      technologies: ['Three.js', 'GSAP', 'Nuxt.js'],
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'website', label: 'Websites' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'mobile', label: 'Apps Mobile' },
    { id: 'dashboard', label: 'Dashboards' }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Conheça alguns dos projetos que desenvolvemos com dedicação e excelência. 
            Cada solução foi pensada para superar expectativas e gerar resultados reais.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.link}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={20} className="text-gray-700" />
                  </a>
                  <a
                    href={project.github}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
                  Ver projeto completo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};