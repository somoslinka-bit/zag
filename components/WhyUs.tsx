import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
  const points = [
    {
      title: "Visión estratégica con foco en resultados",
      description: "No hacemos contenido por hacer: generamos crecimiento y oportunidades reales."
    },
    {
      title: "Alineación total con tus objetivos comerciales",
      description: "Nuestro trabajo impacta directamente en consultas, leads y ventas."
    },
    {
      title: "Metodología clara y transparente",
      description: "Diagnóstico → Estrategia → Implementación → Optimización constante."
    },
    {
      title: "Equipo multidisciplinario",
      description: "Branding, contenido, publicidad, diseño, audiovisuales y más."
    },
    {
      title: "Acompañamiento real y comunicación continua",
      description: "Reuniones, reportes, soporte dedicado y disponibilidad ordenada."
    }
  ];

  return (
  <section className="py-24 bg-gray-100 text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16">
          ¿Por qué elegirnos?
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Horizontal connecting line */}
          <div className="hidden lg:block absolute top-[11px] left-0 right-0 h-px bg-gray-300" />

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {points.map((point, index) => (
              <div key={index} className="relative">

                {/* Dot + number */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="w-[22px] h-[22px] rounded-full border-2 border-primary bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    {point.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {point.description}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
);


          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">
              ¿Por qué elegirnos?
            </h2>
            <div className="space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{point.title}</h3>
                    <p className="text-gray-400 font-light">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
};

export default WhyUs;