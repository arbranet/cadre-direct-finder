
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90 z-0" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')" 
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Recrutement de Cadres et Dirigeants par <span className="text-blue-400">Approche Directe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Nous identifions et approchons les meilleurs talents pour vos postes stratégiques grâce à notre expertise et notre méthode d'approche directe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("services")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              Découvrir Nos Services
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="bg-white/10 text-white hover:bg-white/20 border-white/30 px-8 py-6 text-lg"
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <button onClick={() => scrollToSection("services")} className="flex flex-col items-center">
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
