import React from 'react';

const logos = [
  { src: '/logos/agrovector.png',            alt: 'Agrovector' },
  { src: '/logos/amaike.png',                alt: 'Amaike' },
  { src: '/logos/atalaya.png',               alt: 'Atalaya',          scale: 2,   origin: 'center' },
  { src: '/logos/auki.png',                  alt: 'Auki' },
  { src: '/logos/basilico.png',              alt: 'Basílico' },
  { src: '/logos/datastar.png',              alt: 'Datastar',          scale: 4,   origin: 'center' },
  { src: '/logos/historias-valle.png',       alt: 'Historias Valle' },
  { src: '/logos/hlc.png',                   alt: 'HLC' },
  { src: '/logos/mulen-hotel.png',           alt: 'Mulén Hotel' },
  { src: '/logos/pc21.png',                  alt: 'PC-21' },
  { src: '/logos/pico.png',                  alt: 'Pico' },
  { src: '/logos/plug.png',                  alt: 'Plug' },
  { src: '/logos/premin.png',                alt: 'Premin',            scale: 2.2, origin: 'top center' },
  { src: '/logos/real-estate-historias.png', alt: 'Real Estate' },
  { src: '/logos/nexus-sports.png',          alt: 'Nexus Sports' },
  { src: '/logos/faro-verde.jpeg',           alt: 'Grupo Faro Verde' },
  { src: '/logos/casa-blanco.jpg',           alt: 'Casa Blanco',       scale: 1.8, origin: 'center' },
  { src: '/logos/cat-parque-industrial.png', alt: 'CAT Parque Industrial' },
  { src: '/logos/pico-2.png',                alt: 'Pico Deportes' },
  { src: '/logos/galtech.png',               alt: 'Galtech' },
];

const Marquee: React.FC = () => {
  const track = [...logos, ...logos, ...logos];

  return (
    <div className="py-20 border-y border-gray-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-display text-3xl font-bold mb-4 text-gray-900">Empresas que confiaron en nosotros</h2>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee flex items-center gap-12 px-8 whitespace-nowrap">
          {track.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center overflow-hidden"
              style={{ width: '160px', height: '64px' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain transition-all duration-300"
                style={{
                  filter: 'grayscale(1) opacity(0.55)',
                  transform: logo.scale ? `scale(${logo.scale})` : undefined,
                  transformOrigin: logo.origin ?? 'center',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0) opacity(1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(1) opacity(0.55)')}
              />
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Marquee;
