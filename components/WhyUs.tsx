import React from 'react';
import { motion } from "motion/react";

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

        <motion.h2
          className="font-display text-4xl lg:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ¿Por qué elegirnos?
        </motion.h2>

        <div className="relative">
          {/* Línea horizontal animada */}
          <motion.div
            className="hidden lg:block absolute top-[11px] left-0 h-px bg-gray-300 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ right: 0 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="w-[22px] h-[22px] rounded-full border-2 border-primary bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
