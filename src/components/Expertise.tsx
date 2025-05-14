
import { Building } from "lucide-react";

const industries = [
  {
    name: "BTP et Ingénierie",
    icon: Building,
    roles: ["Directeurs d'agences", "Directeurs techniques, directeurs équipements, Directeurs travaux", "Directeurs projets"]
  },
  {
    name: "Promotion immobilière et Habitat Social",
    icon: Building,
    roles: ["Directeur de la MOA", "Directeur du développement", "Directeur de programmes"]
  },
  {
    name: "Industrie",
    icon: Building,
    roles: ["Directeur de site, directeur de production", "Directeur des opérations", "Directeur logistique"]
  },
  {
    name: "Services à l'industrie",
    icon: Building,
    roles: ["Directeur installations", "Directeur maintenance", "Directeur exploitation"]
  },
  {
    name: "Environnement",
    icon: Building,
    roles: ["Directeur RSE", "Responsable Développement Durable", "Ingénieur environnement"]
  },
  {
    name: "Énergie",
    icon: Building,
    roles: ["Directeur de projets", "Responsable innovation", "Directeur business developpement"]
  },
  {
    name: "Technologies & Digital",
    icon: Building,
    roles: ["Directeur Technique", "Chief Digital Officer", "VP Produit"]
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Nos Secteurs d'Expertise</h2>
          <p className="text-lg text-gray-600">
            Nous sommes spécialisés dans le recrutement de cadres et dirigeants, tant sur des fonctions supports et que des fonctions métiers.
            Direction des ressources humaines, Direction financière, M&A, Direction juridique, direction commerciale, Directeur marketing et Digital,
            directeur communication Direction achats, DSI, Direction supply chain, Direction technique.
            Nous intervenons dans les secteurs suivants avec une connaissance approfondie des enjeux :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {industries.map((industry, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <industry.icon size={24} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Votre recherche concerne un autre secteur / une fonction spécifique : contactez nous, nous évaluerons ensemble la faisabilité du projet
          </p>
          <a href="#contact" className="text-blue-600 font-medium text-lg hover:underline">
            Contactez-nous pour en discuter →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
