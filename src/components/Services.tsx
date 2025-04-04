
import { Search, Users, Briefcase, Award, TrendingUp, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Recherche Ciblée",
    description: "Identification précise des talents correspondant aux besoins spécifiques de votre entreprise."
  },
  {
    icon: Briefcase,
    title: "Approche Directe",
    description: "Contact discret et professionnel des candidats en poste, même s'ils ne sont pas en recherche active."
  },
  {
    icon: Users,
    title: "Évaluation Approfondie",
    description: "Analyse rigoureuse des compétences techniques et du potentiel d'intégration culturelle des candidats."
  },
  {
    icon: Award,
    title: "Accompagnement Complet",
    description: "Suivi personnalisé tout au long du processus de recrutement jusqu'à l'intégration du candidat."
  },
  {
    icon: TrendingUp,
    title: "Conseil Stratégique",
    description: "Recommandations sur la structure organisationnelle et les besoins en compétences pour votre croissance."
  },
  {
    icon: Check,
    title: "Garantie de Résultat",
    description: "Engagement sur la qualité de nos prestations avec une garantie de remplacement selon nos conditions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Nos Services de Recrutement</h2>
          <p className="text-lg text-gray-600">
            Une approche sur mesure pour identifier et attirer les meilleurs dirigeants et cadres supérieurs pour votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                    <service.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
