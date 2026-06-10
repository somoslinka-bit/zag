'use client'
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
    <section className="py-24 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.h2
          className="font-display text-4xl lg:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ¿Por qué elegirnos?
        </motion.h2>

        <div className="space-y-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: '#FF4500' }} />
              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
