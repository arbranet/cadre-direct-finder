
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About"; // Added import for About component
import Approach from "@/components/Approach";
import Expertise from "@/components/Expertise";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimation();
    
    // Clean up event listener on component unmount
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About /> {/* Added About component */}
      <Approach />
      <Expertise />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
