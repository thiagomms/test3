
import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onNavigate?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, onNavigate }) => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(section);
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/aulink-logo.png" 
              alt="AuLink Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => onNavigate?.('contato')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Fale Conosco
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
              <button 
                onClick={() => onNavigate?.('contato')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Fale Conosco
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};