
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Marie Dubois",
    role: "Directrice Générale",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    bio: "15 ans d'expérience dans le recrutement exécutif, spécialisée dans les secteurs Finance et Technologies.",
    linkedin: "#"
  },
  {
    name: "Thomas Martin",
    role: "Associé",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    bio: "Expert en recrutement de dirigeants pour l'industrie et les services professionnels, ancien DRH de groupe international.",
    linkedin: "#"
  },
  {
    name: "Sophie Laurent",
    role: "Directrice de Recherche",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    bio: "Spécialiste de l'identification de talents et de l'approche directe, avec un réseau étendu dans les secteurs tech et santé.",
    linkedin: "#"
  },
  {
    name: "Alexandre Bernard",
    role: "Consultant Senior",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    bio: "Expert en recrutement de profils digitaux et innovation, ancien directeur digital dans le secteur retail.",
    linkedin: "#"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Notre Équipe</h2>
          <p className="text-lg text-gray-600">
            Des consultants expérimentés, spécialistes dans leurs domaines, qui comprennent vos enjeux stratégiques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-60 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-700 hover:text-blue-800"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@execusearch.fr`} 
                      className="text-blue-700 hover:text-blue-800"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
