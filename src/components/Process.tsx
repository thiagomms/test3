import { Edit3, Settings, Search, Rocket } from 'lucide-react';

export const Process = () => {
  const processSteps = [
    {
      id: '01',
      title: 'Descoberta & Planejamento',
      description: 'Mergulhamos no seu negócio para entender seus objetivos, desafios e oportunidades. Criamos um plano estratégico detalhado que guiará todo o desenvolvimento do projeto.',
      icon: Edit3,
      color: 'bg-blue-600'
    },
    {
      id: '02',
      title: 'Design & Desenvolvimento',
      description: 'Transformamos ideias em realidade com design moderno e código limpo. Utilizamos as melhores tecnologias do mercado para criar soluções rápidas, seguras e escaláveis.',
      icon: Settings,
      color: 'bg-purple-600'
    },
    {
      id: '03',
      title: 'Testes & Otimização',
      description: 'Realizamos testes rigorosos para garantir qualidade e performance excepcionais. Cada detalhe é refinado para proporcionar a melhor experiência aos seus usuários.',
      icon: Search,
      color: 'bg-blue-600'
    },
    {
      id: '04',
      title: 'Lançamento & Crescimento',
      description: 'Acompanhamos o lançamento e fornecemos suporte contínuo. Monitoramos métricas, implementamos melhorias e ajudamos seu projeto a crescer constantemente.',
      icon: Rocket,
      color: 'bg-purple-600'
    }
  ];

  return (
    <section id="processo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-blue-600">Processo de Trabalho</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimos uma metodologia comprovada que garante resultados excepcionais. 
            Cada etapa é cuidadosamente planejada para entregar o máximo valor ao seu negócio.
          </p>
        </div>

        {/* Process Steps - Drawer Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8 flex items-center space-x-8">
                {/* Large Number Background */}
                <div className="relative flex-shrink-0">
                  <div className="text-8xl font-bold text-gray-100 select-none group-hover:text-gray-200 transition-colors duration-300">
                    {step.id}
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`absolute top-4 left-4 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <step.icon className="text-white" size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 transform group-hover:translate-x-4 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full ${step.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-200`}></div>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-8 h-8 border-2 border-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a 
            href="#portfolio"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
          >
            Ver Nossos Projetos →
          </a>
        </div>
      </div>
    </section>
  );
};