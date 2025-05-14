import { Facebook, Twitter } from "lucide-react";

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
              Cabinet de recrutement spécialisé dans l'approche directe de cadres et dirigeants, partenaire de votre croissance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
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
                <a href="#expertise" className="hover:text-white transition-colors">Finance & Banque</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Technologies & Digital</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Industrie & Manufacturing</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Santé & Pharmaceutique</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">13 RUE DES ARQUEIRONS</p>
              <p className="mb-2">13500 CARRO MARTIGUES</p>
              <p className="mb-2">Tel: 06.27.85.10.57</p>
              <p className="mb-2">Email: contact@lykexecutive.com</p>
              <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/priscilla-lesyk" className="text-blue-400 hover:text-blue-300">Priscilla Lesyk</a></p>
              <p>SIRET: 91444231400011</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Lyk Executive. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
