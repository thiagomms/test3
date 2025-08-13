import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsDetails } from '../data/projectsDetails';

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectDetails = ({ projectId, onBack }: ProjectDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll para o topo quando o componente for montado
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Função para verificar se é um vídeo
  const isVideo = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  // Função para verificar se é um GIF
  const isGif = (url: string) => {
    return url.toLowerCase().endsWith('.gif');
  };

  // Usando dados importados
  const project = projectsDetails[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projeto não encontrado</h2>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar ao Portfolio
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Project Header Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar ao Portfolio
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Detalhes do Projeto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça todos os detalhes, desafios e resultados deste projeto desenvolvido com excelência.
            </p>
          </div>
        </div>
      </div>

      {/* Media Gallery */}
      <div className="container mx-auto px-4 mb-12">
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
          {isVideo(project.images[currentImageIndex] || '') ? (
            <video
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              className="w-full h-96 lg:h-[500px] object-contain bg-black"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              Seu navegador não suporta vídeos HTML5.
            </video>
          ) : (
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Mídia ${currentImageIndex + 1}`}
              className={`w-full h-96 lg:h-[500px] ${
                isGif(project.images[currentImageIndex] || '') 
                  ? 'object-contain bg-white' 
                  : 'object-cover'
              }`}
            />
          )}
          
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{project.title}</h2>
            <p className="text-xl text-gray-600">{project.subtitle}</p>
          </div>

          {/* Meta Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center text-blue-600 mb-2">
                <Tag size={20} className="mr-2" />
                <span className="font-medium">Categoria</span>
              </div>
              <p className="text-gray-700">{project.category}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center text-blue-600 mb-2">
                <User size={20} className="mr-2" />
                <span className="font-medium">Cliente</span>
              </div>
              <p className="text-gray-700">{project.client}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center text-blue-600 mb-2">
                <Calendar size={20} className="mr-2" />
                <span className="font-medium">Data</span>
              </div>
              <p className="text-gray-700">{project.date}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center text-blue-600 mb-2">
                <Globe size={20} className="mr-2" />
                <span className="font-medium">Website</span>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                Ver ao vivo
              </a>
            </div>
          </div>

          {/* Technologies - Comentado
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          */}

          {/* Description */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sobre o Projeto</h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              {project.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Funcionalidades Principais</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Desafios e Soluções</h3>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <p className="text-gray-700 text-lg leading-relaxed">{project.challenges}</p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Resultados Alcançados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium text-lg">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 p-8 lg:p-12 rounded-2xl">
            <div className="flex items-start mb-6">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium mb-8 italic">
              "{project.testimonial.text}"
            </blockquote>
            
            <div className="flex items-center">
              <img
                src={project.testimonial.avatar}
                alt={project.testimonial.author}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold text-gray-900 text-lg">{project.testimonial.author}</p>
                <p className="text-gray-600">{project.testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-medium"
            >
              <ExternalLink size={20} />
              Ver Projeto ao Vivo
            </a>
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors flex items-center gap-2 text-lg font-medium"
              >
                <Github size={20} />
                Ver Código no GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <button
              onClick={onBack}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Voltar ao Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
