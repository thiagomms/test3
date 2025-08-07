import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ProjectDetails } from './components/ProjectDetails';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  const handleNavigate = (section: string) => {
    // Se estiver nos detalhes do projeto, volta para home primeiro
    if (selectedProject) {
      setSelectedProject(null);
      // Aguarda o componente renderizar antes de fazer o scroll
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estiver na home, apenas faz o scroll
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} onNavigate={handleNavigate} />
      {selectedProject ? (
        <>
          <ProjectDetails projectId={selectedProject} onBack={handleBackToPortfolio} />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <About />
          <Portfolio onProjectClick={handleProjectClick} />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;