
import { Building } from "lucide-react";

const industries = [
  {
    name: "Technologies & Digital",
    icon: Building,
    roles: ["Directeur Technique", "Chief Digital Officer", "VP Produit"]
  },
  {
    name: "Industrie & Manufacturing",
    icon: Building,
    roles: ["Directeur des Opérations", "Directeur de Site", "Directeur Supply Chain"]
  },
  {
    name: "BTP",
    icon: Building,
    roles: ["Directeur de Travaux", "Directeur Technique", "Responsable de Projets"]
  },
  {
    name: "Immobilier",
    icon: Building,
    roles: ["Directeur du Développement", "Asset Manager", "Responsable de Programmes"]
  },
  {
    name: "Environnement",
    icon: Building,
    roles: ["Directeur RSE", "Responsable Développement Durable", "Ingénieur Environnement"]
  },
  {
    name: "Énergie",
    icon: Building,
    roles: ["Directeur de Projets", "Responsable Innovation", "Directeur Commercial"]
  },
  {
    name: "Distribution & Grande Consommation",
    icon: Building,
    roles: ["Directeur Commercial", "Directeur Marketing", "Directeur Category Management"]
  },
  {
    name: "Services Professionnels",
    icon: Building,
    roles: ["CEO/Associé", "Directeur des Talents", "Directeur du Développement"]
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Nos Secteurs d'Expertise</h2>
          <p className="text-lg text-gray-600">
            Nous sommes spécialisés dans le recrutement de cadres et dirigeants dans ces secteurs clés, avec une connaissance approfondie des enjeux spécifiques.
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
            Vous ne trouvez pas votre secteur ? Nous intervenons également dans d'autres domaines.
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
