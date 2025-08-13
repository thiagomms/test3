import { useState } from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioProjects';
import { categories } from '../data/categories';

interface PortfolioProps {
  onProjectClick?: (projectId: string) => void;
}

export const Portfolio = ({ onProjectClick }: PortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Função para verificar se é um vídeo
  const isVideo = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  // Usando dados importados
  const projects = portfolioProjects;

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
                {isVideo(project.image) ? (
                  <video
                    src={project.image}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => onProjectClick?.(project.id.toString())}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                  >
                    <Eye size={20} className="text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tecnologias comentadas
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
                */}
                
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
                  <span onClick={() => onProjectClick?.(project.id.toString())}>Ver projeto completo</span>
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