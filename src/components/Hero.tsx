import React, { useState } from 'react';
import { Play, CheckCircle, ArrowRight, User, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNameField, setShowNameField] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Mostra o campo de nome quando o usuário começa a digitar o email
    if (value.length > 0 && !showNameField) {
      setShowNameField(true);
    } else if (value.length === 0) {
      setShowNameField(false);
      setName(''); // Limpa o nome se o email for apagado
      setPhone(''); // Limpa o telefone se o email for apagado
    }
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }
    // Limita a 11 dígitos
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você pode enviar os dados para sua API
    console.log('Proposta solicitada:', {
      email: email,
      nome: name || 'Não informado',
      telefone: phone || 'Não informado',
      data: new Date().toLocaleString('pt-BR')
    });
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowNameField(false);
    }, 3000);
    setEmail('');
    setName('');
    setPhone('');
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
                {' '}em realidade
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Criamos experiências digitais excepcionais que conectam sua marca ao sucesso. 
                Desenvolvimento web, design e estratégias que geram resultados reais.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Sites Corporativos</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Tráfego Pago</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Dashboards</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>AudioVisual</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Design</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Receba uma proposta gratuita
              </h3>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-3 pl-11 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                
                {/* Gaveta expansível com campos de nome e telefone */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showNameField ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-3">
                    <div className={`relative transition-all duration-300 ${showNameField ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 pl-11 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required={showNameField}
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    
                    <div className={`relative transition-all duration-300 delay-100 ${showNameField ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
                      <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Seu telefone (WhatsApp)"
                        className="w-full px-4 py-3 pl-11 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required={showNameField}
                      />
                      <i className="fab fa-whatsapp absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 ml-1">Para personalizarmos sua proposta e entrarmos em contato</p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      Proposta enviada!
                    </>
                  ) : (
                    <>
                      Quero minha proposta
                      <ArrowRight size={16} />
                    </>
                  )}
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
              <div className="text-2xl font-bold text-green-600">20+</div>
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