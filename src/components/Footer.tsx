
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="ml-3 text-xl font-bold">DigitalStudio</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos ideias em soluções digitais inovadoras. 
              Somos seu parceiro ideal para levar seu negócio ao próximo nível digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apps Mobile</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consultoria Digital</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={18} className="text-blue-400 mr-3" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-blue-400 mr-3" />
                <span className="text-gray-300">contato@digitalstudio.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-blue-400 mr-3" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-300">
                Receba dicas exclusivas e novidades do mundo digital
              </p>
            </div>
            <div className="lg:w-1/2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 DigitalStudio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};