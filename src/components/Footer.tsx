
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
                <a href="#services" className="hover:text-white transition-colors">Recrutement par Approche Directe</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Évaluation de Cadres</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Conseil en Organisation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Audit de Rémunération</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Secteurs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">BTP et Ingénierie</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Promotion immobilière</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Industrie</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Énergie et Environnement</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">Lyk Executive</p>
              <p className="mb-2">Tel: 06.27.85.10.57</p>
              <p className="mb-2">Email: contact@lykexecutive.com</p>
              <p className="mb-2">Site: <a href="https://lykexecutive.com" className="text-blue-400 hover:text-blue-300">lykexecutive.com</a></p>
              <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/priscilla-lesyk" className="text-blue-400 hover:text-blue-300">Priscilla Lesyk</a></p>
              <p>SIRET: 91444231400011</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Lyk Executive. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/mentions-legales#top" className="hover:text-white transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
