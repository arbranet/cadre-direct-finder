
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-navy-800">
            <span className="text-navy-800">Lyk</span>
            <span className="text-blue-600">Executive</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-navy-800 hover:text-blue-600 transition-colors font-medium">
            Services
          </a>
          <a href="#approach" className="text-navy-800 hover:text-blue-600 transition-colors font-medium">
            Notre Approche
          </a>
          <a href="#expertise" className="text-navy-800 hover:text-blue-600 transition-colors font-medium">
            Expertise
          </a>
          <Button 
            asChild 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href="#contact">Nous Contacter</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-navy-800">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#approach" 
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notre Approche
            </a>
            <a 
              href="#expertise" 
              className="text-navy-800 hover:text-blue-600 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </a>
            <Button 
              asChild 
              variant="default" 
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">Nous Contacter</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
