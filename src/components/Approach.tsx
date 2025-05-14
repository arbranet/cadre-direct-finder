
import { Button } from "@/components/ui/button";

const ApproachStep = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="flex mb-8 animate-on-scroll">
    <div className="mr-6">
      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-navy-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">Notre Méthode d'Approche Directe</h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre processus rigoureux de recrutement par approche directe nous permet d'identifier et d'attirer les meilleurs talents, même lorsqu'ils ne sont pas en recherche active d'opportunités.
            </p>
            
            <ApproachStep 
              number={1} 
              title="Analyse des Besoins" 
              description="Compréhension approfondie de votre entreprise, sa culture, et définition précise du profil recherché."
            />
            
            <ApproachStep 
              number={2} 
              title="Identification des Talents" 
              description="Cartographie du marché et repérage des candidats potentiels dans les entreprises cibles."
            />
            
            <ApproachStep 
              number={3} 
              title="Approche & Évaluation" 
              description="Contact discret et évaluation rigoureuse des compétences techniques et du savoir-être des candidats."
            />
            
            <ApproachStep 
              number={4} 
              title="Présentation & Intégration" 
              description="Présentation des candidats sélectionnés et accompagnement jusqu'à l'intégration réussie."
            />
            
            <div className="mt-10">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                <a href="/#contact">Discuter de votre projet</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-on-scroll flex items-center">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Approche directe" 
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="absolute top-10 -right-5 -z-10 w-full h-[500px] bg-blue-600 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
