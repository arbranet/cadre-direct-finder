
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigation = (anchor: string) => {
    // Ferme le menu mobile si ouvert
    if (mobileMenuOpen) setMobileMenuOpen(false);
    
    // Si on est déjà sur la page d'accueil, on fait défiler jusqu'à l'ancre
    if (window.location.pathname === '/') {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, on navigue vers la page d'accueil puis on fait défiler
      navigate('/', { replace: true });
      // Attendre que la navigation soit terminée avant de faire défiler
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-navy-800" onClick={scrollToTop}>
            <span className="text-navy-800">Lyk</span>
            <span className="text-blue-600">Executive</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavigation('services')} 
            className="text-navy-800 hover:text-blue-600 transition-colors font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavigation('approach')} 
            className="text-navy-800 hover:text-blue-600 transition-colors font-medium"
          >
            Notre Approche
          </button>
          <button 
            onClick={() => handleNavigation('expertise')} 
            className="text-navy-800 hover:text-blue-600 transition-colors font-medium"
          >
            Expertise
          </button>
          <button 
            onClick={() => handleNavigation('about')} 
            className="text-navy-800 hover:text-blue-600 transition-colors font-medium"
          >
            À Propos
          </button>
          <a 
            href="https://www.linkedin.com/in/priscilla-lesyk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-navy-800 hover:text-blue-600 transition-colors" 
            aria-label="LinkedIn"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png" 
              alt="LinkedIn" 
              className="w-5 h-5"
            />
          </a>
          <Button 
            onClick={() => handleNavigation('contact')}
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Nous Contacter
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-navy-800">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavigation('services')} 
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('approach')} 
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
            >
              Notre Approche
            </button>
            <button 
              onClick={() => handleNavigation('expertise')} 
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
            >
              Expertise
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
            >
              À Propos
            </button>
            <a 
              href="https://www.linkedin.com/in/priscilla-lesyk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
            >
              <div className="flex items-center">
                <img 
                  src="https://cdn-icons-png.flaticon.com/256/174/174857.png" 
                  alt="LinkedIn" 
                  className="w-5 h-5 mr-2"
                />
                <span>LinkedIn</span>
              </div>
            </a>
            <Button 
              onClick={() => handleNavigation('contact')}
              variant="default" 
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
            >
              Nous Contacter
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
