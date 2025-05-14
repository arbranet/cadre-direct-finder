
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const LegalNotices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Full-width colored band with contrasting text */}
      <div className="w-full bg-navy-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Mentions légales</h1>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Informations éditeur</h2>
            <p className="mb-3">
              Le site https://lykexecutive.com est la propriété de la société LYK EXECUTIVE, SASU au capital de 1 000 €, immatriculée au Registre du Commerce et des Sociétés d'Aix-en-Provence sous le numéro 914 442 314 R.C.S., dont le siège social est situé au 13 Rue des Arqueirons, 13500 Martigues, France.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Numéro SIREN : 914 442 314</li>
              <li>Numéro SIRET (siège) : 914 442 314 00011</li>
              <li>Numéro de TVA intracommunautaire : FR17 914442314</li>
              <li>Date de création : 02/06/2022</li>
              <li>Dirigeant et responsable de la publication : Priscilla Lesyk</li>
              <li><a href="https://www.pappers.fr/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Pappers</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Hébergement</h2>
            <p className="mb-3">Le site est hébergé par :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vercel Inc.</li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>Site : <a href="https://vercel.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
              <li><a href="https://dos.sunbiz.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Sunbiz</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Contact</h2>
            <p className="mb-3">
              Pour toute question ou demande d'information, vous pouvez nous contacter à l'adresse :
              <a href="mailto:contact@lykexecutive.com" className="text-blue-600 hover:underline ml-1">contact@lykexecutive.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Propriété intellectuelle</h2>
            <p className="mb-3">
              L'ensemble des contenus (textes, images, éléments graphiques, logo, icônes, vidéos, sons, logiciels…) présents sur ce site est protégé par le droit d'auteur, le droit des marques et le droit des bases de données. Toute reproduction, représentation, distribution, modification, adaptation ou traduction, partielle ou intégrale, par quelque procédé que ce soit, est strictement interdite sans l'autorisation préalable écrite de LYK EXECUTIVE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Données personnelles</h2>
            <p className="mb-3">
              Les traitements de données à caractère personnel mis en œuvre sur le site respectent la réglementation en vigueur (RGPD et loi « Informatique et Libertés »). Pour plus d'informations, veuillez consulter notre Politique de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Liens hypertextes</h2>
            <p className="mb-3">
              Les liens hypertextes dirigent vers des sites externes sur lesquels LYK EXECUTIVE n'exerce aucun contrôle. L'éditeur décline toute responsabilité quant au contenu de ces sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-navy-800 mb-3">Cookies</h2>
            <p className="mb-3">
              Le site utilise des cookies nécessaires à son fonctionnement et, sous réserve de votre consentement préalable, des cookies de mesure d'audience et de ciblage. Vous pouvez à tout moment gérer vos préférences via la bannière dédiée ou les paramètres de votre navigateur.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LegalNotices;
