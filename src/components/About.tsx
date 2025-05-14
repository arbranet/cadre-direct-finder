
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4 animate-on-scroll">
            À Propos
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center animate-on-scroll">
          {/* Founder's Image Column */}
          <div className="flex flex-col items-center">
            <Avatar className="w-60 h-60 border-4 border-white shadow-lg mb-6">
              <AvatarImage 
                src="https://media.licdn.com/dms/image/v2/C4D03AQEIs4sPe0ka8A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1547736854977?e=1752710400&v=beta&t=JRxbe8RMkdaQBMZRGtYtvVg9mwcAtCN56SOJF72bTP4" 
                alt="Priscilla Lesyk" 
              />
              <AvatarFallback>PL</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold text-navy-800">Priscilla Lesyk</h3>
            <p className="text-blue-600">Fondatrice</p>
            <Button 
              asChild 
              variant="outline" 
              className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <a 
                href="https://www.linkedin.com/in/priscilla-lesyk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/256/174/174857.png" 
                  alt="LinkedIn" 
                  className="w-5 h-5 mr-2"
                />
                <span>Voir profil LinkedIn</span>
              </a>
            </Button>
          </div>
          
          {/* Founder's Text Column */}
          <div className="lg:col-span-2">
            <p className="text-gray-700 mb-6">
              Avec 25 ans d'expérience dans la recherche et la sélection de cadres et dirigeants, j'accompagne Groupes, PME et ETI 
              de la définition de leurs besoins de recrutement jusqu'à l'intégration réussie de leurs nouveaux talents. 
              Mon approche, fondée sur le pragmatisme et la transparence, s'appuie sur :
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong className="text-navy-800">Un diagnostic précis</strong>, construit en étroite collaboration avec vos équipes dirigeantes pour cerner vos enjeux stratégiques.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong className="text-navy-800">Une chasse de talents sur-mesure</strong>, grâce à un réseau national et international et à des méthodes de sourcing direct éprouvées.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong className="text-navy-800">Une sélection rigoureuse</strong>, via des entretiens structurés, des tests comportementaux et une évaluation fine de la motivation et du leadership.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong className="text-navy-800">Un accompagnement à l'intégration</strong>, avec un plan d'onboarding personnalisé et des points de suivi réguliers pour assurer la réussite durable de chaque prise de poste.
                </p>
              </li>
            </ul>
            
            <p className="text-gray-700 mb-6">
              Discrétion, communication régulière et esprit de collaboration guident chacun de mes engagements, 
              avec pour objectif de vous faire gagner en performance et en sérénité.
            </p>
            
            <p className="text-gray-700 mb-6">
              <strong className="text-navy-800">Spécialités :</strong> Conseil en ressources humaines – Chasse de cadres et dirigeants – 
              Coaching de prise de fonction – Onboarding personnalisé.
            </p>
            
            <p className="text-navy-800 font-semibold">
              Contactez-moi pour définir ensemble la stratégie de recrutement qui répondra à vos ambitions.
            </p>
            
            <Button 
              asChild 
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a href="#contact">Nous Contacter</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
