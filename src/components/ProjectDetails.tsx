import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dados do projeto (normalmente viria de uma API ou contexto)
  const projectData = {
    '1': {
      title: 'E-commerce ModaStyle',
      subtitle: 'Plataforma completa de vendas online com sistema de pagamento integrado e gestão de estoque.',
      category: 'E-commerce',
      client: 'ModaStyle Boutique',
      date: '15 de Janeiro, 2024',
      url: 'https://modastyle.com.br',
      github: 'https://github.com/digitalstudio/modastyle',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800'
      ],
      description: `O projeto E-commerce ModaStyle foi desenvolvido para revolucionar a experiência de compra online da boutique. 
      
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
        text: "A DigitalStudio superou todas as nossas expectativas. O e-commerce não apenas ficou lindo, mas também trouxe resultados incríveis para nosso negócio.",
        author: "Maria Silva",
        role: "CEO da ModaStyle Boutique",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
      }
    },
    '2': {
      title: 'App FitTracker',
      subtitle: 'Aplicativo mobile para acompanhamento de exercícios e metas de saúde.',
      category: 'Mobile App',
      client: 'FitLife Academy',
      date: '22 de Março, 2024',
      url: 'https://fittracker.app',
      github: 'https://github.com/digitalstudio/fittracker',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        'https://images.unsplash.com/photo-1434596922112-19c563067271?w=800',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800'
      ],
      description: `O FitTracker é um aplicativo mobile completo para acompanhamento de atividades físicas e metas de saúde. 
      
      Desenvolvido com foco na experiência do usuário, o app oferece ferramentas intuitivas para monitoramento de exercícios, nutrição e progresso pessoal.`,
      
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
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8">
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <button onClick={onBack} className="hover:text-blue-600">Home</button>
          <span>/</span>
          <span className="text-gray-900">Detalhes do Projeto</span>
        </nav>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 mb-12">
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          
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

      {/* Project Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Principais Funcionalidades</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desafios e Soluções</h3>
              <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Resultados Alcançados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-800 font-medium">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-2xl text-blue-600 mb-4">"</div>
              <p className="text-lg text-gray-700 italic mb-6">{project.testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{project.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Informações do Projeto</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Tag size={16} className="mr-2" />
                    <span className="text-sm font-medium">CATEGORIA</span>
                  </div>
                  <div className="text-gray-900">{project.category}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <User size={16} className="mr-2" />
                    <span className="text-sm font-medium">CLIENTE</span>
                  </div>
                  <div className="text-gray-900">{project.client}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">DATA DO PROJETO</span>
                  </div>
                  <div className="text-gray-900">{project.date}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Globe size={16} className="mr-2" />
                    <span className="text-sm font-medium">URL DO PROJETO</span>
                  </div>
                  <a href={project.url} className="text-blue-600 hover:text-blue-700 break-all">
                    {project.url}
                  </a>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Visitar Website
                </a>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Github size={16} />
                  Ver no GitHub
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Vamos criar algo incrível para o seu negócio também!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
  );
};