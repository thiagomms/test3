import { useState } from 'react';
import { Play, CheckCircle, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Soluções Digitais Inovadoras
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformamos sua
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> visão digital</span>
                em realidade
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Criamos experiências digitais excepcionais que conectam sua marca ao sucesso. 
                Desenvolvimento web, design e estratégias que geram resultados reais.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Sites Responsivos</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>E-commerce</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Apps Mobile</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Receba uma proposta gratuita
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitted ? 'Enviado!' : 'Quero minha proposta'}
                  {!isSubmitted && <ArrowRight size={16} />}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                📧 Resposta em até 24 horas • 100% gratuito
              </p>
            </form>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                alt="Equipe trabalhando em projetos digitais"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-colors group">
                <Play className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
              </button>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600">150+</div>
              <div className="text-sm text-gray-600">Projetos Entregues</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">5★</div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};