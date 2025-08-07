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

  if (selectedProject) {
    return <ProjectDetails projectId={selectedProject} onBack={handleBackToPortfolio} />;
  }

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Portfolio onProjectClick={handleProjectClick} />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;