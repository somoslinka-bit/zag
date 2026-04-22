import React from 'react';

const Marquee: React.FC = () => {
  const companies = [
    "TECHFLOW", "NEXUS", "GLOBEX", "UMBRELLA CORP", "STARK", "WAYNE",
    "CYBERDYNE", "MASSIVE", "SOYLENT", "TYRELL", "OSCORP"
  ];

  return (
    <div className="py-20 border-y border-gray-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-display text-3xl font-bold mb-4 text-gray-900">Clientes y Experiencia</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
          Empresas, pymes y profesionales de distintos rubros confían en ZAG para potenciar su comunicación y lograr resultados medibles.
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center space-x-16 px-4">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <span 
              key={index} 
              className="text-4xl font-display font-bold text-gray-200 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
        
        {/* Fade gradients */}
        <div className="absolute left-0 top-16 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-16 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Marquee;