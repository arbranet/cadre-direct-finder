
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais.",
        duration: 5000,
      });
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Contactez-Nous</h2>
          <p className="text-lg text-gray-600">
            Discutons de vos besoins en recrutement et de la façon dont nous pouvons vous aider à trouver les meilleurs talents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-800 mb-6">Envoyez-nous un message</h3>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <CheckCircle size={64} className="text-green-500 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Message envoyé !</h4>
                    <p className="text-gray-600">
                      Merci de nous avoir contactés. Notre équipe reviendra vers vous très prochainement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Entreprise *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          required
                          placeholder="Nom de l'entreprise"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Votre numéro de téléphone"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Décrivez votre besoin en recrutement..."
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isSubmitting ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">Téléphone</h4>
                    <p className="text-gray-700">
                      <a href="tel:0627851057" className="text-blue-600 hover:text-blue-800 transition-colors">
                        06.27.85.10.57
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">Email</h4>
                    <p className="text-gray-700">
                      <a href="mailto:contact@lykexecutive.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                        contact@lykexecutive.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Link className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">Site Web</h4>
                    <p className="text-gray-700">
                      <a 
                        href="http://lykexecutive.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        lykexecutive.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/256/174/174857.png" 
                      alt="LinkedIn" 
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">LinkedIn</h4>
                    <p className="text-gray-700">
                      <a 
                        href="https://www.linkedin.com/in/priscilla-lesyk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Priscilla Lesyk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
