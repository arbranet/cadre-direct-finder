
import { Building, Construction, Factory, Briefcase, Leaf, LightbulbIcon, Computer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    name: "BTP et Ingénierie",
    icon: Construction,
    roles: ["Directeurs d'agences", "Directeurs techniques, directeurs équipements, Directeurs travaux", "Directeurs projets"]
  },
  {
    name: "Promotion immobilière et Habitat Social",
    icon: Building,
    roles: ["Directeur de la MOA", "Directeur du développement", "Directeur de programmes"]
  },
  {
    name: "Industrie",
    icon: Factory,
    roles: ["Directeur de site, directeur de production", "Directeur des opérations", "Directeur logistique"]
  },
  {
    name: "Services à l'industrie",
    icon: Briefcase,
    roles: ["Directeur installations", "Directeur maintenance", "Directeur exploitation"]
  },
  {
    name: "Environnement",
    icon: Leaf,
    roles: ["Directeur RSE", "Responsable Développement Durable", "Ingénieur environnement"]
  },
  {
    name: "Énergie",
    icon: LightbulbIcon,
    roles: ["Directeur de projets", "Responsable innovation", "Directeur business developpement"]
  },
  {
    name: "Technologies & Digital",
    icon: Computer,
    roles: ["Directeur Technique", "Chief Digital Officer", "VP Produit"]
  }
];

// List of positions to display with their categories
const positions = [
  { name: "Direction des ressources humaines", category: "Support" },
  { name: "Direction financière", category: "Support" },
  { name: "M&A", category: "Support" },
  { name: "Direction juridique", category: "Support" },
  { name: "Direction commerciale", category: "Business" },
  { name: "Directeur marketing et Digital", category: "Business" },
  { name: "Directeur communication", category: "Business" },
  { name: "Direction achats", category: "Operations" },
  { name: "DSI", category: "Operations" },
  { name: "Direction supply chain", category: "Operations" },
  { name: "Direction technique", category: "Operations" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Nos Secteurs d'Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous sommes spécialisés dans le recrutement de cadres et dirigeants, tant sur des fonctions supports que des fonctions métiers.
          </p>
          
          {/* New position display as cards with categories */}
          <div className="mt-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-blue-50/50 border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-blue-700 mb-3">Fonctions Support</h3>
                  <div className="flex flex-wrap gap-2">
                    {positions.filter(p => p.category === "Support").map((position, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-navy-800 text-sm border border-blue-100 shadow-sm">
                        {position.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50/50 border border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-green-700 mb-3">Fonctions Business</h3>
                  <div className="flex flex-wrap gap-2">
                    {positions.filter(p => p.category === "Business").map((position, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-navy-800 text-sm border border-green-100 shadow-sm">
                        {position.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-amber-50/50 border border-amber-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-amber-700 mb-3">Fonctions Opérationnelles</h3>
                  <div className="flex flex-wrap gap-2">
                    {positions.filter(p => p.category === "Operations").map((position, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-navy-800 text-sm border border-amber-100 shadow-sm">
                        {position.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mt-4">
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
