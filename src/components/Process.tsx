import React from 'react';
import { Edit3, Settings, Search, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const processSteps = [
    {
      id: '01',
      title: 'Planejamento do projeto',
      description: 'Grandes resultados não acontecem por acaso. No planejamento, mergulhamos no seu negócio para entender suas necessidades e criar um caminho estratégico sob medida. Cada detalhe é pensado para que você economize tempo, reduza custos e maximize resultados desde o início.',
      icon: Edit3,
      color: 'bg-blue-600'
    },
    {
      id: '02',
      title: 'Desenvolvimento',
      description: 'Transformamos ideias em soluções reais. Com foco em inovação e qualidade, nossa equipe desenvolve projetos personalizados que entregam valor imediato ao seu negócio. Aqui, não criamos apenas produtos, criamos experiências que fortalecem sua marca e geram crescimento.',
      icon: Settings,
      color: 'bg-purple-600'
    },
    {
      id: '03',
      title: 'Backtest & Execução',
      description: 'Estratégia testada é resultado garantido. Antes de qualquer ação, validamos nossas estratégias com análises e simulações práticas. Isso significa menos riscos e mais segurança para você. Quando chega a hora da execução, cada passo é dado com confiança e precisão.',
      icon: Search,
      color: 'bg-blue-600'
    },
    {
      id: '04',
      title: 'Lançamento & Suporte',
      description: 'Do lançamento ao pós-venda, você nunca estará sozinho. Acompanhamos cada etapa para garantir que seu projeto não apenas decole, mas continue crescendo com consistência. Nosso suporte é próximo, ágil e sempre focado em gerar resultados cada vez melhores.',
      icon: Rocket,
      color: 'bg-purple-600'
    }
  ];

  return (
    <section id="processo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossa linha de trabalho
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Do planejamento ao resultado: sua empresa em boas mãos
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
              
              <div className="relative p-8 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Large Number Background (hidden to keep layout) */}
                <div className="relative flex-shrink-0 hidden md:block">
                  <div className="text-8xl font-bold text-gray-100 select-none opacity-0" aria-hidden="true">
                    {step.id}
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`hidden md:flex absolute top-4 left-4 w-16 h-16 ${step.color} rounded-2xl items-center justify-center transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <step.icon className="text-white" size={28} />
                  </div>
                </div>

                {/* Icon Container (mobile) */}
                <div className={`md:hidden w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <step.icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <div className="flex-1 transform md:group-hover:translate-x-4 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full ${step.color} rounded-full transform -translate-x-full md:group-hover:translate-x-0 transition-transform duration-700 delay-200`}></div>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex-shrink-0 opacity-0 md:group-hover:opacity-100 transform translate-x-4 md:group-hover:translate-x-0 transition-all duration-500">
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
          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
            Leia mais →
          </button>
        </div>
      </div>
    </section>
  );
};