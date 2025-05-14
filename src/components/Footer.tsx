
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  const handleNavigation = (anchor: string) => {
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
  
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-white">Lyk</span>
              <span className="text-blue-400">Executive</span>
            </h3>
            <p className="mb-4">
              Votre Conseil en recrutement spécialisé dans l'approche directe de Cadres et Dirigeants, partenaire de vos transformations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/priscilla-lesyk" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <img 
                  src="https://cdn-icons-png.flaticon.com/256/174/174857.png" 
                  alt="LinkedIn" 
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('services')} className="hover:text-white transition-colors">Recrutement par Approche Directe</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('services')} className="hover:text-white transition-colors">Évaluation de Cadres</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('services')} className="hover:text-white transition-colors">Conseil en Organisation</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('services')} className="hover:text-white transition-colors">Audit de Rémunération</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Secteurs</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('expertise')} className="hover:text-white transition-colors">BTP et Ingénierie</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('expertise')} className="hover:text-white transition-colors">Promotion immobilière</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('expertise')} className="hover:text-white transition-colors">Industrie</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('expertise')} className="hover:text-white transition-colors">Services à l'industrie</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('expertise')} className="hover:text-white transition-colors">Énergie et Environnement</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">Lyk Executive</p>
              <p className="mb-2">Tel: <a href="tel:0627851057" className="hover:text-white transition-colors">06.27.85.10.57</a></p>
              <p className="mb-2">Email: <a href="mailto:contact@lykexecutive.com" className="hover:text-white transition-colors">contact@lykexecutive.com</a></p>
              <p className="mb-2">Site: <a href="http://lykexecutive.com" className="text-blue-400 hover:text-blue-300">lykexecutive.com</a></p>
              <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/priscilla-lesyk" className="text-blue-400 hover:text-blue-300">Priscilla Lesyk</a></p>
              <p>SIRET: 91444231400011</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Lyk Executive. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <Link 
              to="/mentions-legales" 
              className="hover:text-white transition-colors"
              onClick={() => {
                // Force scroll to top after navigation
                window.scrollTo(0, 0);
              }}
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
