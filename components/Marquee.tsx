import React from 'react';

const logos = [
  { src: '/logos/7.jpg',                     alt: 'Cliente' },
  { src: '/logos/7%20(1).jpg',               alt: 'Cliente' },
  { src: '/logos/8.jpg',                     alt: 'Cliente' },
  { src: '/logos/9.jpg',                     alt: 'Cliente' },
  { src: '/logos/10.jpg',                    alt: 'Cliente' },
  { src: '/logos/11.jpg',                    alt: 'Cliente' },
  { src: '/logos/12.jpg',                    alt: 'Cliente' },
  { src: '/logos/13.jpg',                    alt: 'Cliente' },
  { src: '/logos/14.jpg',                    alt: 'Cliente' },
  { src: '/logos/15.jpg',                    alt: 'Cliente' },
  { src: '/logos/16.jpg',                    alt: 'Cliente' },
  { src: '/logos/17.jpg',                    alt: 'Cliente' },
  { src: '/logos/18.jpg',                    alt: 'Cliente' },
  { src: '/logos/19.jpg',                    alt: 'Cliente' },
  { src: '/logos/20.jpg',                    alt: 'Cliente' },
  { src: '/logos/21.jpg',                    alt: 'Cliente' },
  { src: '/logos/22.jpg',                    alt: 'Cliente' },
  { src: '/logos/23.jpg',                    alt: 'Cliente' },
  { src: '/logos/24.jpg',                    alt: 'Cliente' },
  { src: '/logos/real-estate-historias.png', alt: 'Cliente' },
];

const Marquee: React.FC = () => {
  const track = [...logos, ...logos, ...logos];

  return (
    <div className="py-20 border-y border-gray-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-display text-3xl font-bold mb-4 text-gray-900">Empresas que confiaron en nosotros</h2>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee flex items-center gap-2 px-2 whitespace-nowrap">
          {track.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center overflow-hidden"
              style={{ width: '480px', height: '192px' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain transition-all duration-300"
                style={{ filter: 'grayscale(1) opacity(0.55)' }}
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
