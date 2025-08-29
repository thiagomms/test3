import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '20+', label: 'Clientes Satisfeitos' },
    { icon: Award, value: '120+', label: 'Projetos Concluídos' },
    { icon: Clock, value: '3+', label: 'Anos de Experiência' },
    { icon: Target, value: '98%', label: 'Taxa de Satisfação' },
  ];

  type ValueItem = {
    title: string;
    description: string;
    icon: LucideIcon;
  };

  const values: ValueItem[] = [
    {
      title: 'Inovação Constante',
      description: 'Sempre atualizados com as últimas tecnologias e tendências do mercado digital.',
      icon: Target
    },
    {
      title: 'Qualidade Premium',
      description: 'Cada projeto é desenvolvido com máxima atenção aos detalhes e padrões de excelência.',
      icon: Award
    },
    {
      title: 'Suporte Dedicado',
      description: 'Acompanhamento completo do projeto antes, durante e após a entrega dos resultados',
      icon: Users
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-blue-600">AuLink</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Somos uma equipe apaixonada por tecnologia, marketing e estratégia de alavancagem, dedicada a criar soluções digitais que transformam negócios e conectam pessoas. Nossa missão é levar sua empresa para o próximo nível digital.
          </p>
        </div>

        {/* Stats (comentado por solicitação) */}
        {false && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
              alt="Equipe colaborativa trabalhando"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nossos Valores e Diferenciais
            </h3>
            
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-blue-600" size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};